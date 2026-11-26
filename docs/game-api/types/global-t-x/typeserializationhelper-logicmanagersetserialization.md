---
title: "TypeSerializationHelper.LogicManagerSetSerialization"
description: "Serializer for a LogicManagerSet: a count followed by each save data entry."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.LogicManagerSetSerialization

A **class** in `Root.Township`, no namespace.

Serializer for a `LogicManagerSet`: a count followed by each save data entry.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<LogicManagerSet>`](/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicManagerSetSerialization()"}</code> | Creates a `TypeSerializationHelper.LogicManagerSetSerialization` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref "}<Link to="/game-api/types/alta-items/logicmanagerset">{"LogicManagerSet"}</Link>{" data, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Writes the entry count then each `SaveData`, or reads them into a new set. |
