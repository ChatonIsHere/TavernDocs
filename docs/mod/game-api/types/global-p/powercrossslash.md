---
title: "PowerCrossSlash"
description: "Charged skill asset: hitting the target in front of the player fires a slash projectile in the swing direction, dealing part of the hit's damage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerCrossSlash

A **class** in `Root.Township`, the global namespace.

Charged skill asset: hitting the target in front of the player fires a slash projectile in the swing direction, dealing part of the hit's damage.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`TargetBasedSkill`](/mod/game-api/types/global-t-x/targetbasedskill)
- **Derived types** [`PowerCrossSlash.Create`](/mod/game-api/types/global-p/powercrossslash-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/powercrossslash-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PowerCrossSlash()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | <span className="api-desc">Share of the hit's damage the projectile deals (default 0.5).</span> |
| <Link id="m-slashprojectile" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" slashProjectile"}</code> | <span className="api-desc">Projectile prefab to fire.</span> |
| <Link id="m-slashspeed" /><code>{"private float slashSpeed"}</code> | <span className="api-desc">Projectile speed.</span> |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> | <span className="api-desc">Impact channel the tool needs.</span> |
| <Link id="m-targetdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" targetDefinition"}</code> | <span className="api-desc">Pooled target shown to the player.</span> |
| <Link id="m-targetdistance" /><code>{"private float targetDistance"}</code> | <span className="api-desc">How far in front of the head the target appears.</span> |
| <Link id="m-targetheightfromeyelevel" /><code>{"private float targetHeightFromeyeLevel"}</code> | <span className="api-desc">Target height relative to the eyes (default -0.2).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | <span className="api-desc">Spawns `slashProjectile` at the hit, sets its damage and owner, and shoots it along the swing.</span> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">True if the base check passes and the tool has `targetChannel`.</span> |
| <Link id="m-placetarget" /><code>{"protected override "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" PlaceTarget()"}</code> | <span className="api-desc">Client: places the target in front of the player's head, at the set distance and height.</span> |
