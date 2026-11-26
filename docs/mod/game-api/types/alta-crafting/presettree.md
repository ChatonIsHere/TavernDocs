---
title: "PresetTree"
description: "Asset that records a tree's full shape (each trunk or branch piece, how they connect, and attachments like leaves or fruit) so it can be rebuilt exactly, at..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetTree

A **class** in `Root.Township`, `Alta.Woodcutting`.

Asset that records a tree's full shape (each trunk or branch piece, how they connect, and attachments like leaves or fruit) so it can be rebuilt exactly, at run time or in the editor.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<PresetTree>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t), `ISerializationCallbackReceiver`
- **Derived types** [`PresetTree`](/mod/game-api/types/alta-crafting/presettree), [`PresetTree.Create`](/mod/game-api/types/alta-crafting/presettree-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/presettree-create), [`Step`](/mod/game-api/types/alta-crafting/presettree-step)
- **Attributes** `HashedPath`
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PresetTree()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-size" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/treesize">{"TreeSize"}</Link>{" size"}</code> | <span className="api-desc">Backing field for `Size`.</span> |
| <Link id="m-species" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{"[] species"}</code> | <span className="api-desc">Backing field for `Species`. The editor uses the first one.</span> |
| <Link id="m-steps" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/presettree-step">{"PresetTree.Step"}</Link>{"> steps"}</code> | <span className="api-desc">The tree's pieces in breadth-first order; each step lists its piece prefab, rotation, attachments and child steps.</span> |
| <Link id="m-workingwithtree" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" workingWithTree"}</code> | <span className="api-desc">Tree set by `SaveFrom`, captured into `steps` on the next serialize.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-size-2" /><code><Link to="/mod/game-api/types/alta-crafting/treesize">{"TreeSize"}</Link>{" Size { get; }"}</code> | <span className="api-desc">The tree size this preset is for.</span> |
| <Link id="m-species-2" /><code><Link to="/mod/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{"[] Species { get; }"}</code> | <span className="api-desc">Species this preset can be used with.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateeditortreeonexisting" /><code>{"void GenerateEditorTreeOnExisting("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> | <span className="api-desc">Editor: builds the recorded pieces onto a tree in the scene, using the first species.</span> |
| <Link id="m-generateruntimetree" /><code><Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" GenerateRunTimeTree("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab, "}<Link to="/mod/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" species, Transform parent, Vector3 localPosition, Quaternion localRotation, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parentEntity)"}</code> | <span className="api-desc">Server: spawns a tree prefab of a species and places it under a parent entity, saved as its child.</span> |
| <Link id="m-generateruntimetreeonexisting" /><code>{"void GenerateRunTimeTreeOnExisting("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> | <span className="api-desc">Server: builds the recorded pieces onto an existing tree entity and initializes it.</span> |
| <Link id="m-generateruntimetreewithoutparent" /><code><Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" GenerateRunTimeTreeWithoutParent("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab, "}<Link to="/mod/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" species, Vector3 position, Quaternion rotation, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Server: spawns a tree prefab of a species at a world position in a chunk.</span> |
| <Link id="m-savefrom" /><code>{"void SaveFrom("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> | <span className="api-desc">Marks a tree to record. Its shape is written into the asset when Unity next serializes it.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleeditorstep" /><code>{"private void HandleEditorStep("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree, "}<Link to="/mod/game-api/types/alta-crafting/presettree-step">{"PresetTree.Step"}</Link>{" step, "}<Link to="/mod/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" parent)"}</code> | <span className="api-desc">Editor: instantiates one step's piece and attachments, then recurses into its child connections.</span> |
| <Link id="m-handlestep" /><code>{"private void HandleStep("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree, "}<Link to="/mod/game-api/types/alta-crafting/presettree-step">{"PresetTree.Step"}</Link>{" step, "}<Link to="/mod/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" parent)"}</code> | <span className="api-desc">Server: spawns one step's tree piece and attachments onto the tree, then recurses into its child connections by hash.</span> |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> | <span className="api-desc">Explicit Unity serialization callback. Empty.</span> |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> | <span className="api-desc">Explicit Unity serialization callback: after `SaveFrom`, walks that tree and rewrites `steps` from it.</span> |
| <Link id="m-spawnandinitwoodcuttree" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" SpawnAndInitWoodcutTree("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab, "}<Link to="/mod/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" species)"}</code> | <span className="api-desc">Spawns the tree prefab, sets its species and this preset, and initializes it as server.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PresetTree`:

<div className="api-used-in">

[`TreeBuilder.preset`](/mod/game-api/types/alta-crafting/treebuilder#m-preset), [`TreeBuilder.Preset`](/mod/game-api/types/alta-crafting/treebuilder#m-preset-2), [`TreeSpawner.Spawn`](/mod/game-api/types/alta-crafting/treespawner#m-spawn), [`WoodcutTree.spawnParticular`](/mod/game-api/types/alta-crafting/woodcuttree#m-spawnparticular), [`WoodcutTree.SpawnParticular`](/mod/game-api/types/alta-crafting/woodcuttree#m-spawnparticular-2), [`WoodcutTreeSaveData.preset`](/mod/game-api/types/alta-crafting/woodcuttreesavedata#m-preset), [`WoodcutTreeSaveData1.preset`](/mod/game-api/types/alta-crafting/woodcuttreesavedata1#m-preset), [`WoodcutTreeSaveData2.preset`](/mod/game-api/types/alta-crafting/woodcuttreesavedata2#m-preset).

</div>
