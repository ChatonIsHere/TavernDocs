---
title: "StageBasedPrefab"
description: "Saved component that shows one stage prefab at a time from a PrefabStageDefinition, spawning it as a saved child."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StageBasedPrefab

A **class** in `Root.Township`, the global namespace.

Saved component that shows one stage prefab at a time from a `PrefabStageDefinition`, spawning it as a saved child. Base of `TimeBasedStagedPrefab`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<StageBasedPrefabSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<StageBasedPrefabSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`StageBasedPrefabSaveData`](/mod/game-api/types/global-s/stagebasedprefabsavedata), [`TimeBasedStagedPrefab`](/mod/game-api/types/global-t-x/timebasedstagedprefab)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StageBasedPrefab()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progressedtostage" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" progressedToStage"}</code> | <span className="api-desc">Inspector event raised with the new stage index.</span> |
| <Link id="m-reachedlaststage" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" reachedLastStage"}</code> | <span className="api-desc">Inspector event raised when the last stage is reached.</span> |
| <Link id="m-stages" /><code>{"private "}<Link to="/mod/game-api/types/global-p/prefabstagedefinition">{"PrefabStageDefinition"}</Link>{" stages"}</code> | <span className="api-desc">Definition listing each stage's prefab and local placement.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentstageentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" CurrentStageEntity { get; private set; }"}</code> | <span className="api-desc">The spawned entity of the current stage, or null.</span> |
| <Link id="m-currentstageindex" /><code>{"int CurrentStageIndex { get; private set; }"}</code> | <span className="api-desc">Index of the current stage.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroycurrentstage" /><code>{"void DestroyCurrentStage()"}</code> | <span className="api-desc">Destroys the current stage's entity.</span> |
| <Link id="m-nextstage" /><code>{"void NextStage()"}</code> | <span className="api-desc">Moves to the next stage, if there is one.</span> |
| <Link id="m-previousstage" /><code>{"void PreviousStage()"}</code> | <span className="api-desc">Moves to the previous stage, if there is one.</span> |
| <Link id="m-progresstostage" /><code>{"void ProgressToStage(int stageIndex)"}</code> | <span className="api-desc">Replaces the current stage entity with the given stage's prefab and fires the stage events. Ignores indexes out of range.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleloadedcurrentstageentity" /><code>{"private void HandleLoadedCurrentStageEntity("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> | <span className="api-desc">Load callback that takes the saved child entity as the current stage.</span> |

</details>
