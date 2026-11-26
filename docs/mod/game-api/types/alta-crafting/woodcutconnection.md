---
title: "WoodcutConnection"
description: "Marks a joint between two pieces of a choppable tree model: which connection type it is and which woodcut points break it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutConnection

A **class** in `Root.Township`, `Alta.Woodcutting`.

Marks a joint between two pieces of a choppable tree model: which connection type it is and which woodcut points break it. Sits on a networked tree piece.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutConnection()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-model" /><code><Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model"}</code> | <span className="api-desc">Serialized backing field for `Model`. Public, but use `Model`.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakthresholdmultiplier" /><code>{"private float breakThresholdMultiplier"}</code> | <span className="api-desc">Backing field for `BreakThresholdMultiplier`.</span> |
| <Link id="m-connectiontype" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcutconnectiontype">{"WoodcutConnectionType"}</Link>{" connectionType"}</code> | <span className="api-desc">Backing field for `ConnectionType`; its bone count sets how many break points the connection has.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Cached `NetworkEntity` on the same GameObject, filled the first time `Entity` is read.</span> |
| <Link id="m-pointindex" /><code>{"private int pointIndex"}</code> | <span className="api-desc">Index of the first woodcut point in the model that belongs to this connection; `BreakPoints` starts here.</span> |
| <Link id="m-rotations" /><code>{"private int rotations"}</code> | <span className="api-desc">Backing field for `Rotations`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-breakpoints" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> BreakPoints { get; }"}</code> | <span className="api-desc">The woodcut points of the model that belong to this connection, as many as the connection type has bones.</span> |
| <Link id="m-breakthresholdmultiplier-2" /><code>{"float BreakThresholdMultiplier { get; }"}</code> | <span className="api-desc">Scales how much cutting it takes to break this connection.</span> |
| <Link id="m-connectiontype-2" /><code><Link to="/mod/game-api/types/alta-crafting/woodcutconnectiontype">{"WoodcutConnectionType"}</Link>{" ConnectionType { get; }"}</code> | <span className="api-desc">The connection type, which sets how many bones (break points) it has.</span> |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The network entity on the same object.</span> |
| <Link id="m-model-2" /><code><Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" Model { get; }"}</code> | <span className="api-desc">The tree model this connection belongs to.</span> |
| <Link id="m-rotations-2" /><code>{"int Rotations { get; }"}</code> | <span className="api-desc">Rotation count for the connection, set in the prefab.</span> |

## Used in

Members of other types that take, return or hold a `WoodcutConnection`:

<div className="api-used-in">

[`PresetTree.HandleEditorStep`](/mod/game-api/types/alta-crafting/presettree#m-handleeditorstep), [`PresetTree.HandleStep`](/mod/game-api/types/alta-crafting/presettree#m-handlestep), [`TreeBuilder.selected`](/mod/game-api/types/alta-crafting/treebuilder#m-selected), [`TreeBuilder.Selected`](/mod/game-api/types/alta-crafting/treebuilder#m-selected-2), [`WoodcutTree.Add`](/mod/game-api/types/alta-crafting/woodcuttree#m-add), [`WoodcutTree.Sync`](/mod/game-api/types/alta-crafting/woodcuttree#m-sync-3), [`WoodcutTree.MapNode.Children`](/mod/game-api/types/alta-crafting/woodcuttree-mapnode#m-children), [`WoodcutTree.MapNode.Parent`](/mod/game-api/types/alta-crafting/woodcuttree-mapnode#m-parent), [`WoodcutTreeModel.connections`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-connections), [`WoodcutTreeModel.Connections`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-connections-2).

</div>
