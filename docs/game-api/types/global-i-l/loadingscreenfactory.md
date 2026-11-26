---
title: "LoadingScreenFactory"
description: "Picks the loading screen prefab for the platform (Quest, Pico or default)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoadingScreenFactory

A **class** in `Root.Township`, no namespace.

Picks the loading screen prefab for the platform (Quest, Pico or default). Bound in `ProjectLifetimeScope` and used by `AltaSceneManager`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoadingScreenFactory()"}</code> | Creates a `LoadingScreenFactory` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultloadingscreenobject" /><code>{"private AssetReference defaultLoadingScreenObject"}</code> | Loading screen for other platforms. |
| <Link id="m-picoloadingscreenobject" /><code>{"private AssetReference picoLoadingScreenObject"}</code> | Loading screen for Pico. |
| <Link id="m-questloadingscreenobject" /><code>{"private AssetReference questLoadingScreenObject"}</code> | Loading screen for Quest. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getloadingscreenobjecthandle" /><code>{"AsyncOperationHandle<GameObject> GetLoadingScreenObjectHandle()"}</code> | Starts loading the loading screen addressable for the current platform and returns its handle. |

## Used in

Members of other types that take, return or hold a `LoadingScreenFactory`:

[`ProjectLifetimeScope.loadingScreenFactory`](/game-api/types/assembly-other/projectlifetimescope#m-loadingscreenfactory).
