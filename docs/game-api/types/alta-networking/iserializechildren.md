---
title: "ISerializeChildren"
description: "interface ISerializeChildren in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISerializeChildren

An **interface** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`NetworkPrefab`](/game-api/types/alta-networking/networkprefab), [`EmptyChildrenSerializer`](/game-api/types/global-e-h/emptychildrenserializer)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"int ChildCount { get; }"}</code> |  |
| <Link id="m-childprefabs" /><code>{"List<"}<Link to="/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> ChildPrefabs { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addchild" /><code>{"void AddChild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> |  |
| <Link id="m-addemptychildatindex" /><code>{"void AddEmptyChildAtIndex(int index)"}</code> |  |
| <Link id="m-getchildindex" /><code>{"int GetChildIndex("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> |  |
| <Link id="m-getchildindex-2" /><code>{"int GetChildIndex("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> |  |
| <Link id="m-getspawnedchildren" /><code>{"void GetSpawnedChildren(int index, "}<Link to="/game-api/types/alta-networking/networkprefabchildeventhandler">{"NetworkPrefabChildEventHandler"}</Link>{" callback)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ISerializeChildren`:

[`ISavableSave<T>.Save`](/game-api/types/alta-world/isavablesave-outt#m-save), [`SaveData.Apply`](/game-api/types/alta-world/savedata#m-apply), [`SavingSystem.Load`](/game-api/types/alta-world/savingsystem#m-load), [`SavingSystem.Serialize`](/game-api/types/alta-world/savingsystem#m-serialize), [`SavingSystem.Write`](/game-api/types/alta-world/savingsystem#m-write), [`SavingSystem.SavingSetup.Save`](/game-api/types/alta-world/savingsystem-savingsetup#m-save), [`SavingSystem.SavingSetup.SaveInternal`](/game-api/types/alta-world/savingsystem-savingsetup#m-saveinternal), [`TaxManager.Load`](/game-api/types/alta-crafting/taxmanager#m-load), [`TaxManager.Save`](/game-api/types/alta-crafting/taxmanager#m-save), [`TradeVendor.Load`](/game-api/types/alta-crafting/tradevendor#m-load), [`TradeVendor.Save`](/game-api/types/alta-crafting/tradevendor#m-save), [`GymnasiumOnDemandPrefabSpawner.Load`](/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-load), [`GymnasiumOnDemandPrefabSpawner.Save`](/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-save), [`PoweredRespawnShrine.Load`](/game-api/types/game-other-namespaces/poweredrespawnshrine#m-load), [`PoweredRespawnShrine.Save`](/game-api/types/game-other-namespaces/poweredrespawnshrine#m-save), [`RespawnSystem.Load`](/game-api/types/game-other-namespaces/respawnsystem#m-load), [`RespawnSystem.Save`](/game-api/types/game-other-namespaces/respawnsystem#m-save), [`BasicSaveData<TData>.Apply`](/game-api/types/global-a-b/basicsavedata-tdata#m-apply), [`ButtonCounter.Load`](/game-api/types/global-a-b/buttoncounter#m-load), [`ButtonCounter.Save`](/game-api/types/global-a-b/buttoncounter#m-save), [`ClimbingTowerProgressionVisualizer.Load`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-load), [`ClimbingTowerProgressionVisualizer.Save`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-save), [`OrbBasinVfxController.Load`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-load), [`OrbBasinVfxController.Save`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-save), [`ParticlesToPlayer.Load`](/game-api/types/game-other-namespaces/particlestoplayer#m-load), [`ParticlesToPlayer.Save`](/game-api/types/game-other-namespaces/particlestoplayer#m-save), [`ISavable<T>.Load`](/game-api/types/global-i-l/isavable-t#m-load), [`NewSaveData<TSavable, TData>.Apply`](/game-api/types/global-m-o/newsavedata-tsavable-tdata#m-apply), [`OldSaveData.Apply`](/game-api/types/global-m-o/oldsavedata#m-apply), [`Tracker.Load`](/game-api/types/global-t-x/tracker#m-load), [`Tracker.Save`](/game-api/types/global-t-x/tracker#m-save).
