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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveSchmeecheeFlee`](/mod/game-api/types/alta-intelligence/activeschmeecheeflee)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SchmeecheeFleeSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-giveupdistancesquared" /><code>{"private float giveUpDistanceSquared"}</code> | <span className="api-desc">Backing field for `GiveUpDistanceSquared` (default 25, so 5 m).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-giveupdistancesquared-2" /><code>{"float GiveUpDistanceSquared { get; }"}</code> | <span className="api-desc">The flee finishes once the target is further than this squared distance.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the shared `ActiveSchmeecheeFlee` action for schmeechees, using a target.</span> |
