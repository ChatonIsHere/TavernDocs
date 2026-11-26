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
| <Link id="m-ctor" /><code>{"Crank()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ghosthandtransform" /><code>{"private Transform ghostHandTransform"}</code> | <span className="api-desc">Transform of the grabbing hand's ghost hand, followed while turning.</span> |
| <Link id="m-interactor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | <span className="api-desc">The interactor turning the crank.</span> |
| <Link id="m-lastdent" /><code>{"private Quaternion lastDent"}</code> | <span className="api-desc">Crank rotation at the last activation.</span> |
| <Link id="m-lasthandposition" /><code>{"private Vector3 lastHandPosition"}</code> | <span className="api-desc">Hand position around the crank when grabbed.</span> |
| <Link id="m-rotationroot" /><code>{"private Transform rotationRoot"}</code> | <span className="api-desc">Transform that is rotated on its X axis.</span> |
| <Link id="m-tightgripcolliders" /><code>{"private Collider[] tightGripColliders"}</code> | <span className="api-desc">Colliders used to re-check tight grip on the handle while turning.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/crank-rotationtype">{"Crank.RotationType"}</Link>{" type"}</code> | <span className="api-desc">Half or quarter turn per activation.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dentdistance" /><code>{"private float DentDistance { get; }"}</code> | <span className="api-desc">Degrees of turn between activations: 170 for half turns, 80 for quarter turns.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkaction" /><code>{"protected override IEnumerator CheckAction() (iterator)"}</code> | <span className="api-desc">Server coroutine: rotates the crank to follow the ghost hand each frame and calls `OnActivated` each time it turns past `DentDistance`.</span> |
| <Link id="m-oninteracted" /><code>{"protected override void OnInteracted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stores the grabbing hand and its starting position around the crank.</span> |
