---
title: "Crank"
description: "A hand crank Mechanism: turns with the player's hand around its X axis and activates each time it passes a half or quarter turn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Crank

A **class** in `Root.Township`, `Alta.Mechanisms`.

A hand crank `Mechanism`: turns with the player's hand around its X axis and activates each time it passes a half or quarter turn.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`Mechanism`](/mod/game-api/types/alta-items/mechanism)
- **Nested types** [`RotationType`](/mod/game-api/types/alta-items/crank-rotationtype)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Crank()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ghosthandtransform" /><code>{"private Transform ghostHandTransform"}</code> | Transform of the grabbing hand's ghost hand, followed while turning. |
| <Link id="m-interactor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | The interactor turning the crank. |
| <Link id="m-lastdent" /><code>{"private Quaternion lastDent"}</code> | Crank rotation at the last activation. |
| <Link id="m-lasthandposition" /><code>{"private Vector3 lastHandPosition"}</code> | Hand position around the crank when grabbed. |
| <Link id="m-rotationroot" /><code>{"private Transform rotationRoot"}</code> | Transform that is rotated on its X axis. |
| <Link id="m-tightgripcolliders" /><code>{"private Collider[] tightGripColliders"}</code> | Colliders used to re-check tight grip on the handle while turning. |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/crank-rotationtype">{"Crank.RotationType"}</Link>{" type"}</code> | Half or quarter turn per activation. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dentdistance" /><code>{"private float DentDistance { get; }"}</code> | Degrees of turn between activations: 170 for half turns, 80 for quarter turns. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkaction" /><code>{"protected override IEnumerator CheckAction() (iterator)"}</code> | Server coroutine: rotates the crank to follow the ghost hand each frame and calls `OnActivated` each time it turns past `DentDistance`. |
| <Link id="m-oninteracted" /><code>{"protected override void OnInteracted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stores the grabbing hand and its starting position around the crank. |
