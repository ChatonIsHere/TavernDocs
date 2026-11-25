---
title: "LogicDisplay"
description: "class LogicDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicDisplay

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private UnityEvent active"}</code> |  |
| <Link id="m-inactive" /><code>{"private UnityEvent inactive"}</code> |  |
| <Link id="m-isrunningonclient" /><code>{"private bool isRunningOnClient"}</code> |  |
| <Link id="m-isrunningonserver" /><code>{"private bool isRunningOnServer"}</code> |  |
| <Link id="m-receiver" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolreceiver">{"LogicBoolReceiver"}</Link>{" receiver"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-handlechange" /><code>{"private void HandleChange(bool value)"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-trigger" /><code>{"private void Trigger(bool isEnabled)"}</code> |  |
