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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RuleOptionSet()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isweightingindividual" /><code>{"private bool isWeightingIndividual"}</code> | Backing field for `IsWeightingIndividual`. |
| <Link id="m-lockmode" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" lockMode"}</code> | Backing field for `LockMode`. |
| <Link id="m-parts" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/partchance">{"PartChance"}</Link>{"[] parts"}</code> | Parts with their chances. |
| <Link id="m-rule" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" rule"}</code> | Backing field for `Rule`. |
| <Link id="m-ruleoptionsets" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/ruleoptionsetchance">{"RuleOptionSetChance"}</Link>{"[] ruleOptionSets"}</code> | Nested option sets with their chances. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isweightingindividual-2" /><code>{"bool IsWeightingIndividual { get; }"}</code> | Serialized flag; not read anywhere in this build. |
| <Link id="m-lockmode-2" /><code><Link to="/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/lockmode">{"LockMode"}</Link>{" { get; }"}</code> | The lock mode set on the asset; not read anywhere in this build. |
| <Link id="m-rule-2" /><code><Link to="/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" { get; }"}</code> | The rule these options apply to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"void Evaluate(List<"}<Link to="/game-api/types/alta-world-generation/part">{"Part"}</Link>{"> results)"}</code> | Adds each part that passes its random weight roll to the list, then evaluates nested option sets that pass theirs. |

## Used in

Members of other types that take, return or hold a `RuleOptionSet`:

[`RuleOptionSetChance.ruleOptionSet`](/game-api/types/alta-world-generation/ruleoptionsetchance#m-ruleoptionset), [`RuleOptionSetChance.RuleOptionSet`](/game-api/types/alta-world-generation/ruleoptionsetchance#m-ruleoptionset-2).
