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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/mod/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PingDisplay()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decimalplaces" /><code>{"private const int DecimalPlaces"}</code> | <span className="api-desc">Constant 4, the rounding used in the output.</span> |
| <Link id="m-gameping" /><code>{"private float gamePing"}</code> | <span className="api-desc">Last game ping from `PingMessage.LastPingInSeconds`.</span> |
| <Link id="m-gamepingtitle" /><code>{"private const string GamePingTitle"}</code> | <span className="api-desc">Label for the game ping line.</span> |
| <Link id="m-islocalplayer" /><code>{"private bool? isLocalPlayer"}</code> | <span className="api-desc">Cached once from `PlayerController.Current`; pinging only runs when true.</span> |
| <Link id="m-ping" /><code>{"private float ping"}</code> | <span className="api-desc">Last transport ping result.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-output" /><code>{"override string Output { get; }"}</code> | <span className="api-desc">Both ping lines. Both say ms, but the game ping comes from `PingMessage.LastPingInSeconds`.</span> |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | <span className="api-desc">"Ping".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalupdate" /><code>{"override void InternalUpdate("}<Link to="/mod/game-api/types/alta-utilities/livedatadisplayview">{"LiveDataDisplayView"}</Link>{" coroutineRunner)"}</code> | <span className="api-desc">For the local player, pings the first socket connection and sends a `Ping` message to all, then reads the last game ping.</span> |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | <span className="api-desc">Returns null; `Output` is overridden instead.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customoutput" /><code>{"private string CustomOutput()"}</code> | <span className="api-desc">Formats both ping values to 4 decimal places.</span> |
| <Link id="m-ping-2" /><code>{"private void Ping(MonoBehaviour coroutineRunner)"}</code> | <span className="api-desc">Starts a ping coroutine on the first connection of the current socket.</span> |
| <Link id="m-updateping" /><code>{"private void UpdatePing(float ping)"}</code> | <span className="api-desc">Callback that stores the transport ping result.</span> |

</details>
