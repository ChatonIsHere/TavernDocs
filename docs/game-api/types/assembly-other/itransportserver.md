---
title: "ITransportServer"
description: "interface ITransportServer in Alta.NetworkTransport.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITransportServer

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportSocket`](/game-api/types/assembly-other/itransportsocket)
- **Derived types** [`KcpServerWrapper`](/game-api/types/assembly-other/kcpserverwrapper)

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> ConnectionCreated"}</code> |  |
| <Link id="m-connectiondestroyed" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> ConnectionDestroyed"}</code> |  |

## Used in

Members of other types that take, return or hold a `ITransportServer`:

[`ITransport.CreateServer`](/game-api/types/assembly-other/itransport#m-createserver), [`KcpTransport.CreateServer`](/game-api/types/assembly-other/kcptransport#m-createserver).
