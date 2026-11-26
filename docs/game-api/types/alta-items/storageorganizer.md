---
title: "StorageOrganizer"
description: "Shows a storage dock's contents as a baked stack of item meshes (such as a pile of logs on a rack), with a matching collider, and draws it only while visible."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StorageOrganizer

A **class** in `Root.Township`, `Alta.Inventory`.

Shows a storage dock's contents as a baked stack of item meshes (such as a pile of logs on a rack), with a matching collider, and draws it only while visible. Component next to the dock on storage prefabs; both sides bake the collider, only clients draw.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IUpdateOnMove`](/game-api/types/global-i-l/iupdateonmove)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StorageOrganizer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmeshposition" /><code>{"private Matrix4x4 androidMeshPosition"}</code> | World matrix the stack is drawn and laid out with. |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> | Local box the items are stacked inside. |
| <Link id="m-collisionmesh" /><code>{"private Mesh collisionMesh"}</code> | Mesh baked into the collider: the item's collision mesh, or its first rendering mesh. |
| <Link id="m-cullingindex" /><code>{"private int cullingIndex"}</code> | Index of this stack's sphere in the culling group. |
| <Link id="m-currentquantity" /><code>{"private int currentQuantity"}</code> | How many item meshes are shown now. |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The dock whose contents are shown. |
| <Link id="m-dockedtoitems" /><code>{"private AnimationCurve dockedToItems"}</code> | Curve from stored quantity to the number of meshes shown. |
| <Link id="m-hasdynamicvisibility" /><code>{"private bool hasDynamicVisibility"}</code> | Use the visibility detector instead of a static culling sphere, for storage that moves. |
| <Link id="m-interactioncollider" /><code>{"private BoxCollider interactionCollider"}</code> | Box collider resized to fit the baked stack. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-materials" /><code>{"private Material[] materials"}</code> | Materials for each rendering mesh, from the item's renderers. |
| <Link id="m-meshcollider" /><code>{"private MeshCollider meshCollider"}</code> | Collider that gets the baked stack mesh. |
| <Link id="m-meshes" /><code>{"private Mesh[] meshes"}</code> | The item's source meshes, one per rendering filter. |
| <Link id="m-render" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" render"}</code> | Handle for the per-frame `Render` call. |
| <Link id="m-renderingmeshes" /><code>{"private Mesh[] renderingMeshes"}</code> | Baked stack meshes drawn on clients. |
| <Link id="m-stackingsetup" /><code>{"private "}<Link to="/game-api/types/alta-items/stackinginstructionsetup">{"StackingInstructionSetup"}</Link>{" stackingSetup"}</code> | Layout from the item's `StackingComponent`, holding the item positions and max count. |
| <Link id="m-visibilitydetector" /><code>{"private "}<Link to="/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" visibilityDetector"}</code> | Detector used when `hasDynamicVisibility` is on. |

</details>

## Methods

<details>
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Turns the colliders off and hooks the dock's quantity, docked and undocked events. |
| <Link id="m-becameinvisible" /><code>{"private void BecameInvisible()"}</code> | Stops drawing when the visibility detector says the stack is off screen. |
| <Link id="m-becamevisible" /><code>{"private void BecameVisible()"}</code> | Starts drawing each frame when the visibility detector says the stack is on screen. |
| <Link id="m-checkquantities" /><code>{"private void CheckQuantities()"}</code> | Works out how many items to show from the stored quantity and rebakes the collider and rendering meshes when that changes. |
| <Link id="m-clean" /><code>{"private void Clean("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | On undock, clears the setup once the dock is empty. |
| <Link id="m-cleanstaticvisibility" /><code>{"private void CleanStaticVisibility()"}</code> | Removes this stack's sphere from the culling group. |
| <Link id="m-clearsetup" /><code>{"private void ClearSetup()"}</code> | Forgets the stacking setup, sets the shown count to 0 and turns the colliders off. |
| <Link id="m-moved" /><code>{"private void IUpdateOnMove.Moved()"}</code> | When the storage is moved, re-registers its culling sphere at the new spot (static visibility only). |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Frees the baked meshes and unhooks visibility and the draw call. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the stacking bounds as a wire box. |
| <Link id="m-render-2" /><code>{"private void Render()"}</code> | Draws the baked meshes each frame while visible, updating positions first if the storage has moved. |
| <Link id="m-setmeshenabled" /><code>{"private void SetMeshEnabled(bool isEnabled)"}</code> | Turns the mesh collider and interaction collider on or off. |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | When an item is first docked, reads its `StackingComponent` meshes and materials and builds the stacking layout for `bounds`. |
| <Link id="m-setupstaticculling" /><code>{"private void SetupStaticCulling()"}</code> | Registers a culling sphere around the bounds so `UpdateVisibility` starts and stops drawing. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Client: hooks the visibility detector when `hasDynamicVisibility` is on. |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(CullingGroupEvent sphere)"}</code> | Culling group callback: starts drawing when the sphere becomes visible, stops otherwise. |

</details>
