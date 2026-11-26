---
title: "PlayOnlyAttribute"
description: "Console requirement: the command only runs in play mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayOnlyAttribute

A **class** in `Root.Township`, `Alta.Console`.

Console requirement: the command only runs in play mode.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayOnlyAttribute()"}</code> | Creates a `PlayOnlyAttribute` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check()"}</code> | True when the application is playing. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns "Play Only". |
