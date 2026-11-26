---
title: "PuzzleLightMirror"
description: "Light puzzle mirror: each beam that hits it spawns a reflected beam, with a limit on how often one beam chain can bounce off the same mirror."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleLightMirror

A **class** in `Root.Township`, no namespace.

Light puzzle mirror: each beam that hits it spawns a reflected beam, with a limit on how often one beam chain can bounce off the same mirror.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PuzzleLightBeam`](/game-api/types/global-p/puzzlelightbeam), [`ILightDetector`](/game-api/types/global-i-l/ilightdetector), [`ILightEmitter`](/game-api/types/global-i-l/ilightemitter)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PuzzleLightMirror()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mapping" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{", "}<Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{"> mapping"}</code> | Incoming beam to reflected beam pairs. |
| <Link id="m-singlebeamhitcount" /><code>{"private int singleBeamHitCount"}</code> | How many times one beam chain may hit this mirror. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginhit" /><code>{"void BeginHit("}<Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{" incoming)"}</code> | Creates a reflected beam for a new incoming beam if allowed, and enables the mirror. |
| <Link id="m-endhit" /><code>{"void EndHit("}<Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{" incoming)"}</code> | Stops the reflected beam for that incoming beam; disables the mirror when none are left. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Starts disabled until a beam hits it. |
| <Link id="m-isallowed" /><code>{"protected virtual bool IsAllowed("}<Link to="/game-api/types/global-a-b/beam">{"Beam"}</Link>{" incoming)"}</code> | False if the incoming beam's chain has already hit this mirror `singleBeamHitCount` times. |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | Re-emits each reflected beam from its incoming beam's hit point, mirrored on the hit normal. |
