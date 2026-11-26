---
title: "DistanceLODGroup"
description: "Client: a simple LOD group that switches renderer sets on and off by the local player's distance, driven by a shared DistanceLODGroupManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceLODGroup

A **class** in `Root.Township`, the global namespace.

Client: a simple LOD group that switches renderer sets on and off by the local player's distance, driven by a shared `DistanceLODGroupManager`. Removes itself on a headless server.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceLODGroup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | The group's own transform, cached in `Awake`. |
| <Link id="m-lastlevel" /><code>{"private int lastLevel"}</code> | The LOD level currently shown, or -1 when the viewer is past the last level's distance (nothing shown). |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | The cached world position that `Position` returns. |
| <Link id="m-lods" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/distancelod">{"DistanceLOD"}</Link>{"[] lods"}</code> | The LOD levels, nearest first, each with its renderers and squared switch distance. |
| <Link id="m-manager" /><code>{"private static "}<Link to="/mod/game-api/types/global-c-d/distancelodgroupmanager">{"DistanceLODGroupManager"}</Link>{" manager"}</code> | One `DistanceLODGroupManager` shared by every group, created by the first group that is enabled. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lodcount" /><code>{"int LODCount { get; }"}</code> | Number of LOD levels. |
| <Link id="m-lods-2" /><code><Link to="/mod/game-api/types/global-c-d/distancelod">{"DistanceLOD"}</Link>{"[] LODs { get; }"}</code> | The LOD levels, each with a squared distance and renderers. |
| <Link id="m-maxdistancesquared" /><code>{"float MaxDistanceSquared { get; }"}</code> | Squared distance of the last level. Beyond this nothing is shown. |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | World position of the group, refreshed only when the transform has moved. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addrendererstolod" /><code>{"void AddRenderersToLOD(int level, IEnumerable<Renderer> renderersToModify)"}</code> | Adds several renderers to one LOD level. |
| <Link id="m-addrenderertolod" /><code>{"void AddRendererToLOD(int level, Renderer rendererToModify)"}</code> | Adds a renderer to one LOD level. |
| <Link id="m-getlevel" /><code>{"int GetLevel(float distanceSquared)"}</code> | LOD level for a squared distance: the first level whose distance is larger, or -1 when beyond all of them. |
| <Link id="m-removerendererfromlod" /><code>{"void RemoveRendererFromLOD(int level, Renderer rendererToModify)"}</code> | Removes a renderer from one LOD level. |
| <Link id="m-removerenderersfromlod" /><code>{"void RemoveRenderersFromLOD(int level, IEnumerable<Renderer> renderersToModify)"}</code> | Removes several renderers from one LOD level. |
| <Link id="m-updatelod" /><code>{"void UpdateLOD(Vector3 referencePosition)"}</code> | Shows the level matching the distance to the given point and hides the previous one. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the transform and its position. On a headless server the component destroys itself instead. |
| <Link id="m-modifylodlevelrenderers" /><code>{"private void ModifyLODLevelRenderers(int lodIndex, Func<HashSet<Renderer>, bool> modifyFunction)"}</code> | Copies one LOD level's renderers into a set, runs the given edit on it and saves the set back if it changed. Used by the add and remove renderer methods. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Client: removes the group from the shared manager. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Client: resets to level 0 (only level 0 renderers on) and registers the group with the shared manager, creating the manager if needed. |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> | Caches the transform's world position and clears its `hasChanged` flag. `Position` calls it when the transform has moved. |

</details>

## Used in

Members of other types that take, return or hold a `DistanceLODGroup`:

[`WoodcutTreeBaker.distanceLODGroup`](/mod/game-api/types/alta-crafting/woodcuttreebaker#m-distancelodgroup), [`DistanceLODGroupManager.activeGroups`](/mod/game-api/types/global-c-d/distancelodgroupmanager#m-activegroups), [`DistanceLODGroupManager.AddGroup`](/mod/game-api/types/global-c-d/distancelodgroupmanager#m-addgroup), [`DistanceLODGroupManager.RemoveGroup`](/mod/game-api/types/global-c-d/distancelodgroupmanager#m-removegroup), [`PlatformDistanceLODModifier.lodGroup`](/mod/game-api/types/global-p/platformdistancelodmodifier#m-lodgroup).
