---
title: "GrowerComponent"
description: "Server: grows something through the stages of a GrowthDefinition (sapling to tree, for example), spawning each stage's prefab as a child and moving on after..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowerComponent

A **class** in `Root.Township`, no namespace.

Server: grows something through the stages of a `GrowthDefinition` (sapling to tree, for example), spawning each stage's prefab as a child and moving on after each stage's duration. Saved, and catches up on load.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IGrowthStage`](/game-api/types/global-i-l/igrowthstage), [`ISavable<GrowthSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GrowthSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GrowthSaveData`](/game-api/types/global-e-h/growthsavedata)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting#growercomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GrowerComponent()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-autostart" /><code>{"private bool autoStart"}</code> |
| <Link id="m-colliders" /><code>{"private static Collider[] colliders"}</code> |
| <Link id="m-growthdefinition" /><code>{"private "}<Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" growthDefinition"}</code> |
| <Link id="m-handledrigidbodies" /><code>{"private static HashSet<Rigidbody> handledRigidbodies"}</code> |
| <Link id="m-hits" /><code>{"private static RaycastHit[] hits"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-nextstagetimer" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" nextStageTimer"}</code> |
| <Link id="m-startedtime" /><code>{"private TimeSpan startedTime"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code><Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" CurrentStage { get; }"}</code> | The current stage's settings. |
| <Link id="m-currentstageentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" CurrentStageEntity { get; private set; }"}</code> | The spawned object for the current stage, or null. |
| <Link id="m-currentstageindex" /><code>{"int CurrentStageIndex { get; private set; }"}</code> | Index of the current stage. |
| <Link id="m-isrunning" /><code>{"bool IsRunning { get; private set; }"}</code> | True once growth has started. |
| <Link id="m-issetup" /><code>{"bool IsSetup { get; }"}</code> | True when the grower has a growth definition. |
| <Link id="m-spawnedprefabstageindex" /><code>{"int SpawnedPrefabStageIndex { get; private set; }"}</code> | Stage whose prefab is spawned now, or -1. Can lag behind for stages that reuse the previous prefab. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Starts growing on the next frame if auto start is on. |
| <Link id="m-startgrowing" /><code>{"void StartGrowing()"}</code> | Starts at stage 0. Each stage checks survival chance, spacing and a raycast, retrying or dying if they fail. |
| <Link id="m-stopgrowth" /><code>{"void StopGrowth(bool isKeepingChild)"}</code> | Destroys the grower. Pass true to keep the grown object, which is then moved out to the chunk or the parent. |

<details>
<summary>16 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkradius" /><code>{"private bool CheckRadius("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> |
| <Link id="m-checkraycast" /><code>{"private bool CheckRaycast("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage)"}</code> |
| <Link id="m-destroycurrentstage" /><code>{"private void DestroyCurrentStage()"}</code> |
| <Link id="m-destroyself" /><code>{"private void DestroySelf()"}</code> |
| <Link id="m-gotostage" /><code>{"private void GoToStage(int stageIndex, TimeSpan timeLeft = null)"}</code> |
| <Link id="m-handlechecksresult" /><code>{"private void HandleChecksResult(int stageIndex, "}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, bool checksResult, TimeSpan timeLeft = null)"}</code> |
| <Link id="m-handlechilddestroyed" /><code>{"private void HandleChildDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-handleloadedcurrentstageentity" /><code>{"private void HandleLoadedCurrentStageEntity("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> |
| <Link id="m-handleprefabkinematic" /><code>{"private void HandlePrefabKinematic("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> |
| <Link id="m-loadstage" /><code>{"private void LoadStage(int currentStageIndex, TimeSpan timeLeft)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-performstagechecks" /><code>{"private bool PerformStageChecks(int stageIndex)"}</code> |
| <Link id="m-setcurrentstageentity" /><code>{"private void SetCurrentStageEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-spawnprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnPrefab("}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" currentStage, int stageIndex)"}</code> |
| <Link id="m-stageentityunchilded" /><code>{"private void StageEntityUnchilded("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent)"}</code> |
| <Link id="m-unchildspawned" /><code>{"private void UnchildSpawned()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `GrowerComponent`:

[`GrowthStageComponent.Grower`](/game-api/types/global-e-h/growthstagecomponent#m-grower), [`GrowthStageComponent.SetStage`](/game-api/types/global-e-h/growthstagecomponent#m-setstage).
