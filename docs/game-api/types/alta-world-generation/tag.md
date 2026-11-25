---
title: "Tag"
description: "A tag asset for the PAGaC construction system (under PAGaC/Construction/Tags), with a colour for display."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Tag

A **class** in `Root.Township`, `Alta.PAGaC`.

A tag asset for the PAGaC construction system (under `PAGaC/Construction/Tags`), with a colour for display.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<Tag>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Tag`](/game-api/types/alta-world-generation/tag)
- **Attributes** `HashedPath`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Tag()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-displaycolor" /><code>{"private Color displayColor"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"Color Color { get; }"}</code> | Display colour. Picked at random in the editor if left black. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Gives the tag a random colour if it is still black. |

## Used in

Members of other types that take, return or hold a `Tag`:

[`BuildingRooms.air`](/game-api/types/alta-world-generation/buildingrooms#m-air), [`BuildingRooms.door`](/game-api/types/alta-world-generation/buildingrooms#m-door), [`BuildingRooms.floor`](/game-api/types/alta-world-generation/buildingrooms#m-floor), [`BuildingRooms.stair`](/game-api/types/alta-world-generation/buildingrooms#m-stair), [`BuildingRooms.wall`](/game-api/types/alta-world-generation/buildingrooms#m-wall), [`BuildingRooms.window`](/game-api/types/alta-world-generation/buildingrooms#m-window), [`Constructor.Constructor`](/game-api/types/alta-world-generation/constructor#m-ctor-2), [`Constructor.CreateData`](/game-api/types/alta-world-generation/constructor#m-createdata), [`Constructor.GetCompressed`](/game-api/types/alta-world-generation/constructor#m-getcompressed), [`Constructor.GetUsedTags`](/game-api/types/alta-world-generation/constructor#m-getusedtags), [`Constructor.tags`](/game-api/types/alta-world-generation/constructor#m-tags), [`GenerationBase.air`](/game-api/types/alta-world-generation/generationbase-alta-pagac#m-air), [`GenerationBase.Air`](/game-api/types/alta-world-generation/generationbase-alta-pagac#m-air-2), [`GenerationRule.GetStepTags`](/game-api/types/alta-world-generation/generationrule#m-getsteptags), [`GenerationRule.Resize`](/game-api/types/alta-world-generation/generationrule#m-resize), [`GenerationRule.serializedStepTags`](/game-api/types/alta-world-generation/generationrule#m-serializedsteptags), [`GenerationRule.stepTags`](/game-api/types/alta-world-generation/generationrule#m-steptags), [`GenerationRule.StepTags`](/game-api/types/alta-world-generation/generationrule#m-steptags-2), [`Generator.CastTo`](/game-api/types/alta-world-generation/generator#m-castto), [`Generator.CastToNot`](/game-api/types/alta-world-generation/generator#m-casttonot), [`Generator.Export`](/game-api/types/alta-world-generation/generator#m-export), [`Generator.Generator`](/game-api/types/alta-world-generation/generator#m-ctor), [`Node.Node`](/game-api/types/alta-world-generation/node-alta-pagac#m-ctor), [`Node.Tag`](/game-api/types/alta-world-generation/node-alta-pagac#m-tag), [`Node.TagIf`](/game-api/types/alta-world-generation/node-alta-pagac#m-tagif), [`Rule.DeSerialize`](/game-api/types/alta-world-generation/rule#m-deserialize), [`Rule.RecreateTags`](/game-api/types/alta-world-generation/rule#m-recreatetags), [`Rule.Resize`](/game-api/types/alta-world-generation/rule#m-resize), [`Rule.Serialize`](/game-api/types/alta-world-generation/rule#m-serialize), [`RuleBase.Item`](/game-api/types/alta-world-generation/rulebase#m-item), [`RuleBase.serializedTags`](/game-api/types/alta-world-generation/rulebase#m-serializedtags), [`RuleBase.tags`](/game-api/types/alta-world-generation/rulebase#m-tags), [`RuleBase.Tags`](/game-api/types/alta-world-generation/rulebase#m-tags-2), [`Test.Item`](/game-api/types/alta-world-generation/test#m-item), [`Test.serializedTags`](/game-api/types/alta-world-generation/test#m-serializedtags), [`Test.tags`](/game-api/types/alta-world-generation/test#m-tags).
