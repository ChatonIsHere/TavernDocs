---
title: "ITransportServer"
description: "The listening side of a network transport, made by ITransport.CreateServer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITransportServer

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

The listening side of a network transport, made by `ITransport.CreateServer`. Raises events as client connections come and go. The KCP transport's `KcpServerWrapper` implements it.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportSocket`](/mod/game-api/types/assembly-other/itransportsocket)
- **Derived types** [`KcpServerWrapper`](/mod/game-api/types/assembly-other/kcpserverwrapper)

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> ConnectionCreated"}</code> | <span className="api-desc">Raised when a new client connection is made.</span> |
| <Link id="m-connectiondestroyed" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> ConnectionDestroyed"}</code> | <span className="api-desc">Raised when a client connection is closed.</span> |

## Used in

Members of other types that take, return or hold a `ITransportServer`:

<div className="api-used-in">

[`ITransport.CreateServer`](/mod/game-api/types/assembly-other/itransport#m-createserver), [`KcpTransport.CreateServer`](/mod/game-api/types/assembly-other/kcptransport#m-createserver).

</div>
