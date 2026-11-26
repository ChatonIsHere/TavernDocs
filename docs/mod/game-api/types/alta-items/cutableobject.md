---
title: "CutableObject"
description: "A trigger that swaps itself for another prefab when hit hard enough by a matching impact tool, like cutting a plant."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CutableObject

A **class** in `Root.Township`, `Alta.Impact`.

A trigger that swaps itself for another prefab when hit hard enough by a matching impact tool, like cutting a plant. The server spawns the new prefab and destroys this entity; clients play the effect.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`TriggerImpactDetectorBase`](/mod/game-api/types/alta-items/triggerimpactdetectorbase)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CutableObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect"}</code> | <span className="api-desc">Pooled effect played at the spawn point, facing away from the hit.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity destroyed when cut.</span> |
| <Link id="m-prefabtospawnonhit" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToSpawnOnHit"}</code> | <span className="api-desc">Prefab the server spawns in place of this object, with a random rotation.</span> |
| <Link id="m-spawningpoint" /><code>{"private Transform spawningPoint"}</code> | <span className="api-desc">Where the effect plays and the new prefab spawns.</span> |
| <Link id="m-spawnvelocity" /><code>{"private Vector3 spawnVelocity"}</code> | <span className="api-desc">Velocity given to the spawned object's rigidbody.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hiteffect" /><code>{"protected override void HitEffect("}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact)"}</code> | <span className="api-desc">Plays the hit effect off headless, then on the server spawns `prefabToSpawnOnHit` with `spawnVelocity` and destroys this entity.</span> |
