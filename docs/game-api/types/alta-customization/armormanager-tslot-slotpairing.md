---
title: "ArmorManager<TSlot>.SlotPairing"
description: "Inspector pairing of one armour slot with the equipment references (detectors) that should take whatever armour goes in that slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArmorManager&lt;TSlot&gt;.SlotPairing

A **class** in `Root.Township`, `Alta.Customization`.

Inspector pairing of one armour slot with the equipment references (detectors) that should take whatever armour goes in that slot.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested in** [`ArmorManager<TSlot>`](/game-api/types/alta-customization/armormanager-tslot)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SlotPairing()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-detectors" /><code>{"private "}<Link to="/game-api/types/alta-items/equipmentreference">{"EquipmentReference"}</Link>{"[] detectors"}</code> | Equipment references updated by `Apply`. |
| <Link id="m-slot" /><code>{"private TSlot slot"}</code> | Backing field for `Slot`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-slot-2" /><code>{"TSlot Slot { get; }"}</code> | The slot this pairing covers; used as the key in the manager's lookup. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" armor)"}</code> | Sets the given armour definition on every detector in this pairing. |

## Used in

Members of other types that take, return or hold a `SlotPairing`:

[`ArmorManager<TSlot>.slotPairings`](/game-api/types/alta-customization/armormanager-tslot#m-slotpairings), [`ArmorManager<TSlot>.slots`](/game-api/types/alta-customization/armormanager-tslot#m-slots).
