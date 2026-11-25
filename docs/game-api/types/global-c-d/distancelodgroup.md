---
title: "DistanceLODGroup"
description: "Client: a simple LOD group that switches renderer sets on and off by the local player's distance, driven by a shared DistanceLODGroupManager. Removes "
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceLODGroup

A **class** in `Root.Township`, no namespace.

Client: a simple LOD group that switches renderer sets on and off by the local player's distance, driven by a shared `DistanceLODGroupManager`. Removes itself on a headless server.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceLODGroup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-lastlevel" /><code>{"private int lastLevel"}</code> |  |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> |  |
| <Link id="m-lods" /><code>{"private "}<Link to="/game-api/types/global-c-d/distancelod">{"DistanceLOD"}</Link>{"[] lods"}</code> |  |
| <Link id="m-manager" /><code>{"private static "}<Link to="/game-api/types/global-c-d/distancelodgroupmanager">{"DistanceLODGroupManager"}</Link>{" manager"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lodcount" /><code>{"int LODCount { get; }"}</code> | Number of LOD levels. |
| <Link id="m-lods-2" /><code><Link to="/game-api/types/global-c-d/distancelod">{"DistanceLOD"}</Link>{"[] LODs { get; }"}</code> | The LOD levels, each with a squared distance and renderers. |
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
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-modifylodlevelrenderers" /><code>{"private void ModifyLODLevelRenderers(int lodIndex, Func<HashSet<Renderer>, bool> modifyFunction)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DistanceLODGroup`:

[`WoodcutTreeBaker.distanceLODGroup`](/game-api/types/alta-crafting/woodcuttreebaker#m-distancelodgroup), [`DistanceLODGroupManager.activeGroups`](/game-api/types/global-c-d/distancelodgroupmanager#m-activegroups), [`DistanceLODGroupManager.AddGroup`](/game-api/types/global-c-d/distancelodgroupmanager#m-addgroup), [`DistanceLODGroupManager.RemoveGroup`](/game-api/types/global-c-d/distancelodgroupmanager#m-removegroup), [`PlatformDistanceLODModifier.lodGroup`](/game-api/types/global-p/platformdistancelodmodifier#m-lodgroup).
