/**
 * Central affiliate configuration for DealMint India.
 *
 * Replace the placeholder tags below with your real IDs before going live.
 * Do not invent or commit real affiliate IDs in source control.
 *
 * Amazon Associates India: https://affiliate-program.amazon.in/
 * Flipkart Affiliate: https://affiliate.flipkart.com/
 */

export const AFFILIATE_CONFIG = {
  /** Amazon Associates tracking ID — replace YOURTAG-21 with your real tag */
  amazonTag: "YOURTAG-21",
  /** Flipkart Affiliate ID — replace with your real affiliate ID */
  flipkartAffiliateId: "FLIPKART_AFFILIATE_ID",
  amazonBaseUrl: "https://www.amazon.in",
  flipkartBaseUrl: "https://www.flipkart.com",
} as const;

/**
 * Build an Amazon.in product URL from an ASIN + affiliate tag.
 * Example: https://www.amazon.in/dp/B0XXXXXXX?tag=YOURTAG-21
 */
export function buildAmazonUrl(asin: string, tag = AFFILIATE_CONFIG.amazonTag): string {
  const cleanAsin = asin.trim().toUpperCase();
  const url = new URL(`/dp/${cleanAsin}`, AFFILIATE_CONFIG.amazonBaseUrl);
  url.searchParams.set("tag", tag);
  return url.toString();
}

/**
 * Build a Flipkart product URL from a product path/id + affiliate id.
 * Accepts either a full relative product path or a product id slug.
 * Example: https://www.flipkart.com/product/p/itmXXXX?affid=FLIPKART_AFFILIATE_ID
 */
export function buildFlipkartUrl(
  productPathOrId: string,
  affiliateId = AFFILIATE_CONFIG.flipkartAffiliateId
): string {
  const path = productPathOrId.startsWith("/")
    ? productPathOrId
    : `/${productPathOrId}`;
  const url = new URL(path, AFFILIATE_CONFIG.flipkartBaseUrl);
  url.searchParams.set("affid", affiliateId);
  return url.toString();
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
