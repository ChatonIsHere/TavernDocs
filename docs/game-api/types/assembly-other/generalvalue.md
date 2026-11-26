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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`CaveSettings<T>`](/game-api/types/alta-world-generation/cavesettings-t), [`Element`](/game-api/types/alta-world-generation/element), [`Plugin`](/game-api/types/alta-world-generation/plugin), [`MapGeneratorPart`](/game-api/types/alta-world-generation/mapgeneratorpart), [`Section`](/game-api/types/alta-world-generation/section), [`JointPointType`](/game-api/types/alta-crafting/jointpointtype), [`CosmeticPalette`](/game-api/types/alta-customization/cosmeticpalette), [`HashedGeneralValue`](/game-api/types/assembly-other/hashedgeneralvalue), [`Sense`](/game-api/types/alta-intelligence/sense), [`Category`](/game-api/types/alta-world-generation/category), [`LootTable`](/game-api/types/alta-world-generation/loottable), [`Origin`](/game-api/types/alta-world-generation/origin), [`Rarity`](/game-api/types/alta-world-generation/rarity), [`OptionSet`](/game-api/types/alta-world-generation/optionset), [`Part`](/game-api/types/alta-world-generation/part), [`RuleBase`](/game-api/types/alta-world-generation/rulebase), [`RuleOptionSet`](/game-api/types/alta-world-generation/ruleoptionset), [`Test`](/game-api/types/alta-world-generation/test), [`SpawnRate`](/game-api/types/alta-world-generation/spawnrate), [`BiomeAttribute`](/game-api/types/global-a-b/biomeattribute)
- **Documented in** [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected GeneralValue()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"private string description"}</code> | Backing field for `Description`. Defaults to "No description". |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description-2" /><code>{"string Description { get; }"}</code> | Free text description of the asset. "No description" by default. |
| <Link id="m-type" /><code>{"virtual Type Type { get; set; }"}</code> | A `System.Type` that subclasses can use. Null by default. |

## Used in

Members of other types that take, return or hold a `GeneralValue`:

[`Element.variables`](/game-api/types/alta-world-generation/element#m-variables), [`Element.Variables`](/game-api/types/alta-world-generation/element#m-variables-2), [`Element.SerializedVariable.value`](/game-api/types/alta-world-generation/element-serializedvariable#m-value).
