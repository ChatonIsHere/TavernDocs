---
title: "TypeSerializationHelper.SubClassSerialization<T>"
description: "Serializer for plain classes: a null flag, then each of the class's fields through ClassSerializationHelper."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.SubClassSerialization&lt;T&gt;

A **class** in `Root.Township`, no namespace.

Serializer for plain classes: a null flag, then each of the class's fields through `ClassSerializationHelper`. Made on demand by `GetSerialization`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SubClassSerialization()"}</code> | Creates a `TypeSerializationHelper.SubClassSerialization` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activator" /><code>{"private "}<Link to="/game-api/types/global-t-x/typeserializationhelper-objectactivator">{"TypeSerializationHelper.ObjectActivator"}</Link>{" activator"}</code> | Compiled constructor used to make instances when reading. |
| <Link id="m-serializer" /><code>{"private Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> serializer"}</code> | Combined delegate that reads or writes all the class's fields. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Builds the field serializer for the class with `ClassSerializationHelper.Prepare`. |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref T value, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Writes a null flag then the fields, or reads the flag and creates and fills a new instance. |
