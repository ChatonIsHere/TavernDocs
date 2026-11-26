---
title: "CleanRange"
description: "Inspector attribute for a range slider on a number field, with an optional line under it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CleanRange

A **class** in `Alta.Attributes`, the global namespace.

Inspector attribute for a range slider on a number field, with an optional line under it.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CleanRange(float min, float max, bool hasLine = false, float lineHeight = 0)"}</code> | <span className="api-desc">Creates a `CleanRange` from `min`, `max`, `hasLine` and `lineHeight`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasline" /><code>{"bool HasLine { get; private set; }"}</code> | <span className="api-desc">Whether to draw a line with the slider.</span> |
| <Link id="m-lineheight" /><code>{"float LineHeight { get; private set; }"}</code> | <span className="api-desc">Height of that line.</span> |
| <Link id="m-max" /><code>{"float Max { get; private set; }"}</code> | <span className="api-desc">Highest value on the slider.</span> |
| <Link id="m-min" /><code>{"float Min { get; private set; }"}</code> | <span className="api-desc">Lowest value on the slider.</span> |
