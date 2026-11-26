---
title: "OptionSetChance"
description: "An OptionSet with a chance to run, used in an OptionSet's list of sub-sets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptionSetChance

A **class** in `Root.Township`, `Alta.PAGaC`.

An `OptionSet` with a chance to run, used in an `OptionSet`'s list of sub-sets.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptionSetChance()"}</code> | <span className="api-desc">Creates an `OptionSetChance` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-optionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" optionSet"}</code> | <span className="api-desc">Backing field for `OptionSet`.</span> |
| <Link id="m-weight" /><code>{"private float weight"}</code> | <span className="api-desc">Backing field for `Weight`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-optionset-2" /><code><Link to="/mod/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" { get; }"}</code> | <span className="api-desc">The option set to evaluate.</span> |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | <span className="api-desc">Chance from 0 to 1 that the set is evaluated (default 1).</span> |

## Used in

Members of other types that take, return or hold a `OptionSetChance`:

<div className="api-used-in">

[`OptionSet.optionSets`](/mod/game-api/types/alta-world-generation/optionset#m-optionsets).

</div>
