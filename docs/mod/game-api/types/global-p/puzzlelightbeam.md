---
title: "PuzzleLightBeam"
description: "Light puzzle emitter: casts a Beam forward from its transform every frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleLightBeam

A **class** in `Root.Township`, the global namespace.

Light puzzle emitter: casts a `Beam` forward from its transform every frame. Base class for `PuzzleLightMirror`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`ILightEmitter`](/mod/game-api/types/global-i-l/ilightemitter)
- **Derived types** [`PuzzleLightMirror`](/mod/game-api/types/global-p/puzzlelightmirror)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PuzzleLightBeam()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"protected float distance"}</code> | Beam reach, 100 by default. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beam" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" beam"}</code> | The beam this emitter casts. |
| <Link id="m-mask" /><code>{"private LayerMask mask"}</code> | Layers the beam raycast hits. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance-2" /><code>{"float Distance { get; }"}</code> | How far the beam reaches. |
| <Link id="m-mask-2" /><code>{"LayerMask Mask { get; }"}</code> | Layers the beam can hit. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Creates the beam. |
| <Link id="m-update" /><code>{"protected virtual void Update()"}</code> | Emits the beam from the object's position along its forward direction. |
