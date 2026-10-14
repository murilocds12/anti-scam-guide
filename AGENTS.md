<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Frontend architecture
- Shared navigation and layout live in AppShell around the root Outlet; the home and four content sections are separate TanStack routes so navigation and metadata remain independent.
- Educational data lives in src/lib/antigolpe/content.ts and local demonstration analysis implements AnalysisService in analysis.ts; future remote analysis must replace that boundary without claiming live checks in demo mode.
- Disconnected analysis and email features remain explicit, nonpersistent demonstrations; never add network calls or storage to these flows without implementing their privacy and consent requirements.
- Visual styles and semantic status tokens live in src/styles.css; reusable interactive controls use the existing Button and Radix Dialog components.
