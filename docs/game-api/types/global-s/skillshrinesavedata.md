---
title: "SkillShrineSaveData"
description: "Save data for a SkillShrine (version 1): stores the shrine's current progression path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrineSaveData

A **class** in `Root.Township`, no namespace.

Save data for a `SkillShrine` (version 1): stores the shrine's current progression path.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NewSaveData<SkillShrine, SkillShrineSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`SkillShrine`](/game-api/types/global-s/skillshrine), [`SkillShrineSaveData`](/game-api/types/global-s/skillshrinesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillShrineSaveData()"}</code> | Creates a `SkillShrineSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pathindex" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" pathIndex"}</code> | The shrine's current progression path, restored into `currentPath` on load. |
