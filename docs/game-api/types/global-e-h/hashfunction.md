---
title: "HashFunction"
description: "abstract class HashFunction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashFunction

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Derived types** [`XXHash`](/game-api/types/global-t-x/xxhash)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HashFunction()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethash" /><code>{"abstract uint GetHash(params int[] data)"}</code> |  |
| <Link id="m-gethash-2" /><code>{"virtual uint GetHash(int data)"}</code> |  |
| <Link id="m-gethash-3" /><code>{"virtual uint GetHash(int x, int y)"}</code> |  |
| <Link id="m-gethash-4" /><code>{"virtual uint GetHash(int x, int y, int z)"}</code> |  |
| <Link id="m-range" /><code>{"int Range(int min, int max, params int[] data)"}</code> |  |
| <Link id="m-range-2" /><code>{"int Range(int min, int max, int data)"}</code> |  |
| <Link id="m-range-3" /><code>{"int Range(int min, int max, int x, int y)"}</code> |  |
| <Link id="m-range-4" /><code>{"int Range(int min, int max, int x, int y, int z)"}</code> |  |
| <Link id="m-range-5" /><code>{"float Range(float min, float max, params int[] data)"}</code> |  |
| <Link id="m-range-6" /><code>{"float Range(float min, float max, int data)"}</code> |  |
| <Link id="m-range-7" /><code>{"float Range(float min, float max, int x, int y)"}</code> |  |
| <Link id="m-range-8" /><code>{"float Range(float min, float max, int x, int y, int z)"}</code> |  |
| <Link id="m-value" /><code>{"float Value(params int[] data)"}</code> |  |
| <Link id="m-value-2" /><code>{"float Value(int data)"}</code> |  |
| <Link id="m-value-3" /><code>{"float Value(int x, int y)"}</code> |  |
| <Link id="m-value-4" /><code>{"float Value(int x, int y, int z)"}</code> |  |

## Used in

Members of other types that take, return or hold a `HashFunction`:

[`CaveBiomeGenerator.Preview`](/game-api/types/alta-world-generation/cavebiomegenerator#m-preview), [`CaveLayerManager.LayersSeedHash`](/game-api/types/alta-world-generation/cavelayermanager#m-layersseedhash), [`GenerationBase.HashFunction`](/game-api/types/alta-world-generation/generationbase#m-hashfunction), [`IGenerator.HashFunction`](/game-api/types/alta-world-generation/igenerator#m-hashfunction).
