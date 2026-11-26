---
title: "StackingComponent"
description: "Component on a stackable item's prefab that holds its stacking instructions and the meshes used to draw and collide a stack of it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StackingComponent

A **class** in `Root.Township`, `Alta.Inventory`.

Component on a stackable item's prefab that holds its stacking instructions and the meshes used to draw and collide a stack of it.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IReferenceRenderer`](/mod/game-api/types/global-i-l/ireferencerenderer), [`IPreventNoLongerReadable`](/mod/game-api/types/alta-utilities/ipreventnolongerreadable), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StackingComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collisionmesh" /><code>{"private Mesh collisionMesh"}</code> | <span className="api-desc">Backing field for `CollisionMesh`.</span> |
| <Link id="m-instructions" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/stackinginstructions">{"StackingInstructions"}</Link>{" instructions"}</code> | <span className="api-desc">The stacking instructions asset.</span> |
| <Link id="m-renderers" /><code>{"private MeshRenderer[] renderers"}</code> | <span className="api-desc">Backing field for `Renderers`.</span> |
| <Link id="m-renderingfilters" /><code>{"private MeshFilter[] renderingFilters"}</code> | <span className="api-desc">Backing field for `RenderingFilters`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collisionmesh-2" /><code>{"Mesh CollisionMesh { get; }"}</code> | <span className="api-desc">Mesh used for stack collision.</span> |
| <Link id="m-renderers-2" /><code>{"MeshRenderer[] Renderers { get; }"}</code> | <span className="api-desc">Mesh renderers used to draw the stack.</span> |
| <Link id="m-renderingfilters-2" /><code>{"MeshFilter[] RenderingFilters { get; }"}</code> | <span className="api-desc">Mesh filters of `renderers`, used to draw the stack.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsetup" /><code><Link to="/mod/game-api/types/alta-items/stackinginstructionsetup">{"StackingInstructionSetup"}</Link>{" GetSetup(Bounds bounds, Matrix4x4 localToWorld)"}</code> | <span className="api-desc">Builds the stack layout for the given bounds and transform from `instructions`.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canmarkasnonlongerreadable" /><code>{"private bool Alta.Utilities.Atlas.IPreventNoLongerReadable.CanMarkAsNonLongerReadable(Renderer renderer)"}</code> | <span className="api-desc">Build step: false for meshes used by the stack, so they stay readable.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Lets the instructions draw their gizmos.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: refreshes `renderingFilters` from `renderers`.</span> |
| <Link id="m-updaterenderers" /><code>{"private void IReferenceRenderer.UpdateRenderers(Renderer[] oldFirstRenderers, Renderer[] newFirstRenderers)"}</code> | <span className="api-desc">Build step: swaps old renderers for new ones in `renderers` and refreshes `renderingFilters`.</span> |

</details>
