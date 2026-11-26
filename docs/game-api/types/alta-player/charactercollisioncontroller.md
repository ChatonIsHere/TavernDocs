---
title: "CharacterCollisionController"
description: "On the local player, stops the player's own colliders from hitting a pickup while a hand holds it, and turns collision back on a short time after it is let go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterCollisionController

A **class** in `Root.Township`, `Alta.Character`.

On the local player, stops the player's own colliders from hitting a pickup while a hand holds it, and turns collision back on a short time after it is let go.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`CharacterCollisionControllerHelper`](/game-api/types/alta-player/charactercollisioncontrollerhelper)
- **Nested types** [`CollidersToDisableWhenInteracting`](/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterCollisionController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collidersmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{"> collidersMap"}</code> | Maps each hand's Interactor to the collider group that should ignore what it holds. |
| <Link id="m-colliderstodisablewheninteracting" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting">{"CharacterCollisionController.CollidersToDisableWhenInteracting"}</Link>{"[] collidersToDisableWhenInteracting"}</code> | Serialized backing array for `CollidersToDisableWhenInteractingList`. |
| <Link id="m-collisionenabledelay" /><code>{"private float collisionEnableDelay"}</code> | Seconds to wait after letting go before collision comes back. Default 0.1. |
| <Link id="m-disabledcache" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Collider[]> disabledCache"}</code> | The pickup colliders most recently ignored, per interactor, so they can be restored. |
| <Link id="m-enablingcoroutines" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Coroutine> enablingCoroutines"}</code> | Pending re-enable coroutines per interactor, so a new grab can cancel them. |
| <Link id="m-isstarted" /><code>{"private bool isStarted"}</code> | True once `PlayerSet` has run. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderstodisablewheninteractinglist" /><code><Link to="/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting">{"CharacterCollisionController.CollidersToDisableWhenInteracting"}</Link>{"[] CollidersToDisableWhenInteractingList { get; }"}</code> | The configured pairs of hand controller and collider group to ignore while that hand holds something. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | Throws `NotImplementedException`. Don't call it. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to `PlayerController.LinkedToLocalPlayer` so setup waits until the local player exists. |
| <Link id="m-delaysetcolliders" /><code>{"private IEnumerator DelaySetColliders(float delay, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isIgnoring, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> | Coroutine: after the delay, turns collision back on unless the pickup is still held by either hand or is a crafted child. |
| <Link id="m-disablecolliders" /><code>{"private void DisableColliders("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Runs before a hand starts holding a pickup: cancels any pending re-enable and makes the group ignore the pickup's colliders. |
| <Link id="m-enablecolliders" /><code>{"private void EnableColliders("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Runs when a hand lets go of a pickup: starts the delayed re-enable of collision. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unsubscribes from the hands' interaction events. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Once set up, subscribes to each hand's `PreInteractionStarted` and `InteractionEnded` events. |
| <Link id="m-playerset" /><code>{"private void PlayerSet()"}</code> | Called once the local player is linked: builds the interactor to collider group map and subscribes to the events. |
| <Link id="m-setcolliders" /><code>{"private void SetColliders("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isIgnoring)"}</code> | Turns `Physics.IgnoreCollision` on or off between the hand's collider group and the cached pickup colliders. |

</details>
