---
title: "TypeSerializationHelper.FloatBitsSerialization"
description: "Writes a float packed into a range with a fixed number of bits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.FloatBitsSerialization

A **class** in `Root.Township`, the global namespace.

Writes a `float` packed into a range with a fixed number of bits. Used by `SyncFloat` with min, max and bits.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/mod/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<float>`](/mod/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FloatBitsSerialization(float minimum, float maximum, int bits)"}</code> | Creates a `TypeSerializationHelper.FloatBitsSerialization` from `minimum`, `maximum` and `bits`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bits" /><code>{"private int bits"}</code> | Bits used for the value. |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> | Top of the value range. |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> | Bottom of the value range. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref float value, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Reads or writes the float compressed to `bits` bits between `minimum` and `maximum`. |
