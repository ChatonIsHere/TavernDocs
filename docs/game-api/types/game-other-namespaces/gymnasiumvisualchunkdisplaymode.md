---
title: "GymnasiumVisualChunkDisplayMode"
description: "Which chunks the gymnasium ChunkDisplayTool draws: none, all or only loaded ones."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumVisualChunkDisplayMode

An **enum** in `Root.Township`, `ATT.FeatureTestGymnasium`.

Which chunks the gymnasium `ChunkDisplayTool` draws: none, all or only loaded ones. A dev test tool.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Values

| Member |
| --- |
| <Link id="m-all" /><code>{"All = 1"}</code> |
| <Link id="m-loadedonly" /><code>{"LoadedOnly = 2"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |

## Used in

Members of other types that take, return or hold a `GymnasiumVisualChunkDisplayMode`:

[`ChunkDisplayTool.ApplyMode`](/game-api/types/game-other-namespaces/chunkdisplaytool#m-applymode), [`ChunkDisplayTool.CurrentMode`](/game-api/types/game-other-namespaces/chunkdisplaytool#m-currentmode), [`ChunkDisplayTool.defaultMode`](/game-api/types/game-other-namespaces/chunkdisplaytool#m-defaultmode), [`ChunkDisplayTool.NextMode`](/game-api/types/game-other-namespaces/chunkdisplaytool#m-nextmode).
