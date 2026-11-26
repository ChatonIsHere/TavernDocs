---
title: "Stream.StringEncoding"
description: "Text encoding used when writing strings to a network stream: ASCII or UTF8."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Stream.StringEncoding

An **enum** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

Text encoding used when writing strings to a network stream: ASCII or UTF8.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`Stream`](/mod/game-api/types/assembly-other/stream)

## Values

| Member |
| --- |
| <Link id="m-ascii" /><code>{"ASCII = 0"}</code> |
| <Link id="m-utf8" /><code>{"UTF8 = 1"}</code> |

## Used in

Members of other types that take, return or hold a `StringEncoding`:

<div className="api-used-in">

[`Compressor.SerializeString`](/mod/game-api/types/assembly-other/compressor#m-serializestring), [`Stream.SerializeString`](/mod/game-api/types/assembly-other/stream#m-serializestring), [`StreamCounter.SerializeString`](/mod/game-api/types/assembly-other/streamcounter#m-serializestring), [`StreamReader.SerializeString`](/mod/game-api/types/assembly-other/streamreader#m-serializestring), [`StreamWriter.SerializeString`](/mod/game-api/types/assembly-other/streamwriter#m-serializestring).

</div>
