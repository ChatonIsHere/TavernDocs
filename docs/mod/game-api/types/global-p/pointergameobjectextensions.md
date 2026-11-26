---
title: "PointerGameObjectExtensions"
description: "Extension methods for working out the bounds of a game object from its renderers and colliders, used for pointer and menu previews."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PointerGameObjectExtensions

A **static class** in `Root.Township`, the global namespace.

Extension methods for working out the bounds of a game object from its renderers and colliders, used for pointer and menu previews.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getobjectbounds" /><code>{"static Bounds GetObjectBounds(GameObject go)"}</code> | Bounds of all child renderers, skipping particle renderers and anything marked `IgnoreForBounds`. |
| <Link id="m-getobjectboundswithcolliders" /><code>{"static Bounds GetObjectBoundsWithColliders(GameObject go)"}</code> | Like `GetObjectBounds` but also includes child colliders, estimating sizes for disabled ones from their shape. |
| <Link id="m-getpointerbounds" /><code>{"static Bounds GetPointerBounds(GameObject prefab)"}</code> | Uses a `StaticBoundsOverride` if present, else renderer and collider bounds, inflated by `MenuSettings` when large enough. |
