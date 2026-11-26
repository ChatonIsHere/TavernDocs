---
title: "LocomotionModifier"
description: "Trigger volume that changes smooth locomotion for players inside it, through a LocomotionModifierCheck (for example water)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionModifier

A **class** in `Root.Township`, no namespace.

Trigger volume that changes smooth locomotion for players inside it, through a `LocomotionModifierCheck` (for example water). Also decides whether teleporting into it is allowed.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`IDontSplit`](/game-api/types/global-i-l/idontsplit), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocomotionModifier()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> | Bounds passed to the check, set by hand or from child colliders. |
| <Link id="m-calculateboundsonstart" /><code>{"private bool calculateBoundsOnStart"}</code> | Work out `bounds` from child colliders at start or bake (default true). |
| <Link id="m-check" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotionmodifiercheck">{"LocomotionModifierCheck"}</Link>{" check"}</code> | The check that applies the locomotion change on enter and leave. |
| <Link id="m-currentplayers" /><code>{"private Dictionary<Collider, int> currentPlayers"}</code> | Per collider count of overlapping triggers, so nested colliders count once. |
| <Link id="m-issafeinside" /><code>{"private bool IsSafeInside"}</code> | Value given to the player's `SmoothLocomotion.IsSafe` while inside. Set back to true on leaving. |
| <Link id="m-playermap" /><code>{"private static Dictionary<Collider, "}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{"> playerMap"}</code> | Static cache from a player's collider to its smooth locomotion player controller. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Always 0. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalidteleportationposition" /><code>{"static bool IsValidTeleportationPosition(Vector3 position, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Checks every water layer modifier at the position and returns false if any check refuses the teleport. |
| <Link id="m-ontriggerenter" /><code>{"void OnTriggerEnter(Collider other)"}</code> | Counts a player's collider in. On first entry sets `IsSafe`, calls the check's enter and `OnPlayerEntered`. |
| <Link id="m-ontriggerexit" /><code>{"void OnTriggerExit(Collider other)"}</code> | Counts a collider out. On the last one, calls the check's leave and `OnPlayerLeft`. |
| <Link id="m-ondrawgizmosselected" /><code>{"protected virtual void OnDrawGizmosSelected()"}</code> | Draws the bounds in the editor. |
| <Link id="m-onplayerentered" /><code>{"protected virtual void OnPlayerEntered("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Override hook: a player came in. |
| <Link id="m-onplayerleft" /><code>{"protected virtual void OnPlayerLeft("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Override hook: a player left or was destroyed. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autocalculatebounds" /><code>{"private void AutoCalculateBounds()"}</code> | Sets `bounds` to cover all child colliders and turns off recalculating. |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Build bake: calculates the bounds ahead of time if set to. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Empty build clean step. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Runs leave logic for every player still inside. |
| <Link id="m-removeplayer" /><code>{"private void RemovePlayer("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Calls the check's leave and `OnPlayerLeft` for a player, also when their prefab is destroyed. |
| <Link id="m-removeplayer-2" /><code>{"private void RemovePlayer("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Calls the check's leave and `OnPlayerLeft` for a player, also when their prefab is destroyed. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Calculates the bounds if set to. |

</details>

## Used in

Members of other types that take, return or hold a `LocomotionModifier`:

[`RiverCollision.locomotionModifier`](/game-api/types/alta-world-generation/rivercollision#m-locomotionmodifier).
