---
title: "Parameter"
description: "One parameter of a console Command, built from the method's ParameterInfo."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Parameter

A **class** in `Root.Township`, `Alta.Console`.

One parameter of a console `Command`, built from the method's `ParameterInfo`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`BasePart`](/mod/game-api/types/alta-console/basepart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Parameter(ParameterInfo parameterInfo, "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command, string description)"}</code> | Creates a `Parameter` from `parameterInfo`, `command` and `description`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-command" /><code><Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" { get; }"}</code> | The command this parameter belongs to. |
| <Link id="m-default" /><code>{"object Default { get; }"}</code> | The default value. If the method's default is null this holds the string "default" instead. |
| <Link id="m-hasdefault" /><code>{"bool HasDefault { get; }"}</code> | Whether the parameter has a default value, so it can be left out. |
| <Link id="m-parameterinfo" /><code>{"ParameterInfo ParameterInfo { get; }"}</code> | Reflection info for the method parameter. |
| <Link id="m-parsingerror" /><code>{"string ParsingError { get; set; }"}</code> | Why the last value given for this parameter couldn't be parsed. Shown when a command fails to match. |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> | The parameter's type. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toliststring" /><code>{"string ToListString()"}</code> | Formats the parameter as a list line with name, type and default, for help output. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Formats the parameter as `[name (Type)]`, with its default when it has one. |

## Used in

Members of other types that take, return or hold a `Parameter`:

[`Command.Parameters`](/mod/game-api/types/alta-console/command#m-parameters).
