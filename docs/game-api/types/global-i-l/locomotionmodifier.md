---
title: "LocomotionModifier"
description: "class LocomotionModifier in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionModifier

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`IDontSplit`](/game-api/types/global-i-l/idontsplit), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocomotionModifier()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> |
| <Link id="m-calculateboundsonstart" /><code>{"private bool calculateBoundsOnStart"}</code> |
| <Link id="m-check" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotionmodifiercheck">{"LocomotionModifierCheck"}</Link>{" check"}</code> |
| <Link id="m-currentplayers" /><code>{"private Dictionary<Collider, int> currentPlayers"}</code> |
| <Link id="m-issafeinside" /><code>{"private bool IsSafeInside"}</code> |
| <Link id="m-playermap" /><code>{"private static Dictionary<Collider, "}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{"> playerMap"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-isvalidteleportationposition" /><code>{"static bool IsValidTeleportationPosition(Vector3 position, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |
| <Link id="m-ontriggerenter" /><code>{"void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"void OnTriggerExit(Collider other)"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"protected virtual void OnDrawGizmosSelected()"}</code> |
| <Link id="m-onplayerentered" /><code>{"protected virtual void OnPlayerEntered("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> |
| <Link id="m-onplayerleft" /><code>{"protected virtual void OnPlayerLeft("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-autocalculatebounds" /><code>{"private void AutoCalculateBounds()"}</code> |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-removeplayer" /><code>{"private void RemovePlayer("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |
| <Link id="m-removeplayer-2" /><code>{"private void RemovePlayer("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `LocomotionModifier`:

[`RiverCollision.locomotionModifier`](/game-api/types/alta-world-generation/rivercollision#m-locomotionmodifier).
