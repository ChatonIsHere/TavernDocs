---
title: "CustomizationPlayerController"
description: "class CustomizationPlayerController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationPlayerController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`SmoothLocomotionPlayerController`](/game-api/types/global-s/smoothlocomotionplayercontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomizationPlayerController()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-head" /><code>{"private Transform head"}</code> |
| <Link id="m-ishidingghosthandsoninteract" /><code>{"private bool isHidingGhostHandsOnInteract"}</code> |
| <Link id="m-leftghosthandcolliders" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" leftGhostHandColliders"}</code> |
| <Link id="m-rightghosthandcolliders" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" rightGhostHandColliders"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/customizationstatesettings">{"CustomizationStateSettings"}</Link>{" settings"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-head-2" /><code>{"override Transform Head { get; }"}</code> |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> |
| <Link id="m-islocalplayer" /><code>{"override bool IsLocalPlayer { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |
| <Link id="m-delayreposition" /><code>{"protected override void DelayReposition()"}</code> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-gethandcollidersforinteractor" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" GetHandCollidersForInteractor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-oncontrollerinteractionend" /><code>{"private void OnControllerInteractionEnd("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |
| <Link id="m-oncontrollerinteractionstart" /><code>{"private void OnControllerInteractionStart("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |
| <Link id="m-setghosthandstateforinteraction" /><code>{"private void SetGhostHandStateForInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, bool enabled)"}</code> |
| <Link id="m-setupcontroller" /><code>{"private void SetupController("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationPlayerController`:

[`CustomizationState.customizationController`](/game-api/types/alta-player/customizationstate#m-customizationcontroller), [`PlayerControllerPrefabs.customizationController`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-customizationcontroller), [`PlayerControllerPrefabs.CustomizationController`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-customizationcontroller-2).
