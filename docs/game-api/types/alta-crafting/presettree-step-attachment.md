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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`PresetTree.Step`](/game-api/types/alta-crafting/presettree-step)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Attachment()"}</code> | Creates a `PresetTree.Step.Attachment` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attachmenthash" /><code>{"private uint attachmentHash"}</code> | Backing field for `AttachmentHash`. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Backing field for `Rotation`. |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Backing field for `Scale`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attachmenthash-2" /><code>{"uint AttachmentHash { get; set; }"}</code> | Prefab hash of the `TreeAttachment` to spawn. |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; set; }"}</code> | Local position on the parent tree piece. |
| <Link id="m-rotation-2" /><code>{"Quaternion Rotation { get; set; }"}</code> | Local rotation on the parent tree piece. |
| <Link id="m-scale-2" /><code>{"float Scale { get; set; }"}</code> | Uniform local scale (only the x scale is saved). |

## Used in

Members of other types that take, return or hold a `Attachment`:

[`PresetTree.Step.attachments`](/game-api/types/alta-crafting/presettree-step#m-attachments), [`PresetTree.Step.Attachments`](/game-api/types/alta-crafting/presettree-step#m-attachments-2), [`WoodcutTree.MapNode.SpawnAttachment`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-spawnattachment).
