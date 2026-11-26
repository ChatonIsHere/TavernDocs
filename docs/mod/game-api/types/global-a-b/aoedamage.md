---
title: "AOEDamage"
description: "Deals one burst of area damage when it starts, to every health object in a sphere."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AOEDamage

A **class** in `Root.Township`, the global namespace.

Deals one burst of area damage when it starts, to every health object in a sphere. Damage is applied on the server and scaled by the server's `DamageX` setting.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Health and damage](/mod/game-api/items/health-and-damage#aoedamage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AOEDamage()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damage" /><code>{"private float damage"}</code> | <span className="api-desc">Base damage dealt to each target.</span> |
| <Link id="m-damagedlayers" /><code>{"private LayerMask damagedLayers"}</code> | <span className="api-desc">Layers searched for targets. Each hit collider needs an `ImpactDetector` in its parents.</span> |
| <Link id="m-damagetype" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" damageType"}</code> | <span className="api-desc">Impact type set in the inspector. Not used by `Start`.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Radius of the damage sphere.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the damage sphere in the editor.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Finds colliders in the sphere and damages each one's health target once (server only), with source `AreaOfEffect`.</span> |

</details>
