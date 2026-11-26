---
title: "MoveMessage"
description: "Network message that sets an entity's position and rotation on clients."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MoveMessage

A **static class** in `Root.Township`, `Alta.Networking`.

Network message that sets an entity's position and rotation on clients.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-position" /><code>{"private static Vector3 position"}</code> | <span className="api-desc">The position being sent, packed relative to the entity's chunk.</span> |
| <Link id="m-rotation" /><code>{"private static Quaternion rotation"}</code> | <span className="api-desc">The rotation being sent, compressed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the transform. Remote clients move the entity (or wait for it to spawn) and call its `IUpdateOnMove` components.</span> |
| <Link id="m-set" /><code>{"static void Set("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Fills the message from an entity's current position and rotation.</span> |
