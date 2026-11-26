---
title: "ArmorManager<TSlot>"
description: "Maps armor slots to the impact detectors they cover, so setting a slot's armor updates every detector for that body part."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArmorManager&lt;TSlot&gt;

A **class** in `Root.Township`, `Alta.Customization`.

Maps armor slots to the impact detectors they cover, so setting a slot's armor updates every detector for that body part.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`PlayerArmorManager`](/game-api/types/alta-customization/playerarmormanager)
- **Nested types** [`SlotPairing`](/game-api/types/alta-customization/armormanager-tslot-slotpairing)
- **Documented in** [Customization](/game-api/game-systems/customization)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ArmorManager()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-slotpairings" /><code>{"private "}<Link to="/game-api/types/alta-customization/armormanager-tslot-slotpairing">{"ArmorManager"}</Link>{"<TSlot>[] slotPairings"}</code> | Serialized pairs of slot and the `EquipmentReference` detectors it covers. |
| <Link id="m-slots" /><code>{"private Dictionary<TSlot, "}<Link to="/game-api/types/alta-customization/armormanager-tslot-slotpairing">{"ArmorManager"}</Link>{"<TSlot>> slots"}</code> | Lookup of pairings by slot. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(TSlot slot, "}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" armor)"}</code> | Sets the armor on every detector paired with the slot. Unknown slots are ignored. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Builds the slot lookup from `slotPairings`. |

</details>
