# Git & Deployment Safety Rules

## Explicit Approval Required for Remote Operations
- **Never push to remote repositories automatically**: Do NOT run `git push`, `git push origin <branch>`, or any command that pushes commits to remote repositories without receiving explicit confirmation and approval from the user in the current turn.
- **Never trigger automated production deployments**: Do NOT trigger remote deployments or push code to deployment-linked branches automatically.
- **Workflow for commits and changes**:
  1. Make edits and run local verification (e.g. `npm run lint`, `npm run build`, unit tests).
  2. If requested, stage and commit changes locally.
  3. Clearly present the changes to the user and ask: *"Would you like me to push these changes to GitHub now?"*
  4. Only proceed with `git push` once the user explicitly replies with approval (e.g., "yes", "proceed", "push it").

