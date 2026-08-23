# Omi Pricing Record

Independent consumer documentation for `omi.wtf`, covering Omi/Based Hardware subscription pricing representations, later pricing and service limits, correspondence, the company’s stated position, and neutral consumer resources.

## Editorial rules

- Distinguish documents, quotations, first-person recollection, opinion, and unresolved questions.
- Do not publish unredacted personal, banking, contact, order, or tracking information.
- Do not present legal violations or motive as established facts.
- Preserve original evidence unchanged; publish only reviewed derivatives.

## Local development

```bash
npm install
npm run dev
```

## Evidence workflow

1. Place immutable originals outside the public site and reviewed/redacted derivatives in the matching `public/evidence/` category.
2. Add or update the indexed record in `app/data.ts`.
3. Run `python3 tools/hash_evidence.py` to regenerate SHA-256 hashes.
4. Confirm that each public claim links to the correct stable evidence ID.

The current archive intentionally contains index records and explicit missing-file notices. No screenshot or email image should be marked public until redaction is verified.

## Publishing

The app is configured for OpenAI Sites and Cloudflare-compatible output. After the initial deployment, `omi.wtf` can be attached as a custom domain once its required DNS records are available. Source can also be mirrored to GitHub for public history and outside review.

## Submission form

The customer-experience form is intentionally non-transmitting until a secure intake endpoint, retention policy, and privacy process are configured. Do not add a public client-side API secret.
