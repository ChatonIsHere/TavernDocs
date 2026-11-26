---
title: "PlayerCommunicationManager"
description: "Networked singleton the server uses to show a text message on players' screens."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCommunicationManager

A **class** in `Root.Township`, the global namespace.

Networked singleton the server uses to show a text message on players' screens. Get it from `Instance`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCommunicationManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/global-p/playercommunicationmanager">{"PlayerCommunicationManager"}</Link>{" instance"}</code> | Backing field for `Instance`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-syncmessage" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-p/playertextmessage">{"PlayerTextMessage"}</Link>{"> syncMessage"}</code> | Network message that carries the text and duration. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/playercommunicationmanager">{"PlayerCommunicationManager"}</Link>{" Instance { get; }"}</code> | The current instance. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network message used to send text to players. |
| <Link id="m-sendmessagetoallplayers" /><code>{"void SendMessageToAllPlayers(string message, float displayDuration = 5)"}</code> | Server: sends the message to every connected player, shown for the given seconds (5 by default). |
| <Link id="m-sendmessagetoplayer" /><code>{"void SendMessageToPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, string message, float displayDuration = 5)"}</code> | Server: sends the message to one player with a player controller. Logs an error if called on a client. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `instance`. |
| <Link id="m-handleplayermessage" /><code>{"private void HandlePlayerMessage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playertextmessage">{"PlayerTextMessage"}</Link>{" textMessage)"}</code> | Serializes the message; on the receiving client, shows it on the local player's message display. |

</details>
