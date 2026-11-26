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

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PartChance()"}</code> | Creates a `PartChance` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-part" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/part">{"Part"}</Link>{" part"}</code> | Backing field for `Part`. |
| <Link id="m-weight" /><code>{"private float weight"}</code> | Backing field for `Weight`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-part-2" /><code><Link to="/game-api/types/alta-world-generation/part">{"Part"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/part">{"Part"}</Link>{" { get; }"}</code> | The part that may be added. |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | Chance from 0 to 1 that the part is added (default 1). |

## Used in

Members of other types that take, return or hold a `PartChance`:

[`OptionSet.parts`](/game-api/types/alta-world-generation/optionset#m-parts), [`RuleOptionSet.parts`](/game-api/types/alta-world-generation/ruleoptionset#m-parts).
