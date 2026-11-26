---
title: "DevOnlyAttribute"
description: "Console requirement: the command (or settings property) is only for users whose identity token has the developer role."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DevOnlyAttribute

A **class** in `Root.Township`, `Alta.Console`.

Console requirement: the command (or settings property) is only for users whose identity token has the developer role.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DevOnlyAttribute()"}</code> | Creates a `DevOnlyAttribute` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check()"}</code> | True if the signed-in user's identity token says they are a developer. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns "Dev Only". |
