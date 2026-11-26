---
title: "LogicDisplay"
description: "Networked logic display: when a LogicBoolReceiver changes on the server, it syncs the value to clients and fires active or inactive Unity events (on..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicDisplay

A **class** in `Root.Township`, no namespace.

Networked logic display: when a `LogicBoolReceiver` changes on the server, it syncs the value to clients and fires `active` or `inactive` Unity events (on clients, and on the server if enabled).

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private UnityEvent active"}</code> | Event fired when the value turns true. |
| <Link id="m-inactive" /><code>{"private UnityEvent inactive"}</code> | Event fired when the value turns false. |
| <Link id="m-isrunningonclient" /><code>{"private bool isRunningOnClient"}</code> | Whether clients get the value and fire the events (default true). |
| <Link id="m-isrunningonserver" /><code>{"private bool isRunningOnServer"}</code> | Whether the server also fires the events. |
| <Link id="m-receiver" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolreceiver">{"LogicBoolReceiver"}</Link>{" receiver"}</code> | The logic bool input being shown. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for the value; null when not running on clients. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the sync if the display runs on clients. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: subscribes to the receiver's `Changed` event. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the current value to a joining player. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlechange" /><code>{"private void HandleChange(bool value)"}</code> | Server: sends the new value to the chunks and fires the events locally if running on the server or in a local test. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server to client: writes the receiver's state, and on the client fires the matching event. |
| <Link id="m-trigger" /><code>{"private void Trigger(bool isEnabled)"}</code> | Fires `active` for true, `inactive` for false. |

</details>
