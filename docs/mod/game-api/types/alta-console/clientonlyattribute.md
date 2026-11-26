---
title: "ClientOnlyAttribute"
description: "Console requirement: the module or command is only available when the current game mode is a client (or there is no game mode yet)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientOnlyAttribute

A **class** in `Root.Township`, `Alta.Console`.

Console requirement: the module or command is only available when the current game mode is a client (or there is no game mode yet).

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/mod/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientOnlyAttribute()"}</code> | <span className="api-desc">Creates a `ClientOnlyAttribute` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check()"}</code> | <span className="api-desc">True if there is no current game mode or it is a client.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns `Client Only`.</span> |
