---
title: "VrMainMenu"
description: "class VrMainMenu in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VrMainMenu

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SingletonBehaviour<VrMainMenu>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`VrMainMenu`](/game-api/types/global-t-x/vrmainmenu)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VrMainMenu()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-localscene" /><code>{"private "}<Link to="/game-api/types/global-i-l/localnetworkscene">{"LocalNetworkScene"}</Link>{" localScene"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-serverselection" /><code>{"private "}<Link to="/game-api/types/global-s/serverselectionmenu">{"ServerSelectionMenu"}</Link>{" serverSelection"}</code> |  |
| <Link id="m-startinggametask" /><code>{"private Task startingGameTask"}</code> |  |
| <Link id="m-startlocaltest" /><code>{"private bool startLocalTest"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-joinserver" /><code>{"void JoinServer("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> |  |
| <Link id="m-prepareforunload" /><code>{"void PrepareForUnload()"}</code> |  |
| <Link id="m-startlocaltest-2" /><code>{"void StartLocalTest()"}</code> |  |
| <Link id="m-takememorysnapshot" /><code>{"static async Task TakeMemorySnapShot()"}</code> |  |
| <Link id="m-finishedsnapshot" /><code>{"private static void FinishedSnapshot(string arg1, bool arg2)"}</code> |  |
| <Link id="m-lowmemory" /><code>{"private static void LowMemory()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-startgameasync" /><code>{"private async Task StartGameAsync(Func<Task<bool>> startGameMode)"}</code> |  |
