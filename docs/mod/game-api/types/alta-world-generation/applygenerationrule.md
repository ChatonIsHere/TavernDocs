---
title: "ApplyGenerationRule"
description: "PAGaC generation step that runs a set of GenerationRules over the generator's tag grid."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplyGenerationRule

A **class** in `Root.Township`, `Alta.PAGaC`.

PAGaC generation step that runs a set of `GenerationRule`s over the generator's tag grid.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GenerationStep`](/mod/game-api/types/alta-world-generation/generationstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApplyGenerationRule()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generationrules" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generationrule">{"GenerationRule"}</Link>{"[] generationRules"}</code> | <span className="api-desc">The rules to apply.</span> |
| <Link id="m-isrepeatinguntilnone" /><code>{"private bool isRepeatingUntilNone"}</code> | <span className="api-desc">If set, repeats the pass until no rule matches.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase)"}</code> | <span className="api-desc">Applies the rules once, or keeps applying them until a pass makes no changes when `isRepeatingUntilNone` is set.</span> |
