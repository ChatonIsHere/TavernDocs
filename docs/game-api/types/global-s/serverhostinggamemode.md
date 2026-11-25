---
title: "ServerHostingGameMode"
description: "class ServerHostingGameMode in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerHostingGameMode

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GameMode`](/game-api/types/global-e-h/gamemode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerHostingGameMode("}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server, bool isHeadless, bool isExternalLaunch = false, int port = 1757, bool isRunningLocally = true)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isexternallaunch" /><code>{"private bool isExternalLaunch"}</code> |  |
| <Link id="m-isheadless" /><code>{"private bool isHeadless"}</code> |  |
| <Link id="m-isrunninglocally" /><code>{"private bool isRunningLocally"}</code> |  |
| <Link id="m-port" /><code>{"private int port"}</code> |  |
| <Link id="m-server" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isclient" /><code>{"override bool IsClient { get; }"}</code> |  |
| <Link id="m-isrelaunchingthegame" /><code>{"static bool IsRelaunchingTheGame { get; set; }"}</code> |  |
| <Link id="m-isserver" /><code>{"override bool IsServer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateasync" /><code>{"override async Task<bool> ActivateAsync()"}</code> |  |
| <Link id="m-onstartsucceeded" /><code>{"override void OnStartSucceeded()"}</code> |  |
| <Link id="m-stopmodeasync" /><code>{"override async Task StopModeAsync(string reason)"}</code> |  |
| <Link id="m-restartasheadless" /><code>{"private void RestartAsHeadless()"}</code> |  |
| <Link id="m-startexternalserver" /><code>{"private void StartExternalServer()"}</code> |  |
| <Link id="m-startheadlessserver" /><code>{"private async Task<bool> StartHeadlessServer()"}</code> |  |
| <Link id="m-startserver" /><code>{"private async Task<bool> StartServer()"}</code> |  |
