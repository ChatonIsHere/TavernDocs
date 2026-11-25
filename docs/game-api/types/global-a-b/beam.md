---
title: "Beam"
description: "class Beam in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Beam

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code><Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{"("}<Link to="/game-api/types/global-i-l/ilightemitter">{"ILightEmitter"}</Link>{" emitter, "}<Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{" beam)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"Vector3 Direction { get; private set; }"}</code> |  |
| <Link id="m-emitter" /><code><Link to="/game-api/types/global-i-l/ilightemitter">{"ILightEmitter"}</Link>{" Emitter { get; }"}</code> |  |
| <Link id="m-hit" /><code><Link to="/game-api/types/global-i-l/ilightdetector">{"ILightDetector"}</Link>{" Hit { get; private set; }"}</code> |  |
| <Link id="m-parent" /><code><Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{" Parent { get; }"}</code> |  |
| <Link id="m-raycasthit" /><code>{"RaycastHit RaycastHit { get; private set; }"}</code> |  |
| <Link id="m-start" /><code>{"Vector3 Start { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-emit" /><code>{"void Emit(Vector3 start, Vector3 direction)"}</code> |  |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |  |
| <Link id="m-drawray" /><code>{"private void DrawRay()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Beam`:

[`ILightDetector.BeginHit`](/game-api/types/global-i-l/ilightdetector#m-beginhit), [`ILightDetector.EndHit`](/game-api/types/global-i-l/ilightdetector#m-endhit), [`PuzzleLightBeam.beam`](/game-api/types/global-p/puzzlelightbeam#m-beam), [`PuzzleLightMirror.BeginHit`](/game-api/types/global-p/puzzlelightmirror#m-beginhit), [`PuzzleLightMirror.EndHit`](/game-api/types/global-p/puzzlelightmirror#m-endhit), [`PuzzleLightMirror.IsAllowed`](/game-api/types/global-p/puzzlelightmirror#m-isallowed), [`PuzzleLightMirror.mapping`](/game-api/types/global-p/puzzlelightmirror#m-mapping), [`PuzzleLightTarget.BeginHit`](/game-api/types/global-p/puzzlelighttarget#m-beginhit), [`PuzzleLightTarget.EndHit`](/game-api/types/global-p/puzzlelighttarget#m-endhit).
