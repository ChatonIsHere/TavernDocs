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
| <Link id="m-ctor" /><code>{"VrMainMenu()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localscene" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/localnetworkscene">{"LocalNetworkScene"}</Link>{" localScene"}</code> | The menu's local network scene, emptied by `PrepareForUnload`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-serverselection" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverselectionmenu">{"ServerSelectionMenu"}</Link>{" serverSelection"}</code> | The server list menu, paused while a game starts. |
| <Link id="m-startinggametask" /><code>{"private Task startingGameTask"}</code> | The game start in progress, used to block a second start. |
| <Link id="m-startlocaltest" /><code>{"private bool startLocalTest"}</code> | Inspector button for `StartLocalTest`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-joinserver" /><code>{"void JoinServer("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> | Joins the given game server through `GameModeManager`, unless a start is already running. Called by the server list. |
| <Link id="m-prepareforunload" /><code>{"void PrepareForUnload()"}</code> | Destroys the menu scene's local entities and clears `IsLocalTest`. Called by `AltaSceneManager`. |
| <Link id="m-startlocaltest-2" /><code>{"void StartLocalTest()"}</code> | Starts a local test game through `GameModeManager.StartLocalTest`, unless a start is already running. |
| <Link id="m-takememorysnapshot" /><code>{"static async Task TakeMemorySnapShot()"}</code> | Cleans memory, then saves a Unity memory profiler snapshot in the persistent data folder. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishedsnapshot" /><code>{"private static void FinishedSnapshot(string arg1, bool arg2)"}</code> | Logs when a memory snapshot is done. |
| <Link id="m-lowmemory" /><code>{"private static void LowMemory()"}</code> | Logs a low memory warning and runs `ApplicationManager.CleanMemory`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: starts a local test when the `startLocalTest` button is pressed. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Sets the main menu logger and marks the scene as a local test. |
| <Link id="m-startgameasync" /><code>{"private async Task StartGameAsync(Func<Task<bool>> startGameMode)"}</code> | Fades to black and runs the start function. On failure fades back in, resumes the server list and goes back to local test mode. |

</details>
