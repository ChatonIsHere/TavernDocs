---
title: "BaseStatisticsMeasurer"
description: "Running statistics for a series of float values: sum, count, average, min and max."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseStatisticsMeasurer

A **class** in `Root.Township`, the global namespace.

Running statistics for a series of float values: sum, count, average, min and max. Subclasses can react to each value.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BaseStatisticsMeasurer()"}</code> | <span className="api-desc">Creates a `BaseStatisticsMeasurer` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-average" /><code>{"float Average { get; }"}</code> | <span className="api-desc">Sum divided by count (NaN before any value).</span> |
| <Link id="m-count" /><code>{"int Count { get; private set; }"}</code> | <span className="api-desc">How many values were added.</span> |
| <Link id="m-max" /><code>{"float Max { get; private set; }"}</code> | <span className="api-desc">Largest value so far (`float.MinValue` before any).</span> |
| <Link id="m-min" /><code>{"float Min { get; private set; }"}</code> | <span className="api-desc">Smallest value so far (`float.MaxValue` before any).</span> |
| <Link id="m-sum" /><code>{"float Sum { get; private set; }"}</code> | <span className="api-desc">Total of all values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addvalue" /><code>{"void AddValue(float value)"}</code> | <span className="api-desc">Adds a value, updates the totals and limits, then calls `OnValueAdded`.</span> |
| <Link id="m-onvalueadded" /><code>{"protected virtual void OnValueAdded(float value)"}</code> | <span className="api-desc">Hook for subclasses, called after each value. Empty here.</span> |
