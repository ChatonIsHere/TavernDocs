---
title: "LogicDisplay"
description: "Networked logic display: when a LogicBoolReceiver changes on the server, it syncs the value to clients and fires active or inactive Unity events (on..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicDisplay

A **class** in `Root.Township`, the global namespace.

Networked logic display: when a `LogicBoolReceiver` changes on the server, it syncs the value to clients and fires `active` or `inactive` Unity events (on clients, and on the server if enabled).

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private UnityEvent active"}</code> | <span className="api-desc">Event fired when the value turns true.</span> |
| <Link id="m-inactive" /><code>{"private UnityEvent inactive"}</code> | <span className="api-desc">Event fired when the value turns false.</span> |
| <Link id="m-isrunningonclient" /><code>{"private bool isRunningOnClient"}</code> | <span className="api-desc">Whether clients get the value and fire the events (default true).</span> |
| <Link id="m-isrunningonserver" /><code>{"private bool isRunningOnServer"}</code> | <span className="api-desc">Whether the server also fires the events.</span> |
| <Link id="m-receiver" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/logicboolreceiver">{"LogicBoolReceiver"}</Link>{" receiver"}</code> | <span className="api-desc">The logic bool input being shown.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for the value; null when not running on clients.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the sync if the display runs on clients.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: subscribes to the receiver's `Changed` event.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the current value to a joining player.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlechange" /><code>{"private void HandleChange(bool value)"}</code> | <span className="api-desc">Server: sends the new value to the chunks and fires the events locally if running on the server or in a local test.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server to client: writes the receiver's state, and on the client fires the matching event.</span> |
| <Link id="m-trigger" /><code>{"private void Trigger(bool isEnabled)"}</code> | <span className="api-desc">Fires `active` for true, `inactive` for false.</span> |

</details>
