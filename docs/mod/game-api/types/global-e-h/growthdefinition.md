---
title: "GrowthDefinition"
description: "Asset listing the stages something grows through, used by GrowerComponent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthDefinition

A **class** in `Root.Township`, the global namespace.

Asset listing the stages something grows through, used by `GrowerComponent`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`HashedGeneralValue<GrowthDefinition>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`GrowthDefinition`](/mod/game-api/types/global-e-h/growthdefinition)
- **Attributes** `HashedPath`, `CreateAssetMenu`
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting#growthdefinition-and-growthstage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowthDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ischildingtoparentatend" /><code>{"private bool isChildingToParentAtEnd"}</code> | <span className="api-desc">Backing field for `IsChildingToParentAtEnd`: whether the grown object is chunk-parented to the grower's chunking parent when growth ends.</span> |
| <Link id="m-stages" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{"[] stages"}</code> | <span className="api-desc">Backing field for `Stages`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischildingtoparentatend-2" /><code>{"bool IsChildingToParentAtEnd { get; }"}</code> | <span className="api-desc">Whether the grown object is chunk-childed to the grower's chunking parent when growth ends, instead of standing on its own.</span> |
| <Link id="m-stages-2" /><code><Link to="/mod/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{"[] Stages { get; }"}</code> | <span className="api-desc">The growth stages in order.</span> |

## Used in

Members of other types that take, return or hold a `GrowthDefinition`:

<div className="api-used-in">

[`GrowerComponent.growthDefinition`](/mod/game-api/types/global-e-h/growercomponent#m-growthdefinition), [`GrowerGroup.Add`](/mod/game-api/types/global-e-h/growergroup#m-add), [`GrowerGroupSaveData.Item.definition`](/mod/game-api/types/global-e-h/growergroupsavedata-item#m-definition), [`GrowthItem.definition`](/mod/game-api/types/global-e-h/growthitem#m-definition), [`GrowthSaveData.definition`](/mod/game-api/types/global-e-h/growthsavedata#m-definition), [`GrowthStageComponent.GrowthDefinition`](/mod/game-api/types/global-e-h/growthstagecomponent#m-growthdefinition), [`GrowthStageComponent.SetStage`](/mod/game-api/types/global-e-h/growthstagecomponent#m-setstage), [`GrowthStageSaveData.definition`](/mod/game-api/types/global-e-h/growthstagesavedata#m-definition), [`PotatoSapling.growth`](/mod/game-api/types/global-p/potatosapling#m-growth).

</div>
