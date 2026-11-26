---
title: "PowerCrossSlash"
description: "Charged skill asset: hitting the target in front of the player fires a slash projectile in the swing direction, dealing part of the hit's damage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerCrossSlash

A **class** in `Root.Township`, no namespace.

Charged skill asset: hitting the target in front of the player fires a slash projectile in the swing direction, dealing part of the hit's damage.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`TargetBasedSkill`](/game-api/types/global-t-x/targetbasedskill)
- **Derived types** [`PowerCrossSlash.Create`](/game-api/types/global-p/powercrossslash-create)
- **Nested types** [`Create`](/game-api/types/global-p/powercrossslash-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PowerCrossSlash()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | Share of the hit's damage the projectile deals (default 0.5). |
| <Link id="m-slashprojectile" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" slashProjectile"}</code> | Projectile prefab to fire. |
| <Link id="m-slashspeed" /><code>{"private float slashSpeed"}</code> | Projectile speed. |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> | Impact channel the tool needs. |
| <Link id="m-targetdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" targetDefinition"}</code> | Pooled target shown to the player. |
| <Link id="m-targetdistance" /><code>{"private float targetDistance"}</code> | How far in front of the head the target appears. |
| <Link id="m-targetheightfromeyelevel" /><code>{"private float targetHeightFromeyeLevel"}</code> | Target height relative to the eyes (default -0.2). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | Spawns `slashProjectile` at the hit, sets its damage and owner, and shoots it along the swing. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True if the base check passes and the tool has `targetChannel`. |
| <Link id="m-placetarget" /><code>{"protected override "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" PlaceTarget()"}</code> | Client: places the target in front of the player's head, at the set distance and height. |
