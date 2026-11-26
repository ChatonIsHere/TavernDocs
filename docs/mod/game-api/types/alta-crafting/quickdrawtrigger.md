---
title: "QuickDrawTrigger"
description: "Enchantment trigger that charges when the item is taken out of a dock and goes off on a good hit within a time limit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickDrawTrigger

A **class** in `Root.Township`, `Alta.Enchantments`.

Enchantment trigger that charges when the item is taken out of a dock and goes off on a good hit within a time limit.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`EnchantmentTrigger`](/mod/game-api/types/alta-crafting/enchantmenttrigger)
- **Derived types** [`QuickDrawApplication`](/mod/game-api/types/alta-crafting/quickdrawapplication), [`QuickDrawTrigger.Create`](/mod/game-api/types/alta-crafting/quickdrawtrigger-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/quickdrawtrigger-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuickDrawTrigger()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cooldowntime" /><code>{"private float cooldownTime"}</code> | <span className="api-desc">Seconds after a proc before the trigger can charge again.</span> |
| <Link id="m-isonehit" /><code>{"private bool isOneHit"}</code> | <span className="api-desc">If true, the charge ends after the first hit that procs.</span> |
| <Link id="m-minimumeffectiveness" /><code>{"private float minimumEffectiveness"}</code> | <span className="api-desc">A hit must be more effective than this (0 to 1) to proc.</span> |
| <Link id="m-timetohit" /><code>{"private float timeToHit"}</code> | <span className="api-desc">Seconds after drawing the tool that a hit still counts. The charge is cancelled after that.</span> |
| <Link id="m-validdocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"[] validDocks"}</code> | <span className="api-desc">Dock types the tool must be drawn from. Empty means any dock.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cooldowntime-2" /><code>{"float CooldownTime { get; }"}</code> | <span className="api-desc">Seconds after going off before it can charge again.</span> |
| <Link id="m-isonehit-2" /><code>{"bool IsOneHit { get; }"}</code> | <span className="api-desc">If true it uncharges after the first hit.</span> |
| <Link id="m-minimumeffectiveness-2" /><code>{"float MinimumEffectiveness { get; }"}</code> | <span className="api-desc">Hits must be more effective than this.</span> |
| <Link id="m-timetohit-2" /><code>{"float TimeToHit { get; }"}</code> | <span className="api-desc">Seconds after undocking to land the hit before the charge is cancelled.</span> |
| <Link id="m-validdocks-2" /><code><Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"[] ValidDocks { get; }"}</code> | <span className="api-desc">Docks that charge it. Empty means any.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createnew" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{" CreateNew("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> | <span className="api-desc">Creates a `QuickDrawApplication`.</span> |

## Used in

Members of other types that take, return or hold a `QuickDrawTrigger`:

<div className="api-used-in">

[`QuickDrawApplication.QuickDrawApplication`](/mod/game-api/types/alta-crafting/quickdrawapplication#m-ctor).

</div>
