---
title: "MainMenuPlayerController"
description: "Client: the VR player in the main menu."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuPlayerController

A **class** in `Root.Township`, the global namespace.

Client: the VR player in the main menu. A smooth locomotion player with its own head and inputs that is not linked to a networked player.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`SmoothLocomotionPlayerController`](/mod/game-api/types/global-s/smoothlocomotionplayercontroller), [`IPlatformPlayer`](/mod/game-api/types/global-i-l/iplatformplayer), [`IHasFingertips`](/mod/game-api/types/global-i-l/ihasfingertips), [`IMenuPlayerController`](/mod/game-api/types/global-i-l/imenuplayercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuPlayerController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fingertips" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" fingerTips"}</code> | Backing field for the fingertip settings. |
| <Link id="m-head" /><code>{"private Transform head"}</code> | Backing field for `Head`. |
| <Link id="m-leftghosthandcolliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" leftGhostHandColliders"}</code> | Left hand colliders, off while the hand holds something. |
| <Link id="m-leftinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" leftInput"}</code> | Backing field for `LeftInput`. |
| <Link id="m-rightghosthandcolliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" rightGhostHandColliders"}</code> | Right hand colliders, off while the hand holds something. |
| <Link id="m-rightinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" rightInput"}</code> | Backing field for `RightInput`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head-2" /><code>{"override Transform Head { get; }"}</code> | The menu player's head transform. |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | Same as `Head`. |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; }"}</code> | Always true. |
| <Link id="m-leftinput-2" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" LeftInput { get; }"}</code> | Left hand input. |
| <Link id="m-playercontroller" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> | This controller. |
| <Link id="m-playermode" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> | The current player mode from `PlayerModeUtilities`. |
| <Link id="m-playertransform" /><code>{"Transform PlayerTransform { get; }"}</code> | This object's transform. |
| <Link id="m-rightinput-2" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" RightInput { get; }"}</code> | Right hand input. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ihasfingertips-fingertips" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" IHasFingertips.FingerTips { get; }"}</code> | Fingertip settings for the menu hands. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setcontrols" /><code>{"void SetControls()"}</code> | Adds the default controller modes to both hands. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Marks the player alive and sets up both hand inputs. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethandcollidersforinteractor" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" GetHandCollidersForInteractor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Returns the ghost hand colliders for the left or right interactor. |
| <Link id="m-oncontrollerinteractionend" /><code>{"private void OnControllerInteractionEnd("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Turns the hand's ghost colliders back on when it lets go. |
| <Link id="m-oncontrollerinteractionstart" /><code>{"private void OnControllerInteractionStart("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Turns the hand's ghost colliders off while it holds or uses something. |
| <Link id="m-ondisconnectedfromplatform" /><code>{"private void IPlatformPlayer.OnDisconnectedFromPlatform()"}</code> | Unlinks the inputs and fades the screen to black. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Links the inputs with no network player and hooks both interactors. |

</details>

## Used in

Members of other types that take, return or hold a `MainMenuPlayerController`:

[`PlayerControllerPrefabs.mainMenuController`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs#m-mainmenucontroller).
