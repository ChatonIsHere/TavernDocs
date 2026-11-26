---
title: "ILightDetector"
description: "Something that reacts to a light Beam hitting it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILightDetector

An **interface** in `Root.Township`, no namespace.

Something that reacts to a light `Beam` hitting it.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`PuzzleLightMirror`](/game-api/types/global-p/puzzlelightmirror), [`PuzzleLightTarget`](/game-api/types/global-p/puzzlelighttarget)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginhit" /><code>{"void BeginHit("}<Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{" beam)"}</code> | Called when a beam starts hitting it. |
| <Link id="m-endhit" /><code>{"void EndHit("}<Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{" beam)"}</code> | Called when a beam stops hitting it. |

## Used in

Members of other types that take, return or hold a `ILightDetector`:

[`Beam.Hit`](/game-api/types/global-a-b/beam#m-hit).
