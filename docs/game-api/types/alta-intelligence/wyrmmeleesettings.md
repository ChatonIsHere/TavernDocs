---
title: "WyrmMeleeSettings"
description: "Wyrm action component for melee attacks: reach, flurry chance, animator triggers and target weighting for ActiveMeleeAttack."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WyrmMeleeSettings

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Wyrm action component for melee attacks: reach, flurry chance, animator triggers and target weighting for `ActiveMeleeAttack`.

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

| Member | What it is |
| --- | --- |
| <Link id="m-changetargetmultiplier" /><code>{"private float changeTargetMultiplier"}</code> | Backing field for `ChangeTargetMultiplier`. |
| <Link id="m-flurryattacktriggers" /><code>{"private string[] flurryAttackTriggers"}</code> | Animator triggers used for flurry attacks. |
| <Link id="m-flurrychanceperattack" /><code>{"private float flurryChancePerAttack"}</code> | Backing field for `FlurryChancePerAttack`. |
| <Link id="m-hurtweighting" /><code>{"private float hurtWeighting"}</code> | Backing field for `HurtWeighting`. |
| <Link id="m-normalattacktriggers" /><code>{"private string[] normalAttackTriggers"}</code> | Animator triggers used for normal attacks. |
| <Link id="m-reach" /><code>{"private float reach"}</code> | Backing field for `Reach`. |
| <Link id="m-sametargetmultiplier" /><code>{"private float sameTargetMultiplier"}</code> | Backing field for `SameTargetMultiplier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changetargetmultiplier-2" /><code>{"float ChangeTargetMultiplier { get; }"}</code> | Score multiplier when the target is not the wyrm's current one (default 0.8). |
| <Link id="m-flurrychanceperattack-2" /><code>{"float FlurryChancePerAttack { get; }"}</code> | Added to the wyrm's flurry chance on each attack. |
| <Link id="m-hurtweighting-2" /><code>{"float HurtWeighting { get; }"}</code> | Weight of the hurt sense when scoring targets, so it favours whoever hurt it. |
| <Link id="m-reach-2" /><code>{"float Reach { get; }"}</code> | Attack range: targets score zero beyond it and full at half of it. |
| <Link id="m-sametargetmultiplier-2" /><code>{"float SameTargetMultiplier { get; }"}</code> | Score multiplier when the target is the wyrm's current one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandomattack" /><code>{"string GetRandomAttack(bool isFlurry)"}</code> | Picks a random animator trigger from the flurry or normal attack list. |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Returns the `ActiveMeleeAttack` action for these settings. |

## Used in

Members of other types that take, return or hold a `WyrmMeleeSettings`:

[`ActiveMeleeAttack.GetAction`](/game-api/types/alta-intelligence/activemeleeattack#m-getaction).
