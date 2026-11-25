---
title: "TypeSerializationHelper.FloatPrecisionSerialization"
description: "class TypeSerializationHelper.FloatPrecisionSerialization in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.FloatPrecisionSerialization

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<float>`](/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FloatPrecisionSerialization(float minimum, float maximum, float precision)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> |
| <Link id="m-precision" /><code>{"private float precision"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref float value, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-serializeprecision" /><code>{"private void SerializePrecision(ref float value, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>
