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

- **Listed in** [TavernLib.ModdingApi](/mod/tavernlib-api/types/moddingapi)
- **Documented in** [RolesChange](/mod/tavernlib-api/types/moddingapi/roleschange)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RolesChange(string username, IReadOnlyList<string> oldRoles, IReadOnlyList<string> newRoles)"}</code> | <span className="api-desc">Sets the username and the roles before and after the change.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-newroles" /><code>{"IReadOnlyList<string> NewRoles { get; }"}</code> | <span className="api-desc">Their roles now. Empty if they have none left or were removed from the file.</span> |
| <Link id="m-oldroles" /><code>{"IReadOnlyList<string> OldRoles { get; }"}</code> | <span className="api-desc">Their roles before the change. Empty if they had none.</span> |
| <Link id="m-username" /><code>{"string Username { get; }"}</code> | <span className="api-desc">The name as it's written in `users.json`.</span> |

## Used in

Members of other types that take, return or hold a `RolesChange`:

<div className="api-used-in">

[`Roles.Announce`](/mod/tavernlib-api/types/moddingapi/roles#m-announce), [`Roles.RolesChanged`](/mod/tavernlib-api/types/moddingapi/roles#m-roleschanged).

</div>
