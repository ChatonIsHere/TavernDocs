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
| <Link id="m-ctor" /><code>{"RespawnShrineFuelDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fuelamount" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" fuelAmount"}</code> | <span className="api-desc">Text that shows the fuel amount.</span> |
| <Link id="m-fuelconsumptionparticle" /><code>{"private GameObject fuelConsumptionParticle"}</code> | <span className="api-desc">Particle object shown while fuel is being used.</span> |
| <Link id="m-fueldisplaytransform" /><code>{"private Transform fuelDisplayTransform"}</code> | <span className="api-desc">Where the display copy of the fuel item is placed.</span> |
| <Link id="m-fuelitem" /><code>{"private GameObject fuelItem"}</code> | <span className="api-desc">The spawned display copy of the fuel item.</span> |
| <Link id="m-hoveranimator" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/hoveranimator">{"HoverAnimator"}</Link>{" hoverAnimator"}</code> | <span className="api-desc">Hover animation played while fuel is being used.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatedisplay" /><code>{"void UpdateDisplay("}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" dockSettings, float currentShrinePower, int subscriberCount)"}</code> | <span className="api-desc">Spawns the display item if needed and updates the amount text and consumption effects.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablefuelitemcomponents" /><code>{"private void DisableFuelItemComponents()"}</code> | <span className="api-desc">Makes the display copy of the fuel item non-interactable, non-networked, kinematic and without colliders.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Destroys the display copy of the fuel item.</span> |
| <Link id="m-spawnfuelitem" /><code>{"private void SpawnFuelItem("}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" dockSettings)"}</code> | <span className="api-desc">Spawns a copy of the dock's first included item as the display item, once.</span> |
| <Link id="m-updatefuelconsumptionvisuals" /><code>{"private void UpdateFuelConsumptionVisuals(int subscriberCount)"}</code> | <span className="api-desc">Plays the hover animation and particles while the shrine has subscribers, and stops them otherwise.</span> |
| <Link id="m-updatequantity" /><code>{"private void UpdateQuantity(float currentShrinePower)"}</code> | <span className="api-desc">Shows the fuel value rounded up as text.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RespawnShrineFuelDisplay`:

<div className="api-used-in">

[`PoweredRespawnShrine.fuelDisplay`](/mod/game-api/types/game-other-namespaces/poweredrespawnshrine#m-fueldisplay).

</div>
