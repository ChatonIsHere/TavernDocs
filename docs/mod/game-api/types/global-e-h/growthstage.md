---
title: "GrowthStage"
description: "One stage in a GrowthDefinition (plants, trees and other things that grow): what prefab to show, how long it lasts and the space checks it needs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthStage

A **class** in `Root.Township`, the global namespace.

One stage in a `GrowthDefinition` (plants, trees and other things that grow): what prefab to show, how long it lasts and the space checks it needs. Server side, run by `GrowthItem`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting#growthdefinition-and-growthstage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowthStage()"}</code> | <span className="api-desc">Creates a `GrowthStage` with default values.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | <span className="api-desc">Backing field for `Duration`. 10 seconds by default.</span> |
| <Link id="m-forcekinematic" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/kinematicforcemode">{"KinematicForceMode"}</Link>{" forceKinematic"}</code> | <span className="api-desc">Backing field for `ForceKinematic`.</span> |
| <Link id="m-isusingradius" /><code>{"private bool isUsingRadius"}</code> | <span className="api-desc">Backing field for `IsUsingRadius`. True by default.</span> |
| <Link id="m-isusingraycastcheck" /><code>{"private bool isUsingRaycastCheck"}</code> | <span className="api-desc">Backing field for `IsUsingRaycastCheck`.</span> |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | <span className="api-desc">Backing field for `LocalPosition`.</span> |
| <Link id="m-localrotation" /><code>{"private Vector3 localRotation"}</code> | <span className="api-desc">Backing field for `LocalRotation`.</span> |
| <Link id="m-minseparationradius" /><code>{"private float minSeparationRadius"}</code> | <span className="api-desc">Backing field for `MinSeparationRadius`. 1 by default.</span> |
| <Link id="m-name" /><code>{"private string name"}</code> | <span className="api-desc">Backing field for `Name`.</span> |
| <Link id="m-prefabs" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefabs"}</code> | <span className="api-desc">Backing field for `Prefabs`: pipeline that yields a `NetworkPrefab` or `PresetTree`.</span> |
| <Link id="m-radiuschecklayers" /><code>{"private LayerMask radiusCheckLayers"}</code> | <span className="api-desc">Backing field for `RadiusCheckLayers`. All layers by default.</span> |
| <Link id="m-raycastdirection" /><code>{"private Vector3 raycastDirection"}</code> | <span className="api-desc">Backing field for `RaycastDirection`. Up by default.</span> |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | <span className="api-desc">Backing field for `RaycastDistance`. 1 by default.</span> |
| <Link id="m-raycastlayers" /><code>{"private LayerMask raycastLayers"}</code> | <span className="api-desc">Backing field for `RaycastLayers`. All layers by default.</span> |
| <Link id="m-retrystage" /><code>{"private bool retryStage"}</code> | <span className="api-desc">Backing field for `RetryStage`.</span> |
| <Link id="m-survivalrate" /><code>{"private float survivalRate"}</code> | <span className="api-desc">Backing field for `SurvivalRate`. 1 (always survives) by default.</span> |
| <Link id="m-usingpreviousprefab" /><code>{"private bool usingPreviousPrefab"}</code> | <span className="api-desc">Backing field for `IsUsingPreviousPrefab`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | <span className="api-desc">Seconds before moving to the next stage, or before retrying this one.</span> |
| <Link id="m-forcekinematic-2" /><code><Link to="/mod/game-api/types/global-i-l/kinematicforcemode">{"KinematicForceMode"}</Link>{" ForceKinematic { get; }"}</code> | <span className="api-desc">Whether to force the spawned prefab's rigidbody kinematic, non-kinematic, or leave it.</span> |
| <Link id="m-isusingpreviousprefab" /><code>{"bool IsUsingPreviousPrefab { get; }"}</code> | <span className="api-desc">Keeps the previous stage's object instead of spawning a new one.</span> |
| <Link id="m-isusingradius-2" /><code>{"bool IsUsingRadius { get; }"}</code> | <span className="api-desc">Whether the stage needs clear space of `MinSeparationRadius` around it.</span> |
| <Link id="m-isusingraycastcheck-2" /><code>{"bool IsUsingRaycastCheck { get; }"}</code> | <span className="api-desc">Whether the stage needs a clear ray in `RaycastDirection`.</span> |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { get; }"}</code> | <span className="api-desc">Offset of the spawned prefab from the grow point.</span> |
| <Link id="m-localrotation-2" /><code>{"Vector3 LocalRotation { get; }"}</code> | <span className="api-desc">Rotation (Euler angles) of the spawned prefab from the grow point.</span> |
| <Link id="m-minseparationradius-2" /><code>{"float MinSeparationRadius { get; }"}</code> | <span className="api-desc">Clear radius needed around this stage.</span> |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Stage name, used in log messages.</span> |
| <Link id="m-prefabs-2" /><code><Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" Prefabs { get; }"}</code> | <span className="api-desc">Pipeline that picks this stage's `NetworkPrefab` or `PresetTree`.</span> |
| <Link id="m-radiuschecklayers-2" /><code>{"LayerMask RadiusCheckLayers { get; }"}</code> | <span className="api-desc">Layers the radius check looks at.</span> |
| <Link id="m-raycastdirection-2" /><code>{"Vector3 RaycastDirection { get; }"}</code> | <span className="api-desc">Local direction of the space check ray.</span> |
| <Link id="m-raycastdistance-2" /><code>{"float RaycastDistance { get; }"}</code> | <span className="api-desc">Length of the space check ray.</span> |
| <Link id="m-raycastlayers-2" /><code>{"LayerMask RaycastLayers { get; }"}</code> | <span className="api-desc">Layers the ray check looks at.</span> |
| <Link id="m-retrystage-2" /><code>{"bool RetryStage { get; }"}</code> | <span className="api-desc">If the checks fail, try this stage again after `Duration` (at least 5 s) instead of stopping.</span> |
| <Link id="m-survivalrate-2" /><code>{"float SurvivalRate { get; }"}</code> | <span className="api-desc">Chance (0 to 1) of growing on to the next stage. Failing stops the growth.</span> |

## Used in

Members of other types that take, return or hold a `GrowthStage`:

<div className="api-used-in">

[`GrowerComponent.CheckRadius`](/mod/game-api/types/global-e-h/growercomponent#m-checkradius), [`GrowerComponent.CheckRaycast`](/mod/game-api/types/global-e-h/growercomponent#m-checkraycast), [`GrowerComponent.CurrentStage`](/mod/game-api/types/global-e-h/growercomponent#m-currentstage), [`GrowerComponent.HandleChecksResult`](/mod/game-api/types/global-e-h/growercomponent#m-handlechecksresult), [`GrowerComponent.HandlePrefabKinematic`](/mod/game-api/types/global-e-h/growercomponent#m-handleprefabkinematic), [`GrowerComponent.SpawnPrefab`](/mod/game-api/types/global-e-h/growercomponent#m-spawnprefab), [`GrowthDefinition.stages`](/mod/game-api/types/global-e-h/growthdefinition#m-stages), [`GrowthDefinition.Stages`](/mod/game-api/types/global-e-h/growthdefinition#m-stages-2), [`GrowthItem.CheckRadius`](/mod/game-api/types/global-e-h/growthitem#m-checkradius), [`GrowthItem.CheckRaycast`](/mod/game-api/types/global-e-h/growthitem#m-checkraycast), [`GrowthItem.HandleChecksResult`](/mod/game-api/types/global-e-h/growthitem#m-handlechecksresult), [`GrowthItem.HandlePrefabKinematic`](/mod/game-api/types/global-e-h/growthitem#m-handleprefabkinematic), [`GrowthItem.SpawnPrefab`](/mod/game-api/types/global-e-h/growthitem#m-spawnprefab), [`GrowthStageComponent.CurrentStage`](/mod/game-api/types/global-e-h/growthstagecomponent#m-currentstage), [`IGrowthStage.CurrentStage`](/mod/game-api/types/global-i-l/igrowthstage#m-currentstage).

</div>
