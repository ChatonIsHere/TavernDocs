---
title: "Constructor"
description: "class Constructor in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Constructor

A **class** in `Root.Township`, `Alta.PAGaC`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested types** [`PlaceFound<T>`](/game-api/types/alta-world-generation/constructor-placefound-t), [`PlacingData<T>`](/game-api/types/alta-world-generation/constructor-placingdata-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Constructor("}<Link to="/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"Constructor("}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[,,] tags)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-generator" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator"}</code> |  |
| <Link id="m-optionset" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" optionSet"}</code> |  |
| <Link id="m-sizex" /><code>{"private int sizeX"}</code> |  |
| <Link id="m-sizey" /><code>{"private int sizeY"}</code> |  |
| <Link id="m-sizez" /><code>{"private int sizeZ"}</code> |  |
| <Link id="m-tags" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[,,] tags"}</code> |  |
| <Link id="m-usedrulerotations" /><code>{"private List<int>[,,] usedRuleRotations"}</code> |  |
| <Link id="m-usedrules" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/rulebase">{"RuleBase"}</Link>{">[,,] usedRules"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"int Apply("}<Link to="/game-api/types/alta-world-generation/generationrule">{"GenerationRule"}</Link>{"[] rules)"}</code> |  |
| <Link id="m-generate" /><code>{"GameObject Generate("}<Link to="/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" optionSet)"}</code> |  |
| <Link id="m-checkplace" /><code>{"private void CheckPlace<T>(int x, int y, T part, "}<Link to="/game-api/types/alta-world-generation/rulebase">{"RuleBase"}</Link>{" rule, int configuration, int xxMultiplier, int xzMultiplier, int zxMultiplier, int zzMultiplier, "}<Link to="/game-api/types/alta-world-generation/constructor-placefound-t">{"Constructor.PlaceFound"}</Link>{"<T> foundCallback)"}</code> |  |
| <Link id="m-createdata" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/constructor-placingdata-t">{"Constructor.PlacingData"}</Link>{"<T> CreateData<T>(T part, "}<Link to="/game-api/types/alta-world-generation/rulebase">{"RuleBase"}</Link>{" rule, List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> tags)"}</code> |  |
| <Link id="m-getcompressed" /><code>{"private void GetCompressed(List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> tags, out ulong[,] zCompressed, out ulong[] xzCompressed)"}</code> |  |
| <Link id="m-getusedtags" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> GetUsedTags()"}</code> |  |
| <Link id="m-handlepart" /><code>{"private void HandlePart<T>("}<Link to="/game-api/types/alta-world-generation/constructor-placingdata-t">{"Constructor.PlacingData"}</Link>{"<T> data, "}<Link to="/game-api/types/alta-world-generation/rulebase">{"RuleBase"}</Link>{" rule, ulong[,] zCompressed, ulong[] xzCompressed, "}<Link to="/game-api/types/alta-world-generation/constructor-placefound-t">{"Constructor.PlaceFound"}</Link>{"<T> foundCallback)"}</code> |  |
| <Link id="m-prepareusedrules" /><code>{"private void PrepareUsedRules()"}</code> |  |
