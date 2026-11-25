---
title: "ArmIKControllerHelper"
description: "class ArmIKControllerHelper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArmIKControllerHelper

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentHelper<CharacterComponentControllerCollection>`](/game-api/types/alta-player/charactercomponenthelper-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArmIKControllerHelper()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-anglelimit" /><code>{"private float angleLimit"}</code> |  |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> |  |
| <Link id="m-body" /><code>{"private Transform body"}</code> |  |
| <Link id="m-clavicle" /><code>{"private Transform clavicle"}</code> |  |
| <Link id="m-clavicletwistrelaxersettings" /><code>{"private "}<Link to="/game-api/types/alta-player/twistrelaxersetting">{"TwistRelaxerSetting"}</Link>{" clavicleTwistRelaxerSettings"}</code> |  |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> |  |
| <Link id="m-elbowtarget" /><code>{"private Transform elbowTarget"}</code> |  |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> |  |
| <Link id="m-handindex" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> |  |
| <Link id="m-handtarget" /><code>{"private Transform handTarget"}</code> |  |
| <Link id="m-handtargetwithcorrectedaxis" /><code>{"private Transform handTargetWithCorrectedAxis"}</code> |  |
| <Link id="m-isaddingbonestotwistrelaxermanagerautomatically" /><code>{"private bool isAddingBonesToTwistRelaxerManagerAutomatically"}</code> |  |
| <Link id="m-isfillingreferencefromclavicle" /><code>{"private bool isFillingReferenceFromClavicle"}</code> |  |
| <Link id="m-isrefreshingmanagers" /><code>{"private bool isRefreshingManagers"}</code> |  |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> |  |
| <Link id="m-shouldertwistrelaxercontrollerhelper" /><code>{"private "}<Link to="/game-api/types/alta-player/shouldertwistcontrollerhelper">{"ShoulderTwistControllerHelper"}</Link>{" shoulderTwistRelaxerControllerHelper"}</code> |  |
| <Link id="m-twistlimit" /><code>{"private float twistLimit"}</code> |  |
| <Link id="m-twistrelaxercontrollerhelper" /><code>{"private "}<Link to="/game-api/types/alta-player/twistrelaxercontrollerhelper">{"TwistRelaxerControllerHelper"}</Link>{" twistRelaxerControllerHelper"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clavicle-2" /><code>{"Transform Clavicle { set; }"}</code> |  |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttofilltransformsfromclavicle" /><code>{"void AttemptToFillTransformsFromClavicle()"}</code> |  |
| <Link id="m-resetmanagers" /><code>{"void ResetManagers()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-setmanagertransforms" /><code>{"private void SetManagerTransforms()"}</code> |  |
