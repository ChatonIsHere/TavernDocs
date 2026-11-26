---
title: "ConsoleOption"
description: "A named option with an id and usage text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleOption

A **class** in `Root.Township`, the global namespace.

A named option with an id and usage text. Nothing in this build creates one.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleOption(string name, int optionId, string usage)"}</code> | <span className="api-desc">Creates a `ConsoleOption` from `name`, `optionId` and `usage`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">Option name.</span> |
| <Link id="m-optionid" /><code>{"int OptionId { get; private set; }"}</code> | <span className="api-desc">Numeric id.</span> |
| <Link id="m-usage" /><code>{"string Usage { get; private set; }"}</code> | <span className="api-desc">Usage text.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-printhelp" /><code>{"void PrintHelp()"}</code> | <span className="api-desc">Logs the usage text.</span> |
