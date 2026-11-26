---
title: "ServerHostingGameMode"
description: "Game mode for running as the server: loads the server's scene and starts it here, or launches a separate headless process."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerHostingGameMode

A **class** in `Root.Township`, the global namespace.

Game mode for running as the server: loads the server's scene and starts it here, or launches a separate headless process.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GameMode`](/mod/game-api/types/global-e-h/gamemode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerHostingGameMode("}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server, bool isHeadless, bool isExternalLaunch = false, int port = 1757, bool isRunningLocally = true)"}</code> | <span className="api-desc">Creates a `ServerHostingGameMode` from `server`, `isHeadless`, `isExternalLaunch`, `port` and `isRunningLocally`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isexternallaunch" /><code>{"private bool isExternalLaunch"}</code> | <span className="api-desc">Launch a separate server process instead of starting here.</span> |
| <Link id="m-isheadless" /><code>{"private bool isHeadless"}</code> | <span className="api-desc">Run the server without graphics.</span> |
| <Link id="m-isrunninglocally" /><code>{"private bool isRunningLocally"}</code> | <span className="api-desc">Passed to the server start as whether it runs locally. Default true.</span> |
| <Link id="m-port" /><code>{"private int port"}</code> | <span className="api-desc">Port to host on. Default 1757.</span> |
| <Link id="m-server" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server"}</code> | <span className="api-desc">Access to the server being hosted.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isclient" /><code>{"override bool IsClient { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-isrelaunchingthegame" /><code>{"static bool IsRelaunchingTheGame { get; set; }"}</code> | <span className="api-desc">Static flag for relaunching the game. Not set in this class.</span> |
| <Link id="m-isserver" /><code>{"override bool IsServer { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateasync" /><code>{"override async Task<bool> ActivateAsync()"}</code> | <span className="api-desc">Loads the scene and starts the server (headless or not), or launches an external server. Goes back to the main menu on failure.</span> |
| <Link id="m-onstartsucceeded" /><code>{"override void OnStartSucceeded()"}</code> | <span className="api-desc">Stops the active VR or desktop platform once the server is up.</span> |
| <Link id="m-stopmodeasync" /><code>{"override async Task StopModeAsync(string reason)"}</code> | <span className="api-desc">Stops the mode, then shuts down the `ServerHandler` with an expected shutdown reason.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-restartasheadless" /><code>{"private void RestartAsHeadless()"}</code> | <span className="api-desc">Launches a headless server process and quits this one. Needs `/login` or `/login_hash` on the command line.</span> |
| <Link id="m-startexternalserver" /><code>{"private void StartExternalServer()"}</code> | <span className="api-desc">Starts a new game process in batch mode with `/start_server`, the port and the user's tokens on the command line, logging to the server's logs folder.</span> |
| <Link id="m-startheadlessserver" /><code>{"private async Task<bool> StartHeadlessServer()"}</code> | <span className="api-desc">Starts the server here if already headless, otherwise restarts as a headless process.</span> |
| <Link id="m-startserver" /><code>{"private async Task<bool> StartServer()"}</code> | <span className="api-desc">Starts the server through `ServerLifetimePipeline.AttemptToStartServer`.</span> |

</details>
