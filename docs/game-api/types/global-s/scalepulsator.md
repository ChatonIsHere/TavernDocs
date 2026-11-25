---
title: "ScalePulsator"
description: "class ScalePulsator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScalePulsator

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`RendererScalePulsator`](/game-api/types/global-q-r/rendererscalepulsator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ScalePulsator()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basesize" /><code>{"private float baseSize"}</code> |
| <Link id="m-isstartingonawake" /><code>{"private bool isStartingOnAwake"}</code> |
| <Link id="m-pulsespeed" /><code>{"private float pulseSpeed"}</code> |
| <Link id="m-sizemultiplier" /><code>{"private float sizeMultiplier"}</code> |
| <Link id="m-startsize" /><code>{"private Vector3 startSize"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-pulsespeed-2" /><code>{"float PulseSpeed { get; set; }"}</code> |
| <Link id="m-sizemultiplier-2" /><code>{"float SizeMultiplier { get; set; }"}</code> |
| <Link id="m-startsize-2" /><code>{"Vector3 StartSize { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-startpulsator" /><code>{"static void StartPulsator(GameObject gameobject)"}</code> |
| <Link id="m-startpulsing" /><code>{"void StartPulsing()"}</code> |
| <Link id="m-stoppulsator" /><code>{"static void StopPulsator(GameObject gameobject)"}</code> |
| <Link id="m-stoppulsing" /><code>{"void StopPulsing()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-updatescale" /><code>{"private IEnumerator UpdateScale() (iterator)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ScalePulsator`:

[`DockVisual.scalePulsator`](/game-api/types/alta-items/dockvisual#m-scalepulsator).
