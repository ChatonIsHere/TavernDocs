---
title: "ArmorDefinition"
description: "Armour asset: damage multipliers per attack type and a conductivity multiplier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArmorDefinition

A **class** in `Root.Township`, `Alta.Impact`.

Armour asset: damage multipliers per attack type and a conductivity multiplier.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ArmorDefinition.Create`](/mod/game-api/types/alta-items/armordefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/armordefinition-create)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArmorDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attacktypemultipliers" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] attackTypeMultipliers"}</code> | Damage multipliers by impact type, read by `GetMultiplier`; types not listed get 1. |
| <Link id="m-conductivitymultiplier" /><code>{"private float conductivityMultiplier"}</code> | Backing field for `ConductivityMultiplier`. Defaults to 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-conductivitymultiplier-2" /><code>{"float ConductivityMultiplier { get; }"}</code> | Multiplier for conductivity. Defaults to 1. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmultiplier" /><code>{"float GetMultiplier("}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" damageType)"}</code> | Damage multiplier for an impact type, or 1 if the armour has none for it. |

## Used in

Members of other types that take, return or hold a `ArmorDefinition`:

[`ArmorManager<TSlot>.Set`](/mod/game-api/types/alta-customization/armormanager-tslot#m-set), [`ArmorManager<TSlot>.SlotPairing.Apply`](/mod/game-api/types/alta-customization/armormanager-tslot-slotpairing#m-apply), [`PlayerEquipmentDefinition.armorDefinition`](/mod/game-api/types/alta-customization/playerequipmentdefinition#m-armordefinition), [`PlayerEquipmentDefinition.ArmorDefinition`](/mod/game-api/types/alta-customization/playerequipmentdefinition#m-armordefinition-2), [`HeatPoint.EuipmentChanged`](/mod/game-api/types/alta-stats-effects/heatpoint#m-euipmentchanged), [`EquipmentReference.armor`](/mod/game-api/types/alta-items/equipmentreference#m-armor), [`EquipmentReference.Equipment`](/mod/game-api/types/alta-items/equipmentreference#m-equipment), [`EquipmentReference.EquipmentChangedHandler.BeginInvoke`](/mod/game-api/types/alta-items/equipmentreference-equipmentchangedhandler#m-begininvoke), [`EquipmentReference.EquipmentChangedHandler.Invoke`](/mod/game-api/types/alta-items/equipmentreference-equipmentchangedhandler#m-invoke), [`ImpactDetector.CurrentArmor`](/mod/game-api/types/alta-items/impactdetector#m-currentarmor).
