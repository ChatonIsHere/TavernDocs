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
| <Link id="m-ctor" /><code>{"LocalTestGameMode("}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" serverAccess)"}</code> | <span className="api-desc">Creates a `LocalTestGameMode` from `serverAccess`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serveraccess" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" serverAccess"}</code> | <span className="api-desc">Server details the local server is started with.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isserver" /><code>{"override bool IsServer { get; }"}</code> | <span className="api-desc">Always true; this process is the server.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateasync" /><code>{"override async Task<bool> ActivateAsync()"}</code> | <span className="api-desc">Loads the game scene, starts a local server on port 1757, connects to it and sets up the client scene. Returns false on failure.</span> |
| <Link id="m-stopmodeasync" /><code>{"override async Task StopModeAsync(string reason)"}</code> | <span className="api-desc">Fades out, disconnects, stops the local server and the network, and clears `IsLocalTest`.</span> |
