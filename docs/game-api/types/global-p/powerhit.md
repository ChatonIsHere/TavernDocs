---
title: "PowerHit"
description: "A skill that multiplies the damage of a strong enough hit with a tool on a given impact channel, by an amount that grows with the skill's level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerHit

A **class** in `Root.Township`, no namespace.

A skill that multiplies the damage of a strong enough hit with a tool on a given impact channel, by an amount that grows with the skill's level. A `ScriptableObject` asset.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`PowerHit.Create`](/game-api/types/global-p/powerhit-create)
- **Nested types** [`Create`](/game-api/types/global-p/powerhit-create)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PowerHit()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemodifierperlevel" /><code>{"private float[] damageModifierPerLevel"}</code> | Damage multiplier for each skill level, index 0 being level 1. |
| <Link id="m-minimumeffectivenes" /><code>{"private float minimumEffectivenes"}</code> | Smallest hit effectiveness (0 to 1) that triggers the skill. |
| <Link id="m-targetimpactchannel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetImpactChannel"}</code> | The impact channel the tool must have for the skill to apply. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | Multiplies the hit's damage by the modifier for the player's level in this skill, then runs the base skill. |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | True when the hit is at least `minimumEffectivenes` effective and the tool hits on `targetImpactChannel` (as its first channel, if it has one). |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True when the held pickup is a tool with `targetImpactChannel`. |
