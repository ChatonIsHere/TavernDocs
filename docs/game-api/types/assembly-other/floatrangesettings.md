---
title: "FloatRangeSettings"
description: "Property attribute that stores a min and max for an inspector float range."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FloatRangeSettings

A **class** in `Alta.Attributes`, no namespace.

Property attribute that stores a min and max for an inspector float range.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FloatRangeSettings(float min, float max, bool hasValues = true)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasvalues" /><code>{"bool HasValues { get; private set; }"}</code> | Whether min and max were given. Defaults to true. |
| <Link id="m-max" /><code>{"float Max { get; private set; }"}</code> | Upper limit. |
| <Link id="m-min" /><code>{"float Min { get; private set; }"}</code> | Lower limit. |
