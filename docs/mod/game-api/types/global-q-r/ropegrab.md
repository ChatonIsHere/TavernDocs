---
title: "RopeGrab"
description: "A grab handle on a rope belt (rope pulls, lifts): pulling the handle turns the belt, and the belt's turn is tracked as progress 0 to 1 along the rope's length."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopeGrab

A **class** in `Root.Township`, the global namespace.

A grab handle on a rope belt (rope pulls, lifts): pulling the handle turns the belt, and the belt's turn is tracked as progress 0 to 1 along the rope's length. Progress is saved and synced from the server.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RopeGrabSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<RopeGrabSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RopeGrabSaveData`](/mod/game-api/types/global-q-r/ropegrabsavedata)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopeGrab()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>25 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | <span className="api-desc">Backing field for `Progress`.</span> |
| <Link id="m-interactor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | <span className="api-desc">Interactor holding the handle, or null.</span> |
| <Link id="m-interacty" /><code>{"private float interactY"}</code> | <span className="api-desc">Handle's height along the rope, clamped to `yMinimum` and `yMaximum`.</span> |
| <Link id="m-isgrabclamped" /><code>{"private bool isGrabClamped"}</code> | <span className="api-desc">If true, the hand point is pushed back when progress hits an end.</span> |
| <Link id="m-isinfinite" /><code>{"private bool isInfinite"}</code> | <span className="api-desc">If true, progress isn't clamped at all.</span> |
| <Link id="m-islooping" /><code>{"private bool isLooping"}</code> | <span className="api-desc">If true, progress isn't clamped; there is no wrap-around code.</span> |
| <Link id="m-issyncing" /><code>{"private bool isSyncing"}</code> | <span className="api-desc">True while blending to the server's progress.</span> |
| <Link id="m-lastbeltrotation" /><code>{"private float lastBeltRotation"}</code> | <span className="api-desc">Belt rotation last frame, used to measure movement.</span> |
| <Link id="m-length" /><code>{"private float length"}</code> | <span className="api-desc">Rope length in metres that maps to progress 0 to 1. Saved.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">Speed of the blend to synced progress.</span> |
| <Link id="m-maximumforce" /><code>{"private float maximumForce"}</code> | <span className="api-desc">Largest torque the hand can put on the belt.</span> |
| <Link id="m-maximumforcedistance" /><code>{"private float maximumForceDistance"}</code> | <span className="api-desc">Hand movement per frame that gives full torque.</span> |
| <Link id="m-maximumforcepersecond" /><code>{"private float maximumForcePerSecond"}</code> | <span className="api-desc">How fast the torque can change.</span> |
| <Link id="m-maximumslidepersecond" /><code>{"private float maximumSlidePerSecond"}</code> | <span className="api-desc">Serialized but not read by this class.</span> |
| <Link id="m-progresschanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressChanged"}</code> | <span className="api-desc">Float event invoked with the progress when it changes.</span> |
| <Link id="m-ropebelt" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/ropebelt">{"RopeBelt"}</Link>{" ropeBelt"}</code> | <span className="api-desc">The rope belt that moves with the handle.</span> |
| <Link id="m-ropebeltmotor" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/motor">{"Motor"}</Link>{" ropeBeltMotor"}</code> | <span className="api-desc">Serialized but not read by this class.</span> |
| <Link id="m-ropegrab" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" ropeGrab"}</code> | <span className="api-desc">The pickup players grab.</span> |
| <Link id="m-ropelength" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" ropeLength"}</code> | <span className="api-desc">The rope's interactable; grabs on it go to the handle and it's the handle's parent.</span> |
| <Link id="m-syncedprogress" /><code>{"private float syncedProgress"}</code> | <span className="api-desc">Progress last received from the server.</span> |
| <Link id="m-syncprogress" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncProgress"}</code> | <span className="api-desc">Method sync for progress.</span> |
| <Link id="m-updatetilstopped" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateTilStopped"}</code> | <span className="api-desc">Handle of the `UpdateTilStopped` update.</span> |
| <Link id="m-updatewithoutik" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateWithoutIk"}</code> | <span className="api-desc">Handle of the per-frame update for holders without player IK.</span> |
| <Link id="m-ymaximum" /><code>{"private float yMaximum"}</code> | <span className="api-desc">Highest local position of the handle on the rope.</span> |
| <Link id="m-yminimum" /><code>{"private float yMinimum"}</code> | <span className="api-desc">Lowest local position of the handle on the rope.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"float Progress { get; }"}</code> | <span className="api-desc">Current progress along the rope, 0 to 1 (can leave that range when infinite or looping).</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-progresschanged-2" /><code>{"event Action<float, float> ProgressChanged"}</code> | <span className="api-desc">Raised with the old and new progress whenever it changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Forwards rope grabs to the handle, hooks grab start and end, raises the starting progress and creates the sync.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current progress to a joining player, snapping.</span> |
| <Link id="m-setprogress" /><code>{"void SetProgress(float value)"}</code> | <span className="api-desc">Sets progress directly and raises the events (old value reported as 0).</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkclamp" /><code>{"private void CheckClamp()"}</code> | <span className="api-desc">Keeps progress within 0 to 1 unless infinite or looping; with `isGrabClamped` it also moves the hand point back by the overshoot.</span> |
| <Link id="m-ikupdated" /><code>{"private void IkUpdated()"}</code> | <span className="api-desc">Runs `UpdatePosition` before the holding player's IK each frame (or every Update for non-player holders).</span> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops following the hand, keeps updating until the belt stops, and re-parents the handle to the rope.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Starts following the grabbing hand, cancelling any sync blend in progress.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the update.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the handle's vertical travel range in the editor.</span> |
| <Link id="m-onprogresschanged" /><code>{"private void OnProgressChanged(float oldProgress, float newProgress)"}</code> | <span className="api-desc">Invokes the `progressChanged` Unity event and the `ProgressChanged` C# event.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Raises the progress events in the editor so linked objects preview the value.</span> |
| <Link id="m-syncprogress-2" /><code>{"private void SyncProgress("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSnapping)"}</code> | <span className="api-desc">Syncs progress. Clients snap when told to, otherwise blend towards it after the belt stops.</span> |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition(bool isStartingGrab)"}</code> | <span className="api-desc">Pushes the belt with torque from the hand's movement, converts belt rotation into progress and places the handle.</span> |
| <Link id="m-updatetilstopped-2" /><code>{"private void UpdateTilStopped()"}</code> | <span className="api-desc">Late update after letting go: blends to synced progress and, once the belt stops, ends and the server sends the final value.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RopeGrab`:

<div className="api-used-in">

[`RopePoweredElementBoard.ropeGrabs`](/mod/game-api/types/global-q-r/ropepoweredelementboard#m-ropegrabs), [`ServerSelectionMenu.ropeGrabs`](/mod/game-api/types/global-s/serverselectionmenu#m-ropegrabs).

</div>
