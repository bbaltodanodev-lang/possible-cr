import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Los scripts inline de Next se permiten con 'unsafe-inline': un CSP con nonce obligaría a
// renderizar cada página en cada petición (sin HTML estático ni caché de CDN) y empeoraría
// el LCP. Se bloquean igualmente eval, los manejadores inline, objetos, iframes y bases ajenas.
// React's development build uses eval() to reconstruct callstacks, and the dev
// overlay needs a WebSocket for HMR. Both stay disabled in production.
const scriptSrc = isDev ? "'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com" : "'self' 'unsafe-inline' https://*.googletagmanager.com";
const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();
const contactOrigin = contactEndpoint?.startsWith("https://")
  ? new URL(contactEndpoint).origin
  : "";
const connectSrc = isDev
  ? `'self' ${contactOrigin} https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com ws: wss:`
  : `'self' ${contactOrigin} https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com`;

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  `script-src ${scriptSrc}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com https://*.google-analytics.com https://*.googletagmanager.com",
  "font-src 'self' data:",
  `connect-src ${connectSrc}`,
  "frame-src 'none'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "media-src 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-DNS-Prefetch-Control", value: "off" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), bluetooth=(), magnetometer=(), gyroscope=(), accelerometer=(), browsing-topics=()",
        },
        { key: "Content-Security-Policy", value: contentSecurityPolicy },
      ],
    }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [100, 85, 75, 70],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
