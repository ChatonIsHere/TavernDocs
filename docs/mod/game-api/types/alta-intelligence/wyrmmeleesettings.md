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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/mod/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveMeleeAttack`](/mod/game-api/types/alta-intelligence/activemeleeattack)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WyrmMeleeSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changetargetmultiplier" /><code>{"private float changeTargetMultiplier"}</code> | <span className="api-desc">Backing field for `ChangeTargetMultiplier`.</span> |
| <Link id="m-flurryattacktriggers" /><code>{"private string[] flurryAttackTriggers"}</code> | <span className="api-desc">Animator triggers used for flurry attacks.</span> |
| <Link id="m-flurrychanceperattack" /><code>{"private float flurryChancePerAttack"}</code> | <span className="api-desc">Backing field for `FlurryChancePerAttack`.</span> |
| <Link id="m-hurtweighting" /><code>{"private float hurtWeighting"}</code> | <span className="api-desc">Backing field for `HurtWeighting`.</span> |
| <Link id="m-normalattacktriggers" /><code>{"private string[] normalAttackTriggers"}</code> | <span className="api-desc">Animator triggers used for normal attacks.</span> |
| <Link id="m-reach" /><code>{"private float reach"}</code> | <span className="api-desc">Backing field for `Reach`.</span> |
| <Link id="m-sametargetmultiplier" /><code>{"private float sameTargetMultiplier"}</code> | <span className="api-desc">Backing field for `SameTargetMultiplier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changetargetmultiplier-2" /><code>{"float ChangeTargetMultiplier { get; }"}</code> | <span className="api-desc">Score multiplier when the target is not the wyrm's current one (default 0.8).</span> |
| <Link id="m-flurrychanceperattack-2" /><code>{"float FlurryChancePerAttack { get; }"}</code> | <span className="api-desc">Added to the wyrm's flurry chance on each attack.</span> |
| <Link id="m-hurtweighting-2" /><code>{"float HurtWeighting { get; }"}</code> | <span className="api-desc">Weight of the hurt sense when scoring targets, so it favours whoever hurt it.</span> |
| <Link id="m-reach-2" /><code>{"float Reach { get; }"}</code> | <span className="api-desc">Attack range: targets score zero beyond it and full at half of it.</span> |
| <Link id="m-sametargetmultiplier-2" /><code>{"float SameTargetMultiplier { get; }"}</code> | <span className="api-desc">Score multiplier when the target is the wyrm's current one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandomattack" /><code>{"string GetRandomAttack(bool isFlurry)"}</code> | <span className="api-desc">Picks a random animator trigger from the flurry or normal attack list.</span> |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Returns the `ActiveMeleeAttack` action for these settings.</span> |

## Used in

Members of other types that take, return or hold a `WyrmMeleeSettings`:

<div className="api-used-in">

[`ActiveMeleeAttack.GetAction`](/mod/game-api/types/alta-intelligence/activemeleeattack#m-getaction).

</div>
