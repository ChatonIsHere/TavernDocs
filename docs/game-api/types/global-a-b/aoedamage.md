---
title: "AOEDamage"
description: "Deals one burst of area damage when it starts, to every health object in a sphere."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AOEDamage

A **class** in `Root.Township`, no namespace.

Deals one burst of area damage when it starts, to every health object in a sphere. Damage is applied on the server and scaled by the server's `DamageX` setting.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Health and damage](/game-api/items/health-and-damage#aoedamage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AOEDamage()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damage" /><code>{"private float damage"}</code> | Base damage dealt to each target. |
| <Link id="m-damagedlayers" /><code>{"private LayerMask damagedLayers"}</code> | Layers searched for targets. Each hit collider needs an `ImpactDetector` in its parents. |
| <Link id="m-damagetype" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" damageType"}</code> | Impact type set in the inspector. Not used by `Start`. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Radius of the damage sphere. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the damage sphere in the editor. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Finds colliders in the sphere and damages each one's health target once (server only), with source `AreaOfEffect`. |

</details>
