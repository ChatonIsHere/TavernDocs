---
title: "RespawnShrineFuelDisplay"
description: "class RespawnShrineFuelDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrineFuelDisplay

A **class** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrineFuelDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fuelamount" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" fuelAmount"}</code> |  |
| <Link id="m-fuelconsumptionparticle" /><code>{"private GameObject fuelConsumptionParticle"}</code> |  |
| <Link id="m-fueldisplaytransform" /><code>{"private Transform fuelDisplayTransform"}</code> |  |
| <Link id="m-fuelitem" /><code>{"private GameObject fuelItem"}</code> |  |
| <Link id="m-hoveranimator" /><code>{"private "}<Link to="/game-api/types/global-e-h/hoveranimator">{"HoverAnimator"}</Link>{" hoverAnimator"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatedisplay" /><code>{"void UpdateDisplay("}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" dockSettings, float currentShrinePower, int subscriberCount)"}</code> |  |
| <Link id="m-disablefuelitemcomponents" /><code>{"private void DisableFuelItemComponents()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-spawnfuelitem" /><code>{"private void SpawnFuelItem("}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" dockSettings)"}</code> |  |
| <Link id="m-updatefuelconsumptionvisuals" /><code>{"private void UpdateFuelConsumptionVisuals(int subscriberCount)"}</code> |  |
| <Link id="m-updatequantity" /><code>{"private void UpdateQuantity(float currentShrinePower)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RespawnShrineFuelDisplay`:

[`PoweredRespawnShrine.fuelDisplay`](/game-api/types/game-other-namespaces/poweredrespawnshrine#m-fueldisplay).
