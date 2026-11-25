---
title: "FlyCamLocomotionController"
description: "class FlyCamLocomotionController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamLocomotionController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`LocomotionController`](/game-api/types/global-i-l/locomotioncontroller)
- **Nested types** [`SenseSetupSet`](/game-api/types/global-e-h/flycamlocomotioncontroller-sensesetupset)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamLocomotionController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activetrail" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleportertraillerper">{"TeleporterTrailLerper"}</Link>{" activeTrail"}</code> |  |
| <Link id="m-changesenses" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" changeSenses"}</code> |  |
| <Link id="m-flycaminput" /><code>{"private "}<Link to="/game-api/types/global-e-h/flycaminput">{"FlyCamInput"}</Link>{" flyCamInput"}</code> |  |
| <Link id="m-micmuteaction" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" micMuteAction"}</code> |  |
| <Link id="m-modsmicmuteaction" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" modsMicMuteAction"}</code> |  |
| <Link id="m-presseddown" /><code>{"private bool pressedDown"}</code> |  |
| <Link id="m-pressedsides" /><code>{"private bool pressedSides"}</code> |  |
| <Link id="m-pressedup" /><code>{"private bool pressedUp"}</code> |  |
| <Link id="m-selecteddirection" /><code>{"private int selectedDirection"}</code> |  |
| <Link id="m-senseindex" /><code>{"private int senseIndex"}</code> |  |
| <Link id="m-sensesetups" /><code>{"private "}<Link to="/game-api/types/global-e-h/flycamlocomotioncontroller-sensesetupset">{"FlyCamLocomotionController.SenseSetupSet"}</Link>{"[] senseSetups"}</code> |  |
| <Link id="m-shownamesaction" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" showNamesAction"}</code> |  |
| <Link id="m-smoothinputmovement" /><code>{"private Vector3 smoothInputMovement"}</code> |  |
| <Link id="m-smoothinputrotation" /><code>{"private Vector2 smoothInputRotation"}</code> |  |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/target">{"Target"}</Link>{" target"}</code> |  |
| <Link id="m-trail" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" trail"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playercontroller" /><code>{"protected "}<Link to="/game-api/types/global-e-h/flycamplayer">{"FlyCamPlayer"}</Link>{" PlayerController { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-changesense" /><code>{"private void ChangeSense("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-cleantrail" /><code>{"private void CleanTrail("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-getkey" /><code>{"private bool GetKey(Key key)"}</code> |  |
| <Link id="m-getkeydown" /><code>{"private bool GetKeyDown(Key key)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> |  |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(bool isVisible)"}</code> |  |
