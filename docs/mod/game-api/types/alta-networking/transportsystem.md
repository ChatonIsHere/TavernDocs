---
title: "TransportSystem"
description: "Which network transport to use."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransportSystem

An **enum** in `Root.Township`, `Alta.Networking`.

Which network transport to use. KCP is the only option and the default.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Values

| Member |
| --- |
| <Link id="m-kcp" /><code>{"Kcp = 1"}</code> |

## Used in

Members of other types that take, return or hold a `TransportSystem`:

<div className="api-used-in">

[`NetworkingSettings.currentTransportSystem`](/mod/game-api/types/alta-networking/networkingsettings#m-currenttransportsystem), [`NetworkingSettings.defaultNetworkTransport`](/mod/game-api/types/alta-networking/networkingsettings#m-defaultnetworktransport), [`NetworkingSettings.GetTransportSystem`](/mod/game-api/types/alta-networking/networkingsettings#m-gettransportsystem), [`NetworkingSettings.SetTransportSystem`](/mod/game-api/types/alta-networking/networkingsettings#m-settransportsystem), [`NetworkingSettings.TransportSystem`](/mod/game-api/types/alta-networking/networkingsettings#m-transportsystem), [`NetworkManager.CreateSocket`](/mod/game-api/types/alta-networking/networkmanager#m-createsocket).

</div>
