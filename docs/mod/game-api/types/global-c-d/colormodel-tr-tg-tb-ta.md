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
| <Link id="m-ctor" /><code>{"ColorModel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-mesh" /><code>{"protected Mesh mesh"}</code> | The original mesh. A clone with vertex colours replaces it while colours are changed. |
| <Link id="m-meshfilter" /><code>{"protected MeshFilter meshFilter"}</code> | The mesh filter whose mesh is swapped. |
| <Link id="m-meshrenderer" /><code>{"protected Renderer meshRenderer"}</code> | The renderer whose material is swapped. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boneweights" /><code>{"private BoneWeight[] boneWeights"}</code> | Bone weights passed to the colour core. |
| <Link id="m-clonemesh" /><code>{"private Mesh cloneMesh"}</code> | Per-instance mesh copy used while any colour is applied. Null otherwise. |
| <Link id="m-core" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<TR, TG, TB, TA> core"}</code> | The `ColorModelCore` that works out vertex colours. Null on headless servers. |
| <Link id="m-modifiedmaterial" /><code>{"private Material modifiedMaterial"}</code> | Material used while colours are applied. Defaults to the renderer's material. |
| <Link id="m-unmodifiedmaterial" /><code>{"private Material unmodifiedMaterial"}</code> | Material used with no colours applied. Defaults to the renderer's material. |
| <Link id="m-workingcolors" /><code>{"private static List<Color> workingColors"}</code> | Shared scratch list for vertex colours. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-boneweights-2" /><code>{"BoneWeight[] BoneWeights { get; }"}</code> | Per-vertex bone weights used to blend point values onto vertices. |
| <Link id="m-modifiedmaterial-2" /><code>{"Material ModifiedMaterial { get; }"}</code> | Material used while any channel differs from its default. |
| <Link id="m-unmodifiedmaterial-2" /><code>{"Material UnmodifiedMaterial { get; }"}</code> | Material used while every channel is at its default. |
| <Link id="m-alphapoints" /><code>{"protected virtual List<TA> AlphaPoints { get; }"}</code> | Points that drive the alpha channel. Null unless a subclass provides them. |
| <Link id="m-bluepoints" /><code>{"protected virtual List<TB> BluePoints { get; }"}</code> | Points that drive the blue channel. Null unless a subclass provides them. |
| <Link id="m-core-2" /><code>{"protected "}<Link to="/mod/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<TR, TG, TB, TA> Core { get; }"}</code> | The `ColorModelCore` doing the work. Null on a headless server. |
| <Link id="m-defaultalpha" /><code>{"protected virtual float DefaultAlpha { get; }"}</code> | Alpha value that counts as unchanged (1 by default). |
| <Link id="m-defaultblue" /><code>{"protected virtual float DefaultBlue { get; }"}</code> | Blue value that counts as unchanged (1 by default). |
| <Link id="m-defaultgreen" /><code>{"protected virtual float DefaultGreen { get; }"}</code> | Green value that counts as unchanged (1 by default). |
| <Link id="m-defaultred" /><code>{"protected virtual float DefaultRed { get; }"}</code> | Red value that counts as unchanged (1 by default). |
| <Link id="m-greenpoints" /><code>{"protected virtual List<TG> GreenPoints { get; }"}</code> | Points that drive the green channel. Null unless a subclass provides them. |
| <Link id="m-redpoints" /><code>{"protected virtual List<TR> RedPoints { get; }"}</code> | Points that drive the red channel. Null unless a subclass provides them. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Schedules a colour check at the end of the frame. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Checks the colours straight away. |
| <Link id="m-setmaterials" /><code>{"void SetMaterials(Material unmodified, Material modified)"}</code> | Sets the unmodified and modified materials and applies the right one. |
| <Link id="m-updatemeshfilter" /><code>{"void UpdateMeshFilter(MeshFilter filter)"}</code> | Switches to a new mesh filter and its mesh, then reapplies colours. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Client: sets up the colour core with the mesh, bone weights, points and defaults, and picks the starting material. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Cleans up the cloned mesh, if any. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-modified" /><code>{"private void Modified("}<Link to="/mod/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<TR, TG, TB, TA> core)"}</code> | When colour points change, switches between the shared mesh and a cloned mesh with vertex colours, and swaps materials to match. |

</details>
