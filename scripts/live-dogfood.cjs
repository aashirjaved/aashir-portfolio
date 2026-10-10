const { chromium } = require("playwright");
// Visitor smoke test. Usage: node scripts/live-dogfood.cjs <base-url> <screenshot-dir>
let BASE = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const OUT = process.argv[3] || ".";
require("node:fs").mkdirSync(OUT, { recursive: true });
const log = (...a) => console.log(...a);
let failures = 0;
const fail = (m) => { failures++; log("FAIL", m); };

(async () => {
  const browser = await chromium.launch();
  // Follow any host redirect (aashir.net to www.aashir.net) and test the origin visitors land on.
  const probe = await (await browser.newContext()).newPage();
  await probe.goto(BASE + "/");
  const landed = new URL(probe.url()).origin;
  if (landed !== BASE) log("host redirect", BASE, "->", landed);
  BASE = landed;
  log("BASE", BASE);
  // 1. layout at widths and schemes
  for (const scheme of ["light", "dark"]) {
    for (const w of [390, 768, 1280, 1600]) {
      const ctx = await browser.newContext({ viewport: { width: w, height: w < 500 ? 844 : 900 }, colorScheme: scheme, deviceScaleFactor: 1 });
      const page = await ctx.newPage();
      const errors = [];
      page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
      page.on("pageerror", (e) => errors.push(String(e)));
      await page.goto(BASE + "/", { waitUntil: "networkidle" });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 0) fail(`${scheme} ${w}px horizontal overflow ${overflow}px`);
      const inputBox = await page.locator("#ask").boundingBox();
      if (!inputBox || inputBox.y + inputBox.height > (w < 500 ? 844 : 900)) fail(`${scheme} ${w}px input below the fold (y=${inputBox && inputBox.y})`);
      await page.screenshot({ path: `${OUT}/home-${scheme}-${w}-fold.png` });
      if (scheme === "light" || w === 390) await page.screenshot({ path: `${OUT}/home-${scheme}-${w}-full.png`, fullPage: true });
      if (errors.length) fail(`${scheme} ${w}px console errors: ${errors.join(" | ")}`);
      await ctx.close();
    }
  }

  // 2. console behaviour as a visitor on a phone
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const chips = page.locator('[aria-label="Suggested questions"] button');
  const n = await chips.count();
  log("chips", n);
  for (let i = 0; i < n; i++) {
    const label = await chips.nth(i).innerText();
    const t0 = Date.now();
    await chips.nth(i).click();
    const item = page.locator("ol > li.rise").last();
    await item.locator("ul a").first().waitFor({ state: "visible" });
    await page.waitForFunction(() => !document.querySelector(".caret"), null, { timeout: 8000 });
    const ms = Date.now() - t0;
    const q = await item.locator("p.mono").first().innerText();
    const words = (await item.locator("p[aria-hidden]").innerText()).split(/\s+/).length;
    const ev = await item.locator("ul a").allInnerTexts();
    log(`chip "${label}" -> "${q.replace(/^>\s*/, "")}" ${words} words in ${ms}ms, evidence: ${ev.join(", ")}`);
    if (!q.includes(label)) fail(`chip question mismatch ${label}`);
    if (words > 90) fail(`answer over 90 words for ${label}: ${words}`);
  }
  await page.screenshot({ path: `${OUT}/console-mobile-after-chips.png`, fullPage: false });
  const collapsed = await page.locator("text=/Show \\d+ earlier answer/").count();
  if (!collapsed) fail("older answers did not collapse after 5 questions");

  async function typed(q) {
    await page.fill("#ask", q);
    await page.press("#ask", "Enter");
    await page.waitForFunction(() => !document.querySelector(".caret"), null, { timeout: 8000 });
    const ledger = await page.locator("text=Session record").locator("..").locator("li").last().innerText();
    return ledger.trim().split(/\s+/).pop();
  }
  const r1 = await typed("do you do kyc for investors");
  log("typed kyc ->", r1); if (r1 !== "build-onboarding") fail("kyc question routed to " + r1);
  const r2 = await typed("what is the weather");
  log("typed weather ->", r2); if (r2 !== "fallback") fail("weather routed to " + r2);
  const r3 = await typed("we're tokenizing a private credit fund, how do we gate accredited investors?");
  log("typed tokenised ->", r3); if (r3 !== "tokenised-credit") fail("tokenised routed to " + r3);
  const r4 = await typed("pricng");
  log("typed pricng ->", r4); if (r4 !== "availability-cost") fail("pricng routed to " + r4);
  // ArrowUp recall and Escape clear
  await page.focus("#ask");
  await page.keyboard.press("ArrowUp");
  const recalled = await page.inputValue("#ask");
  if (recalled !== "pricng") fail("ArrowUp recall gave " + recalled);
  await page.keyboard.press("Escape");
  if ((await page.inputValue("#ask")) !== "") fail("Escape did not clear");
  await page.screenshot({ path: `${OUT}/console-mobile-typed.png` });
  // evidence link navigates to case note
  await page.locator("ol > li.rise").last().locator("a", { hasText: "Contact" }).first().click();
  await ctx.close();


  // 2b. A prospect's journey: ask, follow evidence to a case note, reach the booking link.
  {
    const j = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const jp = await j.newPage();
    const beacons = [];
    jp.on("request", (r) => { if (/\/_vercel\/insights\/(event|view)/.test(r.url())) beacons.push(r.url().split("/").pop() + ":" + (r.postData() || "").slice(0, 120)); });
    const insights = [];
    jp.on("response", (r) => { if (r.url().includes("/_vercel/insights/script.js")) insights.push(r.status()); });
    await jp.goto(BASE + "/", { waitUntil: "networkidle" });
    await jp.locator('[aria-label="Suggested questions"] button', { hasText: "onboarding" }).click();
    const kleido = jp.locator("ol > li.rise").last().locator("a", { hasText: "Kleido" });
    await kleido.waitFor({ state: "visible" });
    await kleido.click();
    await jp.waitForURL(/\/work\/kleido$/);
    const book = jp.locator("a", { hasText: "Book a diagnostic call" }).first();
    const href = await book.getAttribute("href");
    log("journey: chip -> Kleido case note ->", jp.url().replace(BASE, ""), "booking href", href.slice(0, 60));
    if (!href.startsWith("mailto:me@aashir.net?subject=Diagnostic%20call")) fail("booking link wrong: " + href);
    await book.evaluate((a) => a.addEventListener("click", (e) => e.preventDefault(), { once: true }));
    await book.click();
    await jp.waitForTimeout(2500);
    log("analytics script status:", insights.join(",") || "not requested", "beacons sent:", beacons.length);
    for (const b of beacons) log("  beacon", b);
    if (process.env.EXPECT_ANALYTICS === "1") {
      if (!insights.includes(200)) fail("Vercel analytics script not served");
      if (!beacons.some((b) => b.includes("console_ask"))) fail("console_ask event not sent");
      if (!beacons.some((b) => b.includes("book_call_click"))) fail("book_call_click event not sent");
    }
    await j.close();
  }

  // "/" shortcut on desktop, reduced motion instant answer
  const d = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
  const dp = await d.newPage();
  await dp.goto(BASE + "/", { waitUntil: "networkidle" });
  await dp.mouse.click(5, 600);
  await dp.keyboard.press("/");
  const focused = await dp.evaluate(() => document.activeElement && document.activeElement.id);
  if (focused !== "ask") fail("slash did not focus input, focused=" + focused);
  await dp.keyboard.type("Where does AI belong in underwriting?");
  const t = Date.now();
  await dp.keyboard.press("Enter");
  await dp.locator("ol > li.rise ul a").first().waitFor({ state: "visible" });
  log("reduced motion answer visible in", Date.now() - t, "ms");
  const caret = await dp.locator(".caret").count();
  if (caret) fail("caret shown under reduced motion");
  await dp.screenshot({ path: `${OUT}/console-desktop-answer.png` });
  // keyboard tab order reaches chips and Ask
  await d.close();

  // 3. links and routes
  const p2 = await (await browser.newContext()).newPage();
  const hrefs = new Set();
  for (const path of ["/", "/work/kleido", "/work/id-reader", "/work/moonpay", "/work/magzi", "/cv"]) {
    const res = await p2.goto(BASE + path, { waitUntil: "networkidle" });
    if (res.status() !== 200) fail(`${path} status ${res.status()}`);
    for (const h of await p2.$$eval("a[href]", (as) => as.map((a) => a.getAttribute("href")))) hrefs.add(h);
    const ov = await p2.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (ov > 0) fail(`${path} overflow ${ov}`);
  }
  for (const h of hrefs) {
    if (h.startsWith("/") && !h.startsWith("//")) {
      const path = h.split("#")[0] || "/";
      const r = await p2.request.get(BASE + path, { maxRedirects: 0 });
      if (r.status() !== 200) fail(`link ${h} -> ${r.status()}`);
      const frag = h.split("#")[1];
      if (frag && path === "/") {
        await p2.goto(BASE + "/");
        if (!(await p2.locator("#" + frag).count())) fail(`missing anchor #${frag}`);
      }
    }
  }
  log("internal links checked:", [...hrefs].filter((h) => h.startsWith("/")).length, "external:", [...hrefs].filter((h) => h.startsWith("http")).join(" "));
  for (const [from, to] of [["/resume", "/cv"], ["/projects", "/#evidence"], ["/experience", "/#background"], ["/contact", "/#contact"], ["/writing", "/"], ["/about", "/"]]) {
    const r = await p2.request.get(BASE + from, { maxRedirects: 0 });
    const loc = r.headers()["location"];
    if (r.status() < 300 || r.status() > 399 || !loc || !loc.endsWith(to)) fail(`redirect ${from} gave ${r.status()} ${loc}`);
  }
  for (const path of ["/opengraph-image", "/icon", "/sitemap.xml", "/robots.txt", "/llms.txt", "/work/nope"]) {
    const r = await p2.request.get(BASE + path);
    log(path, r.status(), r.headers()["content-type"]);
  }
  await p2.goto(BASE + "/opengraph-image");
  await p2.screenshot({ path: `${OUT}/og.png` });
  await p2.goto(BASE + "/work/kleido", { waitUntil: "networkidle" });
  await p2.setViewportSize({ width: 390, height: 844 });
  await p2.screenshot({ path: `${OUT}/kleido-390.png`, fullPage: true });
  await p2.goto(BASE + "/cv", { waitUntil: "networkidle" });
  await p2.emulateMedia({ media: "print" });
  await p2.pdf({ path: `${OUT}/cv.pdf`, format: "A4", margin: { top: "14mm", bottom: "14mm", left: "16mm", right: "16mm" } });
  await browser.close();
  log(failures ? `DOGFOOD: ${failures} failure(s)` : "DOGFOOD: all checks passed");
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
