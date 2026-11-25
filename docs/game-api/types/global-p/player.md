---
title: "Player"
description: "A NetworkEntity, and it implements IPlayer (Alta.Networking.Scripts.Player)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Player

A **class** in `Root.Township`, no namespace.

A `NetworkEntity`, and it implements `IPlayer` (`Alta.Networking.Scripts.Player`).

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntity`](/game-api/types/alta-networking/networkentity), [`IPlatformPlayer`](/game-api/types/global-i-l/iplatformplayer), [`IPlayer`](/game-api/types/alta-networking/iplayer), [`INetworkEntity`](/game-api/types/alta-networking/inetworkentity)
- **Attributes** `TypeConverter`
- **Documented in** [Player](/game-api/networking/player), [Arguments and results](/game-api/console-and-utilities/arguments-and-results), [Prefabs and prefab hashes](/game-api/world/prefabs)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Player()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-associatedobjects" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> associatedObjects"}</code> |  |
| <Link id="m-current" /><code>{"private static "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" current"}</code> |  |
| <Link id="m-eventsmanager" /><code>{"private "}<Link to="/game-api/types/global-p/playereventsmanager">{"PlayerEventsManager"}</Link>{" eventsManager"}</code> |  |
| <Link id="m-isstarted" /><code>{"private bool isStarted"}</code> |  |
| <Link id="m-leftplayerinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" leftPlayerInput"}</code> |  |
| <Link id="m-loadstatustask" /><code>{"private TaskCompletionSource<bool> loadStatusTask"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-lookup" /><code>{"private static readonly Dictionary<int, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> lookup"}</code> |  |
| <Link id="m-platformtarget" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget"}</code> |  |
| <Link id="m-playercomponents" /><code>{"private "}<Link to="/game-api/types/global-p/playercomponent">{"PlayerComponent"}</Link>{"[] playerComponents"}</code> |  |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> |  |
| <Link id="m-playermode" /><code>{"private "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode"}</code> |  |
| <Link id="m-progressionmanager" /><code>{"private "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" progressionManager"}</code> |  |
| <Link id="m-respawnpositionprovider" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider">{"IPlayerRespawnPositionProvider"}</Link>{" respawnPositionProvider"}</code> |  |
| <Link id="m-rightplayerinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" rightPlayerInput"}</code> |  |
| <Link id="m-saveblockers" /><code>{"private readonly HashSet<object> saveBlockers"}</code> |  |
| <Link id="m-savedata" /><code>{"private "}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" saveData"}</code> |  |
| <Link id="m-savefile" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" saveFile"}</code> |  |
| <Link id="m-setlocal" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" setLocal"}</code> |  |
| <Link id="m-statemanager" /><code>{"private "}<Link to="/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" stateManager"}</code> |  |
| <Link id="m-synccosmetics" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCosmetics"}</code> |  |
| <Link id="m-synclastsafeposition" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Vector3> syncLastSafePosition"}</code> |  |
| <Link id="m-syncloadstatus" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncLoadStatus"}</code> |  |
| <Link id="m-syncmodecontrolleranduserinfowithremote" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncModeControllerAndUserInfoWithRemote"}</code> |  |
| <Link id="m-unlockmanager" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> |  |
| <Link id="m-validsavingmodes" /><code>{"private "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" validSavingModes"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allplayers" /><code>{"static HashSet<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> AllPlayers { get; }"}</code> |  |
| <Link id="m-chunkmanager" /><code><Link to="/game-api/types/global-p/playerchunkmanager">{"PlayerChunkManager"}</Link>{" ChunkManager { get; private set; }"}</code> |  |
| <Link id="m-connectiontoremoteplayer" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" ConnectionToRemotePlayer { get; private set; }"}</code> |  |
| <Link id="m-current-2" /><code>{"static "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Current { get; }"}</code> |  |
| <Link id="m-customization" /><code><Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Customization { get; }"}</code> |  |
| <Link id="m-damagedisplayer" /><code><Link to="/game-api/types/global-c-d/damagedisplayer">{"DamageDisplayer"}</Link>{" "}<Link to="/game-api/types/global-c-d/damagedisplayer">{"DamageDisplayer"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-friendshipmanager" /><code><Link to="/game-api/types/global-e-h/friendshipmanager">{"FriendshipManager"}</Link>{" "}<Link to="/game-api/types/global-e-h/friendshipmanager">{"FriendshipManager"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; set; }"}</code> |  |
| <Link id="m-islocalplayer" /><code>{"bool IsLocalPlayer { get; }"}</code> |  |
| <Link id="m-issavingblocked" /><code>{"bool IsSavingBlocked { get; }"}</code> |  |
| <Link id="m-leftinput" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" LeftInput { get; }"}</code> |  |
| <Link id="m-loadedchunks" /><code>{"HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> LoadedChunks { get; }"}</code> |  |
| <Link id="m-platformtarget-2" /><code><Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-playercharacter" /><code><Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" { get; }"}</code> |  |
| <Link id="m-playercontroller-2" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-playereventsmanager" /><code><Link to="/game-api/types/global-p/playereventsmanager">{"PlayerEventsManager"}</Link>{" "}<Link to="/game-api/types/global-p/playereventsmanager">{"PlayerEventsManager"}</Link>{" { get; }"}</code> |  |
| <Link id="m-playermode-2" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-playertransform" /><code>{"Transform PlayerTransform { get; }"}</code> |  |
| <Link id="m-position" /><code>{"Vector3? Position { get; set; }"}</code> |  |
| <Link id="m-progressionmanager-2" /><code><Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" ProgressionManager { get; }"}</code> |  |
| <Link id="m-rightinput" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" RightInput { get; }"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" Save { get; }"}</code> |  |
| <Link id="m-statemanager-2" /><code><Link to="/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" StateManager { get; }"}</code> |  |
| <Link id="m-unityobjectname" /><code>{"string UnityObjectName { get; }"}</code> |  |
| <Link id="m-unlockmanager-2" /><code><Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" UnlockManager { get; }"}</code> |  |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" UserInfo { get; private set; }"}</code> |  |
| <Link id="m-voice" /><code>{"IParticipant Voice { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedloadingcontroller" /><code>{"event Action<"}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{"> FinishedLoadingController"}</code> |  |
| <Link id="m-loadcomplete" /><code>{"event Action LoadComplete"}</code> |  |
| <Link id="m-localplayerset" /><code>{"static event "}<Link to="/game-api/types/global-p/playerhandler">{"PlayerHandler"}</Link>{" LocalPlayerSet"}</code> |  |
| <Link id="m-onplayeradded" /><code>{"static event Action<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> OnPlayerAdded"}</code> |  |
| <Link id="m-onplayerremoved" /><code>{"static event Action<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> OnPlayerRemoved"}</code> |  |
| <Link id="m-platformchanged" /><code>{"event "}<Link to="/game-api/types/global-p/platformhandler">{"PlatformHandler"}</Link>{" PlatformChanged"}</code> |  |
| <Link id="m-playercontrollerset" /><code>{"event "}<Link to="/game-api/types/global-p/playercontrollerhandler">{"PlayerControllerHandler"}</Link>{" PlayerControllerSet"}</code> |  |
| <Link id="m-playersystemchanged" /><code>{"event "}<Link to="/game-api/types/global-p/playersystemhandler">{"PlayerSystemHandler"}</Link>{" PlayerSystemChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsaveblocker" /><code>{"void AddSaveBlocker(object blocker)"}</code> |  |
| <Link id="m-addtoassociatedobjects" /><code>{"void AddToAssociatedObjects("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-destroyplayercontrollerandoldentities" /><code>{"void DestroyPlayerControllerAndOldEntities(bool isUndocking, bool isUnloading)"}</code> |  |
| <Link id="m-destroywithassociatedobjects" /><code>{"void DestroyWithAssociatedObjects()"}</code> |  |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Get(int userId)"}</code> |  |
| <Link id="m-getplayer" /><code>{"static "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" GetPlayer(int playerId)"}</code> |  |
| <Link id="m-getplayer-2" /><code>{"static "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" GetPlayer(string playerName)"}</code> |  |
| <Link id="m-getspawnposition" /><code>{"Vector3 GetSpawnPosition(bool isRespawning)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, uint identifier, uint[] embeddedIdentifiers, bool isInitializingBehaviours)"}</code> |  |
| <Link id="m-initializeplayeronserver" /><code>{"async Task InitializePlayerOnServer("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget, "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" saveFile)"}</code> |  |
| <Link id="m-isinsavablestate" /><code>{"bool IsInSavableState(bool isSavingIfDead = false)"}</code> |  |
| <Link id="m-isonserver" /><code>{"static bool IsOnServer(int playerId)"}</code> |  |
| <Link id="m-kick" /><code>{"void Kick(string reason)"}</code> |  |
| <Link id="m-linkplayercontrollertoplayer" /><code>{"void LinkPlayerControllerToPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, bool isSettingControllerOwner = true)"}</code> |  |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-removesaveblocker" /><code>{"void RemoveSaveBlocker(object blocker)"}</code> |  |
| <Link id="m-safegetplayer" /><code>{"static bool SafeGetPlayer(int playerId, out "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" result)"}</code> |  |
| <Link id="m-safemovetochunk" /><code>{"async void SafeMoveToChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, Vector3 controllerPosition, Action callback)"}</code> |  |
| <Link id="m-saveall" /><code>{"static void SaveAll()"}</code> |  |
| <Link id="m-savecontrollerandstate" /><code>{"void SaveControllerAndState(bool isSavingIfDead = false)"}</code> |  |
| <Link id="m-sendlastsafepositiontoclient" /><code>{"void SendLastSafePositionToClient(Vector3 newLastSafePosition)"}</code> |  |
| <Link id="m-sendlastsafepositiontoserver" /><code>{"void SendLastSafePositionToServer(Vector3 newLastSafePosition)"}</code> |  |
| <Link id="m-setlocal-3" /><code>{"void SetLocal()"}</code> |  |
| <Link id="m-spawnnewcontroller" /><code>{"async Task SpawnNewController("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controllerPrefab, bool isRespawn)"}</code> |  |
| <Link id="m-spawnnewcontrolleratpointinchunk" /><code>{"async Task SpawnNewControllerAtPointInChunk("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controllerPrefab, "}<Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" spawnPoint, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, bool isLoadingSave = true)"}</code> |  |
| <Link id="m-startup" /><code>{"void StartUp()"}</code> |  |
| <Link id="m-synccosmeticstoothers" /><code>{"void SyncCosmeticsToOthers()"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |
| <Link id="m-unlinkplayercontroller" /><code>{"void UnlinkPlayerController()"}</code> |  |
| <Link id="m-writesave" /><code>{"void WriteSave(bool isUnloading)"}</code> |  |
| <Link id="m-awaitremoteclienttoloadchunk" /><code>{"private async Task AwaitRemoteClientToLoadChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, Vector3 positionInChunk)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-delayupdatefriendship" /><code>{"private void DelayUpdateFriendShip()"}</code> |  |
| <Link id="m-getdefaultspawnchunkandupdateposition" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetDefaultSpawnChunkAndUpdatePosition(ref Vector3 spawnPosition)"}</code> |  |
| <Link id="m-getplayersave" /><code>{"private "}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" GetPlayerSave()"}</code> |  |
| <Link id="m-getplayertransform" /><code>{"private Transform GetPlayerTransform()"}</code> |  |
| <Link id="m-getrespawnpoint" /><code>{"private Vector3 GetRespawnPoint()"}</code> |  |
| <Link id="m-getserverjoinspawnpoint" /><code>{"private Vector3 GetServerJoinSpawnPoint()"}</code> |  |
| <Link id="m-handleinteractor" /><code>{"private void HandleInteractor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-handlestateactivation" /><code>{"private void HandleStateActivation("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |  |
| <Link id="m-handlestatedeactivation" /><code>{"private void HandleStateDeactivation("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |  |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider">{"IPlayerRespawnPositionProvider"}</Link>{" respawnPositionProvider)"}</code> |  |
| <Link id="m-invokeplayercontrollersetlisteners" /><code>{"private void InvokePlayerControllerSetListeners()"}</code> |  |
| <Link id="m-listenforstatechanges" /><code>{"private void ListenForStateChanges("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" localPlayer)"}</code> |  |
| <Link id="m-loadcosmetics" /><code>{"private async Task LoadCosmetics()"}</code> |  |
| <Link id="m-loadplayercontrollerfromsave" /><code>{"private void LoadPlayerControllerFromSave(Vector3 spawnPosition)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisconnectedfromplatform" /><code>{"private void IPlatformPlayer.OnDisconnectedFromPlatform()"}</code> |  |
| <Link id="m-replyfullyloaded" /><code>{"private void ReplyFullyLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-replynoqueuedmessages" /><code>{"private void ReplyNoQueuedMessages()"}</code> |  |
| <Link id="m-setcurrent" /><code>{"private void SetCurrent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-setlocal-2" /><code>{"private void SetLocal("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-setplatformtarget" /><code>{"private void SetPlatformTarget("}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" target)"}</code> |  |
| <Link id="m-setplayercontroller" /><code>{"private void SetPlayerController("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> |  |
| <Link id="m-setplayermode" /><code>{"private void SetPlayerMode("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode)"}</code> |  |
| <Link id="m-spawncontroller" /><code>{"private void SpawnController("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controllerPrefab, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, Vector3 spawnPosition, bool isLoadingSave = true)"}</code> |  |
| <Link id="m-spawnnewcontrolleratpointinchunk-2" /><code>{"private async Task SpawnNewControllerAtPointInChunk("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controllerPrefab, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, Vector3 spawnPosition, bool isLoadingSave = true)"}</code> |  |
| <Link id="m-startplayermodeplatform" /><code>{"private IEnumerator StartPlayerModePlatform() (iterator)"}</code> |  |
| <Link id="m-synccosmetics-2" /><code>{"private async void SyncCosmetics("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-synclastsafeposition-2" /><code>{"private void SyncLastSafePosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Vector3 lastSafePosition)"}</code> |  |
| <Link id="m-syncloadstatus-2" /><code>{"private void SyncLoadStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint chunkIndex)"}</code> |  |
| <Link id="m-syncmodecontrolleranduserinfowithremote-2" /><code>{"private void SyncModeControllerAndUserInfoWithRemote("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Player`:

[`ActionItem.OnConnected`](/game-api/types/global-a-b/actionitem#m-onconnected), [`AdditionalStaticContent.OnConnected`](/game-api/types/global-a-b/additionalstaticcontent#m-onconnected), [`AfkTimer.PlayerControllerSet`](/game-api/types/global-a-b/afktimer#m-playercontrollerset), [`AfkTimer.PlayerJoined`](/game-api/types/global-a-b/afktimer#m-playerjoined), [`AfkTimer.PlayerLeft`](/game-api/types/global-a-b/afktimer#m-playerleft), [`AfkTimer.ResetTimeout`](/game-api/types/global-a-b/afktimer#m-resettimeout), [`AfkTimer.StopTimeout`](/game-api/types/global-a-b/afktimer#m-stoptimeout), [`AfkTimer.timeouts`](/game-api/types/global-a-b/afktimer#m-timeouts), [`AfkTimer.WaitForTimeout`](/game-api/types/global-a-b/afktimer#m-waitfortimeout), [`ForgedModel<TB, TA>.OnConnected`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-onconnected), [`Recycler.OnConnected`](/game-api/types/alta-crafting/recycler#m-onconnected), [`Smelter.OnConnected`](/game-api/types/alta-crafting/smelter#m-onconnected), [`Smelter.smeltingPlayers`](/game-api/types/alta-crafting/smelter#m-smeltingplayers), [`ChisellingDeck.OnConnected`](/game-api/types/alta-crafting/chisellingdeck#m-onconnected), [`TimberBlock.OnConnected`](/game-api/types/alta-crafting/timberblock#m-onconnected), [`TimberBlock.ReleaseResult`](/game-api/types/alta-crafting/timberblock#m-releaseresult), [`TimberBlockSpawner.OnConnected`](/game-api/types/alta-crafting/timberblockspawner#m-onconnected), [`TimberPieceBase.LastHittingPlayerController`](/game-api/types/alta-crafting/timberpiecebase#m-lasthittingplayercontroller), [`CaveLayerManager.OnConnected`](/game-api/types/alta-world-generation/cavelayermanager#m-onconnected), [`CaveTeleporter.OnConnected`](/game-api/types/alta-world-generation/caveteleporter#m-onconnected), [`CaveTeleporterManager.OnConnected`](/game-api/types/alta-world-generation/caveteleportermanager#m-onconnected), [`GenerationBase.OnConnected`](/game-api/types/alta-world-generation/generationbase#m-onconnected), [`PlayerCharacter.OnConnected`](/game-api/types/alta-player/playercharacter#m-onconnected), [`CaveLayerChunk.PlayerEnteredChunk`](/game-api/types/alta-world/cavelayerchunk#m-playerenteredchunk), [`CaveLayerStreamer.OnConnected`](/game-api/types/alta-world/cavelayerstreamer#m-onconnected), [`Chunk.OnConnected`](/game-api/types/alta-world/chunk#m-onconnected), [`ChunkEntityManager.CompareFeet`](/game-api/types/alta-world/chunkentitymanager#m-comparefeet), [`ChunkPlayerManager.Add`](/game-api/types/alta-world/chunkplayermanager#m-add), [`ChunkPlayerManager.ItemAdded`](/game-api/types/alta-world/chunkplayermanager#m-itemadded), [`ChunkPlayerManager.ItemRemoved`](/game-api/types/alta-world/chunkplayermanager#m-itemremoved), [`ChunkPlayerManager.Items`](/game-api/types/alta-world/chunkplayermanager#m-items), [`ChunkPlayerManager.OnItemAdded`](/game-api/types/alta-world/chunkplayermanager#m-onitemadded), [`ChunkPlayerManager.OnItemRemoved`](/game-api/types/alta-world/chunkplayermanager#m-onitemremoved), [`ChunkPlayerManager.players`](/game-api/types/alta-world/chunkplayermanager#m-players), [`ChunkPlayerManager.Remove`](/game-api/types/alta-world/chunkplayermanager#m-remove), [`ChunkSync.InitializeAndStart`](/game-api/types/alta-world/chunksync#m-initializeandstart), [`ChunkSync.player`](/game-api/types/alta-world/chunksync#m-player), [`ChunkSync.Player`](/game-api/types/alta-world/chunksync#m-player-2), [`ChunkSync.Start`](/game-api/types/alta-world/chunksync#m-start), [`LocationChunk.PlayerEnteredChunk`](/game-api/types/alta-world/locationchunk#m-playerenteredchunk), [`PlayerEntitySyncServer.gradualSync`](/game-api/types/alta-world/playerentitysyncserver#m-gradualsync), [`PlayerEntitySyncServer.LoadForPlayer`](/game-api/types/alta-world/playerentitysyncserver#m-loadforplayer), [`PlayerEntitySyncServer.StartSync`](/game-api/types/alta-world/playerentitysyncserver#m-startsync), [`PlayerEntitySyncServer.StopSync`](/game-api/types/alta-world/playerentitysyncserver#m-stopsync), [`PlayerEntitySyncServer.UnloadForPlayer`](/game-api/types/alta-world/playerentitysyncserver#m-unloadforplayer), [`StaticCaveChunk.OnConnected`](/game-api/types/alta-world/staticcavechunk#m-onconnected), [`DebuggingCommandModule.SpawnLoadMarker`](/game-api/types/alta-console/debuggingcommandmodule#m-spawnloadmarker), [`DebuggingCommandModule.SpawnQASet`](/game-api/types/alta-console/debuggingcommandmodule#m-spawnqaset), [`RepairBoxModule.SpawnBox`](/game-api/types/alta-console/repairboxmodule#m-spawnbox), [`SelectionCommandModule.FindObjects`](/game-api/types/alta-console/selectioncommandmodule#m-findobjects), [`SelectionCommandModule.FindPrefab`](/game-api/types/alta-console/selectioncommandmodule#m-findprefab), [`SelectionCommandModule.LookAt`](/game-api/types/alta-console/selectioncommandmodule#m-lookat), [`SpawnCommandModule.SpawnPopulation`](/game-api/types/alta-console/spawncommandmodule#m-spawnpopulation), [`WackyCommandModule.UnveilMap`](/game-api/types/alta-console/wackycommandmodule#m-unveilmap), [`CookingGarnishComponent.Alta.Cooking.ICookingGarnishMarker.CookingPlayer`](/game-api/types/alta-crafting/cookinggarnishcomponent#m-alta-cooking-icookinggarnishmarker-cookingplayer), [`ICookingGarnishMarker.CookingPlayer`](/game-api/types/alta-crafting/icookinggarnishmarker#m-cookingplayer), [`StewManager.cookingPlayers`](/game-api/types/alta-crafting/stewmanager#m-cookingplayers), [`StewManager.OnConnected`](/game-api/types/alta-crafting/stewmanager#m-onconnected), [`ConfirmationCraftingPart.OnConnected`](/game-api/types/alta-crafting/confirmationcraftingpart#m-onconnected), [`GenericAssemblyStation.OnConnected`](/game-api/types/alta-crafting/genericassemblystation#m-onconnected) and 331 more.
