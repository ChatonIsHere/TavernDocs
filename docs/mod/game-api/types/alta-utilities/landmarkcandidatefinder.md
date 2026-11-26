---
title: "LandmarkCandidateFinder"
description: "Editor tool: finds large static objects in overworld chunks that could be world landmarks, and adds WorldLandmarkMarker to them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandmarkCandidateFinder

A **class** in `Root.Township`, `Alta.Utilities`.

Editor tool: finds large static objects in overworld chunks that could be world landmarks, and adds `WorldLandmarkMarker` to them.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkCandidateFinder()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-candidates" /><code>{"private List<GameObject> candidates"}</code> | <span className="api-desc">The objects found by the last search.</span> |
| <Link id="m-isadding" /><code>{"private bool isAdding"}</code> | <span className="api-desc">Inspector button that runs `AddMarkers`.</span> |
| <Link id="m-isapplyall" /><code>{"private bool isApplyAll"}</code> | <span className="api-desc">Inspector button that runs `ApplyAll`.</span> |
| <Link id="m-isfinding" /><code>{"private bool isFinding"}</code> | <span className="api-desc">Inspector button that runs `FindLandmarkCandidates`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-minvolume" /><code>{"private float minVolume"}</code> | <span className="api-desc">Smallest bounds volume an object needs to be a candidate (default 100).</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addmarkers" /><code>{"private void AddMarkers()"}</code> | <span className="api-desc">Adds a `WorldLandmarkMarker` to every candidate.</span> |
| <Link id="m-applyall" /><code>{"private void ApplyAll()"}</code> | <span className="api-desc">Inspector action. Empty in this build.</span> |
| <Link id="m-findlandmarkcandidates" /><code>{"private void FindLandmarkCandidates()"}</code> | <span className="api-desc">Lists static direct children of every `OverworldChunk` with a bounds volume of at least `minVolume`, largest first.</span> |

</details>
