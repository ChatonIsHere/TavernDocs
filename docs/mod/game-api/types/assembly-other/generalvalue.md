---
title: "GeneralValue"
description: "Base for many of the game's ScriptableObject assets: just a description field and a type slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneralValue

An **abstract class** in `Alta.Values`, `Alta`.

Base for many of the game's ScriptableObject assets: just a description field and a type slot.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`CaveSettings<T>`](/mod/game-api/types/alta-world-generation/cavesettings-t), [`Element`](/mod/game-api/types/alta-world-generation/element), [`Plugin`](/mod/game-api/types/alta-world-generation/plugin), [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart), [`Section`](/mod/game-api/types/alta-world-generation/section), [`JointPointType`](/mod/game-api/types/alta-crafting/jointpointtype), [`CosmeticPalette`](/mod/game-api/types/alta-customization/cosmeticpalette), [`HashedGeneralValue`](/mod/game-api/types/assembly-other/hashedgeneralvalue), [`Sense`](/mod/game-api/types/alta-intelligence/sense), [`Category`](/mod/game-api/types/alta-world-generation/category), [`LootTable`](/mod/game-api/types/alta-world-generation/loottable), [`Origin`](/mod/game-api/types/alta-world-generation/origin), [`Rarity`](/mod/game-api/types/alta-world-generation/rarity), [`OptionSet`](/mod/game-api/types/alta-world-generation/optionset), [`Part`](/mod/game-api/types/alta-world-generation/part), [`RuleBase`](/mod/game-api/types/alta-world-generation/rulebase), [`RuleOptionSet`](/mod/game-api/types/alta-world-generation/ruleoptionset), [`Test`](/mod/game-api/types/alta-world-generation/test), [`SpawnRate`](/mod/game-api/types/alta-world-generation/spawnrate), [`BiomeAttribute`](/mod/game-api/types/global-a-b/biomeattribute)
- **Documented in** [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GeneralValue()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"private string description"}</code> | <span className="api-desc">Backing field for `Description`. Defaults to "No description".</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description-2" /><code>{"string Description { get; }"}</code> | <span className="api-desc">Free text description of the asset. "No description" by default.</span> |
| <Link id="m-type" /><code>{"virtual Type Type { get; set; }"}</code> | <span className="api-desc">A `System.Type` that subclasses can use. Null by default.</span> |

## Used in

Members of other types that take, return or hold a `GeneralValue`:

<div className="api-used-in">

[`Element.variables`](/mod/game-api/types/alta-world-generation/element#m-variables), [`Element.Variables`](/mod/game-api/types/alta-world-generation/element#m-variables-2), [`Element.SerializedVariable.value`](/mod/game-api/types/alta-world-generation/element-serializedvariable#m-value).

</div>
