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
| <Link id="m-ctor" /><code>{"FlyCamLocomotionController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetrail" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/teleportertraillerper">{"TeleporterTrailLerper"}</Link>{" activeTrail"}</code> | <span className="api-desc">Trail currently shown to other players.</span> |
| <Link id="m-changesenses" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" changeSenses"}</code> | <span className="api-desc">Method sync sent by `;` or d-pad down to cycle senses.</span> |
| <Link id="m-flycaminput" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/flycaminput">{"FlyCamInput"}</Link>{" flyCamInput"}</code> | <span className="api-desc">Fly cam input actions, local player only.</span> |
| <Link id="m-micmuteaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" micMuteAction"}</code> | <span className="api-desc">Quick action run by `M`.</span> |
| <Link id="m-modsmicmuteaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" modsMicMuteAction"}</code> | <span className="api-desc">Quick action run by Shift+`M`.</span> |
| <Link id="m-presseddown" /><code>{"private bool pressedDown"}</code> | <span className="api-desc">Edge state for d-pad down.</span> |
| <Link id="m-pressedsides" /><code>{"private bool pressedSides"}</code> | <span className="api-desc">Edge state for d-pad left and right (sensitivity change).</span> |
| <Link id="m-pressedup" /><code>{"private bool pressedUp"}</code> | <span className="api-desc">Edge state for d-pad up (cinematic toggle).</span> |
| <Link id="m-selecteddirection" /><code>{"private int selectedDirection"}</code> | <span className="api-desc">Gamepad stick-click speed mode: 1 fast, -1 slow, 0 normal.</span> |
| <Link id="m-senseindex" /><code>{"private int senseIndex"}</code> | <span className="api-desc">Index of the current sense setup.</span> |
| <Link id="m-sensesetups" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/flycamlocomotioncontroller-sensesetupset">{"FlyCamLocomotionController.SenseSetupSet"}</Link>{"[] senseSetups"}</code> | <span className="api-desc">Sense setups cycled by `ChangeSense`.</span> |
| <Link id="m-shownamesaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" showNamesAction"}</code> | <span className="api-desc">Quick action run by `N`.</span> |
| <Link id="m-smoothinputmovement" /><code>{"private Vector3 smoothInputMovement"}</code> | <span className="api-desc">Smoothed move input for cinematic mode.</span> |
| <Link id="m-smoothinputrotation" /><code>{"private Vector2 smoothInputRotation"}</code> | <span className="api-desc">Smoothed look input for cinematic mode.</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/target">{"Target"}</Link>{" target"}</code> | <span className="api-desc">AI target registered only while the fly cam is set as alive.</span> |
| <Link id="m-trail" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" trail"}</code> | <span className="api-desc">Pooled trail shown to other players when the fly cam is visible.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playercontroller" /><code>{"protected "}<Link to="/mod/game-api/types/global-e-h/flycamplayer">{"FlyCamPlayer"}</Link>{" PlayerController { get; }"}</code> | <span className="api-desc">The owning `FlyCamPlayer`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Turns on streaming and sets up the sense change sync.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: applies the current sense setup to the fly cam's AI target.</span> |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | <span className="api-desc">Local player: reads look, move and climb input, applies speed modifiers and smoothing, and handles d-pad and key shortcuts.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesense" /><code>{"private void ChangeSense("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sync handler: cycles to the next sense setup and toggles whether AI can target the fly cam.</span> |
| <Link id="m-cleantrail" /><code>{"private void CleanTrail("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Releases the trail when the entity is destroyed by the scene.</span> |
| <Link id="m-getkey" /><code>{"private bool GetKey(Key key)"}</code> | <span className="api-desc">True while a keyboard key is held. False with no keyboard.</span> |
| <Link id="m-getkeydown" /><code>{"private bool GetKeyDown(Key key)"}</code> | <span className="api-desc">True on the frame a keyboard key is pressed. False with no keyboard.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Fixes up every sense setup in the inspector.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Marks the fly cam not alive and hidden from AI; sets up input on the local player or the trail for remote viewers.</span> |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(bool isVisible)"}</code> | <span className="api-desc">Remote clients: shows or removes the trail when the fly cam's visibility changes.</span> |

</details>
