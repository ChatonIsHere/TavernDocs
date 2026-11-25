---
title: "StorageOrganizer"
description: "class StorageOrganizer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StorageOrganizer

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IUpdateOnMove`](/game-api/types/global-i-l/iupdateonmove)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StorageOrganizer()"}</code> |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-androidmeshposition" /><code>{"private Matrix4x4 androidMeshPosition"}</code> |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> |
| <Link id="m-collisionmesh" /><code>{"private Mesh collisionMesh"}</code> |
| <Link id="m-cullingindex" /><code>{"private int cullingIndex"}</code> |
| <Link id="m-currentquantity" /><code>{"private int currentQuantity"}</code> |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> |
| <Link id="m-dockedtoitems" /><code>{"private AnimationCurve dockedToItems"}</code> |
| <Link id="m-hasdynamicvisibility" /><code>{"private bool hasDynamicVisibility"}</code> |
| <Link id="m-interactioncollider" /><code>{"private BoxCollider interactionCollider"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-materials" /><code>{"private Material[] materials"}</code> |
| <Link id="m-meshcollider" /><code>{"private MeshCollider meshCollider"}</code> |
| <Link id="m-meshes" /><code>{"private Mesh[] meshes"}</code> |
| <Link id="m-render" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" render"}</code> |
| <Link id="m-renderingmeshes" /><code>{"private Mesh[] renderingMeshes"}</code> |
| <Link id="m-stackingsetup" /><code>{"private "}<Link to="/game-api/types/alta-items/stackinginstructionsetup">{"StackingInstructionSetup"}</Link>{" stackingSetup"}</code> |
| <Link id="m-visibilitydetector" /><code>{"private "}<Link to="/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" visibilityDetector"}</code> |

</details>

## Methods

<details>
<summary>16 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-becameinvisible" /><code>{"private void BecameInvisible()"}</code> |
| <Link id="m-becamevisible" /><code>{"private void BecameVisible()"}</code> |
| <Link id="m-checkquantities" /><code>{"private void CheckQuantities()"}</code> |
| <Link id="m-clean" /><code>{"private void Clean("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-cleanstaticvisibility" /><code>{"private void CleanStaticVisibility()"}</code> |
| <Link id="m-clearsetup" /><code>{"private void ClearSetup()"}</code> |
| <Link id="m-moved" /><code>{"private void IUpdateOnMove.Moved()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-render-2" /><code>{"private void Render()"}</code> |
| <Link id="m-setmeshenabled" /><code>{"private void SetMeshEnabled(bool isEnabled)"}</code> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-setupstaticculling" /><code>{"private void SetupStaticCulling()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(CullingGroupEvent sphere)"}</code> |

</details>
