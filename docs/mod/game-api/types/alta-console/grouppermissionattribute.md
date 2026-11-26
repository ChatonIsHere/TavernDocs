---
title: "GroupPermissionAttribute"
description: "Console requirement: on a simple server the caller needs all the listed group permissions; on other servers it always passes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupPermissionAttribute

A **class** in `Root.Township`, `Alta.Console`.

Console requirement: on a simple server the caller needs all the listed group permissions; on other servers it always passes. Fails on clients.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/mod/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupPermissionAttribute(params "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> | <span className="api-desc">Creates a `GroupPermissionAttribute` from `permissions`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-permissions" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions"}</code> | <span className="api-desc">Group permissions required on a simple server.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check("}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | <span className="api-desc">False with no server; true on a non-simple server; otherwise true only if the caller has every listed group permission.</span> |
