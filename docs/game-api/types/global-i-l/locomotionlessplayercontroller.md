---
title: "LocomotionlessPlayerController"
description: "class LocomotionlessPlayerController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionlessPlayerController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`VRPlayerController`](/game-api/types/global-t-x/vrplayercontroller), [`IPlatformPlayer`](/game-api/types/global-i-l/iplatformplayer), [`IHasFingertips`](/game-api/types/global-i-l/ihasfingertips), [`IMenuPlayerController`](/game-api/types/global-i-l/imenuplayercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocomotionlessPlayerController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fingertips" /><code>{"private "}<Link to="/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" fingerTips"}</code> |  |
| <Link id="m-head" /><code>{"private Transform head"}</code> |  |
| <Link id="m-leftghosthandcolliders" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" leftGhostHandColliders"}</code> |  |
| <Link id="m-leftinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" leftInput"}</code> |  |
| <Link id="m-rightghosthandcolliders" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" rightGhostHandColliders"}</code> |  |
| <Link id="m-rightinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" rightInput"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-extraobjects" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/posedobject">{"PosedObject"}</Link>{"> ExtraObjects { get; }"}</code> |  |
| <Link id="m-head-2" /><code>{"override Transform Head { get; }"}</code> |  |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> |  |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; }"}</code> |  |
| <Link id="m-islocalplayer" /><code>{"override bool IsLocalPlayer { get; }"}</code> |  |
| <Link id="m-leftinput-2" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" LeftInput { get; }"}</code> |  |
| <Link id="m-playercontroller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> |  |
| <Link id="m-playermode" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> |  |
| <Link id="m-playertransform" /><code>{"Transform PlayerTransform { get; }"}</code> |  |
| <Link id="m-rightinput-2" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" RightInput { get; }"}</code> |  |
| <Link id="m-ihasfingertips-fingertips" /><code>{"private "}<Link to="/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" IHasFingertips.FingerTips { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setcontrols" /><code>{"void SetControls()"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-hideghosthand" /><code>{"private void HideGhostHand("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-ondisconnectedfromplatform" /><code>{"private void IPlatformPlayer.OnDisconnectedFromPlatform()"}</code> |  |
| <Link id="m-setghosthandcollidersactive" /><code>{"private void SetGhostHandCollidersActive(bool isActive)"}</code> |  |
| <Link id="m-showghosthand" /><code>{"private void ShowGhostHand("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
