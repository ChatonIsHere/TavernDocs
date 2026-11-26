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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkCandidateFinder()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-candidates" /><code>{"private List<GameObject> candidates"}</code> | The objects found by the last search. |
| <Link id="m-isadding" /><code>{"private bool isAdding"}</code> | Inspector button that runs `AddMarkers`. |
| <Link id="m-isapplyall" /><code>{"private bool isApplyAll"}</code> | Inspector button that runs `ApplyAll`. |
| <Link id="m-isfinding" /><code>{"private bool isFinding"}</code> | Inspector button that runs `FindLandmarkCandidates`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-minvolume" /><code>{"private float minVolume"}</code> | Smallest bounds volume an object needs to be a candidate (default 100). |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addmarkers" /><code>{"private void AddMarkers()"}</code> | Adds a `WorldLandmarkMarker` to every candidate. |
| <Link id="m-applyall" /><code>{"private void ApplyAll()"}</code> | Inspector action. Empty in this build. |
| <Link id="m-findlandmarkcandidates" /><code>{"private void FindLandmarkCandidates()"}</code> | Lists static direct children of every `OverworldChunk` with a bounds volume of at least `minVolume`, largest first. |

</details>
