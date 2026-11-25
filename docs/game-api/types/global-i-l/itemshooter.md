---
title: "ItemShooter"
description: "class ItemShooter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemShooter

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemShooter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> |  |
| <Link id="m-interval" /><code>{"private float interval"}</code> |  |
| <Link id="m-isautoshooting" /><code>{"private bool isAutoshooting"}</code> |  |
| <Link id="m-itemdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" itemDock"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-shoot" /><code>{"private bool shoot"}</code> |  |
| <Link id="m-shooter" /><code>{"private "}<Link to="/game-api/types/global-s/shooter">{"Shooter"}</Link>{" shooter"}</code> |  |
| <Link id="m-shootingdirection" /><code>{"private Vector3 shootingDirection"}</code> |  |
| <Link id="m-syncshoot" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncShoot"}</code> |  |
| <Link id="m-toggleautoshoot" /><code>{"private bool toggleAutoshoot"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-shootone" /><code>{"void ShootOne()"}</code> |  |
| <Link id="m-autoshoot" /><code>{"private IEnumerator AutoShoot() (iterator)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ignorearrowcollisions" /><code>{"private void IgnoreArrowCollisions("}<Link to="/game-api/types/global-s/shooter">{"Shooter"}</Link>{" arg1, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-startautoshoot" /><code>{"private void StartAutoshoot()"}</code> |  |
| <Link id="m-stopautoshoot" /><code>{"private void StopAutoshoot()"}</code> |  |
| <Link id="m-syncshoot-2" /><code>{"private void SyncShoot("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-toggleautoshoot-2" /><code>{"private void ToggleAutoShoot()"}</code> |  |
