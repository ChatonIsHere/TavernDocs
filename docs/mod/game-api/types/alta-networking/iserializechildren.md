---
title: "ISerializeChildren"
description: "Passed to ISavable load and save methods so a component can save and restore the child prefabs spawned under its entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISerializeChildren

An **interface** in `Root.Township`, `Alta.Networking`.

Passed to `ISavable` load and save methods so a component can save and restore the child prefabs spawned under its entity.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`NetworkPrefab`](/mod/game-api/types/alta-networking/networkprefab), [`EmptyChildrenSerializer`](/mod/game-api/types/global-e-h/emptychildrenserializer)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"int ChildCount { get; }"}</code> | Number of child entries. |
| <Link id="m-childprefabs" /><code>{"List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> ChildPrefabs { get; }"}</code> | The child prefab entries. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addchild" /><code>{"void AddChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> | Records a spawned child prefab under a parent entity. |
| <Link id="m-addemptychildatindex" /><code>{"void AddEmptyChildAtIndex(int index)"}</code> | Adds an empty placeholder at a child index. |
| <Link id="m-getchildindex" /><code>{"int GetChildIndex("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> | Index of a child entry, looked up by child prefab or by parent entity. |
| <Link id="m-getchildindex-2" /><code>{"int GetChildIndex("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> | Index of a child entry, looked up by child prefab or by parent entity. |
| <Link id="m-getspawnedchildren" /><code>{"void GetSpawnedChildren(int index, "}<Link to="/mod/game-api/types/alta-networking/networkprefabchildeventhandler">{"NetworkPrefabChildEventHandler"}</Link>{" callback)"}</code> | Calls back with the children spawned for the entry at an index. |

## Used in

Members of other types that take, return or hold a `ISerializeChildren`:

[`ISavableSave<T>.Save`](/mod/game-api/types/alta-world/isavablesave-outt#m-save), [`SaveData.Apply`](/mod/game-api/types/alta-world/savedata#m-apply), [`SavingSystem.Load`](/mod/game-api/types/alta-world/savingsystem#m-load), [`SavingSystem.Serialize`](/mod/game-api/types/alta-world/savingsystem#m-serialize), [`SavingSystem.Write`](/mod/game-api/types/alta-world/savingsystem#m-write), [`SavingSystem.SavingSetup.Save`](/mod/game-api/types/alta-world/savingsystem-savingsetup#m-save), [`SavingSystem.SavingSetup.SaveInternal`](/mod/game-api/types/alta-world/savingsystem-savingsetup#m-saveinternal), [`TaxManager.Load`](/mod/game-api/types/alta-crafting/taxmanager#m-load), [`TaxManager.Save`](/mod/game-api/types/alta-crafting/taxmanager#m-save), [`TradeVendor.Load`](/mod/game-api/types/alta-crafting/tradevendor#m-load), [`TradeVendor.Save`](/mod/game-api/types/alta-crafting/tradevendor#m-save), [`GymnasiumOnDemandPrefabSpawner.Load`](/mod/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-load), [`GymnasiumOnDemandPrefabSpawner.Save`](/mod/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-save), [`PoweredRespawnShrine.Load`](/mod/game-api/types/game-other-namespaces/poweredrespawnshrine#m-load), [`PoweredRespawnShrine.Save`](/mod/game-api/types/game-other-namespaces/poweredrespawnshrine#m-save), [`RespawnSystem.Load`](/mod/game-api/types/game-other-namespaces/respawnsystem#m-load), [`RespawnSystem.Save`](/mod/game-api/types/game-other-namespaces/respawnsystem#m-save), [`BasicSaveData<TData>.Apply`](/mod/game-api/types/global-a-b/basicsavedata-tdata#m-apply), [`ButtonCounter.Load`](/mod/game-api/types/global-a-b/buttoncounter#m-load), [`ButtonCounter.Save`](/mod/game-api/types/global-a-b/buttoncounter#m-save), [`ClimbingTowerProgressionVisualizer.Load`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-load), [`ClimbingTowerProgressionVisualizer.Save`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-save), [`OrbBasinVfxController.Load`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-load), [`OrbBasinVfxController.Save`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-save), [`ParticlesToPlayer.Load`](/mod/game-api/types/game-other-namespaces/particlestoplayer#m-load), [`ParticlesToPlayer.Save`](/mod/game-api/types/game-other-namespaces/particlestoplayer#m-save), [`ISavable<T>.Load`](/mod/game-api/types/global-i-l/isavable-t#m-load), [`NewSaveData<TSavable, TData>.Apply`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata#m-apply), [`OldSaveData.Apply`](/mod/game-api/types/global-m-o/oldsavedata#m-apply), [`Tracker.Load`](/mod/game-api/types/global-t-x/tracker#m-load), [`Tracker.Save`](/mod/game-api/types/global-t-x/tracker#m-save).
