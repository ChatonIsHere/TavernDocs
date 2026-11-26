---
title: "SkinnedBatchingHelper"
description: "Helper for skinned mesh batching that matches bones between two skeletons by name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkinnedBatchingHelper

A **static class** in `Root.Township`, the global namespace.

Helper for skinned mesh batching that matches bones between two skeletons by name.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getbonemapping" /><code>{"static Dictionary<int, int> GetBoneMapping(Transform[] originalBones, Transform[] targetBones)"}</code> | <span className="api-desc">Maps each original bone index to the index of the same-named bone in the target array (-1 if missing), logging moved ones.</span> |
