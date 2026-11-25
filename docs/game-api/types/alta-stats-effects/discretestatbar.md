---
title: "DiscreteStatBar"
description: "class DiscreteStatBar in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiscreteStatBar

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatBarBase`](/game-api/types/alta-stats-effects/statbarbase)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DiscreteStatBar()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-alphalimit" /><code>{"private static readonly int _AlphaLimit"}</code> |
| <Link id="m-anglerange" /><code>{"private float angleRange"}</code> |
| <Link id="m-barprefab" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/discretestatbarvisual">{"DiscreteStatBarVisual"}</Link>{" barPrefab"}</code> |
| <Link id="m-currentalpha" /><code>{"private float currentAlpha"}</code> |
| <Link id="m-intervalperbar" /><code>{"private float intervalPerBar"}</code> |
| <Link id="m-lastvalue" /><code>{"private int lastValue"}</code> |
| <Link id="m-spawnedbars" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/discretestatbarvisual">{"DiscreteStatBarVisual"}</Link>{"[] spawnedBars"}</code> |
| <Link id="m-visibilitydecidor" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbar">{"StatBar"}</Link>{" visibilityDecidor"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-ping" /><code>{"override void Ping(float duration)"}</code> |
| <Link id="m-setalpha" /><code>{"override void SetAlpha(float alpha)"}</code> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |
| <Link id="m-onstatchanged" /><code>{"protected override void OnStatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |
| <Link id="m-setrenderersenabled" /><code>{"protected override void SetRenderersEnabled(bool isEnabled)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-setupallbars" /><code>{"private void SetupAllBars()"}</code> |
| <Link id="m-spawnbar" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/discretestatbarvisual">{"DiscreteStatBarVisual"}</Link>{" SpawnBar(int i, int barCount)"}</code> |
| <Link id="m-updatebars" /><code>{"private void UpdateBars()"}</code> |

</details>
