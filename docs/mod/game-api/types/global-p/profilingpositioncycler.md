---
title: "ProfilingPositionCycler"
description: "Client debug settings: moves the camera to saved positions, waits for chunks to load, records Unity profiler data and render stats, and writes a report."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfilingPositionCycler

A **class** in `Root.Township`, the global namespace.

Client debug settings: moves the camera to saved positions, waits for chunks to load, records Unity profiler data and render stats, and writes a report.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<ProfilingPositionCycler>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ProfilingPositionCycler`](/mod/game-api/types/global-p/profilingpositioncycler), [`ProfilingPositionCycler.Create`](/mod/game-api/types/global-p/profilingpositioncycler-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/profilingpositioncycler-create), [`ProfilingPosition`](/mod/game-api/types/global-p/profilingpositioncycler-profilingposition)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfilingPositionCycler()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code>{"List<"}<Link to="/mod/game-api/types/global-p/profilingpositioncycler-profilingposition">{"ProfilingPositionCycler.ProfilingPosition"}</Link>{"> positions"}</code> | <span className="api-desc">Camera positions and rotations to profile.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-timeperposition" /><code>{"private float timePerPosition"}</code> | <span className="api-desc">Seconds to record at each position (up to 150 frames).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-profilingpath" /><code>{"static string ProfilingPath { get; }"}</code> | <span className="api-desc">`ProfilingResults` folder under persistent storage.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-singleprofile" /><code>{"IEnumerator SingleProfile() (iterator)"}</code> | <span className="api-desc">Profiles the current camera position only.</span> |
| <Link id="m-startforwardrendereringprofiler" /><code>{"IEnumerator StartForwardRendereringProfiler(Transform cameraTransform, Transform vrCameraTransform, int iterations) (iterator)"}</code> | <span className="api-desc">For each position, records a baseline and then again with each `RenderingDisabler` type off, for several iterations.</span> |
| <Link id="m-startprofiling" /><code>{"IEnumerator StartProfiling(Transform cameraTransform, Transform vrCameraTransform) (iterator)"}</code> | <span className="api-desc">For each position, loads the chunk, waits, records a profiler log for up to 150 frames and adds FPS and render stats to the report.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-recordpositionandstate" /><code>{"private IEnumerator RecordPositionAndState(string folderPath, int current, int frames, Transform cameraTransform, Transform vrCameraTransform, StringBuilder result) (iterator)"}</code> | <span className="api-desc">Writes visible renderer, skinned mesh, vertex and unique mesh counts. Its FPS and render time lines are always empty.</span> |
| <Link id="m-writeresults" /><code>{"private void WriteResults(string profilerName, string folderPath, StringBuilder result)"}</code> | <span className="api-desc">Writes the report to a `_Loader.txt` file.</span> |

</details>
