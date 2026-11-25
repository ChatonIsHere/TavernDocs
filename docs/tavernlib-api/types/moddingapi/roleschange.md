---
title: "RolesChange"
description: "What Roles.RolesChanged hands its handlers: one user whose roles in users.json changed."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RolesChange

A **class** in `TavernLib`, `TavernLib.ModdingApi`.

What `Roles.RolesChanged` hands its handlers: one user whose roles in `users.json` changed.

- **Listed in** [TavernLib.ModdingApi](/tavernlib-api/types/moddingapi)
- **Documented in** [RolesChange](/tavernlib-api/types/moddingapi/roleschange)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RolesChange(string username, IReadOnlyList<string> oldRoles, IReadOnlyList<string> newRoles)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-newroles" /><code>{"IReadOnlyList<string> NewRoles { get; }"}</code> | Their roles now. Empty if they have none left or were removed from the file. |
| <Link id="m-oldroles" /><code>{"IReadOnlyList<string> OldRoles { get; }"}</code> | Their roles before the change. Empty if they had none. |
| <Link id="m-username" /><code>{"string Username { get; }"}</code> | The name as it's written in `users.json`. |

## Used in

Members of other types that take, return or hold a `RolesChange`:

[`Roles.Announce`](/tavernlib-api/types/moddingapi/roles#m-announce), [`Roles.RolesChanged`](/tavernlib-api/types/moddingapi/roles#m-roleschanged).
