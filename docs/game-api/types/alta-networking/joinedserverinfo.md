---
title: "JoinedServerInfo"
description: "The server you're on: static Current, Identifier, Name, ConnectionInfo, IsLocalServer (id -1). Set on the client at the first acceptance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinedServerInfo

A **class** in `Root.Township`, `Alta.Networking`.

The server you're on: `static Current`, `Identifier`, `Name`, `ConnectionInfo`, `IsLocalServer` (id `-1`). Set on the client at the first acceptance.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Documented in** [Joining a server](/game-api/networking/joining), [Server settings](/game-api/networking/server-settings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinedServerInfo("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"JoinedServerInfo()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"private int identifier"}</code> |  |
| <Link id="m-ispublicserver" /><code>{"private bool isPublicServer"}</code> |  |
| <Link id="m-name" /><code>{"private string name"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioninfo" /><code><Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-current" /><code>{"static "}<Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" Current { get; set; }"}</code> |  |
| <Link id="m-identifier-2" /><code>{"int Identifier { get; }"}</code> |  |
| <Link id="m-info" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfominimal">{"GameServerInfoMinimal"}</Link>{" Info { get; private set; }"}</code> |  |
| <Link id="m-islocalserver" /><code>{"bool IsLocalServer { get; }"}</code> |  |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `JoinedServerInfo`:

[`ConfirmJoinMessage.ConfirmJoinMessage`](/game-api/types/alta-networking/confirmjoinmessage#m-ctor), [`ConfirmJoinMessage.JoinedServerInfo`](/game-api/types/alta-networking/confirmjoinmessage#m-joinedserverinfo), [`JoinResult.ServerInfo`](/game-api/types/alta-networking/joinresult#m-serverinfo), [`JoinResult.SuccessResult`](/game-api/types/alta-networking/joinresult#m-successresult), [`JoinServerPipeline.joinedInfo`](/game-api/types/global-i-l/joinserverpipeline#m-joinedinfo).
