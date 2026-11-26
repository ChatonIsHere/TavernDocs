---
title: "EntityStreamerData"
description: "An EntitySerializer's last written state data for one entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityStreamerData

A **class** in `Root.Township`, `Alta.Networking`.

An `EntitySerializer`'s last written state data for one entity.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityStreamerData()"}</code> | Creates an `EntityStreamerData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bitcount" /><code>{"uint bitCount"}</code> | How many bits of `data` are used. |
| <Link id="m-data" /><code>{"uint[] data"}</code> | The serialized state bits. |
| <Link id="m-unchangedcount" /><code>{"int unchangedCount"}</code> | How many serialize passes the data has gone without changing. 0 means it must be rewritten; at 10 or more, off frames skip the entity. |

## Used in

Members of other types that take, return or hold a `EntityStreamerData`:

[`EntitySerializer.data`](/mod/game-api/types/alta-networking/entityserializer#m-data), [`EntitySerializer.fullData`](/mod/game-api/types/alta-networking/entityserializer#m-fulldata), [`EntitySerializer.SerializeDataInternal`](/mod/game-api/types/alta-networking/entityserializer#m-serializedatainternal), [`EntitySerializer.WriteIntoStreamInternal`](/mod/game-api/types/alta-networking/entityserializer#m-writeintostreaminternal).
