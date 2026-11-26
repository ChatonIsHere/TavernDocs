---
title: "CustomizationPlayerController"
description: "The player controller used in the character customization room: always local and alive, with smooth locomotion, and it hides ghost hands while holding..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationPlayerController

A **class** in `Root.Township`, the global namespace.

The player controller used in the character customization room: always local and alive, with smooth locomotion, and it hides ghost hands while holding customization pickups. Client side.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`SmoothLocomotionPlayerController`](/mod/game-api/types/global-s/smoothlocomotionplayercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationPlayerController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"private Transform head"}</code> | <span className="api-desc">Backing field for `Head`.</span> |
| <Link id="m-ishidingghosthandsoninteract" /><code>{"private bool isHidingGhostHandsOnInteract"}</code> | <span className="api-desc">Whether ghost hands hide while holding customization pickups.</span> |
| <Link id="m-leftghosthandcolliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" leftGhostHandColliders"}</code> | <span className="api-desc">Left ghost hand colliders, turned off while that hand holds something.</span> |
| <Link id="m-rightghosthandcolliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" rightGhostHandColliders"}</code> | <span className="api-desc">Right ghost hand colliders, turned off while that hand holds something.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/customizationstatesettings">{"CustomizationStateSettings"}</Link>{" settings"}</code> | <span className="api-desc">Customization state settings, used for the room position.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head-2" /><code>{"override Transform Head { get; }"}</code> | <span className="api-desc">The head transform set in the inspector.</span> |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | <span className="api-desc">Same as `Head`.</span> |
| <Link id="m-islocalplayer" /><code>{"override bool IsLocalPlayer { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Marks the controller alive.</span> |
| <Link id="m-delayreposition" /><code>{"protected override void DelayReposition()"}</code> | <span className="api-desc">Moves the player to the customization room position from `settings`.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Also destroys the smooth locomotion object.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethandcollidersforinteractor" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" GetHandCollidersForInteractor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Returns the ghost hand collider group for the interactor's hand.</span> |
| <Link id="m-oncontrollerinteractionend" /><code>{"private void OnControllerInteractionEnd("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Shows the ghost hand and turns its colliders back on when an interaction ends.</span> |
| <Link id="m-oncontrollerinteractionstart" /><code>{"private void OnControllerInteractionStart("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Hides the ghost hand for customization pickups and turns off that hand's colliders.</span> |
| <Link id="m-setghosthandstateforinteraction" /><code>{"private void SetGhostHandStateForInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, bool enabled)"}</code> | <span className="api-desc">Turns the ghost hand renderers on or off when the interactable is a `CustomizationPickup` and hiding is enabled.</span> |
| <Link id="m-setupcontroller" /><code>{"private void SetupController("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Hooks a hand controller's interaction events and limits its pointer around this transform.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Sets up both hand controllers.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationPlayerController`:

<div className="api-used-in">

[`CustomizationState.customizationController`](/mod/game-api/types/alta-player/customizationstate#m-customizationcontroller), [`PlayerControllerPrefabs.customizationController`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs#m-customizationcontroller), [`PlayerControllerPrefabs.CustomizationController`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs#m-customizationcontroller-2).

</div>
