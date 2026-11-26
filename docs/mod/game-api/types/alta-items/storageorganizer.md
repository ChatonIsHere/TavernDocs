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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IUpdateOnMove`](/mod/game-api/types/global-i-l/iupdateonmove)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StorageOrganizer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmeshposition" /><code>{"private Matrix4x4 androidMeshPosition"}</code> | <span className="api-desc">World matrix the stack is drawn and laid out with.</span> |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> | <span className="api-desc">Local box the items are stacked inside.</span> |
| <Link id="m-collisionmesh" /><code>{"private Mesh collisionMesh"}</code> | <span className="api-desc">Mesh baked into the collider: the item's collision mesh, or its first rendering mesh.</span> |
| <Link id="m-cullingindex" /><code>{"private int cullingIndex"}</code> | <span className="api-desc">Index of this stack's sphere in the culling group.</span> |
| <Link id="m-currentquantity" /><code>{"private int currentQuantity"}</code> | <span className="api-desc">How many item meshes are shown now.</span> |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">The dock whose contents are shown.</span> |
| <Link id="m-dockedtoitems" /><code>{"private AnimationCurve dockedToItems"}</code> | <span className="api-desc">Curve from stored quantity to the number of meshes shown.</span> |
| <Link id="m-hasdynamicvisibility" /><code>{"private bool hasDynamicVisibility"}</code> | <span className="api-desc">Use the visibility detector instead of a static culling sphere, for storage that moves.</span> |
| <Link id="m-interactioncollider" /><code>{"private BoxCollider interactionCollider"}</code> | <span className="api-desc">Box collider resized to fit the baked stack.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-materials" /><code>{"private Material[] materials"}</code> | <span className="api-desc">Materials for each rendering mesh, from the item's renderers.</span> |
| <Link id="m-meshcollider" /><code>{"private MeshCollider meshCollider"}</code> | <span className="api-desc">Collider that gets the baked stack mesh.</span> |
| <Link id="m-meshes" /><code>{"private Mesh[] meshes"}</code> | <span className="api-desc">The item's source meshes, one per rendering filter.</span> |
| <Link id="m-render" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" render"}</code> | <span className="api-desc">Handle for the per-frame `Render` call.</span> |
| <Link id="m-renderingmeshes" /><code>{"private Mesh[] renderingMeshes"}</code> | <span className="api-desc">Baked stack meshes drawn on clients.</span> |
| <Link id="m-stackingsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/stackinginstructionsetup">{"StackingInstructionSetup"}</Link>{" stackingSetup"}</code> | <span className="api-desc">Layout from the item's `StackingComponent`, holding the item positions and max count.</span> |
| <Link id="m-visibilitydetector" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" visibilityDetector"}</code> | <span className="api-desc">Detector used when `hasDynamicVisibility` is on.</span> |

</details>

## Methods

<details className="api-private">
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Turns the colliders off and hooks the dock's quantity, docked and undocked events.</span> |
| <Link id="m-becameinvisible" /><code>{"private void BecameInvisible()"}</code> | <span className="api-desc">Stops drawing when the visibility detector says the stack is off screen.</span> |
| <Link id="m-becamevisible" /><code>{"private void BecameVisible()"}</code> | <span className="api-desc">Starts drawing each frame when the visibility detector says the stack is on screen.</span> |
| <Link id="m-checkquantities" /><code>{"private void CheckQuantities()"}</code> | <span className="api-desc">Works out how many items to show from the stored quantity and rebakes the collider and rendering meshes when that changes.</span> |
| <Link id="m-clean" /><code>{"private void Clean("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">On undock, clears the setup once the dock is empty.</span> |
| <Link id="m-cleanstaticvisibility" /><code>{"private void CleanStaticVisibility()"}</code> | <span className="api-desc">Removes this stack's sphere from the culling group.</span> |
| <Link id="m-clearsetup" /><code>{"private void ClearSetup()"}</code> | <span className="api-desc">Forgets the stacking setup, sets the shown count to 0 and turns the colliders off.</span> |
| <Link id="m-moved" /><code>{"private void IUpdateOnMove.Moved()"}</code> | <span className="api-desc">When the storage is moved, re-registers its culling sphere at the new spot (static visibility only).</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Frees the baked meshes and unhooks visibility and the draw call.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the stacking bounds as a wire box.</span> |
| <Link id="m-render-2" /><code>{"private void Render()"}</code> | <span className="api-desc">Draws the baked meshes each frame while visible, updating positions first if the storage has moved.</span> |
| <Link id="m-setmeshenabled" /><code>{"private void SetMeshEnabled(bool isEnabled)"}</code> | <span className="api-desc">Turns the mesh collider and interaction collider on or off.</span> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">When an item is first docked, reads its `StackingComponent` meshes and materials and builds the stacking layout for `bounds`.</span> |
| <Link id="m-setupstaticculling" /><code>{"private void SetupStaticCulling()"}</code> | <span className="api-desc">Registers a culling sphere around the bounds so `UpdateVisibility` starts and stops drawing.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Client: hooks the visibility detector when `hasDynamicVisibility` is on.</span> |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(CullingGroupEvent sphere)"}</code> | <span className="api-desc">Culling group callback: starts drawing when the sphere becomes visible, stops otherwise.</span> |

</details>
