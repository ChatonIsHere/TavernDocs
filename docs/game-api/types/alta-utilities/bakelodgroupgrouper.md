---
title: "BakeLODGroupGrouper"
description: "Bake-time component that merges the LODGroups of its children into one LODGroup on this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BakeLODGroupGrouper

A **class** in `Root.Township`, `Alta.Utilities`.

Bake-time component that merges the `LODGroup`s of its children into one `LODGroup` on this object. The impostor baking step is empty in this build.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`, [`IBakeable`](/game-api/types/global-i-l/ibakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BakeLODGroupGrouper()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axisframes" /><code>{"private int axisFrames"}</code> | Impostor setting: frames per axis (default 16). |
| <Link id="m-btnbake" /><code>{"private bool btnBake"}</code> | Inspector button that runs `Bake`. |
| <Link id="m-forcebakeeverytime" /><code>{"private bool forceBakeEveryTime"}</code> | Impostor setting: probably rebakes the impostor on every bake. Unused in this build. |
| <Link id="m-impostortype" /><code>{"private "}<Link to="/game-api/types/global-i-l/impostortype">{"ImpostorType"}</Link>{" impostorType"}</code> | Impostor setting: projection type, octahedron by default. |
| <Link id="m-isbakingimpostor" /><code>{"private bool isBakingImpostor"}</code> | Whether `Bake` also bakes an impostor (on by default). |
| <Link id="m-lodreplacement" /><code>{"private LODReplacement lodReplacement"}</code> | Impostor setting: which LOD level the impostor replaces, the culled level by default. |
| <Link id="m-pixelpadding" /><code>{"private int pixelPadding"}</code> | Impostor setting: padding in pixels (default 32). |
| <Link id="m-texturesize" /><code>{"private int textureSize"}</code> | Impostor setting: texture size in pixels (default 1024). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> | Set to true once `Bake` has run. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | Merges child LOD groups level by level into one on this object, removes the child groups, and keeps each level's transition height below the one before. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bakeimpostor" /><code>{"private void BakeImpostor(LODGroup lodGroup, Renderer[] lod0Renderers)"}</code> | Meant to bake an impostor from the LOD0 renderers. Empty in this build. |

</details>
