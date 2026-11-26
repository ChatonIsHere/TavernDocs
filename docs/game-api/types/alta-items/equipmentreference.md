---
title: "EquipmentReference"
description: "A component on a body part that holds the armour equipped there."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentReference

A **class** in `Root.Township`, `Alta.Impact`.

A component on a body part that holds the armour equipped there. `ArmorManager` sets it, and `ImpactDetector` and `HeatPoint` read it.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`EquipmentChangedHandler`](/game-api/types/alta-items/equipmentreference-equipmentchangedhandler)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentReference()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-armor" /><code>{"private "}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" armor"}</code> | Backing field for `Equipment`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-equipment" /><code><Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" Equipment { get; set; }"}</code> | The `ArmorDefinition` worn on this part, or null. Setting it raises `Changed`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event "}<Link to="/game-api/types/alta-items/equipmentreference-equipmentchangedhandler">{"EquipmentReference.EquipmentChangedHandler"}</Link>{" Changed"}</code> | Raised with the new armour whenever `Equipment` is set. Setting it with no listener throws. |

## Used in

Members of other types that take, return or hold a `EquipmentReference`:

[`ArmorManager<TSlot>.SlotPairing.detectors`](/game-api/types/alta-customization/armormanager-tslot-slotpairing#m-detectors), [`HeatPoint.equipmentSlot`](/game-api/types/alta-stats-effects/heatpoint#m-equipmentslot), [`ImpactDetector.equipmentSlot`](/game-api/types/alta-items/impactdetector#m-equipmentslot).
