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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`PresetTree`](/game-api/types/alta-crafting/presettree)
- **Nested types** [`Attachment`](/game-api/types/alta-crafting/presettree-step-attachment)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Step(uint pieceHash, int rotation)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attachments" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/presettree-step-attachment">{"PresetTree.Step.Attachment"}</Link>{"> attachments"}</code> | Backing field for `Attachments`. |
| <Link id="m-childconnectionhashes" /><code>{"private List<uint> childConnectionHashes"}</code> | Backing field for `ChildConnectionHashes`. |
| <Link id="m-childindices" /><code>{"private List<int> childIndices"}</code> | Backing field for `ChildIndices`. |
| <Link id="m-piecehash" /><code>{"private uint pieceHash"}</code> | Backing field for `PieceHash`. |
| <Link id="m-rotation" /><code>{"private int rotation"}</code> | Backing field for `Rotation`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attachments-2" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/presettree-step-attachment">{"PresetTree.Step.Attachment"}</Link>{"> Attachments { get; }"}</code> | Attachments (such as leaves or fruit) to spawn on this piece, with local transform. |
| <Link id="m-childconnectionhashes-2" /><code>{"List<uint> ChildConnectionHashes { get; }"}</code> | Hashes of this piece's connection points that have a child piece. Matches `ChildIndices` by position. |
| <Link id="m-childindices-2" /><code>{"List<int> ChildIndices { get; }"}</code> | Index in the preset's step list of the child piece for each entry in `ChildConnectionHashes`. |
| <Link id="m-piecehash-2" /><code>{"uint PieceHash { get; }"}</code> | Prefab hash of the woodcut tree model spawned for this step. |
| <Link id="m-rotation-2" /><code>{"int Rotation { get; }"}</code> | Rotation index passed to `WoodcutTree.Add` when this piece is attached. |

## Used in

Members of other types that take, return or hold a `Step`:

[`PresetTree.HandleEditorStep`](/game-api/types/alta-crafting/presettree#m-handleeditorstep), [`PresetTree.HandleStep`](/game-api/types/alta-crafting/presettree#m-handlestep), [`PresetTree.steps`](/game-api/types/alta-crafting/presettree#m-steps).
