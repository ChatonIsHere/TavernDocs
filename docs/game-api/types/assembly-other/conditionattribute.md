---
title: "ConditionAttribute"
description: "Inspector attribute that shows, hides or locks a field depending on a bool member of the same object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConditionAttribute

A **class** in `Alta.Attributes`, no namespace.

Inspector attribute that shows, hides or locks a field depending on a bool member of the same object.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`
- **Derived types** [`NotConditionAttribute`](/game-api/types/assembly-other/notconditionattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConditionAttribute(string boolean, "}<Link to="/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" trueMode = 2, "}<Link to="/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" falseMode = 0)"}</code> | Creates a `ConditionAttribute` from `boolean`, `trueMode` and `falseMode`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-boolean" /><code>{"string Boolean { get; private set; }"}</code> | Name of the bool member to check. |
| <Link id="m-falsemode" /><code><Link to="/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" FalseMode { get; private set; }"}</code> | How the field is drawn when the bool is false. Default hidden. |
| <Link id="m-truemode" /><code><Link to="/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" TrueMode { get; private set; }"}</code> | How the field is drawn when the bool is true. Default editable. |
