---
title: "BoolValueLabeling"
description: "Inspector attribute that labels a field one of two ways depending on a named bool, with optional default values for each case."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoolValueLabeling

A **class** in `Alta.Attributes`, the global namespace.

Inspector attribute that labels a field one of two ways depending on a named bool, with optional default values for each case. Extends `ConditionalLabeling`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`ConditionalLabeling`](/mod/game-api/types/assembly-other/conditionallabeling)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoolValueLabeling(string hasName, string dontHasName, string boolName)"}</code> | <span className="api-desc">Creates a `BoolValueLabeling` from `hasName`, `dontHasName`, `hasDefaultValue`, `dontHasDefaultValue` and `boolName`.</span> |
| <Link id="m-ctor-2" /><code>{"BoolValueLabeling(string hasName, string dontHasName, float hasDefaultValue, float dontHasDefaultValue, string boolName)"}</code> | <span className="api-desc">Creates a `BoolValueLabeling` from `hasName`, `dontHasName`, `hasDefaultValue`, `dontHasDefaultValue` and `boolName`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-boolname" /><code>{"string BoolName { get; private set; }"}</code> | <span className="api-desc">Name of the bool field that picks the label.</span> |
