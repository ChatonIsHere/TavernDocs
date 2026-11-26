---
title: "CustomizationPlayerController"
description: "The player controller used in the character customization room: always local and alive, with smooth locomotion, and it hides ghost hands while holding..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationPlayerController

A **class** in `Root.Township`, no namespace.

The player controller used in the character customization room: always local and alive, with smooth locomotion, and it hides ghost hands while holding customization pickups. Client side.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`SmoothLocomotionPlayerController`](/game-api/types/global-s/smoothlocomotionplayercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationPlayerController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"private Transform head"}</code> | Backing field for `Head`. |
| <Link id="m-ishidingghosthandsoninteract" /><code>{"private bool isHidingGhostHandsOnInteract"}</code> | Whether ghost hands hide while holding customization pickups. |
| <Link id="m-leftghosthandcolliders" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" leftGhostHandColliders"}</code> | Left ghost hand colliders, turned off while that hand holds something. |
| <Link id="m-rightghosthandcolliders" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" rightGhostHandColliders"}</code> | Right ghost hand colliders, turned off while that hand holds something. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/customizationstatesettings">{"CustomizationStateSettings"}</Link>{" settings"}</code> | Customization state settings, used for the room position. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head-2" /><code>{"override Transform Head { get; }"}</code> | The head transform set in the inspector. |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | Same as `Head`. |
| <Link id="m-islocalplayer" /><code>{"override bool IsLocalPlayer { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Marks the controller alive. |
| <Link id="m-delayreposition" /><code>{"protected override void DelayReposition()"}</code> | Moves the player to the customization room position from `settings`. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Also destroys the smooth locomotion object. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethandcollidersforinteractor" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" GetHandCollidersForInteractor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Returns the ghost hand collider group for the interactor's hand. |
| <Link id="m-oncontrollerinteractionend" /><code>{"private void OnControllerInteractionEnd("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Shows the ghost hand and turns its colliders back on when an interaction ends. |
| <Link id="m-oncontrollerinteractionstart" /><code>{"private void OnControllerInteractionStart("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Hides the ghost hand for customization pickups and turns off that hand's colliders. |
| <Link id="m-setghosthandstateforinteraction" /><code>{"private void SetGhostHandStateForInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, bool enabled)"}</code> | Turns the ghost hand renderers on or off when the interactable is a `CustomizationPickup` and hiding is enabled. |
| <Link id="m-setupcontroller" /><code>{"private void SetupController("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Hooks a hand controller's interaction events and limits its pointer around this transform. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Sets up both hand controllers. |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationPlayerController`:

[`CustomizationState.customizationController`](/game-api/types/alta-player/customizationstate#m-customizationcontroller), [`PlayerControllerPrefabs.customizationController`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-customizationcontroller), [`PlayerControllerPrefabs.CustomizationController`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-customizationcontroller-2).
