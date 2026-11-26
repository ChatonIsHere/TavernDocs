---
title: "SparkImpactDetector"
description: "A CraftableImpactDetector that throws sparks when hit, with a chance to light nearby flammables that grows with hit effectiveness."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SparkImpactDetector

A **class** in `Root.Township`, `Alta.Impact`.

A `CraftableImpactDetector` that throws sparks when hit, with a chance to light nearby flammables that grows with hit effectiveness. Server only for the sparks.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`CraftableImpactDetector`](/mod/game-api/types/alta-items/craftableimpactdetector)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SparkImpactDetector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumfirechance" /><code>{"private float maximumFireChance"}</code> | <span className="api-desc">Fire chance for a fully effective hit. Default 0.5.</span> |
| <Link id="m-minimumfirechance" /><code>{"private float minimumFireChance"}</code> | <span className="api-desc">Fire chance for a hit with no effectiveness. Default 0.1.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Radius around the hit point that sparks reach. Default 0.1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Waits for the entity to finish initializing, then calls `AddSpark`.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addspark" /><code>{"private void AddSpark("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Server: once the entity is initialized, subscribes `Spark` to the detector's `Hit` event.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the spark radius.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: fills in the entity from the parents.</span> |
| <Link id="m-spark" /><code>{"private void Spark("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | <span className="api-desc">Calls `Fire.SimulateSparks` at the hit point with a chance lerped from min to max by hit effectiveness.</span> |

</details>
