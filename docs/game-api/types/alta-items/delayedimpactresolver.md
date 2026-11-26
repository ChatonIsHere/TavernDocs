---
title: "DelayedImpactResolver"
description: "Collects every collision an impact tool makes in a frame and turns them into one best hit in LateUpdate, so a swing touching several colliders only hits once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayedImpactResolver

A **static class** in `Root.Township`, `Alta.Impact`.

Collects every collision an impact tool makes in a frame and turns them into one best hit in `LateUpdate`, so a swing touching several colliders only hits once. `ImpactDetector` feeds it.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested types** [`ImpactDetectorHit`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-framehits" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{", List<"}<Link to="/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit">{"DelayedImpactResolver.ImpactDetectorHit"}</Link>{">> frameHits"}</code> | Collisions queued this frame, grouped per impact tool. |
| <Link id="m-hitspool" /><code>{"private static Stack<List<"}<Link to="/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit">{"DelayedImpactResolver.ImpactDetectorHit"}</Link>{">> hitsPool"}</code> | Reused hit lists, to avoid allocating each frame. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger, used when generating a hit throws. |
| <Link id="m-update" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The registered late update, or null when stopped. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | The `LateUpdate` module named "Impact Detector Resolver". |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"static void Hit("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector, Collision collision)"}</code> | Queues a tool's collision with a detector for this frame and makes sure the late update is running. |
| <Link id="m-processimmediate" /><code>{"static void ProcessImmediate("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector, Collision collision, Action<"}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{"> hitProcessor)"}</code> | Picks the most effective hit from one collision right away and passes it to the callback. Used for tools that need instant processing. |
| <Link id="m-stop" /><code>{"static void Stop()"}</code> | Deregisters the late update and drops any queued hits. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pushhitslistintopool" /><code>{"private static void PushHitsListIntoPool(List<"}<Link to="/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit">{"DelayedImpactResolver.ImpactDetectorHit"}</Link>{"> hits)"}</code> | Clears a hit list and returns it to the pool. |
| <Link id="m-start" /><code>{"private static void Start()"}</code> | Registers `Update` with the update module if it isn't already. |
| <Link id="m-update-2" /><code>{"private static void Update()"}</code> | Late update: for each tool, keeps the most effective hit across all its queued collisions, applies it, then resets that tool's impact generators. |

</details>
