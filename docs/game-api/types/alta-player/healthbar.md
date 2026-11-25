---
title: "HealthBar"
description: "class HealthBar in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthBar

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HealthBar(Transform enemy, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" healthStat, Shader shader, Vector3 barScale, float verticalOffset, int _Progress)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-transform" /><code>{"Transform transform"}</code> |

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> |
| <Link id="m-healthstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" healthStat"}</code> |
| <Link id="m-material" /><code>{"private Material material"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |
| <Link id="m-updatehealthbar" /><code>{"void UpdateHealthBar("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" s)"}</code> |
| <Link id="m-updaterotation" /><code>{"void UpdateRotation(Vector3 headPosition)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-gethealthbar" /><code>{"private Transform GetHealthBar(Vector3 barScale)"}</code> |
| <Link id="m-gethighestpointoncreature" /><code>{"private float GetHighestPointOnCreature(Transform creature)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `HealthBar`:

[`ToggleEnemyHealthBars.healthBarMapping`](/game-api/types/alta-player/toggleenemyhealthbars#m-healthbarmapping).
