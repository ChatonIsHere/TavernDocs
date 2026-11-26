---
title: "ConditionalLabeling"
description: "Base inspector attribute that labels a field one of two ways depending on a condition, with optional default values for each case."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConditionalLabeling

An **abstract class** in `Alta.Attributes`, the global namespace.

Base inspector attribute that labels a field one of two ways depending on a condition, with optional default values for each case. Used by `BoolValueLabeling` and `HasComponentLabel`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`
- **Derived types** [`BoolValueLabeling`](/mod/game-api/types/assembly-other/boolvaluelabeling), [`HasComponentLabel`](/mod/game-api/types/assembly-other/hascomponentlabel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConditionalLabeling(string hasName, string dontHasName)"}</code> | <span className="api-desc">Creates a `ConditionalLabeling` from `hasName`, `dontHasName`, `hasDefaultValue` and `dontHasDefaultValue`.</span> |
| <Link id="m-ctor-2" /><code>{"ConditionalLabeling(string hasName, string dontHasName, float hasDefaultValue, float dontHasDefaultValue)"}</code> | <span className="api-desc">Creates a `ConditionalLabeling` from `hasName`, `dontHasName`, `hasDefaultValue` and `dontHasDefaultValue`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-donthasdefault" /><code>{"float DontHasDefault { get; private set; }"}</code> | <span className="api-desc">Default value when the condition is false.</span> |
| <Link id="m-donthasname" /><code>{"string DontHasName { get; private set; }"}</code> | <span className="api-desc">Label when the condition is false.</span> |
| <Link id="m-hasdefault" /><code>{"float HasDefault { get; private set; }"}</code> | <span className="api-desc">Default value when the condition is true.</span> |
| <Link id="m-hasdefaultvalues" /><code>{"bool HasDefaultValues { get; private set; }"}</code> | <span className="api-desc">True when the defaults were given in the constructor.</span> |
| <Link id="m-hasname" /><code>{"string HasName { get; private set; }"}</code> | <span className="api-desc">Label when the condition is true.</span> |
