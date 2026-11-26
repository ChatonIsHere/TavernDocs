---
title: "EntitySerializationMessage"
description: "Network message that carries an entity's full serialized data (its EntitySerializer)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntitySerializationMessage

A **static class** in `Root.Township`, `Alta.Networking`.

Network message that carries an entity's full serialized data (its `EntitySerializer`).

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; warns when the entity is missing on read. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writing: serializes and writes the entity's full data. Reading: reads it in if the sender has authority, otherwise logs an error. |
| <Link id="m-set" /><code>{"static void Set("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Sets the entity the message is for. |
