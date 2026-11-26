---
title: "Enchantment.Binding"
description: "One rule in an enchantment: a set of triggers tied to the effects they set off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Enchantment.Binding

A **class** in `Root.Township`, `Alta.Enchantments`.

One rule in an enchantment: a set of triggers tied to the effects they set off. An enchantment holds a list of these in `Bindings`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`Enchantment`](/mod/game-api/types/alta-crafting/enchantment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Binding()"}</code> | Creates an `Enchantment.Binding` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effects" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/enchantmenteffect">{"EnchantmentEffect"}</Link>{"[] effects"}</code> | Backing field for `Effects`. |
| <Link id="m-triggers" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/enchantmenttrigger">{"EnchantmentTrigger"}</Link>{"[] triggers"}</code> | Backing field for `Triggers`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-effects-2" /><code><Link to="/mod/game-api/types/alta-crafting/enchantmenteffect">{"EnchantmentEffect"}</Link>{"[] Effects { get; }"}</code> | Effects this binding runs. |
| <Link id="m-triggers-2" /><code><Link to="/mod/game-api/types/alta-crafting/enchantmenttrigger">{"EnchantmentTrigger"}</Link>{"[] Triggers { get; }"}</code> | Triggers that set off this binding's effects. |

## Used in

Members of other types that take, return or hold a `Binding`:

[`Enchantment.bindings`](/mod/game-api/types/alta-crafting/enchantment#m-bindings), [`Enchantment.Bindings`](/mod/game-api/types/alta-crafting/enchantment#m-bindings-2).
