---
title: "ComputeShaderDarknessReader"
description: "Client: darkness reader method that copies the player camera image each frame and measures how dark it is with a compute shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComputeShaderDarknessReader

A **class** in `Root.Township`, the global namespace.

Client: darkness reader method that copies the player camera image each frame and measures how dark it is with a compute shader. When it's too dark, it calls the spawn request (from `DarknessReader`).

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`DarknessReaderMethod`](/mod/game-api/types/global-c-d/darknessreadermethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ComputeShaderDarknessReader("}<Link to="/mod/game-api/types/global-c-d/darknessreader">{"DarknessReader"}</Link>{" reader, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character, Action requestSpawn)"}</code> | <span className="api-desc">Creates a `ComputeShaderDarknessReader` from `reader`, `character` and `requestSpawn`.</span> |

## Fields

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colorfilter" /><code>{"private static readonly int _ColorFilter"}</code> | <span className="api-desc">Shader property id for `_ColorFilter`.</span> |
| <Link id="m-finalresults" /><code>{"private static readonly int _FinalResults"}</code> | <span className="api-desc">Shader property id for `_FinalResults`.</span> |
| <Link id="m-input" /><code>{"private static readonly int _Input"}</code> | <span className="api-desc">Shader property id for `_Input`.</span> |
| <Link id="m-maxtotaldarkness" /><code>{"private static readonly int _MaxTotalDarkness"}</code> | <span className="api-desc">Shader property id for `_MaxTotalDarkness`.</span> |
| <Link id="m-maxvalue" /><code>{"private static readonly int _MaxValue"}</code> | <span className="api-desc">Shader property id for `_MaxValue`.</span> |
| <Link id="m-resultscount" /><code>{"private static readonly int _ResultsCount"}</code> | <span className="api-desc">Shader property id for `_ResultsCount`.</span> |
| <Link id="m-resultssum" /><code>{"private static readonly int _ResultsSum"}</code> | <span className="api-desc">Shader property id for `_ResultsSum`.</span> |
| <Link id="m-temprt" /><code>{"private static readonly int _TempRT"}</code> | <span className="api-desc">Shader property id for `_TempRT`. Not used.</span> |
| <Link id="m-bufferclearkernel" /><code>{"private int BufferClearKernel"}</code> | <span className="api-desc">Kernel index that clears the result buffers.</span> |
| <Link id="m-camerabuffer" /><code>{"private CommandBuffer cameraBuffer"}</code> | <span className="api-desc">Command buffer that copies the camera image to `samplingRT`.</span> |
| <Link id="m-computeshader" /><code>{"private ComputeShader computeShader"}</code> | <span className="api-desc">The darkness compute shader from the reader settings.</span> |
| <Link id="m-darknessreadkernel" /><code>{"private int DarknessReadKernel"}</code> | <span className="api-desc">Kernel index that samples the image into per-group sums and counts.</span> |
| <Link id="m-darknessresultkernel" /><code>{"private int DarknessResultKernel"}</code> | <span className="api-desc">Kernel index that reduces the sums to one value.</span> |
| <Link id="m-finalresultbuffer" /><code>{"private ComputeBuffer finalResultBuffer"}</code> | <span className="api-desc">One-value buffer with the final darkness result.</span> |
| <Link id="m-height" /><code>{"private int height"}</code> | <span className="api-desc">Sample texture height, the camera height scaled by `DownSampleScale`.</span> |
| <Link id="m-resultcountbuffer" /><code>{"private ComputeBuffer resultCountBuffer"}</code> | <span className="api-desc">Buffer of 256 per-group sample counts.</span> |
| <Link id="m-resultsumbuffer" /><code>{"private ComputeBuffer resultSumBuffer"}</code> | <span className="api-desc">Buffer of 256 per-group darkness sums.</span> |
| <Link id="m-samplingrt" /><code>{"private RenderTexture samplingRT"}</code> | <span className="api-desc">Down-scaled temporary copy of the camera image.</span> |
| <Link id="m-targetcamera" /><code>{"private Camera targetCamera"}</code> | <span className="api-desc">The player's camera.</span> |
| <Link id="m-targetcameraevent" /><code>{"private static readonly CameraEvent targetCameraEvent"}</code> | <span className="api-desc">Camera event the copy runs at, after opaque image effects.</span> |
| <Link id="m-width" /><code>{"private int width"}</code> | <span className="api-desc">Sample texture width, twice the scaled camera width.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableinternal" /><code>{"protected override void DisableInternal()"}</code> | <span className="api-desc">Removes the camera command buffer, stops the loop and releases the texture and buffers.</span> |
| <Link id="m-enableinternal" /><code>{"protected override void EnableInternal()"}</code> | <span className="api-desc">Adds a command buffer that copies the camera image, sets up compute buffers and shader values, and starts the loop.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateloop" /><code>{"private IEnumerator UpdateLoop() (iterator)"}</code> | <span className="api-desc">Every `ReadDarknessFrequency` seconds, runs the kernels and calls the spawn request if darkness passes `MaxTotalDarkness`.</span> |

</details>
