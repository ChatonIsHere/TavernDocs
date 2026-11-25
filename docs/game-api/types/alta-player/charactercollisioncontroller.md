---
title: "CharacterCollisionController"
description: "class CharacterCollisionController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterCollisionController

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`CharacterCollisionControllerHelper`](/game-api/types/alta-player/charactercollisioncontrollerhelper)
- **Nested types** [`CollidersToDisableWhenInteracting`](/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterCollisionController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collidersmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{"> collidersMap"}</code> |  |
| <Link id="m-colliderstodisablewheninteracting" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting">{"CharacterCollisionController.CollidersToDisableWhenInteracting"}</Link>{"[] collidersToDisableWhenInteracting"}</code> |  |
| <Link id="m-collisionenabledelay" /><code>{"private float collisionEnableDelay"}</code> |  |
| <Link id="m-disabledcache" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Collider[]> disabledCache"}</code> |  |
| <Link id="m-enablingcoroutines" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Coroutine> enablingCoroutines"}</code> |  |
| <Link id="m-isstarted" /><code>{"private bool isStarted"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderstodisablewheninteractinglist" /><code><Link to="/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting">{"CharacterCollisionController.CollidersToDisableWhenInteracting"}</Link>{"[] CollidersToDisableWhenInteractingList { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-delaysetcolliders" /><code>{"private IEnumerator DelaySetColliders(float delay, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isIgnoring, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> |  |
| <Link id="m-disablecolliders" /><code>{"private void DisableColliders("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-enablecolliders" /><code>{"private void EnableColliders("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-playerset" /><code>{"private void PlayerSet()"}</code> |  |
| <Link id="m-setcolliders" /><code>{"private void SetColliders("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isIgnoring)"}</code> |  |
