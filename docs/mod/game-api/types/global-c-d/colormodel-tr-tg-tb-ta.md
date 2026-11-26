---
title: "ColorModel<TR, TG, TB, TA>"
description: "Base for a networked object whose mesh vertex colours are driven by values on its bones, one channel per point type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorModel&lt;TR, TG, TB, TA&gt;

A **class** in `Root.Township`, the global namespace.

Base for a networked object whose mesh vertex colours are driven by values on its bones, one channel per point type. Forging's `HeatModel` uses it for metal heat glow. Visual only: does nothing on a headless server.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`HeatModel<TG, TB, TA>`](/mod/game-api/types/alta-crafting/heatmodel-tg-tb-ta)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColorModel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-mesh" /><code>{"protected Mesh mesh"}</code> | <span className="api-desc">The original mesh. A clone with vertex colours replaces it while colours are changed.</span> |
| <Link id="m-meshfilter" /><code>{"protected MeshFilter meshFilter"}</code> | <span className="api-desc">The mesh filter whose mesh is swapped.</span> |
| <Link id="m-meshrenderer" /><code>{"protected Renderer meshRenderer"}</code> | <span className="api-desc">The renderer whose material is swapped.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boneweights" /><code>{"private BoneWeight[] boneWeights"}</code> | <span className="api-desc">Bone weights passed to the colour core.</span> |
| <Link id="m-clonemesh" /><code>{"private Mesh cloneMesh"}</code> | <span className="api-desc">Per-instance mesh copy used while any colour is applied. Null otherwise.</span> |
| <Link id="m-core" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<TR, TG, TB, TA> core"}</code> | <span className="api-desc">The `ColorModelCore` that works out vertex colours. Null on headless servers.</span> |
| <Link id="m-modifiedmaterial" /><code>{"private Material modifiedMaterial"}</code> | <span className="api-desc">Material used while colours are applied. Defaults to the renderer's material.</span> |
| <Link id="m-unmodifiedmaterial" /><code>{"private Material unmodifiedMaterial"}</code> | <span className="api-desc">Material used with no colours applied. Defaults to the renderer's material.</span> |
| <Link id="m-workingcolors" /><code>{"private static List<Color> workingColors"}</code> | <span className="api-desc">Shared scratch list for vertex colours.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-boneweights-2" /><code>{"BoneWeight[] BoneWeights { get; }"}</code> | <span className="api-desc">Per-vertex bone weights used to blend point values onto vertices.</span> |
| <Link id="m-modifiedmaterial-2" /><code>{"Material ModifiedMaterial { get; }"}</code> | <span className="api-desc">Material used while any channel differs from its default.</span> |
| <Link id="m-unmodifiedmaterial-2" /><code>{"Material UnmodifiedMaterial { get; }"}</code> | <span className="api-desc">Material used while every channel is at its default.</span> |
| <Link id="m-alphapoints" /><code>{"protected virtual List<TA> AlphaPoints { get; }"}</code> | <span className="api-desc">Points that drive the alpha channel. Null unless a subclass provides them.</span> |
| <Link id="m-bluepoints" /><code>{"protected virtual List<TB> BluePoints { get; }"}</code> | <span className="api-desc">Points that drive the blue channel. Null unless a subclass provides them.</span> |
| <Link id="m-core-2" /><code>{"protected "}<Link to="/mod/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<TR, TG, TB, TA> Core { get; }"}</code> | <span className="api-desc">The `ColorModelCore` doing the work. Null on a headless server.</span> |
| <Link id="m-defaultalpha" /><code>{"protected virtual float DefaultAlpha { get; }"}</code> | <span className="api-desc">Alpha value that counts as unchanged (1 by default).</span> |
| <Link id="m-defaultblue" /><code>{"protected virtual float DefaultBlue { get; }"}</code> | <span className="api-desc">Blue value that counts as unchanged (1 by default).</span> |
| <Link id="m-defaultgreen" /><code>{"protected virtual float DefaultGreen { get; }"}</code> | <span className="api-desc">Green value that counts as unchanged (1 by default).</span> |
| <Link id="m-defaultred" /><code>{"protected virtual float DefaultRed { get; }"}</code> | <span className="api-desc">Red value that counts as unchanged (1 by default).</span> |
| <Link id="m-greenpoints" /><code>{"protected virtual List<TG> GreenPoints { get; }"}</code> | <span className="api-desc">Points that drive the green channel. Null unless a subclass provides them.</span> |
| <Link id="m-redpoints" /><code>{"protected virtual List<TR> RedPoints { get; }"}</code> | <span className="api-desc">Points that drive the red channel. Null unless a subclass provides them.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Schedules a colour check at the end of the frame.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Checks the colours straight away.</span> |
| <Link id="m-setmaterials" /><code>{"void SetMaterials(Material unmodified, Material modified)"}</code> | <span className="api-desc">Sets the unmodified and modified materials and applies the right one.</span> |
| <Link id="m-updatemeshfilter" /><code>{"void UpdateMeshFilter(MeshFilter filter)"}</code> | <span className="api-desc">Switches to a new mesh filter and its mesh, then reapplies colours.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Client: sets up the colour core with the mesh, bone weights, points and defaults, and picks the starting material.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Cleans up the cloned mesh, if any.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-modified" /><code>{"private void Modified("}<Link to="/mod/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<TR, TG, TB, TA> core)"}</code> | <span className="api-desc">When colour points change, switches between the shared mesh and a cloned mesh with vertex colours, and swaps materials to match.</span> |

</details>
