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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`PlayerArmorManager`](/mod/game-api/types/alta-customization/playerarmormanager)
- **Nested types** [`SlotPairing`](/mod/game-api/types/alta-customization/armormanager-tslot-slotpairing)
- **Documented in** [Customization](/mod/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArmorManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-slotpairings" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/armormanager-tslot-slotpairing">{"ArmorManager"}</Link>{"<TSlot>[] slotPairings"}</code> | <span className="api-desc">Serialized pairs of slot and the `EquipmentReference` detectors it covers.</span> |
| <Link id="m-slots" /><code>{"private Dictionary<TSlot, "}<Link to="/mod/game-api/types/alta-customization/armormanager-tslot-slotpairing">{"ArmorManager"}</Link>{"<TSlot>> slots"}</code> | <span className="api-desc">Lookup of pairings by slot.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(TSlot slot, "}<Link to="/mod/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" armor)"}</code> | <span className="api-desc">Sets the armor on every detector paired with the slot. Unknown slots are ignored.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Builds the slot lookup from `slotPairings`.</span> |

</details>
