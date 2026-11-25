---
title: "DelayedImpactResolver"
description: "static class DelayedImpactResolver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayedImpactResolver

A **static class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested types** [`ImpactDetectorHit`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-framehits" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{", List<"}<Link to="/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit">{"DelayedImpactResolver.ImpactDetectorHit"}</Link>{">> frameHits"}</code> |  |
| <Link id="m-hitspool" /><code>{"private static Stack<List<"}<Link to="/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit">{"DelayedImpactResolver.ImpactDetectorHit"}</Link>{">> hitsPool"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-update" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"static void Hit("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector, Collision collision)"}</code> |  |
| <Link id="m-processimmediate" /><code>{"static void ProcessImmediate("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector, Collision collision, Action<"}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{"> hitProcessor)"}</code> |  |
| <Link id="m-stop" /><code>{"static void Stop()"}</code> |  |
| <Link id="m-pushhitslistintopool" /><code>{"private static void PushHitsListIntoPool(List<"}<Link to="/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit">{"DelayedImpactResolver.ImpactDetectorHit"}</Link>{"> hits)"}</code> |  |
| <Link id="m-start" /><code>{"private static void Start()"}</code> |  |
| <Link id="m-update-2" /><code>{"private static void Update()"}</code> |  |
