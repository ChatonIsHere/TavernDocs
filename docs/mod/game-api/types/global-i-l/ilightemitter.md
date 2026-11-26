---
title: "ILightEmitter"
description: "A light puzzle beam source, such as PuzzleLightBeam or PuzzleLightMirror."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILightEmitter

An **interface** in `Root.Township`, the global namespace.

A light puzzle beam source, such as `PuzzleLightBeam` or `PuzzleLightMirror`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`PuzzleLightBeam`](/mod/game-api/types/global-p/puzzlelightbeam), [`PuzzleLightMirror`](/mod/game-api/types/global-p/puzzlelightmirror)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"float Distance { get; }"}</code> | <span className="api-desc">How far the beam reaches.</span> |
| <Link id="m-mask" /><code>{"LayerMask Mask { get; }"}</code> | <span className="api-desc">Layers the beam can hit.</span> |

## Used in

Members of other types that take, return or hold a `ILightEmitter`:

<div className="api-used-in">

[`Beam.Beam`](/mod/game-api/types/global-a-b/beam#m-ctor), [`Beam.Emitter`](/mod/game-api/types/global-a-b/beam#m-emitter).

</div>
