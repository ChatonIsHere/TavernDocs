---
title: "LocomotionModifier"
description: "Trigger volume that changes smooth locomotion for players inside it, through a LocomotionModifierCheck (for example water)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionModifier

A **class** in `Root.Township`, the global namespace.

Trigger volume that changes smooth locomotion for players inside it, through a `LocomotionModifierCheck` (for example water). Also decides whether teleporting into it is allowed.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit), [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocomotionModifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> | <span className="api-desc">Bounds passed to the check, set by hand or from child colliders.</span> |
| <Link id="m-calculateboundsonstart" /><code>{"private bool calculateBoundsOnStart"}</code> | <span className="api-desc">Work out `bounds` from child colliders at start or bake (default true).</span> |
| <Link id="m-check" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotionmodifiercheck">{"LocomotionModifierCheck"}</Link>{" check"}</code> | <span className="api-desc">The check that applies the locomotion change on enter and leave.</span> |
| <Link id="m-currentplayers" /><code>{"private Dictionary<Collider, int> currentPlayers"}</code> | <span className="api-desc">Per collider count of overlapping triggers, so nested colliders count once.</span> |
| <Link id="m-issafeinside" /><code>{"private bool IsSafeInside"}</code> | <span className="api-desc">Value given to the player's `SmoothLocomotion.IsSafe` while inside. Set back to true on leaving.</span> |
| <Link id="m-playermap" /><code>{"private static Dictionary<Collider, "}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{"> playerMap"}</code> | <span className="api-desc">Static cache from a player's collider to its smooth locomotion player controller.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Always 0.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalidteleportationposition" /><code>{"static bool IsValidTeleportationPosition(Vector3 position, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Checks every water layer modifier at the position and returns false if any check refuses the teleport.</span> |
| <Link id="m-ontriggerenter" /><code>{"void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Counts a player's collider in. On first entry sets `IsSafe`, calls the check's enter and `OnPlayerEntered`.</span> |
| <Link id="m-ontriggerexit" /><code>{"void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Counts a collider out. On the last one, calls the check's leave and `OnPlayerLeft`.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"protected virtual void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the bounds in the editor.</span> |
| <Link id="m-onplayerentered" /><code>{"protected virtual void OnPlayerEntered("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Override hook: a player came in.</span> |
| <Link id="m-onplayerleft" /><code>{"protected virtual void OnPlayerLeft("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Override hook: a player left or was destroyed.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autocalculatebounds" /><code>{"private void AutoCalculateBounds()"}</code> | <span className="api-desc">Sets `bounds` to cover all child colliders and turns off recalculating.</span> |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | <span className="api-desc">Build bake: calculates the bounds ahead of time if set to.</span> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Empty build clean step.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Runs leave logic for every player still inside.</span> |
| <Link id="m-removeplayer" /><code>{"private void RemovePlayer("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Calls the check's leave and `OnPlayerLeft` for a player, also when their prefab is destroyed.</span> |
| <Link id="m-removeplayer-2" /><code>{"private void RemovePlayer("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Calls the check's leave and `OnPlayerLeft` for a player, also when their prefab is destroyed.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Calculates the bounds if set to.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LocomotionModifier`:

<div className="api-used-in">

[`RiverCollision.locomotionModifier`](/mod/game-api/types/alta-world-generation/rivercollision#m-locomotionmodifier).

</div>
