---
title: "ProfilingPositionCycler"
description: "class ProfilingPositionCycler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfilingPositionCycler

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-positions" /><code>{"List<"}<Link to="/game-api/types/global-p/profilingpositioncycler-profilingposition">{"ProfilingPositionCycler.ProfilingPosition"}</Link>{"> positions"}</code> |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-timeperposition" /><code>{"private float timePerPosition"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-profilingpath" /><code>{"static string ProfilingPath { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-singleprofile" /><code>{"IEnumerator SingleProfile() (iterator)"}</code> |
| <Link id="m-startforwardrendereringprofiler" /><code>{"IEnumerator StartForwardRendereringProfiler(Transform cameraTransform, Transform vrCameraTransform, int iterations) (iterator)"}</code> |
| <Link id="m-startprofiling" /><code>{"IEnumerator StartProfiling(Transform cameraTransform, Transform vrCameraTransform) (iterator)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-recordpositionandstate" /><code>{"private IEnumerator RecordPositionAndState(string folderPath, int current, int frames, Transform cameraTransform, Transform vrCameraTransform, StringBuilder result) (iterator)"}</code> |
| <Link id="m-writeresults" /><code>{"private void WriteResults(string profilerName, string folderPath, StringBuilder result)"}</code> |

</details>
