---
title: "WyrmMeleeSettings"
description: "class WyrmMeleeSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WyrmMeleeSettings

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveMeleeAttack`](/game-api/types/alta-intelligence/activemeleeattack)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WyrmMeleeSettings()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-changetargetmultiplier" /><code>{"private float changeTargetMultiplier"}</code> |
| <Link id="m-flurryattacktriggers" /><code>{"private string[] flurryAttackTriggers"}</code> |
| <Link id="m-flurrychanceperattack" /><code>{"private float flurryChancePerAttack"}</code> |
| <Link id="m-hurtweighting" /><code>{"private float hurtWeighting"}</code> |
| <Link id="m-normalattacktriggers" /><code>{"private string[] normalAttackTriggers"}</code> |
| <Link id="m-reach" /><code>{"private float reach"}</code> |
| <Link id="m-sametargetmultiplier" /><code>{"private float sameTargetMultiplier"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-changetargetmultiplier-2" /><code>{"float ChangeTargetMultiplier { get; }"}</code> |
| <Link id="m-flurrychanceperattack-2" /><code>{"float FlurryChancePerAttack { get; }"}</code> |
| <Link id="m-hurtweighting-2" /><code>{"float HurtWeighting { get; }"}</code> |
| <Link id="m-reach-2" /><code>{"float Reach { get; }"}</code> |
| <Link id="m-sametargetmultiplier-2" /><code>{"float SameTargetMultiplier { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getrandomattack" /><code>{"string GetRandomAttack(bool isFlurry)"}</code> |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> |

## Used in

Members of other types that take, return or hold a `WyrmMeleeSettings`:

[`ActiveMeleeAttack.GetAction`](/game-api/types/alta-intelligence/activemeleeattack#m-getaction).
