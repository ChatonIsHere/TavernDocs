---
title: "CleanRange"
description: "Inspector attribute for a range slider on a number field, with an optional line under it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CleanRange

A **class** in `Alta.Attributes`, no namespace.

Inspector attribute for a range slider on a number field, with an optional line under it.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CleanRange(float min, float max, bool hasLine = false, float lineHeight = 0)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasline" /><code>{"bool HasLine { get; private set; }"}</code> | Whether to draw a line with the slider. |
| <Link id="m-lineheight" /><code>{"float LineHeight { get; private set; }"}</code> | Height of that line. |
| <Link id="m-max" /><code>{"float Max { get; private set; }"}</code> | Highest value on the slider. |
| <Link id="m-min" /><code>{"float Min { get; private set; }"}</code> | Lowest value on the slider. |
