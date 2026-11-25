---
title: "GrowthStage"
description: "class GrowthStage in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthStage

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting#growthdefinition-and-growthstage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowthStage()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> |  |
| <Link id="m-forcekinematic" /><code>{"private "}<Link to="/game-api/types/global-i-l/kinematicforcemode">{"KinematicForceMode"}</Link>{" forceKinematic"}</code> |  |
| <Link id="m-isusingradius" /><code>{"private bool isUsingRadius"}</code> |  |
| <Link id="m-isusingraycastcheck" /><code>{"private bool isUsingRaycastCheck"}</code> |  |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> |  |
| <Link id="m-localrotation" /><code>{"private Vector3 localRotation"}</code> |  |
| <Link id="m-minseparationradius" /><code>{"private float minSeparationRadius"}</code> |  |
| <Link id="m-name" /><code>{"private string name"}</code> |  |
| <Link id="m-prefabs" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefabs"}</code> |  |
| <Link id="m-radiuschecklayers" /><code>{"private LayerMask radiusCheckLayers"}</code> |  |
| <Link id="m-raycastdirection" /><code>{"private Vector3 raycastDirection"}</code> |  |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> |  |
| <Link id="m-raycastlayers" /><code>{"private LayerMask raycastLayers"}</code> |  |
| <Link id="m-retrystage" /><code>{"private bool retryStage"}</code> |  |
| <Link id="m-survivalrate" /><code>{"private float survivalRate"}</code> |  |
| <Link id="m-usingpreviousprefab" /><code>{"private bool usingPreviousPrefab"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> |  |
| <Link id="m-forcekinematic-2" /><code><Link to="/game-api/types/global-i-l/kinematicforcemode">{"KinematicForceMode"}</Link>{" ForceKinematic { get; }"}</code> |  |
| <Link id="m-isusingpreviousprefab" /><code>{"bool IsUsingPreviousPrefab { get; }"}</code> |  |
| <Link id="m-isusingradius-2" /><code>{"bool IsUsingRadius { get; }"}</code> |  |
| <Link id="m-isusingraycastcheck-2" /><code>{"bool IsUsingRaycastCheck { get; }"}</code> |  |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { get; }"}</code> |  |
| <Link id="m-localrotation-2" /><code>{"Vector3 LocalRotation { get; }"}</code> |  |
| <Link id="m-minseparationradius-2" /><code>{"float MinSeparationRadius { get; }"}</code> |  |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-prefabs-2" /><code><Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" Prefabs { get; }"}</code> |  |
| <Link id="m-radiuschecklayers-2" /><code>{"LayerMask RadiusCheckLayers { get; }"}</code> |  |
| <Link id="m-raycastdirection-2" /><code>{"Vector3 RaycastDirection { get; }"}</code> |  |
| <Link id="m-raycastdistance-2" /><code>{"float RaycastDistance { get; }"}</code> |  |
| <Link id="m-raycastlayers-2" /><code>{"LayerMask RaycastLayers { get; }"}</code> |  |
| <Link id="m-retrystage-2" /><code>{"bool RetryStage { get; }"}</code> |  |
| <Link id="m-survivalrate-2" /><code>{"float SurvivalRate { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `GrowthStage`:

[`GrowerComponent.CheckRadius`](/game-api/types/global-e-h/growercomponent#m-checkradius), [`GrowerComponent.CheckRaycast`](/game-api/types/global-e-h/growercomponent#m-checkraycast), [`GrowerComponent.CurrentStage`](/game-api/types/global-e-h/growercomponent#m-currentstage), [`GrowerComponent.HandleChecksResult`](/game-api/types/global-e-h/growercomponent#m-handlechecksresult), [`GrowerComponent.HandlePrefabKinematic`](/game-api/types/global-e-h/growercomponent#m-handleprefabkinematic), [`GrowerComponent.SpawnPrefab`](/game-api/types/global-e-h/growercomponent#m-spawnprefab), [`GrowthDefinition.stages`](/game-api/types/global-e-h/growthdefinition#m-stages), [`GrowthDefinition.Stages`](/game-api/types/global-e-h/growthdefinition#m-stages-2), [`GrowthItem.CheckRadius`](/game-api/types/global-e-h/growthitem#m-checkradius), [`GrowthItem.CheckRaycast`](/game-api/types/global-e-h/growthitem#m-checkraycast), [`GrowthItem.HandleChecksResult`](/game-api/types/global-e-h/growthitem#m-handlechecksresult), [`GrowthItem.HandlePrefabKinematic`](/game-api/types/global-e-h/growthitem#m-handleprefabkinematic), [`GrowthItem.SpawnPrefab`](/game-api/types/global-e-h/growthitem#m-spawnprefab), [`GrowthStageComponent.CurrentStage`](/game-api/types/global-e-h/growthstagecomponent#m-currentstage), [`IGrowthStage.CurrentStage`](/game-api/types/global-i-l/igrowthstage#m-currentstage).
