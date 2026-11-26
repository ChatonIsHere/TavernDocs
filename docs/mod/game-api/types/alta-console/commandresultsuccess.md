---
title: "CommandResultSuccess"
description: "Outcome of matching console input to a command: success, or why the parameters didn't fit (too few, too many, wrong types, failed to parse)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandResultSuccess

An **enum** in `Root.Township`, `Alta.Console`.

Outcome of matching console input to a command: success, or why the parameters didn't fit (too few, too many, wrong types, failed to parse). Carried on `CommandSearchResult`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Values

| Member |
| --- |
| <Link id="m-incorrectparametertypes" /><code>{"IncorrectParameterTypes = 2"}</code> |
| <Link id="m-notenoughparameters" /><code>{"NotEnoughParameters = 0"}</code> |
| <Link id="m-parameterparsingfailure" /><code>{"ParameterParsingFailure = 3"}</code> |
| <Link id="m-success" /><code>{"Success = 4"}</code> |
| <Link id="m-toomanyparameters" /><code>{"TooManyParameters = 1"}</code> |

## Used in

Members of other types that take, return or hold a `CommandResultSuccess`:

[`CommandSearchResult.CommandSearchResult`](/mod/game-api/types/alta-console/commandsearchresult#m-ctor), [`CommandSearchResult.success`](/mod/game-api/types/alta-console/commandsearchresult#m-success).
