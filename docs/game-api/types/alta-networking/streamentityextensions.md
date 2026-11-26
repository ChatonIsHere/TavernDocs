---
title: "StreamEntityExtensions"
description: "Extension methods on Stream for checking which side is reading or writing, and for sending entities, entity ids and chunks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamEntityExtensions

A **static class** in `Root.Township`, `Alta.Networking`.

Extension methods on `Stream` for checking which side is reading or writing, and for sending entities, entity ids and chunks.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Attributes** `Extension`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for chunk errors. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isreadingonremoteclient" /><code>{"static bool IsReadingOnRemoteClient("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | True when reading on a client (not the server). |
| <Link id="m-isreadingonserver" /><code>{"static bool IsReadingOnServer("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | True when reading on the server. |
| <Link id="m-isreadingonservernonlocaltest" /><code>{"static bool IsReadingOnServerNonLocalTest("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | True when reading on the server, outside local test. |
| <Link id="m-isservertoclient" /><code>{"static bool IsServerToClient("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | True when the server writes (outside local test) or a client reads. |
| <Link id="m-serializechunk" /><code>{"static void SerializeChunk("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Writes or reads a chunk by index in 13 bits; a null chunk is sent as the global chunk. |
| <Link id="m-serializeentityidentifier" /><code>{"static void SerializeEntityIdentifier("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref uint identifier)"}</code> | Writes or reads an entity identifier, which must be 0 to 100000. |
| <Link id="m-serializenetworkentity" /><code>{"static void SerializeNetworkEntity("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene)"}</code> | Writes or reads an entity by identifier, looking it up in the scene on read. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iswritingonserveronly" /><code>{"private static bool IsWritingOnServerOnly("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | True when writing on the server, outside local test. |

</details>
