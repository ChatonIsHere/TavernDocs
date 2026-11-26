---
title: "RopeGrab"
description: "A grab handle on a rope belt (rope pulls, lifts): pulling the handle turns the belt, and the belt's turn is tracked as progress 0 to 1 along the rope's length."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopeGrab

A **class** in `Root.Township`, no namespace.

A grab handle on a rope belt (rope pulls, lifts): pulling the handle turns the belt, and the belt's turn is tracked as progress 0 to 1 along the rope's length. Progress is saved and synced from the server.

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

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | Backing field for `Progress`. |
| <Link id="m-interactor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | Interactor holding the handle, or null. |
| <Link id="m-interacty" /><code>{"private float interactY"}</code> | Handle's height along the rope, clamped to `yMinimum` and `yMaximum`. |
| <Link id="m-isgrabclamped" /><code>{"private bool isGrabClamped"}</code> | If true, the hand point is pushed back when progress hits an end. |
| <Link id="m-isinfinite" /><code>{"private bool isInfinite"}</code> | If true, progress isn't clamped at all. |
| <Link id="m-islooping" /><code>{"private bool isLooping"}</code> | If true, progress isn't clamped; there is no wrap-around code. |
| <Link id="m-issyncing" /><code>{"private bool isSyncing"}</code> | True while blending to the server's progress. |
| <Link id="m-lastbeltrotation" /><code>{"private float lastBeltRotation"}</code> | Belt rotation last frame, used to measure movement. |
| <Link id="m-length" /><code>{"private float length"}</code> | Rope length in metres that maps to progress 0 to 1. Saved. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | Speed of the blend to synced progress. |
| <Link id="m-maximumforce" /><code>{"private float maximumForce"}</code> | Largest torque the hand can put on the belt. |
| <Link id="m-maximumforcedistance" /><code>{"private float maximumForceDistance"}</code> | Hand movement per frame that gives full torque. |
| <Link id="m-maximumforcepersecond" /><code>{"private float maximumForcePerSecond"}</code> | How fast the torque can change. |
| <Link id="m-maximumslidepersecond" /><code>{"private float maximumSlidePerSecond"}</code> | Serialized but not read by this class. |
| <Link id="m-progresschanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressChanged"}</code> | Float event invoked with the progress when it changes. |
| <Link id="m-ropebelt" /><code>{"private "}<Link to="/game-api/types/global-q-r/ropebelt">{"RopeBelt"}</Link>{" ropeBelt"}</code> | The rope belt that moves with the handle. |
| <Link id="m-ropebeltmotor" /><code>{"private "}<Link to="/game-api/types/global-m-o/motor">{"Motor"}</Link>{" ropeBeltMotor"}</code> | Serialized but not read by this class. |
| <Link id="m-ropegrab" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" ropeGrab"}</code> | The pickup players grab. |
| <Link id="m-ropelength" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" ropeLength"}</code> | The rope's interactable; grabs on it go to the handle and it's the handle's parent. |
| <Link id="m-syncedprogress" /><code>{"private float syncedProgress"}</code> | Progress last received from the server. |
| <Link id="m-syncprogress" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncProgress"}</code> | Method sync for progress. |
| <Link id="m-updatetilstopped" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateTilStopped"}</code> | Handle of the `UpdateTilStopped` update. |
| <Link id="m-updatewithoutik" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateWithoutIk"}</code> | Handle of the per-frame update for holders without player IK. |
| <Link id="m-ymaximum" /><code>{"private float yMaximum"}</code> | Highest local position of the handle on the rope. |
| <Link id="m-yminimum" /><code>{"private float yMinimum"}</code> | Lowest local position of the handle on the rope. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"float Progress { get; }"}</code> | Current progress along the rope, 0 to 1 (can leave that range when infinite or looping). |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-progresschanged-2" /><code>{"event Action<float, float> ProgressChanged"}</code> | Raised with the old and new progress whenever it changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Forwards rope grabs to the handle, hooks grab start and end, raises the starting progress and creates the sync. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current progress to a joining player, snapping. |
| <Link id="m-setprogress" /><code>{"void SetProgress(float value)"}</code> | Sets progress directly and raises the events (old value reported as 0). |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkclamp" /><code>{"private void CheckClamp()"}</code> | Keeps progress within 0 to 1 unless infinite or looping; with `isGrabClamped` it also moves the hand point back by the overshoot. |
| <Link id="m-ikupdated" /><code>{"private void IkUpdated()"}</code> | Runs `UpdatePosition` before the holding player's IK each frame (or every Update for non-player holders). |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops following the hand, keeps updating until the belt stops, and re-parents the handle to the rope. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Starts following the grabbing hand, cancelling any sync blend in progress. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the update. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the handle's vertical travel range in the editor. |
| <Link id="m-onprogresschanged" /><code>{"private void OnProgressChanged(float oldProgress, float newProgress)"}</code> | Invokes the `progressChanged` Unity event and the `ProgressChanged` C# event. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Raises the progress events in the editor so linked objects preview the value. |
| <Link id="m-syncprogress-2" /><code>{"private void SyncProgress("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSnapping)"}</code> | Syncs progress. Clients snap when told to, otherwise blend towards it after the belt stops. |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition(bool isStartingGrab)"}</code> | Pushes the belt with torque from the hand's movement, converts belt rotation into progress and places the handle. |
| <Link id="m-updatetilstopped-2" /><code>{"private void UpdateTilStopped()"}</code> | Late update after letting go: blends to synced progress and, once the belt stops, ends and the server sends the final value. |

</details>

## Used in

Members of other types that take, return or hold a `RopeGrab`:

[`RopePoweredElementBoard.ropeGrabs`](/game-api/types/global-q-r/ropepoweredelementboard#m-ropegrabs), [`ServerSelectionMenu.ropeGrabs`](/game-api/types/global-s/serverselectionmenu#m-ropegrabs).
