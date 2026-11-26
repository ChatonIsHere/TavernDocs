---
title: "Shooter"
description: "Launches a pickup (an arrow or any item) from a bow or similar launcher and syncs the shot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Shooter

A **class** in `Root.Township`, the global namespace.

Launches a pickup (an arrow or any item) from a bow or similar launcher and syncs the shot. Both sides: the shooting client simulates and sends it, the server relays it to the chunk.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Shooter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultdeviation" /><code>{"private float defaultDeviation"}</code> | Maximum random angle in degrees added to non-arrow shots fired locally. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-maxextra" /><code>{"private float maxExtra"}</code> | Extra velocity factor for arrows, scaled by the string tightness. |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> | Launch speed at full strength, before weight and material adjustments. |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterial"}</code> | Optional material of the bow string; gives tightness, minimum projectile weight and the velocity multiplier for light items. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The launcher itself; only used to copy its last interactor onto the launched item. |
| <Link id="m-shootstrengthrtpc" /><code>{"private RTPC shootStrengthRTPC"}</code> | Wwise RTPC set from the shot strength for the shoot sound. |
| <Link id="m-syncshoot" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-s/shootarguments">{"ShootArguments"}</Link>{"> syncShoot"}</code> | Sync message that carries a shot (`ShootArguments`). |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onshoot" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{", "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", Vector3> OnShoot"}</code> | Raised after a shot with the shooter, the item and its launch velocity. |
| <Link id="m-preshoot" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{", "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> PreShoot"}</code> | Raised before a shot, with the shooter and the item about to be launched. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the sync used to send shots. |
| <Link id="m-shoot" /><code>{"void Shoot("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, float strength, bool isFromNetwork = false, Vector3 direction = null)"}</code> | Undocks the item and launches it with the given strength (0 to 1), playing the sound and sending the shot unless it came from the network. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultshoot" /><code>{"private Vector3 DefaultShoot(Vector3 direction, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, float strength, bool isApplyingDeviation)"}</code> | Launches a non-arrow item: optionally adds random deviation to its aim, then sets its velocity directly and clears spin. |
| <Link id="m-syncshoot-2" /><code>{"private void SyncShoot("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-s/shootarguments">{"ShootArguments"}</Link>{" args)"}</code> | Network handler: on receive, moves the item to the sent pose and shoots it; the server then relays the shot to other players. |

</details>

## Used in

Members of other types that take, return or hold a `Shooter`:

[`BowString.IgnoreArrowCollisions`](/mod/game-api/types/global-a-b/bowstring#m-ignorearrowcollisions), [`BowString.OnShoot`](/mod/game-api/types/global-a-b/bowstring#m-onshoot), [`BowString.shooter`](/mod/game-api/types/global-a-b/bowstring#m-shooter), [`ItemShooter.IgnoreArrowCollisions`](/mod/game-api/types/global-i-l/itemshooter#m-ignorearrowcollisions), [`ItemShooter.shooter`](/mod/game-api/types/global-i-l/itemshooter#m-shooter).
