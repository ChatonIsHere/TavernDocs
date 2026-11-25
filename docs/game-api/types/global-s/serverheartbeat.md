---
title: "ServerHeartbeat"
description: "class ServerHeartbeat in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerHeartbeat

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerHeartbeat()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-count" /><code>{"private int count"}</code> |
| <Link id="m-heartbeatmonitorprocess" /><code>{"private static Process heartbeatMonitorProcess"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-sendingloop" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" sendingLoop"}</code> |
| <Link id="m-sendinterval" /><code>{"private static int sendInterval"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-isactive" /><code>{"private static bool IsActive { get; set; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-shutdown" /><code>{"static void Shutdown()"}</code> |
| <Link id="m-startsending" /><code>{"void StartSending(string serverName)"}</code> |
| <Link id="m-stopsending" /><code>{"void StopSending()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-sendheartbeat" /><code>{"private void SendHeartbeat()"}</code> |
| <Link id="m-sendheartbeatloop" /><code>{"private void SendHeartbeatLoop()"}</code> |
| <Link id="m-startheartbeatmonitor" /><code>{"private void StartHeartbeatMonitor(string serverName)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ServerHeartbeat`:

[`ServerHandler.heartbeat`](/game-api/types/alta-networking/serverhandler#m-heartbeat).
