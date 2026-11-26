---
title: "APIStatusManager"
description: "Client: fetches status messages from the Alta status API and shows each new one that matches the player's platform and region as a popup, once per session."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# APIStatusManager

A **static class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client: fetches status messages from the Alta status API and shows each new one that matches the player's platform and region as a popup, once per session.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-viewedstatuses" /><code>{"private static readonly HashSet<int> viewedStatuses"}</code> | IDs of statuses already shown as popups, so each shows once. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getstatus" /><code>{"static async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/status">{"Status"}</Link>{">> GetStatus()"}</code> | Gets all status messages, shows a popup for each matching one not seen yet, and returns them all. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iscorrectplatform" /><code>{"private static bool IsCorrectPlatform("}<Link to="/mod/game-api/types/assembly-api-client/status">{"Status"}</Link>{" status)"}</code> | True if the status is for this platform (Quest, Pico or PC). Unknown platforms pass. |
| <Link id="m-iscorrectregion" /><code>{"private static bool IsCorrectRegion("}<Link to="/mod/game-api/types/assembly-api-client/status">{"Status"}</Link>{" status)"}</code> | True if the status region matches the current server's launch region. Passes when there is no server or the region is not known. |
| <Link id="m-matchesfilter" /><code>{"private static bool MatchesFilter("}<Link to="/mod/game-api/types/assembly-api-client/status">{"Status"}</Link>{" status)"}</code> | True if the status passes both the platform and region checks. |

</details>
