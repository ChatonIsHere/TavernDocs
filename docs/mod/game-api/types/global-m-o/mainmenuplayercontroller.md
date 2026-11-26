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
| <Link id="m-ctor" /><code>{"MainMenuPlayerController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fingertips" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" fingerTips"}</code> | <span className="api-desc">Backing field for the fingertip settings.</span> |
| <Link id="m-head" /><code>{"private Transform head"}</code> | <span className="api-desc">Backing field for `Head`.</span> |
| <Link id="m-leftghosthandcolliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" leftGhostHandColliders"}</code> | <span className="api-desc">Left hand colliders, off while the hand holds something.</span> |
| <Link id="m-leftinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" leftInput"}</code> | <span className="api-desc">Backing field for `LeftInput`.</span> |
| <Link id="m-rightghosthandcolliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" rightGhostHandColliders"}</code> | <span className="api-desc">Right hand colliders, off while the hand holds something.</span> |
| <Link id="m-rightinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" rightInput"}</code> | <span className="api-desc">Backing field for `RightInput`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head-2" /><code>{"override Transform Head { get; }"}</code> | <span className="api-desc">The menu player's head transform.</span> |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | <span className="api-desc">Same as `Head`.</span> |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-leftinput-2" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" LeftInput { get; }"}</code> | <span className="api-desc">Left hand input.</span> |
| <Link id="m-playercontroller" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> | <span className="api-desc">This controller.</span> |
| <Link id="m-playermode" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> | <span className="api-desc">The current player mode from `PlayerModeUtilities`.</span> |
| <Link id="m-playertransform" /><code>{"Transform PlayerTransform { get; }"}</code> | <span className="api-desc">This object's transform.</span> |
| <Link id="m-rightinput-2" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" RightInput { get; }"}</code> | <span className="api-desc">Right hand input.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ihasfingertips-fingertips" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" IHasFingertips.FingerTips { get; }"}</code> | <span className="api-desc">Fingertip settings for the menu hands.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setcontrols" /><code>{"void SetControls()"}</code> | <span className="api-desc">Adds the default controller modes to both hands.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Marks the player alive and sets up both hand inputs.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethandcollidersforinteractor" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" GetHandCollidersForInteractor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Returns the ghost hand colliders for the left or right interactor.</span> |
| <Link id="m-oncontrollerinteractionend" /><code>{"private void OnControllerInteractionEnd("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Turns the hand's ghost colliders back on when it lets go.</span> |
| <Link id="m-oncontrollerinteractionstart" /><code>{"private void OnControllerInteractionStart("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Turns the hand's ghost colliders off while it holds or uses something.</span> |
| <Link id="m-ondisconnectedfromplatform" /><code>{"private void IPlatformPlayer.OnDisconnectedFromPlatform()"}</code> | <span className="api-desc">Unlinks the inputs and fades the screen to black.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Links the inputs with no network player and hooks both interactors.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MainMenuPlayerController`:

<div className="api-used-in">

[`PlayerControllerPrefabs.mainMenuController`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs#m-mainmenucontroller).

</div>
