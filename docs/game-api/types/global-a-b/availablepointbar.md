---
title: "AvailablePointBar"
description: "Client: one pip showing an unspent progression point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AvailablePointBar

A **class** in `Root.Township`, no namespace.

Client: one pip showing an unspent progression point. `PipAvailablePointManager` makes one per possible free point and lights or dims them by fading the material's `_Alpha`.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AvailablePointBar()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"private static readonly int _Alpha"}</code> | Shader property ID for `_Alpha`. |
| <Link id="m-animatingrenderer" /><code>{"private Renderer animatingRenderer"}</code> | Renderer whose material alpha is faded. |
| <Link id="m-litprogress" /><code>{"private float litProgress"}</code> | Alpha used when lit. |
| <Link id="m-runninganimation" /><code>{"private Coroutine runningAnimation"}</code> | The fade coroutine in progress, if any. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dim" /><code>{"void Dim()"}</code> | Fades the pip out to 0. |
| <Link id="m-instantsettoalpha" /><code>{"void InstantSetToAlpha(float alpha)"}</code> | Sets the material's alpha at once. |
| <Link id="m-light" /><code>{"void Light()"}</code> | Fades the pip up to `litProgress`. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private void Animate(float target)"}</code> | Starts fading alpha to the target, stopping any fade already running. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Starts the pip fully transparent, except on headless servers. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Fills in the renderer from this object if it is empty. |
| <Link id="m-runanimation" /><code>{"private IEnumerator RunAnimation(float target) (iterator)"}</code> | Coroutine that lerps alpha to the target over a time equal to the alpha difference. |

</details>

## Used in

Members of other types that take, return or hold a `AvailablePointBar`:

[`PipAvailablePointManager.instantiated`](/game-api/types/global-p/pipavailablepointmanager#m-instantiated), [`PipAvailablePointManager.pipPrefab`](/game-api/types/global-p/pipavailablepointmanager#m-pipprefab).
