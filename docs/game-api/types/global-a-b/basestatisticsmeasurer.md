---
title: "BaseStatisticsMeasurer"
description: "Running statistics for a series of float values: sum, count, average, min and max."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseStatisticsMeasurer

A **class** in `Root.Township`, no namespace.

Running statistics for a series of float values: sum, count, average, min and max. Subclasses can react to each value.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BaseStatisticsMeasurer()"}</code> | Creates a `BaseStatisticsMeasurer` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-average" /><code>{"float Average { get; }"}</code> | Sum divided by count (NaN before any value). |
| <Link id="m-count" /><code>{"int Count { get; private set; }"}</code> | How many values were added. |
| <Link id="m-max" /><code>{"float Max { get; private set; }"}</code> | Largest value so far (`float.MinValue` before any). |
| <Link id="m-min" /><code>{"float Min { get; private set; }"}</code> | Smallest value so far (`float.MaxValue` before any). |
| <Link id="m-sum" /><code>{"float Sum { get; private set; }"}</code> | Total of all values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addvalue" /><code>{"void AddValue(float value)"}</code> | Adds a value, updates the totals and limits, then calls `OnValueAdded`. |
| <Link id="m-onvalueadded" /><code>{"protected virtual void OnValueAdded(float value)"}</code> | Hook for subclasses, called after each value. Empty here. |
