---
title: "ValueConditionAttribute"
description: "Inspector attribute that shows, hides or locks a field based on whether another number field is above a threshold."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValueConditionAttribute

A **class** in `Alta.Attributes`, the global namespace.

Inspector attribute that shows, hides or locks a field based on whether another number field is above a threshold.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValueConditionAttribute(string valueField, float higherThanToTrue, "}<Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" trueMode = 2, "}<Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" falseMode = 0)"}</code> | Creates a `ValueConditionAttribute` from `valueField`, `higherThanToTrue`, `trueMode` and `falseMode`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-falsemode" /><code><Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" FalseMode { get; private set; }"}</code> | How the field is drawn when the condition is false (hidden by default). |
| <Link id="m-higherthantotrue" /><code>{"float HigherThanToTrue { get; private set; }"}</code> | Threshold: the condition is true when the other field is higher than this. |
| <Link id="m-truemode" /><code><Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" TrueMode { get; private set; }"}</code> | How the field is drawn when the condition is true (editable by default). |
| <Link id="m-valuefield" /><code>{"string ValueField { get; private set; }"}</code> | Name of the field whose value is checked. |
