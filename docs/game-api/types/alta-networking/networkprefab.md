---
title: "NetworkPrefab"
description: "Root component of a spawnable networked prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkPrefab

A **class** in `Root.Township`, `Alta.Networking`.

Root component of a spawnable networked prefab. It holds the prefab hash used to spawn and save it, its embedded child entities, and how it saves (`SaveMode`). Sits next to the root `NetworkEntity`; reach it with `entity.Prefab` or `PrefabRoot.Prefab`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityParent`](/game-api/types/alta-networking/networkentityparent), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour), [`ISerializeChildren`](/game-api/types/alta-networking/iserializechildren)
- **Derived types** [`TypeSerializationHelper.NetworkPrefabSerialization`](/game-api/types/global-t-x/typeserializationhelper-networkprefabserialization)
- **Nested types** [`ChildPrefab`](/game-api/types/alta-networking/networkprefab-childprefab)
- **Attributes** `TypeConverter`, `DisallowMultipleComponent`, `SelectionBase`
- **Documented in** [Prefabs and prefab hashes](/game-api/world/prefabs#networkprefab), [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkPrefab()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-callbackorder" /><code>{"private List<int> callBackOrder"}</code> |
| <Link id="m-canbespawnedthroughcommand" /><code>{"private bool canBeSpawnedThroughCommand"}</code> |
| <Link id="m-childcount" /><code>{"private int childCount"}</code> |
| <Link id="m-childprefabaccumulation" /><code>{"private static List<"}<Link to="/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> childPrefabAccumulation"}</code> |
| <Link id="m-childprefabs" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> childPrefabs"}</code> |
| <Link id="m-childrencallback" /><code>{"private Dictionary<int, List<"}<Link to="/game-api/types/alta-networking/networkprefabchildeventhandler">{"NetworkPrefabChildEventHandler"}</Link>{">> childrenCallback"}</code> |
| <Link id="m-embeddedhashes" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedHashes"}</code> |
| <Link id="m-emptyindices" /><code>{"private HashSet<int> emptyIndices"}</code> |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |
| <Link id="m-hash" /><code>{"private int hash"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-positionsynclock" /><code>{"private "}<Link to="/game-api/types/alta-networking/positionsyncblocker">{"PositionSyncBlocker"}</Link>{" positionSyncLock"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canbespawnedthroughcommand-2" /><code>{"bool CanBeSpawnedThroughCommand { get; }"}</code> | Whether the prefab shows up for the `spawn` console command. |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The root `NetworkEntity` of the prefab. |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | The prefab's unique hash. This is what spawn messages, saves and `PrefabManager` use to identify it. |
| <Link id="m-isserveronly" /><code>{"bool IsServerOnly { get; set; }"}</code> | Whether the prefab and its embedded entities are hidden from clients. Setting it true despawns them for every player; false spawns them for players in the chunk. |
| <Link id="m-issyncingposition" /><code>{"bool IsSyncingPosition { get; }"}</code> | False while any position sync blocker is set (for example while docked), so position updates aren't sent. |
| <Link id="m-savemode" /><code><Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" { get; set; }"}</code> | How this prefab saves: on its own (`Base`), as part of its parent (`Child`), not at all (`Ignore`), or with a player or creature. |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> | Static count of prefab instances currently alive. |

<details>
<summary>2 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-alta-networking-iserializechildren-childcount" /><code>{"private int Alta.Networking.ISerializeChildren.ChildCount { get; }"}</code> |
| <Link id="m-alta-networking-iserializechildren-childprefabs" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> Alta.Networking.ISerializeChildren.ChildPrefabs { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-predestroyed" /><code>{"event "}<Link to="/game-api/types/alta-networking/networkprefabeventhandler">{"NetworkPrefabEventHandler"}</Link>{" PreDestroyed"}</code> | Raised just before the prefab is destroyed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablespawnthroughcommands" /><code>{"void DisableSpawnThroughCommands()"}</code> | Hides this prefab from the `spawn` command. |
| <Link id="m-getcomponentinprefab" /><code>{"T GetComponentInPrefab<T>()"}</code> | First component of that type on the root entity or any embedded entity, without looking into separate child prefabs. |
| <Link id="m-getcomponentsinprefab" /><code>{"IEnumerable<T> GetComponentsInPrefab<T>() (iterator)"}</code> | All components of that type on the root entity and its embedded entities. |
| <Link id="m-getembedded" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEmbedded(uint hash)"}</code> | Finds an embedded entity by its hash, or null. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Rebuilds the embedded entity hash lookup. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Does nothing. |
| <Link id="m-initializechildren" /><code>{"void InitializeChildren(uint[] embeddedIdentifiers)"}</code> | Registers and initialises the embedded entities. The server assigns new ids; a client uses the ids sent in the spawn message. |
| <Link id="m-initializechildrenbehaviours" /><code>{"void InitializeChildrenBehaviours()"}</code> | Initialises the behaviours on every embedded entity. |
| <Link id="m-lockpositionsync" /><code>{"void LockPositionSync("}<Link to="/game-api/types/alta-networking/positionsyncblocker">{"PositionSyncBlocker"}</Link>{" blocker)"}</code> | Adds a reason to stop syncing this prefab's position. |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | Server: tells a newly connected player about embedded entities that have been destroyed. |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | Does nothing. |
| <Link id="m-onvalidate" /><code>{"override void OnValidate()"}</code> | Makes sure the prefab has a valid hash. |
| <Link id="m-predestroy" /><code>{"void PreDestroy()"}</code> | Raises `PreDestroyed`, then detaches the entity from its parent and chunk. |
| <Link id="m-saveserialize" /><code>{"void SaveSerialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | Writes or reads the prefab's full save: its savable components, embedded entities and child prefabs with `SaveMode.Child`. |
| <Link id="m-saveserializeempty" /><code>{"static void SaveSerializeEmpty("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | Reads past a saved prefab without loading it, used when the saved prefab no longer exists. |
| <Link id="m-unlockpositionsync" /><code>{"void UnlockPositionSync("}<Link to="/game-api/types/alta-networking/positionsyncblocker">{"PositionSyncBlocker"}</Link>{" blocker)"}</code> | Removes a reason added with `LockPositionSync`. |
| <Link id="m-validateembeddedhashes" /><code>{"void ValidateEmbeddedHashes()"}</code> | Empty in this build. |
| <Link id="m-updateentityembeddedids" /><code>{"protected override void UpdateEntityEmbeddedIds()"}</code> | Refreshes the embedded entity ids and the hash to entity lookup. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatechildprefabs" /><code>{"private void AccumulateChildPrefabs("}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" parent)"}</code> |  |
| <Link id="m-addchild" /><code>{"private void Alta.Networking.ISerializeChildren.AddChild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> |  |
| <Link id="m-addemptychildatindex" /><code>{"private void Alta.Networking.ISerializeChildren.AddEmptyChildAtIndex(int index)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-getchildindex" /><code>{"private int Alta.Networking.ISerializeChildren.GetChildIndex("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> |  |
| <Link id="m-getchildindex-2" /><code>{"private int Alta.Networking.ISerializeChildren.GetChildIndex("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> |  |
| <Link id="m-getspawnedchildren" /><code>{"private void Alta.Networking.ISerializeChildren.GetSpawnedChildren(int index, "}<Link to="/game-api/types/alta-networking/networkprefabchildeventhandler">{"NetworkPrefabChildEventHandler"}</Link>{" callback)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-processemptyindices" /><code>{"private void ProcessEmptyIndices()"}</code> |  |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> |  |
| <Link id="m-saveserializeempty-2" /><code>{"private static void SaveSerializeEmpty("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads past a saved prefab without loading it, used when the saved prefab no longer exists. |
| <Link id="m-saveserializeentity" /><code>{"private void SaveSerializeEntity("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, uint hash)"}</code> |  |
| <Link id="m-saveserializeentity-2" /><code>{"private void SaveSerializeEntity("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |

</details>

## Used in

Members of other types that take, return or hold a `NetworkPrefab`:

[`Smelter.MarkPlayersAction`](/game-api/types/alta-crafting/smelter#m-markplayersaction), [`ChisellingDeck.blockMap`](/game-api/types/alta-crafting/chisellingdeck#m-blockmap), [`ChisellingDeck.BuilderLevel.blockToSpawn`](/game-api/types/alta-crafting/chisellingdeck-builderlevel#m-blocktospawn), [`ChisellingDeck.BuilderLevel.BlockToSpawn`](/game-api/types/alta-crafting/chisellingdeck-builderlevel#m-blocktospawn-2), [`CaveTeleportSettings.fuelPrefab`](/game-api/types/alta-world-generation/caveteleportsettings#m-fuelprefab), [`CaveTeleportSettings.FuelPrefab`](/game-api/types/alta-world-generation/caveteleportsettings#m-fuelprefab-2), [`ConstrainedSpawnerDisplay.prefab`](/game-api/types/alta-world-generation/constrainedspawnerdisplay#m-prefab), [`BasicObjectDisplay.prefabs`](/game-api/types/alta-world-generation/basicobjectdisplay#m-prefabs), [`GeneralSettings.layerPrefab`](/game-api/types/alta-world-generation/generalsettings#m-layerprefab), [`GeneralSettings.LayerPrefab`](/game-api/types/alta-world-generation/generalsettings#m-layerprefab-2), [`StreamingSettings.caveStreamerPrefab`](/game-api/types/alta-world-generation/streamingsettings#m-cavestreamerprefab), [`StreamingSettings.CaveStreamerPrefab`](/game-api/types/alta-world-generation/streamingsettings#m-cavestreamerprefab-2), [`StreamingSettings.SpecialLayer.prefab`](/game-api/types/alta-world-generation/streamingsettings-speciallayer#m-prefab), [`StreamerHelper.SerializePrefab`](/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`DebuggingCommandModule.Count`](/game-api/types/alta-console/debuggingcommandmodule#m-count), [`PrefabInfoDump.op_Implicit`](/game-api/types/alta-console/prefabinfodump#m-op-implicit), [`RepairBoxModule.SpawnBox`](/game-api/types/alta-console/repairboxmodule#m-spawnbox), [`SelectionCommandModule.FindPrefab`](/game-api/types/alta-console/selectioncommandmodule#m-findprefab), [`SpawnCommandModule.For`](/game-api/types/alta-console/spawncommandmodule#m-for), [`SpawnCommandModule.Spawn`](/game-api/types/alta-console/spawncommandmodule#m-spawn), [`SpawnCommandModule.SpawnAtPosition`](/game-api/types/alta-console/spawncommandmodule#m-spawnatposition), [`SpawnCommandModule.SpawnFull`](/game-api/types/alta-console/spawncommandmodule#m-spawnfull), [`SpawnCommandModule.SpawnLocal`](/game-api/types/alta-console/spawncommandmodule#m-spawnlocal), [`SpawnCommandModule.Moulds.DropPackage`](/game-api/types/alta-console/spawncommandmodule-moulds#m-droppackage-2), [`TradeCommandModule.PostBox`](/game-api/types/alta-console/tradecommandmodule#m-postbox), [`WackyCommandModule.DestroyAll`](/game-api/types/alta-console/wackycommandmodule#m-destroyall), [`WackyCommandModule.DestroyBase`](/game-api/types/alta-console/wackycommandmodule#m-destroybase), [`HashedItemInfo.op_Implicit`](/game-api/types/alta-console/hashediteminfo#m-op-implicit-2), [`Cookable.burntVersion`](/game-api/types/alta-crafting/cookable#m-burntversion), [`Cookable.cookedVersion`](/game-api/types/alta-crafting/cookable#m-cookedversion), [`CookingSettings.nonRecipeStewPrefab`](/game-api/types/alta-crafting/cookingsettings#m-nonrecipestewprefab), [`CookingSettings.NonRecipeStewPrefab`](/game-api/types/alta-crafting/cookingsettings#m-nonrecipestewprefab-2), [`GenericCraftingRecipe.GetRecipe`](/game-api/types/alta-crafting/genericcraftingrecipe#m-getrecipe), [`ForestPopulationCreator.prefab`](/game-api/types/alta-world-generation/forestpopulationcreator#m-prefab), [`PerChunkForestSpawner.prefab`](/game-api/types/alta-world-generation/perchunkforestspawner#m-prefab), [`CutableObject.prefabToSpawnOnHit`](/game-api/types/alta-items/cutableobject#m-prefabtospawnonhit), [`SeedSprayManager.prefab`](/game-api/types/alta-intelligence/seedspraymanager#m-prefab), [`Item.Prefab`](/game-api/types/alta-items/item#m-prefab), [`Lock.correctKeyPrefab`](/game-api/types/alta-items/lock#m-correctkeyprefab), [`LockableHingeSaveData.lockPrefab`](/game-api/types/alta-items/lockablehingesavedata#m-lockprefab), [`PersonalChunk.prefab`](/game-api/types/alta-items/personalchunk#m-prefab), [`PickupDock.LoadDockPickup`](/game-api/types/alta-items/pickupdock#m-loaddockpickup), [`DebugPackage.PrefabQuantity.prefab`](/game-api/types/alta-world-generation/debugpackage-prefabquantity#m-prefab), [`DebugPackage.PrefabQuantity.Prefab`](/game-api/types/alta-world-generation/debugpackage-prefabquantity#m-prefab-2), [`DebugPackage.PrefabQuantity.PrefabQuantity`](/game-api/types/alta-world-generation/debugpackage-prefabquantity#m-ctor), [`ClientSpawnManager.CheckSpawnEvent`](/game-api/types/alta-networking/clientspawnmanager#m-checkspawnevent), [`ClientSpawnManager.SpawnExisting`](/game-api/types/alta-networking/clientspawnmanager#m-spawnexisting), [`INetworkEntity.Prefab`](/game-api/types/alta-networking/inetworkentity#m-prefab), [`ISerializeChildren.AddChild`](/game-api/types/alta-networking/iserializechildren#m-addchild), [`ISerializeChildren.GetChildIndex`](/game-api/types/alta-networking/iserializechildren#m-getchildindex), [`NetworkEntity.prefab`](/game-api/types/alta-networking/networkentity#m-prefab), [`NetworkEntity.Prefab`](/game-api/types/alta-networking/networkentity#m-prefab-2), [`NetworkEntity.SpawnAndReplaceWith`](/game-api/types/alta-networking/networkentity#m-spawnandreplacewith), [`NetworkPrefab.ChildPrefab.child`](/game-api/types/alta-networking/networkprefab-childprefab#m-child), [`NetworkPrefab.ChildPrefab.ChildPrefab`](/game-api/types/alta-networking/networkprefab-childprefab#m-ctor), [`NetworkPrefabChildEventHandler.BeginInvoke`](/game-api/types/alta-networking/networkprefabchildeventhandler#m-begininvoke), [`NetworkPrefabChildEventHandler.Invoke`](/game-api/types/alta-networking/networkprefabchildeventhandler#m-invoke), [`NetworkPrefabEventHandler.BeginInvoke`](/game-api/types/alta-networking/networkprefabeventhandler#m-begininvoke), [`NetworkPrefabEventHandler.Invoke`](/game-api/types/alta-networking/networkprefabeventhandler#m-invoke) and 127 more.
