---
title: "FloatRangeSettings"
description: "Property attribute that stores a min and max for an inspector float range."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FloatRangeSettings

A **class** in `Alta.Attributes`, the global namespace.

Property attribute that stores a min and max for an inspector float range.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FloatRangeSettings(float min, float max, bool hasValues = true)"}</code> | <span className="api-desc">Creates a `FloatRangeSettings` from `min`, `max` and `hasValues`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasvalues" /><code>{"bool HasValues { get; private set; }"}</code> | <span className="api-desc">Whether min and max were given. Defaults to true.</span> |
| <Link id="m-max" /><code>{"float Max { get; private set; }"}</code> | <span className="api-desc">Upper limit.</span> |
| <Link id="m-min" /><code>{"float Min { get; private set; }"}</code> | <span className="api-desc">Lower limit.</span> |
