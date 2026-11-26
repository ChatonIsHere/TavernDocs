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

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WithGroupPermissionsOnlyAttribute(params "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] groups)"}</code> | Creates a `WithGroupPermissionsOnlyAttribute` from `groups`. |

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-groups" /><code>{"private List<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"> Groups { get; set; }"}</code> | The group permissions required. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check("}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | True only if there is a caller with group permissions that include every listed one. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Names the required groups. |
