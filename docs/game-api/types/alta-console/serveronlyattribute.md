---
title: "ServerOnlyAttribute"
description: "Console requirement: the command only runs on a server (when ServerHandler.Current exists)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerOnlyAttribute

A **class** in `Root.Township`, `Alta.Console`.

Console requirement: the command only runs on a server (when `ServerHandler.Current` exists).

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerOnlyAttribute()"}</code> | Creates a `ServerOnlyAttribute` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check()"}</code> | True when there is a current server handler. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns "Server Only". |
