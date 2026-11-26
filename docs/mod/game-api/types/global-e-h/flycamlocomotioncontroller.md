---
title: "FlyCamLocomotionController"
description: "Moves the fly cam from keyboard, mouse and gamepad, with optional cinematic smoothing, and handles its hotkeys."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamLocomotionController

A **class** in `Root.Township`, the global namespace.

Moves the fly cam from keyboard, mouse and gamepad, with optional cinematic smoothing, and handles its hotkeys. Movement runs on the local player and is streamed.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`LocomotionController`](/mod/game-api/types/global-i-l/locomotioncontroller)
- **Nested types** [`SenseSetupSet`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller-sensesetupset)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamLocomotionController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetrail" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/teleportertraillerper">{"TeleporterTrailLerper"}</Link>{" activeTrail"}</code> | Trail currently shown to other players. |
| <Link id="m-changesenses" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" changeSenses"}</code> | Method sync sent by `;` or d-pad down to cycle senses. |
| <Link id="m-flycaminput" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/flycaminput">{"FlyCamInput"}</Link>{" flyCamInput"}</code> | Fly cam input actions, local player only. |
| <Link id="m-micmuteaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" micMuteAction"}</code> | Quick action run by `M`. |
| <Link id="m-modsmicmuteaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" modsMicMuteAction"}</code> | Quick action run by Shift+`M`. |
| <Link id="m-presseddown" /><code>{"private bool pressedDown"}</code> | Edge state for d-pad down. |
| <Link id="m-pressedsides" /><code>{"private bool pressedSides"}</code> | Edge state for d-pad left and right (sensitivity change). |
| <Link id="m-pressedup" /><code>{"private bool pressedUp"}</code> | Edge state for d-pad up (cinematic toggle). |
| <Link id="m-selecteddirection" /><code>{"private int selectedDirection"}</code> | Gamepad stick-click speed mode: 1 fast, -1 slow, 0 normal. |
| <Link id="m-senseindex" /><code>{"private int senseIndex"}</code> | Index of the current sense setup. |
| <Link id="m-sensesetups" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/flycamlocomotioncontroller-sensesetupset">{"FlyCamLocomotionController.SenseSetupSet"}</Link>{"[] senseSetups"}</code> | Sense setups cycled by `ChangeSense`. |
| <Link id="m-shownamesaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" showNamesAction"}</code> | Quick action run by `N`. |
| <Link id="m-smoothinputmovement" /><code>{"private Vector3 smoothInputMovement"}</code> | Smoothed move input for cinematic mode. |
| <Link id="m-smoothinputrotation" /><code>{"private Vector2 smoothInputRotation"}</code> | Smoothed look input for cinematic mode. |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/target">{"Target"}</Link>{" target"}</code> | AI target registered only while the fly cam is set as alive. |
| <Link id="m-trail" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" trail"}</code> | Pooled trail shown to other players when the fly cam is visible. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playercontroller" /><code>{"protected "}<Link to="/mod/game-api/types/global-e-h/flycamplayer">{"FlyCamPlayer"}</Link>{" PlayerController { get; }"}</code> | The owning `FlyCamPlayer`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Turns on streaming and sets up the sense change sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: applies the current sense setup to the fly cam's AI target. |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | Local player: reads look, move and climb input, applies speed modifiers and smoothing, and handles d-pad and key shortcuts. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesense" /><code>{"private void ChangeSense("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sync handler: cycles to the next sense setup and toggles whether AI can target the fly cam. |
| <Link id="m-cleantrail" /><code>{"private void CleanTrail("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Releases the trail when the entity is destroyed by the scene. |
| <Link id="m-getkey" /><code>{"private bool GetKey(Key key)"}</code> | True while a keyboard key is held. False with no keyboard. |
| <Link id="m-getkeydown" /><code>{"private bool GetKeyDown(Key key)"}</code> | True on the frame a keyboard key is pressed. False with no keyboard. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Fixes up every sense setup in the inspector. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Marks the fly cam not alive and hidden from AI; sets up input on the local player or the trail for remote viewers. |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(bool isVisible)"}</code> | Remote clients: shows or removes the trail when the fly cam's visibility changes. |

</details>
