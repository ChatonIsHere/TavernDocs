---
title: "LockedRotationHandle"
description: "class LockedRotationHandle in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LockedRotationHandle

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LockedRotationHandle()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> |  |
| <Link id="m-currenttarget" /><code>{"private float currentTarget"}</code> |  |
| <Link id="m-eventthreshold" /><code>{"private float eventThreshold"}</code> |  |
| <Link id="m-handle" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handle"}</code> |  |
| <Link id="m-isaligninghandlewithhand" /><code>{"private bool isAligningHandleWithHand"}</code> |  |
| <Link id="m-islocked" /><code>{"private bool isLocked"}</code> |  |
| <Link id="m-ispivotstatic" /><code>{"private bool isPivotStatic"}</code> |  |
| <Link id="m-isreturningwhenreleased" /><code>{"private bool isReturningWhenReleased"}</code> |  |
| <Link id="m-maxanglelocked" /><code>{"private float maxAngleLocked"}</code> |  |
| <Link id="m-maxangleunlocked" /><code>{"private float maxAngleUnlocked"}</code> |  |
| <Link id="m-minangle" /><code>{"private float minAngle"}</code> |  |
| <Link id="m-movementlerpspeed" /><code>{"private float movementLerpSpeed"}</code> |  |
| <Link id="m-movementtoactualrotation" /><code>{"private AnimationCurve movementToActualRotation"}</code> |  |
| <Link id="m-movetohand" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" moveToHand"}</code> |  |
| <Link id="m-neutralaxis" /><code>{"private Vector3 neutralAxis"}</code> |  |
| <Link id="m-onpassedthreshold" /><code>{"private UnityEvent onPassedThreshold"}</code> |  |
| <Link id="m-onthresholdchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onThresholdChanged"}</code> |  |
| <Link id="m-pivot" /><code>{"private Transform pivot"}</code> |  |
| <Link id="m-returnlerpspeed" /><code>{"private float returnLerpSpeed"}</code> |  |
| <Link id="m-returntodefault" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" returnToDefault"}</code> |  |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> |  |
| <Link id="m-rotationtarget" /><code>{"private Transform rotationTarget"}</code> |  |
| <Link id="m-staticmatrix" /><code>{"private Matrix4x4 staticMatrix"}</code> |  |
| <Link id="m-synclocked" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLocked"}</code> |  |
| <Link id="m-trackinginteractor" /><code>{"private Transform trackingInteractor"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |
| <Link id="m-wasabovethreshold" /><code>{"private bool wasAboveThreshold"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-updatelocked" /><code>{"void UpdateLocked(bool isLocked)"}</code> |  |
| <Link id="m-alignhandlewithhand" /><code>{"private void AlignHandleWithHand()"}</code> |  |
| <Link id="m-blockinteraction" /><code>{"private void BlockInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-endtracking" /><code>{"private void EndTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-lerptotarget" /><code>{"private void LerpToTarget()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-returntoneutral" /><code>{"private void ReturnToNeutral()"}</code> |  |
| <Link id="m-setposition" /><code>{"private void SetPosition()"}</code> |  |
| <Link id="m-starttracking" /><code>{"private void StartTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-synclocked-2" /><code>{"private void SyncLocked("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> |  |
