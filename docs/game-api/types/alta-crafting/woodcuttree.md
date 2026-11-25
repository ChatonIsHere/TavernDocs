---
title: "WoodcutTree"
description: "The root of a choppable tree: a physics body holding a tree of WoodcutTreeModel segments joined by connections."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTree

A **class** in `Root.Township`, `Alta.Woodcutting`.

The root of a choppable tree: a physics body holding a tree of `WoodcutTreeModel` segments joined by connections. The server generates it from a preset, splits off a new `WoodcutTree` when a segment is chopped through, and syncs the shape to clients.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<WoodcutTreeSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<WoodcutTreeSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TreeEvent`](/game-api/types/alta-crafting/treeevent), [`WoodcutTreeEvent`](/game-api/types/alta-crafting/woodcuttreeevent), [`WoodcutTreeSaveData`](/game-api/types/alta-crafting/woodcuttreesavedata)
- **Nested types** [`MapNode`](/game-api/types/alta-crafting/woodcuttree-mapnode)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WoodcutTree()"}</code> |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cut" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcuttreeevent">{"WoodcutTreeEvent"}</Link>{" cut"}</code> |
| <Link id="m-fallcoroutine" /><code>{"private Coroutine fallCoroutine"}</code> |
| <Link id="m-fallvelocity" /><code>{"private float fallVelocity"}</code> |
| <Link id="m-fellchopmultiplier" /><code>{"private float fellChopMultiplier"}</code> |
| <Link id="m-forceoffset" /><code>{"private float forceOffset"}</code> |
| <Link id="m-healthobject" /><code>{"private "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject"}</code> |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> |
| <Link id="m-isinwindow" /><code>{"private bool isInWindow"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-onthump" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcuttreeevent">{"WoodcutTreeEvent"}</Link>{" onThump"}</code> |
| <Link id="m-popvelocity" /><code>{"private float popVelocity"}</code> |
| <Link id="m-spawndistribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" spawnDistribution"}</code> |
| <Link id="m-spawnparticular" /><code>{"private "}<Link to="/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" spawnParticular"}</code> |
| <Link id="m-species" /><code>{"private "}<Link to="/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" species"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |
| <Link id="m-synccut" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCut"}</code> |
| <Link id="m-thumpminimumfalltime" /><code>{"private float thumpMinimumFallTime"}</code> |
| <Link id="m-thumpwindowtime" /><code>{"private float thumpWindowTime"}</code> |
| <Link id="m-treerigidbody" /><code>{"private Rigidbody treeRigidbody"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-healthobject-2" /><code><Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" { get; }"}</code> | Health of the last segment; enabled only when the root has no children. Its death destroys the tree. |
| <Link id="m-mass" /><code>{"float Mass { get; }"}</code> | Total mass of all segments, from the root node. 1 if there is no root. |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> | The tree's rigidbody. Its mass follows `Mass`. |
| <Link id="m-root" /><code><Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" Root { get; private set; }"}</code> | Node of the bottom segment, or null before the tree is built. |
| <Link id="m-spawnparticular-2" /><code><Link to="/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" SpawnParticular { get; set; }"}</code> | Preset tree to generate. Saved with the tree; picked from the distribution if empty. |
| <Link id="m-species-2" /><code><Link to="/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" Species { get; set; }"}</code> | Tree species. Setting it updates the impact hardness and the health. |
| <Link id="m-totalsize" /><code>{"float TotalSize { get; }"}</code> | Number of segments in the tree, from the root node. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-chopped" /><code>{"event Action Chopped"}</code> | Raised when a piece splits off this tree. |
| <Link id="m-cut-2" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{"> Cut"}</code> | Raised when a segment of this tree is chopped through. Also fires on clients. |
| <Link id="m-parttookdamage" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{", float> PartTookDamage"}</code> | Server: raised with the damage when any segment takes damage. |
| <Link id="m-readyforbake" /><code>{"event Action ReadyForBake"}</code> | Raised when the segment layout is ready or changed, so the baker can rebuild the visuals. |
| <Link id="m-thump" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{"> Thump"}</code> | Raised when a falling tree hits the ground layer within the thump time window. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code><Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" Add("}<Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model, "}<Link to="/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" parentConnection, int rotation)"}</code> | Adds a segment model under a parent connection (or as the root), updating mass and size. Re-parenting can split a piece off another tree. |
| <Link id="m-editorclear" /><code>{"void EditorClear()"}</code> | Destroys the generated segments and clears `Root`. |
| <Link id="m-fixtree" /><code>{"void FixTree()"}</code> | Builds the node map from segment models already under the tree, if it has none. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync messages and starts the fall window for the thump event. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: builds the node map, or generates a tree from the preset or distribution on first spawn, then raises `ReadyForBake`. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the tree's species and segment layout to a joining player. |
| <Link id="m-rebake" /><code>{"void Rebake()"}</code> | Raises `ReadyForBake` again. |

<details>
<summary>18 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-breakattachments" /><code>{"private void BreakAttachments("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" node)"}</code> |
| <Link id="m-checkattachment" /><code>{"private void CheckAttachment("}<Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" parent, Transform childTransform)"}</code> |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> |
| <Link id="m-fallingwindow" /><code>{"private IEnumerator FallingWindow() (iterator)"}</code> |
| <Link id="m-handlesplit" /><code>{"private void HandleSplit("}<Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model, "}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" newTree)"}</code> |
| <Link id="m-lastpiecechopped" /><code>{"private void LastPieceChopped("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> |
| <Link id="m-lookforchildren" /><code>{"private void LookForChildren("}<Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" parent)"}</code> |
| <Link id="m-modelchopped" /><code>{"private void ModelChopped("}<Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model)"}</code> |
| <Link id="m-moveto" /><code>{"private void MoveTo("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" node, "}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" newTree, bool isFirst = true)"}</code> |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> |
| <Link id="m-onparttookdamage" /><code>{"private void OnPartTookDamage("}<Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model, float damage)"}</code> |
| <Link id="m-spin" /><code>{"private void Spin(Rigidbody rigidbody, Vector3 direction, float velocityMagnitude, float upOffset)"}</code> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-sync-3" /><code>{"private void Sync("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" node, "}<Link to="/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" parent, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncattachment" /><code>{"private void SyncAttachment("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" attachment, "}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" parent, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-synccut-2" /><code>{"private void SyncCut("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-treeisfell" /><code>{"private void TreeIsFell()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `WoodcutTree`:

[`PresetTree.GenerateEditorTreeOnExisting`](/game-api/types/alta-crafting/presettree#m-generateeditortreeonexisting), [`PresetTree.GenerateRunTimeTree`](/game-api/types/alta-crafting/presettree#m-generateruntimetree), [`PresetTree.GenerateRunTimeTreeOnExisting`](/game-api/types/alta-crafting/presettree#m-generateruntimetreeonexisting), [`PresetTree.GenerateRunTimeTreeWithoutParent`](/game-api/types/alta-crafting/presettree#m-generateruntimetreewithoutparent), [`PresetTree.HandleEditorStep`](/game-api/types/alta-crafting/presettree#m-handleeditorstep), [`PresetTree.HandleStep`](/game-api/types/alta-crafting/presettree#m-handlestep), [`PresetTree.SaveFrom`](/game-api/types/alta-crafting/presettree#m-savefrom), [`PresetTree.SpawnAndInitWoodcutTree`](/game-api/types/alta-crafting/presettree#m-spawnandinitwoodcuttree), [`PresetTree.workingWithTree`](/game-api/types/alta-crafting/presettree#m-workingwithtree), [`TreeDecay.CheckCut`](/game-api/types/alta-crafting/treedecay#m-checkcut), [`TreeDecay.PartTookDamage`](/game-api/types/alta-crafting/treedecay#m-parttookdamage), [`TreeDecay.tree`](/game-api/types/alta-crafting/treedecay#m-tree), [`TreeSpawner.CheckBaseCut`](/game-api/types/alta-crafting/treespawner#m-checkbasecut), [`TreeSpawner.tree`](/game-api/types/alta-crafting/treespawner#m-tree), [`WoodcutTree.MapNode.Tree`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-tree), [`WoodcutTreeBaker.tree`](/game-api/types/alta-crafting/woodcuttreebaker#m-tree), [`WoodcutTreeModel.Tree`](/game-api/types/alta-crafting/woodcuttreemodel#m-tree), [`TreeChopDetector.tree2`](/game-api/types/global-t-x/treechopdetector#m-tree2).
