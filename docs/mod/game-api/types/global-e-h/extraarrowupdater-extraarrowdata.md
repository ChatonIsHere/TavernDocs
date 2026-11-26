---
title: "ExtraArrowUpdater.ExtraArrowData"
description: "One extra arrow nocked on a bow alongside the main arrow (multi-shot), with its offset and colliders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExtraArrowUpdater.ExtraArrowData

A **class** in `Root.Township`, the global namespace.

One extra arrow nocked on a bow alongside the main arrow (multi-shot), with its offset and colliders. Synced from the server by `ExtraArrowUpdater`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`ExtraArrowUpdater`](/mod/game-api/types/global-e-h/extraarrowupdater)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExtraArrowData()"}</code> | <span className="api-desc">Creates an `ExtraArrowUpdater.ExtraArrowData` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arrow" /><code><Link to="/mod/game-api/types/global-i-l/ishootable">{"IShootable"}</Link>{" Arrow { get; set; }"}</code> | <span className="api-desc">The extra arrow.</span> |
| <Link id="m-collidergroup" /><code><Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The arrow's colliders, kept off while nocked and turned back on shortly after it is shot.</span> |
| <Link id="m-localoffset" /><code>{"Vector3 LocalOffset { get; set; }"}</code> | <span className="api-desc">The arrow's position relative to the main arrow.</span> |

## Used in

Members of other types that take, return or hold a `ExtraArrowData`:

<div className="api-used-in">

[`ExtraArrowUpdater.DisableExtraArrowCollisions`](/mod/game-api/types/global-e-h/extraarrowupdater#m-disableextraarrowcollisions), [`ExtraArrowUpdater.IgnoreCollisionsBetweenArrows`](/mod/game-api/types/global-e-h/extraarrowupdater#m-ignorecollisionsbetweenarrows), [`ExtraArrowUpdater.spawnedExtraArrows`](/mod/game-api/types/global-e-h/extraarrowupdater#m-spawnedextraarrows), [`ExtraArrowUpdater.SpawnedExtraArrows`](/mod/game-api/types/global-e-h/extraarrowupdater#m-spawnedextraarrows-2), [`ExtraArrowUpdater.syncExtraArrows`](/mod/game-api/types/global-e-h/extraarrowupdater#m-syncextraarrows), [`ExtraArrowUpdater.SyncExtraArrows`](/mod/game-api/types/global-e-h/extraarrowupdater#m-syncextraarrows-2), [`ExtraArrowUpdater.unsyncedExtraArrows`](/mod/game-api/types/global-e-h/extraarrowupdater#m-unsyncedextraarrows).

</div>
