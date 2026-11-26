---
title: "WoodcutTreeAttachmentBaker"
description: "Baker access for tree attachments (leaves and similar): gives the baking code each attachment's meshes, transform and leaf materials."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeAttachmentBaker

A **class** in `Root.Township`, `Alta.Woodcutting`.

Baker access for tree attachments (leaves and similar): gives the baking code each attachment's meshes, transform and leaf materials. Use the shared `Instance`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`WoodcutTreeBakerAccess<TreeAttachment>`](/game-api/types/alta-crafting/woodcuttreebakeraccess-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeAttachmentBaker()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-crafting/woodcuttreeattachmentbaker">{"WoodcutTreeAttachmentBaker"}</Link>{" Instance { get; }"}</code> | Shared instance. |
| <Link id="m-maxlods" /><code>{"override int MaxLods { get; }"}</code> | 3. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getattachmentmaterial" /><code><Link to="/game-api/types/alta-utilities/materialrect">{"MaterialRect"}</Link>{" GetAttachmentMaterial("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item, int index)"}</code> | Returns the species' leaf atlas material rect for the index, clamped to the last one. |
| <Link id="m-getlodcount" /><code>{"override int GetLodCount("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item)"}</code> | Number of LOD meshes on the attachment. |
| <Link id="m-getmaterial" /><code>{"override Material GetMaterial("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item, int index)"}</code> | Returns the species' leaf material for the index, clamped to the last one. |
| <Link id="m-getmesh" /><code>{"override Mesh GetMesh("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item, int lod)"}</code> | Returns the attachment's mesh for a LOD. |
| <Link id="m-getname" /><code>{"override string GetName("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item)"}</code> | The attachment's object name. |
| <Link id="m-gettransform" /><code>{"override Transform GetTransform("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item)"}</code> | The attachment's transform. |
| <Link id="m-isvalid" /><code>{"override bool IsValid("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item, int lod)"}</code> | True if the attachment has any LOD meshes. |
