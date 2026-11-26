---
title: "XXHash"
description: "Seeded 32-bit xxHash, a HashFunction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# XXHash

A **class** in `Root.Township`, the global namespace.

Seeded 32-bit xxHash, a `HashFunction`. Cave generation uses it to get repeatable values from a world seed.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`HashFunction`](/mod/game-api/types/global-e-h/hashfunction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"XXHash(int seed)"}</code> | <span className="api-desc">Creates a `XXHash` from `seed`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prime32-1" /><code>{"private const uint PRIME32_1"}</code> | <span className="api-desc">xxHash32 prime constant.</span> |
| <Link id="m-prime32-2" /><code>{"private const uint PRIME32_2"}</code> | <span className="api-desc">xxHash32 prime constant.</span> |
| <Link id="m-prime32-3" /><code>{"private const uint PRIME32_3"}</code> | <span className="api-desc">xxHash32 prime constant.</span> |
| <Link id="m-prime32-4" /><code>{"private const uint PRIME32_4"}</code> | <span className="api-desc">xxHash32 prime constant.</span> |
| <Link id="m-prime32-5" /><code>{"private const uint PRIME32_5"}</code> | <span className="api-desc">xxHash32 prime constant.</span> |
| <Link id="m-seed" /><code>{"private uint seed"}</code> | <span className="api-desc">Seed mixed into every hash.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethash" /><code>{"uint GetHash(byte[] buf)"}</code> | <span className="api-desc">Hashes a byte array, a uint or int array, or a single int, mixed with the seed.</span> |
| <Link id="m-gethash-2" /><code>{"uint GetHash(params uint[] buf)"}</code> | <span className="api-desc">Hashes a byte array, a uint or int array, or a single int, mixed with the seed.</span> |
| <Link id="m-gethash-3" /><code>{"override uint GetHash(params int[] buf)"}</code> | <span className="api-desc">Hashes a byte array, a uint or int array, or a single int, mixed with the seed.</span> |
| <Link id="m-gethash-4" /><code>{"override uint GetHash(int buf)"}</code> | <span className="api-desc">Hashes a byte array, a uint or int array, or a single int, mixed with the seed.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calcsubhash" /><code>{"private static uint CalcSubHash(uint value, byte[] buf, int index)"}</code> | <span className="api-desc">One xxHash lane round on 4 bytes or one uint.</span> |
| <Link id="m-calcsubhash-2" /><code>{"private static uint CalcSubHash(uint value, uint read_value)"}</code> | <span className="api-desc">One xxHash lane round on 4 bytes or one uint.</span> |
| <Link id="m-rotateleft" /><code>{"private static uint RotateLeft(uint value, int count)"}</code> | <span className="api-desc">32-bit rotate left.</span> |

</details>
