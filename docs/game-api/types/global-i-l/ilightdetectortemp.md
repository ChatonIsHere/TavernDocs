---
title: "ILightDetectorTemp"
description: "Temporary light puzzle detector, hit by TempLaser."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILightDetectorTemp

An **interface** in `Root.Township`, no namespace.

Temporary light puzzle detector, hit by `TempLaser`. Implemented by `TempAbsorber`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`TempAbsorber`](/game-api/types/global-t-x/tempabsorber)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginhit" /><code>{"void BeginHit("}<Link to="/game-api/types/global-i-l/ilightemittertemp">{"ILightEmitterTemp"}</Link>{" emitter)"}</code> | Called when the emitter's laser starts hitting it. |
| <Link id="m-endhit" /><code>{"void EndHit("}<Link to="/game-api/types/global-i-l/ilightemittertemp">{"ILightEmitterTemp"}</Link>{" emitter)"}</code> | Called when the emitter's laser stops hitting it. |

## Used in

Members of other types that take, return or hold a `ILightDetectorTemp`:

[`TempLaser.oldDetector`](/game-api/types/global-t-x/templaser#m-olddetector).
