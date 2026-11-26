---
title: "CubeMapUpdater"
description: "Main menu visual: gives a server's preview a cubemap picked from ServerCubeMaps for its scene, so each server keeps the same look."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CubeMapUpdater

A **class** in `Root.Township`, the global namespace.

Main menu visual: gives a server's preview a cubemap picked from `ServerCubeMaps` for its scene, so each server keeps the same look. Does nothing on a headless server.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CubeMapUpdater()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cubemap" /><code>{"private static readonly int _CubeMap"}</code> | <span className="api-desc">Shader property ID for `_CubeMap`.</span> |
| <Link id="m-cubemaps" /><code>{"private "}<Link to="/mod/game-api/types/global-s/servercubemaps">{"ServerCubeMaps"}</Link>{" cubeMaps"}</code> | <span className="api-desc">The `ServerCubeMaps` asset listing cubemaps per scene.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Per-instance copy of the target renderer's material.</span> |
| <Link id="m-servercubemapid" /><code>{"private Dictionary<int, int> serverCubemapID"}</code> | <span className="api-desc">Cache of the cubemap index chosen for each server ID.</span> |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> | <span className="api-desc">Renderer whose material gets the cubemap.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupserver" /><code>{"void SetupServer("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> | <span className="api-desc">Applies the cubemap for the given server list entry, caching its chosen index per server ID.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applycubemap" /><code>{"private void ApplyCubemap(Cubemap cubemap)"}</code> | <span className="api-desc">Sets the loaded cubemap on the copied material's `_CubeMap` property.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Copies the target renderer's material so changes don't touch the shared one; on headless it just clears `cubeMaps`.</span> |
| <Link id="m-getmapid" /><code>{"private int GetMapID(int serverIdentifier, int sceneIndex)"}</code> | <span className="api-desc">Picks a cubemap index for the scene, seeded by the server ID so it's the same every time.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Clears the texture and frees the copied material and the loaded cubemaps.</span> |

</details>
