---
title: "PuzzleLightMirror"
description: "Light puzzle mirror: each beam that hits it spawns a reflected beam, with a limit on how often one beam chain can bounce off the same mirror."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleLightMirror

A **class** in `Root.Township`, the global namespace.

Light puzzle mirror: each beam that hits it spawns a reflected beam, with a limit on how often one beam chain can bounce off the same mirror.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PuzzleLightBeam`](/mod/game-api/types/global-p/puzzlelightbeam), [`ILightDetector`](/mod/game-api/types/global-i-l/ilightdetector), [`ILightEmitter`](/mod/game-api/types/global-i-l/ilightemitter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PuzzleLightMirror()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mapping" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{", "}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{"> mapping"}</code> | <span className="api-desc">Incoming beam to reflected beam pairs.</span> |
| <Link id="m-singlebeamhitcount" /><code>{"private int singleBeamHitCount"}</code> | <span className="api-desc">How many times one beam chain may hit this mirror.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginhit" /><code>{"void BeginHit("}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" incoming)"}</code> | <span className="api-desc">Creates a reflected beam for a new incoming beam if allowed, and enables the mirror.</span> |
| <Link id="m-endhit" /><code>{"void EndHit("}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" incoming)"}</code> | <span className="api-desc">Stops the reflected beam for that incoming beam; disables the mirror when none are left.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Starts disabled until a beam hits it.</span> |
| <Link id="m-isallowed" /><code>{"protected virtual bool IsAllowed("}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" incoming)"}</code> | <span className="api-desc">False if the incoming beam's chain has already hit this mirror `singleBeamHitCount` times.</span> |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | <span className="api-desc">Re-emits each reflected beam from its incoming beam's hit point, mirrored on the hit normal.</span> |
