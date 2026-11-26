---
title: "ImpactModifierMultiplier"
description: "Impact modifier asset that multiplies a hit's Multipliers by a set amount."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactModifierMultiplier

A **class** in `Root.Township`, `Alta.Impact`.

Impact modifier asset that multiplies a hit's `Multipliers` by a set amount.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ImpactModifierComponent`](/mod/game-api/types/alta-items/impactmodifiercomponent)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactModifierMultiplier()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Factor applied to the hit, default 1.2. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyhit" /><code>{"override void ModifyHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Multiplies the hit's `Multipliers` by `multiplier`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: renames the asset to match the multiplier, such as "1.2 Multiplier". |

</details>
