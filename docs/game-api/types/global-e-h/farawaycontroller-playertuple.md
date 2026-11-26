---
title: "FarAwayController.PlayerTuple"
description: "Server: one connected player's data in FarAwayController and the other players close enough to send to them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FarAwayController.PlayerTuple

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Server: one connected player's data in `FarAwayController` and the other players close enough to send to them.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`FarAwayController`](/game-api/types/global-e-h/farawaycontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerTuple("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-closeby" /><code>{"List<"}<Link to="/game-api/types/global-e-h/farawaycontroller-playerdata">{"FarAwayController.PlayerData"}</Link>{"> CloseBy { get; }"}</code> | Other players within send range, refilled every other update and sent to this player. |
| <Link id="m-playerdata" /><code><Link to="/game-api/types/global-e-h/farawaycontroller-playerdata">{"FarAwayController.PlayerData"}</Link>{" "}<Link to="/game-api/types/global-e-h/farawaycontroller-playerdata">{"PlayerData"}</Link>{" { get; }"}</code> | This player's position data. |

## Used in

Members of other types that take, return or hold a `PlayerTuple`:

[`FarAwayController.preparedData`](/game-api/types/global-e-h/farawaycontroller#m-prepareddata).
