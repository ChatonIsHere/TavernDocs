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
| <Link id="m-ctor" /><code>{"ItemShooter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> | <span className="api-desc">The running `AutoShoot` coroutine.</span> |
| <Link id="m-interval" /><code>{"private float interval"}</code> | <span className="api-desc">Seconds between auto shots.</span> |
| <Link id="m-isautoshooting" /><code>{"private bool isAutoshooting"}</code> | <span className="api-desc">Whether auto shooting is on.</span> |
| <Link id="m-itemdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" itemDock"}</code> | <span className="api-desc">Dock holding the pickup to fire.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this component.</span> |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> | <span className="api-desc">Shot speed passed to the shooter.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Parent pickup that shot items ignore.</span> |
| <Link id="m-shoot" /><code>{"private bool shoot"}</code> | <span className="api-desc">Editor button field: shoots once.</span> |
| <Link id="m-shooter" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{" shooter"}</code> | <span className="api-desc">The `Shooter` that launches the item.</span> |
| <Link id="m-shootingdirection" /><code>{"private Vector3 shootingDirection"}</code> | <span className="api-desc">Local direction to shoot in.</span> |
| <Link id="m-syncshoot" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncShoot"}</code> | <span className="api-desc">Sync message clients use to ask the server to shoot.</span> |
| <Link id="m-toggleautoshoot" /><code>{"private bool toggleAutoshoot"}</code> | <span className="api-desc">Editor button field: toggles auto shoot.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the shoot sync message.</span> |
| <Link id="m-shootone" /><code>{"void ShootOne()"}</code> | <span className="api-desc">Fires the docked pickup along `shootingDirection` at `maxVelocity`. A client sends a request to the server instead.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoshoot" /><code>{"private IEnumerator AutoShoot() (iterator)"}</code> | <span className="api-desc">Coroutine that shoots once every `interval` seconds.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the parent pickup and, if there is one, stops shot items from hitting it.</span> |
| <Link id="m-ignorearrowcollisions" /><code>{"private void IgnoreArrowCollisions("}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2)"}</code> | <span className="api-desc">Called before each shot. Makes the shot item ignore the parent pickup's colliders for a while.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor buttons: shoots once or toggles auto shoot.</span> |
| <Link id="m-startautoshoot" /><code>{"private void StartAutoshoot()"}</code> | <span className="api-desc">Starts the `AutoShoot` coroutine.</span> |
| <Link id="m-stopautoshoot" /><code>{"private void StopAutoshoot()"}</code> | <span className="api-desc">Stops the `AutoShoot` coroutine.</span> |
| <Link id="m-syncshoot-2" /><code>{"private void SyncShoot("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server: shoots when it gets the request. It does not check who sent it.</span> |
| <Link id="m-toggleautoshoot-2" /><code>{"private void ToggleAutoShoot()"}</code> | <span className="api-desc">Turns auto shooting on or off.</span> |

</details>
