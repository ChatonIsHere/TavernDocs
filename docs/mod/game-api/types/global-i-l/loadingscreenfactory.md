---
title: "LoadingScreenFactory"
description: "Picks the loading screen prefab for the platform (Quest, Pico or default)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoadingScreenFactory

A **class** in `Root.Township`, the global namespace.

Picks the loading screen prefab for the platform (Quest, Pico or default). Bound in `ProjectLifetimeScope` and used by `AltaSceneManager`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoadingScreenFactory()"}</code> | <span className="api-desc">Creates a `LoadingScreenFactory` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultloadingscreenobject" /><code>{"private AssetReference defaultLoadingScreenObject"}</code> | <span className="api-desc">Loading screen for other platforms.</span> |
| <Link id="m-picoloadingscreenobject" /><code>{"private AssetReference picoLoadingScreenObject"}</code> | <span className="api-desc">Loading screen for Pico.</span> |
| <Link id="m-questloadingscreenobject" /><code>{"private AssetReference questLoadingScreenObject"}</code> | <span className="api-desc">Loading screen for Quest.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getloadingscreenobjecthandle" /><code>{"AsyncOperationHandle<GameObject> GetLoadingScreenObjectHandle()"}</code> | <span className="api-desc">Starts loading the loading screen addressable for the current platform and returns its handle.</span> |

## Used in

Members of other types that take, return or hold a `LoadingScreenFactory`:

<div className="api-used-in">

[`ProjectLifetimeScope.loadingScreenFactory`](/mod/game-api/types/assembly-other/projectlifetimescope#m-loadingscreenfactory).

</div>
