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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArmIKController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-claviclecontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/claviclecontroller">{"ClavicleController"}</Link>{" clavicleController"}</code> | <span className="api-desc">Backing field for `ClavicleController`.</span> |
| <Link id="m-clavicletwistrelaxer" /><code>{"private TwistRelaxer clavicleTwistRelaxer"}</code> | <span className="api-desc">Backing field for `ClavicleTwistRelaxer`.</span> |
| <Link id="m-elbowcontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/elbowcontroller">{"ElbowController"}</Link>{" elbowController"}</code> | <span className="api-desc">Backing field for `ElbowController`.</span> |
| <Link id="m-isgettingcontrollers" /><code>{"private bool isGettingControllers"}</code> | <span className="api-desc">Inspector-only field that draws the Get Controllers button.</span> |
| <Link id="m-limbik" /><code>{"private LimbIK limbIK"}</code> | <span className="api-desc">Backing field for `LimbIK`.</span> |
| <Link id="m-rotationlimitwrapper" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/rotationlimitwrapper">{"RotationLimitWrapper"}</Link>{" rotationLimitWrapper"}</code> | <span className="api-desc">Wrapper that applies the wrist rotation limit.</span> |
| <Link id="m-shouldertwistcontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/shouldertwistcontroller">{"ShoulderTwistController"}</Link>{" shoulderTwistController"}</code> | <span className="api-desc">Backing field for `ShoulderTwistController`.</span> |
| <Link id="m-twistrelaxercontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/twistrelaxercontroller">{"TwistRelaxerController"}</Link>{" twistRelaxerController"}</code> | <span className="api-desc">Backing field for `TwistRelaxerController`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-claviclecontroller-2" /><code><Link to="/mod/game-api/types/alta-player/claviclecontroller">{"ClavicleController"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/claviclecontroller">{"ClavicleController"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Controller that rotates the clavicle towards the targets.</span> |
| <Link id="m-clavicletwistrelaxer-2" /><code>{"TwistRelaxer ClavicleTwistRelaxer { get; set; }"}</code> | <span className="api-desc">Final IK twist relaxer on the clavicle.</span> |
| <Link id="m-elbowcontroller-2" /><code><Link to="/mod/game-api/types/alta-player/elbowcontroller">{"ElbowController"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/elbowcontroller">{"ElbowController"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Controller that places the elbow bend goal.</span> |
| <Link id="m-limbik-2" /><code>{"LimbIK LimbIK { get; set; }"}</code> | <span className="api-desc">The Final IK `LimbIK` solver for this arm, updated externally.</span> |
| <Link id="m-shouldertwistcontroller-2" /><code><Link to="/mod/game-api/types/alta-player/shouldertwistcontroller">{"ShoulderTwistController"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/shouldertwistcontroller">{"ShoulderTwistController"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Controller that limits shoulder twist.</span> |
| <Link id="m-twistrelaxercontroller-2" /><code><Link to="/mod/game-api/types/alta-player/twistrelaxercontroller">{"TwistRelaxerController"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/twistrelaxercontroller">{"TwistRelaxerController"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Controller that relaxes forearm twist.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-postikupdate" /><code>{"event "}<Link to="/mod/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PostIKUpdate"}</code> | <span className="api-desc">Fired after the arm's IK and controllers have run in a fixed update.</span> |
| <Link id="m-postpostikupdate" /><code>{"event "}<Link to="/mod/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PostPostIKUpdate"}</code> | <span className="api-desc">Fired right after `PostIKUpdate`, for work that must run after it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | <span className="api-desc">Runs clavicle, limb IK, rotation limit, twist relaxers, elbow and shoulder twist, then fires `PostIKUpdate` and `PostPostIKUpdate`.</span> |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | <span className="api-desc">Enables or disables this controller and its clavicle, limb IK, twist relaxers and elbow controller.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcontrollers" /><code>{"private void GetControllers()"}</code> | <span className="api-desc">Editor: fills the controller fields from components on this object and sets the limb bend modifier to Goal.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: runs `GetControllers` when the inspector button is pressed.</span> |

</details>
