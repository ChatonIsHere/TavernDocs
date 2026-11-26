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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WoodcutConnection()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-model" /><code><Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model"}</code> | Serialized backing field for `Model`. Public, but use `Model`. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakthresholdmultiplier" /><code>{"private float breakThresholdMultiplier"}</code> | Backing field for `BreakThresholdMultiplier`. |
| <Link id="m-connectiontype" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcutconnectiontype">{"WoodcutConnectionType"}</Link>{" connectionType"}</code> | Backing field for `ConnectionType`; its bone count sets how many break points the connection has. |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | Cached `NetworkEntity` on the same GameObject, filled the first time `Entity` is read. |
| <Link id="m-pointindex" /><code>{"private int pointIndex"}</code> | Index of the first woodcut point in the model that belongs to this connection; `BreakPoints` starts here. |
| <Link id="m-rotations" /><code>{"private int rotations"}</code> | Backing field for `Rotations`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-breakpoints" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> BreakPoints { get; }"}</code> | The woodcut points of the model that belong to this connection, as many as the connection type has bones. |
| <Link id="m-breakthresholdmultiplier-2" /><code>{"float BreakThresholdMultiplier { get; }"}</code> | Scales how much cutting it takes to break this connection. |
| <Link id="m-connectiontype-2" /><code><Link to="/game-api/types/alta-crafting/woodcutconnectiontype">{"WoodcutConnectionType"}</Link>{" ConnectionType { get; }"}</code> | The connection type, which sets how many bones (break points) it has. |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The network entity on the same object. |
| <Link id="m-model-2" /><code><Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" Model { get; }"}</code> | The tree model this connection belongs to. |
| <Link id="m-rotations-2" /><code>{"int Rotations { get; }"}</code> | Rotation count for the connection, set in the prefab. |

## Used in

Members of other types that take, return or hold a `WoodcutConnection`:

[`PresetTree.HandleEditorStep`](/game-api/types/alta-crafting/presettree#m-handleeditorstep), [`PresetTree.HandleStep`](/game-api/types/alta-crafting/presettree#m-handlestep), [`TreeBuilder.selected`](/game-api/types/alta-crafting/treebuilder#m-selected), [`TreeBuilder.Selected`](/game-api/types/alta-crafting/treebuilder#m-selected-2), [`WoodcutTree.Add`](/game-api/types/alta-crafting/woodcuttree#m-add), [`WoodcutTree.Sync`](/game-api/types/alta-crafting/woodcuttree#m-sync-3), [`WoodcutTree.MapNode.Children`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-children), [`WoodcutTree.MapNode.Parent`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-parent), [`WoodcutTreeModel.connections`](/game-api/types/alta-crafting/woodcuttreemodel#m-connections), [`WoodcutTreeModel.Connections`](/game-api/types/alta-crafting/woodcuttreemodel#m-connections-2).
