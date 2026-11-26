---
title: "WithGroupPermissionsOnlyAttribute"
description: "Console requirement: the caller needs all the listed group permissions, on any server type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WithGroupPermissionsOnlyAttribute

A **class** in `Root.Township`, `Alta.Console`.

Console requirement: the caller needs all the listed group permissions, on any server type.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/mod/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WithGroupPermissionsOnlyAttribute(params "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] groups)"}</code> | <span className="api-desc">Creates a `WithGroupPermissionsOnlyAttribute` from `groups`.</span> |

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-groups" /><code>{"private List<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"> Groups { get; set; }"}</code> | <span className="api-desc">The group permissions required.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check("}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | <span className="api-desc">True only if there is a caller with group permissions that include every listed one.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Names the required groups.</span> |
