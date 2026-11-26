---
title: "OculusDeepLinkService"
description: "Client on Quest: handles Meta deep links that launch the game into a server, at startup and while running."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OculusDeepLinkService

A **static class** in `Root.Township`, the global namespace.

Client on Quest: handles Meta deep links that launch the game into a server, at startup and while running. Does nothing on other platforms or in the editor.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for the deep link flow. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changesserverviadeeplink" /><code>{"static async void ChangesServerViaDeepLink()"}</code> | Joins the server from the launch details, and goes back to the main menu if that fails. |
| <Link id="m-simulatedeeplinkintent" /><code>{"static void SimulateDeepLinkIntent()"}</code> | Runs the intent handler as if a deep link arrived. For testing. |
| <Link id="m-tryconnecttodeeplinkserver" /><code>{"static async Task<bool> TryConnectToDeepLinkServer()"}</code> | If the app was launched by a deep link, joins that server. Returns whether it joined. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private static void Initialize()"}</code> | Runs on load; on Quest outside the editor, hooks `Startup` to app start. |
| <Link id="m-isinlocaltestserver" /><code>{"private static bool IsInLocalTestServer()"}</code> | True in local test with a joined server. |
| <Link id="m-joinserverviadeeplink" /><code>{"private static async Task<bool> JoinServerViaDeepLink("}<Link to="/mod/game-api/types/alta-menus/platformlaunchdetails">{"PlatformLaunchDetails"}</Link>{" launchDetails, int serverID)"}</code> | Looks up the server through the API and joins it, logging the result to Meta and showing an error on failure. |
| <Link id="m-ondeeplinkintent" /><code>{"private static void OnDeepLinkIntent()"}</code> | Handles a new launch intent; skips if not logged in yet. |
| <Link id="m-startup" /><code>{"private static void Startup()"}</code> | Registers for Meta's launch intent change notification. |
| <Link id="m-trygetvalidlaunchdetails" /><code>{"private static bool TryGetValidLaunchDetails(out "}<Link to="/mod/game-api/types/alta-menus/platformlaunchdetails">{"PlatformLaunchDetails"}</Link>{" launchDetails, out int serverID)"}</code> | Reads the launch details and server ID; fails if not a deep link or already on that server. |

</details>
