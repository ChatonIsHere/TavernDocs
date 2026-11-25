---
title: "CustomizationPickup"
description: "Base for the grabbable items in the character customization area (cosmetics, body types, eyes, equipment)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationPickup

A **class** in `Root.Township`, `Alta.Customization`.

Base for the grabbable items in the character customization area (cosmetics, body types, eyes, equipment). Client side; spawned from a template with `Spawn`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`BodyTypePickup`](/game-api/types/alta-customization/bodytypepickup), [`CosmeticPickup`](/game-api/types/alta-customization/cosmeticpickup), [`EquipmentPickup`](/game-api/types/alta-customization/equipmentpickup), [`EyePickup`](/game-api/types/alta-customization/eyepickup), [`SkinColorPickup`](/game-api/types/alta-customization/skincolorpickup)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomizationPickup()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] Arguments { get; private set; }"}</code> | The customization arguments (such as colours) this pickup applies, set by `Spawn`. |
| <Link id="m-definition" /><code>{"virtual "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Definition { get; protected set; }"}</code> | The cosmetic or customization definition this pickup represents, set by `Spawn`. |
| <Link id="m-hoverpickup-2" /><code><Link to="/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" "}<Link to="/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" { get; }"}</code> | The `HoverPickup` on the same object. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The `Pickup` on the same object. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroyonrelease" /><code>{"void DestroyOnRelease()"}</code> | Makes the pickup destroy itself shortly after it is let go, unless it is grabbed again. |
| <Link id="m-handleplacementresult" /><code>{"virtual void HandlePlacementResult(bool wasAdded)"}</code> | Plays the added or disappear effect (not on headless) and snaps the hover pickup back. |
| <Link id="m-spawn" /><code>{"virtual "}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" Spawn("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | Instantiates a copy of this pickup under a parent and gives it a definition and arguments. |
| <Link id="m-destroypickup" /><code>{"protected virtual void DestroyPickup()"}</code> | Destroys the pickup's game object. Override to pool or animate instead. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-delaydestroy" /><code>{"private void DelayDestroy()"}</code> |
| <Link id="m-destroyoninteractend" /><code>{"private void DestroyOnInteractEnd("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationPickup`:

[`BodyTypePickup.Spawn`](/game-api/types/alta-customization/bodytypepickup#m-spawn), [`CosmeticPickup.Spawn`](/game-api/types/alta-customization/cosmeticpickup#m-spawn), [`CosmeticScrollElement.pickups`](/game-api/types/alta-customization/cosmeticscrollelement#m-pickups), [`EditableSlot.hovering`](/game-api/types/alta-customization/editableslot#m-hovering), [`EquipmentPickup.Spawn`](/game-api/types/alta-customization/equipmentpickup#m-spawn), [`EyePickup.Spawn`](/game-api/types/alta-customization/eyepickup#m-spawn), [`ICustomizationDefinition.SpawnPickup`](/game-api/types/alta-customization/icustomizationdefinition#m-spawnpickup), [`PlayerCosmeticDefinition.pickup`](/game-api/types/alta-customization/playercosmeticdefinition#m-pickup), [`PlayerCosmeticDefinition.SpawnPickup`](/game-api/types/alta-customization/playercosmeticdefinition#m-spawnpickup), [`PlayerEquipmentDefinition.pickup`](/game-api/types/alta-customization/playerequipmentdefinition#m-pickup), [`PlayerEquipmentDefinition.SpawnPickup`](/game-api/types/alta-customization/playerequipmentdefinition#m-spawnpickup), [`SkinColorPickup.Spawn`](/game-api/types/alta-customization/skincolorpickup#m-spawn).
