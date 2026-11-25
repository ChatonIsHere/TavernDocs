---
title: "EquipmentReference"
description: "class EquipmentReference in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentReference

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`EquipmentChangedHandler`](/game-api/types/alta-items/equipmentreference-equipmentchangedhandler)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EquipmentReference()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-armor" /><code>{"private "}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" armor"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-equipment" /><code><Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" Equipment { get; set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-changed" /><code>{"event "}<Link to="/game-api/types/alta-items/equipmentreference-equipmentchangedhandler">{"EquipmentReference.EquipmentChangedHandler"}</Link>{" Changed"}</code> |

## Used in

Members of other types that take, return or hold a `EquipmentReference`:

[`ArmorManager<TSlot>.SlotPairing.detectors`](/game-api/types/alta-customization/armormanager-tslot-slotpairing#m-detectors), [`HeatPoint.equipmentSlot`](/game-api/types/alta-stats-effects/heatpoint#m-equipmentslot), [`ImpactDetector.equipmentSlot`](/game-api/types/alta-items/impactdetector#m-equipmentslot).
