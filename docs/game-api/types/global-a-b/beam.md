---
title: "Beam"
description: "One light beam cast from an ILightEmitter, tracking which ILightDetector it is hitting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Beam

A **class** in `Root.Township`, no namespace.

One light beam cast from an `ILightEmitter`, tracking which `ILightDetector` it is hitting. Plain class, not a component.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code><Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{"("}<Link to="/game-api/types/global-i-l/ilightemitter">{"ILightEmitter"}</Link>{" emitter, "}<Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{" beam)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"Vector3 Direction { get; private set; }"}</code> | The direction of the last `Emit`. |
| <Link id="m-emitter" /><code><Link to="/game-api/types/global-i-l/ilightemitter">{"ILightEmitter"}</Link>{" Emitter { get; }"}</code> | The light emitter that owns this beam. Its `Distance` and `Mask` control the raycast. |
| <Link id="m-hit" /><code><Link to="/game-api/types/global-i-l/ilightdetector">{"ILightDetector"}</Link>{" Hit { get; private set; }"}</code> | The light detector the beam is hitting now, or null. |
| <Link id="m-parent" /><code><Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{" Parent { get; }"}</code> | Meant to be the beam this one came from, but the constructor never sets it, so it is always null. |
| <Link id="m-raycasthit" /><code>{"RaycastHit RaycastHit { get; private set; }"}</code> | The raycast result of the last `Emit` that hit something. Not cleared when the beam misses. |
| <Link id="m-start" /><code>{"Vector3 Start { get; private set; }"}</code> | The start point of the last `Emit`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-emit" /><code>{"void Emit(Vector3 start, Vector3 direction)"}</code> | Raycasts from a start point along a direction using the emitter's distance and mask, telling detectors when the beam starts or stops hitting them. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Tells the current detector the beam has left it and clears `Hit`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-drawray" /><code>{"private void DrawRay()"}</code> | Debug-draws the beam: white for no hit, blue for hitting a collider, green for hitting a light detector. |

</details>

## Used in

Members of other types that take, return or hold a `Beam`:

[`ILightDetector.BeginHit`](/game-api/types/global-i-l/ilightdetector#m-beginhit), [`ILightDetector.EndHit`](/game-api/types/global-i-l/ilightdetector#m-endhit), [`PuzzleLightBeam.beam`](/game-api/types/global-p/puzzlelightbeam#m-beam), [`PuzzleLightMirror.BeginHit`](/game-api/types/global-p/puzzlelightmirror#m-beginhit), [`PuzzleLightMirror.EndHit`](/game-api/types/global-p/puzzlelightmirror#m-endhit), [`PuzzleLightMirror.IsAllowed`](/game-api/types/global-p/puzzlelightmirror#m-isallowed), [`PuzzleLightMirror.mapping`](/game-api/types/global-p/puzzlelightmirror#m-mapping), [`PuzzleLightTarget.BeginHit`](/game-api/types/global-p/puzzlelighttarget#m-beginhit), [`PuzzleLightTarget.EndHit`](/game-api/types/global-p/puzzlelighttarget#m-endhit).
