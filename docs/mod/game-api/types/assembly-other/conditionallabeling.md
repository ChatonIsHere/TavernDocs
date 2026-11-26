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
| <Link id="m-ctor" /><code>{"ConditionalLabeling(string hasName, string dontHasName)"}</code> | Creates a `ConditionalLabeling` from `hasName`, `dontHasName`, `hasDefaultValue` and `dontHasDefaultValue`. |
| <Link id="m-ctor-2" /><code>{"ConditionalLabeling(string hasName, string dontHasName, float hasDefaultValue, float dontHasDefaultValue)"}</code> | Creates a `ConditionalLabeling` from `hasName`, `dontHasName`, `hasDefaultValue` and `dontHasDefaultValue`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-donthasdefault" /><code>{"float DontHasDefault { get; private set; }"}</code> | Default value when the condition is false. |
| <Link id="m-donthasname" /><code>{"string DontHasName { get; private set; }"}</code> | Label when the condition is false. |
| <Link id="m-hasdefault" /><code>{"float HasDefault { get; private set; }"}</code> | Default value when the condition is true. |
| <Link id="m-hasdefaultvalues" /><code>{"bool HasDefaultValues { get; private set; }"}</code> | True when the defaults were given in the constructor. |
| <Link id="m-hasname" /><code>{"string HasName { get; private set; }"}</code> | Label when the condition is true. |
