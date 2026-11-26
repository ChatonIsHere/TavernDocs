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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`GripFinger`](/mod/game-api/types/alta-player/handgrip-gripfinger), [`GripJoint`](/mod/game-api/types/alta-player/handgrip-gripjoint), [`ThumbGripJoint`](/mod/game-api/types/alta-player/handgrip-thumbgripjoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandGrip()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-configuration" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration">{"HandGripConfiguration"}</Link>{" configuration"}</code> | <span className="api-desc">The `HandGripConfiguration` with thumb setups, splay curve and grip timings.</span> |
| <Link id="m-coroutine" /><code>{"private Coroutine coroutine"}</code> | <span className="api-desc">The running `UpdateGrip`, or null.</span> |
| <Link id="m-fingerprogress" /><code>{"private float[] fingerProgress"}</code> | <span className="api-desc">Per-finger curl from skeletal input (thumb first), set by `SkeletalInput`.</span> |
| <Link id="m-fingers" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handgrip-gripfinger">{"HandGrip.GripFinger"}</Link>{"[] fingers"}</code> | <span className="api-desc">The five fingers, each a chain of joints that curl until they hit the held object.</span> |
| <Link id="m-griptime" /><code>{"private float gripTime"}</code> | <span className="api-desc">Grip blend from 0 (open) to 1 (fully gripped), driven by `UpdateGrip`.</span> |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> | <span className="api-desc">Set when the grip changes. Probably meant to skip unchanged frames, though `LateUpdate` doesn't check it.</span> |
| <Link id="m-isgripping" /><code>{"private bool isGripping"}</code> | <span className="api-desc">Backing field for `IsGripping`.</span> |
| <Link id="m-islefthand" /><code>{"private bool isLeftHand"}</code> | <span className="api-desc">Backing field for `IsLeftHand`; flips curl sides for the left hand.</span> |
| <Link id="m-isnextforcedskeletal" /><code>{"private bool isNextForcedSkeletal"}</code> | <span className="api-desc">When set by `ForceNextSkeletal`, the next `LateUpdate` uses skeletal blending even with no finger curl.</span> |
| <Link id="m-nonthumbcurl" /><code>{"private float nonThumbCurl"}</code> | <span className="api-desc">Sum of the four non-thumb finger curls. Above 0.8 the fingers follow skeletal input while gripping.</span> |
| <Link id="m-splaidlerp" /><code>{"private float splaidLerp"}</code> | <span className="api-desc">How splayed the fingers are, from the configuration's curve over `totalCurl`.</span> |
| <Link id="m-totalcurl" /><code>{"private float totalCurl"}</code> | <span className="api-desc">Sum of all five finger curls from skeletal input.</span> |
| <Link id="m-wrist" /><code>{"private Transform wrist"}</code> | <span className="api-desc">Wrist transform the finger chains start from.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentthumbconfiguration" /><code><Link to="/mod/game-api/types/global-t-x/thumbconfiguration">{"ThumbConfiguration"}</Link>{" CurrentThumbConfiguration { get; }"}</code> | <span className="api-desc">Thumb configuration for the current thumb position.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether finger poses are updated each frame.</span> |
| <Link id="m-isgripping-2" /><code>{"bool IsGripping { get; set; }"}</code> | <span className="api-desc">Whether the hand is gripping. Setting it to true starts a grip.</span> |
| <Link id="m-islefthand-2" /><code>{"bool IsLeftHand { get; }"}</code> | <span className="api-desc">True for the left hand.</span> |
| <Link id="m-isskeletalgripenabled" /><code>{"bool IsSkeletalGripEnabled { get; set; }"}</code> | <span className="api-desc">Whether tracked finger curl can add to the grip pose.</span> |
| <Link id="m-thumbposition" /><code><Link to="/mod/game-api/types/global-t-x/thumbposition">{"ThumbPosition"}</Link>{" "}<Link to="/mod/game-api/types/global-t-x/thumbposition">{"ThumbPosition"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Where the thumb rests, which picks the thumb configuration.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-postlateupdate" /><code>{"event "}<Link to="/mod/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PostLateUpdate"}</code> | <span className="api-desc">Raised after the fingers are posed each frame.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcenextskeletal" /><code>{"void ForceNextSkeletal()"}</code> | <span className="api-desc">Makes the next frame use the tracked finger pose.</span> |
| <Link id="m-serializegrip" /><code>{"void SerializeGrip("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes each finger's grip pose. Reading starts the grip animation.</span> |
| <Link id="m-skeletalinput" /><code>{"void SkeletalInput(float[] fingersProgress)"}</code> | <span className="api-desc">Takes per-finger curl amounts (thumb first) from finger tracking.</span> |
| <Link id="m-startgrip" /><code>{"void StartGrip()"}</code> | <span className="api-desc">Curls each finger until it touches the held object and animates into that pose.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Disables the component on headless servers, so grips only animate on clients.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Blends every finger between open, saved grip and skeletal input each frame, then raises `PostLateUpdate`.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws each finger joint's collision box, red when it's touching something.</span> |
| <Link id="m-updategrip" /><code>{"private IEnumerator UpdateGrip() (iterator)"}</code> | <span className="api-desc">Coroutine that moves `gripTime` towards 1 while gripping and back to 0 after, using the configured durations.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HandGrip`:

<div className="api-used-in">

[`CharacterCollisionControllerHelper.handgrips`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper#m-handgrips), [`Hand.gripAnimator`](/mod/game-api/types/alta-player/hand#m-gripanimator), [`Hand.GripAnimator`](/mod/game-api/types/alta-player/hand#m-gripanimator-2), [`HandGrip.GripFinger.GripFinger`](/mod/game-api/types/alta-player/handgrip-gripfinger#m-ctor-2), [`HandGrip.GripJoint.GripJoint`](/mod/game-api/types/alta-player/handgrip-gripjoint#m-ctor-2), [`HandGrip.GripJoint.hand`](/mod/game-api/types/alta-player/handgrip-gripjoint#m-hand), [`HandGrip.ThumbGripJoint.ThumbGripJoint`](/mod/game-api/types/alta-player/handgrip-thumbgripjoint#m-ctor-2), [`MasterHand.handGrip`](/mod/game-api/types/alta-player/masterhand#m-handgrip), [`Interactor.GripAnimator`](/mod/game-api/types/global-i-l/interactor#m-gripanimator).

</div>
