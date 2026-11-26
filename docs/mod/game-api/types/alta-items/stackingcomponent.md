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
| <Link id="m-ctor" /><code>{"StackingComponent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collisionmesh" /><code>{"private Mesh collisionMesh"}</code> | Backing field for `CollisionMesh`. |
| <Link id="m-instructions" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/stackinginstructions">{"StackingInstructions"}</Link>{" instructions"}</code> | The stacking instructions asset. |
| <Link id="m-renderers" /><code>{"private MeshRenderer[] renderers"}</code> | Backing field for `Renderers`. |
| <Link id="m-renderingfilters" /><code>{"private MeshFilter[] renderingFilters"}</code> | Backing field for `RenderingFilters`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collisionmesh-2" /><code>{"Mesh CollisionMesh { get; }"}</code> | Mesh used for stack collision. |
| <Link id="m-renderers-2" /><code>{"MeshRenderer[] Renderers { get; }"}</code> | Mesh renderers used to draw the stack. |
| <Link id="m-renderingfilters-2" /><code>{"MeshFilter[] RenderingFilters { get; }"}</code> | Mesh filters of `renderers`, used to draw the stack. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsetup" /><code><Link to="/mod/game-api/types/alta-items/stackinginstructionsetup">{"StackingInstructionSetup"}</Link>{" GetSetup(Bounds bounds, Matrix4x4 localToWorld)"}</code> | Builds the stack layout for the given bounds and transform from `instructions`. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canmarkasnonlongerreadable" /><code>{"private bool Alta.Utilities.Atlas.IPreventNoLongerReadable.CanMarkAsNonLongerReadable(Renderer renderer)"}</code> | Build step: false for meshes used by the stack, so they stay readable. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Lets the instructions draw their gizmos. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: refreshes `renderingFilters` from `renderers`. |
| <Link id="m-updaterenderers" /><code>{"private void IReferenceRenderer.UpdateRenderers(Renderer[] oldFirstRenderers, Renderer[] newFirstRenderers)"}</code> | Build step: swaps old renderers for new ones in `renderers` and refreshes `renderingFilters`. |

</details>
