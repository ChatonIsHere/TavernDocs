---
title: "GrowthStageComponent"
description: "On a prefab spawned as a growth stage: remembers which grower, definition and stage it belongs to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthStageComponent

A **class** in `Root.Township`, the global namespace.

On a prefab spawned as a growth stage: remembers which grower, definition and stage it belongs to.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GrowthStageSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<GrowthStageSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IGrowthStage`](/mod/game-api/types/global-i-l/igrowthstage)
- **Derived types** [`GrowthStageSaveData`](/mod/game-api/types/global-e-h/growthstagesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowthStageComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; logs an error when a stage is set twice.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code><Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" CurrentStage { get; }"}</code> | <span className="api-desc">Settings of the stage this object is.</span> |
| <Link id="m-currentstageindex" /><code>{"int CurrentStageIndex { get; private set; }"}</code> | <span className="api-desc">Stage index, or -1 when not set up.</span> |
| <Link id="m-grower" /><code><Link to="/mod/game-api/types/global-e-h/growercomponent">{"GrowerComponent"}</Link>{" Grower { get; private set; }"}</code> | <span className="api-desc">The `GrowerComponent` that spawned it. Found from the parent on server spawn.</span> |
| <Link id="m-growthdefinition" /><code><Link to="/mod/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The growth definition it belongs to, or null.</span> |
| <Link id="m-issetup" /><code>{"bool IsSetup { get; }"}</code> | <span className="api-desc">True when it has a growth definition.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onsetupchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-e-h/growthstagecomponent">{"GrowthStageComponent"}</Link>{"> OnSetupChanged"}</code> | <span className="api-desc">Raised when the stage is set, loaded or cleared.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-failstage" /><code>{"void FailStage(bool isDestroying)"}</code> | <span className="api-desc">Ends growth. Pass true to destroy the object too, false to keep it as it is.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Finds the grower on the parent transform.</span> |
| <Link id="m-setstage" /><code>{"void SetStage("}<Link to="/mod/game-api/types/global-e-h/growercomponent">{"GrowerComponent"}</Link>{" grower, "}<Link to="/mod/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition, int stage)"}</code> | <span className="api-desc">Sets the grower, definition and stage. Logs an error if already set.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Drops the growth definition, grower and stage index, then raises `OnSetupChanged`. Called by `FailStage`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GrowthStageComponent`:

<div className="api-used-in">

[`TreeChopDetector.growthStage`](/mod/game-api/types/global-t-x/treechopdetector#m-growthstage), [`TreeChopDetector.HandleSetupChanged`](/mod/game-api/types/global-t-x/treechopdetector#m-handlesetupchanged).

</div>
