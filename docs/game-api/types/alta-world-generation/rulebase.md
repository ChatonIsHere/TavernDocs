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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`GenerationRule`](/game-api/types/alta-world-generation/generationrule), [`Rule`](/game-api/types/alta-world-generation/rule)
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected RuleBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-configurations" /><code>{"protected int configurations"}</code> |  |
| <Link id="m-serializedtagcounts" /><code>{"protected int[] serializedTagCounts"}</code> | How many tags each cell has in `serializedTags`, probably. |
| <Link id="m-serializedtags" /><code>{"protected "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedTags"}</code> | Flat list of tags as stored in the asset, probably unpacked into `tags` on load. |
| <Link id="m-sizex" /><code>{"protected int sizeX"}</code> |  |
| <Link id="m-sizey" /><code>{"protected int sizeY"}</code> |  |
| <Link id="m-sizez" /><code>{"protected int sizeZ"}</code> |  |
| <Link id="m-tags" /><code>{"protected List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-configurations-2" /><code>{"int Configurations { get; }"}</code> | Number of configurations the rule has, each with its own tag grid. |
| <Link id="m-item" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> this[int configuration, int x, int y, int z] { get; }"}</code> | Indexer: the tag list at a configuration and cell. |
| <Link id="m-sizex-2" /><code>{"int SizeX { get; }"}</code> | Width of the rule's grid in cells. |
| <Link id="m-sizey-2" /><code>{"int SizeY { get; }"}</code> | Height of the rule's grid in cells. |
| <Link id="m-sizez-2" /><code>{"int SizeZ { get; }"}</code> | Depth of the rule's grid in cells. |
| <Link id="m-tags-2" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] Tags { get; }"}</code> | The tag lists, indexed by configuration, x, y and z. |

## Used in

Members of other types that take, return or hold a `RuleBase`:

[`Constructor.CheckPlace`](/game-api/types/alta-world-generation/constructor#m-checkplace), [`Constructor.CreateData`](/game-api/types/alta-world-generation/constructor#m-createdata), [`Constructor.HandlePart`](/game-api/types/alta-world-generation/constructor#m-handlepart), [`Constructor.usedRules`](/game-api/types/alta-world-generation/constructor#m-usedrules).
