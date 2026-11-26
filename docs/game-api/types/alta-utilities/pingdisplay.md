---
title: "PingDisplay"
description: "Client live data display showing the transport ping to the server and the game-level ping from PingMessage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PingDisplay

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Client live data display showing the transport ping to the server and the game-level ping from `PingMessage`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PingDisplay()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decimalplaces" /><code>{"private const int DecimalPlaces"}</code> | Constant 4, the rounding used in the output. |
| <Link id="m-gameping" /><code>{"private float gamePing"}</code> | Last game ping from `PingMessage.LastPingInSeconds`. |
| <Link id="m-gamepingtitle" /><code>{"private const string GamePingTitle"}</code> | Label for the game ping line. |
| <Link id="m-islocalplayer" /><code>{"private bool? isLocalPlayer"}</code> | Cached once from `PlayerController.Current`; pinging only runs when true. |
| <Link id="m-ping" /><code>{"private float ping"}</code> | Last transport ping result. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-output" /><code>{"override string Output { get; }"}</code> | Both ping lines. Both say ms, but the game ping comes from `PingMessage.LastPingInSeconds`. |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | "Ping". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalupdate" /><code>{"override void InternalUpdate("}<Link to="/game-api/types/alta-utilities/livedatadisplayview">{"LiveDataDisplayView"}</Link>{" coroutineRunner)"}</code> | For the local player, pings the first socket connection and sends a `Ping` message to all, then reads the last game ping. |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | Returns null; `Output` is overridden instead. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customoutput" /><code>{"private string CustomOutput()"}</code> | Formats both ping values to 4 decimal places. |
| <Link id="m-ping-2" /><code>{"private void Ping(MonoBehaviour coroutineRunner)"}</code> | Starts a ping coroutine on the first connection of the current socket. |
| <Link id="m-updateping" /><code>{"private void UpdatePing(float ping)"}</code> | Callback that stores the transport ping result. |

</details>
