---
title: "PresetTree.Step"
description: "One piece of a saved preset tree: which tree model to spawn, its rotation, its attachments and which steps hang off its connections."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetTree.Step

A **class** in `Root.Township`, `Alta.Woodcutting`.

One piece of a saved preset tree: which tree model to spawn, its rotation, its attachments and which steps hang off its connections. Steps are stored flat in `PresetTree` with index links.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`PresetTree`](/mod/game-api/types/alta-crafting/presettree)
- **Nested types** [`Attachment`](/mod/game-api/types/alta-crafting/presettree-step-attachment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Step(uint pieceHash, int rotation)"}</code> | <span className="api-desc">Creates a `PresetTree.Step` from `pieceHash` and `rotation`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attachments" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/presettree-step-attachment">{"PresetTree.Step.Attachment"}</Link>{"> attachments"}</code> | <span className="api-desc">Backing field for `Attachments`.</span> |
| <Link id="m-childconnectionhashes" /><code>{"private List<uint> childConnectionHashes"}</code> | <span className="api-desc">Backing field for `ChildConnectionHashes`.</span> |
| <Link id="m-childindices" /><code>{"private List<int> childIndices"}</code> | <span className="api-desc">Backing field for `ChildIndices`.</span> |
| <Link id="m-piecehash" /><code>{"private uint pieceHash"}</code> | <span className="api-desc">Backing field for `PieceHash`.</span> |
| <Link id="m-rotation" /><code>{"private int rotation"}</code> | <span className="api-desc">Backing field for `Rotation`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attachments-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-crafting/presettree-step-attachment">{"PresetTree.Step.Attachment"}</Link>{"> Attachments { get; }"}</code> | <span className="api-desc">Attachments (such as leaves or fruit) to spawn on this piece, with local transform.</span> |
| <Link id="m-childconnectionhashes-2" /><code>{"List<uint> ChildConnectionHashes { get; }"}</code> | <span className="api-desc">Hashes of this piece's connection points that have a child piece. Matches `ChildIndices` by position.</span> |
| <Link id="m-childindices-2" /><code>{"List<int> ChildIndices { get; }"}</code> | <span className="api-desc">Index in the preset's step list of the child piece for each entry in `ChildConnectionHashes`.</span> |
| <Link id="m-piecehash-2" /><code>{"uint PieceHash { get; }"}</code> | <span className="api-desc">Prefab hash of the woodcut tree model spawned for this step.</span> |
| <Link id="m-rotation-2" /><code>{"int Rotation { get; }"}</code> | <span className="api-desc">Rotation index passed to `WoodcutTree.Add` when this piece is attached.</span> |

## Used in

Members of other types that take, return or hold a `Step`:

<div className="api-used-in">

[`PresetTree.HandleEditorStep`](/mod/game-api/types/alta-crafting/presettree#m-handleeditorstep), [`PresetTree.HandleStep`](/mod/game-api/types/alta-crafting/presettree#m-handlestep), [`PresetTree.steps`](/mod/game-api/types/alta-crafting/presettree#m-steps).

</div>
