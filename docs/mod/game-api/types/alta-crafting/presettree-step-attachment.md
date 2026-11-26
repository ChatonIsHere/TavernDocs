---
title: "PresetTree.Step.Attachment"
description: "A tree attachment saved in a preset step: its prefab hash and its local position, rotation and uniform scale on the piece."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetTree.Step.Attachment

A **class** in `Root.Township`, `Alta.Woodcutting`.

A tree attachment saved in a preset step: its prefab hash and its local position, rotation and uniform scale on the piece.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`PresetTree.Step`](/mod/game-api/types/alta-crafting/presettree-step)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Attachment()"}</code> | <span className="api-desc">Creates a `PresetTree.Step.Attachment` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attachmenthash" /><code>{"private uint attachmentHash"}</code> | <span className="api-desc">Backing field for `AttachmentHash`.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Backing field for `Rotation`.</span> |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Backing field for `Scale`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attachmenthash-2" /><code>{"uint AttachmentHash { get; set; }"}</code> | <span className="api-desc">Prefab hash of the `TreeAttachment` to spawn.</span> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; set; }"}</code> | <span className="api-desc">Local position on the parent tree piece.</span> |
| <Link id="m-rotation-2" /><code>{"Quaternion Rotation { get; set; }"}</code> | <span className="api-desc">Local rotation on the parent tree piece.</span> |
| <Link id="m-scale-2" /><code>{"float Scale { get; set; }"}</code> | <span className="api-desc">Uniform local scale (only the x scale is saved).</span> |

## Used in

Members of other types that take, return or hold a `Attachment`:

<div className="api-used-in">

[`PresetTree.Step.attachments`](/mod/game-api/types/alta-crafting/presettree-step#m-attachments), [`PresetTree.Step.Attachments`](/mod/game-api/types/alta-crafting/presettree-step#m-attachments-2), [`WoodcutTree.MapNode.SpawnAttachment`](/mod/game-api/types/alta-crafting/woodcuttree-mapnode#m-spawnattachment).

</div>
