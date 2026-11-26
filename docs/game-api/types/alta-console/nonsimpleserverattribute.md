---
title: "NonSimpleServerAttribute"
description: "Console requirement: the command runs freely on non-simple servers; on a simple server the caller needs the listed policies (debug_features by default)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NonSimpleServerAttribute

A **class** in `Root.Township`, `Alta.Console`.

Console requirement: the command runs freely on non-simple servers; on a simple server the caller needs the listed policies (`debug_features` by default). Fails on clients.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NonSimpleServerAttribute(params string[] roles)"}</code> | Creates a `NonSimpleServerAttribute` from `roles`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-roles" /><code>{"private string[] roles"}</code> | Policies needed on a simple server; `debug_features` when none are given. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check("}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | False with no server; true on a non-simple server; otherwise true only if the caller has every listed policy. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns "Non Simple Server". |
