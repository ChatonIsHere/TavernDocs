---
title: "GrowthStageComponent"
description: "class GrowthStageComponent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthStageComponent

A **class** in `Root.Township`, no namespace.

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
| <Link id="m-currentstage" /><code><Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" CurrentStage { get; }"}</code> |  |
| <Link id="m-currentstageindex" /><code>{"int CurrentStageIndex { get; private set; }"}</code> |  |
| <Link id="m-grower" /><code><Link to="/game-api/types/global-e-h/growercomponent">{"GrowerComponent"}</Link>{" Grower { get; private set; }"}</code> |  |
| <Link id="m-growthdefinition" /><code><Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" "}<Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-issetup" /><code>{"bool IsSetup { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onsetupchanged" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/growthstagecomponent">{"GrowthStageComponent"}</Link>{"> OnSetupChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-failstage" /><code>{"void FailStage(bool isDestroying)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-setstage" /><code>{"void SetStage("}<Link to="/game-api/types/global-e-h/growercomponent">{"GrowerComponent"}</Link>{" grower, "}<Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition, int stage)"}</code> |  |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GrowthStageComponent`:

[`TreeChopDetector.growthStage`](/game-api/types/global-t-x/treechopdetector#m-growthstage), [`TreeChopDetector.HandleSetupChanged`](/game-api/types/global-t-x/treechopdetector#m-handlesetupchanged).
