---
title: "GenerationRule.Step"
description: "What a GenerationRule step does to each cell: set it to a tag, remove listed tags, or clear it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationRule.Step

An **enum** in `Root.Township`, `Alta.PAGaC`.

What a `GenerationRule` step does to each cell: set it to a tag, remove listed tags, or clear it.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`GenerationRule`](/mod/game-api/types/alta-world-generation/generationrule)

## Values

| Member |
| --- |
| <Link id="m-clear" /><code>{"Clear = 2"}</code> |
| <Link id="m-remove" /><code>{"Remove = 1"}</code> |
| <Link id="m-set" /><code>{"Set = 0"}</code> |

## Used in

Members of other types that take, return or hold a `Step`:

[`GenerationRule.steps`](/mod/game-api/types/alta-world-generation/generationrule#m-steps), [`GenerationRule.Steps`](/mod/game-api/types/alta-world-generation/generationrule#m-steps-2).
