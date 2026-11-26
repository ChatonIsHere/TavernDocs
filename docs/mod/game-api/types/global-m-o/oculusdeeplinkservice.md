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

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for the deep link flow.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changesserverviadeeplink" /><code>{"static async void ChangesServerViaDeepLink()"}</code> | <span className="api-desc">Joins the server from the launch details, and goes back to the main menu if that fails.</span> |
| <Link id="m-simulatedeeplinkintent" /><code>{"static void SimulateDeepLinkIntent()"}</code> | <span className="api-desc">Runs the intent handler as if a deep link arrived. For testing.</span> |
| <Link id="m-tryconnecttodeeplinkserver" /><code>{"static async Task<bool> TryConnectToDeepLinkServer()"}</code> | <span className="api-desc">If the app was launched by a deep link, joins that server. Returns whether it joined.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private static void Initialize()"}</code> | <span className="api-desc">Runs on load; on Quest outside the editor, hooks `Startup` to app start.</span> |
| <Link id="m-isinlocaltestserver" /><code>{"private static bool IsInLocalTestServer()"}</code> | <span className="api-desc">True in local test with a joined server.</span> |
| <Link id="m-joinserverviadeeplink" /><code>{"private static async Task<bool> JoinServerViaDeepLink("}<Link to="/mod/game-api/types/alta-menus/platformlaunchdetails">{"PlatformLaunchDetails"}</Link>{" launchDetails, int serverID)"}</code> | <span className="api-desc">Looks up the server through the API and joins it, logging the result to Meta and showing an error on failure.</span> |
| <Link id="m-ondeeplinkintent" /><code>{"private static void OnDeepLinkIntent()"}</code> | <span className="api-desc">Handles a new launch intent; skips if not logged in yet.</span> |
| <Link id="m-startup" /><code>{"private static void Startup()"}</code> | <span className="api-desc">Registers for Meta's launch intent change notification.</span> |
| <Link id="m-trygetvalidlaunchdetails" /><code>{"private static bool TryGetValidLaunchDetails(out "}<Link to="/mod/game-api/types/alta-menus/platformlaunchdetails">{"PlatformLaunchDetails"}</Link>{" launchDetails, out int serverID)"}</code> | <span className="api-desc">Reads the launch details and server ID; fails if not a deep link or already on that server.</span> |

</details>
