---
title: "IRiverVisual"
description: "Something that builds visuals for a generated river, such as meshes (RiverMeshTest) or waterfall effects (WaterfallEffectGenerator)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRiverVisual

An **interface** in `Root.Township`, `Alta.Forests`.

Something that builds visuals for a generated river, such as meshes (`RiverMeshTest`) or waterfall effects (`WaterfallEffectGenerator`).

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`RiverMeshTest`](/mod/game-api/types/alta-world-generation/rivermeshtest), [`WaterfallEffectGenerator`](/mod/game-api/types/alta-world-generation/waterfalleffectgenerator)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"void Generate("}<Link to="/mod/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" generation)"}</code> | <span className="api-desc">Builds the visuals for the given river generation.</span> |
