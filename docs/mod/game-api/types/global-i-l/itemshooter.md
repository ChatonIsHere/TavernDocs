---
title: "ItemShooter"
description: "Debug component that fires the pickup in a dock through a Shooter, once or on a timer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemShooter

A **class** in `Root.Township`, the global namespace.

Debug component that fires the pickup in a dock through a `Shooter`, once or on a timer. Clients ask the server to shoot.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemShooter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> | The running `AutoShoot` coroutine. |
| <Link id="m-interval" /><code>{"private float interval"}</code> | Seconds between auto shots. |
| <Link id="m-isautoshooting" /><code>{"private bool isAutoshooting"}</code> | Whether auto shooting is on. |
| <Link id="m-itemdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" itemDock"}</code> | Dock holding the pickup to fire. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this component. |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> | Shot speed passed to the shooter. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Parent pickup that shot items ignore. |
| <Link id="m-shoot" /><code>{"private bool shoot"}</code> | Editor button field: shoots once. |
| <Link id="m-shooter" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{" shooter"}</code> | The `Shooter` that launches the item. |
| <Link id="m-shootingdirection" /><code>{"private Vector3 shootingDirection"}</code> | Local direction to shoot in. |
| <Link id="m-syncshoot" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncShoot"}</code> | Sync message clients use to ask the server to shoot. |
| <Link id="m-toggleautoshoot" /><code>{"private bool toggleAutoshoot"}</code> | Editor button field: toggles auto shoot. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the shoot sync message. |
| <Link id="m-shootone" /><code>{"void ShootOne()"}</code> | Fires the docked pickup along `shootingDirection` at `maxVelocity`. A client sends a request to the server instead. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoshoot" /><code>{"private IEnumerator AutoShoot() (iterator)"}</code> | Coroutine that shoots once every `interval` seconds. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the parent pickup and, if there is one, stops shot items from hitting it. |
| <Link id="m-ignorearrowcollisions" /><code>{"private void IgnoreArrowCollisions("}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2)"}</code> | Called before each shot. Makes the shot item ignore the parent pickup's colliders for a while. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor buttons: shoots once or toggles auto shoot. |
| <Link id="m-startautoshoot" /><code>{"private void StartAutoshoot()"}</code> | Starts the `AutoShoot` coroutine. |
| <Link id="m-stopautoshoot" /><code>{"private void StopAutoshoot()"}</code> | Stops the `AutoShoot` coroutine. |
| <Link id="m-syncshoot-2" /><code>{"private void SyncShoot("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server: shoots when it gets the request. It does not check who sent it. |
| <Link id="m-toggleautoshoot-2" /><code>{"private void ToggleAutoShoot()"}</code> | Turns auto shooting on or off. |

</details>
