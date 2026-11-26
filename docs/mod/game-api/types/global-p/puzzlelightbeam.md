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
| <Link id="m-ctor" /><code>{"PuzzleLightBeam()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"protected float distance"}</code> | <span className="api-desc">Beam reach, 100 by default.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beam" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" beam"}</code> | <span className="api-desc">The beam this emitter casts.</span> |
| <Link id="m-mask" /><code>{"private LayerMask mask"}</code> | <span className="api-desc">Layers the beam raycast hits.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance-2" /><code>{"float Distance { get; }"}</code> | <span className="api-desc">How far the beam reaches.</span> |
| <Link id="m-mask-2" /><code>{"LayerMask Mask { get; }"}</code> | <span className="api-desc">Layers the beam can hit.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Creates the beam.</span> |
| <Link id="m-update" /><code>{"protected virtual void Update()"}</code> | <span className="api-desc">Emits the beam from the object's position along its forward direction.</span> |
