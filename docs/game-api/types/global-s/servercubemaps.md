---
title: "ServerCubeMaps"
description: "Asset listing cubemaps per scene for the main menu server preview."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCubeMaps

A **class** in `Root.Township`, no namespace.

Asset listing cubemaps per scene for the main menu server preview. `CubeMapUpdater` loads one per server through Addressables; skipped on headless builds.

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

| Member | What it is |
| --- | --- |
| <Link id="m-currenthandle" /><code>{"private AsyncOperationHandle<Cubemap> currentHandle"}</code> | Handle for the most recently requested cubemap load. |
| <Link id="m-currentloaded" /><code>{"private int currentLoaded"}</code> | Index of the most recently requested cubemap. Older loads that finish late are released. |
| <Link id="m-scenebasedcubemaps" /><code>{"private "}<Link to="/game-api/types/global-s/scenecubemaps">{"SceneCubeMaps"}</Link>{"[] sceneBasedcubemaps"}</code> | Cubemap lists, one per scene index. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applycubemap" /><code>{"async void ApplyCubeMap(int sceneIndex, int mapIndex, Action<Cubemap> useMap)"}</code> | Loads a scene's cubemap by index and passes it to the callback, releasing the previous one. Out of range scene uses scene 0. |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | Releases every loaded cubemap asset. |
| <Link id="m-cubemapslength" /><code>{"int CubemapsLength(int sceneIndex)"}</code> | Number of cubemaps for a scene (scene 0 if out of range). |

## Used in

Members of other types that take, return or hold a `ServerCubeMaps`:

[`CubeMapUpdater.cubeMaps`](/game-api/types/global-c-d/cubemapupdater#m-cubemaps).
