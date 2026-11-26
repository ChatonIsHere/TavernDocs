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

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OptionSetChance()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-optionset" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" optionSet"}</code> | Backing field for `OptionSet`. |
| <Link id="m-weight" /><code>{"private float weight"}</code> | Backing field for `Weight`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-optionset-2" /><code><Link to="/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" { get; }"}</code> | The option set to evaluate. |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | Chance from 0 to 1 that the set is evaluated (default 1). |

## Used in

Members of other types that take, return or hold a `OptionSetChance`:

[`OptionSet.optionSets`](/game-api/types/alta-world-generation/optionset#m-optionsets).
