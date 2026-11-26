---
title: "Quiver"
description: "Quiver dock that stacks arrows: keeps one real docked arrow and shows extra copies (dummy arrows) for the rest of the stored quantity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Quiver

A **class** in `Root.Township`, the global namespace.

Quiver dock that stacks arrows: keeps one real docked arrow and shows extra copies (dummy arrows) for the rest of the stored quantity. Dummies are client only.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Quiver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">Pickup dock on this object that stores the arrows.</span> |
| <Link id="m-dockedfeather" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/feather">{"Feather"}</Link>{" dockedFeather"}</code> | <span className="api-desc">Feather of the first arrow docked, used to build matching dummies.</span> |
| <Link id="m-dummyarrows" /><code>{"private List<GameObject> dummyArrows"}</code> | <span className="api-desc">Dummy arrow objects shown in the quiver.</span> |
| <Link id="m-dummyprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/dummyarrow">{"DummyArrow"}</Link>{" dummyPrefab"}</code> | <span className="api-desc">Prefab for feathered dummy arrows.</span> |
| <Link id="m-isempty" /><code>{"private bool isEmpty"}</code> | <span className="api-desc">True when the dock holds no arrows.</span> |
| <Link id="m-lookatpoint" /><code>{"private Transform lookAtPoint"}</code> | <span className="api-desc">Optional point arrows are angled towards.</span> |
| <Link id="m-maximumvariation" /><code>{"private Vector3 maximumVariation"}</code> | <span className="api-desc">Largest random offset from the snap point per axis.</span> |
| <Link id="m-maxnumberofdummyarrows" /><code>{"private int maxNumberOfDummyArrows"}</code> | <span className="api-desc">Most dummy arrows shown.</span> |
| <Link id="m-overridescale" /><code>{"private float overrideScale"}</code> | <span className="api-desc">Scale arrows get while in the quiver.</span> |

</details>

## Methods

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the dock's dock and undock events, and quantity changes when not headless.</span> |
| <Link id="m-checkquantities" /><code>{"private void CheckQuantities()"}</code> | <span className="api-desc">Client: adds or removes dummy arrows to match the stored quantity, capped at `maxNumberOfDummyArrows`.</span> |
| <Link id="m-createdummyarrow" /><code>{"private Transform CreateDummyArrow()"}</code> | <span className="api-desc">Makes a dummy arrow, from the feathered prefab if the arrow has a feather or by copying the docked arrow's meshes.</span> |
| <Link id="m-itemdocked" /><code>{"private void ItemDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arrowPickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Places the docked arrow in the quiver, refreshes dummies and makes it kinematic.</span> |
| <Link id="m-itemundocked" /><code>{"private void ItemUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arrowPickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Restores the arrow's scale and network rigidbody, and updates `isEmpty`.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws the arrow placement box.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: re-places the docked and dummy arrows.</span> |
| <Link id="m-placearrow" /><code>{"private void PlaceArrow("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Parents an arrow to the snap point at a random offset and spin, pointed at `lookAtPoint` if set.</span> |
| <Link id="m-placearrow-2" /><code>{"private void PlaceArrow(Transform arrow)"}</code> | <span className="api-desc">Parents an arrow to the snap point at a random offset and spin, pointed at `lookAtPoint` if set.</span> |

</details>
