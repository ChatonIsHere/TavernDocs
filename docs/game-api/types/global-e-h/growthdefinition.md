---
title: "GrowthDefinition"
description: "Asset listing the stages something grows through, used by GrowerComponent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthDefinition

A **class** in `Root.Township`, no namespace.

Asset listing the stages something grows through, used by `GrowerComponent`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`HashedGeneralValue<GrowthDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`GrowthDefinition`](/game-api/types/global-e-h/growthdefinition)
- **Attributes** `HashedPath`, `CreateAssetMenu`
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting#growthdefinition-and-growthstage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GrowthDefinition()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-ischildingtoparentatend" /><code>{"private bool isChildingToParentAtEnd"}</code> |
| <Link id="m-stages" /><code>{"private "}<Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{"[] stages"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischildingtoparentatend-2" /><code>{"bool IsChildingToParentAtEnd { get; }"}</code> | Whether the grown object is chunk-childed to the grower's chunking parent when growth ends, instead of standing on its own. |
| <Link id="m-stages-2" /><code><Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{"[] Stages { get; }"}</code> | The growth stages in order. |

## Used in

Members of other types that take, return or hold a `GrowthDefinition`:

[`GrowerComponent.growthDefinition`](/game-api/types/global-e-h/growercomponent#m-growthdefinition), [`GrowerGroup.Add`](/game-api/types/global-e-h/growergroup#m-add), [`GrowerGroupSaveData.Item.definition`](/game-api/types/global-e-h/growergroupsavedata-item#m-definition), [`GrowthItem.definition`](/game-api/types/global-e-h/growthitem#m-definition), [`GrowthSaveData.definition`](/game-api/types/global-e-h/growthsavedata#m-definition), [`GrowthStageComponent.GrowthDefinition`](/game-api/types/global-e-h/growthstagecomponent#m-growthdefinition), [`GrowthStageComponent.SetStage`](/game-api/types/global-e-h/growthstagecomponent#m-setstage), [`GrowthStageSaveData.definition`](/game-api/types/global-e-h/growthstagesavedata#m-definition), [`PotatoSapling.growth`](/game-api/types/global-p/potatosapling#m-growth).
