---
title: "TypeSerializationHelper.NetworkPrefabSerialization"
description: "Serializer for NetworkPrefab, sent as its prefab hash (0 for null)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.NetworkPrefabSerialization

A **class** in `Root.Township`, no namespace.

Serializer for `NetworkPrefab`, sent as its prefab hash (0 for null).

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<NetworkPrefab>`](/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkPrefabSerialization()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" value, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Writes the prefab's hash, or reads a hash and fetches the prefab from `PrefabManager`. |
