---
title: "AttributeEvaluation"
description: "Static extension for scoring an AttributeSet against a list of AttributeCurveRange weightings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttributeEvaluation

A **static class** in `Root.Township`, no namespace.

Static extension for scoring an `AttributeSet` against a list of `AttributeCurveRange` weightings.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getefficiency" /><code>{"static float GetEfficiency(IEnumerable<"}<Link to="/game-api/types/global-a-b/attributecurverange">{"AttributeCurveRange"}</Link>{"> attributeWeightings, "}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes)"}</code> | Evaluates each range's curve at the attribute's position in the range and returns their harmonic mean. Any zero gives 0; no valid ranges gives 1. |
