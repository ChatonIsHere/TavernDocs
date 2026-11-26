---
title: "MiningBaseGenerator.PartOption"
description: "A structure part the mining base generator can pick, with a weight that can grow with a biome attribute."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningBaseGenerator.PartOption

A **class** in `Root.Township`, the global namespace.

A structure part the mining base generator can pick, with a weight that can grow with a biome attribute.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MiningBaseGenerator`](/mod/game-api/types/global-m-o/miningbasegenerator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PartOption()"}</code> | <span className="api-desc">Creates a `MiningBaseGenerator.PartOption` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attribute" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute"}</code> | <span className="api-desc">Backing field for `Attribute`.</span> |
| <Link id="m-attributemultiplier" /><code>{"private float attributeMultiplier"}</code> | <span className="api-desc">Backing field for `AttributeMultiplier`.</span> |
| <Link id="m-chance" /><code>{"private float chance"}</code> | <span className="api-desc">Backing field for `Chance`.</span> |
| <Link id="m-part" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structurepart">{"StructurePart"}</Link>{" part"}</code> | <span className="api-desc">Backing field for `Part`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attribute-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" Attribute { get; }"}</code> | <span className="api-desc">Biome attribute that adds to the weight.</span> |
| <Link id="m-attributemultiplier-2" /><code>{"float AttributeMultiplier { get; }"}</code> | <span className="api-desc">How much the attribute's value adds to the weight.</span> |
| <Link id="m-chance-2" /><code>{"float Chance { get; }"}</code> | <span className="api-desc">Base weight for picking this part.</span> |
| <Link id="m-part-2" /><code><Link to="/mod/game-api/types/global-s/structurepart">{"StructurePart"}</Link>{" Part { get; }"}</code> | <span className="api-desc">The structure part.</span> |

## Used in

Members of other types that take, return or hold a `PartOption`:

<div className="api-used-in">

[`MiningBaseGenerator.centerPieces`](/mod/game-api/types/global-m-o/miningbasegenerator#m-centerpieces), [`MiningBaseGenerator.GetRandom`](/mod/game-api/types/global-m-o/miningbasegenerator#m-getrandom), [`MiningBaseGenerator.parts`](/mod/game-api/types/global-m-o/miningbasegenerator#m-parts).

</div>
