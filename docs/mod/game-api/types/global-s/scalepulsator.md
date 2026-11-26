---
title: "ScalePulsator"
description: "Component that pulses an object's scale up and down from its starting size."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScalePulsator

A **class** in `Root.Township`, the global namespace.

Component that pulses an object's scale up and down from its starting size. Add one at runtime with `StartPulsator`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`RendererScalePulsator`](/mod/game-api/types/global-q-r/rendererscalepulsator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScalePulsator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basesize" /><code>{"private float baseSize"}</code> | <span className="api-desc">Scale at the bottom of the pulse, as a multiple of the starting scale.</span> |
| <Link id="m-isstartingonawake" /><code>{"private bool isStartingOnAwake"}</code> | <span className="api-desc">Starts pulsing on `Awake` when set.</span> |
| <Link id="m-pulsespeed" /><code>{"private float pulseSpeed"}</code> | <span className="api-desc">Backing field for `PulseSpeed`.</span> |
| <Link id="m-sizemultiplier" /><code>{"private float sizeMultiplier"}</code> | <span className="api-desc">Backing field for `SizeMultiplier`.</span> |
| <Link id="m-startsize" /><code>{"private Vector3 startSize"}</code> | <span className="api-desc">Backing field for `StartSize`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pulsespeed-2" /><code>{"float PulseSpeed { get; set; }"}</code> | <span className="api-desc">Pulses per second, roughly (half a cosine cycle per unit). Can be changed while running.</span> |
| <Link id="m-sizemultiplier-2" /><code>{"float SizeMultiplier { get; set; }"}</code> | <span className="api-desc">Scale at the top of the pulse, as a multiple of the starting scale. Can be changed while running.</span> |
| <Link id="m-startsize-2" /><code>{"Vector3 StartSize { get; }"}</code> | <span className="api-desc">The local scale the object had on `Awake`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startpulsator" /><code>{"static void StartPulsator(GameObject gameobject)"}</code> | <span className="api-desc">Adds a `ScalePulsator` to the object if needed and starts it.</span> |
| <Link id="m-startpulsing" /><code>{"void StartPulsing()"}</code> | <span className="api-desc">Restarts the pulse coroutine, if the component is active.</span> |
| <Link id="m-stoppulsator" /><code>{"static void StopPulsator(GameObject gameobject)"}</code> | <span className="api-desc">Stops the pulsator on the object, if it has one.</span> |
| <Link id="m-stoppulsing" /><code>{"void StopPulsing()"}</code> | <span className="api-desc">Stops the pulse and puts the starting scale back.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Saves the starting scale and starts pulsing if `isStartingOnAwake` is set.</span> |
| <Link id="m-updatescale" /><code>{"private IEnumerator UpdateScale() (iterator)"}</code> | <span className="api-desc">Coroutine that moves the scale between `baseSize` and `SizeMultiplier` on a cosine each frame.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ScalePulsator`:

<div className="api-used-in">

[`DockVisual.scalePulsator`](/mod/game-api/types/alta-items/dockvisual#m-scalepulsator).

</div>
