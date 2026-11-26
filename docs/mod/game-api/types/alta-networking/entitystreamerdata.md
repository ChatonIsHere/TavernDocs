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
| <Link id="m-ctor" /><code>{"EntityStreamerData()"}</code> | <span className="api-desc">Creates an `EntityStreamerData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bitcount" /><code>{"uint bitCount"}</code> | <span className="api-desc">How many bits of `data` are used.</span> |
| <Link id="m-data" /><code>{"uint[] data"}</code> | <span className="api-desc">The serialized state bits.</span> |
| <Link id="m-unchangedcount" /><code>{"int unchangedCount"}</code> | <span className="api-desc">How many serialize passes the data has gone without changing. 0 means it must be rewritten; at 10 or more, off frames skip the entity.</span> |

## Used in

Members of other types that take, return or hold a `EntityStreamerData`:

<div className="api-used-in">

[`EntitySerializer.data`](/mod/game-api/types/alta-networking/entityserializer#m-data), [`EntitySerializer.fullData`](/mod/game-api/types/alta-networking/entityserializer#m-fulldata), [`EntitySerializer.SerializeDataInternal`](/mod/game-api/types/alta-networking/entityserializer#m-serializedatainternal), [`EntitySerializer.WriteIntoStreamInternal`](/mod/game-api/types/alta-networking/entityserializer#m-writeintostreaminternal).

</div>
