---
title: "MainMenuPlayerController"
description: "class MainMenuPlayerController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuPlayerController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`SmoothLocomotionPlayerController`](/game-api/types/global-s/smoothlocomotionplayercontroller), [`IPlatformPlayer`](/game-api/types/global-i-l/iplatformplayer), [`IHasFingertips`](/game-api/types/global-i-l/ihasfingertips), [`IMenuPlayerController`](/game-api/types/global-i-l/imenuplayercontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MainMenuPlayerController()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-fingertips" /><code>{"private "}<Link to="/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" fingerTips"}</code> |
| <Link id="m-head" /><code>{"private Transform head"}</code> |
| <Link id="m-leftghosthandcolliders" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" leftGhostHandColliders"}</code> |
| <Link id="m-leftinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" leftInput"}</code> |
| <Link id="m-rightghosthandcolliders" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" rightGhostHandColliders"}</code> |
| <Link id="m-rightinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" rightInput"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-head-2" /><code>{"override Transform Head { get; }"}</code> |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; }"}</code> |
| <Link id="m-leftinput-2" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" LeftInput { get; }"}</code> |
| <Link id="m-playercontroller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> |
| <Link id="m-playermode" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> |
| <Link id="m-playertransform" /><code>{"Transform PlayerTransform { get; }"}</code> |
| <Link id="m-rightinput-2" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" RightInput { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-ihasfingertips-fingertips" /><code>{"private "}<Link to="/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" IHasFingertips.FingerTips { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-setcontrols" /><code>{"void SetControls()"}</code> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-gethandcollidersforinteractor" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" GetHandCollidersForInteractor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-oncontrollerinteractionend" /><code>{"private void OnControllerInteractionEnd("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |
| <Link id="m-oncontrollerinteractionstart" /><code>{"private void OnControllerInteractionStart("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |
| <Link id="m-ondisconnectedfromplatform" /><code>{"private void IPlatformPlayer.OnDisconnectedFromPlatform()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `MainMenuPlayerController`:

[`PlayerControllerPrefabs.mainMenuController`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-mainmenucontroller).
