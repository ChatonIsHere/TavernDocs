---
title: "LocomotionlessPlayerController"
description: "A VR player controller that cannot move, used for menu scenes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionlessPlayerController

A **class** in `Root.Township`, no namespace.

A VR player controller that cannot move, used for menu scenes. Always counts as the local player and alive. Client only.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`VRPlayerController`](/game-api/types/global-t-x/vrplayercontroller), [`IPlatformPlayer`](/game-api/types/global-i-l/iplatformplayer), [`IHasFingertips`](/game-api/types/global-i-l/ihasfingertips), [`IMenuPlayerController`](/game-api/types/global-i-l/imenuplayercontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocomotionlessPlayerController()"}</code> |

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

| Member | What it is |
| --- | --- |
| <Link id="m-extraobjects" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/posedobject">{"PosedObject"}</Link>{"> ExtraObjects { get; }"}</code> | Always empty. |
| <Link id="m-head-2" /><code>{"override Transform Head { get; }"}</code> | The head transform. |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | Same as `Head`. |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; }"}</code> | Always true. |
| <Link id="m-islocalplayer" /><code>{"override bool IsLocalPlayer { get; }"}</code> | Always true. |
| <Link id="m-leftinput-2" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" LeftInput { get; }"}</code> | Left hand input. |
| <Link id="m-playercontroller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> | This controller. |
| <Link id="m-playermode" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> | The current global player mode. |
| <Link id="m-playertransform" /><code>{"Transform PlayerTransform { get; }"}</code> | This object's transform. |
| <Link id="m-rightinput-2" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" RightInput { get; }"}</code> | Right hand input. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-ihasfingertips-fingertips" /><code>{"private "}<Link to="/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" IHasFingertips.FingerTips { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setcontrols" /><code>{"void SetControls()"}</code> | Adds the default control modes to both hands. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Marks the player alive and initializes both hand inputs. |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-hideghosthand" /><code>{"private void HideGhostHand("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |
| <Link id="m-ondisconnectedfromplatform" /><code>{"private void IPlatformPlayer.OnDisconnectedFromPlatform()"}</code> |
| <Link id="m-setghosthandcollidersactive" /><code>{"private void SetGhostHandCollidersActive(bool isActive)"}</code> |
| <Link id="m-showghosthand" /><code>{"private void ShowGhostHand("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>
