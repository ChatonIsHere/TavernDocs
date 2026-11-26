---
title: "ArmIKController"
description: "Arm controller that runs the Final IK limb solver and the game's clavicle, twist, elbow and shoulder controllers in a fixed order each fixed update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArmIKController

A **class** in `Root.Township`, `Alta.Character`.

Arm controller that runs the Final IK limb solver and the game's clavicle, twist, elbow and shoulder controllers in a fixed order each fixed update.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArmIKController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-claviclecontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/claviclecontroller">{"ClavicleController"}</Link>{" clavicleController"}</code> | Backing field for `ClavicleController`. |
| <Link id="m-clavicletwistrelaxer" /><code>{"private TwistRelaxer clavicleTwistRelaxer"}</code> | Backing field for `ClavicleTwistRelaxer`. |
| <Link id="m-elbowcontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/elbowcontroller">{"ElbowController"}</Link>{" elbowController"}</code> | Backing field for `ElbowController`. |
| <Link id="m-isgettingcontrollers" /><code>{"private bool isGettingControllers"}</code> | Inspector-only field that draws the Get Controllers button. |
| <Link id="m-limbik" /><code>{"private LimbIK limbIK"}</code> | Backing field for `LimbIK`. |
| <Link id="m-rotationlimitwrapper" /><code>{"private "}<Link to="/game-api/types/alta-player/rotationlimitwrapper">{"RotationLimitWrapper"}</Link>{" rotationLimitWrapper"}</code> | Wrapper that applies the wrist rotation limit. |
| <Link id="m-shouldertwistcontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/shouldertwistcontroller">{"ShoulderTwistController"}</Link>{" shoulderTwistController"}</code> | Backing field for `ShoulderTwistController`. |
| <Link id="m-twistrelaxercontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/twistrelaxercontroller">{"TwistRelaxerController"}</Link>{" twistRelaxerController"}</code> | Backing field for `TwistRelaxerController`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-claviclecontroller-2" /><code><Link to="/game-api/types/alta-player/claviclecontroller">{"ClavicleController"}</Link>{" "}<Link to="/game-api/types/alta-player/claviclecontroller">{"ClavicleController"}</Link>{" { get; set; }"}</code> | Controller that rotates the clavicle towards the targets. |
| <Link id="m-clavicletwistrelaxer-2" /><code>{"TwistRelaxer ClavicleTwistRelaxer { get; set; }"}</code> | Final IK twist relaxer on the clavicle. |
| <Link id="m-elbowcontroller-2" /><code><Link to="/game-api/types/alta-player/elbowcontroller">{"ElbowController"}</Link>{" "}<Link to="/game-api/types/alta-player/elbowcontroller">{"ElbowController"}</Link>{" { get; set; }"}</code> | Controller that places the elbow bend goal. |
| <Link id="m-limbik-2" /><code>{"LimbIK LimbIK { get; set; }"}</code> | The Final IK `LimbIK` solver for this arm, updated externally. |
| <Link id="m-shouldertwistcontroller-2" /><code><Link to="/game-api/types/alta-player/shouldertwistcontroller">{"ShoulderTwistController"}</Link>{" "}<Link to="/game-api/types/alta-player/shouldertwistcontroller">{"ShoulderTwistController"}</Link>{" { get; set; }"}</code> | Controller that limits shoulder twist. |
| <Link id="m-twistrelaxercontroller-2" /><code><Link to="/game-api/types/alta-player/twistrelaxercontroller">{"TwistRelaxerController"}</Link>{" "}<Link to="/game-api/types/alta-player/twistrelaxercontroller">{"TwistRelaxerController"}</Link>{" { get; set; }"}</code> | Controller that relaxes forearm twist. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-postikupdate" /><code>{"event "}<Link to="/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PostIKUpdate"}</code> | Fired after the arm's IK and controllers have run in a fixed update. |
| <Link id="m-postpostikupdate" /><code>{"event "}<Link to="/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PostPostIKUpdate"}</code> | Fired right after `PostIKUpdate`, for work that must run after it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | Runs clavicle, limb IK, rotation limit, twist relaxers, elbow and shoulder twist, then fires `PostIKUpdate` and `PostPostIKUpdate`. |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | Enables or disables this controller and its clavicle, limb IK, twist relaxers and elbow controller. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcontrollers" /><code>{"private void GetControllers()"}</code> | Editor: fills the controller fields from components on this object and sets the limb bend modifier to Goal. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: runs `GetControllers` when the inspector button is pressed. |

</details>
