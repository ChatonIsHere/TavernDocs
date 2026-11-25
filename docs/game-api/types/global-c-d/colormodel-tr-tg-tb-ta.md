---
title: "ColorModel<TR, TG, TB, TA>"
description: "class ColorModel<TR, TG, TB, TA> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorModel&lt;TR, TG, TB, TA&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`HeatModel<TG, TB, TA>`](/game-api/types/alta-crafting/heatmodel-tg-tb-ta)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColorModel()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boneweights" /><code>{"private BoneWeight[] boneWeights"}</code> |  |
| <Link id="m-clonemesh" /><code>{"private Mesh cloneMesh"}</code> |  |
| <Link id="m-core" /><code>{"private "}<Link to="/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<TR, TG, TB, TA> core"}</code> |  |
| <Link id="m-mesh" /><code>{"protected Mesh mesh"}</code> |  |
| <Link id="m-meshfilter" /><code>{"protected MeshFilter meshFilter"}</code> |  |
| <Link id="m-meshrenderer" /><code>{"protected Renderer meshRenderer"}</code> |  |
| <Link id="m-modifiedmaterial" /><code>{"private Material modifiedMaterial"}</code> |  |
| <Link id="m-unmodifiedmaterial" /><code>{"private Material unmodifiedMaterial"}</code> |  |
| <Link id="m-workingcolors" /><code>{"private static List<Color> workingColors"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-boneweights-2" /><code>{"BoneWeight[] BoneWeights { get; }"}</code> |  |
| <Link id="m-modifiedmaterial-2" /><code>{"Material ModifiedMaterial { get; }"}</code> |  |
| <Link id="m-unmodifiedmaterial-2" /><code>{"Material UnmodifiedMaterial { get; }"}</code> |  |
| <Link id="m-alphapoints" /><code>{"protected virtual List<TA> AlphaPoints { get; }"}</code> |  |
| <Link id="m-bluepoints" /><code>{"protected virtual List<TB> BluePoints { get; }"}</code> |  |
| <Link id="m-core-2" /><code>{"protected "}<Link to="/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<TR, TG, TB, TA> Core { get; }"}</code> |  |
| <Link id="m-defaultalpha" /><code>{"protected virtual float DefaultAlpha { get; }"}</code> |  |
| <Link id="m-defaultblue" /><code>{"protected virtual float DefaultBlue { get; }"}</code> |  |
| <Link id="m-defaultgreen" /><code>{"protected virtual float DefaultGreen { get; }"}</code> |  |
| <Link id="m-defaultred" /><code>{"protected virtual float DefaultRed { get; }"}</code> |  |
| <Link id="m-greenpoints" /><code>{"protected virtual List<TG> GreenPoints { get; }"}</code> |  |
| <Link id="m-redpoints" /><code>{"protected virtual List<TR> RedPoints { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-setmaterials" /><code>{"void SetMaterials(Material unmodified, Material modified)"}</code> |  |
| <Link id="m-updatemeshfilter" /><code>{"void UpdateMeshFilter(MeshFilter filter)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-modified" /><code>{"private void Modified("}<Link to="/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<TR, TG, TB, TA> core)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> |  |
