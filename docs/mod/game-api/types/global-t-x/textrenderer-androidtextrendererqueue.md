---
title: "TextRenderer.AndroidTextRendererQueue"
description: "Private helper for TextRenderer that spreads text mesh building on Android across frames, about 5 ms per frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextRenderer.AndroidTextRendererQueue

A **private static class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper for `TextRenderer` that spreads text mesh building on Android across frames, about 5 ms per frame.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TextRenderer`](/mod/game-api/types/global-t-x/textrenderer)

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowance" /><code>{"private const float allowance"}</code> | Time budget per frame, 0.005 seconds. |
| <Link id="m-coroutinerunner" /><code>{"private static "}<Link to="/mod/game-api/types/global-e-h/emptybehaviour">{"EmptyBehaviour"}</Link>{" coroutineRunner"}</code> | Fallback object that runs the coroutine when `AltaCoroutine` isn't ready. |
| <Link id="m-isrendering" /><code>{"private static bool isRendering"}</code> | True while the queue is being worked through. |
| <Link id="m-queueitems" /><code>{"private static readonly Queue<"}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"> queueItems"}</code> | Renderers waiting to be built. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enterqueue" /><code>{"static bool EnterQueue("}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" renderer)"}</code> | Starts processing if idle and returns true so the renderer builds now; otherwise queues it and returns false. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatequeue" /><code>{"private static IEnumerator UpdateQueue() (iterator)"}</code> | Coroutine that builds queued renderers, skipping disabled or empty ones, yielding when the frame budget runs out. |

</details>
