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

- **Listed in** [TavernLib.Backend](/mod/tavernlib-api/types/backend)
- **Inherits or implements** [`IService`](/mod/tavernlib-api/types/services/iservice)
- **Documented in** [EntranceMessageHandler](/mod/tavernlib-api/types/backend/entrancemessagehandler), [Services](/mod/tavernlib-api/services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntranceMessageHandler()"}</code> | <span className="api-desc">Subscribes to the socket created event.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-localuser" /><code><Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" LocalUser { get; private set; }"}</code> | <span className="api-desc">The local player as a `UserConfig.User`. Only its `Roles` are filled in, from the last roles message the server sent.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onrolesreceived" /><code>{"private void OnRolesReceived("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client side: reads the role list the server sent into `LocalUser` and logs it.</span> |
| <Link id="m-onsocketcreated" /><code>{"private void OnSocketCreated("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | <span className="api-desc">Hooks the new socket's connection created event.</span> |
| <Link id="m-setmessagehandlerforconnection" /><code>{"private void SetMessageHandlerForConnection("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">On a client, sets the handler for the roles message from the server.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EntranceMessageHandler`:

<div className="api-used-in">

[`TavernMessageHandler.ServerEntranceHandler`](/mod/tavernlib-api/types/services/tavernmessagehandler#m-serverentrancehandler).

</div>
