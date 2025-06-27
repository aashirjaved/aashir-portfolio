// Type definitions for Google Analytics gtag
interface Window {
  gtag: (
    command: string,
    targetId: string,
    config?: {
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
}

// Type definitions for Google Analytics gtag.js
interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}
