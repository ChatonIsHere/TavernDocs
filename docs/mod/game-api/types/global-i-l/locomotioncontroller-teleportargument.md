---
title: "LocomotionController.TeleportArgument"
description: "Network argument for a teleport: target position, chunk, teleport mode and locomotion function."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionController.TeleportArgument

A **protected class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Network argument for a teleport: target position, chunk, teleport mode and locomotion function.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LocomotionController`](/mod/game-api/types/global-i-l/locomotioncontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportArgument()"}</code> | <span className="api-desc">Creates a `LocomotionController.TeleportArgument` from `position`, `chunk`, `mode` and `function`.</span> |
| <Link id="m-ctor-2" /><code>{"TeleportArgument(Vector3 position, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Creates a `LocomotionController.TeleportArgument` from `position`, `chunk`, `mode` and `function`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | <span className="api-desc">Chunk of the target position.</span> |
| <Link id="m-functionindex" /><code>{"private int functionIndex"}</code> | <span className="api-desc">Backing value for `Function`.</span> |
| <Link id="m-ispositionwithinchunk" /><code>{"private bool isPositionWithinChunk"}</code> | <span className="api-desc">True if the position is inside the location chunk's buffer bounds, so it can be sent compactly.</span> |
| <Link id="m-modeindex" /><code>{"private int modeIndex"}</code> | <span className="api-desc">Backing value for `Mode`.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-function" /><code><Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" Function { get; }"}</code> | <span className="api-desc">The locomotion function that caused the move.</span> |
| <Link id="m-mode" /><code><Link to="/mod/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" Mode { get; }"}</code> | <span className="api-desc">The teleport mode.</span> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">The target position.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the argument; the position is sent relative to the chunk when it falls inside it.</span> |

## Used in

Members of other types that take, return or hold a `TeleportArgument`:

<div className="api-used-in">

[`LocomotionController.syncMovement`](/mod/game-api/types/global-i-l/locomotioncontroller#m-syncmovement), [`LocomotionController.SyncMovement`](/mod/game-api/types/global-i-l/locomotioncontroller#m-syncmovement-2).

</div>
