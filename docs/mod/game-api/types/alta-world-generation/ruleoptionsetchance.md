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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RuleOptionSetChance()"}</code> | <span className="api-desc">Creates a `RuleOptionSetChance` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ruleoptionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/ruleoptionset">{"RuleOptionSet"}</Link>{" ruleOptionSet"}</code> | <span className="api-desc">Backing field for `RuleOptionSet`.</span> |
| <Link id="m-weight" /><code>{"private float weight"}</code> | <span className="api-desc">Backing field for `Weight`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ruleoptionset-2" /><code><Link to="/mod/game-api/types/alta-world-generation/ruleoptionset">{"RuleOptionSet"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/ruleoptionset">{"RuleOptionSet"}</Link>{" { get; }"}</code> | <span className="api-desc">The option set that may be evaluated.</span> |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | <span className="api-desc">Chance from 0 to 1 that it is evaluated (default 1).</span> |

## Used in

Members of other types that take, return or hold a `RuleOptionSetChance`:

<div className="api-used-in">

[`OptionSet.ruleOptionSets`](/mod/game-api/types/alta-world-generation/optionset#m-ruleoptionsets), [`RuleOptionSet.ruleOptionSets`](/mod/game-api/types/alta-world-generation/ruleoptionset#m-ruleoptionsets).

</div>
