---
title: "PowerCrossSlash"
description: "class PowerCrossSlash in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerCrossSlash

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> |
| <Link id="m-slashprojectile" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" slashProjectile"}</code> |
| <Link id="m-slashspeed" /><code>{"private float slashSpeed"}</code> |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> |
| <Link id="m-targetdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" targetDefinition"}</code> |
| <Link id="m-targetdistance" /><code>{"private float targetDistance"}</code> |
| <Link id="m-targetheightfromeyelevel" /><code>{"private float targetHeightFromeyeLevel"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |
| <Link id="m-placetarget" /><code>{"protected override "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" PlaceTarget()"}</code> |
