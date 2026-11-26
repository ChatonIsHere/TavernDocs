---
title: "JoinServerGameModeBase"
description: "abstract class JoinServerGameModeBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinServerGameModeBase

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`GameMode`](/game-api/types/global-e-h/gamemode)
- **Derived types** [`JoinedServerGameMode`](/game-api/types/global-i-l/joinedservergamemode), [`LocalTestGameMode`](/game-api/types/global-i-l/localtestgamemode)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected JoinServerGameModeBase()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-connection" /><code>{"protected "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-isclient" /><code>{"override bool IsClient { get; }"}</code> |
| <Link id="m-isserver" /><code>{"override bool IsServer { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-empty" /><code>{"protected void Empty("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-setupclientscene" /><code>{"protected async Task SetupClientScene("}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" result)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-disconnectedfromserver" /><code>{"private void DisconnectedFromServer("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" obj)"}</code> |

</details>
