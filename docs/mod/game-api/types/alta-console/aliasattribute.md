---
title: "AliasAttribute"
description: "Gives a console module or command extra names it can be called by, such as mic for microphone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AliasAttribute

A **class** in `Root.Township`, `Alta.Console`.

Gives a console module or command extra names it can be called by, such as `mic` for `microphone`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AliasAttribute(params string[] aliases)"}</code> | Creates an `AliasAttribute` from `aliases`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-aliases" /><code>{"string[] Aliases { get; private set; }"}</code> | The extra names. |
