---
title: "HebiosEnchant"
description: "Progression skill that raises the damage of tools on a target impact channel, by an amount set per skill level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HebiosEnchant

A **class** in `Root.Township`, the global namespace.

Progression skill that raises the damage of tools on a target impact channel, by an amount set per skill level.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PickupBasedSkill`](/mod/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`HebiosEnchant.Create`](/mod/game-api/types/global-e-h/hebiosenchant-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/hebiosenchant-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HebiosEnchant()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemodifierperlevel" /><code>{"private float[] damageModifierPerLevel"}</code> | <span className="api-desc">Damage multiplier for each skill level, starting at level 1.</span> |
| <Link id="m-minimumeffectivenes" /><code>{"private float minimumEffectivenes"}</code> | <span className="api-desc">Lowest hit effectiveness that triggers the skill.</span> |
| <Link id="m-targetimpactchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetImpactChannel"}</code> | <span className="api-desc">Impact channel the tool and hit must have.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | <span className="api-desc">Multiplies the hit's damage by the modifier for the player's level (capped at the last entry), then runs the skill.</span> |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">True for hits with enough effectiveness from the target channel, when that channel is the hit's first channel or it has none.</span> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">True if the held item is a tool with the target channel.</span> |
