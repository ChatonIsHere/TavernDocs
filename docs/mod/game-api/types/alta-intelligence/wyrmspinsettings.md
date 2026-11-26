---
title: "WyrmSpinSettings"
description: "Wyrm action component for the spin action, with range and target weighting for ActiveSpin."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WyrmSpinSettings

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Wyrm action component for the spin action, with range and target weighting for `ActiveSpin`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveSpin`](/mod/game-api/types/alta-intelligence/activespin)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WyrmSpinSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changetargetmultiplier" /><code>{"private float changeTargetMultiplier"}</code> | <span className="api-desc">Backing field for `ChangeTargetMultiplier`.</span> |
| <Link id="m-hurtweighting" /><code>{"private float hurtWeighting"}</code> | <span className="api-desc">Backing field for `HurtWeighting`.</span> |
| <Link id="m-maximumrange" /><code>{"private float maximumRange"}</code> | <span className="api-desc">Backing field for `MaximumRange`.</span> |
| <Link id="m-sametargetmultiplier" /><code>{"private float sameTargetMultiplier"}</code> | <span className="api-desc">Backing field for `SameTargetMultiplier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changetargetmultiplier-2" /><code>{"float ChangeTargetMultiplier { get; }"}</code> | <span className="api-desc">Score multiplier when the target is not the wyrm's current one (default 0.1).</span> |
| <Link id="m-hurtweighting-2" /><code>{"float HurtWeighting { get; }"}</code> | <span className="api-desc">Weight of the hurt sense when scoring targets.</span> |
| <Link id="m-maximumrange-2" /><code>{"float MaximumRange { get; }"}</code> | <span className="api-desc">Distance beyond which a target scores zero (default 20).</span> |
| <Link id="m-sametargetmultiplier-2" /><code>{"float SameTargetMultiplier { get; }"}</code> | <span className="api-desc">Score multiplier when the target is the wyrm's current one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Returns the `ActiveSpin` action for these settings.</span> |

## Used in

Members of other types that take, return or hold a `WyrmSpinSettings`:

<div className="api-used-in">

[`ActiveSpin.GetAction`](/mod/game-api/types/alta-intelligence/activespin#m-getaction).

</div>
