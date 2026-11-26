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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentHelper<CharacterComponentControllerCollection>`](/mod/game-api/types/alta-player/charactercomponenthelper-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArmIKControllerHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglelimit" /><code>{"private float angleLimit"}</code> | <span className="api-desc">Swing limit in degrees for the wrist rotation limit.</span> |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | <span className="api-desc">Axis of the wrist rotation limit.</span> |
| <Link id="m-body" /><code>{"private Transform body"}</code> | <span className="api-desc">Body transform given to the clavicle, elbow and shoulder controllers.</span> |
| <Link id="m-clavicle" /><code>{"private Transform clavicle"}</code> | <span className="api-desc">Clavicle bone.</span> |
| <Link id="m-clavicletwistrelaxersettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/twistrelaxersetting">{"TwistRelaxerSetting"}</Link>{" clavicleTwistRelaxerSettings"}</code> | <span className="api-desc">Weight and crossfade for the clavicle twist relaxer.</span> |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> | <span className="api-desc">Elbow bone.</span> |
| <Link id="m-elbowtarget" /><code>{"private Transform elbowTarget"}</code> | <span className="api-desc">Bend goal for the elbow.</span> |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> | <span className="api-desc">Hand bone.</span> |
| <Link id="m-handindex" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | <span className="api-desc">Which hand this arm is.</span> |
| <Link id="m-handtarget" /><code>{"private Transform handTarget"}</code> | <span className="api-desc">IK target the hand reaches for.</span> |
| <Link id="m-handtargetwithcorrectedaxis" /><code>{"private Transform handTargetWithCorrectedAxis"}</code> | <span className="api-desc">Optional hand target with fixed axes for the elbow controller; falls back to `handTarget`.</span> |
| <Link id="m-isaddingbonestotwistrelaxermanagerautomatically" /><code>{"private bool isAddingBonesToTwistRelaxerManagerAutomatically"}</code> | <span className="api-desc">If set, adds the elbow to the twist relaxer's bone list automatically.</span> |
| <Link id="m-isfillingreferencefromclavicle" /><code>{"private bool isFillingReferenceFromClavicle"}</code> | <span className="api-desc">Inspector-only field for the fill-from-clavicle button.</span> |
| <Link id="m-isrefreshingmanagers" /><code>{"private bool isRefreshingManagers"}</code> | <span className="api-desc">Inspector-only field for the refresh managers button.</span> |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> | <span className="api-desc">Shoulder bone.</span> |
| <Link id="m-shouldertwistrelaxercontrollerhelper" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/shouldertwistcontrollerhelper">{"ShoulderTwistControllerHelper"}</Link>{" shoulderTwistRelaxerControllerHelper"}</code> | <span className="api-desc">Helper that sets up the shoulder twist limit.</span> |
| <Link id="m-twistlimit" /><code>{"private float twistLimit"}</code> | <span className="api-desc">Twist limit in degrees for the wrist rotation limit.</span> |
| <Link id="m-twistrelaxercontrollerhelper" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/twistrelaxercontrollerhelper">{"TwistRelaxerControllerHelper"}</Link>{" twistRelaxerControllerHelper"}</code> | <span className="api-desc">Helper that sets up the forearm twist relaxers.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clavicle-2" /><code>{"Transform Clavicle { set; }"}</code> | <span className="api-desc">Sets the clavicle bone.</span> |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; }"}</code> | <span className="api-desc">The shoulder bone.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttofilltransformsfromclavicle" /><code>{"void AttemptToFillTransformsFromClavicle()"}</code> | <span className="api-desc">Fills shoulder, elbow and hand by walking first children down from the clavicle.</span> |
| <Link id="m-resetmanagers" /><code>{"void ResetManagers()"}</code> | <span className="api-desc">Pushes transforms, then sets up the twist relaxers and shoulder twist limit.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: pushes the transforms to the controllers and runs the refresh or fill actions if their buttons were pressed.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setmanagertransforms" /><code>{"private void SetManagerTransforms()"}</code> | <span className="api-desc">Assigns bones and targets to the limb IK, clavicle, elbow, twist and shoulder controllers, and sets the wrist rotation limit.</span> |

</details>
