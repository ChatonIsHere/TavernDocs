---
title: "TypeSerializationHelper.BitSerialization"
description: "Writes a uint using a fixed number of bits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.BitSerialization

A **class** in `Root.Township`, no namespace.

Writes a `uint` using a fixed number of bits.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<uint>`](/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BitSerialization(int bits)"}</code> | Creates a `TypeSerializationHelper.BitSerialization` from `bits`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bits" /><code>{"private int bits"}</code> | How many bits are written. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref uint value, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Reads or writes the value with `SerializeBits`. |
