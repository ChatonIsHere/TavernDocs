---
title: "PieceStateArgument"
description: "Network argument pairing a crafting piece hash with whether the piece is enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PieceStateArgument

A **struct** in `Root.Township`, `Alta.Crafting`.

Network argument pairing a crafting piece hash with whether the piece is enabled.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool isEnabled"}</code> | Whether the piece is enabled. |
| <Link id="m-piecehash" /><code>{"int pieceHash"}</code> | Hash of the piece. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the hash and flag on a network stream. |
