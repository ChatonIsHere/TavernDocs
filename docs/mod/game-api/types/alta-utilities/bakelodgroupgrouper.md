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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`, [`IBakeable`](/mod/game-api/types/global-i-l/ibakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BakeLODGroupGrouper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axisframes" /><code>{"private int axisFrames"}</code> | <span className="api-desc">Impostor setting: frames per axis (default 16).</span> |
| <Link id="m-btnbake" /><code>{"private bool btnBake"}</code> | <span className="api-desc">Inspector button that runs `Bake`.</span> |
| <Link id="m-forcebakeeverytime" /><code>{"private bool forceBakeEveryTime"}</code> | <span className="api-desc">Impostor setting: probably rebakes the impostor on every bake. Unused in this build.</span> |
| <Link id="m-impostortype" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/impostortype">{"ImpostorType"}</Link>{" impostorType"}</code> | <span className="api-desc">Impostor setting: projection type, octahedron by default.</span> |
| <Link id="m-isbakingimpostor" /><code>{"private bool isBakingImpostor"}</code> | <span className="api-desc">Whether `Bake` also bakes an impostor (on by default).</span> |
| <Link id="m-lodreplacement" /><code>{"private LODReplacement lodReplacement"}</code> | <span className="api-desc">Impostor setting: which LOD level the impostor replaces, the culled level by default.</span> |
| <Link id="m-pixelpadding" /><code>{"private int pixelPadding"}</code> | <span className="api-desc">Impostor setting: padding in pixels (default 32).</span> |
| <Link id="m-texturesize" /><code>{"private int textureSize"}</code> | <span className="api-desc">Impostor setting: texture size in pixels (default 1024).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> | <span className="api-desc">Set to true once `Bake` has run.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | <span className="api-desc">Merges child LOD groups level by level into one on this object, removes the child groups, and keeps each level's transition height below the one before.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bakeimpostor" /><code>{"private void BakeImpostor(LODGroup lodGroup, Renderer[] lod0Renderers)"}</code> | <span className="api-desc">Meant to bake an impostor from the LOD0 renderers. Empty in this build.</span> |

</details>
