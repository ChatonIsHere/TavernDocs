---
title: "OptionSet"
description: "A weighted set of parts for procedural generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptionSet

A **class** in `Root.Township`, `Alta.PAGaC`.

A weighted set of parts for procedural generation. Evaluating it rolls each part and nested set by its own chance.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptionSet()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isweightingindividual" /><code>{"private bool isWeightingIndividual"}</code> | <span className="api-desc">Backing field for `IsWeightingIndividual`.</span> |
| <Link id="m-lockmode" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" lockMode"}</code> | <span className="api-desc">Backing field for `LockMode`.</span> |
| <Link id="m-optionsets" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/optionsetchance">{"OptionSetChance"}</Link>{"[] optionSets"}</code> | <span className="api-desc">Nested option sets, each with a chance to be evaluated.</span> |
| <Link id="m-parts" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/partchance">{"PartChance"}</Link>{"[] parts"}</code> | <span className="api-desc">Parts, each with a chance to be added.</span> |
| <Link id="m-ruleoptionsets" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/ruleoptionsetchance">{"RuleOptionSetChance"}</Link>{"[] ruleOptionSets"}</code> | <span className="api-desc">Rule option sets, each with a chance to be evaluated.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isweightingindividual-2" /><code>{"bool IsWeightingIndividual { get; }"}</code> | <span className="api-desc">Flag from the asset; not read by `Evaluate`.</span> |
| <Link id="m-lockmode-2" /><code><Link to="/mod/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" { get; }"}</code> | <span className="api-desc">The set's lock mode (Building by default); not read by `Evaluate`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"void Evaluate(List<"}<Link to="/mod/game-api/types/alta-world-generation/part">{"Part"}</Link>{"> results)"}</code> | <span className="api-desc">Rolls each nested set, part and rule set against its weight and adds the picked parts to the list.</span> |

## Used in

Members of other types that take, return or hold a `OptionSet`:

<div className="api-used-in">

[`Constructor.Generate`](/mod/game-api/types/alta-world-generation/constructor#m-generate), [`Constructor.optionSet`](/mod/game-api/types/alta-world-generation/constructor#m-optionset), [`GenerationBase.optionSet`](/mod/game-api/types/alta-world-generation/generationbase-alta-pagac#m-optionset), [`OptionSetChance.optionSet`](/mod/game-api/types/alta-world-generation/optionsetchance#m-optionset), [`OptionSetChance.OptionSet`](/mod/game-api/types/alta-world-generation/optionsetchance#m-optionset-2), [`Test.optionSet`](/mod/game-api/types/alta-world-generation/test#m-optionset).

</div>
