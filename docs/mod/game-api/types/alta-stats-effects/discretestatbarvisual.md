---
title: "DiscreteStatBarVisual"
description: "Client: one segment of a DiscreteStatBar."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiscreteStatBarVisual

A **class** in `Root.Township`, `Alta.StatSystem`.

Client: one segment of a `DiscreteStatBar`. Has its own material copy so its alpha can change, and can pulse with a scale animation.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DiscreteStatBarVisual()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"private readonly int _Alpha"}</code> | <span className="api-desc">Shader property id for `_Alpha`. Not used; `SetAlpha` changes the material colour instead.</span> |
| <Link id="m-animator" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/animatescaleovertime">{"AnimateScaleOverTime"}</Link>{" animator"}</code> | <span className="api-desc">Scale animation used for pings.</span> |
| <Link id="m-color" /><code>{"private Color color"}</code> | <span className="api-desc">The base material's colour, kept so `SetAlpha` only changes alpha.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Base material copied in `Awake`.</span> |
| <Link id="m-pingcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" pingCoroutine"}</code> | <span className="api-desc">The running ping animation, if any.</span> |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | <span className="api-desc">Renderers that share the segment's material copy.</span> |
| <Link id="m-usedmaterial" /><code>{"private Material usedMaterial"}</code> | <span className="api-desc">This segment's own copy of `material`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ping" /><code>{"void Ping(float duration)"}</code> | <span className="api-desc">Plays the scale animation for a number of seconds, restarting it if it's already running. Does nothing while the segment is hidden.</span> |
| <Link id="m-setrenderersenabled" /><code>{"void SetRenderersEnabled(bool isEnabled)"}</code> | <span className="api-desc">Turns the segment's renderers on or off without hiding the object.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes a tracked copy of the material and gives it to all the segment's renderers.</span> |
| <Link id="m-pinganimation" /><code>{"private IEnumerator PingAnimation(float duration) (iterator)"}</code> | <span className="api-desc">Coroutine behind `Ping`: starts the animator, waits, then stops it.</span> |
| <Link id="m-setactive" /><code>{"internal void SetActive(bool activeState)"}</code> | <span className="api-desc">Shows or hides the segment, resetting its animation when shown.</span> |
| <Link id="m-setalpha" /><code>{"internal void SetAlpha(float alpha)"}</code> | <span className="api-desc">Sets the material colour's alpha, keeping the original colour.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DiscreteStatBarVisual`:

<div className="api-used-in">

[`DiscreteStatBar.barPrefab`](/mod/game-api/types/alta-stats-effects/discretestatbar#m-barprefab), [`DiscreteStatBar.SpawnBar`](/mod/game-api/types/alta-stats-effects/discretestatbar#m-spawnbar), [`DiscreteStatBar.spawnedBars`](/mod/game-api/types/alta-stats-effects/discretestatbar#m-spawnedbars).

</div>
