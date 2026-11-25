---
title: "GrowthStageComponent"
description: "On a prefab spawned as a growth stage: remembers which grower, definition and stage it belongs to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthStageComponent

A **class** in `Root.Township`, no namespace.

On a prefab spawned as a growth stage: remembers which grower, definition and stage it belongs to.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GrowthStageSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GrowthStageSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IGrowthStage`](/game-api/types/global-i-l/igrowthstage)
- **Derived types** [`GrowthStageSaveData`](/game-api/types/global-e-h/growthstagesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowthStageComponent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code><Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" CurrentStage { get; }"}</code> | Settings of the stage this object is. |
| <Link id="m-currentstageindex" /><code>{"int CurrentStageIndex { get; private set; }"}</code> | Stage index, or -1 when not set up. |
| <Link id="m-grower" /><code><Link to="/game-api/types/global-e-h/growercomponent">{"GrowerComponent"}</Link>{" Grower { get; private set; }"}</code> | The `GrowerComponent` that spawned it. Found from the parent on server spawn. |
| <Link id="m-growthdefinition" /><code><Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" "}<Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" { get; private set; }"}</code> | The growth definition it belongs to, or null. |
| <Link id="m-issetup" /><code>{"bool IsSetup { get; }"}</code> | True when it has a growth definition. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onsetupchanged" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/growthstagecomponent">{"GrowthStageComponent"}</Link>{"> OnSetupChanged"}</code> | Raised when the stage is set, loaded or cleared. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-failstage" /><code>{"void FailStage(bool isDestroying)"}</code> | Ends growth. Pass true to destroy the object too, false to keep it as it is. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Finds the grower on the parent transform. |
| <Link id="m-setstage" /><code>{"void SetStage("}<Link to="/game-api/types/global-e-h/growercomponent">{"GrowerComponent"}</Link>{" grower, "}<Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition, int stage)"}</code> | Sets the grower, definition and stage. Logs an error if already set. |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GrowthStageComponent`:

[`TreeChopDetector.growthStage`](/game-api/types/global-t-x/treechopdetector#m-growthstage), [`TreeChopDetector.HandleSetupChanged`](/game-api/types/global-t-x/treechopdetector#m-handlesetupchanged).
