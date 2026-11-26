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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatBarBase`](/mod/game-api/types/alta-stats-effects/statbarbase)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DiscreteStatBar()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphalimit" /><code>{"private static readonly int _AlphaLimit"}</code> | <span className="api-desc">Shader property id for `_AlphaLimit`. Unused here.</span> |
| <Link id="m-anglerange" /><code>{"private float angleRange"}</code> | <span className="api-desc">Degrees the segments are spread across.</span> |
| <Link id="m-barprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/discretestatbarvisual">{"DiscreteStatBarVisual"}</Link>{" barPrefab"}</code> | <span className="api-desc">The segment visual to spawn.</span> |
| <Link id="m-currentalpha" /><code>{"private float currentAlpha"}</code> | <span className="api-desc">Last alpha set.</span> |
| <Link id="m-intervalperbar" /><code>{"private float intervalPerBar"}</code> | <span className="api-desc">Stat value each segment stands for.</span> |
| <Link id="m-lastvalue" /><code>{"private int lastValue"}</code> | <span className="api-desc">Last whole number of segments shown.</span> |
| <Link id="m-spawnedbars" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/discretestatbarvisual">{"DiscreteStatBarVisual"}</Link>{"[] spawnedBars"}</code> | <span className="api-desc">The spawned segments.</span> |
| <Link id="m-visibilitydecidor" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statbar">{"StatBar"}</Link>{" visibilityDecidor"}</code> | <span className="api-desc">The `StatBar` whose visibility this bar follows.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Spawns the segments, shows the current value and follows the visibility of `visibilityDecidor`.</span> |
| <Link id="m-ping" /><code>{"override void Ping(float duration)"}</code> | <span className="api-desc">Pings the bar and every segment for a duration.</span> |
| <Link id="m-setalpha" /><code>{"override void SetAlpha(float alpha)"}</code> | <span className="api-desc">Sets the alpha on every segment.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Only calls the base.</span> |
| <Link id="m-onstatchanged" /><code>{"protected override void OnStatChanged("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Turns on as many segments as whole intervals in the stat value.</span> |
| <Link id="m-setrenderersenabled" /><code>{"protected override void SetRenderersEnabled(bool isEnabled)"}</code> | <span className="api-desc">Turns segment renderers on only when enabled and alpha is above 0.01.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupallbars" /><code>{"private void SetupAllBars()"}</code> | <span className="api-desc">Spawns one segment per interval. The count works out as `Maximum - Minimum / intervalPerBar` because of missing brackets.</span> |
| <Link id="m-spawnbar" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/discretestatbarvisual">{"DiscreteStatBarVisual"}</Link>{" SpawnBar(int i, int barCount)"}</code> | <span className="api-desc">Spawns one segment as a child and rotates it to its place in `angleRange`.</span> |
| <Link id="m-updatebars" /><code>{"private void UpdateBars()"}</code> | <span className="api-desc">Activates segments below the current whole value and hides the rest.</span> |

</details>
