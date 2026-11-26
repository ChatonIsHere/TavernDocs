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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`BodyTypePickup`](/mod/game-api/types/alta-customization/bodytypepickup), [`CosmeticPickup`](/mod/game-api/types/alta-customization/cosmeticpickup), [`EquipmentPickup`](/mod/game-api/types/alta-customization/equipmentpickup), [`EyePickup`](/mod/game-api/types/alta-customization/eyepickup), [`SkinColorPickup`](/mod/game-api/types/alta-customization/skincolorpickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationPickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> | <span className="api-desc">Backing field for `HoverPickup`, snapped back after a placement result.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Backing field for `Pickup`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] Arguments { get; private set; }"}</code> | <span className="api-desc">The customization arguments (such as colours) this pickup applies, set by `Spawn`.</span> |
| <Link id="m-definition" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Definition { get; protected set; }"}</code> | <span className="api-desc">The cosmetic or customization definition this pickup represents, set by `Spawn`.</span> |
| <Link id="m-hoverpickup-2" /><code><Link to="/mod/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The `HoverPickup` on the same object.</span> |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The `Pickup` on the same object.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroyonrelease" /><code>{"void DestroyOnRelease()"}</code> | <span className="api-desc">Makes the pickup destroy itself shortly after it is let go, unless it is grabbed again.</span> |
| <Link id="m-handleplacementresult" /><code>{"virtual void HandlePlacementResult(bool wasAdded)"}</code> | <span className="api-desc">Plays the added or disappear effect (not on headless) and snaps the hover pickup back.</span> |
| <Link id="m-spawn" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" Spawn("}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | <span className="api-desc">Instantiates a copy of this pickup under a parent and gives it a definition and arguments.</span> |
| <Link id="m-destroypickup" /><code>{"protected virtual void DestroyPickup()"}</code> | <span className="api-desc">Destroys the pickup's game object. Override to pool or animate instead.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaydestroy" /><code>{"private void DelayDestroy()"}</code> | <span className="api-desc">Destroys the pickup if nobody picked it up again since release.</span> |
| <Link id="m-destroyoninteractend" /><code>{"private void DestroyOnInteractEnd("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">On release, waits a frame then calls `DelayDestroy`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationPickup`:

<div className="api-used-in">

[`BodyTypePickup.Spawn`](/mod/game-api/types/alta-customization/bodytypepickup#m-spawn), [`CosmeticPickup.Spawn`](/mod/game-api/types/alta-customization/cosmeticpickup#m-spawn), [`CosmeticScrollElement.pickups`](/mod/game-api/types/alta-customization/cosmeticscrollelement#m-pickups), [`EditableSlot.hovering`](/mod/game-api/types/alta-customization/editableslot#m-hovering), [`EquipmentPickup.Spawn`](/mod/game-api/types/alta-customization/equipmentpickup#m-spawn), [`EyePickup.Spawn`](/mod/game-api/types/alta-customization/eyepickup#m-spawn), [`ICustomizationDefinition.SpawnPickup`](/mod/game-api/types/alta-customization/icustomizationdefinition#m-spawnpickup), [`PlayerCosmeticDefinition.pickup`](/mod/game-api/types/alta-customization/playercosmeticdefinition#m-pickup), [`PlayerCosmeticDefinition.SpawnPickup`](/mod/game-api/types/alta-customization/playercosmeticdefinition#m-spawnpickup), [`PlayerEquipmentDefinition.pickup`](/mod/game-api/types/alta-customization/playerequipmentdefinition#m-pickup), [`PlayerEquipmentDefinition.SpawnPickup`](/mod/game-api/types/alta-customization/playerequipmentdefinition#m-spawnpickup), [`SkinColorPickup.Spawn`](/mod/game-api/types/alta-customization/skincolorpickup#m-spawn).

</div>
