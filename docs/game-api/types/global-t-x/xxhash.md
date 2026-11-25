---
title: "XXHash"
description: "class XXHash in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# XXHash

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`HashFunction`](/game-api/types/global-e-h/hashfunction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"XXHash(int seed)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prime32-1" /><code>{"private const uint PRIME32_1"}</code> |  |
| <Link id="m-prime32-2" /><code>{"private const uint PRIME32_2"}</code> |  |
| <Link id="m-prime32-3" /><code>{"private const uint PRIME32_3"}</code> |  |
| <Link id="m-prime32-4" /><code>{"private const uint PRIME32_4"}</code> |  |
| <Link id="m-prime32-5" /><code>{"private const uint PRIME32_5"}</code> |  |
| <Link id="m-seed" /><code>{"private uint seed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethash" /><code>{"uint GetHash(byte[] buf)"}</code> |  |
| <Link id="m-gethash-2" /><code>{"uint GetHash(params uint[] buf)"}</code> |  |
| <Link id="m-gethash-3" /><code>{"override uint GetHash(params int[] buf)"}</code> |  |
| <Link id="m-gethash-4" /><code>{"override uint GetHash(int buf)"}</code> |  |
| <Link id="m-calcsubhash" /><code>{"private static uint CalcSubHash(uint value, byte[] buf, int index)"}</code> |  |
| <Link id="m-calcsubhash-2" /><code>{"private static uint CalcSubHash(uint value, uint read_value)"}</code> |  |
| <Link id="m-rotateleft" /><code>{"private static uint RotateLeft(uint value, int count)"}</code> |  |
