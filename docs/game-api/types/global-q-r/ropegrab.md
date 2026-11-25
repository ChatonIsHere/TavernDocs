---
title: "RopeGrab"
description: "class RopeGrab in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopeGrab

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RopeGrabSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RopeGrabSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RopeGrabSaveData`](/game-api/types/global-q-r/ropegrabsavedata)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RopeGrab()"}</code> |

## Fields

<details>
<summary>25 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> |
| <Link id="m-interactor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> |
| <Link id="m-interacty" /><code>{"private float interactY"}</code> |
| <Link id="m-isgrabclamped" /><code>{"private bool isGrabClamped"}</code> |
| <Link id="m-isinfinite" /><code>{"private bool isInfinite"}</code> |
| <Link id="m-islooping" /><code>{"private bool isLooping"}</code> |
| <Link id="m-issyncing" /><code>{"private bool isSyncing"}</code> |
| <Link id="m-lastbeltrotation" /><code>{"private float lastBeltRotation"}</code> |
| <Link id="m-length" /><code>{"private float length"}</code> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |
| <Link id="m-maximumforce" /><code>{"private float maximumForce"}</code> |
| <Link id="m-maximumforcedistance" /><code>{"private float maximumForceDistance"}</code> |
| <Link id="m-maximumforcepersecond" /><code>{"private float maximumForcePerSecond"}</code> |
| <Link id="m-maximumslidepersecond" /><code>{"private float maximumSlidePerSecond"}</code> |
| <Link id="m-progresschanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressChanged"}</code> |
| <Link id="m-ropebelt" /><code>{"private "}<Link to="/game-api/types/global-q-r/ropebelt">{"RopeBelt"}</Link>{" ropeBelt"}</code> |
| <Link id="m-ropebeltmotor" /><code>{"private "}<Link to="/game-api/types/global-m-o/motor">{"Motor"}</Link>{" ropeBeltMotor"}</code> |
| <Link id="m-ropegrab" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" ropeGrab"}</code> |
| <Link id="m-ropelength" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" ropeLength"}</code> |
| <Link id="m-syncedprogress" /><code>{"private float syncedProgress"}</code> |
| <Link id="m-syncprogress" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncProgress"}</code> |
| <Link id="m-updatetilstopped" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateTilStopped"}</code> |
| <Link id="m-updatewithoutik" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateWithoutIk"}</code> |
| <Link id="m-ymaximum" /><code>{"private float yMaximum"}</code> |
| <Link id="m-yminimum" /><code>{"private float yMinimum"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-progress" /><code>{"float Progress { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-progresschanged-2" /><code>{"event Action<float, float> ProgressChanged"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-setprogress" /><code>{"void SetProgress(float value)"}</code> |

<details>
<summary>11 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkclamp" /><code>{"private void CheckClamp()"}</code> |
| <Link id="m-ikupdated" /><code>{"private void IkUpdated()"}</code> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-onprogresschanged" /><code>{"private void OnProgressChanged(float oldProgress, float newProgress)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-syncprogress-2" /><code>{"private void SyncProgress("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSnapping)"}</code> |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition(bool isStartingGrab)"}</code> |
| <Link id="m-updatetilstopped-2" /><code>{"private void UpdateTilStopped()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `RopeGrab`:

[`RopePoweredElementBoard.ropeGrabs`](/game-api/types/global-q-r/ropepoweredelementboard#m-ropegrabs), [`ServerSelectionMenu.ropeGrabs`](/game-api/types/global-s/serverselectionmenu#m-ropegrabs).
