import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "pro.irqsaedge.app",
  appName: "Irqsa Edge",
  webDir: "public",
  server: {
    url: "https://irqsaedge.pro",
    cleartext: false,
  },
  android: {
    backgroundColor: "#101827",
  },
};

export default config;
