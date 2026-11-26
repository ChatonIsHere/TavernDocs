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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`WoodcutTreeBakerAccess<TreeAttachment>`](/mod/game-api/types/alta-crafting/woodcuttreebakeraccess-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeAttachmentBaker()"}</code> | <span className="api-desc">Creates a `WoodcutTreeAttachmentBaker` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/woodcuttreeattachmentbaker">{"WoodcutTreeAttachmentBaker"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">Shared instance.</span> |
| <Link id="m-maxlods" /><code>{"override int MaxLods { get; }"}</code> | <span className="api-desc">3.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getattachmentmaterial" /><code><Link to="/mod/game-api/types/alta-utilities/materialrect">{"MaterialRect"}</Link>{" GetAttachmentMaterial("}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item, int index)"}</code> | <span className="api-desc">Returns the species' leaf atlas material rect for the index, clamped to the last one.</span> |
| <Link id="m-getlodcount" /><code>{"override int GetLodCount("}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item)"}</code> | <span className="api-desc">Number of LOD meshes on the attachment.</span> |
| <Link id="m-getmaterial" /><code>{"override Material GetMaterial("}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item, int index)"}</code> | <span className="api-desc">Returns the species' leaf material for the index, clamped to the last one.</span> |
| <Link id="m-getmesh" /><code>{"override Mesh GetMesh("}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item, int lod)"}</code> | <span className="api-desc">Returns the attachment's mesh for a LOD.</span> |
| <Link id="m-getname" /><code>{"override string GetName("}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item)"}</code> | <span className="api-desc">The attachment's object name.</span> |
| <Link id="m-gettransform" /><code>{"override Transform GetTransform("}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item)"}</code> | <span className="api-desc">The attachment's transform.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid("}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" item, int lod)"}</code> | <span className="api-desc">True if the attachment has any LOD meshes.</span> |
