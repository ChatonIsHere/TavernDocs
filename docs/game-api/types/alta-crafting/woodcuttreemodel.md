---
title: "WoodcutTreeModel"
description: "One choppable segment of a WoodcutTree (a trunk or branch piece)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeModel

A **class** in `Root.Township`, `Alta.Woodcutting`.

One choppable segment of a `WoodcutTree` (a trunk or branch piece). Hits from the tree's impact detector damage its woodcut points; on the server, enough damage around the bottom chops it off.

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
| <Link id="m-bottompoints" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> BottomPoints { get; }"}</code> | The woodcut points around the bottom of the segment, where it is chopped off. |
| <Link id="m-colors-2" /><code>{"Color[] Colors { get; }"}</code> | Colour data for the segment's mesh. |
| <Link id="m-connections-2" /><code><Link to="/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{"[] Connections { get; }"}</code> | Connection points where child segments attach. |
| <Link id="m-core" /><code><Link to="/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<"}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> Core { get; private set; }"}</code> | Colour model that shows the chop marks on the mesh. Null on a headless server. |
| <Link id="m-droplocations-2" /><code>{"PositionRotation[] DropLocations { set; }"}</code> | Where sticks or wedges spawn when the segment is chopped up. Set only. |
| <Link id="m-dynamicmultiplier" /><code>{"float DynamicMultiplier { get; set; }"}</code> | Damage multiplier, raised for segments of a felled (non-kinematic) tree. |
| <Link id="m-finisheddirection-2" /><code>{"int FinishedDirection { get; }"}</code> | Index of the point the segment was chopped from, or -1. |
| <Link id="m-mapnode" /><code><Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" "}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"MapNode"}</Link>{" { get; set; }"}</code> | This segment's node in the tree's layout. |
| <Link id="m-mass-2" /><code>{"float Mass { get; }"}</code> | Mass of this segment. |
| <Link id="m-mesheffect" /><code><Link to="/game-api/types/global-p/pooledparticlesystemmeshemision">{"PooledParticleSystemMeshEmision"}</Link>{" MeshEffect { get; set; }"}</code> | Particle effect for the segment's mesh. |
| <Link id="m-meshes-2" /><code>{"Mesh[] Meshes { get; }"}</code> | LOD meshes for the segment. |
| <Link id="m-tree" /><code><Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" Tree { get; }"}</code> | The tree this segment belongs to. |
| <Link id="m-type-2" /><code><Link to="/game-api/types/alta-crafting/woodcutconnectiontype">{"WoodcutConnectionType"}</Link>{" Type { get; }"}</code> | The connection type, which says how many bones it has and whether it is a stick. |
| <Link id="m-woodcutpoints" /><code>{"List<"}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> WoodcutPoints { get; }"}</code> | All woodcut points on the segment. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-chopped" /><code>{"event "}<Link to="/game-api/types/alta-crafting/woodcuttreemodelchopped">{"WoodcutTreeModelChopped"}</Link>{" Chopped"}</code> | Raised when the segment is chopped off its parent. The tree splits it into a new tree. |
| <Link id="m-tookdamage" /><code>{"event "}<Link to="/game-api/types/alta-crafting/woodcuttreemodeldamaged">{"WoodcutTreeModelDamaged"}</Link>{" TookDamage"}</code> | Raised with the total damage when a hit damages the segment. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkcomplete" /><code>{"bool CheckComplete()"}</code> | Server: checks the bottom points against the species thresholds and chops the segment if they are cut deep enough. |
| <Link id="m-chop" /><code>{"void Chop(int side)"}</code> | Marks the segment as chopped from a side and raises `Chopped`, unless it is the root segment. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the colour model for chop marks, except on a headless server. |
| <Link id="m-piecechopped" /><code>{"void PieceChopped()"}</code> | Server: spawns the species' sticks or wedges at the drop locations and destroys the segment. |
| <Link id="m-setimpactdetector" /><code>{"void SetImpactDetector("}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector)"}</code> | Switches which impact detector's hits damage this segment. |
| <Link id="m-handlehit" /><code>{"private void HandleHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-randomdamage" /><code>{"private void RandomDamage()"}</code> |  |

## Used in

Members of other types that take, return or hold a `WoodcutTreeModel`:

[`WoodcutConnection.model`](/game-api/types/alta-crafting/woodcutconnection#m-model), [`WoodcutConnection.Model`](/game-api/types/alta-crafting/woodcutconnection#m-model-2), [`WoodcutConnectionType.Break`](/game-api/types/alta-crafting/woodcutconnectiontype#m-break), [`WoodcutTree.Add`](/game-api/types/alta-crafting/woodcuttree#m-add), [`WoodcutTree.CheckAttachment`](/game-api/types/alta-crafting/woodcuttree#m-checkattachment), [`WoodcutTree.HandleSplit`](/game-api/types/alta-crafting/woodcuttree#m-handlesplit), [`WoodcutTree.LookForChildren`](/game-api/types/alta-crafting/woodcuttree#m-lookforchildren), [`WoodcutTree.ModelChopped`](/game-api/types/alta-crafting/woodcuttree#m-modelchopped), [`WoodcutTree.OnPartTookDamage`](/game-api/types/alta-crafting/woodcuttree#m-onparttookdamage), [`WoodcutTree.MapNode.Model`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-model), [`WoodcutTreeModelChopped.BeginInvoke`](/game-api/types/alta-crafting/woodcuttreemodelchopped#m-begininvoke), [`WoodcutTreeModelChopped.Invoke`](/game-api/types/alta-crafting/woodcuttreemodelchopped#m-invoke), [`WoodcutTreeModelDamaged.BeginInvoke`](/game-api/types/alta-crafting/woodcuttreemodeldamaged#m-begininvoke), [`WoodcutTreeModelDamaged.Invoke`](/game-api/types/alta-crafting/woodcuttreemodeldamaged#m-invoke).
