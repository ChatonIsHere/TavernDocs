---
title: "SceneSerializationMessage"
description: "Receives scene serialization data and passes it to the current network scene's scene serializer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneSerializationMessage

A **class** in `Root.Township`, `Alta.Networking`.

Receives scene serialization data and passes it to the current network scene's scene serializer.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SceneSerializationMessage()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Hands the stream to the scene serializer's `SerializeRead`; read only. |
