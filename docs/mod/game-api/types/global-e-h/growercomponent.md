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
| <Link id="m-ctor" /><code>{"GrowerComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autostart" /><code>{"private bool autoStart"}</code> | <span className="api-desc">If true, growing starts one frame after the server spawns the grower.</span> |
| <Link id="m-colliders" /><code>{"private static Collider[] colliders"}</code> | <span className="api-desc">Shared overlap buffer for the radius check.</span> |
| <Link id="m-growthdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" growthDefinition"}</code> | <span className="api-desc">The stages to grow through. Saved, so a loaded grower keeps its definition.</span> |
| <Link id="m-handledrigidbodies" /><code>{"private static HashSet<Rigidbody> handledRigidbodies"}</code> | <span className="api-desc">Shared set so each rigidbody is checked once per radius check.</span> |
| <Link id="m-hits" /><code>{"private static RaycastHit[] hits"}</code> | <span className="api-desc">Shared raycast buffer for the raycast check.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-nextstagetimer" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" nextStageTimer"}</code> | <span className="api-desc">Timeline entry for the next stage or retry.</span> |
| <Link id="m-startedtime" /><code>{"private TimeSpan startedTime"}</code> | <span className="api-desc">Timeline time growth started. Used on load to work out which stage it should be in now.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code><Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" CurrentStage { get; }"}</code> | <span className="api-desc">The current stage's settings.</span> |
| <Link id="m-currentstageentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" CurrentStageEntity { get; private set; }"}</code> | <span className="api-desc">The spawned object for the current stage, or null.</span> |
| <Link id="m-currentstageindex" /><code>{"int CurrentStageIndex { get; private set; }"}</code> | <span className="api-desc">Index of the current stage.</span> |
| <Link id="m-isrunning" /><code>{"bool IsRunning { get; private set; }"}</code> | <span className="api-desc">True once growth has started.</span> |
| <Link id="m-issetup" /><code>{"bool IsSetup { get; }"}</code> | <span className="api-desc">True when the grower has a growth definition.</span> |
| <Link id="m-spawnedprefabstageindex" /><code>{"int SpawnedPrefabStageIndex { get; private set; }"}</code> | <span className="api-desc">Stage whose prefab is spawned now, or -1. Can lag behind for stages that reuse the previous prefab.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Starts growing on the next frame if auto start is on.</span> |
| <Link id="m-startgrowing" /><code>{"void StartGrowing()"}</code> | <span className="api-desc">Starts at stage 0. Each stage checks survival chance, spacing and a raycast, retrying or dying if they fail.</span> |
| <Link id="m-stopgrowth" /><code>{"void StopGrowth(bool isKeepingChild)"}</code> | <span className="api-desc">Destroys the grower. Pass true to keep the grown object, which is then moved out to the chunk or the parent.</span> |

<details className="api-private">
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkradius" /><code>{"private bool CheckRadius("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> | <span className="api-desc">Fails if another growing thing whose current stage uses a radius sits within the smaller of the two separation radii.</span> |
| <Link id="m-checkraycast" /><code>{"private bool CheckRaycast("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> | <span className="api-desc">If the stage uses a raycast check, fails when the ray hits anything other than the current stage's own rigidbody.</span> |
| <Link id="m-destroycurrentstage" /><code>{"private void DestroyCurrentStage()"}</code> | <span className="api-desc">Destroys the spawned stage object and clears the spawned stage index.</span> |
| <Link id="m-destroyself" /><code>{"private void DestroySelf()"}</code> | <span className="api-desc">Cancels the stage timer, destroys the current stage object and the grower entity.</span> |
| <Link id="m-gotostage" /><code>{"private void GoToStage(int stageIndex, TimeSpan timeLeft = null)"}</code> | <span className="api-desc">Runs the checks for a stage and handles the result. Logs errors instead of throwing.</span> |
| <Link id="m-handlechecksresult" /><code>{"private void HandleChecksResult(int stageIndex, "}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, bool checksResult, TimeSpan timeLeft = null)"}</code> | <span className="api-desc">On pass, spawns the stage and schedules the next one (or ends growth keeping the result). On fail, retries later or destroys everything.</span> |
| <Link id="m-handlechilddestroyed" /><code>{"private void HandleChildDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Stops growth (destroying the grower) when the stage object is destroyed, but not when it's only unloaded.</span> |
| <Link id="m-handleloadedcurrentstageentity" /><code>{"private void HandleLoadedCurrentStageEntity("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> | <span className="api-desc">Load callback that sets the saved stage object as the current one.</span> |
| <Link id="m-handleprefabkinematic" /><code>{"private void HandlePrefabKinematic("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> | <span className="api-desc">Forces the spawned stage's rigidbody kinematic or not, if the stage asks for it. Warns if there's no rigidbody.</span> |
| <Link id="m-loadstage" /><code>{"private void LoadStage(int currentStageIndex, TimeSpan timeLeft)"}</code> | <span className="api-desc">After load, catches up through stages skipped while unloaded, running each check, then goes to the target stage.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the pending stage timer.</span> |
| <Link id="m-performstagechecks" /><code>{"private bool PerformStageChecks(int stageIndex)"}</code> | <span className="api-desc">Rolls the previous stage's survival rate, then runs the radius and raycast checks.</span> |
| <Link id="m-setcurrentstageentity" /><code>{"private void SetCurrentStageEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Sets the current stage object and moves the destroyed and parent-changed hooks to it.</span> |
| <Link id="m-spawnprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnPrefab("}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, int stageIndex)"}</code> | <span className="api-desc">Spawns the stage's prefab (or a preset tree) as a saved child, or keeps the previous prefab if the stage reuses it.</span> |
| <Link id="m-stageentityunchilded" /><code>{"private void StageEntityUnchilded("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent)"}</code> | <span className="api-desc">If the stage object is moved off the grower (for example picked up), lets it go and destroys the grower next frame.</span> |
| <Link id="m-unchildspawned" /><code>{"private void UnchildSpawned()"}</code> | <span className="api-desc">At the end of growth, detaches the final object so it stays in the world on its own (or under the grower's chunking parent).</span> |

</details>

## Used in

Members of other types that take, return or hold a `GrowerComponent`:

<div className="api-used-in">

[`GrowthStageComponent.Grower`](/mod/game-api/types/global-e-h/growthstagecomponent#m-grower), [`GrowthStageComponent.SetStage`](/mod/game-api/types/global-e-h/growthstagecomponent#m-setstage).

</div>
