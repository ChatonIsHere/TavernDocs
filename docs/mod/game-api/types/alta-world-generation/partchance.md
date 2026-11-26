---
title: "PartChance"
description: "A PAGaC part with a 0 to 1 chance of being picked, used in RuleOptionSet and option set lists."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PartChance

A **class** in `Root.Township`, `Alta.PAGaC`.

A PAGaC part with a 0 to 1 chance of being picked, used in `RuleOptionSet` and option set lists.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PartChance()"}</code> | <span className="api-desc">Creates a `PartChance` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-part" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/part">{"Part"}</Link>{" part"}</code> | <span className="api-desc">Backing field for `Part`.</span> |
| <Link id="m-weight" /><code>{"private float weight"}</code> | <span className="api-desc">Backing field for `Weight`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-part-2" /><code><Link to="/mod/game-api/types/alta-world-generation/part">{"Part"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/part">{"Part"}</Link>{" { get; }"}</code> | <span className="api-desc">The part that may be added.</span> |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | <span className="api-desc">Chance from 0 to 1 that the part is added (default 1).</span> |

## Used in

Members of other types that take, return or hold a `PartChance`:

<div className="api-used-in">

[`OptionSet.parts`](/mod/game-api/types/alta-world-generation/optionset#m-parts), [`RuleOptionSet.parts`](/mod/game-api/types/alta-world-generation/ruleoptionset#m-parts).

</div>
