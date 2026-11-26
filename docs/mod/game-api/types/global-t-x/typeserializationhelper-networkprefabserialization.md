---
title: "TypeSerializationHelper.NetworkPrefabSerialization"
description: "Serializer for NetworkPrefab, sent as its prefab hash (0 for null)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.NetworkPrefabSerialization

A **class** in `Root.Township`, the global namespace.

Serializer for `NetworkPrefab`, sent as its prefab hash (0 for null).

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/mod/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<NetworkPrefab>`](/mod/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkPrefabSerialization()"}</code> | Creates a `TypeSerializationHelper.NetworkPrefabSerialization` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" value, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Writes the prefab's hash, or reads a hash and fetches the prefab from `PrefabManager`. |
