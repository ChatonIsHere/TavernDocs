---
title: "DepthCheckLocoCheck"
description: "Locomotion modifier check asset that works out how deep a smooth-locomotion player stands in a volume (for example water) and runs shallow or deep actions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DepthCheckLocoCheck

A **class** in `Root.Township`, the global namespace.

Locomotion modifier check asset that works out how deep a smooth-locomotion player stands in a volume (for example water) and runs shallow or deep actions. It can also block teleporting into a given depth.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`LocomotionModifierCheck`](/mod/game-api/types/global-i-l/locomotionmodifiercheck)
- **Nested types** [`Depth`](/mod/game-api/types/global-c-d/depthchecklococheck-depth), [`ModifierCheck`](/mod/game-api/types/global-c-d/depthchecklococheck-modifiercheck)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DepthCheckLocoCheck()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkingplayers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{", "}<Link to="/mod/game-api/types/global-c-d/depthchecklococheck-modifiercheck">{"DepthCheckLocoCheck.ModifierCheck"}</Link>{"> checkingPlayers"}</code> | <span className="api-desc">Players inside the volume and their current depth.</span> |
| <Link id="m-deepactions" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotionmodifieraction">{"LocomotionModifierAction"}</Link>{"[] deepActions"}</code> | <span className="api-desc">Actions run while the player is deep.</span> |
| <Link id="m-heightmodifierfordepth" /><code>{"private float heightModifierForDepth"}</code> | <span className="api-desc">Share of the player's capsule height at which shallow becomes deep.</span> |
| <Link id="m-israycasting" /><code>{"private bool isRaycasting"}</code> | <span className="api-desc">Whether to find the surface by raycasting down instead of using the volume's top.</span> |
| <Link id="m-mindepth" /><code>{"private float minDepth"}</code> | <span className="api-desc">Depth below which the player counts as out.</span> |
| <Link id="m-raycastheight" /><code>{"private float raycastHeight"}</code> | <span className="api-desc">How far above the feet the raycast starts.</span> |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> | <span className="api-desc">Layers the surface raycast hits.</span> |
| <Link id="m-shallowactions" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotionmodifieraction">{"LocomotionModifierAction"}</Link>{"[] shallowActions"}</code> | <span className="api-desc">Actions run while the player is shallow.</span> |
| <Link id="m-teleportblock" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" teleportBlock"}</code> | <span className="api-desc">Depths that teleporting into is blocked for.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared fixed-update module the check runs in.</span> |
| <Link id="m-updatepositions" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePositions"}</code> | <span className="api-desc">Registration of `UpdatePositions`, removed when no players are tracked.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enter" /><code>{"override void Enter("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, Bounds bounds)"}</code> | <span className="api-desc">Starts tracking a player who entered the volume, with the volume's top as the surface.</span> |
| <Link id="m-isvalidteleportationposition" /><code>{"override bool IsValidTeleportationPosition(Vector3 position, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, Bounds bounds)"}</code> | <span className="api-desc">Returns false if the target spot is at a depth listed in `teleportBlock`.</span> |
| <Link id="m-leave" /><code>{"override void Leave("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, Bounds bounds)"}</code> | <span className="api-desc">Stops tracking the player and finishes their current depth's actions.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enterdepth" /><code>{"private void EnterDepth("}<Link to="/mod/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" depth, "}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Begins the shallow or deep actions for the player.</span> |
| <Link id="m-getdepth" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" GetDepth("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, float surface)"}</code> | <span className="api-desc">Gets the player's depth below the surface (or a raycast hit): out, shallow, or deep past a share of their height.</span> |
| <Link id="m-getdepth-2" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" GetDepth(Vector3 position, "}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, float surface)"}</code> | <span className="api-desc">Gets the player's depth below the surface (or a raycast hit): out, shallow, or deep past a share of their height.</span> |
| <Link id="m-leavedepth" /><code>{"private void LeaveDepth("}<Link to="/mod/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" depth, "}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Finishes the shallow or deep actions for the player.</span> |
| <Link id="m-updatepositions-2" /><code>{"private void UpdatePositions()"}</code> | <span className="api-desc">Each fixed update, switches actions for any tracked player whose depth changed.</span> |

</details>
