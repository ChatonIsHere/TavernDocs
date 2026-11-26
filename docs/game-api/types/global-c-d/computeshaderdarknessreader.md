---
title: "ComputeShaderDarknessReader"
description: "Client: darkness reader method that copies the player camera image each frame and measures how dark it is with a compute shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComputeShaderDarknessReader

A **class** in `Root.Township`, no namespace.

Client: darkness reader method that copies the player camera image each frame and measures how dark it is with a compute shader. When it's too dark, it calls the spawn request (from `DarknessReader`).

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`DarknessReaderMethod`](/game-api/types/global-c-d/darknessreadermethod)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ComputeShaderDarknessReader("}<Link to="/game-api/types/global-c-d/darknessreader">{"DarknessReader"}</Link>{" reader, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character, Action requestSpawn)"}</code> |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colorfilter" /><code>{"private static readonly int _ColorFilter"}</code> | Shader property id for `_ColorFilter`. |
| <Link id="m-finalresults" /><code>{"private static readonly int _FinalResults"}</code> | Shader property id for `_FinalResults`. |
| <Link id="m-input" /><code>{"private static readonly int _Input"}</code> | Shader property id for `_Input`. |
| <Link id="m-maxtotaldarkness" /><code>{"private static readonly int _MaxTotalDarkness"}</code> | Shader property id for `_MaxTotalDarkness`. |
| <Link id="m-maxvalue" /><code>{"private static readonly int _MaxValue"}</code> | Shader property id for `_MaxValue`. |
| <Link id="m-resultscount" /><code>{"private static readonly int _ResultsCount"}</code> | Shader property id for `_ResultsCount`. |
| <Link id="m-resultssum" /><code>{"private static readonly int _ResultsSum"}</code> | Shader property id for `_ResultsSum`. |
| <Link id="m-temprt" /><code>{"private static readonly int _TempRT"}</code> | Shader property id for `_TempRT`. Not used. |
| <Link id="m-bufferclearkernel" /><code>{"private int BufferClearKernel"}</code> | Kernel index that clears the result buffers. |
| <Link id="m-camerabuffer" /><code>{"private CommandBuffer cameraBuffer"}</code> | Command buffer that copies the camera image to `samplingRT`. |
| <Link id="m-computeshader" /><code>{"private ComputeShader computeShader"}</code> | The darkness compute shader from the reader settings. |
| <Link id="m-darknessreadkernel" /><code>{"private int DarknessReadKernel"}</code> | Kernel index that samples the image into per-group sums and counts. |
| <Link id="m-darknessresultkernel" /><code>{"private int DarknessResultKernel"}</code> | Kernel index that reduces the sums to one value. |
| <Link id="m-finalresultbuffer" /><code>{"private ComputeBuffer finalResultBuffer"}</code> | One-value buffer with the final darkness result. |
| <Link id="m-height" /><code>{"private int height"}</code> | Sample texture height, the camera height scaled by `DownSampleScale`. |
| <Link id="m-resultcountbuffer" /><code>{"private ComputeBuffer resultCountBuffer"}</code> | Buffer of 256 per-group sample counts. |
| <Link id="m-resultsumbuffer" /><code>{"private ComputeBuffer resultSumBuffer"}</code> | Buffer of 256 per-group darkness sums. |
| <Link id="m-samplingrt" /><code>{"private RenderTexture samplingRT"}</code> | Down-scaled temporary copy of the camera image. |
| <Link id="m-targetcamera" /><code>{"private Camera targetCamera"}</code> | The player's camera. |
| <Link id="m-targetcameraevent" /><code>{"private static readonly CameraEvent targetCameraEvent"}</code> | Camera event the copy runs at, after opaque image effects. |
| <Link id="m-width" /><code>{"private int width"}</code> | Sample texture width, twice the scaled camera width. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableinternal" /><code>{"protected override void DisableInternal()"}</code> | Removes the camera command buffer, stops the loop and releases the texture and buffers. |
| <Link id="m-enableinternal" /><code>{"protected override void EnableInternal()"}</code> | Adds a command buffer that copies the camera image, sets up compute buffers and shader values, and starts the loop. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateloop" /><code>{"private IEnumerator UpdateLoop() (iterator)"}</code> | Every `ReadDarknessFrequency` seconds, runs the kernels and calls the spawn request if darkness passes `MaxTotalDarkness`. |

</details>
