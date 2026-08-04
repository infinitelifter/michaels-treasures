import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Everyone is welcome — including AI assistant crawlers, which are listed
 * explicitly so the site is eligible for citation in ChatGPT, Claude,
 * Perplexity, Gemini and friends.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "meta-externalagent",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
