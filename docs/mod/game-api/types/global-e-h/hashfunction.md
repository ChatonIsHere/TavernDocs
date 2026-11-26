---
title: "HashFunction"
description: "Base for a seeded hash that turns integers into repeatable pseudo-random values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashFunction

An **abstract class** in `Root.Township`, the global namespace.

Base for a seeded hash that turns integers into repeatable pseudo-random values. `XXHash` is the one used for cave seeds.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Derived types** [`XXHash`](/mod/game-api/types/global-t-x/xxhash)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HashFunction()"}</code> | <span className="api-desc">Creates a `HashFunction` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethash" /><code>{"abstract uint GetHash(params int[] data)"}</code> | <span className="api-desc">Hashes one or more integers to a `uint`.</span> |
| <Link id="m-gethash-2" /><code>{"virtual uint GetHash(int data)"}</code> | <span className="api-desc">Hashes one or more integers to a `uint`.</span> |
| <Link id="m-gethash-3" /><code>{"virtual uint GetHash(int x, int y)"}</code> | <span className="api-desc">Hashes one or more integers to a `uint`.</span> |
| <Link id="m-gethash-4" /><code>{"virtual uint GetHash(int x, int y, int z)"}</code> | <span className="api-desc">Hashes one or more integers to a `uint`.</span> |
| <Link id="m-range" /><code>{"int Range(int min, int max, params int[] data)"}</code> | <span className="api-desc">Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly.</span> |
| <Link id="m-range-2" /><code>{"int Range(int min, int max, int data)"}</code> | <span className="api-desc">Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly.</span> |
| <Link id="m-range-3" /><code>{"int Range(int min, int max, int x, int y)"}</code> | <span className="api-desc">Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly.</span> |
| <Link id="m-range-4" /><code>{"int Range(int min, int max, int x, int y, int z)"}</code> | <span className="api-desc">Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly.</span> |
| <Link id="m-range-5" /><code>{"float Range(float min, float max, params int[] data)"}</code> | <span className="api-desc">Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly.</span> |
| <Link id="m-range-6" /><code>{"float Range(float min, float max, int data)"}</code> | <span className="api-desc">Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly.</span> |
| <Link id="m-range-7" /><code>{"float Range(float min, float max, int x, int y)"}</code> | <span className="api-desc">Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly.</span> |
| <Link id="m-range-8" /><code>{"float Range(float min, float max, int x, int y, int z)"}</code> | <span className="api-desc">Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly.</span> |
| <Link id="m-value" /><code>{"float Value(params int[] data)"}</code> | <span className="api-desc">Hash scaled to a float from 0 to 1.</span> |
| <Link id="m-value-2" /><code>{"float Value(int data)"}</code> | <span className="api-desc">Hash scaled to a float from 0 to 1.</span> |
| <Link id="m-value-3" /><code>{"float Value(int x, int y)"}</code> | <span className="api-desc">Hash scaled to a float from 0 to 1.</span> |
| <Link id="m-value-4" /><code>{"float Value(int x, int y, int z)"}</code> | <span className="api-desc">Hash scaled to a float from 0 to 1.</span> |

## Used in

Members of other types that take, return or hold a `HashFunction`:

<div className="api-used-in">

[`CaveBiomeGenerator.Preview`](/mod/game-api/types/alta-world-generation/cavebiomegenerator#m-preview), [`CaveLayerManager.LayersSeedHash`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-layersseedhash), [`GenerationBase.HashFunction`](/mod/game-api/types/alta-world-generation/generationbase#m-hashfunction), [`IGenerator.HashFunction`](/mod/game-api/types/alta-world-generation/igenerator#m-hashfunction).

</div>
