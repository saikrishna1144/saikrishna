# Personal Website Agent Team

These agents support a personal website or portfolio whose primary entry point is an Instagram profile. Use the planner first, then invoke specialists against its approved brief. Each agent is also available independently in the VS Code agent picker.

For this workspace's profile, the default source is [@saikrishna_mungandi](https://www.instagram.com/saikrishna_mungandi), unless the user supplies another URL. The [Instagram profile-to-brief skill](../skills/instagram-profile-to-angular-brief/SKILL.md) guides public-only inspection of profile text, links, captions, and post imagery. Instagram may restrict access; agents must request user-provided details when blocked and must not reuse images without confirmed rights.

For general Angular application work, use [Modern Angular App Builder](modern-angular-app-builder.agent.md). It owns implementation and verification, and consults the profile-site specialists only when an application is specifically a personal website, creator site, or portfolio.

## Suggested sequence

1. **Profile Site Planner**: turn the person's profile and goals into a phased, measurable build-to-launch plan. Start here when the brief is incomplete.
2. **Profile Brand and UX**: define positioning, content hierarchy, visual direction, and responsive/accessibility requirements.
3. **Profile Analytics and Growth**: specify Instagram attribution, conversion events, repeat-visit measurement, consent, and experiments.
4. **Profile Site Builder**: implement the approved brief in the existing project.
5. **Profile Site Release**: verify launch readiness and document domain, hosting, and deployment steps.

## Example prompts

- Planner: "Plan a mobile-first personal showcase for my profile, achievements, and images. Instagram is the main referral source; prioritize credibility and meaningful exploration unless I specify a conversion goal, and include privacy-conscious repeat-visit measurement."
- Brand and UX: "Use this approved brief to define the page hierarchy, visual direction, and mobile journey. Do not invent personal details."
- Analytics and Growth: "Design a minimal event and UTM plan for Instagram referrals, qualified inquiries, and consented returning-visitor trends."
- Site Builder: "Implement the approved brief in this repository, follow its existing stack, and run the narrowest relevant checks. Do not deploy."
- Release: "Review this site for launch readiness and give me verified checks plus the manual domain/deployment steps. Do not change DNS or publish."

## Boundaries

The agents do not assume the person's identity, work, budget, or legal jurisdiction. Supply those details in the project brief. Analytics recommendations should minimize data collection, disclose measurement clearly, and respect applicable consent requirements. The release agent may prepare launch instructions, but external publishing and DNS changes require explicit approval.
