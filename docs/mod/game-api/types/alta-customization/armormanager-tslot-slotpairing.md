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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`ArmorManager<TSlot>`](/mod/game-api/types/alta-customization/armormanager-tslot)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SlotPairing()"}</code> | <span className="api-desc">Creates an `ArmorManager` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-detectors" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/equipmentreference">{"EquipmentReference"}</Link>{"[] detectors"}</code> | <span className="api-desc">Equipment references updated by `Apply`.</span> |
| <Link id="m-slot" /><code>{"private TSlot slot"}</code> | <span className="api-desc">Backing field for `Slot`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-slot-2" /><code>{"TSlot Slot { get; }"}</code> | <span className="api-desc">The slot this pairing covers; used as the key in the manager's lookup.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/mod/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" armor)"}</code> | <span className="api-desc">Sets the given armour definition on every detector in this pairing.</span> |

## Used in

Members of other types that take, return or hold a `SlotPairing`:

<div className="api-used-in">

[`ArmorManager<TSlot>.slotPairings`](/mod/game-api/types/alta-customization/armormanager-tslot#m-slotpairings), [`ArmorManager<TSlot>.slots`](/mod/game-api/types/alta-customization/armormanager-tslot#m-slots).

</div>
