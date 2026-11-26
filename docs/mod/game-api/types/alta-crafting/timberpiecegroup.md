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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`TimberPieceBase`](/mod/game-api/types/alta-crafting/timberpiecebase)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberPieceGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isonserver" /><code>{"private bool isOnServer"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-pieces" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberpiece">{"TimberPiece"}</Link>{"[] pieces"}</code> | <span className="api-desc">The parts that make up this group.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-meshfilter" /><code>{"override MeshFilter MeshFilter { get; }"}</code> | <span className="api-desc">Always null; the group has no mesh of its own.</span> |
| <Link id="m-progress" /><code>{"override float Progress { get; set; }"}</code> | <span className="api-desc">Average progress of the parts. Setting it sets every part to the same value.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"override void Load("}<Link to="/mod/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" data)"}</code> | <span className="api-desc">Restores each part from saved sub-data, if the group was modified.</span> |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/mod/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | <span className="api-desc">Passes the hit to every part, raises `OnChanged`, and marks the group done (recording the hitting player) once all parts are done.</span> |
| <Link id="m-rotate" /><code>{"override void Rotate(bool isInversedUp)"}</code> | <span className="api-desc">Does nothing for a group.</span> |
| <Link id="m-save" /><code>{"override "}<Link to="/mod/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" Save()"}</code> | <span className="api-desc">Saves the modified flag and, if modified, each part's data as sub-data.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | <span className="api-desc">Network sync: writes the modified flag, then each part's state if modified.</span> |
