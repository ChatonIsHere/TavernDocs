---
title: "Beam"
description: "One light beam cast from an ILightEmitter, tracking which ILightDetector it is hitting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Beam

A **class** in `Root.Township`, the global namespace.

One light beam cast from an `ILightEmitter`, tracking which `ILightDetector` it is hitting. Plain class, not a component.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code><Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{"("}<Link to="/mod/game-api/types/global-i-l/ilightemitter">{"ILightEmitter"}</Link>{" emitter, "}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" beam)"}</code> | <span className="api-desc">Creates a `Beam` from `emitter` and `beam`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"Vector3 Direction { get; private set; }"}</code> | <span className="api-desc">The direction of the last `Emit`.</span> |
| <Link id="m-emitter" /><code><Link to="/mod/game-api/types/global-i-l/ilightemitter">{"ILightEmitter"}</Link>{" Emitter { get; }"}</code> | <span className="api-desc">The light emitter that owns this beam. Its `Distance` and `Mask` control the raycast.</span> |
| <Link id="m-hit" /><code><Link to="/mod/game-api/types/global-i-l/ilightdetector">{"ILightDetector"}</Link>{" Hit { get; private set; }"}</code> | <span className="api-desc">The light detector the beam is hitting now, or null.</span> |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" Parent { get; }"}</code> | <span className="api-desc">Meant to be the beam this one came from, but the constructor never sets it, so it is always null.</span> |
| <Link id="m-raycasthit" /><code>{"RaycastHit RaycastHit { get; private set; }"}</code> | <span className="api-desc">The raycast result of the last `Emit` that hit something. Not cleared when the beam misses.</span> |
| <Link id="m-start" /><code>{"Vector3 Start { get; private set; }"}</code> | <span className="api-desc">The start point of the last `Emit`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-emit" /><code>{"void Emit(Vector3 start, Vector3 direction)"}</code> | <span className="api-desc">Raycasts from a start point along a direction using the emitter's distance and mask, telling detectors when the beam starts or stops hitting them.</span> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Tells the current detector the beam has left it and clears `Hit`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-drawray" /><code>{"private void DrawRay()"}</code> | <span className="api-desc">Debug-draws the beam: white for no hit, blue for hitting a collider, green for hitting a light detector.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Beam`:

<div className="api-used-in">

[`ILightDetector.BeginHit`](/mod/game-api/types/global-i-l/ilightdetector#m-beginhit), [`ILightDetector.EndHit`](/mod/game-api/types/global-i-l/ilightdetector#m-endhit), [`PuzzleLightBeam.beam`](/mod/game-api/types/global-p/puzzlelightbeam#m-beam), [`PuzzleLightMirror.BeginHit`](/mod/game-api/types/global-p/puzzlelightmirror#m-beginhit), [`PuzzleLightMirror.EndHit`](/mod/game-api/types/global-p/puzzlelightmirror#m-endhit), [`PuzzleLightMirror.IsAllowed`](/mod/game-api/types/global-p/puzzlelightmirror#m-isallowed), [`PuzzleLightMirror.mapping`](/mod/game-api/types/global-p/puzzlelightmirror#m-mapping), [`PuzzleLightTarget.BeginHit`](/mod/game-api/types/global-p/puzzlelighttarget#m-beginhit), [`PuzzleLightTarget.EndHit`](/mod/game-api/types/global-p/puzzlelighttarget#m-endhit).

</div>
