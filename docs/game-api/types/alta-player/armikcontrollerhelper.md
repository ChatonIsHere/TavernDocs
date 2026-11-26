---
title: "ArmIKControllerHelper"
description: "Editor setup helper for an arm's IK controllers: copies the bone and target transforms it is given into the solver, relaxers and controllers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArmIKControllerHelper

A **class** in `Root.Township`, `Alta.Character`.

Editor setup helper for an arm's IK controllers: copies the bone and target transforms it is given into the solver, relaxers and controllers.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentHelper<CharacterComponentControllerCollection>`](/game-api/types/alta-player/charactercomponenthelper-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ArmIKControllerHelper()"}</code> |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglelimit" /><code>{"private float angleLimit"}</code> | Swing limit in degrees for the wrist rotation limit. |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | Axis of the wrist rotation limit. |
| <Link id="m-body" /><code>{"private Transform body"}</code> | Body transform given to the clavicle, elbow and shoulder controllers. |
| <Link id="m-clavicle" /><code>{"private Transform clavicle"}</code> | Clavicle bone. |
| <Link id="m-clavicletwistrelaxersettings" /><code>{"private "}<Link to="/game-api/types/alta-player/twistrelaxersetting">{"TwistRelaxerSetting"}</Link>{" clavicleTwistRelaxerSettings"}</code> | Weight and crossfade for the clavicle twist relaxer. |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> | Elbow bone. |
| <Link id="m-elbowtarget" /><code>{"private Transform elbowTarget"}</code> | Bend goal for the elbow. |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> | Hand bone. |
| <Link id="m-handindex" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | Which hand this arm is. |
| <Link id="m-handtarget" /><code>{"private Transform handTarget"}</code> | IK target the hand reaches for. |
| <Link id="m-handtargetwithcorrectedaxis" /><code>{"private Transform handTargetWithCorrectedAxis"}</code> | Optional hand target with fixed axes for the elbow controller; falls back to `handTarget`. |
| <Link id="m-isaddingbonestotwistrelaxermanagerautomatically" /><code>{"private bool isAddingBonesToTwistRelaxerManagerAutomatically"}</code> | If set, adds the elbow to the twist relaxer's bone list automatically. |
| <Link id="m-isfillingreferencefromclavicle" /><code>{"private bool isFillingReferenceFromClavicle"}</code> | Inspector-only field for the fill-from-clavicle button. |
| <Link id="m-isrefreshingmanagers" /><code>{"private bool isRefreshingManagers"}</code> | Inspector-only field for the refresh managers button. |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> | Shoulder bone. |
| <Link id="m-shouldertwistrelaxercontrollerhelper" /><code>{"private "}<Link to="/game-api/types/alta-player/shouldertwistcontrollerhelper">{"ShoulderTwistControllerHelper"}</Link>{" shoulderTwistRelaxerControllerHelper"}</code> | Helper that sets up the shoulder twist limit. |
| <Link id="m-twistlimit" /><code>{"private float twistLimit"}</code> | Twist limit in degrees for the wrist rotation limit. |
| <Link id="m-twistrelaxercontrollerhelper" /><code>{"private "}<Link to="/game-api/types/alta-player/twistrelaxercontrollerhelper">{"TwistRelaxerControllerHelper"}</Link>{" twistRelaxerControllerHelper"}</code> | Helper that sets up the forearm twist relaxers. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clavicle-2" /><code>{"Transform Clavicle { set; }"}</code> | Sets the clavicle bone. |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; }"}</code> | The shoulder bone. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttofilltransformsfromclavicle" /><code>{"void AttemptToFillTransformsFromClavicle()"}</code> | Fills shoulder, elbow and hand by walking first children down from the clavicle. |
| <Link id="m-resetmanagers" /><code>{"void ResetManagers()"}</code> | Pushes transforms, then sets up the twist relaxers and shoulder twist limit. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: pushes the transforms to the controllers and runs the refresh or fill actions if their buttons were pressed. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setmanagertransforms" /><code>{"private void SetManagerTransforms()"}</code> | Assigns bones and targets to the limb IK, clavicle, elbow, twist and shoulder controllers, and sets the wrist rotation limit. |

</details>
