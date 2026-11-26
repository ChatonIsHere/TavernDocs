---
title: "DiscreteStatBar"
description: "A stat bar drawn as separate segments spread over an arc, one segment per intervalPerBar of the stat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiscreteStatBar

A **class** in `Root.Township`, `Alta.StatSystem`.

A stat bar drawn as separate segments spread over an arc, one segment per `intervalPerBar` of the stat. Shows and hides with another `StatBar`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatBarBase`](/game-api/types/alta-stats-effects/statbarbase)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DiscreteStatBar()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphalimit" /><code>{"private static readonly int _AlphaLimit"}</code> | Shader property id for `_AlphaLimit`. Unused here. |
| <Link id="m-anglerange" /><code>{"private float angleRange"}</code> | Degrees the segments are spread across. |
| <Link id="m-barprefab" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/discretestatbarvisual">{"DiscreteStatBarVisual"}</Link>{" barPrefab"}</code> | The segment visual to spawn. |
| <Link id="m-currentalpha" /><code>{"private float currentAlpha"}</code> | Last alpha set. |
| <Link id="m-intervalperbar" /><code>{"private float intervalPerBar"}</code> | Stat value each segment stands for. |
| <Link id="m-lastvalue" /><code>{"private int lastValue"}</code> | Last whole number of segments shown. |
| <Link id="m-spawnedbars" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/discretestatbarvisual">{"DiscreteStatBarVisual"}</Link>{"[] spawnedBars"}</code> | The spawned segments. |
| <Link id="m-visibilitydecidor" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbar">{"StatBar"}</Link>{" visibilityDecidor"}</code> | The `StatBar` whose visibility this bar follows. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Spawns the segments, shows the current value and follows the visibility of `visibilityDecidor`. |
| <Link id="m-ping" /><code>{"override void Ping(float duration)"}</code> | Pings the bar and every segment for a duration. |
| <Link id="m-setalpha" /><code>{"override void SetAlpha(float alpha)"}</code> | Sets the alpha on every segment. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Only calls the base. |
| <Link id="m-onstatchanged" /><code>{"protected override void OnStatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Turns on as many segments as whole intervals in the stat value. |
| <Link id="m-setrenderersenabled" /><code>{"protected override void SetRenderersEnabled(bool isEnabled)"}</code> | Turns segment renderers on only when enabled and alpha is above 0.01. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupallbars" /><code>{"private void SetupAllBars()"}</code> | Spawns one segment per interval. The count works out as `Maximum - Minimum / intervalPerBar` because of missing brackets. |
| <Link id="m-spawnbar" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/discretestatbarvisual">{"DiscreteStatBarVisual"}</Link>{" SpawnBar(int i, int barCount)"}</code> | Spawns one segment as a child and rotates it to its place in `angleRange`. |
| <Link id="m-updatebars" /><code>{"private void UpdateBars()"}</code> | Activates segments below the current whole value and hides the rest. |

</details>
