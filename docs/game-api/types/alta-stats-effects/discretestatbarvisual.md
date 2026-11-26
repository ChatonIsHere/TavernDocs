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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DiscreteStatBarVisual()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"private readonly int _Alpha"}</code> | Shader property id for `_Alpha`. Not used; `SetAlpha` changes the material colour instead. |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/global-a-b/animatescaleovertime">{"AnimateScaleOverTime"}</Link>{" animator"}</code> | Scale animation used for pings. |
| <Link id="m-color" /><code>{"private Color color"}</code> | The base material's colour, kept so `SetAlpha` only changes alpha. |
| <Link id="m-material" /><code>{"private Material material"}</code> | Base material copied in `Awake`. |
| <Link id="m-pingcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" pingCoroutine"}</code> | The running ping animation, if any. |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | Renderers that share the segment's material copy. |
| <Link id="m-usedmaterial" /><code>{"private Material usedMaterial"}</code> | This segment's own copy of `material`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ping" /><code>{"void Ping(float duration)"}</code> | Plays the scale animation for a number of seconds, restarting it if it's already running. Does nothing while the segment is hidden. |
| <Link id="m-setrenderersenabled" /><code>{"void SetRenderersEnabled(bool isEnabled)"}</code> | Turns the segment's renderers on or off without hiding the object. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Makes a tracked copy of the material and gives it to all the segment's renderers. |
| <Link id="m-pinganimation" /><code>{"private IEnumerator PingAnimation(float duration) (iterator)"}</code> | Coroutine behind `Ping`: starts the animator, waits, then stops it. |
| <Link id="m-setactive" /><code>{"internal void SetActive(bool activeState)"}</code> | Shows or hides the segment, resetting its animation when shown. |
| <Link id="m-setalpha" /><code>{"internal void SetAlpha(float alpha)"}</code> | Sets the material colour's alpha, keeping the original colour. |

</details>

## Used in

Members of other types that take, return or hold a `DiscreteStatBarVisual`:

[`DiscreteStatBar.barPrefab`](/game-api/types/alta-stats-effects/discretestatbar#m-barprefab), [`DiscreteStatBar.SpawnBar`](/game-api/types/alta-stats-effects/discretestatbar#m-spawnbar), [`DiscreteStatBar.spawnedBars`](/game-api/types/alta-stats-effects/discretestatbar#m-spawnedbars).
