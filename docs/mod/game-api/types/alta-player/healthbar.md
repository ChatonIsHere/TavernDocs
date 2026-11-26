---
title: "HealthBar"
description: "Client debug health bar: a quad above a creature that shows its health stat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthBar

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Client debug health bar: a quad above a creature that shows its health stat. Made by `ToggleEnemyHealthBars`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HealthBar(Transform enemy, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" healthStat, Shader shader, Vector3 barScale, float verticalOffset, int _Progress)"}</code> | <span className="api-desc">Creates a `HealthBar` from `enemy`, `healthStat`, `shader`, `barScale`, `verticalOffset` and `_Progress`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform transform"}</code> | <span className="api-desc">The bar quad's transform, parented to the creature.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | <span className="api-desc">Shader property id for the bar's fill.</span> |
| <Link id="m-healthstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" healthStat"}</code> | <span className="api-desc">The health stat shown.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The bar's own material instance.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Unhooks from the stat and destroys the material and quad.</span> |
| <Link id="m-updatehealthbar" /><code>{"void UpdateHealthBar("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" s)"}</code> | <span className="api-desc">Sets the shader progress to health between its default minimum and maximum. Runs when the stat changes.</span> |
| <Link id="m-updaterotation" /><code>{"void UpdateRotation(Vector3 headPosition)"}</code> | <span className="api-desc">Turns the bar to face the given head position, flat on the Y axis.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethealthbar" /><code>{"private Transform GetHealthBar(Vector3 barScale)"}</code> | <span className="api-desc">Creates the quad, scales it, removes its collider and gives it the bar material.</span> |
| <Link id="m-gethighestpointoncreature" /><code>{"private float GetHighestPointOnCreature(Transform creature)"}</code> | <span className="api-desc">Height of the creature's highest collider above its position.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HealthBar`:

<div className="api-used-in">

[`ToggleEnemyHealthBars.healthBarMapping`](/mod/game-api/types/alta-player/toggleenemyhealthbars#m-healthbarmapping).

</div>
