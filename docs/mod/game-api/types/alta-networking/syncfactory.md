---
title: "SyncFactory"
description: "Makes the right ISync for the side you are on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SyncFactory

A **static class** in `Root.Township`, `Alta.Networking`.

Makes the right `ISync` for the side you are on.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" Create("}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type)"}</code> | Returns a `ServerSync` on the server or a `ClientSync` on clients, for the entity and message type. |
