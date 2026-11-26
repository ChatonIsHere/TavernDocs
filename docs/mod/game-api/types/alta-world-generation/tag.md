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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<Tag>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Tag`](/mod/game-api/types/alta-world-generation/tag)
- **Attributes** `HashedPath`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Tag()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displaycolor" /><code>{"private Color displayColor"}</code> | <span className="api-desc">Colour shown for the tag; set to a random colour in the editor while it's black.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"Color Color { get; }"}</code> | <span className="api-desc">Display colour. Picked at random in the editor if left black.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Gives the tag a random colour if it is still black.</span> |

## Used in

Members of other types that take, return or hold a `Tag`:

<div className="api-used-in">

[`BuildingRooms.air`](/mod/game-api/types/alta-world-generation/buildingrooms#m-air), [`BuildingRooms.door`](/mod/game-api/types/alta-world-generation/buildingrooms#m-door), [`BuildingRooms.floor`](/mod/game-api/types/alta-world-generation/buildingrooms#m-floor), [`BuildingRooms.stair`](/mod/game-api/types/alta-world-generation/buildingrooms#m-stair), [`BuildingRooms.wall`](/mod/game-api/types/alta-world-generation/buildingrooms#m-wall), [`BuildingRooms.window`](/mod/game-api/types/alta-world-generation/buildingrooms#m-window), [`Constructor.Constructor`](/mod/game-api/types/alta-world-generation/constructor#m-ctor-2), [`Constructor.CreateData`](/mod/game-api/types/alta-world-generation/constructor#m-createdata), [`Constructor.GetCompressed`](/mod/game-api/types/alta-world-generation/constructor#m-getcompressed), [`Constructor.GetUsedTags`](/mod/game-api/types/alta-world-generation/constructor#m-getusedtags), [`Constructor.tags`](/mod/game-api/types/alta-world-generation/constructor#m-tags), [`GenerationBase.air`](/mod/game-api/types/alta-world-generation/generationbase-alta-pagac#m-air), [`GenerationBase.Air`](/mod/game-api/types/alta-world-generation/generationbase-alta-pagac#m-air-2), [`GenerationRule.GetStepTags`](/mod/game-api/types/alta-world-generation/generationrule#m-getsteptags), [`GenerationRule.Resize`](/mod/game-api/types/alta-world-generation/generationrule#m-resize), [`GenerationRule.serializedStepTags`](/mod/game-api/types/alta-world-generation/generationrule#m-serializedsteptags), [`GenerationRule.stepTags`](/mod/game-api/types/alta-world-generation/generationrule#m-steptags), [`GenerationRule.StepTags`](/mod/game-api/types/alta-world-generation/generationrule#m-steptags-2), [`Generator.CastTo`](/mod/game-api/types/alta-world-generation/generator#m-castto), [`Generator.CastToNot`](/mod/game-api/types/alta-world-generation/generator#m-casttonot), [`Generator.Export`](/mod/game-api/types/alta-world-generation/generator#m-export), [`Generator.Generator`](/mod/game-api/types/alta-world-generation/generator#m-ctor), [`Node.Node`](/mod/game-api/types/alta-world-generation/node-alta-pagac#m-ctor), [`Node.Tag`](/mod/game-api/types/alta-world-generation/node-alta-pagac#m-tag), [`Node.TagIf`](/mod/game-api/types/alta-world-generation/node-alta-pagac#m-tagif), [`Rule.DeSerialize`](/mod/game-api/types/alta-world-generation/rule#m-deserialize), [`Rule.RecreateTags`](/mod/game-api/types/alta-world-generation/rule#m-recreatetags), [`Rule.Resize`](/mod/game-api/types/alta-world-generation/rule#m-resize), [`Rule.Serialize`](/mod/game-api/types/alta-world-generation/rule#m-serialize), [`RuleBase.Item`](/mod/game-api/types/alta-world-generation/rulebase#m-item), [`RuleBase.serializedTags`](/mod/game-api/types/alta-world-generation/rulebase#m-serializedtags), [`RuleBase.tags`](/mod/game-api/types/alta-world-generation/rulebase#m-tags), [`RuleBase.Tags`](/mod/game-api/types/alta-world-generation/rulebase#m-tags-2), [`Test.Item`](/mod/game-api/types/alta-world-generation/test#m-item), [`Test.serializedTags`](/mod/game-api/types/alta-world-generation/test#m-serializedtags), [`Test.tags`](/mod/game-api/types/alta-world-generation/test#m-tags).

</div>
