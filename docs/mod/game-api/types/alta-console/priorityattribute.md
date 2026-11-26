---
title: "PriorityAttribute"
description: "Sets a console command overload's priority."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PriorityAttribute

A **class** in `Root.Township`, `Alta.Console`.

Sets a console command overload's priority. When several commands match, higher priority wins among equally successful matches.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PriorityAttribute(int priority = 0)"}</code> | Creates a `PriorityAttribute` from `priority`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-priority" /><code>{"int Priority { get; private set; }"}</code> | The priority value; default 0. |
