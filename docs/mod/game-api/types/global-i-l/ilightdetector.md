---
title: "ILightDetector"
description: "Something that reacts to a light Beam hitting it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILightDetector

An **interface** in `Root.Township`, the global namespace.

Something that reacts to a light `Beam` hitting it.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`PuzzleLightMirror`](/mod/game-api/types/global-p/puzzlelightmirror), [`PuzzleLightTarget`](/mod/game-api/types/global-p/puzzlelighttarget)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginhit" /><code>{"void BeginHit("}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" beam)"}</code> | <span className="api-desc">Called when a beam starts hitting it.</span> |
| <Link id="m-endhit" /><code>{"void EndHit("}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" beam)"}</code> | <span className="api-desc">Called when a beam stops hitting it.</span> |

## Used in

Members of other types that take, return or hold a `ILightDetector`:

<div className="api-used-in">

[`Beam.Hit`](/mod/game-api/types/global-a-b/beam#m-hit).

</div>
