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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/mod/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DevOnlyAttribute()"}</code> | <span className="api-desc">Creates a `DevOnlyAttribute` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check()"}</code> | <span className="api-desc">True if the signed-in user's identity token says they are a developer.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns "Dev Only".</span> |
