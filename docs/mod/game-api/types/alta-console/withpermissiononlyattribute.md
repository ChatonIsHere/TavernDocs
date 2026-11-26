---
title: "WithPermissionOnlyAttribute"
description: "Console requirement: the caller needs all the listed policies (for example server_owner)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WithPermissionOnlyAttribute

A **class** in `Root.Township`, `Alta.Console`.

Console requirement: the caller needs all the listed policies (for example `server_owner`).

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/mod/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WithPermissionOnlyAttribute(params string[] roles)"}</code> | Creates a `WithPermissionOnlyAttribute` from `roles`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-roles" /><code>{"string[] Roles { get; set; }"}</code> | The policies required. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check("}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | True only if there is a calling user whose policies include every listed role. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Names the required roles. |
