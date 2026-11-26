---
title: "FarAwayController.PlayerData"
description: "A player's chunk and head position as sent by FarAwayController, so clients can draw markers for players too far away to be loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FarAwayController.PlayerData

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A player's chunk and head position as sent by `FarAwayController`, so clients can draw markers for players too far away to be loaded.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`FarAwayController`](/game-api/types/global-e-h/farawaycontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerData("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> | Creates a `FarAwayController.PlayerData` with default values. |
| <Link id="m-ctor-2" /><code>{"PlayerData()"}</code> | Creates a `FarAwayController.PlayerData` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | The chunk the player's controller is in, or the global chunk when empty. |
| <Link id="m-id" /><code>{"private int id"}</code> | Backing field for `Id`. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id-2" /><code>{"int Id { get; }"}</code> | The player's user id. |
| <Link id="m-isempty" /><code>{"bool IsEmpty { get; private set; }"}</code> | True when the player has no usable position (no head, no chunk, or in the global chunk). |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | The player's head position in its chunk. |
| <Link id="m-targetplayer" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" TargetPlayer { get; private set; }"}</code> | The player this data is for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the id, chunk and position, and looks up the `Player` for the id on read. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Server: refreshes chunk and head position from the player, or marks it empty. |

## Used in

Members of other types that take, return or hold a `PlayerData`:

[`FarAwayController.workingList`](/game-api/types/global-e-h/farawaycontroller#m-workinglist), [`FarAwayController.PlayerTuple.CloseBy`](/game-api/types/global-e-h/farawaycontroller-playertuple#m-closeby), [`FarAwayController.PlayerTuple.PlayerData`](/game-api/types/global-e-h/farawaycontroller-playertuple#m-playerdata).
