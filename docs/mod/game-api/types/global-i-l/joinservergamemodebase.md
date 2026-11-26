---
title: "JoinServerGameModeBase"
description: "Base for client game modes that join a server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinServerGameModeBase

An **abstract class** in `Root.Township`, the global namespace.

Base for client game modes that join a server. Sets up the client's network scene for the server connection.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`GameMode`](/mod/game-api/types/global-e-h/gamemode)
- **Derived types** [`JoinedServerGameMode`](/mod/game-api/types/global-i-l/joinedservergamemode), [`LocalTestGameMode`](/mod/game-api/types/global-i-l/localtestgamemode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected JoinServerGameModeBase()"}</code> | <span className="api-desc">Creates a `JoinServerGameModeBase` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-connection" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection"}</code> | <span className="api-desc">Connection to the server.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isclient" /><code>{"override bool IsClient { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-isserver" /><code>{"override bool IsServer { get; }"}</code> | <span className="api-desc">Always false.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"protected void Empty("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes nothing. Used as the body of messages that carry no data.</span> |
| <Link id="m-setupclientscene" /><code>{"protected async Task SetupClientScene("}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" result)"}</code> | <span className="api-desc">Initializes the current network scene with the connection's socket and adds the connection to it.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disconnectedfromserver" /><code>{"private void DisconnectedFromServer("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" obj)"}</code> | <span className="api-desc">Clears `JoinedServerInfo.Current` when the socket is destroyed.</span> |

</details>
