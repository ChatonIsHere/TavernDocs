---
title: "ICosmeticPresetSlot"
description: "A place a cosmetic preset trophy can sit, such as CosmeticPresetSlot or CosmeticRotatingSlot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICosmeticPresetSlot

An **interface** in `Root.Township`, `Alta.Customization`.

A place a cosmetic preset trophy can sit, such as `CosmeticPresetSlot` or `CosmeticRotatingSlot`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Derived types** [`CosmeticPresetSlot`](/game-api/types/alta-customization/cosmeticpresetslot), [`CosmeticRotatingSlot`](/game-api/types/alta-customization/cosmeticrotatingslot)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetposition" /><code>{"Vector3 TargetPosition { get; }"}</code> | World position the trophy moves to in this slot. |
| <Link id="m-targetrotation" /><code>{"Quaternion TargetRotation { get; }"}</code> | World rotation the trophy takes in this slot. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistertrophy" /><code>{"void DeregisterTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Removes the trophy from the slot. `CosmeticPresetSlot` also deletes the saved preset through the API. |

## Used in

Members of other types that take, return or hold a `ICosmeticPresetSlot`:

[`CosmeticPresetTrophy.RegisterSlot`](/game-api/types/alta-customization/cosmeticpresettrophy#m-registerslot), [`CosmeticPresetTrophy.Slot`](/game-api/types/alta-customization/cosmeticpresettrophy#m-slot).
