---
name: instagram-profile-to-angular-brief
description: "Turn a public Instagram profile URL into a factual personal-site brief and Angular implementation handoff. Use when building a creator, portfolio, or personal website from Instagram profile content."
argument-hint: 'Public Instagram profile URL, e.g. https://www.instagram.com/saikrishna_mungandi'
user-invocable: true
---

# Instagram Profile to Angular Brief

## Goal

Use a public Instagram profile as source material for a concise, evidence-based brief that the Profile Site Planner, Profile Brand and UX, or Modern Angular App Builder can use. Do not assume the account owner's identity, profession, goals, or consent to reuse content beyond what the user provides.

## Procedure

1. Read the supplied Instagram profile URL. If none is supplied, use https://www.instagram.com/saikrishna_mungandi for this workspace unless the user names another account. Confirm that it is an Instagram profile URL and treat the account as public only when its content is actually accessible without login.
2. Inspect only content available through ordinary public access: display name, username, bio, category, profile links, highlights, and a small representative sample of visible posts, captions, dates, and tags. For visible images, record a concise description of the subject, setting, colors, any legible text, and the associated post date/caption; note names or handles only when they are explicit and relevant. Do not infer identity, relationships, location, or other sensitive details from an image. Do not bypass login walls, access controls, rate limits, or use private APIs or scraping tools.
3. If Instagram blocks access or exposes only a login prompt, say so plainly. Ask the user to provide the relevant bio, link text, selected captions, or screenshots. Continue only from supplied content; do not infer inaccessible posts.
4. Record source URLs and the access date. Separate direct observations from interpretations, label confidence, and retain unknowns as questions. Do not fabricate biography, credentials, achievements, clients, testimonials, audience demographics, services, location, or business goals.
5. Summarize recurring content themes and the profile's apparent tone using brief paraphrases. Do not reproduce long captions, copy, or third-party content. Treat profile images and other media as copyrighted: do not download, copy into the project, or publish them without the user's approval and confirmed rights. For each image the user approves, retain its source-post reference and suggest a descriptive local filename; leave actual asset acquisition to the user unless explicitly authorized.
6. Draft a lean site brief: audience and needs only where evidenced; proposed positioning as a hypothesis; content hierarchy; a clear next action only if supported by the user's goal; candidate visual direction grounded in visible material; accessibility and responsive requirements; content/assets needed; and unresolved questions.
7. Mark all proposed copy, positioning, and design choices as draft until the user approves them. Do not add analytics, cookies, embeds, or tracking without an explicit decision and appropriate consent.
8. Hand off according to scope: use **Profile Site Planner** when goals or scope need shaping; **Profile Brand and UX** for content hierarchy and visual direction; **Modern Angular App Builder** for implementation in the existing Angular project; **Profile Analytics and Growth** only for explicitly requested measurement; and **Profile Site Release** for launch readiness. Do not claim an agent was consulted unless it was actually available and invoked.

## Output

Return the following sections:

- **Access and sources:** profile URL, access date, what was and was not publicly visible.
- **Observed facts:** directly supported profile details, each with its source.
- **Content signals:** recurring themes and tone, clearly marked as interpretations; image inventory with post reference, concise visual description, visible text, and suggested filename where useful.
- **Draft site brief:** audience, proposed positioning, content hierarchy, primary action, visual direction, and responsive/accessibility needs.
- **Assets and permissions:** user-provided/approved assets, rights still to confirm, and missing materials.
- **Unknowns and approval questions:** facts or decisions needed before implementation.
- **Angular handoff:** concise scope and acceptance criteria for the existing app, or instructions to inspect the repository and confirm its Angular version before implementation.

## Example

`/instagram-profile-to-angular-brief https://www.instagram.com/saikrishna_mungandi`