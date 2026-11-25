---
title: "ServerCubeMaps"
description: "class ServerCubeMaps in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCubeMaps

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ServerCubeMaps.Create`](/game-api/types/global-s/servercubemaps-create)
- **Nested types** [`Create`](/game-api/types/global-s/servercubemaps-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerCubeMaps()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currenthandle" /><code>{"private AsyncOperationHandle<Cubemap> currentHandle"}</code> |
| <Link id="m-currentloaded" /><code>{"private int currentLoaded"}</code> |
| <Link id="m-scenebasedcubemaps" /><code>{"private "}<Link to="/game-api/types/global-s/scenecubemaps">{"SceneCubeMaps"}</Link>{"[] sceneBasedcubemaps"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-applycubemap" /><code>{"async void ApplyCubeMap(int sceneIndex, int mapIndex, Action<Cubemap> useMap)"}</code> |
| <Link id="m-clean" /><code>{"void Clean()"}</code> |
| <Link id="m-cubemapslength" /><code>{"int CubemapsLength(int sceneIndex)"}</code> |

## Used in

Members of other types that take, return or hold a `ServerCubeMaps`:

[`CubeMapUpdater.cubeMaps`](/game-api/types/global-c-d/cubemapupdater#m-cubemaps).
