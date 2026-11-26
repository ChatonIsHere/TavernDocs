---
title: "ClassSerializationHelper"
description: "Builds the cached read/write delegate that syncs a class's fields, using emitted getters and setters per field."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClassSerializationHelper

A **static class** in `Root.Township`, the global namespace.

Builds the cached read/write delegate that syncs a class's fields, using emitted getters and setters per field. Used for `[Sync]` fields and save data.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested types** [`Finalize<T>`](/mod/game-api/types/global-c-d/classserializationhelper-finalize-t), [`MemberHandler<T>`](/mod/game-api/types/global-c-d/classserializationhelper-memberhandler-t)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-prepare" /><code>{"static "}<Link to="/mod/game-api/types/global-c-d/classserializer-t">{"ClassSerializer"}</Link>{"<T> Prepare<T>(ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> staticSync, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, T target, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type)"}</code> | <span className="api-desc">Builds the static sync delegate for a type once, from its fields (all, or only `[Sync]` ones), and for `[Sync]` also returns a `ClassSerializer`.</span> |
| <Link id="m-prepare-2" /><code>{"static void Prepare(Type type, ref Action<"}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> staticSync)"}</code> | <span className="api-desc">Builds the static sync delegate for a type once, from its fields (all, or only `[Sync]` ones), and for `[Sync]` also returns a `ClassSerializer`.</span> |
| <Link id="m-prepare-3" /><code>{"static void Prepare<T>(Type type, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> staticSync)"}</code> | <span className="api-desc">Builds the static sync delegate for a type once, from its fields (all, or only `[Sync]` ones), and for `[Sync]` also returns a `ClassSerializer`.</span> |
| <Link id="m-prepare-4" /><code>{"static void Prepare<T>(Type type, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> staticSync, Func<MemberInfo, bool> predicate, Func<MemberInfo, "}<Link to="/mod/game-api/types/global-c-d/classserializationhelper-memberhandler-t">{"ClassSerializationHelper.MemberHandler"}</Link>{"<T>> getHandler, "}<Link to="/mod/game-api/types/global-c-d/classserializationhelper-finalize-t">{"ClassSerializationHelper.Finalize"}</Link>{"<T> finalize)"}</code> | <span className="api-desc">Builds the static sync delegate for a type once, from its fields (all, or only `[Sync]` ones), and for `[Sync]` also returns a `ClassSerializer`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serializebytype" /><code>{"private static "}<Link to="/mod/game-api/types/global-c-d/classserializationhelper-memberhandler-t">{"ClassSerializationHelper.MemberHandler"}</Link>{"<T> SerializeByType<T>(MemberInfo member)"}</code> | <span className="api-desc">Picks the field's type serializer from `TypeSerializationHelper`, using its array handler for arrays.</span> |

</details>
