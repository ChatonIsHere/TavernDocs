---
title: "ProfilingPositionCycler"
description: "Client debug settings: moves the camera to saved positions, waits for chunks to load, records Unity profiler data and render stats, and writes a report."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfilingPositionCycler

A **class** in `Root.Township`, no namespace.

Client debug settings: moves the camera to saved positions, waits for chunks to load, records Unity profiler data and render stats, and writes a report.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<ProfilingPositionCycler>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ProfilingPositionCycler`](/game-api/types/global-p/profilingpositioncycler), [`ProfilingPositionCycler.Create`](/game-api/types/global-p/profilingpositioncycler-create)
- **Nested types** [`Create`](/game-api/types/global-p/profilingpositioncycler-create), [`ProfilingPosition`](/game-api/types/global-p/profilingpositioncycler-profilingposition)
- **Attributes** `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProfilingPositionCycler()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code>{"List<"}<Link to="/game-api/types/global-p/profilingpositioncycler-profilingposition">{"ProfilingPositionCycler.ProfilingPosition"}</Link>{"> positions"}</code> | Camera positions and rotations to profile. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-timeperposition" /><code>{"private float timePerPosition"}</code> | Seconds to record at each position (up to 150 frames). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-profilingpath" /><code>{"static string ProfilingPath { get; }"}</code> | `ProfilingResults` folder under persistent storage. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-singleprofile" /><code>{"IEnumerator SingleProfile() (iterator)"}</code> | Profiles the current camera position only. |
| <Link id="m-startforwardrendereringprofiler" /><code>{"IEnumerator StartForwardRendereringProfiler(Transform cameraTransform, Transform vrCameraTransform, int iterations) (iterator)"}</code> | For each position, records a baseline and then again with each `RenderingDisabler` type off, for several iterations. |
| <Link id="m-startprofiling" /><code>{"IEnumerator StartProfiling(Transform cameraTransform, Transform vrCameraTransform) (iterator)"}</code> | For each position, loads the chunk, waits, records a profiler log for up to 150 frames and adds FPS and render stats to the report. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-recordpositionandstate" /><code>{"private IEnumerator RecordPositionAndState(string folderPath, int current, int frames, Transform cameraTransform, Transform vrCameraTransform, StringBuilder result) (iterator)"}</code> | Writes visible renderer, skinned mesh, vertex and unique mesh counts. Its FPS and render time lines are always empty. |
| <Link id="m-writeresults" /><code>{"private void WriteResults(string profilerName, string folderPath, StringBuilder result)"}</code> | Writes the report to a `_Loader.txt` file. |

</details>
