---
title: "NullConditionAttribute"
description: "Inspector attribute that shows, hides or locks a field depending on whether another object field is null."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NullConditionAttribute

A **class** in `Alta.Attributes`, the global namespace.

Inspector attribute that shows, hides or locks a field depending on whether another object field is null.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NullConditionAttribute(string objectValue, "}<Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" notNullMode = 2, "}<Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" nullMode = 0)"}</code> | <span className="api-desc">Creates a `NullConditionAttribute` from `objectValue`, `notNullMode` and `nullMode`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-notnullmode" /><code><Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" NotNullMode { get; private set; }"}</code> | <span className="api-desc">How the field shows when the other field is set (editable by default).</span> |
| <Link id="m-nullmode" /><code><Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" NullMode { get; private set; }"}</code> | <span className="api-desc">How the field shows when the other field is null (hidden by default).</span> |
| <Link id="m-objectvalue" /><code>{"string ObjectValue { get; private set; }"}</code> | <span className="api-desc">Name of the object field to check.</span> |
