---
title: "IDistributionValue"
description: "A distribution topic that scales its own weight from an attribute set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDistributionValue

An **interface** in `Root.Township`, `Alta.Caves`.

A distribution topic that scales its own weight from an attribute set.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`GenerationCore`](/mod/game-api/types/global-e-h/generationcore)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"float Evaluate("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" set)"}</code> | <span className="api-desc">Returns a multiplier for the entry's weight given the attributes; 0 or less removes it from the draw.</span> |
