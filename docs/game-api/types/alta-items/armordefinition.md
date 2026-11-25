---
title: "ArmorDefinition"
description: "class ArmorDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArmorDefinition

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ArmorDefinition.Create`](/game-api/types/alta-items/armordefinition-create)
- **Nested types** [`Create`](/game-api/types/alta-items/armordefinition-create)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArmorDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attacktypemultipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] attackTypeMultipliers"}</code> |  |
| <Link id="m-conductivitymultiplier" /><code>{"private float conductivityMultiplier"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-conductivitymultiplier-2" /><code>{"float ConductivityMultiplier { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmultiplier" /><code>{"float GetMultiplier("}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" damageType)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ArmorDefinition`:

[`ArmorManager<TSlot>.Set`](/game-api/types/alta-customization/armormanager-tslot#m-set), [`ArmorManager<TSlot>.SlotPairing.Apply`](/game-api/types/alta-customization/armormanager-tslot-slotpairing#m-apply), [`PlayerEquipmentDefinition.armorDefinition`](/game-api/types/alta-customization/playerequipmentdefinition#m-armordefinition), [`PlayerEquipmentDefinition.ArmorDefinition`](/game-api/types/alta-customization/playerequipmentdefinition#m-armordefinition-2), [`HeatPoint.EuipmentChanged`](/game-api/types/alta-stats-effects/heatpoint#m-euipmentchanged), [`EquipmentReference.armor`](/game-api/types/alta-items/equipmentreference#m-armor), [`EquipmentReference.Equipment`](/game-api/types/alta-items/equipmentreference#m-equipment), [`EquipmentReference.EquipmentChangedHandler.BeginInvoke`](/game-api/types/alta-items/equipmentreference-equipmentchangedhandler#m-begininvoke), [`EquipmentReference.EquipmentChangedHandler.Invoke`](/game-api/types/alta-items/equipmentreference-equipmentchangedhandler#m-invoke), [`ImpactDetector.CurrentArmor`](/game-api/types/alta-items/impactdetector#m-currentarmor).
