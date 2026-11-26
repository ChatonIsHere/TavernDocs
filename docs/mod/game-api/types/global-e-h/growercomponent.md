---
title: "GrowerComponent"
description: "Server: grows something through the stages of a GrowthDefinition (sapling to tree, for example), spawning each stage's prefab as a child and moving on after..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowerComponent

A **class** in `Root.Township`, the global namespace.

Server: grows something through the stages of a `GrowthDefinition` (sapling to tree, for example), spawning each stage's prefab as a child and moving on after each stage's duration. Saved, and catches up on load.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IGrowthStage`](/mod/game-api/types/global-i-l/igrowthstage), [`ISavable<GrowthSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<GrowthSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GrowthSaveData`](/mod/game-api/types/global-e-h/growthsavedata)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting#growercomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowerComponent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autostart" /><code>{"private bool autoStart"}</code> | If true, growing starts one frame after the server spawns the grower. |
| <Link id="m-colliders" /><code>{"private static Collider[] colliders"}</code> | Shared overlap buffer for the radius check. |
| <Link id="m-growthdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" growthDefinition"}</code> | The stages to grow through. Saved, so a loaded grower keeps its definition. |
| <Link id="m-handledrigidbodies" /><code>{"private static HashSet<Rigidbody> handledRigidbodies"}</code> | Shared set so each rigidbody is checked once per radius check. |
| <Link id="m-hits" /><code>{"private static RaycastHit[] hits"}</code> | Shared raycast buffer for the raycast check. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-nextstagetimer" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" nextStageTimer"}</code> | Timeline entry for the next stage or retry. |
| <Link id="m-startedtime" /><code>{"private TimeSpan startedTime"}</code> | Timeline time growth started. Used on load to work out which stage it should be in now. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code><Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" CurrentStage { get; }"}</code> | The current stage's settings. |
| <Link id="m-currentstageentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" CurrentStageEntity { get; private set; }"}</code> | The spawned object for the current stage, or null. |
| <Link id="m-currentstageindex" /><code>{"int CurrentStageIndex { get; private set; }"}</code> | Index of the current stage. |
| <Link id="m-isrunning" /><code>{"bool IsRunning { get; private set; }"}</code> | True once growth has started. |
| <Link id="m-issetup" /><code>{"bool IsSetup { get; }"}</code> | True when the grower has a growth definition. |
| <Link id="m-spawnedprefabstageindex" /><code>{"int SpawnedPrefabStageIndex { get; private set; }"}</code> | Stage whose prefab is spawned now, or -1. Can lag behind for stages that reuse the previous prefab. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Starts growing on the next frame if auto start is on. |
| <Link id="m-startgrowing" /><code>{"void StartGrowing()"}</code> | Starts at stage 0. Each stage checks survival chance, spacing and a raycast, retrying or dying if they fail. |
| <Link id="m-stopgrowth" /><code>{"void StopGrowth(bool isKeepingChild)"}</code> | Destroys the grower. Pass true to keep the grown object, which is then moved out to the chunk or the parent. |

<details>
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkradius" /><code>{"private bool CheckRadius("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> | Fails if another growing thing whose current stage uses a radius sits within the smaller of the two separation radii. |
| <Link id="m-checkraycast" /><code>{"private bool CheckRaycast("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> | If the stage uses a raycast check, fails when the ray hits anything other than the current stage's own rigidbody. |
| <Link id="m-destroycurrentstage" /><code>{"private void DestroyCurrentStage()"}</code> | Destroys the spawned stage object and clears the spawned stage index. |
| <Link id="m-destroyself" /><code>{"private void DestroySelf()"}</code> | Cancels the stage timer, destroys the current stage object and the grower entity. |
| <Link id="m-gotostage" /><code>{"private void GoToStage(int stageIndex, TimeSpan timeLeft = null)"}</code> | Runs the checks for a stage and handles the result. Logs errors instead of throwing. |
| <Link id="m-handlechecksresult" /><code>{"private void HandleChecksResult(int stageIndex, "}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, bool checksResult, TimeSpan timeLeft = null)"}</code> | On pass, spawns the stage and schedules the next one (or ends growth keeping the result). On fail, retries later or destroys everything. |
| <Link id="m-handlechilddestroyed" /><code>{"private void HandleChildDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Stops growth (destroying the grower) when the stage object is destroyed, but not when it's only unloaded. |
| <Link id="m-handleloadedcurrentstageentity" /><code>{"private void HandleLoadedCurrentStageEntity("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> | Load callback that sets the saved stage object as the current one. |
| <Link id="m-handleprefabkinematic" /><code>{"private void HandlePrefabKinematic("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> | Forces the spawned stage's rigidbody kinematic or not, if the stage asks for it. Warns if there's no rigidbody. |
| <Link id="m-loadstage" /><code>{"private void LoadStage(int currentStageIndex, TimeSpan timeLeft)"}</code> | After load, catches up through stages skipped while unloaded, running each check, then goes to the target stage. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels the pending stage timer. |
| <Link id="m-performstagechecks" /><code>{"private bool PerformStageChecks(int stageIndex)"}</code> | Rolls the previous stage's survival rate, then runs the radius and raycast checks. |
| <Link id="m-setcurrentstageentity" /><code>{"private void SetCurrentStageEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Sets the current stage object and moves the destroyed and parent-changed hooks to it. |
| <Link id="m-spawnprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnPrefab("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, int stageIndex)"}</code> | Spawns the stage's prefab (or a preset tree) as a saved child, or keeps the previous prefab if the stage reuses it. |
| <Link id="m-stageentityunchilded" /><code>{"private void StageEntityUnchilded("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent)"}</code> | If the stage object is moved off the grower (for example picked up), lets it go and destroys the grower next frame. |
| <Link id="m-unchildspawned" /><code>{"private void UnchildSpawned()"}</code> | At the end of growth, detaches the final object so it stays in the world on its own (or under the grower's chunking parent). |

</details>

## Used in

Members of other types that take, return or hold a `GrowerComponent`:

[`GrowthStageComponent.Grower`](/mod/game-api/types/global-e-h/growthstagecomponent#m-grower), [`GrowthStageComponent.SetStage`](/mod/game-api/types/global-e-h/growthstagecomponent#m-setstage).
