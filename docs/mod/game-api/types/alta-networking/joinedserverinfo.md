---
title: "JoinedServerInfo"
description: "Client: the server you are joined to, sent by the server in ConfirmJoinMessage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinedServerInfo

A **class** in `Root.Township`, `Alta.Networking`.

Client: the server you are joined to, sent by the server in `ConfirmJoinMessage`. `Current` holds it for the session.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Documented in** [Joining a server](/mod/game-api/networking/joining), [Server settings](/mod/game-api/networking/server-settings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinedServerInfo("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> | Creates a `JoinedServerInfo` with default values. |
| <Link id="m-ctor-2" /><code>{"JoinedServerInfo()"}</code> | Creates a `JoinedServerInfo` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"private int identifier"}</code> | Backing field for `Identifier`. |
| <Link id="m-ispublicserver" /><code>{"private bool isPublicServer"}</code> | Whether the joined server is public. Sent in `Serialize` but not exposed. |
| <Link id="m-name" /><code>{"private string name"}</code> | Backing field for `Name`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioninfo" /><code><Link to="/mod/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" { get; set; }"}</code> | Connection details used to reach the server. Set by `JoinServerPipeline`. |
| <Link id="m-current" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" Current { get; set; }"}</code> | The server joined now. Set when the server accepts the join request, cleared when leaving or on failure. |
| <Link id="m-identifier-2" /><code>{"int Identifier { get; }"}</code> | Server id. -1 means a local server. |
| <Link id="m-info" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfominimal">{"GameServerInfoMinimal"}</Link>{" Info { get; private set; }"}</code> | Minimal server info. On the client it is rebuilt from the received id and name only. |
| <Link id="m-islocalserver" /><code>{"bool IsLocalServer { get; }"}</code> | True when `Identifier` is -1. |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | Server name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the id, name and a public-server flag. |

## Used in

Members of other types that take, return or hold a `JoinedServerInfo`:

[`ConfirmJoinMessage.ConfirmJoinMessage`](/mod/game-api/types/alta-networking/confirmjoinmessage#m-ctor), [`ConfirmJoinMessage.JoinedServerInfo`](/mod/game-api/types/alta-networking/confirmjoinmessage#m-joinedserverinfo), [`JoinResult.ServerInfo`](/mod/game-api/types/alta-networking/joinresult#m-serverinfo), [`JoinResult.SuccessResult`](/mod/game-api/types/alta-networking/joinresult#m-successresult), [`JoinServerPipeline.joinedInfo`](/mod/game-api/types/global-i-l/joinserverpipeline#m-joinedinfo).
