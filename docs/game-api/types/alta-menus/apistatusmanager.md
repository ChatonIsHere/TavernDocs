---
title: "APIStatusManager"
description: "static class APIStatusManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# APIStatusManager

A **static class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-viewedstatuses" /><code>{"private static readonly HashSet<int> viewedStatuses"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getstatus" /><code>{"static async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-client/status">{"Status"}</Link>{">> GetStatus()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-iscorrectplatform" /><code>{"private static bool IsCorrectPlatform("}<Link to="/game-api/types/assembly-api-client/status">{"Status"}</Link>{" status)"}</code> |
| <Link id="m-iscorrectregion" /><code>{"private static bool IsCorrectRegion("}<Link to="/game-api/types/assembly-api-client/status">{"Status"}</Link>{" status)"}</code> |
| <Link id="m-matchesfilter" /><code>{"private static bool MatchesFilter("}<Link to="/game-api/types/assembly-api-client/status">{"Status"}</Link>{" status)"}</code> |

</details>
