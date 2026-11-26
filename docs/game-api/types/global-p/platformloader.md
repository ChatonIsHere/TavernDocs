---
title: "PlatformLoader"
description: "Base class for a platform specific startup step."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLoader

An **abstract class** in `Root.Township`, no namespace.

Base class for a platform specific startup step. `StartupLoader` runs every loader's `Load` together and stops if any fails.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlatformLoader()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"abstract Task<bool> Load()"}</code> | Runs the startup step. Returns false if it failed. |

## Used in

Members of other types that take, return or hold a `PlatformLoader`:

[`StartupLoader.platformLoaders`](/game-api/types/global-s/startuploader#m-platformloaders).
