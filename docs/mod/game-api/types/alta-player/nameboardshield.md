---
title: "NameBoardShield"
description: "Asset listing the parts of a name board shield."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NameBoardShield

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Asset listing the parts of a name board shield.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NameBoardShield()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-parts" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/shieldpartdefinition">{"ShieldPartDefinition"}</Link>{"[] parts"}</code> | Backing field for `Parts`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parts-2" /><code><Link to="/mod/game-api/types/alta-player/shieldpartdefinition">{"ShieldPartDefinition"}</Link>{"[] Parts { get; }"}</code> | The shield's part definitions. |
