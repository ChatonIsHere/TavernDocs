---
title: "TypeSerializationHelper.FloatPrecisionSerialization"
description: "Meant to write a float in a range at a given precision (SyncFloat with min, max and precision), but its Serialize sends a full float and ignores those settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.FloatPrecisionSerialization

A **class** in `Root.Township`, the global namespace.

Meant to write a `float` in a range at a given precision (`SyncFloat` with min, max and precision), but its `Serialize` sends a full float and ignores those settings.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/mod/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<float>`](/mod/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FloatPrecisionSerialization(float minimum, float maximum, float precision)"}</code> | <span className="api-desc">Creates a `TypeSerializationHelper.FloatPrecisionSerialization` from `minimum`, `maximum` and `precision`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> | <span className="api-desc">Top of the value range.</span> |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> | <span className="api-desc">Bottom of the value range.</span> |
| <Link id="m-precision" /><code>{"private float precision"}</code> | <span className="api-desc">Wanted precision of the value.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref float value, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | <span className="api-desc">Reads or writes a full uncompressed float. The range and precision are not used.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serializeprecision" /><code>{"private void SerializePrecision(ref float value, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes the float compressed to the range and precision. Nothing calls it.</span> |

</details>
