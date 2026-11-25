---
title: "WoodcutConnection"
description: "class WoodcutConnection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutConnection

A **class** in `Root.Township`, `Alta.Woodcutting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutConnection()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-model" /><code><Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model"}</code> |  |
| <Link id="m-breakthresholdmultiplier" /><code>{"private float breakThresholdMultiplier"}</code> |  |
| <Link id="m-connectiontype" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcutconnectiontype">{"WoodcutConnectionType"}</Link>{" connectionType"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-pointindex" /><code>{"private int pointIndex"}</code> |  |
| <Link id="m-rotations" /><code>{"private int rotations"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-breakpoints" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> BreakPoints { get; }"}</code> |  |
| <Link id="m-breakthresholdmultiplier-2" /><code>{"float BreakThresholdMultiplier { get; }"}</code> |  |
| <Link id="m-connectiontype-2" /><code><Link to="/game-api/types/alta-crafting/woodcutconnectiontype">{"WoodcutConnectionType"}</Link>{" ConnectionType { get; }"}</code> |  |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |
| <Link id="m-model-2" /><code><Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" Model { get; }"}</code> |  |
| <Link id="m-rotations-2" /><code>{"int Rotations { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `WoodcutConnection`:

[`PresetTree.HandleEditorStep`](/game-api/types/alta-crafting/presettree#m-handleeditorstep), [`PresetTree.HandleStep`](/game-api/types/alta-crafting/presettree#m-handlestep), [`TreeBuilder.selected`](/game-api/types/alta-crafting/treebuilder#m-selected), [`TreeBuilder.Selected`](/game-api/types/alta-crafting/treebuilder#m-selected-2), [`WoodcutTree.Add`](/game-api/types/alta-crafting/woodcuttree#m-add), [`WoodcutTree.Sync`](/game-api/types/alta-crafting/woodcuttree#m-sync-3), [`WoodcutTree.MapNode.Children`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-children), [`WoodcutTree.MapNode.Parent`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-parent), [`WoodcutTreeModel.connections`](/game-api/types/alta-crafting/woodcuttreemodel#m-connections), [`WoodcutTreeModel.Connections`](/game-api/types/alta-crafting/woodcuttreemodel#m-connections-2).
