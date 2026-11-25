---
title: "WoodcutTreeModel"
description: "Takes hits on its WoodcutPoints; when chopped through (PieceChopped, server) it spawns the species' wedge or stick drops at its drop locations and des"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeModel

A **class** in `Root.Township`, `Alta.Woodcutting`.

Takes hits on its `WoodcutPoints`; when chopped through (`PieceChopped`, server) it spawns the species' wedge or stick drops at its drop locations and destroys itself.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`UnityWoodcutTreeModelEvent`](/game-api/types/alta-crafting/unitywoodcuttreemodelevent), [`WoodcutTreeModelEvent`](/game-api/types/alta-crafting/woodcuttreemodelevent)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeModel()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boneweights" /><code>{"private BoneWeight[] boneWeights"}</code> |  |
| <Link id="m-bottompointindex" /><code>{"private int bottomPointIndex"}</code> |  |
| <Link id="m-btncheckcomplete" /><code>{"private bool btnCheckComplete"}</code> |  |
| <Link id="m-btntakingrandomdamage" /><code>{"private bool btnTakingRandomDamage"}</code> |  |
| <Link id="m-colors" /><code>{"private Color[] colors"}</code> |  |
| <Link id="m-connections" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{"[] connections"}</code> |  |
| <Link id="m-droplocations" /><code>{"private PositionRotation[] dropLocations"}</code> |  |
| <Link id="m-finisheddirection" /><code>{"private int finishedDirection"}</code> |  |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> |  |
| <Link id="m-mass" /><code>{"private float mass"}</code> |  |
| <Link id="m-meshes" /><code>{"private Mesh[] meshes"}</code> |  |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcutconnectiontype">{"WoodcutConnectionType"}</Link>{" type"}</code> |  |
| <Link id="m-woodcutpointscollection" /><code>{"private "}<Link to="/game-api/types/global-t-x/woodcutpointcollection">{"WoodcutPointCollection"}</Link>{" woodcutPointsCollection"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bottompoints" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> BottomPoints { get; }"}</code> |  |
| <Link id="m-colors-2" /><code>{"Color[] Colors { get; }"}</code> |  |
| <Link id="m-connections-2" /><code><Link to="/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{"[] Connections { get; }"}</code> |  |
| <Link id="m-core" /><code><Link to="/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<"}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> Core { get; private set; }"}</code> |  |
| <Link id="m-droplocations-2" /><code>{"PositionRotation[] DropLocations { set; }"}</code> |  |
| <Link id="m-dynamicmultiplier" /><code>{"float DynamicMultiplier { get; set; }"}</code> |  |
| <Link id="m-finisheddirection-2" /><code>{"int FinishedDirection { get; }"}</code> |  |
| <Link id="m-mapnode" /><code><Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" "}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"MapNode"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-mass-2" /><code>{"float Mass { get; }"}</code> |  |
| <Link id="m-mesheffect" /><code><Link to="/game-api/types/global-p/pooledparticlesystemmeshemision">{"PooledParticleSystemMeshEmision"}</Link>{" MeshEffect { get; set; }"}</code> |  |
| <Link id="m-meshes-2" /><code>{"Mesh[] Meshes { get; }"}</code> |  |
| <Link id="m-tree" /><code><Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" Tree { get; }"}</code> |  |
| <Link id="m-type-2" /><code><Link to="/game-api/types/alta-crafting/woodcutconnectiontype">{"WoodcutConnectionType"}</Link>{" Type { get; }"}</code> |  |
| <Link id="m-woodcutpoints" /><code>{"List<"}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> WoodcutPoints { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-chopped" /><code>{"event "}<Link to="/game-api/types/alta-crafting/woodcuttreemodelchopped">{"WoodcutTreeModelChopped"}</Link>{" Chopped"}</code> |  |
| <Link id="m-tookdamage" /><code>{"event "}<Link to="/game-api/types/alta-crafting/woodcuttreemodeldamaged">{"WoodcutTreeModelDamaged"}</Link>{" TookDamage"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkcomplete" /><code>{"bool CheckComplete()"}</code> |  |
| <Link id="m-chop" /><code>{"void Chop(int side)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-piecechopped" /><code>{"void PieceChopped()"}</code> |  |
| <Link id="m-setimpactdetector" /><code>{"void SetImpactDetector("}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector)"}</code> |  |
| <Link id="m-handlehit" /><code>{"private void HandleHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-randomdamage" /><code>{"private void RandomDamage()"}</code> |  |

## Used in

Members of other types that take, return or hold a `WoodcutTreeModel`:

[`WoodcutConnection.model`](/game-api/types/alta-crafting/woodcutconnection#m-model), [`WoodcutConnection.Model`](/game-api/types/alta-crafting/woodcutconnection#m-model-2), [`WoodcutConnectionType.Break`](/game-api/types/alta-crafting/woodcutconnectiontype#m-break), [`WoodcutTree.Add`](/game-api/types/alta-crafting/woodcuttree#m-add), [`WoodcutTree.CheckAttachment`](/game-api/types/alta-crafting/woodcuttree#m-checkattachment), [`WoodcutTree.HandleSplit`](/game-api/types/alta-crafting/woodcuttree#m-handlesplit), [`WoodcutTree.LookForChildren`](/game-api/types/alta-crafting/woodcuttree#m-lookforchildren), [`WoodcutTree.ModelChopped`](/game-api/types/alta-crafting/woodcuttree#m-modelchopped), [`WoodcutTree.OnPartTookDamage`](/game-api/types/alta-crafting/woodcuttree#m-onparttookdamage), [`WoodcutTree.MapNode.Model`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-model), [`WoodcutTreeModelChopped.BeginInvoke`](/game-api/types/alta-crafting/woodcuttreemodelchopped#m-begininvoke), [`WoodcutTreeModelChopped.Invoke`](/game-api/types/alta-crafting/woodcuttreemodelchopped#m-invoke), [`WoodcutTreeModelDamaged.BeginInvoke`](/game-api/types/alta-crafting/woodcuttreemodeldamaged#m-begininvoke), [`WoodcutTreeModelDamaged.Invoke`](/game-api/types/alta-crafting/woodcuttreemodeldamaged#m-invoke).
