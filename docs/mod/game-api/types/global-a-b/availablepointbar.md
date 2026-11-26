---
title: "AvailablePointBar"
description: "Client: one pip showing an unspent progression point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AvailablePointBar

A **class** in `Root.Township`, the global namespace.

Client: one pip showing an unspent progression point. `PipAvailablePointManager` makes one per possible free point and lights or dims them by fading the material's `_Alpha`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AvailablePointBar()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"private static readonly int _Alpha"}</code> | <span className="api-desc">Shader property ID for `_Alpha`.</span> |
| <Link id="m-animatingrenderer" /><code>{"private Renderer animatingRenderer"}</code> | <span className="api-desc">Renderer whose material alpha is faded.</span> |
| <Link id="m-litprogress" /><code>{"private float litProgress"}</code> | <span className="api-desc">Alpha used when lit.</span> |
| <Link id="m-runninganimation" /><code>{"private Coroutine runningAnimation"}</code> | <span className="api-desc">The fade coroutine in progress, if any.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dim" /><code>{"void Dim()"}</code> | <span className="api-desc">Fades the pip out to 0.</span> |
| <Link id="m-instantsettoalpha" /><code>{"void InstantSetToAlpha(float alpha)"}</code> | <span className="api-desc">Sets the material's alpha at once.</span> |
| <Link id="m-light" /><code>{"void Light()"}</code> | <span className="api-desc">Fades the pip up to `litProgress`.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private void Animate(float target)"}</code> | <span className="api-desc">Starts fading alpha to the target, stopping any fade already running.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Starts the pip fully transparent, except on headless servers.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Fills in the renderer from this object if it is empty.</span> |
| <Link id="m-runanimation" /><code>{"private IEnumerator RunAnimation(float target) (iterator)"}</code> | <span className="api-desc">Coroutine that lerps alpha to the target over a time equal to the alpha difference.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AvailablePointBar`:

<div className="api-used-in">

[`PipAvailablePointManager.instantiated`](/mod/game-api/types/global-p/pipavailablepointmanager#m-instantiated), [`PipAvailablePointManager.pipPrefab`](/mod/game-api/types/global-p/pipavailablepointmanager#m-pipprefab).

</div>
