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
| <Link id="m-loadedstamp" /><code>{"private static DateTime _loadedStamp"}</code> |  |
| <Link id="m-nextpoll" /><code>{"private static float _nextPoll"}</code> |  |
| <Link id="m-roles" /><code>{"private static Dictionary<string, IReadOnlyList<string>> _roles"}</code> |  |
| <Link id="m-seenstamp" /><code>{"private static DateTime _seenStamp"}</code> |  |
| <Link id="m-warnedstamp" /><code>{"private static DateTime _warnedStamp"}</code> |  |
| <Link id="m-noroles" /><code>{"private static readonly IReadOnlyList<string> NoRoles"}</code> |  |
| <Link id="m-usersfile" /><code>{"private static readonly string UsersFile"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getroles" /><code>{"static IReadOnlyList<string> GetRoles("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | A player's roles, by connection or by username, without case. An empty list (never `null`) for anyone with none. |
| <Link id="m-getroles-2" /><code>{"static IReadOnlyList<string> GetRoles(string username)"}</code> | A player's roles, by connection or by username, without case. An empty list (never `null`) for anyone with none. |
| <Link id="m-hasrole" /><code>{"static bool HasRole("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, string role)"}</code> | True if the connection's player has the role. Role names compare without case. |
| <Link id="m-announce" /><code>{"private static void Announce("}<Link to="/tavernlib-api/types/moddingapi/roleschange">{"RolesChange"}</Link>{" change)"}</code> |  |
| <Link id="m-poll" /><code>{"private static void Poll()"}</code> |  |
| <Link id="m-read" /><code>{"private static Dictionary<string, IReadOnlyList<string>> Read()"}</code> |  |
| <Link id="m-reload" /><code>{"private static void Reload(DateTime stamp)"}</code> |  |
| <Link id="m-start" /><code>{"internal static void Start()"}</code> | Internal, server: reads `users.json` and starts the once-a-second poll from `MelonEvents.OnUpdate`. |
