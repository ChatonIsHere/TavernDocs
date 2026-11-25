---
title: "WoodcutTree.MapNode"
description: "class WoodcutTree.MapNode in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTree.MapNode

A **class** in `Root.Township`, `Alta.Woodcutting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`WoodcutTree`](/game-api/types/alta-crafting/woodcuttree)
- **Derived types** [`WoodcutTreeNodeBaker`](/game-api/types/alta-crafting/woodcuttreenodebaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapNode()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-mass" /><code>{"private float mass"}</code> |  |
| <Link id="m-totalsize" /><code>{"private int totalSize"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attachments" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{"> Attachments { get; }"}</code> |  |
| <Link id="m-children" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{", "}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> Children { get; }"}</code> |  |
| <Link id="m-hasfirstrenderer" /><code>{"bool HasFirstRenderer { get; private set; }"}</code> |  |
| <Link id="m-mass-2" /><code>{"float Mass { get; set; }"}</code> |  |
| <Link id="m-model" /><code><Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" Model { get; set; }"}</code> |  |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" Parent { get; set; }"}</code> |  |
| <Link id="m-renderers" /><code>{"MeshRenderer[] Renderers { get; private set; }"}</code> |  |
| <Link id="m-rotation" /><code>{"int Rotation { get; set; }"}</code> |  |
| <Link id="m-totalsize-2" /><code>{"int TotalSize { get; set; }"}</code> |  |
| <Link id="m-tree" /><code><Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" Tree { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addattachment" /><code>{"void AddAttachment("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" attachment)"}</code> |  |
| <Link id="m-generaterenderers" /><code>{"void GenerateRenderers()"}</code> |  |
| <Link id="m-removeattachment" /><code>{"void RemoveAttachment("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" attachment)"}</code> |  |
| <Link id="m-spawnattachment" /><code>{"void SpawnAttachment("}<Link to="/game-api/types/alta-crafting/presettree-step-attachment">{"PresetTree.Step.Attachment"}</Link>{" stepAttachment)"}</code> |  |

## Used in

Members of other types that take, return or hold a `MapNode`:

[`TreeAttachment.AttachedTo`](/game-api/types/alta-crafting/treeattachment#m-attachedto), [`WoodcutTree.Add`](/game-api/types/alta-crafting/woodcuttree#m-add), [`WoodcutTree.BreakAttachments`](/game-api/types/alta-crafting/woodcuttree#m-breakattachments), [`WoodcutTree.MoveTo`](/game-api/types/alta-crafting/woodcuttree#m-moveto), [`WoodcutTree.Root`](/game-api/types/alta-crafting/woodcuttree#m-root), [`WoodcutTree.Sync`](/game-api/types/alta-crafting/woodcuttree#m-sync-3), [`WoodcutTree.SyncAttachment`](/game-api/types/alta-crafting/woodcuttree#m-syncattachment), [`WoodcutTreeBaker.damaged`](/game-api/types/alta-crafting/woodcuttreebaker#m-damaged), [`WoodcutTreeBaker.Initialize`](/game-api/types/alta-crafting/woodcuttreebaker#m-initialize-2), [`WoodcutTreeBaker.nodes`](/game-api/types/alta-crafting/woodcuttreebaker#m-nodes), [`WoodcutTreeBakingHandler.Bake`](/game-api/types/alta-crafting/woodcuttreebakinghandler#m-bake), [`WoodcutTreeDamagedNodeBaker.GetLodCount`](/game-api/types/alta-crafting/woodcuttreedamagednodebaker#m-getlodcount), [`WoodcutTreeDamagedNodeBaker.GetMaterial`](/game-api/types/alta-crafting/woodcuttreedamagednodebaker#m-getmaterial), [`WoodcutTreeDamagedNodeBaker.IsValid`](/game-api/types/alta-crafting/woodcuttreedamagednodebaker#m-isvalid), [`WoodcutTreeModel.MapNode`](/game-api/types/alta-crafting/woodcuttreemodel#m-mapnode), [`WoodcutTreeNodeBaker.GetLodCount`](/game-api/types/alta-crafting/woodcuttreenodebaker#m-getlodcount), [`WoodcutTreeNodeBaker.GetMaterial`](/game-api/types/alta-crafting/woodcuttreenodebaker#m-getmaterial), [`WoodcutTreeNodeBaker.GetMesh`](/game-api/types/alta-crafting/woodcuttreenodebaker#m-getmesh), [`WoodcutTreeNodeBaker.GetName`](/game-api/types/alta-crafting/woodcuttreenodebaker#m-getname), [`WoodcutTreeNodeBaker.GetTransform`](/game-api/types/alta-crafting/woodcuttreenodebaker#m-gettransform), [`WoodcutTreeNodeBaker.IsValid`](/game-api/types/alta-crafting/woodcuttreenodebaker#m-isvalid), [`WoodcutTreeNodeBakerLod0Only.GetLodCount`](/game-api/types/alta-crafting/woodcuttreenodebakerlod0only#m-getlodcount).
