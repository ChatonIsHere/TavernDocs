---
title: "LocomotionController.TeleportArgument"
description: "Network argument for a teleport: target position, chunk, teleport mode and locomotion function."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionController.TeleportArgument

A **protected class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Network argument for a teleport: target position, chunk, teleport mode and locomotion function.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`LocomotionController`](/game-api/types/global-i-l/locomotioncontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TeleportArgument()"}</code> |
| <Link id="m-ctor-2" /><code>{"TeleportArgument(Vector3 position, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | Chunk of the target position. |
| <Link id="m-functionindex" /><code>{"private int functionIndex"}</code> | Backing value for `Function`. |
| <Link id="m-ispositionwithinchunk" /><code>{"private bool isPositionWithinChunk"}</code> | True if the position is inside the location chunk's buffer bounds, so it can be sent compactly. |
| <Link id="m-modeindex" /><code>{"private int modeIndex"}</code> | Backing value for `Mode`. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-function" /><code><Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" Function { get; }"}</code> | The locomotion function that caused the move. |
| <Link id="m-mode" /><code><Link to="/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" Mode { get; }"}</code> | The teleport mode. |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | The target position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the argument; the position is sent relative to the chunk when it falls inside it. |

## Used in

Members of other types that take, return or hold a `TeleportArgument`:

[`LocomotionController.syncMovement`](/game-api/types/global-i-l/locomotioncontroller#m-syncmovement), [`LocomotionController.SyncMovement`](/game-api/types/global-i-l/locomotioncontroller#m-syncmovement-2).
