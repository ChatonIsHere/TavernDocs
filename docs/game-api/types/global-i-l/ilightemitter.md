---
title: "ILightEmitter"
description: "A light puzzle beam source, such as PuzzleLightBeam or PuzzleLightMirror."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILightEmitter

An **interface** in `Root.Township`, no namespace.

A light puzzle beam source, such as `PuzzleLightBeam` or `PuzzleLightMirror`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`PuzzleLightBeam`](/game-api/types/global-p/puzzlelightbeam), [`PuzzleLightMirror`](/game-api/types/global-p/puzzlelightmirror)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"float Distance { get; }"}</code> | How far the beam reaches. |
| <Link id="m-mask" /><code>{"LayerMask Mask { get; }"}</code> | Layers the beam can hit. |

## Used in

Members of other types that take, return or hold a `ILightEmitter`:

[`Beam.Beam`](/game-api/types/global-a-b/beam#m-ctor), [`Beam.Emitter`](/game-api/types/global-a-b/beam#m-emitter).
