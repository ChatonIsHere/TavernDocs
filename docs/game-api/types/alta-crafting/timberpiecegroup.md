---
title: "TimberPieceGroup"
description: "A timber piece made of several TimberPiece parts that are chiselled together as one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberPieceGroup

A **class** in `Root.Township`, `Alta.Carpentry`.

A timber piece made of several `TimberPiece` parts that are chiselled together as one. Damage goes to every part, and it counts as done when all parts are done.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`TimberPieceBase`](/game-api/types/alta-crafting/timberpiecebase)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimberPieceGroup()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isonserver" /><code>{"private bool isOnServer"}</code> | Unused. |
| <Link id="m-pieces" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberpiece">{"TimberPiece"}</Link>{"[] pieces"}</code> | The parts that make up this group. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-meshfilter" /><code>{"override MeshFilter MeshFilter { get; }"}</code> | Always null; the group has no mesh of its own. |
| <Link id="m-progress" /><code>{"override float Progress { get; set; }"}</code> | Average progress of the parts. Setting it sets every part to the same value. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"override void Load("}<Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" data)"}</code> | Restores each part from saved sub-data, if the group was modified. |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | Passes the hit to every part, raises `OnChanged`, and marks the group done (recording the hitting player) once all parts are done. |
| <Link id="m-rotate" /><code>{"override void Rotate(bool isInversedUp)"}</code> | Does nothing for a group. |
| <Link id="m-save" /><code>{"override "}<Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" Save()"}</code> | Saves the modified flag and, if modified, each part's data as sub-data. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | Network sync: writes the modified flag, then each part's state if modified. |
