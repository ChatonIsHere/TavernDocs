---
title: "RespawnShrineFuelDisplay"
description: "Shows a respawn shrine's fuel: a frozen copy of the fuel item, the fuel amount, and hover and particle effects while players are subscribed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrineFuelDisplay

A **class** in `Root.Township`, `ATT.Respawn`.

Shows a respawn shrine's fuel: a frozen copy of the fuel item, the fuel amount, and hover and particle effects while players are subscribed. Driven by `PoweredRespawnShrine`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrineFuelDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fuelamount" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" fuelAmount"}</code> | Text that shows the fuel amount. |
| <Link id="m-fuelconsumptionparticle" /><code>{"private GameObject fuelConsumptionParticle"}</code> | Particle object shown while fuel is being used. |
| <Link id="m-fueldisplaytransform" /><code>{"private Transform fuelDisplayTransform"}</code> | Where the display copy of the fuel item is placed. |
| <Link id="m-fuelitem" /><code>{"private GameObject fuelItem"}</code> | The spawned display copy of the fuel item. |
| <Link id="m-hoveranimator" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/hoveranimator">{"HoverAnimator"}</Link>{" hoverAnimator"}</code> | Hover animation played while fuel is being used. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatedisplay" /><code>{"void UpdateDisplay("}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" dockSettings, float currentShrinePower, int subscriberCount)"}</code> | Spawns the display item if needed and updates the amount text and consumption effects. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablefuelitemcomponents" /><code>{"private void DisableFuelItemComponents()"}</code> | Makes the display copy of the fuel item non-interactable, non-networked, kinematic and without colliders. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Destroys the display copy of the fuel item. |
| <Link id="m-spawnfuelitem" /><code>{"private void SpawnFuelItem("}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" dockSettings)"}</code> | Spawns a copy of the dock's first included item as the display item, once. |
| <Link id="m-updatefuelconsumptionvisuals" /><code>{"private void UpdateFuelConsumptionVisuals(int subscriberCount)"}</code> | Plays the hover animation and particles while the shrine has subscribers, and stops them otherwise. |
| <Link id="m-updatequantity" /><code>{"private void UpdateQuantity(float currentShrinePower)"}</code> | Shows the fuel value rounded up as text. |

</details>

## Used in

Members of other types that take, return or hold a `RespawnShrineFuelDisplay`:

[`PoweredRespawnShrine.fuelDisplay`](/mod/game-api/types/game-other-namespaces/poweredrespawnshrine#m-fueldisplay).
