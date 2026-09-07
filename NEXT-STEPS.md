# DealMint India — Next Steps

## Done
- Site code is in this repo (Next.js + Tailwind)
- Sample products + Amazon/Flipkart button helpers
- Affiliate placeholders in `src/lib/affiliate.ts`

## 1. Deploy free on Vercel
1. Open https://vercel.com and sign in with GitHub
2. Import `rahulccc/dealmint-india`
3. Deploy (defaults are fine)
4. Copy the live URL (like `https://dealmint-india.vercel.app`)
5. In Vercel → Settings → Environment Variables, add `NEXT_PUBLIC_SITE_URL` = that URL, then redeploy

## 2. Amazon Associates India (you — KYC)
1. https://affiliate.amazon.in (India only)
2. Add your live site URL (+ YouTube/Instagram if asked)
3. PAN + bank details
4. After approval: paste tracking ID into `src/lib/affiliate.ts` replacing `YOURTAG-21`
5. Need 3 real sales in 180 days

## 3. Flipkart Affiliate (you — KYC)
1. https://affiliate.flipkart.com/
2. Same live URL + KYC
3. Paste `affid` into `src/lib/affiliate.ts` replacing `FLIPKART_AFFILIATE_ID`

## 4. Traffic
YouTube + Instagram first (Health or Content career niche). Put the live URL in bio/descriptions. Disclose affiliate links.

No income guarantees — commissions need real traffic and purchases.
