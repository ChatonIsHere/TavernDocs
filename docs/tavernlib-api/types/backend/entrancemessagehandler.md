---
title: "EntranceMessageHandler"
description: "Receives the roles message on a client and keeps the local player's roles."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntranceMessageHandler

A **class** in `TavernLib`, `TavernLib.Backend`.

Receives the roles message on a client and keeps the local player's roles. Registered as a service on both sides, but only sets its handler when not a server.

- **Listed in** [TavernLib.Backend](/tavernlib-api/types/backend)
- **Inherits or implements** [`IService`](/tavernlib-api/types/services/iservice)
- **Documented in** [EntranceMessageHandler](/tavernlib-api/types/backend/entrancemessagehandler), [Services](/tavernlib-api/services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntranceMessageHandler()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-localuser" /><code><Link to="/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" LocalUser { get; private set; }"}</code> | The local player as a `UserConfig.User`. Only its `Roles` are filled in, from the last roles message the server sent. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onrolesreceived" /><code>{"private void OnRolesReceived("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-onsocketcreated" /><code>{"private void OnSocketCreated("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> |  |
| <Link id="m-setmessagehandlerforconnection" /><code>{"private void SetMessageHandlerForConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EntranceMessageHandler`:

[`TavernMessageHandler.ServerEntranceHandler`](/tavernlib-api/types/services/tavernmessagehandler#m-serverentrancehandler).
