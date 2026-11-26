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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<WoodcutTreeSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<WoodcutTreeSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TreeEvent`](/mod/game-api/types/alta-crafting/treeevent), [`WoodcutTreeEvent`](/mod/game-api/types/alta-crafting/woodcuttreeevent), [`WoodcutTreeSaveData`](/mod/game-api/types/alta-crafting/woodcuttreesavedata)
- **Nested types** [`MapNode`](/mod/game-api/types/alta-crafting/woodcuttree-mapnode)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTree()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cut" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcuttreeevent">{"WoodcutTreeEvent"}</Link>{" cut"}</code> | <span className="api-desc">Backing event for `Cut`.</span> |
| <Link id="m-fallcoroutine" /><code>{"private Coroutine fallCoroutine"}</code> | <span className="api-desc">The running `FallingWindow` coroutine, stopped on the first ground hit.</span> |
| <Link id="m-fallvelocity" /><code>{"private float fallVelocity"}</code> | <span className="api-desc">Speed given to pieces as they tip after a split. 1 by default.</span> |
| <Link id="m-fellchopmultiplier" /><code>{"private float fellChopMultiplier"}</code> | <span className="api-desc">Damage multiplier given to models on a non-kinematic (felled) tree. 1.5 by default.</span> |
| <Link id="m-forceoffset" /><code>{"private float forceOffset"}</code> | <span className="api-desc">Up offset used by `Spin` for the angular push. 1 by default.</span> |
| <Link id="m-healthobject" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject"}</code> | <span className="api-desc">Backing field for `HealthObject`. Its max health is the species damage multiplier; on only while the root has no children.</span> |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | <span className="api-desc">Detector shared by every model in the tree. Its hardness follows the species.</span> |
| <Link id="m-isinwindow" /><code>{"private bool isInWindow"}</code> | <span className="api-desc">True while a ground hit counts as a thump.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-onthump" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcuttreeevent">{"WoodcutTreeEvent"}</Link>{" onThump"}</code> | <span className="api-desc">Backing event for `Thump`.</span> |
| <Link id="m-popvelocity" /><code>{"private float popVelocity"}</code> | <span className="api-desc">Speed the two parts are pushed apart with on a split. 1 by default.</span> |
| <Link id="m-spawndistribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" spawnDistribution"}</code> | <span className="api-desc">Distribution a preset tree is picked from on first generation when `spawnParticular` is not set.</span> |
| <Link id="m-spawnparticular" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" spawnParticular"}</code> | <span className="api-desc">Backing field for `SpawnParticular`, the preset tree to build. Saved with the tree.</span> |
| <Link id="m-species" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" species"}</code> | <span className="api-desc">Backing field for `Species`. Saved with the tree.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for the full tree layout. Sent to joining players and after splits.</span> |
| <Link id="m-synccut" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCut"}</code> | <span className="api-desc">Method sync that tells clients a cut happened.</span> |
| <Link id="m-thumpminimumfalltime" /><code>{"private float thumpMinimumFallTime"}</code> | <span className="api-desc">Seconds after initialize before a ground hit counts as a thump. 2 by default.</span> |
| <Link id="m-thumpwindowtime" /><code>{"private float thumpWindowTime"}</code> | <span className="api-desc">Seconds the thump window stays open. 6 by default.</span> |
| <Link id="m-treerigidbody" /><code>{"private Rigidbody treeRigidbody"}</code> | <span className="api-desc">Backing field for `Rigidbody`. Its mass follows the root node's mass.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-healthobject-2" /><code><Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" { get; }"}</code> | <span className="api-desc">Health of the last segment; enabled only when the root has no children. Its death destroys the tree.</span> |
| <Link id="m-mass" /><code>{"float Mass { get; }"}</code> | <span className="api-desc">Total mass of all segments, from the root node. 1 if there is no root.</span> |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> | <span className="api-desc">The tree's rigidbody. Its mass follows `Mass`.</span> |
| <Link id="m-root" /><code><Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" Root { get; private set; }"}</code> | <span className="api-desc">Node of the bottom segment, or null before the tree is built.</span> |
| <Link id="m-spawnparticular-2" /><code><Link to="/mod/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" SpawnParticular { get; set; }"}</code> | <span className="api-desc">Preset tree to generate. Saved with the tree; picked from the distribution if empty.</span> |
| <Link id="m-species-2" /><code><Link to="/mod/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" Species { get; set; }"}</code> | <span className="api-desc">Tree species. Setting it updates the impact hardness and the health.</span> |
| <Link id="m-totalsize" /><code>{"float TotalSize { get; }"}</code> | <span className="api-desc">Number of segments in the tree, from the root node.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-chopped" /><code>{"event Action Chopped"}</code> | <span className="api-desc">Raised when a piece splits off this tree.</span> |
| <Link id="m-cut-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{"> Cut"}</code> | <span className="api-desc">Raised when a segment of this tree is chopped through. Also fires on clients.</span> |
| <Link id="m-parttookdamage" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{", float> PartTookDamage"}</code> | <span className="api-desc">Server: raised with the damage when any segment takes damage.</span> |
| <Link id="m-readyforbake" /><code>{"event Action ReadyForBake"}</code> | <span className="api-desc">Raised when the segment layout is ready or changed, so the baker can rebuild the visuals.</span> |
| <Link id="m-thump" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{"> Thump"}</code> | <span className="api-desc">Raised when a falling tree hits the ground layer within the thump time window.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code><Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" Add("}<Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model, "}<Link to="/mod/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" parentConnection, int rotation)"}</code> | <span className="api-desc">Adds a segment model under a parent connection (or as the root), updating mass and size. Re-parenting can split a piece off another tree.</span> |
| <Link id="m-editorclear" /><code>{"void EditorClear()"}</code> | <span className="api-desc">Destroys the generated segments and clears `Root`.</span> |
| <Link id="m-fixtree" /><code>{"void FixTree()"}</code> | <span className="api-desc">Builds the node map from segment models already under the tree, if it has none.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the sync messages and starts the fall window for the thump event.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: builds the node map, or generates a tree from the preset or distribution on first spawn, then raises `ReadyForBake`.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the tree's species and segment layout to a joining player.</span> |
| <Link id="m-rebake" /><code>{"void Rebake()"}</code> | <span className="api-desc">Raises `ReadyForBake` again.</span> |

<details className="api-private">
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks `LastPieceChopped` to the health object's `Killed` event.</span> |
| <Link id="m-breakattachments" /><code>{"private void BreakAttachments("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" node)"}</code> | <span className="api-desc">Unroots every attachment on a node and all its children. Runs before a chopped piece splits off.</span> |
| <Link id="m-checkattachment" /><code>{"private void CheckAttachment("}<Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" parent, Transform childTransform)"}</code> | <span className="api-desc">Registers a child `TreeAttachment` found under a model as attached to that node and saved with it.</span> |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> | <span className="api-desc">Editor: picks up the rigidbody and health object, caps depenetration velocity and turns the health object off.</span> |
| <Link id="m-fallingwindow" /><code>{"private IEnumerator FallingWindow() (iterator)"}</code> | <span className="api-desc">Coroutine that opens the thump window after `thumpMinimumFallTime` and closes it `thumpWindowTime` later. Stopped on dedicated servers.</span> |
| <Link id="m-handlesplit" /><code>{"private void HandleSplit("}<Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model, "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" newTree)"}</code> | <span className="api-desc">Server: pushes the old and new trees apart and spins them to fall, split by their masses. Raises `Chopped`.</span> |
| <Link id="m-lastpiecechopped" /><code>{"private void LastPieceChopped("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | <span className="api-desc">Server: when the health object dies and only the root piece is left, chops that piece and destroys the tree.</span> |
| <Link id="m-lookforchildren" /><code>{"private void LookForChildren("}<Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" parent)"}</code> | <span className="api-desc">Walks a model's children, adding connected models to the map with their rotation and registering attachments.</span> |
| <Link id="m-modelchopped" /><code>{"private void ModelChopped("}<Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model)"}</code> | <span className="api-desc">Server: when a piece is chopped through, spawns a new tree for it and everything above, then raises `Cut` and syncs it.</span> |
| <Link id="m-moveto" /><code>{"private void MoveTo("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" node, "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" newTree, bool isFirst = true)"}</code> | <span className="api-desc">Moves a node and its children into another tree. The first call syncs the new tree and raises its `ReadyForBake`.</span> |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">A hit on layer 8 in the thump window raises `Thump`. Server: strong impacts damage attachments and break points up the tree.</span> |
| <Link id="m-onparttookdamage" /><code>{"private void OnPartTookDamage("}<Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model, float damage)"}</code> | <span className="api-desc">Passes a model's damage on through `PartTookDamage`.</span> |
| <Link id="m-spin" /><code>{"private void Spin(Rigidbody rigidbody, Vector3 direction, float velocityMagnitude, float upOffset)"}</code> | <span className="api-desc">Adds velocity in a direction plus angular velocity around an offset, so a piece tips over.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler for the species and the whole node map with attachments. Clients rebuild the tree from it.</span> |
| <Link id="m-sync-3" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" node, "}<Link to="/mod/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" parent, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler for the species and the whole node map with attachments. Clients rebuild the tree from it.</span> |
| <Link id="m-syncattachment" /><code>{"private void SyncAttachment("}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" attachment, "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" parent, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes one attachment's entity ID. Clients add it to the node.</span> |
| <Link id="m-synccut-2" /><code>{"private void SyncCut("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler: clients raise `Cut` when the server reports a cut.</span> |
| <Link id="m-treeisfell" /><code>{"private void TreeIsFell()"}</code> | <span className="api-desc">Breaks the root model through its type. Runs when a piece that was a child becomes a root.</span> |

</details>

## Used in

Members of other types that take, return or hold a `WoodcutTree`:

<div className="api-used-in">

[`PresetTree.GenerateEditorTreeOnExisting`](/mod/game-api/types/alta-crafting/presettree#m-generateeditortreeonexisting), [`PresetTree.GenerateRunTimeTree`](/mod/game-api/types/alta-crafting/presettree#m-generateruntimetree), [`PresetTree.GenerateRunTimeTreeOnExisting`](/mod/game-api/types/alta-crafting/presettree#m-generateruntimetreeonexisting), [`PresetTree.GenerateRunTimeTreeWithoutParent`](/mod/game-api/types/alta-crafting/presettree#m-generateruntimetreewithoutparent), [`PresetTree.HandleEditorStep`](/mod/game-api/types/alta-crafting/presettree#m-handleeditorstep), [`PresetTree.HandleStep`](/mod/game-api/types/alta-crafting/presettree#m-handlestep), [`PresetTree.SaveFrom`](/mod/game-api/types/alta-crafting/presettree#m-savefrom), [`PresetTree.SpawnAndInitWoodcutTree`](/mod/game-api/types/alta-crafting/presettree#m-spawnandinitwoodcuttree), [`PresetTree.workingWithTree`](/mod/game-api/types/alta-crafting/presettree#m-workingwithtree), [`TreeDecay.CheckCut`](/mod/game-api/types/alta-crafting/treedecay#m-checkcut), [`TreeDecay.PartTookDamage`](/mod/game-api/types/alta-crafting/treedecay#m-parttookdamage), [`TreeDecay.tree`](/mod/game-api/types/alta-crafting/treedecay#m-tree), [`TreeSpawner.CheckBaseCut`](/mod/game-api/types/alta-crafting/treespawner#m-checkbasecut), [`TreeSpawner.tree`](/mod/game-api/types/alta-crafting/treespawner#m-tree), [`WoodcutTree.MapNode.Tree`](/mod/game-api/types/alta-crafting/woodcuttree-mapnode#m-tree), [`WoodcutTreeBaker.tree`](/mod/game-api/types/alta-crafting/woodcuttreebaker#m-tree), [`WoodcutTreeModel.Tree`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-tree), [`TreeChopDetector.tree2`](/mod/game-api/types/global-t-x/treechopdetector#m-tree2).

</div>
