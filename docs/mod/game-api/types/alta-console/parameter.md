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
| <Link id="m-ctor" /><code>{"Parameter(ParameterInfo parameterInfo, "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command, string description)"}</code> | <span className="api-desc">Creates a `Parameter` from `parameterInfo`, `command` and `description`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-command" /><code><Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" { get; }"}</code> | <span className="api-desc">The command this parameter belongs to.</span> |
| <Link id="m-default" /><code>{"object Default { get; }"}</code> | <span className="api-desc">The default value. If the method's default is null this holds the string "default" instead.</span> |
| <Link id="m-hasdefault" /><code>{"bool HasDefault { get; }"}</code> | <span className="api-desc">Whether the parameter has a default value, so it can be left out.</span> |
| <Link id="m-parameterinfo" /><code>{"ParameterInfo ParameterInfo { get; }"}</code> | <span className="api-desc">Reflection info for the method parameter.</span> |
| <Link id="m-parsingerror" /><code>{"string ParsingError { get; set; }"}</code> | <span className="api-desc">Why the last value given for this parameter couldn't be parsed. Shown when a command fails to match.</span> |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> | <span className="api-desc">The parameter's type.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toliststring" /><code>{"string ToListString()"}</code> | <span className="api-desc">Formats the parameter as a list line with name, type and default, for help output.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Formats the parameter as `[name (Type)]`, with its default when it has one.</span> |

## Used in

Members of other types that take, return or hold a `Parameter`:

<div className="api-used-in">

[`Command.Parameters`](/mod/game-api/types/alta-console/command#m-parameters).

</div>
