---
title: "ScalePulsator"
description: "Component that pulses an object's scale up and down from its starting size."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScalePulsator

A **class** in `Root.Township`, no namespace.

Component that pulses an object's scale up and down from its starting size. Add one at runtime with `StartPulsator`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`RendererScalePulsator`](/game-api/types/global-q-r/rendererscalepulsator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScalePulsator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basesize" /><code>{"private float baseSize"}</code> | Scale at the bottom of the pulse, as a multiple of the starting scale. |
| <Link id="m-isstartingonawake" /><code>{"private bool isStartingOnAwake"}</code> | Starts pulsing on `Awake` when set. |
| <Link id="m-pulsespeed" /><code>{"private float pulseSpeed"}</code> | Backing field for `PulseSpeed`. |
| <Link id="m-sizemultiplier" /><code>{"private float sizeMultiplier"}</code> | Backing field for `SizeMultiplier`. |
| <Link id="m-startsize" /><code>{"private Vector3 startSize"}</code> | Backing field for `StartSize`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pulsespeed-2" /><code>{"float PulseSpeed { get; set; }"}</code> | Pulses per second, roughly (half a cosine cycle per unit). Can be changed while running. |
| <Link id="m-sizemultiplier-2" /><code>{"float SizeMultiplier { get; set; }"}</code> | Scale at the top of the pulse, as a multiple of the starting scale. Can be changed while running. |
| <Link id="m-startsize-2" /><code>{"Vector3 StartSize { get; }"}</code> | The local scale the object had on `Awake`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startpulsator" /><code>{"static void StartPulsator(GameObject gameobject)"}</code> | Adds a `ScalePulsator` to the object if needed and starts it. |
| <Link id="m-startpulsing" /><code>{"void StartPulsing()"}</code> | Restarts the pulse coroutine, if the component is active. |
| <Link id="m-stoppulsator" /><code>{"static void StopPulsator(GameObject gameobject)"}</code> | Stops the pulsator on the object, if it has one. |
| <Link id="m-stoppulsing" /><code>{"void StopPulsing()"}</code> | Stops the pulse and puts the starting scale back. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Saves the starting scale and starts pulsing if `isStartingOnAwake` is set. |
| <Link id="m-updatescale" /><code>{"private IEnumerator UpdateScale() (iterator)"}</code> | Coroutine that moves the scale between `baseSize` and `SizeMultiplier` on a cosine each frame. |

</details>

## Used in

Members of other types that take, return or hold a `ScalePulsator`:

[`DockVisual.scalePulsator`](/game-api/types/alta-items/dockvisual#m-scalepulsator).
