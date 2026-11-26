---
title: "RopePersistManager"
description: "Leftover from the Ultimate Rope Editor asset that records rope transform data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopePersistManager

A **static class** in `Root.Township`, the global namespace.

Leftover from the Ultimate Rope Editor asset that records rope transform data. In this build only the helpers remain and nothing calls them.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested types** [`RopeData`](/mod/game-api/types/global-q-r/ropepersistmanager-ropedata)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-s-hashinstanceid2ropedata" /><code>{"private static Dictionary<int, "}<Link to="/mod/game-api/types/global-q-r/ropepersistmanager-ropedata">{"RopePersistManager.RopeData"}</Link>{"> s_hashInstanceID2RopeData"}</code> | <span className="api-desc">Stored rope data by rope instance ID. Never filled in this build.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-computetransforminfo" /><code>{"private static "}<Link to="/mod/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{" ComputeTransformInfo("}<Link to="/mod/game-api/types/global-t-x/ultimaterope">{"UltimateRope"}</Link>{" rope, GameObject node, GameObject parent)"}</code> | <span className="api-desc">Records a rope node's name, parent, position and rotation relative to the parent, scale and kinematic flags.</span> |
| <Link id="m-settransforminfo" /><code>{"private static void SetTransformInfo("}<Link to="/mod/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{" transformInfo, GameObject node)"}</code> | <span className="api-desc">Restores a node's position, rotation and scale from recorded transform info.</span> |

</details>
