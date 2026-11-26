---
title: "SkillShrine.NewPathArgument"
description: "Private pair of a player ID and a progression path, used inside SkillShrine when a player picks a new path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrine.NewPathArgument

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private pair of a player ID and a progression path, used inside `SkillShrine` when a player picks a new path.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SkillShrine`](/mod/game-api/types/global-s/skillshrine)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-path" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path"}</code> | The progression path chosen. |
| <Link id="m-playerid" /><code>{"int playerId"}</code> | ID of the player choosing it. |
