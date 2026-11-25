---
title: "DepthCheckLocoCheck"
description: "class DepthCheckLocoCheck in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DepthCheckLocoCheck

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`LocomotionModifierCheck`](/game-api/types/global-i-l/locomotionmodifiercheck)
- **Nested types** [`Depth`](/game-api/types/global-c-d/depthchecklococheck-depth), [`ModifierCheck`](/game-api/types/global-c-d/depthchecklococheck-modifiercheck)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DepthCheckLocoCheck()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-checkingplayers" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{", "}<Link to="/game-api/types/global-c-d/depthchecklococheck-modifiercheck">{"DepthCheckLocoCheck.ModifierCheck"}</Link>{"> checkingPlayers"}</code> |
| <Link id="m-deepactions" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotionmodifieraction">{"LocomotionModifierAction"}</Link>{"[] deepActions"}</code> |
| <Link id="m-heightmodifierfordepth" /><code>{"private float heightModifierForDepth"}</code> |
| <Link id="m-israycasting" /><code>{"private bool isRaycasting"}</code> |
| <Link id="m-mindepth" /><code>{"private float minDepth"}</code> |
| <Link id="m-raycastheight" /><code>{"private float raycastHeight"}</code> |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> |
| <Link id="m-shallowactions" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotionmodifieraction">{"LocomotionModifierAction"}</Link>{"[] shallowActions"}</code> |
| <Link id="m-teleportblock" /><code>{"private "}<Link to="/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" teleportBlock"}</code> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |
| <Link id="m-updatepositions" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePositions"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-enter" /><code>{"override void Enter("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, Bounds bounds)"}</code> |
| <Link id="m-isvalidteleportationposition" /><code>{"override bool IsValidTeleportationPosition(Vector3 position, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, Bounds bounds)"}</code> |
| <Link id="m-leave" /><code>{"override void Leave("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, Bounds bounds)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-enterdepth" /><code>{"private void EnterDepth("}<Link to="/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" depth, "}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> |
| <Link id="m-getdepth" /><code>{"private "}<Link to="/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" GetDepth("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, float surface)"}</code> |
| <Link id="m-getdepth-2" /><code>{"private "}<Link to="/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" GetDepth(Vector3 position, "}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, float surface)"}</code> |
| <Link id="m-leavedepth" /><code>{"private void LeaveDepth("}<Link to="/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" depth, "}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> |
| <Link id="m-updatepositions-2" /><code>{"private void UpdatePositions()"}</code> |

</details>
