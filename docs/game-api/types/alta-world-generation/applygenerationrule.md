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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GenerationStep`](/game-api/types/alta-world-generation/generationstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApplyGenerationRule()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generationrules" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/generationrule">{"GenerationRule"}</Link>{"[] generationRules"}</code> | The rules to apply. |
| <Link id="m-isrepeatinguntilnone" /><code>{"private bool isRepeatingUntilNone"}</code> | If set, repeats the pass until no rule matches. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase)"}</code> | Applies the rules once, or keeps applying them until a pass makes no changes when `isRepeatingUntilNone` is set. |
