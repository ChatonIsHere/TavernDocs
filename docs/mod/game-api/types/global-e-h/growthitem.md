---
title: "GrowthItem"
description: "One growing plant inside a GrowerGroup: steps through a GrowthDefinition's stages on timeline timers, spawning each stage's prefab as a child."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthItem

A **class** in `Root.Township`, the global namespace.

One growing plant inside a `GrowerGroup`: steps through a `GrowthDefinition`'s stages on timeline timers, spawning each stage's prefab as a child. Server side.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowthItem()"}</code> | <span className="api-desc">Creates a `GrowthItem` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code>{"int currentStage"}</code> | <span className="api-desc">Index of the stage reached.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The `GrowthDefinition` with the stages to grow through.</span> |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The spawned entity for the current stage, or null.</span> |
| <Link id="m-hasstarted" /><code>{"bool hasStarted"}</code> | <span className="api-desc">True once `StartGrowing` has run.</span> |
| <Link id="m-nextstagetimer" /><code><Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" nextStageTimer"}</code> | <span className="api-desc">Timeline entry for the next stage or retry. Cancelled when growth stops.</span> |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/global-i-l/igrowthmanager">{"IGrowthManager"}</Link>{" parent"}</code> | <span className="api-desc">The `IGrowthManager` (group) that owns this item.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Local position in the parent group.</span> |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | <span className="api-desc">Local rotation in the parent group.</span> |
| <Link id="m-spawnedstageindex" /><code>{"int spawnedStageIndex"}</code> | <span className="api-desc">Index of the stage whose prefab is spawned, or -1.</span> |
| <Link id="m-startedtime" /><code>{"TimeSpan startedTime"}</code> | <span className="api-desc">Timeline time when growth started.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"private static Collider[] colliders"}</code> | <span className="api-desc">Shared buffer for the radius check overlap.</span> |
| <Link id="m-handledrigidbodies" /><code>{"private static HashSet<Rigidbody> handledRigidbodies"}</code> | <span className="api-desc">Shared set so the radius check looks at each rigidbody once.</span> |
| <Link id="m-hits" /><code>{"private static RaycastHit[] hits"}</code> | <span className="api-desc">Shared buffer for the raycast check.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-worldposition" /><code>{"Vector3 WorldPosition { get; }"}</code> | <span className="api-desc">The item's local `position` turned into world space through the parent group.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{"> Destroyed"}</code> | <span className="api-desc">Raised when growth stops without keeping the plant, such as a failed check or the stage entity being destroyed.</span> |
| <Link id="m-entityadded" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{", "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> EntityAdded"}</code> | <span className="api-desc">Raised when a stage entity is attached to this item.</span> |
| <Link id="m-entityremoved" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{", "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> EntityRemoved"}</code> | <span className="api-desc">Raised when the stage entity is detached or destroyed.</span> |
| <Link id="m-removed" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{"> Removed"}</code> | <span className="api-desc">Raised the frame after the stage entity is taken out of the group (picked).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gotostage" /><code>{"void GoToStage(int stageIndex, TimeSpan timeLeft = null)"}</code> | <span className="api-desc">Runs the checks for a stage, then spawns it and schedules the next, retries, or stops growth.</span> |
| <Link id="m-loadentity" /><code>{"void LoadEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Attaches an already spawned stage entity, used when loading a save.</span> |
| <Link id="m-loadstage" /><code>{"void LoadStage(int newIndex, TimeSpan timeLeft)"}</code> | <span className="api-desc">Restores a saved stage, running checks for the skipped stages and resuming with the saved time left.</span> |
| <Link id="m-ondestroy" /><code>{"void OnDestroy()"}</code> | <span className="api-desc">Cancels the next stage timer.</span> |
| <Link id="m-startgrowing" /><code>{"void StartGrowing()"}</code> | <span className="api-desc">Starts at stage 0 if not already started and the parent is not being destroyed.</span> |
| <Link id="m-stopgrowth" /><code>{"void StopGrowth(bool isKeepingChild)"}</code> | <span className="api-desc">Cancels the timer. Keeping the child unparents the last stage if the group destroys itself at the end; otherwise the stage is destroyed.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkradius" /><code>{"private bool CheckRadius("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> | <span className="api-desc">Stage check: fails if another growing entity's current stage (with a separation radius) is closer than the smaller of the two radii.</span> |
| <Link id="m-checkraycast" /><code>{"private bool CheckRaycast("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> | <span className="api-desc">Stage check: casts along the stage's ray direction from the growth point and fails if it hits anything but the current entity.</span> |
| <Link id="m-destroycurrentstage" /><code>{"private void DestroyCurrentStage()"}</code> | <span className="api-desc">Destroys the entity spawned for the current stage and stops tracking it.</span> |
| <Link id="m-handlechecksresult" /><code>{"private void HandleChecksResult(int stageIndex, "}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, bool checksResult, TimeSpan timeLeft = null)"}</code> | <span className="api-desc">After the stage checks: on success spawns the stage and schedules the next one; on failure retries later or stops and destroys the item.</span> |
| <Link id="m-handlechilddestroyed" /><code>{"private void HandleChildDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Stops growth and destroys the item when the stage entity is destroyed, but not when it is only unloaded.</span> |
| <Link id="m-handleprefabkinematic" /><code>{"private void HandlePrefabKinematic("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> | <span className="api-desc">Forces the spawned stage's rigidbody kinematic or non-kinematic when the stage's `ForceKinematic` asks for it.</span> |
| <Link id="m-performstagechecks" /><code>{"private bool PerformStageChecks(int stageIndex)"}</code> | <span className="api-desc">Runs a stage's checks: the previous stage's survival roll, then the radius and raycast checks.</span> |
| <Link id="m-picked" /><code>{"private void Picked()"}</code> | <span className="api-desc">Raises `Removed`. Called a frame after the stage entity is moved off the growth parent, for example when picked up.</span> |
| <Link id="m-setcurrentstageentity" /><code>{"private void SetCurrentStageEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity)"}</code> | <span className="api-desc">Swaps the tracked stage entity, moving the destroy and parent-changed listeners and raising `EntityRemoved` and `EntityAdded`.</span> |
| <Link id="m-spawnprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnPrefab("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, int stageIndex)"}</code> | <span className="api-desc">Spawns the stage's prefab (or a runtime tree for a `PresetTree`) under the parent, or keeps the previous stage's entity when the stage reuses it.</span> |
| <Link id="m-stageentityunchilded" /><code>{"private void StageEntityUnchilded("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent)"}</code> | <span className="api-desc">When the stage entity gets a new parent, stops tracking it, fixes its transform parent if needed and calls `Picked` next frame.</span> |
| <Link id="m-unchildspawned" /><code>{"private void UnchildSpawned()"}</code> | <span className="api-desc">At the end of growth, frees the final entity: moves it to the parent's chunking parent, or makes it a standalone saved entity in the chunk.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GrowthItem`:

<div className="api-used-in">

[`GrowerGroup.EntityAdded`](/mod/game-api/types/global-e-h/growergroup#m-entityadded), [`GrowerGroup.EntityRemoved`](/mod/game-api/types/global-e-h/growergroup#m-entityremoved), [`GrowerGroup.ItemRemoved`](/mod/game-api/types/global-e-h/growergroup#m-itemremoved), [`GrowerGroup.items`](/mod/game-api/types/global-e-h/growergroup#m-items), [`GrowerGroup.Setup`](/mod/game-api/types/global-e-h/growergroup#m-setup).

</div>
