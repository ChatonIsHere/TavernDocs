---
title: "ServerHostingGameMode"
description: "Game mode for running as the server: loads the server's scene and starts it here, or launches a separate headless process."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerHostingGameMode

A **class** in `Root.Township`, no namespace.

Game mode for running as the server: loads the server's scene and starts it here, or launches a separate headless process.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GameMode`](/game-api/types/global-e-h/gamemode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerHostingGameMode("}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server, bool isHeadless, bool isExternalLaunch = false, int port = 1757, bool isRunningLocally = true)"}</code> | Creates a `ServerHostingGameMode` from `server`, `isHeadless`, `isExternalLaunch`, `port` and `isRunningLocally`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isexternallaunch" /><code>{"private bool isExternalLaunch"}</code> | Launch a separate server process instead of starting here. |
| <Link id="m-isheadless" /><code>{"private bool isHeadless"}</code> | Run the server without graphics. |
| <Link id="m-isrunninglocally" /><code>{"private bool isRunningLocally"}</code> | Passed to the server start as whether it runs locally. Default true. |
| <Link id="m-port" /><code>{"private int port"}</code> | Port to host on. Default 1757. |
| <Link id="m-server" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server"}</code> | Access to the server being hosted. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isclient" /><code>{"override bool IsClient { get; }"}</code> | Always false. |
| <Link id="m-isrelaunchingthegame" /><code>{"static bool IsRelaunchingTheGame { get; set; }"}</code> | Static flag for relaunching the game. Not set in this class. |
| <Link id="m-isserver" /><code>{"override bool IsServer { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateasync" /><code>{"override async Task<bool> ActivateAsync()"}</code> | Loads the scene and starts the server (headless or not), or launches an external server. Goes back to the main menu on failure. |
| <Link id="m-onstartsucceeded" /><code>{"override void OnStartSucceeded()"}</code> | Stops the active VR or desktop platform once the server is up. |
| <Link id="m-stopmodeasync" /><code>{"override async Task StopModeAsync(string reason)"}</code> | Stops the mode, then shuts down the `ServerHandler` with an expected shutdown reason. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-restartasheadless" /><code>{"private void RestartAsHeadless()"}</code> | Launches a headless server process and quits this one. Needs `/login` or `/login_hash` on the command line. |
| <Link id="m-startexternalserver" /><code>{"private void StartExternalServer()"}</code> | Starts a new game process in batch mode with `/start_server`, the port and the user's tokens on the command line, logging to the server's logs folder. |
| <Link id="m-startheadlessserver" /><code>{"private async Task<bool> StartHeadlessServer()"}</code> | Starts the server here if already headless, otherwise restarts as a headless process. |
| <Link id="m-startserver" /><code>{"private async Task<bool> StartServer()"}</code> | Starts the server through `ServerLifetimePipeline.AttemptToStartServer`. |

</details>
