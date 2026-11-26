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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityParent`](/mod/game-api/types/alta-networking/networkentityparent), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour), [`ISerializeChildren`](/mod/game-api/types/alta-networking/iserializechildren)
- **Derived types** [`TypeSerializationHelper.NetworkPrefabSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-networkprefabserialization)
- **Nested types** [`ChildPrefab`](/mod/game-api/types/alta-networking/networkprefab-childprefab)
- **Attributes** `TypeConverter`, `DisallowMultipleComponent`, `SelectionBase`
- **Documented in** [Prefabs and prefab hashes](/mod/game-api/world/prefabs#networkprefab), [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkPrefab()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-callbackorder" /><code>{"private List<int> callBackOrder"}</code> | Order in which save indices were registered through `GetSpawnedChildren`; callbacks run in this order after loading. |
| <Link id="m-canbespawnedthroughcommand" /><code>{"private bool canBeSpawnedThroughCommand"}</code> | Backing field for `CanBeSpawnedThroughCommand`; cleared by `DisableSpawnThroughCommands`. |
| <Link id="m-childcount" /><code>{"private int childCount"}</code> | Backing field for the child count reported through `ISerializeChildren`. |
| <Link id="m-childprefabaccumulation" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> childPrefabAccumulation"}</code> | Static scratch list used while child prefabs are gathered for saving or loading. |
| <Link id="m-childprefabs" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> childPrefabs"}</code> | Backing field for the child prefab list reported through `ISerializeChildren`; rebuilt on each save. |
| <Link id="m-childrencallback" /><code>{"private Dictionary<int, List<"}<Link to="/mod/game-api/types/alta-networking/networkprefabchildeventhandler">{"NetworkPrefabChildEventHandler"}</Link>{">> childrenCallback"}</code> | Callbacks registered through `GetSpawnedChildren`, keyed by save index. |
| <Link id="m-embeddedhashes" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedHashes"}</code> | Embedded entities keyed by their hash; used by `GetEmbedded` and when loading saved embedded entities. |
| <Link id="m-emptyindices" /><code>{"private HashSet<int> emptyIndices"}</code> | Save indices marked empty with `AddEmptyChildAtIndex`, applied by `ProcessEmptyIndices`. |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The `NetworkEntity` on the same object; backing field for `Entity`. |
| <Link id="m-hash" /><code>{"private int hash"}</code> | Backing field for `Hash`, the prefab hash used to spawn and save it. Validated in `OnValidate`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-positionsynclock" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/positionsyncblocker">{"PositionSyncBlocker"}</Link>{" positionSyncLock"}</code> | Flags of the blockers currently stopping position sync; `IsSyncingPosition` is true when none are set. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canbespawnedthroughcommand-2" /><code>{"bool CanBeSpawnedThroughCommand { get; }"}</code> | Whether the prefab shows up for the `spawn` console command. |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The root `NetworkEntity` of the prefab. |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | The prefab's unique hash. This is what spawn messages, saves and `PrefabManager` use to identify it. |
| <Link id="m-isserveronly" /><code>{"bool IsServerOnly { get; set; }"}</code> | Whether the prefab and its embedded entities are hidden from clients. Setting it true despawns them for every player; false spawns them for players in the chunk. |
| <Link id="m-issyncingposition" /><code>{"bool IsSyncingPosition { get; }"}</code> | False while any position sync blocker is set (for example while docked), so position updates aren't sent. |
| <Link id="m-savemode" /><code><Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" { get; set; }"}</code> | How this prefab saves: on its own (`Base`), as part of its parent (`Child`), not at all (`Ignore`), or with a player or creature. |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> | Static count of prefab instances currently alive. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-iserializechildren-childcount" /><code>{"private int Alta.Networking.ISerializeChildren.ChildCount { get; }"}</code> | Number of child prefabs found for the save in progress. |
| <Link id="m-alta-networking-iserializechildren-childprefabs" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> Alta.Networking.ISerializeChildren.ChildPrefabs { get; }"}</code> | Child prefabs (with their parents) found for the save in progress. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-predestroyed" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/networkprefabeventhandler">{"NetworkPrefabEventHandler"}</Link>{" PreDestroyed"}</code> | Raised just before the prefab is destroyed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablespawnthroughcommands" /><code>{"void DisableSpawnThroughCommands()"}</code> | Hides this prefab from the `spawn` command. |
| <Link id="m-getcomponentinprefab" /><code>{"T GetComponentInPrefab<T>()"}</code> | First component of that type on the root entity or any embedded entity, without looking into separate child prefabs. |
| <Link id="m-getcomponentsinprefab" /><code>{"IEnumerable<T> GetComponentsInPrefab<T>() (iterator)"}</code> | All components of that type on the root entity and its embedded entities. |
| <Link id="m-getembedded" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEmbedded(uint hash)"}</code> | Finds an embedded entity by its hash, or null. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Rebuilds the embedded entity hash lookup. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Does nothing. |
| <Link id="m-initializechildren" /><code>{"void InitializeChildren(uint[] embeddedIdentifiers)"}</code> | Registers and initialises the embedded entities. The server assigns new ids; a client uses the ids sent in the spawn message. |
| <Link id="m-initializechildrenbehaviours" /><code>{"void InitializeChildrenBehaviours()"}</code> | Initialises the behaviours on every embedded entity. |
| <Link id="m-lockpositionsync" /><code>{"void LockPositionSync("}<Link to="/mod/game-api/types/alta-networking/positionsyncblocker">{"PositionSyncBlocker"}</Link>{" blocker)"}</code> | Adds a reason to stop syncing this prefab's position. |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | Server: tells a newly connected player about embedded entities that have been destroyed. |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | Does nothing. |
| <Link id="m-onvalidate" /><code>{"override void OnValidate()"}</code> | Makes sure the prefab has a valid hash. |
| <Link id="m-predestroy" /><code>{"void PreDestroy()"}</code> | Raises `PreDestroyed`, then detaches the entity from its parent and chunk. |
| <Link id="m-saveserialize" /><code>{"void SaveSerialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | Writes or reads the prefab's full save: its savable components, embedded entities and child prefabs with `SaveMode.Child`. |
| <Link id="m-saveserializeempty" /><code>{"static void SaveSerializeEmpty("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | Reads past a saved prefab without loading it, used when the saved prefab no longer exists. |
| <Link id="m-unlockpositionsync" /><code>{"void UnlockPositionSync("}<Link to="/mod/game-api/types/alta-networking/positionsyncblocker">{"PositionSyncBlocker"}</Link>{" blocker)"}</code> | Removes a reason added with `LockPositionSync`. |
| <Link id="m-validateembeddedhashes" /><code>{"void ValidateEmbeddedHashes()"}</code> | Empty in this build. |
| <Link id="m-updateentityembeddedids" /><code>{"protected override void UpdateEntityEmbeddedIds()"}</code> | Refreshes the embedded entity ids and the hash to entity lookup. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatechildprefabs" /><code>{"private void AccumulateChildPrefabs("}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" parent)"}</code> | Walks the entity's chunking children and collects every child prefab whose `SaveMode` is `Child`, so they are saved with this prefab. |
| <Link id="m-addchild" /><code>{"private void Alta.Networking.ISerializeChildren.AddChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> | Adds a child prefab and its parent to the list being saved; `PositionRestrictor` uses it to save items it holds. |
| <Link id="m-addemptychildatindex" /><code>{"private void Alta.Networking.ISerializeChildren.AddEmptyChildAtIndex(int index)"}</code> | During save loading, marks a child slot as empty so later child indices still line up; used by `PickupDock`. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Raises `SpawnedCount` and links each embedded entity to this prefab's entity as its parent. |
| <Link id="m-getchildindex" /><code>{"private int Alta.Networking.ISerializeChildren.GetChildIndex("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> | Returns the save index of a child prefab, or of the first child under a given parent entity, or -1. Lets behaviours save which child is theirs. |
| <Link id="m-getchildindex-2" /><code>{"private int Alta.Networking.ISerializeChildren.GetChildIndex("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> | Returns the save index of a child prefab, or of the first child under a given parent entity, or -1. Lets behaviours save which child is theirs. |
| <Link id="m-getspawnedchildren" /><code>{"private void Alta.Networking.ISerializeChildren.GetSpawnedChildren(int index, "}<Link to="/mod/game-api/types/alta-networking/networkprefabchildeventhandler">{"NetworkPrefabChildEventHandler"}</Link>{" callback)"}</code> | Registers a callback that runs once the child at a save index has been loaded; used by docks, populations and buildups to find their saved children again. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Lowers `SpawnedCount`. |
| <Link id="m-processemptyindices" /><code>{"private void ProcessEmptyIndices()"}</code> | Inserts null slots for indices marked with `AddEmptyChildAtIndex` so loaded children match their saved indices. |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | Editor reset; runs `OnValidate` to give the prefab a hash. |
| <Link id="m-saveserializeempty-2" /><code>{"private static void SaveSerializeEmpty("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads past a saved prefab without loading it, used when the saved prefab no longer exists. |
| <Link id="m-saveserializeentity" /><code>{"private void SaveSerializeEntity("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, uint hash)"}</code> | Saves or loads one embedded entity by hash, writing its size first so a missing entity's data can be skipped on load. |
| <Link id="m-saveserializeentity-2" /><code>{"private void SaveSerializeEntity("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Saves or loads one embedded entity by hash, writing its size first so a missing entity's data can be skipped on load. |

</details>

## Used in

Members of other types that take, return or hold a `NetworkPrefab`:

[`Smelter.MarkPlayersAction`](/mod/game-api/types/alta-crafting/smelter#m-markplayersaction), [`ChisellingDeck.blockMap`](/mod/game-api/types/alta-crafting/chisellingdeck#m-blockmap), [`ChisellingDeck.BuilderLevel.blockToSpawn`](/mod/game-api/types/alta-crafting/chisellingdeck-builderlevel#m-blocktospawn), [`ChisellingDeck.BuilderLevel.BlockToSpawn`](/mod/game-api/types/alta-crafting/chisellingdeck-builderlevel#m-blocktospawn-2), [`CaveTeleportSettings.fuelPrefab`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-fuelprefab), [`CaveTeleportSettings.FuelPrefab`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-fuelprefab-2), [`ConstrainedSpawnerDisplay.prefab`](/mod/game-api/types/alta-world-generation/constrainedspawnerdisplay#m-prefab), [`BasicObjectDisplay.prefabs`](/mod/game-api/types/alta-world-generation/basicobjectdisplay#m-prefabs), [`GeneralSettings.layerPrefab`](/mod/game-api/types/alta-world-generation/generalsettings#m-layerprefab), [`GeneralSettings.LayerPrefab`](/mod/game-api/types/alta-world-generation/generalsettings#m-layerprefab-2), [`StreamingSettings.caveStreamerPrefab`](/mod/game-api/types/alta-world-generation/streamingsettings#m-cavestreamerprefab), [`StreamingSettings.CaveStreamerPrefab`](/mod/game-api/types/alta-world-generation/streamingsettings#m-cavestreamerprefab-2), [`StreamingSettings.SpecialLayer.prefab`](/mod/game-api/types/alta-world-generation/streamingsettings-speciallayer#m-prefab), [`StreamerHelper.SerializePrefab`](/mod/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/mod/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`DebuggingCommandModule.Count`](/mod/game-api/types/alta-console/debuggingcommandmodule#m-count), [`PrefabInfoDump.op_Implicit`](/mod/game-api/types/alta-console/prefabinfodump#m-op-implicit), [`RepairBoxModule.SpawnBox`](/mod/game-api/types/alta-console/repairboxmodule#m-spawnbox), [`SelectionCommandModule.FindPrefab`](/mod/game-api/types/alta-console/selectioncommandmodule#m-findprefab), [`SpawnCommandModule.For`](/mod/game-api/types/alta-console/spawncommandmodule#m-for), [`SpawnCommandModule.Spawn`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawn), [`SpawnCommandModule.SpawnAtPosition`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnatposition), [`SpawnCommandModule.SpawnFull`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnfull), [`SpawnCommandModule.SpawnLocal`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnlocal), [`SpawnCommandModule.Moulds.DropPackage`](/mod/game-api/types/alta-console/spawncommandmodule-moulds#m-droppackage-2), [`TradeCommandModule.PostBox`](/mod/game-api/types/alta-console/tradecommandmodule#m-postbox), [`WackyCommandModule.DestroyAll`](/mod/game-api/types/alta-console/wackycommandmodule#m-destroyall), [`WackyCommandModule.DestroyBase`](/mod/game-api/types/alta-console/wackycommandmodule#m-destroybase), [`HashedItemInfo.op_Implicit`](/mod/game-api/types/alta-console/hashediteminfo#m-op-implicit-2), [`Cookable.burntVersion`](/mod/game-api/types/alta-crafting/cookable#m-burntversion), [`Cookable.cookedVersion`](/mod/game-api/types/alta-crafting/cookable#m-cookedversion), [`CookingSettings.nonRecipeStewPrefab`](/mod/game-api/types/alta-crafting/cookingsettings#m-nonrecipestewprefab), [`CookingSettings.NonRecipeStewPrefab`](/mod/game-api/types/alta-crafting/cookingsettings#m-nonrecipestewprefab-2), [`GenericCraftingRecipe.GetRecipe`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-getrecipe), [`ForestPopulationCreator.prefab`](/mod/game-api/types/alta-world-generation/forestpopulationcreator#m-prefab), [`PerChunkForestSpawner.prefab`](/mod/game-api/types/alta-world-generation/perchunkforestspawner#m-prefab), [`CutableObject.prefabToSpawnOnHit`](/mod/game-api/types/alta-items/cutableobject#m-prefabtospawnonhit), [`SeedSprayManager.prefab`](/mod/game-api/types/alta-intelligence/seedspraymanager#m-prefab), [`Item.Prefab`](/mod/game-api/types/alta-items/item#m-prefab), [`Lock.correctKeyPrefab`](/mod/game-api/types/alta-items/lock#m-correctkeyprefab), [`LockableHingeSaveData.lockPrefab`](/mod/game-api/types/alta-items/lockablehingesavedata#m-lockprefab), [`PersonalChunk.prefab`](/mod/game-api/types/alta-items/personalchunk#m-prefab), [`PickupDock.LoadDockPickup`](/mod/game-api/types/alta-items/pickupdock#m-loaddockpickup), [`DebugPackage.PrefabQuantity.prefab`](/mod/game-api/types/alta-world-generation/debugpackage-prefabquantity#m-prefab), [`DebugPackage.PrefabQuantity.Prefab`](/mod/game-api/types/alta-world-generation/debugpackage-prefabquantity#m-prefab-2), [`DebugPackage.PrefabQuantity.PrefabQuantity`](/mod/game-api/types/alta-world-generation/debugpackage-prefabquantity#m-ctor), [`ClientSpawnManager.CheckSpawnEvent`](/mod/game-api/types/alta-networking/clientspawnmanager#m-checkspawnevent), [`ClientSpawnManager.SpawnExisting`](/mod/game-api/types/alta-networking/clientspawnmanager#m-spawnexisting), [`INetworkEntity.Prefab`](/mod/game-api/types/alta-networking/inetworkentity#m-prefab), [`ISerializeChildren.AddChild`](/mod/game-api/types/alta-networking/iserializechildren#m-addchild), [`ISerializeChildren.GetChildIndex`](/mod/game-api/types/alta-networking/iserializechildren#m-getchildindex), [`NetworkEntity.prefab`](/mod/game-api/types/alta-networking/networkentity#m-prefab), [`NetworkEntity.Prefab`](/mod/game-api/types/alta-networking/networkentity#m-prefab-2), [`NetworkEntity.SpawnAndReplaceWith`](/mod/game-api/types/alta-networking/networkentity#m-spawnandreplacewith), [`NetworkPrefab.ChildPrefab.child`](/mod/game-api/types/alta-networking/networkprefab-childprefab#m-child), [`NetworkPrefab.ChildPrefab.ChildPrefab`](/mod/game-api/types/alta-networking/networkprefab-childprefab#m-ctor), [`NetworkPrefabChildEventHandler.BeginInvoke`](/mod/game-api/types/alta-networking/networkprefabchildeventhandler#m-begininvoke), [`NetworkPrefabChildEventHandler.Invoke`](/mod/game-api/types/alta-networking/networkprefabchildeventhandler#m-invoke), [`NetworkPrefabEventHandler.BeginInvoke`](/mod/game-api/types/alta-networking/networkprefabeventhandler#m-begininvoke), [`NetworkPrefabEventHandler.Invoke`](/mod/game-api/types/alta-networking/networkprefabeventhandler#m-invoke) and 127 more.
