---
title: "StageBasedPrefab"
description: "Saved component that shows one stage prefab at a time from a PrefabStageDefinition, spawning it as a saved child."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StageBasedPrefab

A **class** in `Root.Township`, no namespace.

Saved component that shows one stage prefab at a time from a `PrefabStageDefinition`, spawning it as a saved child. Base of `TimeBasedStagedPrefab`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<StageBasedPrefabSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<StageBasedPrefabSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`StageBasedPrefabSaveData`](/game-api/types/global-s/stagebasedprefabsavedata), [`TimeBasedStagedPrefab`](/game-api/types/global-t-x/timebasedstagedprefab)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StageBasedPrefab()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progressedtostage" /><code>{"private "}<Link to="/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" progressedToStage"}</code> |  |
| <Link id="m-reachedlaststage" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" reachedLastStage"}</code> |  |
| <Link id="m-stages" /><code>{"private "}<Link to="/game-api/types/global-p/prefabstagedefinition">{"PrefabStageDefinition"}</Link>{" stages"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentstageentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" CurrentStageEntity { get; private set; }"}</code> | The spawned entity of the current stage, or null. |
| <Link id="m-currentstageindex" /><code>{"int CurrentStageIndex { get; private set; }"}</code> | Index of the current stage. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroycurrentstage" /><code>{"void DestroyCurrentStage()"}</code> | Destroys the current stage's entity. |
| <Link id="m-nextstage" /><code>{"void NextStage()"}</code> | Moves to the next stage, if there is one. |
| <Link id="m-previousstage" /><code>{"void PreviousStage()"}</code> | Moves to the previous stage, if there is one. |
| <Link id="m-progresstostage" /><code>{"void ProgressToStage(int stageIndex)"}</code> | Replaces the current stage entity with the given stage's prefab and fires the stage events. Ignores indexes out of range. |
| <Link id="m-handleloadedcurrentstageentity" /><code>{"private void HandleLoadedCurrentStageEntity("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> |  |
