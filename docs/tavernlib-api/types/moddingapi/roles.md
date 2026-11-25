---
title: "Roles"
description: "Players' roles from users.json, kept in memory and refreshed while the server runs. Use it to gate a feature on a role."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Roles

A **static class** in `TavernLib`, `TavernLib.ModdingApi`.

Players' roles from `users.json`, kept in memory and refreshed while the server runs. Use it to gate a feature on a role.

- **Listed in** [TavernLib.ModdingApi](/tavernlib-api/types/moddingapi)
- **Documented in** [Roles](/tavernlib-api/roles), [TavernLib API](/tavernlib-api/overview)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-roleschanged" /><code>{"static readonly "}<Link to="/tavernlib-api/types/utils/tavernevents-tavernevent-t">{"TavernEvents.TavernEvent"}</Link>{"<"}<Link to="/tavernlib-api/types/moddingapi/roleschange">{"RolesChange"}</Link>{"> RolesChanged"}</code> |  |
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
| <Link id="m-getroles" /><code>{"static IReadOnlyList<string> GetRoles("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-getroles-2" /><code>{"static IReadOnlyList<string> GetRoles(string username)"}</code> |  |
| <Link id="m-hasrole" /><code>{"static bool HasRole("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, string role)"}</code> |  |
| <Link id="m-announce" /><code>{"private static void Announce("}<Link to="/tavernlib-api/types/moddingapi/roleschange">{"RolesChange"}</Link>{" change)"}</code> |  |
| <Link id="m-poll" /><code>{"private static void Poll()"}</code> |  |
| <Link id="m-read" /><code>{"private static Dictionary<string, IReadOnlyList<string>> Read()"}</code> |  |
| <Link id="m-reload" /><code>{"private static void Reload(DateTime stamp)"}</code> |  |
| <Link id="m-start" /><code>{"internal static void Start()"}</code> |  |
