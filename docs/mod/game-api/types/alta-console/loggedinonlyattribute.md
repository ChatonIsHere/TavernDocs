---
title: "LoggedInOnlyAttribute"
description: "Console requirement: the command needs the game to be logged in to the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoggedInOnlyAttribute

A **class** in `Root.Township`, `Alta.Console`.

Console requirement: the command needs the game to be logged in to the Alta API.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/mod/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoggedInOnlyAttribute()"}</code> | <span className="api-desc">Creates a `LoggedInOnlyAttribute` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check()"}</code> | <span className="api-desc">True when `LoginManager.IsLoggedIn`.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns "Logged In Only".</span> |
