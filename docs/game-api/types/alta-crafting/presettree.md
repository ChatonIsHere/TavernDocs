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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<PresetTree>`](/game-api/types/assembly-other/hashedgeneralvalue-t), `ISerializationCallbackReceiver`
- **Derived types** [`PresetTree`](/game-api/types/alta-crafting/presettree), [`PresetTree.Create`](/game-api/types/alta-crafting/presettree-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/presettree-create), [`Step`](/game-api/types/alta-crafting/presettree-step)
- **Attributes** `HashedPath`
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PresetTree()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-size" /><code>{"private "}<Link to="/game-api/types/alta-crafting/treesize">{"TreeSize"}</Link>{" size"}</code> |
| <Link id="m-species" /><code>{"private "}<Link to="/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{"[] species"}</code> |
| <Link id="m-steps" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/presettree-step">{"PresetTree.Step"}</Link>{"> steps"}</code> |
| <Link id="m-workingwithtree" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" workingWithTree"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-size-2" /><code><Link to="/game-api/types/alta-crafting/treesize">{"TreeSize"}</Link>{" Size { get; }"}</code> | The tree size this preset is for. |
| <Link id="m-species-2" /><code><Link to="/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{"[] Species { get; }"}</code> | Species this preset can be used with. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateeditortreeonexisting" /><code>{"void GenerateEditorTreeOnExisting("}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> | Editor: builds the recorded pieces onto a tree in the scene, using the first species. |
| <Link id="m-generateruntimetree" /><code><Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" GenerateRunTimeTree("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab, "}<Link to="/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" species, Transform parent, Vector3 localPosition, Quaternion localRotation, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parentEntity)"}</code> | Server: spawns a tree prefab of a species and places it under a parent entity, saved as its child. |
| <Link id="m-generateruntimetreeonexisting" /><code>{"void GenerateRunTimeTreeOnExisting("}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> | Server: builds the recorded pieces onto an existing tree entity and initializes it. |
| <Link id="m-generateruntimetreewithoutparent" /><code><Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" GenerateRunTimeTreeWithoutParent("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab, "}<Link to="/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" species, Vector3 position, Quaternion rotation, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Server: spawns a tree prefab of a species at a world position in a chunk. |
| <Link id="m-savefrom" /><code>{"void SaveFrom("}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> | Marks a tree to record. Its shape is written into the asset when Unity next serializes it. |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-handleeditorstep" /><code>{"private void HandleEditorStep("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree, "}<Link to="/game-api/types/alta-crafting/presettree-step">{"PresetTree.Step"}</Link>{" step, "}<Link to="/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" parent)"}</code> |
| <Link id="m-handlestep" /><code>{"private void HandleStep("}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree, "}<Link to="/game-api/types/alta-crafting/presettree-step">{"PresetTree.Step"}</Link>{" step, "}<Link to="/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" parent)"}</code> |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> |
| <Link id="m-spawnandinitwoodcuttree" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" SpawnAndInitWoodcutTree("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab, "}<Link to="/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" species)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PresetTree`:

[`TreeBuilder.preset`](/game-api/types/alta-crafting/treebuilder#m-preset), [`TreeBuilder.Preset`](/game-api/types/alta-crafting/treebuilder#m-preset-2), [`TreeSpawner.Spawn`](/game-api/types/alta-crafting/treespawner#m-spawn), [`WoodcutTree.spawnParticular`](/game-api/types/alta-crafting/woodcuttree#m-spawnparticular), [`WoodcutTree.SpawnParticular`](/game-api/types/alta-crafting/woodcuttree#m-spawnparticular-2), [`WoodcutTreeSaveData.preset`](/game-api/types/alta-crafting/woodcuttreesavedata#m-preset), [`WoodcutTreeSaveData1.preset`](/game-api/types/alta-crafting/woodcuttreesavedata1#m-preset), [`WoodcutTreeSaveData2.preset`](/game-api/types/alta-crafting/woodcuttreesavedata2#m-preset).
