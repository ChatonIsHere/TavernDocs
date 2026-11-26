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
| <Link id="m-ctor" /><code>{"NetworkPrefab()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-callbackorder" /><code>{"private List<int> callBackOrder"}</code> | <span className="api-desc">Order in which save indices were registered through `GetSpawnedChildren`; callbacks run in this order after loading.</span> |
| <Link id="m-canbespawnedthroughcommand" /><code>{"private bool canBeSpawnedThroughCommand"}</code> | <span className="api-desc">Backing field for `CanBeSpawnedThroughCommand`; cleared by `DisableSpawnThroughCommands`.</span> |
| <Link id="m-childcount" /><code>{"private int childCount"}</code> | <span className="api-desc">Backing field for the child count reported through `ISerializeChildren`.</span> |
| <Link id="m-childprefabaccumulation" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> childPrefabAccumulation"}</code> | <span className="api-desc">Static scratch list used while child prefabs are gathered for saving or loading.</span> |
| <Link id="m-childprefabs" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> childPrefabs"}</code> | <span className="api-desc">Backing field for the child prefab list reported through `ISerializeChildren`; rebuilt on each save.</span> |
| <Link id="m-childrencallback" /><code>{"private Dictionary<int, List<"}<Link to="/mod/game-api/types/alta-networking/networkprefabchildeventhandler">{"NetworkPrefabChildEventHandler"}</Link>{">> childrenCallback"}</code> | <span className="api-desc">Callbacks registered through `GetSpawnedChildren`, keyed by save index.</span> |
| <Link id="m-embeddedhashes" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedHashes"}</code> | <span className="api-desc">Embedded entities keyed by their hash; used by `GetEmbedded` and when loading saved embedded entities.</span> |
| <Link id="m-emptyindices" /><code>{"private HashSet<int> emptyIndices"}</code> | <span className="api-desc">Save indices marked empty with `AddEmptyChildAtIndex`, applied by `ProcessEmptyIndices`.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The `NetworkEntity` on the same object; backing field for `Entity`.</span> |
| <Link id="m-hash" /><code>{"private int hash"}</code> | <span className="api-desc">Backing field for `Hash`, the prefab hash used to spawn and save it. Validated in `OnValidate`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-positionsynclock" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/positionsyncblocker">{"PositionSyncBlocker"}</Link>{" positionSyncLock"}</code> | <span className="api-desc">Flags of the blockers currently stopping position sync; `IsSyncingPosition` is true when none are set.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canbespawnedthroughcommand-2" /><code>{"bool CanBeSpawnedThroughCommand { get; }"}</code> | <span className="api-desc">Whether the prefab shows up for the `spawn` console command.</span> |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The root `NetworkEntity` of the prefab.</span> |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">The prefab's unique hash. This is what spawn messages, saves and `PrefabManager` use to identify it.</span> |
| <Link id="m-isserveronly" /><code>{"bool IsServerOnly { get; set; }"}</code> | <span className="api-desc">Whether the prefab and its embedded entities are hidden from clients. Setting it true despawns them for every player; false spawns them for players in the chunk.</span> |
| <Link id="m-issyncingposition" /><code>{"bool IsSyncingPosition { get; }"}</code> | <span className="api-desc">False while any position sync blocker is set (for example while docked), so position updates aren't sent.</span> |
| <Link id="m-savemode" /><code><Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" { get; set; }"}</code> | <span className="api-desc">How this prefab saves: on its own (`Base`), as part of its parent (`Child`), not at all (`Ignore`), or with a player or creature.</span> |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> | <span className="api-desc">Static count of prefab instances currently alive.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-iserializechildren-childcount" /><code>{"private int Alta.Networking.ISerializeChildren.ChildCount { get; }"}</code> | <span className="api-desc">Number of child prefabs found for the save in progress.</span> |
| <Link id="m-alta-networking-iserializechildren-childprefabs" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> Alta.Networking.ISerializeChildren.ChildPrefabs { get; }"}</code> | <span className="api-desc">Child prefabs (with their parents) found for the save in progress.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-predestroyed" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/networkprefabeventhandler">{"NetworkPrefabEventHandler"}</Link>{" PreDestroyed"}</code> | <span className="api-desc">Raised just before the prefab is destroyed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablespawnthroughcommands" /><code>{"void DisableSpawnThroughCommands()"}</code> | <span className="api-desc">Hides this prefab from the `spawn` command.</span> |
| <Link id="m-getcomponentinprefab" /><code>{"T GetComponentInPrefab<T>()"}</code> | <span className="api-desc">First component of that type on the root entity or any embedded entity, without looking into separate child prefabs.</span> |
| <Link id="m-getcomponentsinprefab" /><code>{"IEnumerable<T> GetComponentsInPrefab<T>() (iterator)"}</code> | <span className="api-desc">All components of that type on the root entity and its embedded entities.</span> |
| <Link id="m-getembedded" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEmbedded(uint hash)"}</code> | <span className="api-desc">Finds an embedded entity by its hash, or null.</span> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Rebuilds the embedded entity hash lookup.</span> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-initializechildren" /><code>{"void InitializeChildren(uint[] embeddedIdentifiers)"}</code> | <span className="api-desc">Registers and initialises the embedded entities. The server assigns new ids; a client uses the ids sent in the spawn message.</span> |
| <Link id="m-initializechildrenbehaviours" /><code>{"void InitializeChildrenBehaviours()"}</code> | <span className="api-desc">Initialises the behaviours on every embedded entity.</span> |
| <Link id="m-lockpositionsync" /><code>{"void LockPositionSync("}<Link to="/mod/game-api/types/alta-networking/positionsyncblocker">{"PositionSyncBlocker"}</Link>{" blocker)"}</code> | <span className="api-desc">Adds a reason to stop syncing this prefab's position.</span> |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | <span className="api-desc">Server: tells a newly connected player about embedded entities that have been destroyed.</span> |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-onvalidate" /><code>{"override void OnValidate()"}</code> | <span className="api-desc">Makes sure the prefab has a valid hash.</span> |
| <Link id="m-predestroy" /><code>{"void PreDestroy()"}</code> | <span className="api-desc">Raises `PreDestroyed`, then detaches the entity from its parent and chunk.</span> |
| <Link id="m-saveserialize" /><code>{"void SaveSerialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | <span className="api-desc">Writes or reads the prefab's full save: its savable components, embedded entities and child prefabs with `SaveMode.Child`.</span> |
| <Link id="m-saveserializeempty" /><code>{"static void SaveSerializeEmpty("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | <span className="api-desc">Reads past a saved prefab without loading it, used when the saved prefab no longer exists.</span> |
| <Link id="m-unlockpositionsync" /><code>{"void UnlockPositionSync("}<Link to="/mod/game-api/types/alta-networking/positionsyncblocker">{"PositionSyncBlocker"}</Link>{" blocker)"}</code> | <span className="api-desc">Removes a reason added with `LockPositionSync`.</span> |
| <Link id="m-validateembeddedhashes" /><code>{"void ValidateEmbeddedHashes()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-updateentityembeddedids" /><code>{"protected override void UpdateEntityEmbeddedIds()"}</code> | <span className="api-desc">Refreshes the embedded entity ids and the hash to entity lookup.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatechildprefabs" /><code>{"private void AccumulateChildPrefabs("}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" parent)"}</code> | <span className="api-desc">Walks the entity's chunking children and collects every child prefab whose `SaveMode` is `Child`, so they are saved with this prefab.</span> |
| <Link id="m-addchild" /><code>{"private void Alta.Networking.ISerializeChildren.AddChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> | <span className="api-desc">Adds a child prefab and its parent to the list being saved; `PositionRestrictor` uses it to save items it holds.</span> |
| <Link id="m-addemptychildatindex" /><code>{"private void Alta.Networking.ISerializeChildren.AddEmptyChildAtIndex(int index)"}</code> | <span className="api-desc">During save loading, marks a child slot as empty so later child indices still line up; used by `PickupDock`.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Raises `SpawnedCount` and links each embedded entity to this prefab's entity as its parent.</span> |
| <Link id="m-getchildindex" /><code>{"private int Alta.Networking.ISerializeChildren.GetChildIndex("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> | <span className="api-desc">Returns the save index of a child prefab, or of the first child under a given parent entity, or -1. Lets behaviours save which child is theirs.</span> |
| <Link id="m-getchildindex-2" /><code>{"private int Alta.Networking.ISerializeChildren.GetChildIndex("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> | <span className="api-desc">Returns the save index of a child prefab, or of the first child under a given parent entity, or -1. Lets behaviours save which child is theirs.</span> |
| <Link id="m-getspawnedchildren" /><code>{"private void Alta.Networking.ISerializeChildren.GetSpawnedChildren(int index, "}<Link to="/mod/game-api/types/alta-networking/networkprefabchildeventhandler">{"NetworkPrefabChildEventHandler"}</Link>{" callback)"}</code> | <span className="api-desc">Registers a callback that runs once the child at a save index has been loaded; used by docks, populations and buildups to find their saved children again.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Lowers `SpawnedCount`.</span> |
| <Link id="m-processemptyindices" /><code>{"private void ProcessEmptyIndices()"}</code> | <span className="api-desc">Inserts null slots for indices marked with `AddEmptyChildAtIndex` so loaded children match their saved indices.</span> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | <span className="api-desc">Editor reset; runs `OnValidate` to give the prefab a hash.</span> |
| <Link id="m-saveserializeempty-2" /><code>{"private static void SaveSerializeEmpty("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads past a saved prefab without loading it, used when the saved prefab no longer exists.</span> |
| <Link id="m-saveserializeentity" /><code>{"private void SaveSerializeEntity("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, uint hash)"}</code> | <span className="api-desc">Saves or loads one embedded entity by hash, writing its size first so a missing entity's data can be skipped on load.</span> |
| <Link id="m-saveserializeentity-2" /><code>{"private void SaveSerializeEntity("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Saves or loads one embedded entity by hash, writing its size first so a missing entity's data can be skipped on load.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NetworkPrefab`:

<div className="api-used-in">

[`Smelter.MarkPlayersAction`](/mod/game-api/types/alta-crafting/smelter#m-markplayersaction), [`ChisellingDeck.blockMap`](/mod/game-api/types/alta-crafting/chisellingdeck#m-blockmap), [`ChisellingDeck.BuilderLevel.blockToSpawn`](/mod/game-api/types/alta-crafting/chisellingdeck-builderlevel#m-blocktospawn), [`ChisellingDeck.BuilderLevel.BlockToSpawn`](/mod/game-api/types/alta-crafting/chisellingdeck-builderlevel#m-blocktospawn-2), [`CaveTeleportSettings.fuelPrefab`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-fuelprefab), [`CaveTeleportSettings.FuelPrefab`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-fuelprefab-2), [`ConstrainedSpawnerDisplay.prefab`](/mod/game-api/types/alta-world-generation/constrainedspawnerdisplay#m-prefab), [`BasicObjectDisplay.prefabs`](/mod/game-api/types/alta-world-generation/basicobjectdisplay#m-prefabs), [`GeneralSettings.layerPrefab`](/mod/game-api/types/alta-world-generation/generalsettings#m-layerprefab), [`GeneralSettings.LayerPrefab`](/mod/game-api/types/alta-world-generation/generalsettings#m-layerprefab-2), [`StreamingSettings.caveStreamerPrefab`](/mod/game-api/types/alta-world-generation/streamingsettings#m-cavestreamerprefab), [`StreamingSettings.CaveStreamerPrefab`](/mod/game-api/types/alta-world-generation/streamingsettings#m-cavestreamerprefab-2), [`StreamingSettings.SpecialLayer.prefab`](/mod/game-api/types/alta-world-generation/streamingsettings-speciallayer#m-prefab), [`StreamerHelper.SerializePrefab`](/mod/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/mod/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`DebuggingCommandModule.Count`](/mod/game-api/types/alta-console/debuggingcommandmodule#m-count), [`PrefabInfoDump.op_Implicit`](/mod/game-api/types/alta-console/prefabinfodump#m-op-implicit), [`RepairBoxModule.SpawnBox`](/mod/game-api/types/alta-console/repairboxmodule#m-spawnbox), [`SelectionCommandModule.FindPrefab`](/mod/game-api/types/alta-console/selectioncommandmodule#m-findprefab), [`SpawnCommandModule.For`](/mod/game-api/types/alta-console/spawncommandmodule#m-for), [`SpawnCommandModule.Spawn`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawn), [`SpawnCommandModule.SpawnAtPosition`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnatposition), [`SpawnCommandModule.SpawnFull`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnfull), [`SpawnCommandModule.SpawnLocal`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnlocal), [`SpawnCommandModule.Moulds.DropPackage`](/mod/game-api/types/alta-console/spawncommandmodule-moulds#m-droppackage-2), [`TradeCommandModule.PostBox`](/mod/game-api/types/alta-console/tradecommandmodule#m-postbox), [`WackyCommandModule.DestroyAll`](/mod/game-api/types/alta-console/wackycommandmodule#m-destroyall), [`WackyCommandModule.DestroyBase`](/mod/game-api/types/alta-console/wackycommandmodule#m-destroybase), [`HashedItemInfo.op_Implicit`](/mod/game-api/types/alta-console/hashediteminfo#m-op-implicit-2), [`Cookable.burntVersion`](/mod/game-api/types/alta-crafting/cookable#m-burntversion), [`Cookable.cookedVersion`](/mod/game-api/types/alta-crafting/cookable#m-cookedversion), [`CookingSettings.nonRecipeStewPrefab`](/mod/game-api/types/alta-crafting/cookingsettings#m-nonrecipestewprefab), [`CookingSettings.NonRecipeStewPrefab`](/mod/game-api/types/alta-crafting/cookingsettings#m-nonrecipestewprefab-2), [`GenericCraftingRecipe.GetRecipe`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-getrecipe), [`ForestPopulationCreator.prefab`](/mod/game-api/types/alta-world-generation/forestpopulationcreator#m-prefab), [`PerChunkForestSpawner.prefab`](/mod/game-api/types/alta-world-generation/perchunkforestspawner#m-prefab), [`CutableObject.prefabToSpawnOnHit`](/mod/game-api/types/alta-items/cutableobject#m-prefabtospawnonhit), [`SeedSprayManager.prefab`](/mod/game-api/types/alta-intelligence/seedspraymanager#m-prefab), [`Item.Prefab`](/mod/game-api/types/alta-items/item#m-prefab), [`Lock.correctKeyPrefab`](/mod/game-api/types/alta-items/lock#m-correctkeyprefab), [`LockableHingeSaveData.lockPrefab`](/mod/game-api/types/alta-items/lockablehingesavedata#m-lockprefab), [`PersonalChunk.prefab`](/mod/game-api/types/alta-items/personalchunk#m-prefab), [`PickupDock.LoadDockPickup`](/mod/game-api/types/alta-items/pickupdock#m-loaddockpickup), [`DebugPackage.PrefabQuantity.prefab`](/mod/game-api/types/alta-world-generation/debugpackage-prefabquantity#m-prefab), [`DebugPackage.PrefabQuantity.Prefab`](/mod/game-api/types/alta-world-generation/debugpackage-prefabquantity#m-prefab-2), [`DebugPackage.PrefabQuantity.PrefabQuantity`](/mod/game-api/types/alta-world-generation/debugpackage-prefabquantity#m-ctor), [`ClientSpawnManager.CheckSpawnEvent`](/mod/game-api/types/alta-networking/clientspawnmanager#m-checkspawnevent), [`ClientSpawnManager.SpawnExisting`](/mod/game-api/types/alta-networking/clientspawnmanager#m-spawnexisting), [`INetworkEntity.Prefab`](/mod/game-api/types/alta-networking/inetworkentity#m-prefab), [`ISerializeChildren.AddChild`](/mod/game-api/types/alta-networking/iserializechildren#m-addchild), [`ISerializeChildren.GetChildIndex`](/mod/game-api/types/alta-networking/iserializechildren#m-getchildindex), [`NetworkEntity.prefab`](/mod/game-api/types/alta-networking/networkentity#m-prefab), [`NetworkEntity.Prefab`](/mod/game-api/types/alta-networking/networkentity#m-prefab-2), [`NetworkEntity.SpawnAndReplaceWith`](/mod/game-api/types/alta-networking/networkentity#m-spawnandreplacewith), [`NetworkPrefab.ChildPrefab.child`](/mod/game-api/types/alta-networking/networkprefab-childprefab#m-child), [`NetworkPrefab.ChildPrefab.ChildPrefab`](/mod/game-api/types/alta-networking/networkprefab-childprefab#m-ctor), [`NetworkPrefabChildEventHandler.BeginInvoke`](/mod/game-api/types/alta-networking/networkprefabchildeventhandler#m-begininvoke), [`NetworkPrefabChildEventHandler.Invoke`](/mod/game-api/types/alta-networking/networkprefabchildeventhandler#m-invoke), [`NetworkPrefabEventHandler.BeginInvoke`](/mod/game-api/types/alta-networking/networkprefabeventhandler#m-begininvoke), [`NetworkPrefabEventHandler.Invoke`](/mod/game-api/types/alta-networking/networkprefabeventhandler#m-invoke) and 127 more.

</div>
