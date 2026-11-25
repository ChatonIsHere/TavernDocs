---
title: "OptionSet"
description: "class OptionSet in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptionSet

A **class** in `Root.Township`, `Alta.PAGaC`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptionSet()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isweightingindividual" /><code>{"private bool isWeightingIndividual"}</code> |  |
| <Link id="m-lockmode" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" lockMode"}</code> |  |
| <Link id="m-optionsets" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/optionsetchance">{"OptionSetChance"}</Link>{"[] optionSets"}</code> |  |
| <Link id="m-parts" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/partchance">{"PartChance"}</Link>{"[] parts"}</code> |  |
| <Link id="m-ruleoptionsets" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/ruleoptionsetchance">{"RuleOptionSetChance"}</Link>{"[] ruleOptionSets"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isweightingindividual-2" /><code>{"bool IsWeightingIndividual { get; }"}</code> |  |
| <Link id="m-lockmode-2" /><code><Link to="/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"void Evaluate(List<"}<Link to="/game-api/types/alta-world-generation/part">{"Part"}</Link>{"> results)"}</code> |  |

## Used in

Members of other types that take, return or hold a `OptionSet`:

[`Constructor.Generate`](/game-api/types/alta-world-generation/constructor#m-generate), [`Constructor.optionSet`](/game-api/types/alta-world-generation/constructor#m-optionset), [`GenerationBase.optionSet`](/game-api/types/alta-world-generation/generationbase-alta-pagac#m-optionset), [`OptionSetChance.optionSet`](/game-api/types/alta-world-generation/optionsetchance#m-optionset), [`OptionSetChance.OptionSet`](/game-api/types/alta-world-generation/optionsetchance#m-optionset-2), [`Test.optionSet`](/game-api/types/alta-world-generation/test#m-optionset).
