---
title: "DistanceLODGroup"
description: "class DistanceLODGroup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceLODGroup

A **class** in `Root.Township`, no namespace.

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
| <Link id="m-lodcount" /><code>{"int LODCount { get; }"}</code> |  |
| <Link id="m-lods-2" /><code><Link to="/game-api/types/global-c-d/distancelod">{"DistanceLOD"}</Link>{"[] LODs { get; }"}</code> |  |
| <Link id="m-maxdistancesquared" /><code>{"float MaxDistanceSquared { get; }"}</code> |  |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addrendererstolod" /><code>{"void AddRenderersToLOD(int level, IEnumerable<Renderer> renderersToModify)"}</code> |  |
| <Link id="m-addrenderertolod" /><code>{"void AddRendererToLOD(int level, Renderer rendererToModify)"}</code> |  |
| <Link id="m-getlevel" /><code>{"int GetLevel(float distanceSquared)"}</code> |  |
| <Link id="m-removerendererfromlod" /><code>{"void RemoveRendererFromLOD(int level, Renderer rendererToModify)"}</code> |  |
| <Link id="m-removerenderersfromlod" /><code>{"void RemoveRenderersFromLOD(int level, IEnumerable<Renderer> renderersToModify)"}</code> |  |
| <Link id="m-updatelod" /><code>{"void UpdateLOD(Vector3 referencePosition)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-modifylodlevelrenderers" /><code>{"private void ModifyLODLevelRenderers(int lodIndex, Func<HashSet<Renderer>, bool> modifyFunction)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DistanceLODGroup`:

[`WoodcutTreeBaker.distanceLODGroup`](/game-api/types/alta-crafting/woodcuttreebaker#m-distancelodgroup), [`DistanceLODGroupManager.activeGroups`](/game-api/types/global-c-d/distancelodgroupmanager#m-activegroups), [`DistanceLODGroupManager.AddGroup`](/game-api/types/global-c-d/distancelodgroupmanager#m-addgroup), [`DistanceLODGroupManager.RemoveGroup`](/game-api/types/global-c-d/distancelodgroupmanager#m-removegroup), [`PlatformDistanceLODModifier.lodGroup`](/game-api/types/global-p/platformdistancelodmodifier#m-lodgroup).
