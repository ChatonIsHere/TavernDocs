---
title: "TypeSerializationHelper.HashedSerialization<T>"
description: "Serializer for HashedGeneralValue types, sent as their hash (0 for null)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.HashedSerialization&lt;T&gt;

A **class** in `Root.Township`, no namespace.

Serializer for `HashedGeneralValue` types, sent as their hash (0 for null). Made on demand by `GetSerialization`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HashedSerialization()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref T value, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Writes the value's hash, or reads a hash and looks the value up by type and hash. |
