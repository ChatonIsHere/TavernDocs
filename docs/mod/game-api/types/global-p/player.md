---
title: "Player"
description: "The network entity for a connected player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Player

A **class** in `Root.Township`, the global namespace.

The network entity for a connected player. It is not the body: it holds the account, save, states, progression and inputs, and links to the current `PlayerController`. Both sides; find one with `Player.AllPlayers`, `Player.Get(userId)` or `Player.Current` on a client.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntity`](/mod/game-api/types/alta-networking/networkentity), [`IPlatformPlayer`](/mod/game-api/types/global-i-l/iplatformplayer), [`IPlayer`](/mod/game-api/types/alta-networking/iplayer), [`INetworkEntity`](/mod/game-api/types/alta-networking/inetworkentity)
- **Attributes** `TypeConverter`
- **Documented in** [Player](/mod/game-api/networking/player), [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results), [Prefabs and prefab hashes](/mod/game-api/world/prefabs)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Player()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>26 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-associatedobjects" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> associatedObjects"}</code> | Entities spawned for this player (such as the controller) that are destroyed with it in `DestroyPlayerControllerAndOldEntities`. |
| <Link id="m-current" /><code>{"private static "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" current"}</code> | Backing field for `Current`, the local player. |
| <Link id="m-eventsmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playereventsmanager">{"PlayerEventsManager"}</Link>{" eventsManager"}</code> | Backing field for `PlayerEventsManager`. |
| <Link id="m-isstarted" /><code>{"private bool isStarted"}</code> | Set by `StartUp` so the server only loads the player's save or default state once. |
| <Link id="m-leftplayerinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" leftPlayerInput"}</code> | Backing field for `LeftInput`. |
| <Link id="m-loadstatustask" /><code>{"private TaskCompletionSource<bool> loadStatusTask"}</code> | Server: completed when the client answers the chunk load handshake in `SyncLoadStatus`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-lookup" /><code>{"private static readonly Dictionary<int, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> lookup"}</code> | Players by user ID, read by the static `Get`. |
| <Link id="m-platformtarget" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget"}</code> | Backing field for `PlatformTarget`. |
| <Link id="m-playercomponents" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercomponent">{"PlayerComponent"}</Link>{"[] playerComponents"}</code> | `PlayerComponent`s on this object, each initialised with the player in `Awake`. |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | Backing field for `PlayerController`. |
| <Link id="m-playermode" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode"}</code> | Backing field for `PlayerMode`. |
| <Link id="m-progressionmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" progressionManager"}</code> | Backing field for `ProgressionManager`. |
| <Link id="m-respawnpositionprovider" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider">{"IPlayerRespawnPositionProvider"}</Link>{" respawnPositionProvider"}</code> | Injected provider that picks the respawn position. |
| <Link id="m-rightplayerinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" rightPlayerInput"}</code> | Backing field for `RightInput`. |
| <Link id="m-saveblockers" /><code>{"private readonly HashSet<object> saveBlockers"}</code> | Objects currently blocking saves; while it isn't empty, `IsSavingBlocked` is true. |
| <Link id="m-savedata" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" saveData"}</code> | The player's loaded `PlayerSave`, exposed through `Save`. |
| <Link id="m-savefile" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" saveFile"}</code> | Server: the player's save file. With no save file the player is never in a savable state. |
| <Link id="m-setlocal" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" setLocal"}</code> | Message sync that tells a client this player entity is its local player. |
| <Link id="m-statemanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" stateManager"}</code> | Backing field for `StateManager`. |
| <Link id="m-synccosmetics" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCosmetics"}</code> | Message sync for `SyncCosmetics`. |
| <Link id="m-synclastsafeposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Vector3> syncLastSafePosition"}</code> | Message sync for `SyncLastSafePosition`. |
| <Link id="m-syncloadstatus" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncLoadStatus"}</code> | Message sync for `SyncLoadStatus`. |
| <Link id="m-syncmodecontrolleranduserinfowithremote" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncModeControllerAndUserInfoWithRemote"}</code> | Message sync for `SyncModeControllerAndUserInfoWithRemote`. |
| <Link id="m-unlockmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> | Backing field for `UnlockManager`. |
| <Link id="m-validsavingmodes" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" validSavingModes"}</code> | Serialized player mode flags. Not read anywhere in the code. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allplayers" /><code>{"static HashSet<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> AllPlayers { get; }"}</code> | Every player entity in the scene, on both sides. |
| <Link id="m-chunkmanager" /><code><Link to="/mod/game-api/types/global-p/playerchunkmanager">{"PlayerChunkManager"}</Link>{" ChunkManager { get; private set; }"}</code> | The player's `PlayerChunkManager`, which loads chunks around them. Created on the server at initialize. |
| <Link id="m-connectiontoremoteplayer" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" ConnectionToRemotePlayer { get; private set; }"}</code> | Server: the network connection to this player. Null on clients. |
| <Link id="m-current-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Current { get; }"}</code> | Client: the local player. Null on a dedicated server. |
| <Link id="m-customization" /><code><Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Customization { get; }"}</code> | The player's cosmetics, loaded from their save. |
| <Link id="m-damagedisplayer" /><code><Link to="/mod/game-api/types/global-c-d/damagedisplayer">{"DamageDisplayer"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/damagedisplayer">{"DamageDisplayer"}</Link>{" { get; private set; }"}</code> | Tracks damage this player has dealt, for debug displays. |
| <Link id="m-friendshipmanager" /><code><Link to="/mod/game-api/types/global-e-h/friendshipmanager">{"FriendshipManager"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/friendshipmanager">{"FriendshipManager"}</Link>{" { get; }"}</code> | Tracks this player's friends. |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; set; }"}</code> | Client: false while the local player waits for its chunk to finish loading (screen faded out), set by `PlayerController.WaitForChunkLoad`. |
| <Link id="m-islocalplayer" /><code>{"bool IsLocalPlayer { get; }"}</code> | True on a client for the player it controls. |
| <Link id="m-issavingblocked" /><code>{"bool IsSavingBlocked { get; }"}</code> | True while any save blocker is held. |
| <Link id="m-leftinput" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" LeftInput { get; }"}</code> | The left hand's `PlayerInput`. |
| <Link id="m-loadedchunks" /><code>{"HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> LoadedChunks { get; }"}</code> | Server: the chunks currently loaded for this player, kept by each chunk's player manager. |
| <Link id="m-platformtarget-2" /><code><Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" { get; set; }"}</code> | The platform the player is on. Setting it raises `PlayerSystemChanged`. |
| <Link id="m-playercharacter" /><code><Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" { get; }"}</code> | The current body as a `PlayerCharacter`. A hard cast. |
| <Link id="m-playercontroller-2" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; private set; }"}</code> | The body the player controls, or null between spawns. Setting it raises `PlayerControllerSet`. |
| <Link id="m-playereventsmanager" /><code><Link to="/mod/game-api/types/global-p/playereventsmanager">{"PlayerEventsManager"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playereventsmanager">{"PlayerEventsManager"}</Link>{" { get; }"}</code> | The player's event hub component. |
| <Link id="m-playermode-2" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; set; }"}</code> | How the player joined (VR, fly, autocam and so on). |
| <Link id="m-playertransform" /><code>{"Transform PlayerTransform { get; }"}</code> | The body's transform, or the player entity's own if there's no body. |
| <Link id="m-position" /><code>{"Vector3? Position { get; set; }"}</code> | Cached head position, refreshed by `AgentUpdater` for AI use, or null when the player has no controller. |
| <Link id="m-progressionmanager-2" /><code><Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" ProgressionManager { get; }"}</code> | The player's skills and progression. |
| <Link id="m-rightinput" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" RightInput { get; }"}</code> | The right hand's `PlayerInput`. |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" Save { get; }"}</code> | Server: the player's `PlayerSave` in memory, created at join if they had none. Null on clients. |
| <Link id="m-statemanager-2" /><code><Link to="/mod/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" StateManager { get; }"}</code> | The player's state stack. |
| <Link id="m-unityobjectname" /><code>{"string UnityObjectName { get; }"}</code> | The GameObject's name. |
| <Link id="m-unlockmanager-2" /><code><Link to="/mod/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" UnlockManager { get; }"}</code> | Which unlocks the player has. |
| <Link id="m-userinfo" /><code><Link to="/mod/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" UserInfo { get; private set; }"}</code> | The player's account id, username and member status. |
| <Link id="m-voice" /><code>{"IParticipant Voice { get; set; }"}</code> | The player's Vivox voice participant. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedloadingcontroller" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{"> FinishedLoadingController"}</code> | Raised on the server after a new body is spawned and linked. |
| <Link id="m-loadcomplete" /><code>{"event Action LoadComplete"}</code> | Raised after `LoadFrom` has restored the entity, states and progression. |
| <Link id="m-localplayerset" /><code>{"static event "}<Link to="/mod/game-api/types/global-p/playerhandler">{"PlayerHandler"}</Link>{" LocalPlayerSet"}</code> | Static. Raised on a client when the local player is known. |
| <Link id="m-onplayeradded" /><code>{"static event Action<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> OnPlayerAdded"}</code> | Static. Raised when a player entity is initialized. |
| <Link id="m-onplayerremoved" /><code>{"static event Action<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> OnPlayerRemoved"}</code> | Static. Raised when a player entity is destroyed. |
| <Link id="m-platformchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-p/platformhandler">{"PlatformHandler"}</Link>{" PlatformChanged"}</code> | Raised when `PlayerMode` changes, with the new mode. |
| <Link id="m-playercontrollerset" /><code>{"event "}<Link to="/mod/game-api/types/global-p/playercontrollerhandler">{"PlayerControllerHandler"}</Link>{" PlayerControllerSet"}</code> | Raised when the body is linked or unlinked. Exceptions in handlers are caught and logged. |
| <Link id="m-playersystemchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-p/playersystemhandler">{"PlayerSystemHandler"}</Link>{" PlayerSystemChanged"}</code> | Raised when `PlatformTarget` changes. `PlayerChunkManager` listens to pick its loader. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsaveblocker" /><code>{"void AddSaveBlocker(object blocker)"}</code> | Stops this player being saved until the same object is passed to `RemoveSaveBlocker`. |
| <Link id="m-addtoassociatedobjects" /><code>{"void AddToAssociatedObjects("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Server: records an entity (like the body) to be destroyed with the player. |
| <Link id="m-destroyplayercontrollerandoldentities" /><code>{"void DestroyPlayerControllerAndOldEntities(bool isUndocking, bool isUnloading)"}</code> | Server: unlinks the body and destroys every associated entity, optionally undocking what's in them first. |
| <Link id="m-destroywithassociatedobjects" /><code>{"void DestroyWithAssociatedObjects()"}</code> | Server: destroys the body and associated entities, then the player entity. |
| <Link id="m-get" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Get(int userId)"}</code> | Looks up a player by user id from a dictionary. Faster than `GetPlayer`. |
| <Link id="m-getplayer" /><code>{"static "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" GetPlayer(int playerId)"}</code> | Finds a player by user id, or by username ignoring case. Null if not here. |
| <Link id="m-getplayer-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" GetPlayer(string playerName)"}</code> | Finds a player by user id, or by username ignoring case. Null if not here. |
| <Link id="m-getspawnposition" /><code>{"Vector3 GetSpawnPosition(bool isRespawning)"}</code> | Their saved position on join, or the respawn point (home if set) when respawning. Fly mode uses the scene spawn point. |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, uint identifier, uint[] embeddedIdentifiers, bool isInitializingBehaviours)"}</code> | Sets up the player's sync messages and adds it to `AllPlayers`. |
| <Link id="m-initializeplayeronserver" /><code>{"async Task InitializePlayerOnServer("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget, "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" saveFile)"}</code> | Server: binds the player to its connection, user info, mode and save file, and loads cosmetics. |
| <Link id="m-isinsavablestate" /><code>{"bool IsInSavableState(bool isSavingIfDead = false)"}</code> | False with saving off, in fly or autocam mode, in the character room, dead (unless allowed), or with a save blocker. |
| <Link id="m-isonserver" /><code>{"static bool IsOnServer(int playerId)"}</code> | Whether a player with that user id is connected. |
| <Link id="m-kick" /><code>{"void Kick(string reason)"}</code> | Server: disconnects the player and logs the reason. |
| <Link id="m-linkplayercontrollertoplayer" /><code>{"void LinkPlayerControllerToPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, bool isSettingControllerOwner = true)"}</code> | Makes a body this player's `PlayerController` and hooks up the hand inputs. |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Server: restores the player entity, state stack and progression from a `PlayerSave`. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends this player's mode, user info, cosmetics, states and practiced skills to the joining player. |
| <Link id="m-removesaveblocker" /><code>{"void RemoveSaveBlocker(object blocker)"}</code> | Removes a blocker added with `AddSaveBlocker`. |
| <Link id="m-safegetplayer" /><code>{"static bool SafeGetPlayer(int playerId, out "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" result)"}</code> | Finds a player by user id and returns whether it was found. |
| <Link id="m-safemovetochunk" /><code>{"async void SafeMoveToChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, Vector3 controllerPosition, Action callback)"}</code> | Server: parks the body in the void chunk until the client has loaded the target chunk, then moves it there and calls back. |
| <Link id="m-saveall" /><code>{"static void SaveAll()"}</code> | Server: saves every player and writes their files. Errors per player are logged and skipped. |
| <Link id="m-savecontrollerandstate" /><code>{"void SaveControllerAndState(bool isSavingIfDead = false)"}</code> | Server: copies body, states and progression into `Save`. A dead body's position is set to home. |
| <Link id="m-sendlastsafepositiontoclient" /><code>{"void SendLastSafePositionToClient(Vector3 newLastSafePosition)"}</code> | Server: tells the player's client its last safe position. |
| <Link id="m-sendlastsafepositiontoserver" /><code>{"void SendLastSafePositionToServer(Vector3 newLastSafePosition)"}</code> | Client: reports a new last safe position, which the server stores in the save. |
| <Link id="m-setlocal-3" /><code>{"void SetLocal()"}</code> | Server: tells this player's client that this entity is them. |
| <Link id="m-spawnnewcontroller" /><code>{"async Task SpawnNewController("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controllerPrefab, bool isRespawn)"}</code> | Server: spawns a new body at the join or respawn position, after the client has loaded that chunk. |
| <Link id="m-spawnnewcontrolleratpointinchunk" /><code>{"async Task SpawnNewControllerAtPointInChunk("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controllerPrefab, "}<Link to="/mod/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" spawnPoint, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, bool isLoadingSave = true)"}</code> | Server: spawns a new body at a spawn point in a chunk, optionally without loading the saved body. |
| <Link id="m-startup" /><code>{"void StartUp()"}</code> | Server: loads the player's save, or starts the default state if there is none. Runs once. |
| <Link id="m-synccosmeticstoothers" /><code>{"void SyncCosmeticsToOthers()"}</code> | Sends this player's cosmetics to everyone who has them loaded. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | `[Player <user info>]`. |
| <Link id="m-unlinkplayercontroller" /><code>{"void UnlinkPlayerController()"}</code> | Detaches the current body from the player and clears the hand targets. |
| <Link id="m-writesave" /><code>{"void WriteSave(bool isUnloading)"}</code> | Server: serializes the player entity into `Save` and starts writing the file. Runs even for dead players. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Wires up the state manager, hand inputs and `PlayerComponent`s. |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider">{"IPlayerRespawnPositionProvider"}</Link>{" respawnPositionProvider)"}</code> | Dependency injection hook that supplies the respawn position provider. |

<details>
<summary>30 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awaitremoteclienttoloadchunk" /><code>{"private async Task AwaitRemoteClientToLoadChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, Vector3 positionInChunk)"}</code> | Server: loads the chunk for this player, then waits until the client reports it has fully loaded it (skipped for the local player). |
| <Link id="m-delayupdatefriendship" /><code>{"private void DelayUpdateFriendShip()"}</code> | Updates this remote player's friend status once the local player's friend list has finished loading. |
| <Link id="m-getdefaultspawnchunkandupdateposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetDefaultSpawnChunkAndUpdatePosition(ref Vector3 spawnPosition)"}</code> | Server: picks a random respawn position when the spawn chunk is null and returns the location chunk that contains it. |
| <Link id="m-getplayersave" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" GetPlayerSave()"}</code> | Getter behind `Save`: returns the loaded `PlayerSave`, creating an empty one if there is a save file but no data. |
| <Link id="m-getplayertransform" /><code>{"private Transform GetPlayerTransform()"}</code> | Getter behind `PlayerTransform`: the controller's transform if there is a live controller, else the `Player` object's own transform. |
| <Link id="m-getrespawnpoint" /><code>{"private Vector3 GetRespawnPoint()"}</code> | Server: respawn position from the respawn provider, replaced by the saved home position when the provider only has the default. |
| <Link id="m-getserverjoinspawnpoint" /><code>{"private Vector3 GetServerJoinSpawnPoint()"}</code> | Server: where the player appears on joining: their saved position, or the scene spawn point if none is saved. |
| <Link id="m-handleinteractor" /><code>{"private void HandleInteractor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Force-stops an interactor's interaction if it holds something whose base save mode isn't `Base`. Probably unused. |
| <Link id="m-handlestateactivation" /><code>{"private void HandleStateActivation("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | Local player: when a player state activates, removes and adds the controller modes listed in its settings on both hands. |
| <Link id="m-handlestatedeactivation" /><code>{"private void HandleStateDeactivation("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | Local player: undoes `HandleStateActivation` when a player state ends, restoring the controller modes. |
| <Link id="m-invokeplayercontrollersetlisteners" /><code>{"private void InvokePlayerControllerSetListeners()"}</code> | Raises `PlayerControllerSet`, calling each listener separately and logging any exception instead of stopping. |
| <Link id="m-listenforstatechanges" /><code>{"private void ListenForStateChanges("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" localPlayer)"}</code> | Hooked to `LocalPlayerSet` in `Awake`: once this player becomes the local player, subscribes to its state changes. |
| <Link id="m-loadcosmetics" /><code>{"private async Task LoadCosmetics()"}</code> | Server: loads the player's cosmetics from the save data, if their player mode uses cosmetics. |
| <Link id="m-loadplayercontrollerfromsave" /><code>{"private void LoadPlayerControllerFromSave(Vector3 spawnPosition)"}</code> | Server: moves the new controller to the spawn position and loads its saved state, if the server has saves and the mode allows it. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the player from the lookup and `AllPlayers`, clears the local-player chunk if it was local, and raises `OnPlayerRemoved`. |
| <Link id="m-ondisconnectedfromplatform" /><code>{"private void IPlatformPlayer.OnDisconnectedFromPlatform()"}</code> | Only logs that the player disconnected from the platform. |
| <Link id="m-replyfullyloaded" /><code>{"private void ReplyFullyLoaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Client: tells the server the chunk it was asked to load has now fully loaded. |
| <Link id="m-replynoqueuedmessages" /><code>{"private void ReplyNoQueuedMessages()"}</code> | Client: tells the server it has finished loading once all queued connection messages are done. Not hooked up in this class. |
| <Link id="m-setcurrent" /><code>{"private void SetCurrent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Sets this as the local player (`Current`) and raises `LocalPlayerSet`. |
| <Link id="m-setlocal-2" /><code>{"private void SetLocal("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server: tells this player's client that this entity is them. |
| <Link id="m-setplatformtarget" /><code>{"private void SetPlatformTarget("}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" target)"}</code> | Setter behind `PlatformTarget`: raises `PlayerSystemChanged` and stores the new target when it changes. |
| <Link id="m-setplayercontroller" /><code>{"private void SetPlayerController("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | Setter behind `PlayerController`: stores the controller and raises `PlayerControllerSet`. |
| <Link id="m-setplayermode" /><code>{"private void SetPlayerMode("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode)"}</code> | Setter behind `PlayerMode`: raises `PlatformChanged` and stores the new mode when it changes. |
| <Link id="m-spawncontroller" /><code>{"private void SpawnController("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controllerPrefab, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, Vector3 spawnPosition, bool isLoadingSave = true)"}</code> | Server: spawns the controller prefab at a position, links it to this player, loads its save if asked, and puts it in the chunk. |
| <Link id="m-spawnnewcontrolleratpointinchunk-2" /><code>{"private async Task SpawnNewControllerAtPointInChunk("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controllerPrefab, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, Vector3 spawnPosition, bool isLoadingSave = true)"}</code> | Server: spawns a new body at a spawn point in a chunk, optionally without loading the saved body. |
| <Link id="m-startplayermodeplatform" /><code>{"private IEnumerator StartPlayerModePlatform() (iterator)"}</code> | Client: coroutine that stops the active XR platform if it doesn't match the player mode and sets up the right one. |
| <Link id="m-synccosmetics-2" /><code>{"private async void SyncCosmetics("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Synced message that sends the player's cosmetics. The server rejects and logs cosmetics sent by anyone but this player. |
| <Link id="m-synclastsafeposition-2" /><code>{"private void SyncLastSafePosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Vector3 lastSafePosition)"}</code> | Synced message for the last safe position: updates smooth locomotion on the local player and the save on the server. |
| <Link id="m-syncloadstatus-2" /><code>{"private void SyncLoadStatus("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint chunkIndex)"}</code> | Synced chunk load handshake: the server sends a chunk index, the client replies once that chunk has fully loaded. |
| <Link id="m-syncmodecontrolleranduserinfowithremote-2" /><code>{"private void SyncModeControllerAndUserInfoWithRemote("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Synced message with the player mode, user ID, name and member status. Clients use it to fill `UserInfo` and friend status. |

</details>

## Used in

Members of other types that take, return or hold a `Player`:

[`ActionItem.OnConnected`](/mod/game-api/types/global-a-b/actionitem#m-onconnected), [`AdditionalStaticContent.OnConnected`](/mod/game-api/types/global-a-b/additionalstaticcontent#m-onconnected), [`AfkTimer.PlayerControllerSet`](/mod/game-api/types/global-a-b/afktimer#m-playercontrollerset), [`AfkTimer.PlayerJoined`](/mod/game-api/types/global-a-b/afktimer#m-playerjoined), [`AfkTimer.PlayerLeft`](/mod/game-api/types/global-a-b/afktimer#m-playerleft), [`AfkTimer.ResetTimeout`](/mod/game-api/types/global-a-b/afktimer#m-resettimeout), [`AfkTimer.StopTimeout`](/mod/game-api/types/global-a-b/afktimer#m-stoptimeout), [`AfkTimer.timeouts`](/mod/game-api/types/global-a-b/afktimer#m-timeouts), [`AfkTimer.WaitForTimeout`](/mod/game-api/types/global-a-b/afktimer#m-waitfortimeout), [`ForgedModel<TB, TA>.OnConnected`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-onconnected), [`Recycler.OnConnected`](/mod/game-api/types/alta-crafting/recycler#m-onconnected), [`Smelter.OnConnected`](/mod/game-api/types/alta-crafting/smelter#m-onconnected), [`Smelter.smeltingPlayers`](/mod/game-api/types/alta-crafting/smelter#m-smeltingplayers), [`ChisellingDeck.OnConnected`](/mod/game-api/types/alta-crafting/chisellingdeck#m-onconnected), [`TimberBlock.OnConnected`](/mod/game-api/types/alta-crafting/timberblock#m-onconnected), [`TimberBlock.ReleaseResult`](/mod/game-api/types/alta-crafting/timberblock#m-releaseresult), [`TimberBlockSpawner.OnConnected`](/mod/game-api/types/alta-crafting/timberblockspawner#m-onconnected), [`TimberPieceBase.LastHittingPlayerController`](/mod/game-api/types/alta-crafting/timberpiecebase#m-lasthittingplayercontroller), [`CaveLayerManager.OnConnected`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-onconnected), [`CaveTeleporter.OnConnected`](/mod/game-api/types/alta-world-generation/caveteleporter#m-onconnected), [`CaveTeleporterManager.OnConnected`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-onconnected), [`GenerationBase.OnConnected`](/mod/game-api/types/alta-world-generation/generationbase#m-onconnected), [`PlayerCharacter.OnConnected`](/mod/game-api/types/alta-player/playercharacter#m-onconnected), [`CaveLayerChunk.PlayerEnteredChunk`](/mod/game-api/types/alta-world/cavelayerchunk#m-playerenteredchunk), [`CaveLayerStreamer.OnConnected`](/mod/game-api/types/alta-world/cavelayerstreamer#m-onconnected), [`Chunk.OnConnected`](/mod/game-api/types/alta-world/chunk#m-onconnected), [`ChunkEntityManager.CompareFeet`](/mod/game-api/types/alta-world/chunkentitymanager#m-comparefeet), [`ChunkPlayerManager.Add`](/mod/game-api/types/alta-world/chunkplayermanager#m-add), [`ChunkPlayerManager.ItemAdded`](/mod/game-api/types/alta-world/chunkplayermanager#m-itemadded), [`ChunkPlayerManager.ItemRemoved`](/mod/game-api/types/alta-world/chunkplayermanager#m-itemremoved), [`ChunkPlayerManager.Items`](/mod/game-api/types/alta-world/chunkplayermanager#m-items), [`ChunkPlayerManager.OnItemAdded`](/mod/game-api/types/alta-world/chunkplayermanager#m-onitemadded), [`ChunkPlayerManager.OnItemRemoved`](/mod/game-api/types/alta-world/chunkplayermanager#m-onitemremoved), [`ChunkPlayerManager.players`](/mod/game-api/types/alta-world/chunkplayermanager#m-players), [`ChunkPlayerManager.Remove`](/mod/game-api/types/alta-world/chunkplayermanager#m-remove), [`ChunkSync.InitializeAndStart`](/mod/game-api/types/alta-world/chunksync#m-initializeandstart), [`ChunkSync.player`](/mod/game-api/types/alta-world/chunksync#m-player), [`ChunkSync.Player`](/mod/game-api/types/alta-world/chunksync#m-player-2), [`ChunkSync.Start`](/mod/game-api/types/alta-world/chunksync#m-start), [`LocationChunk.PlayerEnteredChunk`](/mod/game-api/types/alta-world/locationchunk#m-playerenteredchunk), [`PlayerEntitySyncServer.gradualSync`](/mod/game-api/types/alta-world/playerentitysyncserver#m-gradualsync), [`PlayerEntitySyncServer.LoadForPlayer`](/mod/game-api/types/alta-world/playerentitysyncserver#m-loadforplayer), [`PlayerEntitySyncServer.StartSync`](/mod/game-api/types/alta-world/playerentitysyncserver#m-startsync), [`PlayerEntitySyncServer.StopSync`](/mod/game-api/types/alta-world/playerentitysyncserver#m-stopsync), [`PlayerEntitySyncServer.UnloadForPlayer`](/mod/game-api/types/alta-world/playerentitysyncserver#m-unloadforplayer), [`StaticCaveChunk.OnConnected`](/mod/game-api/types/alta-world/staticcavechunk#m-onconnected), [`DebuggingCommandModule.SpawnLoadMarker`](/mod/game-api/types/alta-console/debuggingcommandmodule#m-spawnloadmarker), [`DebuggingCommandModule.SpawnQASet`](/mod/game-api/types/alta-console/debuggingcommandmodule#m-spawnqaset), [`RepairBoxModule.SpawnBox`](/mod/game-api/types/alta-console/repairboxmodule#m-spawnbox), [`SelectionCommandModule.FindObjects`](/mod/game-api/types/alta-console/selectioncommandmodule#m-findobjects), [`SelectionCommandModule.FindPrefab`](/mod/game-api/types/alta-console/selectioncommandmodule#m-findprefab), [`SelectionCommandModule.LookAt`](/mod/game-api/types/alta-console/selectioncommandmodule#m-lookat), [`SpawnCommandModule.SpawnPopulation`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnpopulation), [`WackyCommandModule.UnveilMap`](/mod/game-api/types/alta-console/wackycommandmodule#m-unveilmap), [`CookingGarnishComponent.Alta.Cooking.ICookingGarnishMarker.CookingPlayer`](/mod/game-api/types/alta-crafting/cookinggarnishcomponent#m-alta-cooking-icookinggarnishmarker-cookingplayer), [`ICookingGarnishMarker.CookingPlayer`](/mod/game-api/types/alta-crafting/icookinggarnishmarker#m-cookingplayer), [`StewManager.cookingPlayers`](/mod/game-api/types/alta-crafting/stewmanager#m-cookingplayers), [`StewManager.OnConnected`](/mod/game-api/types/alta-crafting/stewmanager#m-onconnected), [`ConfirmationCraftingPart.OnConnected`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-onconnected), [`GenericAssemblyStation.OnConnected`](/mod/game-api/types/alta-crafting/genericassemblystation#m-onconnected) and 331 more.
