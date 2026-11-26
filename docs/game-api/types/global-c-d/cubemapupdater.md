---
title: "CubeMapUpdater"
description: "Main menu visual: gives a server's preview a cubemap picked from ServerCubeMaps for its scene, so each server keeps the same look."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CubeMapUpdater

A **class** in `Root.Township`, no namespace.

Main menu visual: gives a server's preview a cubemap picked from `ServerCubeMaps` for its scene, so each server keeps the same look. Does nothing on a headless server.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CubeMapUpdater()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cubemap" /><code>{"private static readonly int _CubeMap"}</code> | Shader property ID for `_CubeMap`. |
| <Link id="m-cubemaps" /><code>{"private "}<Link to="/game-api/types/global-s/servercubemaps">{"ServerCubeMaps"}</Link>{" cubeMaps"}</code> | The `ServerCubeMaps` asset listing cubemaps per scene. |
| <Link id="m-material" /><code>{"private Material material"}</code> | Per-instance copy of the target renderer's material. |
| <Link id="m-servercubemapid" /><code>{"private Dictionary<int, int> serverCubemapID"}</code> | Cache of the cubemap index chosen for each server ID. |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> | Renderer whose material gets the cubemap. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupserver" /><code>{"void SetupServer("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> | Applies the cubemap for the given server list entry, caching its chosen index per server ID. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applycubemap" /><code>{"private void ApplyCubemap(Cubemap cubemap)"}</code> | Sets the loaded cubemap on the copied material's `_CubeMap` property. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Copies the target renderer's material so changes don't touch the shared one; on headless it just clears `cubeMaps`. |
| <Link id="m-getmapid" /><code>{"private int GetMapID(int serverIdentifier, int sceneIndex)"}</code> | Picks a cubemap index for the scene, seeded by the server ID so it's the same every time. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Clears the texture and frees the copied material and the loaded cubemaps. |

</details>
