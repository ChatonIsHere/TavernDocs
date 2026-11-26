---
title: "Constructor"
description: "PAGaC's matcher: finds where rules fit in a 3D tag grid (in all four rotations) and either rewrites the tags or spawns prefabs for matching parts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Constructor

A **class** in `Root.Township`, `Alta.PAGaC`.

PAGaC's matcher: finds where rules fit in a 3D tag grid (in all four rotations) and either rewrites the tags or spawns prefabs for matching parts.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested types** [`PlaceFound<T>`](/mod/game-api/types/alta-world-generation/constructor-placefound-t), [`PlacingData<T>`](/mod/game-api/types/alta-world-generation/constructor-placingdata-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Constructor("}<Link to="/mod/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator)"}</code> | <span className="api-desc">Creates a `Constructor` from `tags`.</span> |
| <Link id="m-ctor-2" /><code>{"Constructor("}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[,,] tags)"}</code> | <span className="api-desc">Creates a `Constructor` from `tags`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generator" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator"}</code> | <span className="api-desc">The generator whose cells are also updated by `Apply`. Null when built from a plain tag array, so `Apply` needs the generator constructor.</span> |
| <Link id="m-optionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" optionSet"}</code> | <span className="api-desc">The option set passed to the last `Generate`.</span> |
| <Link id="m-sizex" /><code>{"private int sizeX"}</code> | <span className="api-desc">Grid width.</span> |
| <Link id="m-sizey" /><code>{"private int sizeY"}</code> | <span className="api-desc">Grid height.</span> |
| <Link id="m-sizez" /><code>{"private int sizeZ"}</code> | <span className="api-desc">Grid depth.</span> |
| <Link id="m-tags" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[,,] tags"}</code> | <span className="api-desc">The working tag grid.</span> |
| <Link id="m-usedrulerotations" /><code>{"private List<int>[,,] usedRuleRotations"}</code> | <span className="api-desc">Per cell, the rotation each placed rule used.</span> |
| <Link id="m-usedrules" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/rulebase">{"RuleBase"}</Link>{">[,,] usedRules"}</code> | <span className="api-desc">Per cell, the rules already placed there, used to stop duplicate overlaps.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"int Apply("}<Link to="/mod/game-api/types/alta-world-generation/generationrule">{"GenerationRule"}</Link>{"[] rules)"}</code> | <span className="api-desc">Matches each `GenerationRule` against the grid and runs its Set, Remove and Clear steps at every match. Returns the number of matches.</span> |
| <Link id="m-generate" /><code>{"GameObject Generate("}<Link to="/mod/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" optionSet)"}</code> | <span className="api-desc">Evaluates the option set into parts and instantiates each part's prefab wherever its rule matches, under a new "Result" object.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkplace" /><code>{"private void CheckPlace<T>(int x, int y, T part, "}<Link to="/mod/game-api/types/alta-world-generation/rulebase">{"RuleBase"}</Link>{" rule, int configuration, int xxMultiplier, int xzMultiplier, int zxMultiplier, int zzMultiplier, "}<Link to="/mod/game-api/types/alta-world-generation/constructor-placefound-t">{"Constructor.PlaceFound"}</Link>{"<T> foundCallback)"}</code> | <span className="api-desc">Tests a rule at each Z position for a given X, Y and rotation, honouring the rule's rotation overlap setting, and calls back on each fit.</span> |
| <Link id="m-createdata" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/constructor-placingdata-t">{"Constructor.PlacingData"}</Link>{"<T> CreateData<T>(T part, "}<Link to="/mod/game-api/types/alta-world-generation/rulebase">{"RuleBase"}</Link>{" rule, List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> tags)"}</code> | <span className="api-desc">Builds bitmask data for each rule configuration, so `HandlePart` can rule out positions quickly. Returns null if nothing can match.</span> |
| <Link id="m-getcompressed" /><code>{"private void GetCompressed(List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> tags, out ulong[,] zCompressed, out ulong[] xzCompressed)"}</code> | <span className="api-desc">Packs which tags appear in each X column and Y layer into 64-bit masks for fast rejection.</span> |
| <Link id="m-getusedtags" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> GetUsedTags()"}</code> | <span className="api-desc">Lists the distinct tags present in the grid.</span> |
| <Link id="m-handlepart" /><code>{"private void HandlePart<T>("}<Link to="/mod/game-api/types/alta-world-generation/constructor-placingdata-t">{"Constructor.PlacingData"}</Link>{"<T> data, "}<Link to="/mod/game-api/types/alta-world-generation/rulebase">{"RuleBase"}</Link>{" rule, ulong[,] zCompressed, ulong[] xzCompressed, "}<Link to="/mod/game-api/types/alta-world-generation/constructor-placefound-t">{"Constructor.PlaceFound"}</Link>{"<T> foundCallback)"}</code> | <span className="api-desc">Scans layers and rotations with the bitmasks and passes possible positions to `CheckPlace`.</span> |
| <Link id="m-prepareusedrules" /><code>{"private void PrepareUsedRules()"}</code> | <span className="api-desc">Resets the per-cell lists of rules and rotations already placed.</span> |

</details>
