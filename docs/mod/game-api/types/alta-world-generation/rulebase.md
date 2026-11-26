---
title: "RuleBase"
description: "Base asset for a PAGaC (procedural generation) rule: a 3D grid of tag lists, with one grid per configuration (probably rotations or variants)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RuleBase

An **abstract class** in `Root.Township`, `Alta.PAGaC`.

Base asset for a PAGaC (procedural generation) rule: a 3D grid of tag lists, with one grid per configuration (probably rotations or variants).

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`GenerationRule`](/mod/game-api/types/alta-world-generation/generationrule), [`Rule`](/mod/game-api/types/alta-world-generation/rule)
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected RuleBase()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-configurations" /><code>{"protected int configurations"}</code> | <span className="api-desc">Number of tag configurations the rule has. Each is a full grid of tag lists.</span> |
| <Link id="m-serializedtagcounts" /><code>{"protected int[] serializedTagCounts"}</code> | <span className="api-desc">How many tags each cell has in `serializedTags`, probably.</span> |
| <Link id="m-serializedtags" /><code>{"protected "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedTags"}</code> | <span className="api-desc">Flat list of tags as stored in the asset, probably unpacked into `tags` on load.</span> |
| <Link id="m-sizex" /><code>{"protected int sizeX"}</code> | <span className="api-desc">Width of the rule's grid in cells.</span> |
| <Link id="m-sizey" /><code>{"protected int sizeY"}</code> | <span className="api-desc">Height of the rule's grid in cells.</span> |
| <Link id="m-sizez" /><code>{"protected int sizeZ"}</code> | <span className="api-desc">Depth of the rule's grid in cells.</span> |
| <Link id="m-tags" /><code>{"protected List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags"}</code> | <span className="api-desc">The 4D grid of tag lists, indexed by configuration, x, y, z. Rebuilt from the serialized arrays on load.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-configurations-2" /><code>{"int Configurations { get; }"}</code> | <span className="api-desc">Number of configurations the rule has, each with its own tag grid.</span> |
| <Link id="m-item" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> this[int configuration, int x, int y, int z] { get; }"}</code> | <span className="api-desc">Indexer: the tag list at a configuration and cell.</span> |
| <Link id="m-sizex-2" /><code>{"int SizeX { get; }"}</code> | <span className="api-desc">Width of the rule's grid in cells.</span> |
| <Link id="m-sizey-2" /><code>{"int SizeY { get; }"}</code> | <span className="api-desc">Height of the rule's grid in cells.</span> |
| <Link id="m-sizez-2" /><code>{"int SizeZ { get; }"}</code> | <span className="api-desc">Depth of the rule's grid in cells.</span> |
| <Link id="m-tags-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] Tags { get; }"}</code> | <span className="api-desc">The tag lists, indexed by configuration, x, y and z.</span> |

## Used in

Members of other types that take, return or hold a `RuleBase`:

<div className="api-used-in">

[`Constructor.CheckPlace`](/mod/game-api/types/alta-world-generation/constructor#m-checkplace), [`Constructor.CreateData`](/mod/game-api/types/alta-world-generation/constructor#m-createdata), [`Constructor.HandlePart`](/mod/game-api/types/alta-world-generation/constructor#m-handlepart), [`Constructor.usedRules`](/mod/game-api/types/alta-world-generation/constructor#m-usedrules).

</div>
