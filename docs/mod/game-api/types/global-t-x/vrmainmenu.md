---
title: "VrMainMenu"
description: "Controller for the VR main menu scene (singleton Instance): starts a local test or joins a server picked from the server list."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VrMainMenu

A **class** in `Root.Township`, the global namespace.

Controller for the VR main menu scene (singleton `Instance`): starts a local test or joins a server picked from the server list. Client only.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`SingletonBehaviour<VrMainMenu>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`VrMainMenu`](/mod/game-api/types/global-t-x/vrmainmenu)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VrMainMenu()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localscene" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/localnetworkscene">{"LocalNetworkScene"}</Link>{" localScene"}</code> | <span className="api-desc">The menu's local network scene, emptied by `PrepareForUnload`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-serverselection" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverselectionmenu">{"ServerSelectionMenu"}</Link>{" serverSelection"}</code> | <span className="api-desc">The server list menu, paused while a game starts.</span> |
| <Link id="m-startinggametask" /><code>{"private Task startingGameTask"}</code> | <span className="api-desc">The game start in progress, used to block a second start.</span> |
| <Link id="m-startlocaltest" /><code>{"private bool startLocalTest"}</code> | <span className="api-desc">Inspector button for `StartLocalTest`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-joinserver" /><code>{"void JoinServer("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> | <span className="api-desc">Joins the given game server through `GameModeManager`, unless a start is already running. Called by the server list.</span> |
| <Link id="m-prepareforunload" /><code>{"void PrepareForUnload()"}</code> | <span className="api-desc">Destroys the menu scene's local entities and clears `IsLocalTest`. Called by `AltaSceneManager`.</span> |
| <Link id="m-startlocaltest-2" /><code>{"void StartLocalTest()"}</code> | <span className="api-desc">Starts a local test game through `GameModeManager.StartLocalTest`, unless a start is already running.</span> |
| <Link id="m-takememorysnapshot" /><code>{"static async Task TakeMemorySnapShot()"}</code> | <span className="api-desc">Cleans memory, then saves a Unity memory profiler snapshot in the persistent data folder.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishedsnapshot" /><code>{"private static void FinishedSnapshot(string arg1, bool arg2)"}</code> | <span className="api-desc">Logs when a memory snapshot is done.</span> |
| <Link id="m-lowmemory" /><code>{"private static void LowMemory()"}</code> | <span className="api-desc">Logs a low memory warning and runs `ApplicationManager.CleanMemory`.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: starts a local test when the `startLocalTest` button is pressed.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Sets the main menu logger and marks the scene as a local test.</span> |
| <Link id="m-startgameasync" /><code>{"private async Task StartGameAsync(Func<Task<bool>> startGameMode)"}</code> | <span className="api-desc">Fades to black and runs the start function. On failure fades back in, resumes the server list and goes back to local test mode.</span> |

</details>
