---
title: "SkillShrineSaveData"
description: "Save data for a SkillShrine (version 1): stores the shrine's current progression path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrineSaveData

A **class** in `Root.Township`, the global namespace.

Save data for a `SkillShrine` (version 1): stores the shrine's current progression path.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NewSaveData<SkillShrine, SkillShrineSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`SkillShrine`](/mod/game-api/types/global-s/skillshrine), [`SkillShrineSaveData`](/mod/game-api/types/global-s/skillshrinesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillShrineSaveData()"}</code> | <span className="api-desc">Creates a `SkillShrineSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pathindex" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" pathIndex"}</code> | <span className="api-desc">The shrine's current progression path, restored into `currentPath` on load.</span> |
