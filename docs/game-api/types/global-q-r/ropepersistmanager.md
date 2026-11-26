---
title: "RopePersistManager"
description: "Leftover from the Ultimate Rope Editor asset that records rope transform data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopePersistManager

A **static class** in `Root.Township`, no namespace.

Leftover from the Ultimate Rope Editor asset that records rope transform data. In this build only the helpers remain and nothing calls them.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested types** [`RopeData`](/game-api/types/global-q-r/ropepersistmanager-ropedata)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-s-hashinstanceid2ropedata" /><code>{"private static Dictionary<int, "}<Link to="/game-api/types/global-q-r/ropepersistmanager-ropedata">{"RopePersistManager.RopeData"}</Link>{"> s_hashInstanceID2RopeData"}</code> | Stored rope data by rope instance ID. Never filled in this build. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-computetransforminfo" /><code>{"private static "}<Link to="/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{" ComputeTransformInfo("}<Link to="/game-api/types/global-t-x/ultimaterope">{"UltimateRope"}</Link>{" rope, GameObject node, GameObject parent)"}</code> | Records a rope node's name, parent, position and rotation relative to the parent, scale and kinematic flags. |
| <Link id="m-settransforminfo" /><code>{"private static void SetTransformInfo("}<Link to="/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{" transformInfo, GameObject node)"}</code> | Restores a node's position, rotation and scale from recorded transform info. |

</details>
