---
title: "ArmIKController"
description: "class ArmIKController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArmIKController

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ArmIKController()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-claviclecontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/claviclecontroller">{"ClavicleController"}</Link>{" clavicleController"}</code> |
| <Link id="m-clavicletwistrelaxer" /><code>{"private TwistRelaxer clavicleTwistRelaxer"}</code> |
| <Link id="m-elbowcontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/elbowcontroller">{"ElbowController"}</Link>{" elbowController"}</code> |
| <Link id="m-isgettingcontrollers" /><code>{"private bool isGettingControllers"}</code> |
| <Link id="m-limbik" /><code>{"private LimbIK limbIK"}</code> |
| <Link id="m-rotationlimitwrapper" /><code>{"private "}<Link to="/game-api/types/alta-player/rotationlimitwrapper">{"RotationLimitWrapper"}</Link>{" rotationLimitWrapper"}</code> |
| <Link id="m-shouldertwistcontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/shouldertwistcontroller">{"ShoulderTwistController"}</Link>{" shoulderTwistController"}</code> |
| <Link id="m-twistrelaxercontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/twistrelaxercontroller">{"TwistRelaxerController"}</Link>{" twistRelaxerController"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-claviclecontroller-2" /><code><Link to="/game-api/types/alta-player/claviclecontroller">{"ClavicleController"}</Link>{" "}<Link to="/game-api/types/alta-player/claviclecontroller">{"ClavicleController"}</Link>{" { get; set; }"}</code> |
| <Link id="m-clavicletwistrelaxer-2" /><code>{"TwistRelaxer ClavicleTwistRelaxer { get; set; }"}</code> |
| <Link id="m-elbowcontroller-2" /><code><Link to="/game-api/types/alta-player/elbowcontroller">{"ElbowController"}</Link>{" "}<Link to="/game-api/types/alta-player/elbowcontroller">{"ElbowController"}</Link>{" { get; set; }"}</code> |
| <Link id="m-limbik-2" /><code>{"LimbIK LimbIK { get; set; }"}</code> |
| <Link id="m-shouldertwistcontroller-2" /><code><Link to="/game-api/types/alta-player/shouldertwistcontroller">{"ShoulderTwistController"}</Link>{" "}<Link to="/game-api/types/alta-player/shouldertwistcontroller">{"ShoulderTwistController"}</Link>{" { get; set; }"}</code> |
| <Link id="m-twistrelaxercontroller-2" /><code><Link to="/game-api/types/alta-player/twistrelaxercontroller">{"TwistRelaxerController"}</Link>{" "}<Link to="/game-api/types/alta-player/twistrelaxercontroller">{"TwistRelaxerController"}</Link>{" { get; set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-postikupdate" /><code>{"event "}<Link to="/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PostIKUpdate"}</code> |
| <Link id="m-postpostikupdate" /><code>{"event "}<Link to="/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PostPostIKUpdate"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getcontrollers" /><code>{"private void GetControllers()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>
