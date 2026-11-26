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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`CharacterCollisionControllerHelper`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper)
- **Nested types** [`CollidersToDisableWhenInteracting`](/mod/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterCollisionController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collidersmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{"> collidersMap"}</code> | <span className="api-desc">Maps each hand's Interactor to the collider group that should ignore what it holds.</span> |
| <Link id="m-colliderstodisablewheninteracting" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting">{"CharacterCollisionController.CollidersToDisableWhenInteracting"}</Link>{"[] collidersToDisableWhenInteracting"}</code> | <span className="api-desc">Serialized backing array for `CollidersToDisableWhenInteractingList`.</span> |
| <Link id="m-collisionenabledelay" /><code>{"private float collisionEnableDelay"}</code> | <span className="api-desc">Seconds to wait after letting go before collision comes back. Default 0.1.</span> |
| <Link id="m-disabledcache" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Collider[]> disabledCache"}</code> | <span className="api-desc">The pickup colliders most recently ignored, per interactor, so they can be restored.</span> |
| <Link id="m-enablingcoroutines" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Coroutine> enablingCoroutines"}</code> | <span className="api-desc">Pending re-enable coroutines per interactor, so a new grab can cancel them.</span> |
| <Link id="m-isstarted" /><code>{"private bool isStarted"}</code> | <span className="api-desc">True once `PlayerSet` has run.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderstodisablewheninteractinglist" /><code><Link to="/mod/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting">{"CharacterCollisionController.CollidersToDisableWhenInteracting"}</Link>{"[] CollidersToDisableWhenInteractingList { get; }"}</code> | <span className="api-desc">The configured pairs of hand controller and collider group to ignore while that hand holds something.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | <span className="api-desc">Throws `NotImplementedException`. Don't call it.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to `PlayerController.LinkedToLocalPlayer` so setup waits until the local player exists.</span> |
| <Link id="m-delaysetcolliders" /><code>{"private IEnumerator DelaySetColliders(float delay, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isIgnoring, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> | <span className="api-desc">Coroutine: after the delay, turns collision back on unless the pickup is still held by either hand or is a crafted child.</span> |
| <Link id="m-disablecolliders" /><code>{"private void DisableColliders("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Runs before a hand starts holding a pickup: cancels any pending re-enable and makes the group ignore the pickup's colliders.</span> |
| <Link id="m-enablecolliders" /><code>{"private void EnableColliders("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Runs when a hand lets go of a pickup: starts the delayed re-enable of collision.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unsubscribes from the hands' interaction events.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Once set up, subscribes to each hand's `PreInteractionStarted` and `InteractionEnded` events.</span> |
| <Link id="m-playerset" /><code>{"private void PlayerSet()"}</code> | <span className="api-desc">Called once the local player is linked: builds the interactor to collider group map and subscribes to the events.</span> |
| <Link id="m-setcolliders" /><code>{"private void SetColliders("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isIgnoring)"}</code> | <span className="api-desc">Turns `Physics.IgnoreCollision` on or off between the hand's collider group and the cached pickup colliders.</span> |

</details>
