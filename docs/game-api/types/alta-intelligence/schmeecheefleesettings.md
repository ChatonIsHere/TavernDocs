---
title: "SchmeecheeFleeSettings"
description: "Settings for ActiveSchmeecheeFlee: a schmeechee steers and pushes itself away from its target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SchmeecheeFleeSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveSchmeecheeFlee`: a schmeechee steers and pushes itself away from its target. Server only.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveSchmeecheeFlee`](/game-api/types/alta-intelligence/activeschmeecheeflee)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SchmeecheeFleeSettings()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-giveupdistancesquared" /><code>{"private float giveUpDistanceSquared"}</code> | Backing field for `GiveUpDistanceSquared` (default 25, so 5 m). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-giveupdistancesquared-2" /><code>{"float GiveUpDistanceSquared { get; }"}</code> | The flee finishes once the target is further than this squared distance. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveSchmeecheeFlee` action for schmeechees, using a target. |
