---
title: "ServerHeartbeat"
description: "Starts an external heartbeat monitor process for a dedicated server and logs a heartbeat line every 100 frames."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerHeartbeat

A **class** in `Root.Township`, the global namespace.

Starts an external heartbeat monitor process for a dedicated server and logs a heartbeat line every 100 frames. Server, only with the `/heartbeat` command line argument.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Documented in** [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerHeartbeat()"}</code> | <span className="api-desc">Creates a `ServerHeartbeat` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int count"}</code> | <span className="api-desc">Frames since the last heartbeat.</span> |
| <Link id="m-heartbeatmonitorprocess" /><code>{"private static Process heartbeatMonitorProcess"}</code> | <span className="api-desc">The external monitor process.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-sendingloop" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" sendingLoop"}</code> | <span className="api-desc">Handle for the registered `SendHeartbeatLoop` method.</span> |
| <Link id="m-sendinterval" /><code>{"private static int sendInterval"}</code> | <span className="api-desc">Frames between heartbeats (100).</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private static bool IsActive { get; set; }"}</code> | <span className="api-desc">True between `StartSending` and `Shutdown`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shutdown" /><code>{"static void Shutdown()"}</code> | <span className="api-desc">Kills the heartbeat monitor process, or the first process named `ServerHeartbeat` if that fails. Called on application quit.</span> |
| <Link id="m-startsending" /><code>{"void StartSending(string serverName)"}</code> | <span className="api-desc">Starts the monitor and the heartbeat loop. Called by `ServerHandler` after the server starts.</span> |
| <Link id="m-stopsending" /><code>{"void StopSending()"}</code> | <span className="api-desc">Stops the heartbeat loop and shuts the monitor down.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sendheartbeat" /><code>{"private void SendHeartbeat()"}</code> | <span className="api-desc">Writes a trace-level `heartbeat` log line. Nothing is sent over the network.</span> |
| <Link id="m-sendheartbeatloop" /><code>{"private void SendHeartbeatLoop()"}</code> | <span className="api-desc">Per-frame update that calls `SendHeartbeat` every `sendInterval` frames.</span> |
| <Link id="m-startheartbeatmonitor" /><code>{"private void StartHeartbeatMonitor(string serverName)"}</code> | <span className="api-desc">Starts the monitor from the `/heartbeat` path and alert interval arguments, passing it the server name, PID and command line.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerHeartbeat`:

<div className="api-used-in">

[`ServerHandler.heartbeat`](/mod/game-api/types/alta-networking/serverhandler#m-heartbeat).

</div>
