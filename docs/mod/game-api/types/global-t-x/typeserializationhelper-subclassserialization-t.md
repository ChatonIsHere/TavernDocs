---
title: "TypeSerializationHelper.SubClassSerialization<T>"
description: "Serializer for plain classes: a null flag, then each of the class's fields through ClassSerializationHelper."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.SubClassSerialization&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

Serializer for plain classes: a null flag, then each of the class's fields through `ClassSerializationHelper`. Made on demand by `GetSerialization`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/mod/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SubClassSerialization()"}</code> | <span className="api-desc">Creates a `TypeSerializationHelper.SubClassSerialization` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activator" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/typeserializationhelper-objectactivator">{"TypeSerializationHelper.ObjectActivator"}</Link>{" activator"}</code> | <span className="api-desc">Compiled constructor used to make instances when reading.</span> |
| <Link id="m-serializer" /><code>{"private Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> serializer"}</code> | <span className="api-desc">Combined delegate that reads or writes all the class's fields.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Builds the field serializer for the class with `ClassSerializationHelper.Prepare`.</span> |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref T value, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | <span className="api-desc">Writes a null flag then the fields, or reads the flag and creates and fills a new instance.</span> |
