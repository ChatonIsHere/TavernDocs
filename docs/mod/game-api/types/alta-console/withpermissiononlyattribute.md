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
| <Link id="m-ctor" /><code>{"WithPermissionOnlyAttribute(params string[] roles)"}</code> | <span className="api-desc">Creates a `WithPermissionOnlyAttribute` from `roles`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-roles" /><code>{"string[] Roles { get; set; }"}</code> | <span className="api-desc">The policies required.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check("}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | <span className="api-desc">True only if there is a calling user whose policies include every listed role.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Names the required roles.</span> |
