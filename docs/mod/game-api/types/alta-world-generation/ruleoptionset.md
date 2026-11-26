---
title: "RuleOptionSet"
description: "A PAGaC asset tying a rule to the parts it can place."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RuleOptionSet

A **class** in `Root.Township`, `Alta.PAGaC`.

A PAGaC asset tying a rule to the parts it can place. Each part, and each nested option set, is rolled against its weight.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RuleOptionSet()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isweightingindividual" /><code>{"private bool isWeightingIndividual"}</code> | <span className="api-desc">Backing field for `IsWeightingIndividual`.</span> |
| <Link id="m-lockmode" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" lockMode"}</code> | <span className="api-desc">Backing field for `LockMode`.</span> |
| <Link id="m-parts" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/partchance">{"PartChance"}</Link>{"[] parts"}</code> | <span className="api-desc">Parts with their chances.</span> |
| <Link id="m-rule" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" rule"}</code> | <span className="api-desc">Backing field for `Rule`.</span> |
| <Link id="m-ruleoptionsets" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/ruleoptionsetchance">{"RuleOptionSetChance"}</Link>{"[] ruleOptionSets"}</code> | <span className="api-desc">Nested option sets with their chances.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isweightingindividual-2" /><code>{"bool IsWeightingIndividual { get; }"}</code> | <span className="api-desc">Serialized flag; not read anywhere in this build.</span> |
| <Link id="m-lockmode-2" /><code><Link to="/mod/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" { get; }"}</code> | <span className="api-desc">The lock mode set on the asset; not read anywhere in this build.</span> |
| <Link id="m-rule-2" /><code><Link to="/mod/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" { get; }"}</code> | <span className="api-desc">The rule these options apply to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"void Evaluate(List<"}<Link to="/mod/game-api/types/alta-world-generation/part">{"Part"}</Link>{"> results)"}</code> | <span className="api-desc">Adds each part that passes its random weight roll to the list, then evaluates nested option sets that pass theirs.</span> |

## Used in

Members of other types that take, return or hold a `RuleOptionSet`:

<div className="api-used-in">

[`RuleOptionSetChance.ruleOptionSet`](/mod/game-api/types/alta-world-generation/ruleoptionsetchance#m-ruleoptionset), [`RuleOptionSetChance.RuleOptionSet`](/mod/game-api/types/alta-world-generation/ruleoptionsetchance#m-ruleoptionset-2).

</div>
