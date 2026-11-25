---
title: "StackingComponent"
description: "class StackingComponent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StackingComponent

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IReferenceRenderer`](/game-api/types/global-i-l/ireferencerenderer), [`IPreventNoLongerReadable`](/game-api/types/alta-utilities/ipreventnolongerreadable), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StackingComponent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collisionmesh" /><code>{"private Mesh collisionMesh"}</code> |  |
| <Link id="m-instructions" /><code>{"private "}<Link to="/game-api/types/alta-items/stackinginstructions">{"StackingInstructions"}</Link>{" instructions"}</code> |  |
| <Link id="m-renderers" /><code>{"private MeshRenderer[] renderers"}</code> |  |
| <Link id="m-renderingfilters" /><code>{"private MeshFilter[] renderingFilters"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collisionmesh-2" /><code>{"Mesh CollisionMesh { get; }"}</code> |  |
| <Link id="m-renderers-2" /><code>{"MeshRenderer[] Renderers { get; }"}</code> |  |
| <Link id="m-renderingfilters-2" /><code>{"MeshFilter[] RenderingFilters { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsetup" /><code><Link to="/game-api/types/alta-items/stackinginstructionsetup">{"StackingInstructionSetup"}</Link>{" GetSetup(Bounds bounds, Matrix4x4 localToWorld)"}</code> |  |
| <Link id="m-canmarkasnonlongerreadable" /><code>{"private bool Alta.Utilities.Atlas.IPreventNoLongerReadable.CanMarkAsNonLongerReadable(Renderer renderer)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-updaterenderers" /><code>{"private void IReferenceRenderer.UpdateRenderers(Renderer[] oldFirstRenderers, Renderer[] newFirstRenderers)"}</code> |  |
