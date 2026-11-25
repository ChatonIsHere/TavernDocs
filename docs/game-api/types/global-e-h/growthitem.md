---
title: "GrowthItem"
description: "class GrowthItem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthItem

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowthItem()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code>{"int currentStage"}</code> |  |
| <Link id="m-definition" /><code><Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition"}</code> |  |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-hasstarted" /><code>{"bool hasStarted"}</code> |  |
| <Link id="m-nextstagetimer" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" nextStageTimer"}</code> |  |
| <Link id="m-parent" /><code><Link to="/game-api/types/global-i-l/igrowthmanager">{"IGrowthManager"}</Link>{" parent"}</code> |  |
| <Link id="m-position" /><code>{"Vector3 position"}</code> |  |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> |  |
| <Link id="m-spawnedstageindex" /><code>{"int spawnedStageIndex"}</code> |  |
| <Link id="m-startedtime" /><code>{"TimeSpan startedTime"}</code> |  |
| <Link id="m-colliders" /><code>{"private static Collider[] colliders"}</code> |  |
| <Link id="m-handledrigidbodies" /><code>{"private static HashSet<Rigidbody> handledRigidbodies"}</code> |  |
| <Link id="m-hits" /><code>{"private static RaycastHit[] hits"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-worldposition" /><code>{"Vector3 WorldPosition { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{"> Destroyed"}</code> |  |
| <Link id="m-entityadded" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{", "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> EntityAdded"}</code> |  |
| <Link id="m-entityremoved" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{", "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> EntityRemoved"}</code> |  |
| <Link id="m-removed" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{"> Removed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gotostage" /><code>{"void GoToStage(int stageIndex, TimeSpan timeLeft = null)"}</code> |  |
| <Link id="m-loadentity" /><code>{"void LoadEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-loadstage" /><code>{"void LoadStage(int newIndex, TimeSpan timeLeft)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"void OnDestroy()"}</code> |  |
| <Link id="m-startgrowing" /><code>{"void StartGrowing()"}</code> |  |
| <Link id="m-stopgrowth" /><code>{"void StopGrowth(bool isKeepingChild)"}</code> |  |
| <Link id="m-checkradius" /><code>{"private bool CheckRadius("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> |  |
| <Link id="m-checkraycast" /><code>{"private bool CheckRaycast("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> |  |
| <Link id="m-destroycurrentstage" /><code>{"private void DestroyCurrentStage()"}</code> |  |
| <Link id="m-handlechecksresult" /><code>{"private void HandleChecksResult(int stageIndex, "}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, bool checksResult, TimeSpan timeLeft = null)"}</code> |  |
| <Link id="m-handlechilddestroyed" /><code>{"private void HandleChildDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-handleprefabkinematic" /><code>{"private void HandlePrefabKinematic("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> |  |
| <Link id="m-performstagechecks" /><code>{"private bool PerformStageChecks(int stageIndex)"}</code> |  |
| <Link id="m-picked" /><code>{"private void Picked()"}</code> |  |
| <Link id="m-setcurrentstageentity" /><code>{"private void SetCurrentStageEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity)"}</code> |  |
| <Link id="m-spawnprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnPrefab("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, int stageIndex)"}</code> |  |
| <Link id="m-stageentityunchilded" /><code>{"private void StageEntityUnchilded("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent)"}</code> |  |
| <Link id="m-unchildspawned" /><code>{"private void UnchildSpawned()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GrowthItem`:

[`GrowerGroup.EntityAdded`](/game-api/types/global-e-h/growergroup#m-entityadded), [`GrowerGroup.EntityRemoved`](/game-api/types/global-e-h/growergroup#m-entityremoved), [`GrowerGroup.ItemRemoved`](/game-api/types/global-e-h/growergroup#m-itemremoved), [`GrowerGroup.items`](/game-api/types/global-e-h/growergroup#m-items), [`GrowerGroup.Setup`](/game-api/types/global-e-h/growergroup#m-setup).
