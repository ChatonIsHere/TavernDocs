---
title: "GrowthStage"
description: "One stage in a GrowthDefinition (plants, trees and other things that grow): what prefab to show, how long it lasts and the space checks it needs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthStage

A **class** in `Root.Township`, no namespace.

One stage in a `GrowthDefinition` (plants, trees and other things that grow): what prefab to show, how long it lasts and the space checks it needs. Server side, run by `GrowthItem`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting#growthdefinition-and-growthstage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GrowthStage()"}</code> |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Backing field for `Duration`. 10 seconds by default. |
| <Link id="m-forcekinematic" /><code>{"private "}<Link to="/game-api/types/global-i-l/kinematicforcemode">{"KinematicForceMode"}</Link>{" forceKinematic"}</code> | Backing field for `ForceKinematic`. |
| <Link id="m-isusingradius" /><code>{"private bool isUsingRadius"}</code> | Backing field for `IsUsingRadius`. True by default. |
| <Link id="m-isusingraycastcheck" /><code>{"private bool isUsingRaycastCheck"}</code> | Backing field for `IsUsingRaycastCheck`. |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | Backing field for `LocalPosition`. |
| <Link id="m-localrotation" /><code>{"private Vector3 localRotation"}</code> | Backing field for `LocalRotation`. |
| <Link id="m-minseparationradius" /><code>{"private float minSeparationRadius"}</code> | Backing field for `MinSeparationRadius`. 1 by default. |
| <Link id="m-name" /><code>{"private string name"}</code> | Backing field for `Name`. |
| <Link id="m-prefabs" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefabs"}</code> | Backing field for `Prefabs`: pipeline that yields a `NetworkPrefab` or `PresetTree`. |
| <Link id="m-radiuschecklayers" /><code>{"private LayerMask radiusCheckLayers"}</code> | Backing field for `RadiusCheckLayers`. All layers by default. |
| <Link id="m-raycastdirection" /><code>{"private Vector3 raycastDirection"}</code> | Backing field for `RaycastDirection`. Up by default. |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | Backing field for `RaycastDistance`. 1 by default. |
| <Link id="m-raycastlayers" /><code>{"private LayerMask raycastLayers"}</code> | Backing field for `RaycastLayers`. All layers by default. |
| <Link id="m-retrystage" /><code>{"private bool retryStage"}</code> | Backing field for `RetryStage`. |
| <Link id="m-survivalrate" /><code>{"private float survivalRate"}</code> | Backing field for `SurvivalRate`. 1 (always survives) by default. |
| <Link id="m-usingpreviousprefab" /><code>{"private bool usingPreviousPrefab"}</code> | Backing field for `IsUsingPreviousPrefab`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | Seconds before moving to the next stage, or before retrying this one. |
| <Link id="m-forcekinematic-2" /><code><Link to="/game-api/types/global-i-l/kinematicforcemode">{"KinematicForceMode"}</Link>{" ForceKinematic { get; }"}</code> | Whether to force the spawned prefab's rigidbody kinematic, non-kinematic, or leave it. |
| <Link id="m-isusingpreviousprefab" /><code>{"bool IsUsingPreviousPrefab { get; }"}</code> | Keeps the previous stage's object instead of spawning a new one. |
| <Link id="m-isusingradius-2" /><code>{"bool IsUsingRadius { get; }"}</code> | Whether the stage needs clear space of `MinSeparationRadius` around it. |
| <Link id="m-isusingraycastcheck-2" /><code>{"bool IsUsingRaycastCheck { get; }"}</code> | Whether the stage needs a clear ray in `RaycastDirection`. |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { get; }"}</code> | Offset of the spawned prefab from the grow point. |
| <Link id="m-localrotation-2" /><code>{"Vector3 LocalRotation { get; }"}</code> | Rotation (Euler angles) of the spawned prefab from the grow point. |
| <Link id="m-minseparationradius-2" /><code>{"float MinSeparationRadius { get; }"}</code> | Clear radius needed around this stage. |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | Stage name, used in log messages. |
| <Link id="m-prefabs-2" /><code><Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" Prefabs { get; }"}</code> | Pipeline that picks this stage's `NetworkPrefab` or `PresetTree`. |
| <Link id="m-radiuschecklayers-2" /><code>{"LayerMask RadiusCheckLayers { get; }"}</code> | Layers the radius check looks at. |
| <Link id="m-raycastdirection-2" /><code>{"Vector3 RaycastDirection { get; }"}</code> | Local direction of the space check ray. |
| <Link id="m-raycastdistance-2" /><code>{"float RaycastDistance { get; }"}</code> | Length of the space check ray. |
| <Link id="m-raycastlayers-2" /><code>{"LayerMask RaycastLayers { get; }"}</code> | Layers the ray check looks at. |
| <Link id="m-retrystage-2" /><code>{"bool RetryStage { get; }"}</code> | If the checks fail, try this stage again after `Duration` (at least 5 s) instead of stopping. |
| <Link id="m-survivalrate-2" /><code>{"float SurvivalRate { get; }"}</code> | Chance (0 to 1) of growing on to the next stage. Failing stops the growth. |

## Used in

Members of other types that take, return or hold a `GrowthStage`:

[`GrowerComponent.CheckRadius`](/game-api/types/global-e-h/growercomponent#m-checkradius), [`GrowerComponent.CheckRaycast`](/game-api/types/global-e-h/growercomponent#m-checkraycast), [`GrowerComponent.CurrentStage`](/game-api/types/global-e-h/growercomponent#m-currentstage), [`GrowerComponent.HandleChecksResult`](/game-api/types/global-e-h/growercomponent#m-handlechecksresult), [`GrowerComponent.HandlePrefabKinematic`](/game-api/types/global-e-h/growercomponent#m-handleprefabkinematic), [`GrowerComponent.SpawnPrefab`](/game-api/types/global-e-h/growercomponent#m-spawnprefab), [`GrowthDefinition.stages`](/game-api/types/global-e-h/growthdefinition#m-stages), [`GrowthDefinition.Stages`](/game-api/types/global-e-h/growthdefinition#m-stages-2), [`GrowthItem.CheckRadius`](/game-api/types/global-e-h/growthitem#m-checkradius), [`GrowthItem.CheckRaycast`](/game-api/types/global-e-h/growthitem#m-checkraycast), [`GrowthItem.HandleChecksResult`](/game-api/types/global-e-h/growthitem#m-handlechecksresult), [`GrowthItem.HandlePrefabKinematic`](/game-api/types/global-e-h/growthitem#m-handleprefabkinematic), [`GrowthItem.SpawnPrefab`](/game-api/types/global-e-h/growthitem#m-spawnprefab), [`GrowthStageComponent.CurrentStage`](/game-api/types/global-e-h/growthstagecomponent#m-currentstage), [`IGrowthStage.CurrentStage`](/game-api/types/global-i-l/igrowthstage#m-currentstage).
