---
title: "ConsoleOption"
description: "A named option with an id and usage text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleOption

A **class** in `Root.Township`, no namespace.

A named option with an id and usage text. Nothing in this build creates one.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConsoleOption(string name, int optionId, string usage)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | Option name. |
| <Link id="m-optionid" /><code>{"int OptionId { get; private set; }"}</code> | Numeric id. |
| <Link id="m-usage" /><code>{"string Usage { get; private set; }"}</code> | Usage text. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-printhelp" /><code>{"void PrintHelp()"}</code> | Logs the usage text. |
