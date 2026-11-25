---
title: "HandGrip"
description: "Curls a hand model's fingers around what it holds, and blends in finger tracking from the controller."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGrip

A **class** in `Root.Township`, `Alta.Character`.

Curls a hand model's fingers around what it holds, and blends in finger tracking from the controller. Turns itself off on headless servers.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`GripFinger`](/game-api/types/alta-player/handgrip-gripfinger), [`GripJoint`](/game-api/types/alta-player/handgrip-gripjoint), [`ThumbGripJoint`](/game-api/types/alta-player/handgrip-thumbgripjoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandGrip()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-configuration" /><code>{"private "}<Link to="/game-api/types/alta-player/handgripconfiguration">{"HandGripConfiguration"}</Link>{" configuration"}</code> |  |
| <Link id="m-coroutine" /><code>{"private Coroutine coroutine"}</code> |  |
| <Link id="m-fingerprogress" /><code>{"private float[] fingerProgress"}</code> |  |
| <Link id="m-fingers" /><code>{"private "}<Link to="/game-api/types/alta-player/handgrip-gripfinger">{"HandGrip.GripFinger"}</Link>{"[] fingers"}</code> |  |
| <Link id="m-griptime" /><code>{"private float gripTime"}</code> |  |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> |  |
| <Link id="m-isgripping" /><code>{"private bool isGripping"}</code> |  |
| <Link id="m-islefthand" /><code>{"private bool isLeftHand"}</code> |  |
| <Link id="m-isnextforcedskeletal" /><code>{"private bool isNextForcedSkeletal"}</code> |  |
| <Link id="m-nonthumbcurl" /><code>{"private float nonThumbCurl"}</code> |  |
| <Link id="m-splaidlerp" /><code>{"private float splaidLerp"}</code> |  |
| <Link id="m-totalcurl" /><code>{"private float totalCurl"}</code> |  |
| <Link id="m-wrist" /><code>{"private Transform wrist"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentthumbconfiguration" /><code><Link to="/game-api/types/global-t-x/thumbconfiguration">{"ThumbConfiguration"}</Link>{" CurrentThumbConfiguration { get; }"}</code> | Thumb configuration for the current thumb position. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | Whether finger poses are updated each frame. |
| <Link id="m-isgripping-2" /><code>{"bool IsGripping { get; set; }"}</code> | Whether the hand is gripping. Setting it to true starts a grip. |
| <Link id="m-islefthand-2" /><code>{"bool IsLeftHand { get; }"}</code> | True for the left hand. |
| <Link id="m-isskeletalgripenabled" /><code>{"bool IsSkeletalGripEnabled { get; set; }"}</code> | Whether tracked finger curl can add to the grip pose. |
| <Link id="m-thumbposition" /><code><Link to="/game-api/types/global-t-x/thumbposition">{"ThumbPosition"}</Link>{" "}<Link to="/game-api/types/global-t-x/thumbposition">{"ThumbPosition"}</Link>{" { get; set; }"}</code> | Where the thumb rests, which picks the thumb configuration. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-postlateupdate" /><code>{"event "}<Link to="/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PostLateUpdate"}</code> | Raised after the fingers are posed each frame. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcenextskeletal" /><code>{"void ForceNextSkeletal()"}</code> | Makes the next frame use the tracked finger pose. |
| <Link id="m-serializegrip" /><code>{"void SerializeGrip("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes each finger's grip pose. Reading starts the grip animation. |
| <Link id="m-skeletalinput" /><code>{"void SkeletalInput(float[] fingersProgress)"}</code> | Takes per-finger curl amounts (thumb first) from finger tracking. |
| <Link id="m-startgrip" /><code>{"void StartGrip()"}</code> | Curls each finger until it touches the held object and animates into that pose. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-updategrip" /><code>{"private IEnumerator UpdateGrip() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `HandGrip`:

[`CharacterCollisionControllerHelper.handgrips`](/game-api/types/alta-player/charactercollisioncontrollerhelper#m-handgrips), [`Hand.gripAnimator`](/game-api/types/alta-player/hand#m-gripanimator), [`Hand.GripAnimator`](/game-api/types/alta-player/hand#m-gripanimator-2), [`HandGrip.GripFinger.GripFinger`](/game-api/types/alta-player/handgrip-gripfinger#m-ctor-2), [`HandGrip.GripJoint.GripJoint`](/game-api/types/alta-player/handgrip-gripjoint#m-ctor-2), [`HandGrip.GripJoint.hand`](/game-api/types/alta-player/handgrip-gripjoint#m-hand), [`HandGrip.ThumbGripJoint.ThumbGripJoint`](/game-api/types/alta-player/handgrip-thumbgripjoint#m-ctor-2), [`MasterHand.handGrip`](/game-api/types/alta-player/masterhand#m-handgrip), [`Interactor.GripAnimator`](/game-api/types/global-i-l/interactor#m-gripanimator).
