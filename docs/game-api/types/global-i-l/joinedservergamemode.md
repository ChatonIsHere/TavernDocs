---
title: "JoinedServerGameMode"
description: "class JoinedServerGameMode in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinedServerGameMode

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`JoinServerGameModeBase`](/game-api/types/global-i-l/joinservergamemodebase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinedServerGameMode("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isdeeplink" /><code>{"private bool isDeepLink"}</code> |  |
| <Link id="m-joinretries" /><code>{"private const int JoinRetries"}</code> |  |
| <Link id="m-joinretrydelayms" /><code>{"private const int JoinRetryDelayMs"}</code> |  |
| <Link id="m-lostconnectiondelayms" /><code>{"private const int LostConnectionDelayMs"}</code> |  |
| <Link id="m-server" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateasync" /><code>{"override async Task<bool> ActivateAsync()"}</code> |  |
| <Link id="m-createdeeplinkjoingamemode" /><code>{"static "}<Link to="/game-api/types/global-i-l/joinedservergamemode">{"JoinedServerGameMode"}</Link>{" CreateDeeplinkJoinGameMode("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> |  |
| <Link id="m-onstartsucceeded" /><code>{"override void OnStartSucceeded()"}</code> |  |
| <Link id="m-stopmodeasync" /><code>{"override async Task StopModeAsync(string reason)"}</code> |  |
| <Link id="m-connecttoserver" /><code>{"private async Task<"}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> ConnectToServer()"}</code> |  |
| <Link id="m-loadgamescene" /><code>{"private async Task<"}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> LoadGameScene("}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" result)"}</code> |  |
| <Link id="m-lostconnection" /><code>{"private static async void LostConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-returntomainmenuonfailure" /><code>{"private async Task ReturnToMainMenuOnFailure("}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" result)"}</code> |  |
| <Link id="m-setuploadingscene" /><code>{"private static async Task SetupLoadingScene()"}</code> |  |
