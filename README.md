# DealMint India

## Project purpose

Clean deal content site for shoppers in India.
Mobile-first UI with category pages and product cards.

## Commands

From the project folder:
1. npm install
2. npm run dev
3. npm run build
4. npm start

## Tags config

Edit src/lib/affiliate.ts placeholders:
- YOURTAG-21 for Amazon tracking ID
- FLIPKART_AFFILIATE_ID for Flipkart ID
Helpers buildAmazonUrl and buildFlipkartUrl power every CTA.
Do not invent real IDs before approval.

Amazon programme signup in India usually needs a public site URL first.
Deploy this site, then apply with that live URL.

## Products

Add entries in src/lib/products.ts (id, name, category, priceINR, whyBuy, amazonAsin, flipkartPath).
Categories: src/lib/categories.ts
Included products are sample placeholders only.

## Contact

Update CONTACT_EMAIL in src/components/ContactForm.tsx

## SEO

Set NEXT_PUBLIC_SITE_URL for metadata, sitemap, and robots.

## Routes

- /
- /categories
- /categories/[slug]
- /about
- /privacy
- /contact
- /sitemap.xml
- /robots.txt

## Deploy

Vercel (free): import https://github.com/rahulccc/dealmint-india → Deploy.
Set NEXT_PUBLIC_SITE_URL to your live domain, then apply to Amazon/Flipkart with that URL.
