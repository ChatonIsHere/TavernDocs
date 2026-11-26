---
title: "MiningBaseGenerator.PartOption"
description: "A structure part the mining base generator can pick, with a weight that can grow with a biome attribute."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningBaseGenerator.PartOption

A **class** in `Root.Township`, no namespace.

A structure part the mining base generator can pick, with a weight that can grow with a biome attribute.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`MiningBaseGenerator`](/game-api/types/global-m-o/miningbasegenerator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PartOption()"}</code> | Creates a `MiningBaseGenerator.PartOption` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attribute" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute"}</code> | Backing field for `Attribute`. |
| <Link id="m-attributemultiplier" /><code>{"private float attributeMultiplier"}</code> | Backing field for `AttributeMultiplier`. |
| <Link id="m-chance" /><code>{"private float chance"}</code> | Backing field for `Chance`. |
| <Link id="m-part" /><code>{"private "}<Link to="/game-api/types/global-s/structurepart">{"StructurePart"}</Link>{" part"}</code> | Backing field for `Part`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attribute-2" /><code><Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" Attribute { get; }"}</code> | Biome attribute that adds to the weight. |
| <Link id="m-attributemultiplier-2" /><code>{"float AttributeMultiplier { get; }"}</code> | How much the attribute's value adds to the weight. |
| <Link id="m-chance-2" /><code>{"float Chance { get; }"}</code> | Base weight for picking this part. |
| <Link id="m-part-2" /><code><Link to="/game-api/types/global-s/structurepart">{"StructurePart"}</Link>{" Part { get; }"}</code> | The structure part. |

## Used in

Members of other types that take, return or hold a `PartOption`:

[`MiningBaseGenerator.centerPieces`](/game-api/types/global-m-o/miningbasegenerator#m-centerpieces), [`MiningBaseGenerator.GetRandom`](/game-api/types/global-m-o/miningbasegenerator#m-getrandom), [`MiningBaseGenerator.parts`](/game-api/types/global-m-o/miningbasegenerator#m-parts).
