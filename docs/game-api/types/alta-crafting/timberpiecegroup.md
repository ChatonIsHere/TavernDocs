---
title: "TimberPieceGroup"
description: "class TimberPieceGroup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberPieceGroup

A **class** in `Root.Township`, `Alta.Carpentry`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`TimberPieceBase`](/game-api/types/alta-crafting/timberpiecebase)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberPieceGroup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isonserver" /><code>{"private bool isOnServer"}</code> |  |
| <Link id="m-pieces" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberpiece">{"TimberPiece"}</Link>{"[] pieces"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-meshfilter" /><code>{"override MeshFilter MeshFilter { get; }"}</code> |  |
| <Link id="m-progress" /><code>{"override float Progress { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"override void Load("}<Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" data)"}</code> |  |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> |  |
| <Link id="m-rotate" /><code>{"override void Rotate(bool isInversedUp)"}</code> |  |
| <Link id="m-save" /><code>{"override "}<Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" Save()"}</code> |  |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> |  |
