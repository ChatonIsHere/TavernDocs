---
title: "ExtraArrowUpdater.ExtraArrowData"
description: "One extra arrow nocked on a bow alongside the main arrow (multi-shot), with its offset and colliders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExtraArrowUpdater.ExtraArrowData

A **class** in `Root.Township`, no namespace.

One extra arrow nocked on a bow alongside the main arrow (multi-shot), with its offset and colliders. Synced from the server by `ExtraArrowUpdater`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`ExtraArrowUpdater`](/game-api/types/global-e-h/extraarrowupdater)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ExtraArrowData()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arrow" /><code><Link to="/game-api/types/global-i-l/ishootable">{"IShootable"}</Link>{" Arrow { get; set; }"}</code> | The extra arrow. |
| <Link id="m-collidergroup" /><code><Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" { get; set; }"}</code> | The arrow's colliders, kept off while nocked and turned back on shortly after it is shot. |
| <Link id="m-localoffset" /><code>{"Vector3 LocalOffset { get; set; }"}</code> | The arrow's position relative to the main arrow. |

## Used in

Members of other types that take, return or hold a `ExtraArrowData`:

[`ExtraArrowUpdater.DisableExtraArrowCollisions`](/game-api/types/global-e-h/extraarrowupdater#m-disableextraarrowcollisions), [`ExtraArrowUpdater.IgnoreCollisionsBetweenArrows`](/game-api/types/global-e-h/extraarrowupdater#m-ignorecollisionsbetweenarrows), [`ExtraArrowUpdater.spawnedExtraArrows`](/game-api/types/global-e-h/extraarrowupdater#m-spawnedextraarrows), [`ExtraArrowUpdater.SpawnedExtraArrows`](/game-api/types/global-e-h/extraarrowupdater#m-spawnedextraarrows-2), [`ExtraArrowUpdater.syncExtraArrows`](/game-api/types/global-e-h/extraarrowupdater#m-syncextraarrows), [`ExtraArrowUpdater.SyncExtraArrows`](/game-api/types/global-e-h/extraarrowupdater#m-syncextraarrows-2), [`ExtraArrowUpdater.unsyncedExtraArrows`](/game-api/types/global-e-h/extraarrowupdater#m-unsyncedextraarrows).
