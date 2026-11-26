---
title: "HebiosEnchant"
description: "Progression skill that raises the damage of tools on a target impact channel, by an amount set per skill level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HebiosEnchant

A **class** in `Root.Township`, no namespace.

Progression skill that raises the damage of tools on a target impact channel, by an amount set per skill level.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`HebiosEnchant.Create`](/game-api/types/global-e-h/hebiosenchant-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/hebiosenchant-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HebiosEnchant()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemodifierperlevel" /><code>{"private float[] damageModifierPerLevel"}</code> | Damage multiplier for each skill level, starting at level 1. |
| <Link id="m-minimumeffectivenes" /><code>{"private float minimumEffectivenes"}</code> | Lowest hit effectiveness that triggers the skill. |
| <Link id="m-targetimpactchannel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetImpactChannel"}</code> | Impact channel the tool and hit must have. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | Multiplies the hit's damage by the modifier for the player's level (capped at the last entry), then runs the skill. |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | True for hits with enough effectiveness from the target channel, when that channel is the hit's first channel or it has none. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True if the held item is a tool with the target channel. |
