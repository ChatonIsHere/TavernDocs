---
title: "StaticBatchedRecombiner"
description: "Merges all mesh renderers under a transform into one mesh per material (split at 65000 vertices), including ones already statically batched."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticBatchedRecombiner

A **static class** in `Root.Township`, the global namespace.

Merges all mesh renderers under a transform into one mesh per material (split at 65000 vertices), including ones already statically batched. Removes the originals.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested types** [`AnchoredList<T>`](/mod/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t), [`WorkingMesh`](/mod/game-api/types/global-s/staticbatchedrecombiner-workingmesh)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recombine" /><code>{"static void Recombine(Transform parent)"}</code> | <span className="api-desc">Combines child meshes by material into new `Recombined` objects on the Terrain layer, skipping impostors and deleting the old renderers.</span> |
