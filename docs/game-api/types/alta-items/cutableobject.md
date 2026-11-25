---
title: "CutableObject"
description: "class CutableObject in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CutableObject

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`TriggerImpactDetectorBase`](/game-api/types/alta-items/triggerimpactdetectorbase)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CutableObject()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-effect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect"}</code> |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |
| <Link id="m-prefabtospawnonhit" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToSpawnOnHit"}</code> |
| <Link id="m-spawningpoint" /><code>{"private Transform spawningPoint"}</code> |
| <Link id="m-spawnvelocity" /><code>{"private Vector3 spawnVelocity"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-hiteffect" /><code>{"protected override void HitEffect("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact)"}</code> |
