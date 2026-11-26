---
title: "ServerHeartbeat"
description: "Starts an external heartbeat monitor process for a dedicated server and logs a heartbeat line every 100 frames."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerHeartbeat

A **class** in `Root.Township`, no namespace.

Starts an external heartbeat monitor process for a dedicated server and logs a heartbeat line every 100 frames. Server, only with the `/heartbeat` command line argument.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerHeartbeat()"}</code> | Creates a `ServerHeartbeat` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int count"}</code> | Frames since the last heartbeat. |
| <Link id="m-heartbeatmonitorprocess" /><code>{"private static Process heartbeatMonitorProcess"}</code> | The external monitor process. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-sendingloop" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" sendingLoop"}</code> | Handle for the registered `SendHeartbeatLoop` method. |
| <Link id="m-sendinterval" /><code>{"private static int sendInterval"}</code> | Frames between heartbeats (100). |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private static bool IsActive { get; set; }"}</code> | True between `StartSending` and `Shutdown`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shutdown" /><code>{"static void Shutdown()"}</code> | Kills the heartbeat monitor process, or the first process named `ServerHeartbeat` if that fails. Called on application quit. |
| <Link id="m-startsending" /><code>{"void StartSending(string serverName)"}</code> | Starts the monitor and the heartbeat loop. Called by `ServerHandler` after the server starts. |
| <Link id="m-stopsending" /><code>{"void StopSending()"}</code> | Stops the heartbeat loop and shuts the monitor down. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sendheartbeat" /><code>{"private void SendHeartbeat()"}</code> | Writes a trace-level `heartbeat` log line. Nothing is sent over the network. |
| <Link id="m-sendheartbeatloop" /><code>{"private void SendHeartbeatLoop()"}</code> | Per-frame update that calls `SendHeartbeat` every `sendInterval` frames. |
| <Link id="m-startheartbeatmonitor" /><code>{"private void StartHeartbeatMonitor(string serverName)"}</code> | Starts the monitor from the `/heartbeat` path and alert interval arguments, passing it the server name, PID and command line. |

</details>

## Used in

Members of other types that take, return or hold a `ServerHeartbeat`:

[`ServerHandler.heartbeat`](/game-api/types/alta-networking/serverhandler#m-heartbeat).
