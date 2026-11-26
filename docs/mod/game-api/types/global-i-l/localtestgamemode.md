---
title: "LocalTestGameMode"
description: "Game mode that runs a server in the same process and joins it as a client, for local testing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalTestGameMode

A **class** in `Root.Township`, the global namespace.

Game mode that runs a server in the same process and joins it as a client, for local testing. Started from the menu with an `IServerAccess`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`JoinServerGameModeBase`](/mod/game-api/types/global-i-l/joinservergamemodebase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalTestGameMode("}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" serverAccess)"}</code> | Creates a `LocalTestGameMode` from `serverAccess`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serveraccess" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" serverAccess"}</code> | Server details the local server is started with. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isserver" /><code>{"override bool IsServer { get; }"}</code> | Always true; this process is the server. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateasync" /><code>{"override async Task<bool> ActivateAsync()"}</code> | Loads the game scene, starts a local server on port 1757, connects to it and sets up the client scene. Returns false on failure. |
| <Link id="m-stopmodeasync" /><code>{"override async Task StopModeAsync(string reason)"}</code> | Fades out, disconnects, stops the local server and the network, and clears `IsLocalTest`. |
