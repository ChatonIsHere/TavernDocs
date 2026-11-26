---
title: "JoinServerGameModeBase"
description: "Base for client game modes that join a server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinServerGameModeBase

An **abstract class** in `Root.Township`, no namespace.

Base for client game modes that join a server. Sets up the client's network scene for the server connection.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`GameMode`](/game-api/types/global-e-h/gamemode)
- **Derived types** [`JoinedServerGameMode`](/game-api/types/global-i-l/joinedservergamemode), [`LocalTestGameMode`](/game-api/types/global-i-l/localtestgamemode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected JoinServerGameModeBase()"}</code> | Creates a `JoinServerGameModeBase` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-connection" /><code>{"protected "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection"}</code> | Connection to the server. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isclient" /><code>{"override bool IsClient { get; }"}</code> | Always true. |
| <Link id="m-isserver" /><code>{"override bool IsServer { get; }"}</code> | Always false. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"protected void Empty("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes nothing. Used as the body of messages that carry no data. |
| <Link id="m-setupclientscene" /><code>{"protected async Task SetupClientScene("}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" result)"}</code> | Initializes the current network scene with the connection's socket and adds the connection to it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disconnectedfromserver" /><code>{"private void DisconnectedFromServer("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" obj)"}</code> | Clears `JoinedServerInfo.Current` when the socket is destroyed. |

</details>
