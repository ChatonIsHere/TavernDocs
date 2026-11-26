---
title: "ServerCubeMaps"
description: "Asset listing cubemaps per scene for the main menu server preview."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCubeMaps

A **class** in `Root.Township`, the global namespace.

Asset listing cubemaps per scene for the main menu server preview. `CubeMapUpdater` loads one per server through Addressables; skipped on headless builds.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ServerCubeMaps.Create`](/mod/game-api/types/global-s/servercubemaps-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/servercubemaps-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerCubeMaps()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenthandle" /><code>{"private AsyncOperationHandle<Cubemap> currentHandle"}</code> | <span className="api-desc">Handle for the most recently requested cubemap load.</span> |
| <Link id="m-currentloaded" /><code>{"private int currentLoaded"}</code> | <span className="api-desc">Index of the most recently requested cubemap. Older loads that finish late are released.</span> |
| <Link id="m-scenebasedcubemaps" /><code>{"private "}<Link to="/mod/game-api/types/global-s/scenecubemaps">{"SceneCubeMaps"}</Link>{"[] sceneBasedcubemaps"}</code> | <span className="api-desc">Cubemap lists, one per scene index.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applycubemap" /><code>{"async void ApplyCubeMap(int sceneIndex, int mapIndex, Action<Cubemap> useMap)"}</code> | <span className="api-desc">Loads a scene's cubemap by index and passes it to the callback, releasing the previous one. Out of range scene uses scene 0.</span> |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | <span className="api-desc">Releases every loaded cubemap asset.</span> |
| <Link id="m-cubemapslength" /><code>{"int CubemapsLength(int sceneIndex)"}</code> | <span className="api-desc">Number of cubemaps for a scene (scene 0 if out of range).</span> |

## Used in

Members of other types that take, return or hold a `ServerCubeMaps`:

<div className="api-used-in">

[`CubeMapUpdater.cubeMaps`](/mod/game-api/types/global-c-d/cubemapupdater#m-cubemaps).

</div>
