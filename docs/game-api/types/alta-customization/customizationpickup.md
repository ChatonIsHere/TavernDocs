---
title: "CustomizationPickup"
description: "class CustomizationPickup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationPickup

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`BodyTypePickup`](/game-api/types/alta-customization/bodytypepickup), [`CosmeticPickup`](/game-api/types/alta-customization/cosmeticpickup), [`EquipmentPickup`](/game-api/types/alta-customization/equipmentpickup), [`EyePickup`](/game-api/types/alta-customization/eyepickup), [`SkinColorPickup`](/game-api/types/alta-customization/skincolorpickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationPickup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] Arguments { get; private set; }"}</code> |  |
| <Link id="m-definition" /><code>{"virtual "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Definition { get; protected set; }"}</code> |  |
| <Link id="m-hoverpickup-2" /><code><Link to="/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" "}<Link to="/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" { get; }"}</code> |  |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroyonrelease" /><code>{"void DestroyOnRelease()"}</code> |  |
| <Link id="m-handleplacementresult" /><code>{"virtual void HandlePlacementResult(bool wasAdded)"}</code> |  |
| <Link id="m-spawn" /><code>{"virtual "}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" Spawn("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> |  |
| <Link id="m-delaydestroy" /><code>{"private void DelayDestroy()"}</code> |  |
| <Link id="m-destroyoninteractend" /><code>{"private void DestroyOnInteractEnd("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-destroypickup" /><code>{"protected virtual void DestroyPickup()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CustomizationPickup`:

[`BodyTypePickup.Spawn`](/game-api/types/alta-customization/bodytypepickup#m-spawn), [`CosmeticPickup.Spawn`](/game-api/types/alta-customization/cosmeticpickup#m-spawn), [`CosmeticScrollElement.pickups`](/game-api/types/alta-customization/cosmeticscrollelement#m-pickups), [`EditableSlot.hovering`](/game-api/types/alta-customization/editableslot#m-hovering), [`EquipmentPickup.Spawn`](/game-api/types/alta-customization/equipmentpickup#m-spawn), [`EyePickup.Spawn`](/game-api/types/alta-customization/eyepickup#m-spawn), [`ICustomizationDefinition.SpawnPickup`](/game-api/types/alta-customization/icustomizationdefinition#m-spawnpickup), [`PlayerCosmeticDefinition.pickup`](/game-api/types/alta-customization/playercosmeticdefinition#m-pickup), [`PlayerCosmeticDefinition.SpawnPickup`](/game-api/types/alta-customization/playercosmeticdefinition#m-spawnpickup), [`PlayerEquipmentDefinition.pickup`](/game-api/types/alta-customization/playerequipmentdefinition#m-pickup), [`PlayerEquipmentDefinition.SpawnPickup`](/game-api/types/alta-customization/playerequipmentdefinition#m-spawnpickup), [`SkinColorPickup.Spawn`](/game-api/types/alta-customization/skincolorpickup#m-spawn).
