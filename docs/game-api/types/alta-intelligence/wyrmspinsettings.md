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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveSpin`](/game-api/types/alta-intelligence/activespin)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WyrmSpinSettings()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changetargetmultiplier" /><code>{"private float changeTargetMultiplier"}</code> | Backing field for `ChangeTargetMultiplier`. |
| <Link id="m-hurtweighting" /><code>{"private float hurtWeighting"}</code> | Backing field for `HurtWeighting`. |
| <Link id="m-maximumrange" /><code>{"private float maximumRange"}</code> | Backing field for `MaximumRange`. |
| <Link id="m-sametargetmultiplier" /><code>{"private float sameTargetMultiplier"}</code> | Backing field for `SameTargetMultiplier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changetargetmultiplier-2" /><code>{"float ChangeTargetMultiplier { get; }"}</code> | Score multiplier when the target is not the wyrm's current one (default 0.1). |
| <Link id="m-hurtweighting-2" /><code>{"float HurtWeighting { get; }"}</code> | Weight of the hurt sense when scoring targets. |
| <Link id="m-maximumrange-2" /><code>{"float MaximumRange { get; }"}</code> | Distance beyond which a target scores zero (default 20). |
| <Link id="m-sametargetmultiplier-2" /><code>{"float SameTargetMultiplier { get; }"}</code> | Score multiplier when the target is the wyrm's current one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Returns the `ActiveSpin` action for these settings. |

## Used in

Members of other types that take, return or hold a `WyrmSpinSettings`:

[`ActiveSpin.GetAction`](/game-api/types/alta-intelligence/activespin#m-getaction).
