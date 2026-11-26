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

- **Listed in** [TavernLib.ModdingApi](/tavernlib-api/types/moddingapi)
- **Documented in** [Roles](/tavernlib-api/roles), [TavernLib API](/tavernlib-api/overview)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-roleschanged" /><code>{"static readonly "}<Link to="/tavernlib-api/types/utils/tavernevents-tavernevent-t">{"TavernEvents.TavernEvent"}</Link>{"<"}<Link to="/tavernlib-api/types/moddingapi/roleschange">{"RolesChange"}</Link>{"> RolesChanged"}</code> | Raised on the main thread for each user whose roles change, after their new roles are sent to them. Not raised at start. |

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadedstamp" /><code>{"private static DateTime _loadedStamp"}</code> | Write time of `users.json` when the roles were last loaded. |
| <Link id="m-nextpoll" /><code>{"private static float _nextPoll"}</code> | Earliest `Time.realtimeSinceStartup` for the next poll. |
| <Link id="m-roles" /><code>{"private static Dictionary<string, IReadOnlyList<string>> _roles"}</code> | Roles by username (case-insensitive), as last read from `users.json`. |
| <Link id="m-seenstamp" /><code>{"private static DateTime _seenStamp"}</code> | Write time of `users.json` at the last poll. |
| <Link id="m-warnedstamp" /><code>{"private static DateTime _warnedStamp"}</code> | Write time of the `users.json` that last failed to read, so the warning isn't repeated. |
| <Link id="m-noroles" /><code>{"private static readonly IReadOnlyList<string> NoRoles"}</code> | Empty role list returned for users with no roles. |
| <Link id="m-usersfile" /><code>{"private static readonly string UsersFile"}</code> | Path of `users.json`, which the roles are read from. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getroles" /><code>{"static IReadOnlyList<string> GetRoles("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | A player's roles, by connection or by username, without case. An empty list (never `null`) for anyone with none. |
| <Link id="m-getroles-2" /><code>{"static IReadOnlyList<string> GetRoles(string username)"}</code> | A player's roles, by connection or by username, without case. An empty list (never `null`) for anyone with none. |
| <Link id="m-hasrole" /><code>{"static bool HasRole("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, string role)"}</code> | True if the connection's player has the role. Role names compare without case. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-announce" /><code>{"private static void Announce("}<Link to="/tavernlib-api/types/moddingapi/roleschange">{"RolesChange"}</Link>{" change)"}</code> | Sends the new roles to the user if online and raises `RolesChanged`. |
| <Link id="m-poll" /><code>{"private static void Poll()"}</code> | Once a second, reloads the roles if `users.json` changed and has stopped changing. |
| <Link id="m-read" /><code>{"private static Dictionary<string, IReadOnlyList<string>> Read()"}</code> | Reads `users.json` and returns each user's non-blank roles. |
| <Link id="m-reload" /><code>{"private static void Reload(DateTime stamp)"}</code> | Rereads the roles and announces each user whose roles changed; keeps the old roles if the file can't be read. |
| <Link id="m-start" /><code>{"internal static void Start()"}</code> | Internal, server: reads `users.json` and starts the once-a-second poll from `MelonEvents.OnUpdate`. |

</details>
