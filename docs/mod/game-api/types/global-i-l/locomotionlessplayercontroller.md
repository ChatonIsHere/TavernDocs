---
title: "LocomotionlessPlayerController"
description: "A VR player controller that cannot move, used for menu scenes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionlessPlayerController

A **class** in `Root.Township`, the global namespace.

A VR player controller that cannot move, used for menu scenes. Always counts as the local player and alive. Client only.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`VRPlayerController`](/mod/game-api/types/global-t-x/vrplayercontroller), [`IPlatformPlayer`](/mod/game-api/types/global-i-l/iplatformplayer), [`IHasFingertips`](/mod/game-api/types/global-i-l/ihasfingertips), [`IMenuPlayerController`](/mod/game-api/types/global-i-l/imenuplayercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocomotionlessPlayerController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fingertips" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" fingerTips"}</code> | <span className="api-desc">Fingertip settings.</span> |
| <Link id="m-head" /><code>{"private Transform head"}</code> | <span className="api-desc">Transform used as `Head` and `HeadFollow`.</span> |
| <Link id="m-leftghosthandcolliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" leftGhostHandColliders"}</code> | <span className="api-desc">Left ghost hand colliders.</span> |
| <Link id="m-leftinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" leftInput"}</code> | <span className="api-desc">Left hand input.</span> |
| <Link id="m-rightghosthandcolliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" rightGhostHandColliders"}</code> | <span className="api-desc">Right ghost hand colliders.</span> |
| <Link id="m-rightinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" rightInput"}</code> | <span className="api-desc">Right hand input.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-extraobjects" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/posedobject">{"PosedObject"}</Link>{"> ExtraObjects { get; }"}</code> | <span className="api-desc">Always empty.</span> |
| <Link id="m-head-2" /><code>{"override Transform Head { get; }"}</code> | <span className="api-desc">The head transform.</span> |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | <span className="api-desc">Same as `Head`.</span> |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-islocalplayer" /><code>{"override bool IsLocalPlayer { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-leftinput-2" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" LeftInput { get; }"}</code> | <span className="api-desc">Left hand input.</span> |
| <Link id="m-playercontroller" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> | <span className="api-desc">This controller.</span> |
| <Link id="m-playermode" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> | <span className="api-desc">The current global player mode.</span> |
| <Link id="m-playertransform" /><code>{"Transform PlayerTransform { get; }"}</code> | <span className="api-desc">This object's transform.</span> |
| <Link id="m-rightinput-2" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" RightInput { get; }"}</code> | <span className="api-desc">Right hand input.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ihasfingertips-fingertips" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" IHasFingertips.FingerTips { get; }"}</code> | <span className="api-desc">Returns `fingerTips`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setcontrols" /><code>{"void SetControls()"}</code> | <span className="api-desc">Adds the default control modes to both hands.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Marks the player alive and initializes both hand inputs.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hideghosthand" /><code>{"private void HideGhostHand("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Turns off the ghost hand colliders when a hand grabs something.</span> |
| <Link id="m-ondisconnectedfromplatform" /><code>{"private void IPlatformPlayer.OnDisconnectedFromPlatform()"}</code> | <span className="api-desc">Unlinks the controller from the player and fades to black.</span> |
| <Link id="m-setghosthandcollidersactive" /><code>{"private void SetGhostHandCollidersActive(bool isActive)"}</code> | <span className="api-desc">Turns both ghost hand collider groups on or off.</span> |
| <Link id="m-showghosthand" /><code>{"private void ShowGhostHand("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Turns the ghost hand colliders back on when a hand lets go.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Links the controller to its inputs and hooks grab and release on both hands to the ghost hand colliders.</span> |

</details>
