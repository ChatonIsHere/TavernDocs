---
title: "CubeMapUpdater"
description: "class CubeMapUpdater in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CubeMapUpdater

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CubeMapUpdater()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cubemap" /><code>{"private static readonly int _CubeMap"}</code> |
| <Link id="m-cubemaps" /><code>{"private "}<Link to="/game-api/types/global-s/servercubemaps">{"ServerCubeMaps"}</Link>{" cubeMaps"}</code> |
| <Link id="m-material" /><code>{"private Material material"}</code> |
| <Link id="m-servercubemapid" /><code>{"private Dictionary<int, int> serverCubemapID"}</code> |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-setupserver" /><code>{"void SetupServer("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-applycubemap" /><code>{"private void ApplyCubemap(Cubemap cubemap)"}</code> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-getmapid" /><code>{"private int GetMapID(int serverIdentifier, int sceneIndex)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |

</details>
