---
title: "WoodcutTree.MapNode"
description: "One segment in a WoodcutTree's layout: its model, the connection it hangs from, its children and attachments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTree.MapNode

A **class** in `Root.Township`, `Alta.Woodcutting`.

One segment in a `WoodcutTree`'s layout: its model, the connection it hangs from, its children and attachments. Mass and size changes add up into the parent nodes.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`WoodcutTree`](/mod/game-api/types/alta-crafting/woodcuttree)
- **Derived types** [`WoodcutTreeNodeBaker`](/mod/game-api/types/alta-crafting/woodcuttreenodebaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapNode()"}</code> | <span className="api-desc">Creates a `WoodcutTree.MapNode` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mass" /><code>{"private float mass"}</code> | <span className="api-desc">Backing field for `Mass`. Changes are added to the parent node's mass too.</span> |
| <Link id="m-totalsize" /><code>{"private int totalSize"}</code> | <span className="api-desc">Backing field for `TotalSize`. Changes are added to the parent node's total size too.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attachments" /><code>{"List<"}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{"> Attachments { get; }"}</code> | <span className="api-desc">Attachments on this segment.</span> |
| <Link id="m-children" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{", "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> Children { get; }"}</code> | <span className="api-desc">Child nodes by the connection they hang from.</span> |
| <Link id="m-hasfirstrenderer" /><code>{"bool HasFirstRenderer { get; private set; }"}</code> | <span className="api-desc">False if the first LOD renderer was skipped because the model's colour is off.</span> |
| <Link id="m-mass-2" /><code>{"float Mass { get; set; }"}</code> | <span className="api-desc">Mass of this segment and everything above it. Changes propagate to the parent.</span> |
| <Link id="m-model" /><code><Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" Model { get; set; }"}</code> | <span className="api-desc">The segment's model.</span> |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" Parent { get; set; }"}</code> | <span className="api-desc">Connection this segment hangs from. Null for the root.</span> |
| <Link id="m-renderers" /><code>{"MeshRenderer[] Renderers { get; private set; }"}</code> | <span className="api-desc">LOD renderers made by `GenerateRenderers`.</span> |
| <Link id="m-rotation" /><code>{"int Rotation { get; set; }"}</code> | <span className="api-desc">Rotation step on the parent connection.</span> |
| <Link id="m-totalsize-2" /><code>{"int TotalSize { get; set; }"}</code> | <span className="api-desc">Segment count of this node and everything above it. Changes propagate to the parent.</span> |
| <Link id="m-tree" /><code><Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" Tree { get; set; }"}</code> | <span className="api-desc">The tree this node belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addattachment" /><code>{"void AddAttachment("}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" attachment)"}</code> | <span className="api-desc">Attaches a `TreeAttachment` (such as a branch item) to this segment and saves it as a child.</span> |
| <Link id="m-generaterenderers" /><code>{"void GenerateRenderers()"}</code> | <span className="api-desc">Creates hidden LOD mesh renderers for the segment, once.</span> |
| <Link id="m-removeattachment" /><code>{"void RemoveAttachment("}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" attachment)"}</code> | <span className="api-desc">Detaches an attachment from this segment.</span> |
| <Link id="m-spawnattachment" /><code>{"void SpawnAttachment("}<Link to="/mod/game-api/types/alta-crafting/presettree-step-attachment">{"PresetTree.Step.Attachment"}</Link>{" stepAttachment)"}</code> | <span className="api-desc">Spawns a preset attachment and attaches it at its saved position, rotation and scale.</span> |

## Used in

Members of other types that take, return or hold a `MapNode`:

<div className="api-used-in">

[`TreeAttachment.AttachedTo`](/mod/game-api/types/alta-crafting/treeattachment#m-attachedto), [`WoodcutTree.Add`](/mod/game-api/types/alta-crafting/woodcuttree#m-add), [`WoodcutTree.BreakAttachments`](/mod/game-api/types/alta-crafting/woodcuttree#m-breakattachments), [`WoodcutTree.MoveTo`](/mod/game-api/types/alta-crafting/woodcuttree#m-moveto), [`WoodcutTree.Root`](/mod/game-api/types/alta-crafting/woodcuttree#m-root), [`WoodcutTree.Sync`](/mod/game-api/types/alta-crafting/woodcuttree#m-sync-3), [`WoodcutTree.SyncAttachment`](/mod/game-api/types/alta-crafting/woodcuttree#m-syncattachment), [`WoodcutTreeBaker.damaged`](/mod/game-api/types/alta-crafting/woodcuttreebaker#m-damaged), [`WoodcutTreeBaker.Initialize`](/mod/game-api/types/alta-crafting/woodcuttreebaker#m-initialize-2), [`WoodcutTreeBaker.nodes`](/mod/game-api/types/alta-crafting/woodcuttreebaker#m-nodes), [`WoodcutTreeBakingHandler.Bake`](/mod/game-api/types/alta-crafting/woodcuttreebakinghandler#m-bake), [`WoodcutTreeDamagedNodeBaker.GetLodCount`](/mod/game-api/types/alta-crafting/woodcuttreedamagednodebaker#m-getlodcount), [`WoodcutTreeDamagedNodeBaker.GetMaterial`](/mod/game-api/types/alta-crafting/woodcuttreedamagednodebaker#m-getmaterial), [`WoodcutTreeDamagedNodeBaker.IsValid`](/mod/game-api/types/alta-crafting/woodcuttreedamagednodebaker#m-isvalid), [`WoodcutTreeModel.MapNode`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-mapnode), [`WoodcutTreeNodeBaker.GetLodCount`](/mod/game-api/types/alta-crafting/woodcuttreenodebaker#m-getlodcount), [`WoodcutTreeNodeBaker.GetMaterial`](/mod/game-api/types/alta-crafting/woodcuttreenodebaker#m-getmaterial), [`WoodcutTreeNodeBaker.GetMesh`](/mod/game-api/types/alta-crafting/woodcuttreenodebaker#m-getmesh), [`WoodcutTreeNodeBaker.GetName`](/mod/game-api/types/alta-crafting/woodcuttreenodebaker#m-getname), [`WoodcutTreeNodeBaker.GetTransform`](/mod/game-api/types/alta-crafting/woodcuttreenodebaker#m-gettransform), [`WoodcutTreeNodeBaker.IsValid`](/mod/game-api/types/alta-crafting/woodcuttreenodebaker#m-isvalid), [`WoodcutTreeNodeBakerLod0Only.GetLodCount`](/mod/game-api/types/alta-crafting/woodcuttreenodebakerlod0only#m-getlodcount).

</div>
