---
title: "GrowthItem"
description: "One growing plant inside a GrowerGroup: steps through a GrowthDefinition's stages on timeline timers, spawning each stage's prefab as a child."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthItem

A **class** in `Root.Township`, no namespace.

One growing plant inside a `GrowerGroup`: steps through a `GrowthDefinition`'s stages on timeline timers, spawning each stage's prefab as a child. Server side.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GrowthItem()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code>{"int currentStage"}</code> | Index of the stage reached. |
| <Link id="m-definition" /><code><Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition"}</code> | The `GrowthDefinition` with the stages to grow through. |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The spawned entity for the current stage, or null. |
| <Link id="m-hasstarted" /><code>{"bool hasStarted"}</code> | True once `StartGrowing` has run. |
| <Link id="m-nextstagetimer" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" nextStageTimer"}</code> | Timeline entry for the next stage or retry. Cancelled when growth stops. |
| <Link id="m-parent" /><code><Link to="/game-api/types/global-i-l/igrowthmanager">{"IGrowthManager"}</Link>{" parent"}</code> | The `IGrowthManager` (group) that owns this item. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Local position in the parent group. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Local rotation in the parent group. |
| <Link id="m-spawnedstageindex" /><code>{"int spawnedStageIndex"}</code> | Index of the stage whose prefab is spawned, or -1. |
| <Link id="m-startedtime" /><code>{"TimeSpan startedTime"}</code> | Timeline time when growth started. |

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-colliders" /><code>{"private static Collider[] colliders"}</code> |
| <Link id="m-handledrigidbodies" /><code>{"private static HashSet<Rigidbody> handledRigidbodies"}</code> |
| <Link id="m-hits" /><code>{"private static RaycastHit[] hits"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-worldposition" /><code>{"Vector3 WorldPosition { get; }"}</code> | The item's local `position` turned into world space through the parent group. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{"> Destroyed"}</code> | Raised when growth stops without keeping the plant, such as a failed check or the stage entity being destroyed. |
| <Link id="m-entityadded" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{", "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> EntityAdded"}</code> | Raised when a stage entity is attached to this item. |
| <Link id="m-entityremoved" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{", "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> EntityRemoved"}</code> | Raised when the stage entity is detached or destroyed. |
| <Link id="m-removed" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{"> Removed"}</code> | Raised the frame after the stage entity is taken out of the group (picked). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gotostage" /><code>{"void GoToStage(int stageIndex, TimeSpan timeLeft = null)"}</code> | Runs the checks for a stage, then spawns it and schedules the next, retries, or stops growth. |
| <Link id="m-loadentity" /><code>{"void LoadEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Attaches an already spawned stage entity, used when loading a save. |
| <Link id="m-loadstage" /><code>{"void LoadStage(int newIndex, TimeSpan timeLeft)"}</code> | Restores a saved stage, running checks for the skipped stages and resuming with the saved time left. |
| <Link id="m-ondestroy" /><code>{"void OnDestroy()"}</code> | Cancels the next stage timer. |
| <Link id="m-startgrowing" /><code>{"void StartGrowing()"}</code> | Starts at stage 0 if not already started and the parent is not being destroyed. |
| <Link id="m-stopgrowth" /><code>{"void StopGrowth(bool isKeepingChild)"}</code> | Cancels the timer. Keeping the child unparents the last stage if the group destroys itself at the end; otherwise the stage is destroyed. |

<details>
<summary>12 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkradius" /><code>{"private bool CheckRadius("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> |
| <Link id="m-checkraycast" /><code>{"private bool CheckRaycast("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> |
| <Link id="m-destroycurrentstage" /><code>{"private void DestroyCurrentStage()"}</code> |
| <Link id="m-handlechecksresult" /><code>{"private void HandleChecksResult(int stageIndex, "}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, bool checksResult, TimeSpan timeLeft = null)"}</code> |
| <Link id="m-handlechilddestroyed" /><code>{"private void HandleChildDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-handleprefabkinematic" /><code>{"private void HandlePrefabKinematic("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> |
| <Link id="m-performstagechecks" /><code>{"private bool PerformStageChecks(int stageIndex)"}</code> |
| <Link id="m-picked" /><code>{"private void Picked()"}</code> |
| <Link id="m-setcurrentstageentity" /><code>{"private void SetCurrentStageEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity)"}</code> |
| <Link id="m-spawnprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnPrefab("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, int stageIndex)"}</code> |
| <Link id="m-stageentityunchilded" /><code>{"private void StageEntityUnchilded("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent)"}</code> |
| <Link id="m-unchildspawned" /><code>{"private void UnchildSpawned()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `GrowthItem`:

[`GrowerGroup.EntityAdded`](/game-api/types/global-e-h/growergroup#m-entityadded), [`GrowerGroup.EntityRemoved`](/game-api/types/global-e-h/growergroup#m-entityremoved), [`GrowerGroup.ItemRemoved`](/game-api/types/global-e-h/growergroup#m-itemremoved), [`GrowerGroup.items`](/game-api/types/global-e-h/growergroup#m-items), [`GrowerGroup.Setup`](/game-api/types/global-e-h/growergroup#m-setup).
