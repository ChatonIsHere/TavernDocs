---
title: "ConditionalLabeling"
description: "abstract class ConditionalLabeling in Alta.Attributes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConditionalLabeling

An **abstract class** in `Alta.Attributes`, no namespace.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`
- **Derived types** [`BoolValueLabeling`](/game-api/types/assembly-other/boolvaluelabeling), [`HasComponentLabel`](/game-api/types/assembly-other/hascomponentlabel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConditionalLabeling(string hasName, string dontHasName)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"ConditionalLabeling(string hasName, string dontHasName, float hasDefaultValue, float dontHasDefaultValue)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-donthasdefault" /><code>{"float DontHasDefault { get; private set; }"}</code> |  |
| <Link id="m-donthasname" /><code>{"string DontHasName { get; private set; }"}</code> |  |
| <Link id="m-hasdefault" /><code>{"float HasDefault { get; private set; }"}</code> |  |
| <Link id="m-hasdefaultvalues" /><code>{"bool HasDefaultValues { get; private set; }"}</code> |  |
| <Link id="m-hasname" /><code>{"string HasName { get; private set; }"}</code> |  |
