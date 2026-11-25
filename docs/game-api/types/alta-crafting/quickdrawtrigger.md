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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`EnchantmentTrigger`](/game-api/types/alta-crafting/enchantmenttrigger)
- **Derived types** [`QuickDrawApplication`](/game-api/types/alta-crafting/quickdrawapplication), [`QuickDrawTrigger.Create`](/game-api/types/alta-crafting/quickdrawtrigger-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/quickdrawtrigger-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"QuickDrawTrigger()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cooldowntime" /><code>{"private float cooldownTime"}</code> |
| <Link id="m-isonehit" /><code>{"private bool isOneHit"}</code> |
| <Link id="m-minimumeffectiveness" /><code>{"private float minimumEffectiveness"}</code> |
| <Link id="m-timetohit" /><code>{"private float timeToHit"}</code> |
| <Link id="m-validdocks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"[] validDocks"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cooldowntime-2" /><code>{"float CooldownTime { get; }"}</code> | Seconds after going off before it can charge again. |
| <Link id="m-isonehit-2" /><code>{"bool IsOneHit { get; }"}</code> | If true it uncharges after the first hit. |
| <Link id="m-minimumeffectiveness-2" /><code>{"float MinimumEffectiveness { get; }"}</code> | Hits must be more effective than this. |
| <Link id="m-timetohit-2" /><code>{"float TimeToHit { get; }"}</code> | Seconds after undocking to land the hit before the charge is cancelled. |
| <Link id="m-validdocks-2" /><code><Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"[] ValidDocks { get; }"}</code> | Docks that charge it. Empty means any. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createnew" /><code>{"protected override "}<Link to="/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{" CreateNew("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> | Creates a `QuickDrawApplication`. |

## Used in

Members of other types that take, return or hold a `QuickDrawTrigger`:

[`QuickDrawApplication.QuickDrawApplication`](/game-api/types/alta-crafting/quickdrawapplication#m-ctor).
