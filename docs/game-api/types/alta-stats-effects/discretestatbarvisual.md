---
title: "DiscreteStatBarVisual"
description: "class DiscreteStatBarVisual in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiscreteStatBarVisual

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DiscreteStatBarVisual()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"private readonly int _Alpha"}</code> |  |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/global-a-b/animatescaleovertime">{"AnimateScaleOverTime"}</Link>{" animator"}</code> |  |
| <Link id="m-color" /><code>{"private Color color"}</code> |  |
| <Link id="m-material" /><code>{"private Material material"}</code> |  |
| <Link id="m-pingcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" pingCoroutine"}</code> |  |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> |  |
| <Link id="m-usedmaterial" /><code>{"private Material usedMaterial"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ping" /><code>{"void Ping(float duration)"}</code> |  |
| <Link id="m-setrenderersenabled" /><code>{"void SetRenderersEnabled(bool isEnabled)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-pinganimation" /><code>{"private IEnumerator PingAnimation(float duration) (iterator)"}</code> |  |
| <Link id="m-setactive" /><code>{"internal void SetActive(bool activeState)"}</code> |  |
| <Link id="m-setalpha" /><code>{"internal void SetAlpha(float alpha)"}</code> |  |

## Used in

Members of other types that take, return or hold a `DiscreteStatBarVisual`:

[`DiscreteStatBar.barPrefab`](/game-api/types/alta-stats-effects/discretestatbar#m-barprefab), [`DiscreteStatBar.SpawnBar`](/game-api/types/alta-stats-effects/discretestatbar#m-spawnbar), [`DiscreteStatBar.spawnedBars`](/game-api/types/alta-stats-effects/discretestatbar#m-spawnedbars).
