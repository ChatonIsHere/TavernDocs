---
title: "RuleOptionSetChance"
description: "A nested RuleOptionSet with a 0 to 1 chance of being evaluated."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RuleOptionSetChance

A **class** in `Root.Township`, `Alta.PAGaC`.

A nested `RuleOptionSet` with a 0 to 1 chance of being evaluated.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RuleOptionSetChance()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ruleoptionset" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/ruleoptionset">{"RuleOptionSet"}</Link>{" ruleOptionSet"}</code> | Backing field for `RuleOptionSet`. |
| <Link id="m-weight" /><code>{"private float weight"}</code> | Backing field for `Weight`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ruleoptionset-2" /><code><Link to="/game-api/types/alta-world-generation/ruleoptionset">{"RuleOptionSet"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/ruleoptionset">{"RuleOptionSet"}</Link>{" { get; }"}</code> | The option set that may be evaluated. |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | Chance from 0 to 1 that it is evaluated (default 1). |

## Used in

Members of other types that take, return or hold a `RuleOptionSetChance`:

[`OptionSet.ruleOptionSets`](/game-api/types/alta-world-generation/optionset#m-ruleoptionsets), [`RuleOptionSet.ruleOptionSets`](/game-api/types/alta-world-generation/ruleoptionset#m-ruleoptionsets).
