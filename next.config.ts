import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// React's development build uses eval() to reconstruct callstacks, and the dev
// overlay needs a WebSocket for HMR. Both stay disabled in production.
const scriptSrc = isDev ? "'self' 'unsafe-inline' 'unsafe-eval'" : "'self' 'unsafe-inline'";
const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();
const contactOrigin = contactEndpoint?.startsWith("https://")
  ? new URL(contactEndpoint).origin
  : "";
const connectSrc = isDev
  ? `'self' ${contactOrigin} ws: wss:`
  : `'self' ${contactOrigin}`;

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  `script-src ${scriptSrc}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com",
  "font-src 'self' data:",
  `connect-src ${connectSrc}`,
  "frame-src 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-DNS-Prefetch-Control", value: "off" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        { key: "Content-Security-Policy", value: contentSecurityPolicy },
      ],
    }];
  },
  images: {
    qualities: [100, 75, 70],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
