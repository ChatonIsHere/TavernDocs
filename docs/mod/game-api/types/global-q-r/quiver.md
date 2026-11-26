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
| <Link id="m-ctor" /><code>{"Quiver()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | Pickup dock on this object that stores the arrows. |
| <Link id="m-dockedfeather" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/feather">{"Feather"}</Link>{" dockedFeather"}</code> | Feather of the first arrow docked, used to build matching dummies. |
| <Link id="m-dummyarrows" /><code>{"private List<GameObject> dummyArrows"}</code> | Dummy arrow objects shown in the quiver. |
| <Link id="m-dummyprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/dummyarrow">{"DummyArrow"}</Link>{" dummyPrefab"}</code> | Prefab for feathered dummy arrows. |
| <Link id="m-isempty" /><code>{"private bool isEmpty"}</code> | True when the dock holds no arrows. |
| <Link id="m-lookatpoint" /><code>{"private Transform lookAtPoint"}</code> | Optional point arrows are angled towards. |
| <Link id="m-maximumvariation" /><code>{"private Vector3 maximumVariation"}</code> | Largest random offset from the snap point per axis. |
| <Link id="m-maxnumberofdummyarrows" /><code>{"private int maxNumberOfDummyArrows"}</code> | Most dummy arrows shown. |
| <Link id="m-overridescale" /><code>{"private float overrideScale"}</code> | Scale arrows get while in the quiver. |

</details>

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the dock's dock and undock events, and quantity changes when not headless. |
| <Link id="m-checkquantities" /><code>{"private void CheckQuantities()"}</code> | Client: adds or removes dummy arrows to match the stored quantity, capped at `maxNumberOfDummyArrows`. |
| <Link id="m-createdummyarrow" /><code>{"private Transform CreateDummyArrow()"}</code> | Makes a dummy arrow, from the feathered prefab if the arrow has a feather or by copying the docked arrow's meshes. |
| <Link id="m-itemdocked" /><code>{"private void ItemDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arrowPickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Places the docked arrow in the quiver, refreshes dummies and makes it kinematic. |
| <Link id="m-itemundocked" /><code>{"private void ItemUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arrowPickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Restores the arrow's scale and network rigidbody, and updates `isEmpty`. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor: draws the arrow placement box. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: re-places the docked and dummy arrows. |
| <Link id="m-placearrow" /><code>{"private void PlaceArrow("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Parents an arrow to the snap point at a random offset and spin, pointed at `lookAtPoint` if set. |
| <Link id="m-placearrow-2" /><code>{"private void PlaceArrow(Transform arrow)"}</code> | Parents an arrow to the snap point at a random offset and spin, pointed at `lookAtPoint` if set. |

</details>
