---
title: "SteelSong.MessageType"
description: "Who a Steel Song skill message is for: the local player (status), other players (effects), or the server (hit count report)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteelSong.MessageType

An **private enum** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Who a Steel Song skill message is for: the local player (status), other players (effects), or the server (hit count report).

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SteelSong`](/game-api/types/global-s/steelsong)

## Values

| Member |
| --- |
| <Link id="m-tolocalplayer" /><code>{"ToLocalPlayer = 0"}</code> |
| <Link id="m-tootherplayers" /><code>{"ToOtherPlayers = 1"}</code> |
| <Link id="m-toserver" /><code>{"ToServer = 2"}</code> |

## Used in

Members of other types that take, return or hold a `MessageType`:

[`SteelSong.messageType`](/game-api/types/global-s/steelsong#m-messagetype), [`SteelSong.SetupForEntity`](/game-api/types/global-s/steelsong#m-setupforentity).
