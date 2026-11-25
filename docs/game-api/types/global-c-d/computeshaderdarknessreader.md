---
title: "ComputeShaderDarknessReader"
description: "class ComputeShaderDarknessReader in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComputeShaderDarknessReader

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`DarknessReaderMethod`](/game-api/types/global-c-d/darknessreadermethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ComputeShaderDarknessReader("}<Link to="/game-api/types/global-c-d/darknessreader">{"DarknessReader"}</Link>{" reader, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character, Action requestSpawn)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colorfilter" /><code>{"private static readonly int _ColorFilter"}</code> |  |
| <Link id="m-finalresults" /><code>{"private static readonly int _FinalResults"}</code> |  |
| <Link id="m-input" /><code>{"private static readonly int _Input"}</code> |  |
| <Link id="m-maxtotaldarkness" /><code>{"private static readonly int _MaxTotalDarkness"}</code> |  |
| <Link id="m-maxvalue" /><code>{"private static readonly int _MaxValue"}</code> |  |
| <Link id="m-resultscount" /><code>{"private static readonly int _ResultsCount"}</code> |  |
| <Link id="m-resultssum" /><code>{"private static readonly int _ResultsSum"}</code> |  |
| <Link id="m-temprt" /><code>{"private static readonly int _TempRT"}</code> |  |
| <Link id="m-bufferclearkernel" /><code>{"private int BufferClearKernel"}</code> |  |
| <Link id="m-camerabuffer" /><code>{"private CommandBuffer cameraBuffer"}</code> |  |
| <Link id="m-computeshader" /><code>{"private ComputeShader computeShader"}</code> |  |
| <Link id="m-darknessreadkernel" /><code>{"private int DarknessReadKernel"}</code> |  |
| <Link id="m-darknessresultkernel" /><code>{"private int DarknessResultKernel"}</code> |  |
| <Link id="m-finalresultbuffer" /><code>{"private ComputeBuffer finalResultBuffer"}</code> |  |
| <Link id="m-height" /><code>{"private int height"}</code> |  |
| <Link id="m-resultcountbuffer" /><code>{"private ComputeBuffer resultCountBuffer"}</code> |  |
| <Link id="m-resultsumbuffer" /><code>{"private ComputeBuffer resultSumBuffer"}</code> |  |
| <Link id="m-samplingrt" /><code>{"private RenderTexture samplingRT"}</code> |  |
| <Link id="m-targetcamera" /><code>{"private Camera targetCamera"}</code> |  |
| <Link id="m-targetcameraevent" /><code>{"private static readonly CameraEvent targetCameraEvent"}</code> |  |
| <Link id="m-width" /><code>{"private int width"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableinternal" /><code>{"protected override void DisableInternal()"}</code> |  |
| <Link id="m-enableinternal" /><code>{"protected override void EnableInternal()"}</code> |  |
| <Link id="m-updateloop" /><code>{"private IEnumerator UpdateLoop() (iterator)"}</code> |  |
