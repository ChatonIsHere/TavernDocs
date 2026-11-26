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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Derived types** [`CosmeticPresetSlot`](/mod/game-api/types/alta-customization/cosmeticpresetslot), [`CosmeticRotatingSlot`](/mod/game-api/types/alta-customization/cosmeticrotatingslot)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetposition" /><code>{"Vector3 TargetPosition { get; }"}</code> | <span className="api-desc">World position the trophy moves to in this slot.</span> |
| <Link id="m-targetrotation" /><code>{"Quaternion TargetRotation { get; }"}</code> | <span className="api-desc">World rotation the trophy takes in this slot.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistertrophy" /><code>{"void DeregisterTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Removes the trophy from the slot. `CosmeticPresetSlot` also deletes the saved preset through the API.</span> |

## Used in

Members of other types that take, return or hold a `ICosmeticPresetSlot`:

<div className="api-used-in">

[`CosmeticPresetTrophy.RegisterSlot`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-registerslot), [`CosmeticPresetTrophy.Slot`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-slot).

</div>
