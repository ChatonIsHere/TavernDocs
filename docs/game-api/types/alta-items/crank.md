---
title: "Crank"
description: "A Mechanism turned by hand in half or quarter turns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Crank

A **class** in `Root.Township`, `Alta.Mechanisms`.

A `Mechanism` turned by hand in half or quarter turns.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`Mechanism`](/game-api/types/alta-items/mechanism)
- **Nested types** [`RotationType`](/game-api/types/alta-items/crank-rotationtype)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Crank()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-ghosthandtransform" /><code>{"private Transform ghostHandTransform"}</code> |
| <Link id="m-interactor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> |
| <Link id="m-lastdent" /><code>{"private Quaternion lastDent"}</code> |
| <Link id="m-lasthandposition" /><code>{"private Vector3 lastHandPosition"}</code> |
| <Link id="m-rotationroot" /><code>{"private Transform rotationRoot"}</code> |
| <Link id="m-tightgripcolliders" /><code>{"private Collider[] tightGripColliders"}</code> |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-items/crank-rotationtype">{"Crank.RotationType"}</Link>{" type"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-dentdistance" /><code>{"private float DentDistance { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-checkaction" /><code>{"protected override IEnumerator CheckAction() (iterator)"}</code> |
| <Link id="m-oninteracted" /><code>{"protected override void OnInteracted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
