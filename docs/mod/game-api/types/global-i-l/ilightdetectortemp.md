---
title: "ILightDetectorTemp"
description: "Temporary light puzzle detector, hit by TempLaser."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILightDetectorTemp

An **interface** in `Root.Township`, the global namespace.

Temporary light puzzle detector, hit by `TempLaser`. Implemented by `TempAbsorber`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`TempAbsorber`](/mod/game-api/types/global-t-x/tempabsorber)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginhit" /><code>{"void BeginHit("}<Link to="/mod/game-api/types/global-i-l/ilightemittertemp">{"ILightEmitterTemp"}</Link>{" emitter)"}</code> | <span className="api-desc">Called when the emitter's laser starts hitting it.</span> |
| <Link id="m-endhit" /><code>{"void EndHit("}<Link to="/mod/game-api/types/global-i-l/ilightemittertemp">{"ILightEmitterTemp"}</Link>{" emitter)"}</code> | <span className="api-desc">Called when the emitter's laser stops hitting it.</span> |

## Used in

Members of other types that take, return or hold a `ILightDetectorTemp`:

<div className="api-used-in">

[`TempLaser.oldDetector`](/mod/game-api/types/global-t-x/templaser#m-olddetector).

</div>
