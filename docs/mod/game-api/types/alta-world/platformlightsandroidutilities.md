---
title: "PlatformLightsAndroidUtilities"
description: "Android helpers for PlatformLight fake lights: the fake light material and vertex coloured copies of light meshes, cached by colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLightsAndroidUtilities

A **static class** in `Root.Township`, `Alta.Lighting`.

Android helpers for `PlatformLight` fake lights: the fake light material and vertex coloured copies of light meshes, cached by colour.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basefakelightmaterial" /><code>{"static Material baseFakeLightMaterial"}</code> | <span className="api-desc">Backing field for `BaseFakeLightMaterial`.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coloredmeshes" /><code>{"private static Dictionary<int, Mesh> coloredMeshes"}</code> | <span className="api-desc">Baked meshes by mesh and colour hash.</span> |
| <Link id="m-platformlightmeshesfolder" /><code>{"private const string PlatformLightMeshesFolder"}</code> | <span className="api-desc">Editor asset path for baked meshes. Not used in this build.</span> |
| <Link id="m-platformlightmeshesfoldername" /><code>{"private const string PlatformLightMeshesFolderName"}</code> | <span className="api-desc">Folder name for baked meshes. Not used in this build.</span> |
| <Link id="m-temporaryfolder" /><code>{"private const string TemporaryFolder"}</code> | <span className="api-desc">Editor temporary asset folder. Not used in this build.</span> |
| <Link id="m-workingcolors" /><code>{"private static List<Color> workingColors"}</code> | <span className="api-desc">Reused colour list for baking.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basefakelightmaterial-2" /><code>{"static Material BaseFakeLightMaterial { get; }"}</code> | <span className="api-desc">Material using the `Hidden/FakeLight` shader, created on first use.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmesh" /><code>{"static Mesh GetMesh(Mesh newMesh, Color lightColor, float lightIntensity)"}</code> | <span className="api-desc">Returns a cached copy of the mesh coloured for the light, baking it the first time.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bakemesh" /><code>{"private static Mesh BakeMesh(Mesh newMesh, Color lightColor, float lightIntensity)"}</code> | <span className="api-desc">Copies the mesh and sets every vertex colour from the light's colour and intensity.</span> |

</details>
