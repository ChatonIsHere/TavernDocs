---
title: "HashFunction"
description: "Base for a seeded hash that turns integers into repeatable pseudo-random values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashFunction

An **abstract class** in `Root.Township`, no namespace.

Base for a seeded hash that turns integers into repeatable pseudo-random values. `XXHash` is the one used for cave seeds.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Derived types** [`XXHash`](/game-api/types/global-t-x/xxhash)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HashFunction()"}</code> | Creates a `HashFunction` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethash" /><code>{"abstract uint GetHash(params int[] data)"}</code> | Hashes one or more integers to a `uint`. |
| <Link id="m-gethash-2" /><code>{"virtual uint GetHash(int data)"}</code> | Hashes one or more integers to a `uint`. |
| <Link id="m-gethash-3" /><code>{"virtual uint GetHash(int x, int y)"}</code> | Hashes one or more integers to a `uint`. |
| <Link id="m-gethash-4" /><code>{"virtual uint GetHash(int x, int y, int z)"}</code> | Hashes one or more integers to a `uint`. |
| <Link id="m-range" /><code>{"int Range(int min, int max, params int[] data)"}</code> | Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly. |
| <Link id="m-range-2" /><code>{"int Range(int min, int max, int data)"}</code> | Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly. |
| <Link id="m-range-3" /><code>{"int Range(int min, int max, int x, int y)"}</code> | Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly. |
| <Link id="m-range-4" /><code>{"int Range(int min, int max, int x, int y, int z)"}</code> | Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly. |
| <Link id="m-range-5" /><code>{"float Range(float min, float max, params int[] data)"}</code> | Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly. |
| <Link id="m-range-6" /><code>{"float Range(float min, float max, int data)"}</code> | Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly. |
| <Link id="m-range-7" /><code>{"float Range(float min, float max, int x, int y)"}</code> | Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly. |
| <Link id="m-range-8" /><code>{"float Range(float min, float max, int x, int y, int z)"}</code> | Hash scaled into a range: integer overloads use the remainder (max exclusive), float overloads scale linearly. |
| <Link id="m-value" /><code>{"float Value(params int[] data)"}</code> | Hash scaled to a float from 0 to 1. |
| <Link id="m-value-2" /><code>{"float Value(int data)"}</code> | Hash scaled to a float from 0 to 1. |
| <Link id="m-value-3" /><code>{"float Value(int x, int y)"}</code> | Hash scaled to a float from 0 to 1. |
| <Link id="m-value-4" /><code>{"float Value(int x, int y, int z)"}</code> | Hash scaled to a float from 0 to 1. |

## Used in

Members of other types that take, return or hold a `HashFunction`:

[`CaveBiomeGenerator.Preview`](/game-api/types/alta-world-generation/cavebiomegenerator#m-preview), [`CaveLayerManager.LayersSeedHash`](/game-api/types/alta-world-generation/cavelayermanager#m-layersseedhash), [`GenerationBase.HashFunction`](/game-api/types/alta-world-generation/generationbase#m-hashfunction), [`IGenerator.HashFunction`](/game-api/types/alta-world-generation/igenerator#m-hashfunction).
