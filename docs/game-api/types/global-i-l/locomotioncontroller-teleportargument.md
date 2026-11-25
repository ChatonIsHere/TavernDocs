---
title: "LocomotionController.TeleportArgument"
description: "class LocomotionController.TeleportArgument in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionController.TeleportArgument

A **protected class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`LocomotionController`](/game-api/types/global-i-l/locomotioncontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportArgument()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"TeleportArgument(Vector3 position, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-functionindex" /><code>{"private int functionIndex"}</code> |  |
| <Link id="m-ispositionwithinchunk" /><code>{"private bool isPositionWithinChunk"}</code> |  |
| <Link id="m-modeindex" /><code>{"private int modeIndex"}</code> |  |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-function" /><code><Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" Function { get; }"}</code> |  |
| <Link id="m-mode" /><code><Link to="/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" Mode { get; }"}</code> |  |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TeleportArgument`:

[`LocomotionController.syncMovement`](/game-api/types/global-i-l/locomotioncontroller#m-syncmovement), [`LocomotionController.SyncMovement`](/game-api/types/global-i-l/locomotioncontroller#m-syncmovement-2).
