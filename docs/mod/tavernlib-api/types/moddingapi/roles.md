---
title: "Roles"
description: "Players' roles from users.json, kept in memory and re-read about a second after the file changes."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Roles

A **static class** in `TavernLib`, `TavernLib.ModdingApi`.

Players' roles from `users.json`, kept in memory and re-read about a second after the file changes. Server only: on a client every list is empty.

- **Listed in** [TavernLib.ModdingApi](/mod/tavernlib-api/types/moddingapi)
- **Documented in** [Roles](/mod/tavernlib-api/roles), [TavernLib API](/mod/tavernlib-api/overview)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-roleschanged" /><code>{"static readonly "}<Link to="/mod/tavernlib-api/types/utils/tavernevents-tavernevent-t">{"TavernEvents.TavernEvent"}</Link>{"<"}<Link to="/mod/tavernlib-api/types/moddingapi/roleschange">{"RolesChange"}</Link>{"> RolesChanged"}</code> | <span className="api-desc">Raised on the main thread for each user whose roles change, after their new roles are sent to them. Not raised at start.</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadedstamp" /><code>{"private static DateTime _loadedStamp"}</code> | <span className="api-desc">Write time of `users.json` when the roles were last loaded.</span> |
| <Link id="m-nextpoll" /><code>{"private static float _nextPoll"}</code> | <span className="api-desc">Earliest `Time.realtimeSinceStartup` for the next poll.</span> |
| <Link id="m-roles" /><code>{"private static Dictionary<string, IReadOnlyList<string>> _roles"}</code> | <span className="api-desc">Roles by username (case-insensitive), as last read from `users.json`.</span> |
| <Link id="m-seenstamp" /><code>{"private static DateTime _seenStamp"}</code> | <span className="api-desc">Write time of `users.json` at the last poll.</span> |
| <Link id="m-warnedstamp" /><code>{"private static DateTime _warnedStamp"}</code> | <span className="api-desc">Write time of the `users.json` that last failed to read, so the warning isn't repeated.</span> |
| <Link id="m-noroles" /><code>{"private static readonly IReadOnlyList<string> NoRoles"}</code> | <span className="api-desc">Empty role list returned for users with no roles.</span> |
| <Link id="m-usersfile" /><code>{"private static readonly string UsersFile"}</code> | <span className="api-desc">Path of `users.json`, which the roles are read from.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getroles" /><code>{"static IReadOnlyList<string> GetRoles("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">A player's roles, by connection or by username, without case. An empty list (never `null`) for anyone with none.</span> |
| <Link id="m-getroles-2" /><code>{"static IReadOnlyList<string> GetRoles(string username)"}</code> | <span className="api-desc">A player's roles, by connection or by username, without case. An empty list (never `null`) for anyone with none.</span> |
| <Link id="m-hasrole" /><code>{"static bool HasRole("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, string role)"}</code> | <span className="api-desc">True if the connection's player has the role. Role names compare without case.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-announce" /><code>{"private static void Announce("}<Link to="/mod/tavernlib-api/types/moddingapi/roleschange">{"RolesChange"}</Link>{" change)"}</code> | <span className="api-desc">Sends the new roles to the user if online and raises `RolesChanged`.</span> |
| <Link id="m-poll" /><code>{"private static void Poll()"}</code> | <span className="api-desc">Once a second, reloads the roles if `users.json` changed and has stopped changing.</span> |
| <Link id="m-read" /><code>{"private static Dictionary<string, IReadOnlyList<string>> Read()"}</code> | <span className="api-desc">Reads `users.json` and returns each user's non-blank roles.</span> |
| <Link id="m-reload" /><code>{"private static void Reload(DateTime stamp)"}</code> | <span className="api-desc">Rereads the roles and announces each user whose roles changed; keeps the old roles if the file can't be read.</span> |
| <Link id="m-start" /><code>{"internal static void Start()"}</code> | <span className="api-desc">Internal, server: reads `users.json` and starts the once-a-second poll from `MelonEvents.OnUpdate`.</span> |

</details>
