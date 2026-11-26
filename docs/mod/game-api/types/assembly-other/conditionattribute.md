---
title: "ConditionAttribute"
description: "Inspector attribute that shows, hides or locks a field depending on a bool member of the same object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConditionAttribute

A **class** in `Alta.Attributes`, the global namespace.

Inspector attribute that shows, hides or locks a field depending on a bool member of the same object.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`
- **Derived types** [`NotConditionAttribute`](/mod/game-api/types/assembly-other/notconditionattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConditionAttribute(string boolean, "}<Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" trueMode = 2, "}<Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" falseMode = 0)"}</code> | <span className="api-desc">Creates a `ConditionAttribute` from `boolean`, `trueMode` and `falseMode`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-boolean" /><code>{"string Boolean { get; private set; }"}</code> | <span className="api-desc">Name of the bool member to check.</span> |
| <Link id="m-falsemode" /><code><Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" FalseMode { get; private set; }"}</code> | <span className="api-desc">How the field is drawn when the bool is false. Default hidden.</span> |
| <Link id="m-truemode" /><code><Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" TrueMode { get; private set; }"}</code> | <span className="api-desc">How the field is drawn when the bool is true. Default editable.</span> |
