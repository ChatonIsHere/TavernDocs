---
title: Log line index
description: "The game's own log messages, grouped by area, with the type that writes each one and what the alarming ones mean."
sidebar_position: 9
---

# Log line index

The game logs through NLog. This page lists the messages in Alta's own code (`Root.Township` and the `Alta.*` assemblies, server build): 2127 distinct messages, 18 at Fatal, 1008 at Error, 250 at Warn and 851 at Info, Debug or (for the console) Trace. Use it to find which type wrote a line you see in `unity-log.csv` or the server console, and so where to look or what to patch.

How to read it:

- **Message** is the text as written in the code. Parts in backticks, like `{name}`, are filled in at runtime: the name is the variable or expression the code puts there. Search for the plain text around them.
- **Written by** is the type and method that make the call. In `unity-log.csv` the `logger` column usually names the same class, with its namespace (for example `Alta.Networking.NetworkEntity`). It can name a base class instead, when a subclass uses the base class's `logger` field. Lines written through the game's `Debug.Log` (and `UnityEngine.Debug.Log`) show the logger `Debug`.
- Errors and warnings come first in each area. Info and debug lines are folded away under each area.
- Areas are worked out from the type's namespace and name, so a few lines sit in a nearby area rather than the obvious one.
- An exception passed with the message (`logger.Error(exception, ...)`) is written after it, in the error log's `exception` column.
- Lines that only TavernLib or a mod write aren't here.

This page is made by a script from the decompiled server build. Messages are matched with patterns, so a few odd ones (built in several steps, or in a helper method) are missing or shown with a placeholder where the text is.

## Errors and warnings you will see

These turned up in the logs of test runs: a Tavern server (779 lines in 33 files) and headless test clients without a headset (3794 lines in 40 files). Most come from a normal start and say nothing is wrong. A busy server will show others; look them up in the areas below.

| Level | Message | Written by | Seen on | Notes |
| --- | --- | --- | --- | --- |
| Error | Error when sending from socket: `{socket.TransportSocket}` | `NetworkManager.Send` ([Sockets and connections](../networking/connections.md#networkmanager)) | client | An exception while flushing a socket's outgoing messages. It's caught and the loop goes on, so one bad send doesn't stop the others. The exception after it says what failed. |
| Error | Unhandled Exception: `{context}` `{exception}` | `UnityLogHandler.LogException` | client | An exception nobody caught, with its stack trace. If your mod's name is in the trace, it's yours. |
| Error | There is no keyboard attached! | `KeyboardEventTriggers.RegisterKeyPressed` | server and client | Something registered a key handler on Windows without a keyboard device, as on a headless server. Expected there; the handler just isn't registered. |
| Error | ColorLerp has not been set on this prefab. Skipping Attracting state display. | `HandHoverPoint.AttractingRoutine` ([Grab points and hand-touch points](../items/grab-points.md#handhoverpoint)) | client | A hand hover point without its colour effect. Only the visual is skipped. |
| Warn | Couldnt find Controller Action Mode of type: `{modeType}` | `ControllerModeSettings.GetMode` | client | No VR controller mode of that kind is set up, as when running without a headset. Harmless there. |
| Warn | Server said to dock `{pickup.name}` to null dock `{request.Dock}`. Waiting for dock spawn | `PickupDocker.RequestDock` | client |  |
| Warn | General Loading Object is not initalized. Could not display message: `{message}` | `GeneralLoadingObjectManager.DisplayMessage` | client | A loading-screen message with no loading screen to show it on, as on a headless game. Harmless; the message is in the log line. |
| Error | Entity being unofficially destroyed `{name}` | `NetworkEntity.OnDisable` ([NetworkEntity](../world/network-entity.md)) | client | An entity's GameObject was destroyed without going through the spawner, which sets `IsBeingDestroyed` first. From a mod, destroy entities with `SceneDestroy()` on the server, not `Object.Destroy`. |
| Warn | Socket was closed while handling new connection | `ServerRemoteConsole.HandleNewConnectionAsync` ([Remote console](../console-and-utilities/remote-console.md)) | server and client | The old TCP console on port 1758 had its socket closed while it waited for a connection. TavernLib closes that console right after it starts (`CommandSecurityPatches`), so on a Tavern server this shows on every start and is expected. |
| Warn | UserSettingsAnalyticsReporterConfiguration is null, ensure that it is present in the Addressables group and is baked. Expected: UserSettingsAnalyticsReporterConfiguration | `UserSettingsAnalyticsReporter.OnLoggedIn` | server and client | An analytics config asset didn't load. It only feeds analytics, so it's harmless. |
| Warn | There was no active platform to stop | `PlatformDriver.StopActivePlatform` | client | Nothing to stop, usually during shutdown or a scene reload. Harmless. |
| Warn | \[AltaSceneManager\] Loading scene already existed but there was no completed TCS. Creating a new one. | `AltaSceneManager.CreateLoadingScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) | client | Shows on a normal client start. |
| Error | Failed to get Server Settings permissions for player `{userIdentifier}` | `PermissionsHelper.DoesUserHavePermissions` | client | The client's settings menu asks Alta's web API whether you may change server settings. That API is gone, so it fails and the answer is no. |
| Warn | Unspawned entity `{spawned.Identifier}` is now spawned with name: `{spawned.name}` handling message now, type: `{entityMessageType}` | `InternalMessage.Serialize` | client | A client got a message for an entity before the entity's spawn arrived. It waited, and handles the message now. Usually harmless. |
| Error | Failed starting WebSocket Console | `WebSocketRemoteConsole.Start` | client | The websocket console couldn't start. Most likely its port (1760, or TavernLib's `console_port`) is taken, for example by another copy of the game on the same PC. The console stays off for this run. |
| Warn | Old sound enum still used for `{fallback}` on `{caller.name ?? "Unknown"}` | `AudioManager.Resolve` | client |  |
| Error | Issue updating current store rotation, clearing it | `PurchasedList.UpdateCurrentRotation` | client | The shop rotation comes from Alta's web API, which is gone. Expected. |
| Error | Shop failed | `ShopInterface.LoggedIn` | client | The cosmetics shop couldn't load from Alta's web API, which is gone. Expected. |
| Error | Player: `{PlayerName}` Leaving State: `{leavingState.Name}` encountered an issue when state `{leavingState.Name}` was Deactivated | `PlayerStateManager.DeactivateCurrentStateAndFindCommonBase` ([Player states](../networking/player-states.md#playerstatemanager)) | client | A player state threw while switching. The exception after it shows which state. |
| Warn | Couldnt get controller extension of type: `{typeof(T)}` | `Controller.GetControllerExtension` | client |  |
| Error | Error during Vivox login: `{ex}` | `VivoxClient.Login` | client | Vivox voice chat logs in through Alta's web API, which is gone. Expected on every client start. |
| Warn | Failed to get interactor for controller `{controller}` | `HandInteractor.Start` | client |  |
| Warn | Response Status: `{response.StatusCode}` | `LowLevelApiClient.HandleForbiddenOrOtherHttpStatus` | client | A call to Alta's web API got an error back. Those services are closed, so a few of these at startup are expected. |
| Error | Vivox LoggedIn Error | `VivoxManager.LoginVivoxClient` | client | Vivox voice chat couldn't log in (see the line before). Expected, since Alta's web API is gone. |
| Warn | Attempting to redestroy connection to player: `{connection.Identifier}` | `Socket.DestroyConnection` ([Sockets and connections](../networking/connections.md#socket)) | client |  |
| Warn | Chunk containing player not found. Can't adjust atmosphere | `AtmosphereManager.OverrideAtmosphere` ([Time and environment](../world/time-and-environment.md)) | client |  |
| Error | Disconnect received from unknown source | `ClientPacketReceiver.DestroyConnection` | client | The transport reported a disconnect for a connection the socket no longer has. Usually harmless. |
| Error | Failed to Start the discord controller | `DiscordController.Start` | client | Discord rich presence couldn't start (the Discord SDK threw). Only rich presence is lost. |
| Error | Player: `{PlayerName}` State: `{CurrentState.Name}` encountered an issue in Activation | `PlayerStateManager.EnterNewState` ([Player states](../networking/player-states.md#playerstatemanager)) | client | A player state threw while switching. The exception after it shows which state. |
| Warn | Reloading scene | `ApplicationManager.StartReload` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager)) | client |  |

## Lines that aren't from Alta's code

Some of the most common lines come from Unity itself, not from the game's code, so they aren't in the tables. The game sends Unity's own messages to NLog too (see [Logging](../console-and-utilities/logging.md)):

- Logger `Unhandled`: anything Unity logs, for example `The referenced script (...) on this Behaviour is missing!` or `Physics.ClosestPoint can only be used with...`. The missing-script warnings name scene objects whose script isn't in the build (`APICommandHandler`, `MetaAbuseSdkInitializer`). They show up on a normal server start.
- Logger `UnityLogHandler`, prefixed `Unhandled Unity Log:`: messages from `UnityEngine.Debug` calls in the engine and in plugins (Addressables errors, for example).
- Logger `UnhandledExceptions` (shown as `Unhandled Exception:` with a stack trace): an exception nobody caught, often in a Unity callback such as `Update`. If your mod's name is in the trace, it's yours.

## Fatal lines

Every line the game logs at `Fatal`. They also appear in their own area below.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Fatal | Failed setting up remote alta folder system at root: `{text3}` | `AltaIO.SetSavePath` ([Settings and files](../console-and-utilities/settings-and-files.md#altaio)) |  |
| Fatal | Provided buffer length not long enough. Writing over data. Will be corrupt. WordIndex: `{wordIndex}` BitsWritten: `{bitsWritten}` | `BitWriter.WriteBits` |  |
| Fatal | Ran out of chunk indices, failed for chunk: `{this}` | `Chunk.FindIndex` ([Chunks](../world/chunks.md#chunk)) | Every one of the 8191 chunk indices is in use. The server shuts itself down. |
| Fatal | Empty linked list contains full link with entity: `{networkEntityLink.NetworkEntity}` | `EntityManager.GetNextLink` ([Finding entities](../world/finding-entities.md#every-entity-entitymanager)) |  |
| Fatal | Failed to reserve link for embedded entity for `{entity.name}`. Link ID: `{nextLink.Index}`. Already contained: `{nextLink.NetworkEntity.name}` | `EntityManager.ForceRegisterEntity` ([Finding entities](../world/finding-entities.md#every-entity-entitymanager)) |  |
| Fatal | No Free Entity Links | `EntityManager.GetNextLink` ([Finding entities](../world/finding-entities.md#every-entity-entitymanager)) | All of the 100000 entity slots are taken, so a new entity gets no link. Expect errors after it. Far too many objects are loaded. |
| Fatal | Receive wrong index chunk `{value}`, getting chunk closest to current position `{chunk.ChunkIdentifier}` | `NetworkRigidbody.SerializeChunkAndPosition` |  |
| Fatal | \[Player\] Received wrong index chunk `{chunkIndex}` | `Player.SyncLoadStatus` ([Player](../networking/player.md)) |  |
| Fatal | Failed backing up changed files | `RemoteFiles.BackupAllChanged` |  |
| Fatal | Encountered issues with sending server ping for `{failedCount}` times, shutting server down | `ServerHandler.PingServer` ([ServerHandler](../networking/server-handler.md)) | The server quits itself after too many failed pings (see the Error line before it). Set the `MAX_PING_FAIL_COUNT` environment variable to change the limit. |
| Fatal | Encountered issues receiving message from connection: `{connectionIdentifier}` SocketId: `{socket.TransportSocket}` Reliable: `{isReliable}` | `ServerMessageReceiverPerConnection.ProcessMessage` |  |
| Fatal | Receiving data event from connection that has not received a connect event, connectionId: `{connectionIdentifier}` | `ServerMessageReceiverPerConnection.LogUnknownReceive` |  |
| Fatal | Received reliable message but dont have a connection to handle it, id: `{connectionIdentifier}` | `ServerPacketReceiver.ReceivePackets` | Like the line above: a packet for a connection that's gone. The server keeps running. |
| Fatal | Receiving message from not registered connection with identifier: `{connectionId}` SocketId: `{Socket.TransportSocket}` ChannelId: `{channel}` | `ServerPacketReceiver.Process` | A packet from a connection id the server doesn't know, usually one that just disconnected. Despite the level, nothing stops: the packet is dropped and each id is logged once. |
| Fatal | FAILED TO WIPE PLEASE READ LOGS | `ServerWipeManager.WipeServer` ([Saving](../networking/saving.md)) | One of the wipe steps failed (the errors above it say which). The server waits a minute, then quits as it does after a good wipe. |
| Fatal | Receive wrong index chunk `{value}` | `StreamEntityExtensions.SerializeChunk` |  |
| Fatal | Trying to send chunk index of uninitialized chunk: `{chunk}` | `StreamEntityExtensions.SerializeChunk` |  |
| Fatal | Releasing non power of two array to array pool | `UnclearedPower2ArrayPool<T>.Release` |  |

## Startup, scenes and settings

35 errors and warnings, 24 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Fatal | Provided buffer length not long enough. Writing over data. Will be corrupt. WordIndex: `{wordIndex}` BitsWritten: `{bitsWritten}` | `BitWriter.WriteBits` |  |
| Fatal | Failed backing up changed files | `RemoteFiles.BackupAllChanged` |  |
| Error | Addressable finished loading after session ended: `{address}`, session: `{index}` | `AddressableSession.LoadAsync` |  |
| Error | Can not set content of `{fileInfo.Name}` while reading from it | `AltaFile.Content` |  |
| Error | Can't unload while reading. `{fileInfo.Name}` | `AltaFile.QueueUnload` |  |
| Error | Error while reading. FileName: `{FullName}` | `AltaFile.ReadingTask` |  |
| Error | Error writing file: `{FullName}` | `AltaFile.WritingTaskAsync` |  |
| Error | Failed finishing all writing tasks async | `AltaFile.FinishAllAsync` |  |
| Error | Failed running task when finishing all writing | `AltaFile.FinishAllWriting` |  |
| Error | Invalid format of content. Having to rehandle. | `AltaFile.ReadAsync` |  |
| Error | Trying to save `{fileInfo.Name}` while still reading. | `AltaFile.WriteAsync` |  |
| Error | Writing file `{FullName}` failed | `AltaFile.WriteAsync` |  |
| Error | Error while deleting folder: `{Path}` | `AltaFolder.Delete` |  |
| Error | Failed initializing BitReader, data.length: `{data.Length}` byteCount: `{byteCount}` | `BitReader.Initialize` |  |
| Error | Provided buffer length not long enough. Reading over data. Will be corrupt. | `BitReader.ReadBits` |  |
| Error | This settings object contains multiple modes of type: `{mode.Type}` | `ControllerModeSettings.OnValidate` |  |
| Error | Controller offset settings does not contain offsets for `{playerMode}`, returning default | `ControllerOffsetSettings.GetControllerOffsetForHand` |  |
| Error | Controller offset settings does not support both hands, returning null. | `ControllerOffsetSettings.GetHandAlignmentsForHandIndex` |  |
| Error | Failed to load settings at index `{i}` | `GlobalSettingsInitializer.Awake` |  |
| Error | Failed to initialize `{networkEntity}` | `LocalNetworkScene.SetAllItemsToNotNetwork` |  |
| Error | Failed to identify currently active scene | `MenuSettings.LocalGameScene` |  |
| Error | Selected field name was null | `OverridableSettings.GetOverridenSettings` |  |
| Error | Selected field names were not setup | `OverridableSettings.GetOverridenSettings` |  |
| Error | Settings not setup for: `{type}` | `PickupTypeSettings.GetPickupSettings` |  |
| Error | There is several settings for the pickup type: `{pickupTypeSetting.Type}` | `PickupTypeSettings.FillDictionary` |  |
| Error | Failed creating remote directory at: `{remoteInfo.FullName}` | `RemoteAltaFolder.RemoteAltaFolder` |  |
| Error | Failed to add file `{name}` with name `{file.Name}` | `RemoteAltaFolder.FileExists` |  |
| Error | Error while backing up local file: `{localFile.FullName}` to remote: `{remoteFileInfo.FullName}` | `RemoteFiles.RemoteAltaFile<TFileType>.BackUpAsync` |  |
| Error | Error while copying from remote file: `{remoteFileInfo.FullName}` to local: `{localFile.FullName}` | `RemoteFiles.RemoteAltaFile<TFileType>.CopyFromRemote` |  |
| Error | Error while instant backing up of local file: `{localFile.FullName}` to remote: `{remoteFileInfo.FullName}` | `RemoteFiles.RemoteAltaFile<TFileType>.BackupInstant` |  |
| Error | Trying to backup file `{localFile.FullName}` while it is already being backed up | `RemoteFiles.RemoteAltaFile<TFileType>.BackupToRemote` |  |
| Error | HTTP Code: `{listObjectsV2Response.HttpStatusCode}` | `S3StorageFolder.GetFolders` |  |
| Error | Unsupported list type | `ServerConfiguration.IsPlayerAllowed` |  |
| Warn | Couldnt find Controller Action Mode of type: `{modeType}` | `ControllerModeSettings.GetMode` | No VR controller mode of that kind is set up, as when running without a headset. Harmless there. |
| Warn | Trying to backup local file: `{localFile.FullName}` to remote but the local file doesnt exist | `RemoteFiles.RemoteAltaFile<TFileType>.BackUpAsync` |  |

<details>
<summary>Info and debug lines (24)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | \[LifetimeScope\] `{gameObject.name}` with no parent | `AbstractAltaLifetimeScope.LogStartup` |  |
| Info | \[LifetimeScope\] `{gameObject.name}` `{text}` | `AbstractAltaLifetimeScope.StopProfiling` |  |
| Info | \[LifetimeScope\] `{gameObject.name}`: Child of `{Parent.gameObject.name}` | `AbstractAltaLifetimeScope.LogStartup` |  |
| Info | Starting to track allowance | `BudgetedUpdateModuleProfilerComponent.StartTrackingAllowance` |  |
| Info | Stopped tracking allowance | `BudgetedUpdateModuleProfilerComponent.StopTrackingAllowance` |  |
| Info | Initializing global settings | `GlobalSettingsInitializer.Awake` |  |
| Info | Loading scene: `{text}` | `LoadScenes.LoadSceneArray` |  |
| Info | Deleting remote folder: `{remoteInfo.FullName}` | `RemoteAltaFolder.Delete` |  |
| Info | Backing up `{num}` files, IsInstant: `{isInstant}` | `RemoteFiles.BackupAllChanged` |  |
| Info | Deleting remote file Async: `{remoteFileInfo.FullName}` | `RemoteFiles.RemoteAltaFile<TFileType>.DeleteAsync` |  |
| Info | Deleting remote file: `{remoteFileInfo.FullName}` | `RemoteFiles.RemoteAltaFile<TFileType>.Delete` |  |
| Info | Deleting remote folder: `{remoteInfo.FullName}` | `S3RemoteFolder.Delete` |  |
| Info | Distance: `{distance}` Drive Spring: `{num}` | `VelocityPickupSettings.ApplyRotationDrive` |  |
| Debug | Writing file `{FullName}` was canceled | `AltaFile.WritingTaskAsync` |  |
| Debug | Created fake analytics service `{arg}` | `AnalyticsInstaller.Install` |  |
| Debug | `{wordIndex}` `{data.Length}` | `BitWriter.Flush` |  |
| Debug | Backing up file `{localFile.FullName}` to remote file instant `{remoteFileInfo.FullName}` | `RemoteFiles.RemoteAltaFile<TFileType>.BackupInstant` |  |
| Debug | Backing up file `{localFile.FullName}` to remote file `{remoteFileInfo.FullName}` | `RemoteFiles.RemoteAltaFile<TFileType>.BackUpAsync` |  |
| Debug | Copying remote file from: `{remoteFileInfo.FullName}` to `{localFile.FullName}` | `RemoteFiles.RemoteAltaFile<TFileType>.CopyFromRemote` |  |
| Debug | Finished backing up: `{localFile.FullName}` took `{timer.Elapsed.TotalMilliseconds}` ms | `RemoteFiles.RemoteAltaFile<TFileType>.BackUpAsync` |  |
| Debug | Finished copying file from remote: `{localFile.FullName}` took `{timer.Elapsed.TotalMilliseconds}` ms | `RemoteFiles.RemoteAltaFile<TFileType>.CopyFromRemote` |  |
| Debug | Finished instant backing up: `{localFile.FullName}` took `{timer.Elapsed.TotalMilliseconds}` ms | `RemoteFiles.RemoteAltaFile<TFileType>.BackupInstant` |  |
| Debug | \[WindowsGlobalSettingsInstaller\] Trigger reference to `{xrGeneralSettings.name}`, Manager: `{xrGeneralSettings.Manager}`, AssignedSettings: `{xrGeneralSettings.AssignedSettings}`, Instance `{XRGeneralSettings.Instance}` | `WindowsGlobalSettingsInstaller.Install` |  |
| Debug | \[LifetimeScope\] Installing Windows Platform Dependencies | `WindowsInstaller.WindowsInstaller` |  |

</details>

## Networking, joining and connections

225 errors and warnings, 150 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Fatal | Receive wrong index chunk `{value}`, getting chunk closest to current position `{chunk.ChunkIdentifier}` | `NetworkRigidbody.SerializeChunkAndPosition` |  |
| Fatal | \[Player\] Received wrong index chunk `{chunkIndex}` | `Player.SyncLoadStatus` ([Player](../networking/player.md)) |  |
| Fatal | Encountered issues with sending server ping for `{failedCount}` times, shutting server down | `ServerHandler.PingServer` ([ServerHandler](../networking/server-handler.md)) | The server quits itself after too many failed pings (see the Error line before it). Set the `MAX_PING_FAIL_COUNT` environment variable to change the limit. |
| Fatal | Encountered issues receiving message from connection: `{connectionIdentifier}` SocketId: `{socket.TransportSocket}` Reliable: `{isReliable}` | `ServerMessageReceiverPerConnection.ProcessMessage` |  |
| Fatal | Receiving data event from connection that has not received a connect event, connectionId: `{connectionIdentifier}` | `ServerMessageReceiverPerConnection.LogUnknownReceive` |  |
| Fatal | Received reliable message but dont have a connection to handle it, id: `{connectionIdentifier}` | `ServerPacketReceiver.ReceivePackets` | Like the line above: a packet for a connection that's gone. The server keeps running. |
| Fatal | Receiving message from not registered connection with identifier: `{connectionId}` SocketId: `{Socket.TransportSocket}` ChannelId: `{channel}` | `ServerPacketReceiver.Process` | A packet from a connection id the server doesn't know, usually one that just disconnected. Despite the level, nothing stops: the packet is dropped and each id is logged once. |
| Fatal | FAILED TO WIPE PLEASE READ LOGS | `ServerWipeManager.WipeServer` ([Saving](../networking/saving.md)) | One of the wipe steps failed (the errors above it say which). The server waits a minute, then quits as it does after a good wipe. |
| Fatal | Receive wrong index chunk `{value}` | `StreamEntityExtensions.SerializeChunk` |  |
| Fatal | Trying to send chunk index of uninitialized chunk: `{chunk}` | `StreamEntityExtensions.SerializeChunk` |  |
| Error | Error in updating Animated Bool, Here's some more details: Animator: `{Animator}` Animator.Animator: `{Animator.Animator}` Index: `{Index}` Value: `{Value}` | `AnimatedBool.Update` |  |
| Error | `{GetType().Name}`'s reader for `{entity.SafeName}` is null! | `BaseSync.MessageHandler` |  |
| Error | `{GetType().Name}`'s writer for `{entity.SafeName}` is null! | `BaseSync.SendToChunks` |  |
| Error | Null child: `{name}` | `ChildSyncableCollection<T, TThis, TSaveData, TElementSaveData>.Initialize` |  |
| Error | Disconnect received from unknown source | `ClientPacketReceiver.DestroyConnection` | The transport reported a disconnect for a connection the socket no longer has. Usually harmless. |
| Error | Only server syncs can send to other players. | `ClientSync.SendToPlayer` |  |
| Error | SetTargetRotation must be used with joints that are configured in world space. For local space joints, use SetTargetRotationLocal. | `ConfigurableJointExtensions.SetTargetRotation` |  |
| Error | SetTargetRotationLocal should not be used with joints that are configured in world space. For world space joints, use SetTargetRotation. | `ConfigurableJointExtensions.SetTargetRotationLocal` |  |
| Error | Encountered error on connection disconnect event | `Connection.OnDisconnected` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Error | Unknown channel `{channel}` | `Connection.Send` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Error | Unknown receiver type on `{name}` | `ConnectionChannel.CreateConnectionReceiver` ([Sockets and connections](../networking/connections.md#connectionchannel)) |  |
| Error | Existing join server pipeline in progress. | `ConnectToServerUtility.ConnectToServer` ([Joining a server](../networking/joining.md)) |  |
| Error | Error activating customization state | `CustomizationState.OnActivateRemote` ([Player states](../networking/player-states.md)) |  |
| Error | Error receiving customization sync | `CustomizationState.Sync` ([Player states](../networking/player-states.md)) |  |
| Error | Invalid cosmetics requested by `{Player.UserInfo}` | `CustomizationState.VerifyCustomization` ([Player states](../networking/player-states.md)) |  |
| Error | Failed saving player controller and state for player: `{Player.UserInfo}` | `DeadState.OnActivate` ([Player states](../networking/player-states.md)) |  |
| Error | Failed to log killer of `{Player.UserInfo}` | `DeadState.OnActivate` ([Player states](../networking/player-states.md)) |  |
| Error | Failed to release pickups for player `{Player.UserInfo}` on death | `DeadState.OnActivate` ([Player states](../networking/player-states.md)) |  |
| Error | \[Domain\] Tried to retrieve domain entry point for an unregistered player. Was the player registered first with RegisterPlayerEntry? | `Domain.GetPlayerEntryPoint` |  |
| Error | \[Domain Controller\] Domain `{component}` created at `{vector}` is not contained in any LocationChunk | `DomainController.CreateDomain` |  |
| Error | \[Domains\] Unregistered domain `{this}` detected. Attempting to destroy anyway... | `DomainController.DestroyDomain` |  |
| Error | Cannot create domain for player on client | `DomainController.CreateDomainForPlayer` |  |
| Error | Cannot destroy domain on client | `DomainController.DestroyDomain` |  |
| Error | Server attempted to sync domain `{domainChunk}` to player `{player}` but it is not a LocationChunk | `DomainController.SyncAddDomainToAddedChunks` |  |
| Error | Server attempted to sync removal of domain `{domainChunk}` to player `{player}` but it is not a LocationChunk | `DomainController.SyncRemoveDomainFromAddedChunks` |  |
| Error | Domain spawn setter used outside of domain, ensure that your domain setter is being spawned within a domain. | `DomainPlayerSpawnSetter.SetDomainSpawnPoint` |  |
| Error | Trying to pickup Entity: `{entity.name}`, but it has no pickup component | `DownedState.ForceGrabEntity` ([Player states](../networking/player-states.md)) |  |
| Error | Can't add null handler to `{messageType}` | `EntityMessageHandler.SetHandler` ([Entity sync](../networking/entity-sync.md#entitymessagehandler)) |  |
| Error | Error handling message of type: `{type}` entity: `{entity.Transform.name}` player: `{text}` | `EntityMessageHandler.HandleMessage` ([Entity sync](../networking/entity-sync.md#entitymessagehandler)) |  |
| Error | `{text}` - Encountered exception trying to send message type: `{messageType}` to chunks | `EntityMessageHandler.SendToChunks` ([Entity sync](../networking/entity-sync.md#entitymessagehandler)) |  |
| Error | `{text}` - Encountered exception trying to send message type: `{messageType}` to player: `{text2}` | `EntityMessageHandler.SendToPlayer` ([Entity sync](../networking/entity-sync.md#entitymessagehandler)) |  |
| Error | 'Maximum Bits' is too small on at least one of the `{behaviours.Length}` behaviours on `{entity.name}` (`{entity.PrefabRoot.name}`) `{behaviours[j]}` | `EntitySerializer.SerializeDataInternal` |  |
| Error | Should not be called | `FakeSocket.CreateConnection` |  |
| Error | \[Game Mode Manager\] Mode '`{newMode}`' failed to start | `GameModeManager.StartGameModeAsync` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Error | Already have a game mode active: `{currentMode}` | `GameModeManager.StartGameModeAsync` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Error | Failed activating game mode: `{newMode}`. Exception: \[`{ex}`\] | `GameModeManager.StartGameModeAsync` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Error | Game version is not valid. | `GameModeManager.IsClientVersionUpToDate` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Error | In headless mode and cannot return to main menu, so quitting in 10 seconds | `GameModeManager.StopCurrentModeAsync` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Error | Failed calling OnClientStarted Event | `GeneralGameEvents.OnClientStarted` |  |
| Error | Failed calling OnServerEnded Event | `GeneralGameEvents.OnServerEnded` |  |
| Error | Failed calling OnServerStarted Event | `GeneralGameEvents.OnServerStarted` |  |
| Error | Attempting to send to all from server `{entity.Transform.name}` - `{messageType}` | `InternalMessage.SendToServer` |  |
| Error | Server rejected join request for reason: `{joinMessage.JoinResult}` with error: `{joinMessage.Error}` | `JoinServerPipeline.OnServerRejectedRequest` |  |
| Error | Error in kcp socket. Error: `{altaNetworkError}`. Message: `{message}`. | `KcpClientWrapper.HandleError` |  |
| Error | array offset + count is out of range: `{data.Offset}` + `{data.Count}` &gt; `{data.Array.Length}` | `KcpServerWrapper.HandleData` |  |
| Error | array offset is out of range: `{data.Offset}` &gt;= `{data.Array.Length}` | `KcpServerWrapper.HandleData` |  |
| Error | Error in kcp socket. Connection `{connectionId}`. Error: `{altaNetworkError}`. Message: `{message}`. | `KcpServerWrapper.HandleError` |  |
| Error | incoming data.Array is null | `KcpServerWrapper.HandleData` |  |
| Error | Player: `{PlayerController}` locomotion controller has a weight stat definition: `{weightStatDefinition}` but the stat manager doesnt have a corresponding stat | `LocomotionController.WeightSpeedModifier` ([Locomotion](../networking/locomotion.md#locomotioncontroller)) |  |
| Error | Renderer `{renderer?}` is not part of the LOD Group of `{prefab}` | `LodMeshJoiner.Batch` |  |
| Error | Message Handler: `{handler.Method.Name}` encountered an error when trying to handle a message of type: `{type}` | `MessageProcessor.HandleMessage` |  |
| Error | Unsupported message type: `{type}` | `MessageProcessor.HandleMessage` |  |
| Error | Received MoveMessage for null entity with identifier 0 | `MoveMessage.Serialize` |  |
| Error | Missing animator `{parameterType}` parameter: `{parameterName}` on `{name}` | `NetworkAnimator.LogMissingParameter` |  |
| Error | Attempted to replace existing entity `{NetworkEntity.name}` with `{entity.name}` | `NetworkEntityLink.Fill` |  |
| Error | Empty link being marked as serialized | `NetworkEntityLink.MarkSerialized` |  |
| Error | Only should be called on first fake link | `NetworkEntityLink.MarkFirstFakeAsSerialized` |  |
| Error | Error when receiving on socket: `{socket.TransportSocket}` | `NetworkManager.Receive` ([Sockets and connections](../networking/connections.md#networkmanager)) |  |
| Error | Error when sending from socket: `{socket.TransportSocket}` | `NetworkManager.Send` ([Sockets and connections](../networking/connections.md#networkmanager)) | An exception while flushing a socket's outgoing messages. It's caught and the loop goes on, so one bad send doesn't stop the others. The exception after it says what failed. |
| Error | Attempting to pool already pooled packet | `OutgoingPacketManager.ReleasePacket` |  |
| Error | Message too large. Maximum packet size is `{PacketSize}` and message size is `{num}` | `OutgoingPacketManager.Send` |  |
| Error | Packet Manager has reached it's queue limit | `OutgoingPacketManager.WriteToReliable` |  |
| Error | Reliable Connection to: `{Connection.UserInfo}` has overflowed and cannot recover. forcing disconnect | `OutgoingPacketManager.WriteToReliable` |  |
| Error | Trying to send `{byteCount}` bytes | `OutgoingPacketManager.Send` |  |
| Error | Attempting to send empty packet on connection: '`{connection.Identifier}`', Channel Id: '`{channel.Identifier}`' | `Packet.Send` |  |
| Error | Attempting to send packet on unapproved connection (id): '`{connection.Identifier}`', Channel Id: '`{channel.Identifier}`' | `Packet.Send` |  |
| Error | Failed to send message on connection `{connection.Identifier}`: `{result.Error}` | `Packet.Send` |  |
| Error | Resetting pooled packet | `Packet.Reset` |  |
| Error | Sending pooled packet | `Packet.Send` |  |
| Error | Writing to pooled packet | `Packet.Write` |  |
| Error | \[Player\] Attempted to load save on server with no save files for `{UserInfo}` | `Player.LoadPlayerControllerFromSave` ([Player](../networking/player.md)) |  |
| Error | \[Player\] Doing safe move to `{chunk}` without a character controller | `Player.SafeMoveToChunk` ([Player](../networking/player.md)) |  |
| Error | \[Player\] Error syncing customization | `Player.SyncCosmetics` ([Player](../networking/player.md)) |  |
| Error | \[Player\] Failed to load Player for `{save.PlayerIdentifier}` | `Player.LoadFrom` ([Player](../networking/player.md)) |  |
| Error | \[Player\] Local player is already set to `{current}` | `Player.SetLocal` ([Player](../networking/player.md)) |  |
| Error | \[Player\] Missing player controller - cannot load player controller from save | `Player.LoadPlayerControllerFromSave` ([Player](../networking/player.md)) |  |
| Error | \[Player\] Missing save data for `{UserInfo}` | `Player.LoadPlayerControllerFromSave` ([Player](../networking/player.md)) |  |
| Error | \[Player\] Player is forbidden from loading in state `{PlayerMode}` | `Player.LoadPlayerControllerFromSave` ([Player](../networking/player.md)) |  |
| Error | \[Player\] Received message to alter cosmetics from `{player}` to `{this}` | `Player.SyncCosmetics` ([Player](../networking/player.md)) |  |
| Error | \[Player\] You should destroy the Old Player Controller Before Spawning a new one | `Player.SpawnNewControllerAtPointInChunk` ([Player](../networking/player.md)) |  |
| Error | Encountered error when calling player controller set for player: `{name}` on method `{obj.Method.Name}` with target `{obj.Target}` | `Player.InvokePlayerControllerSetListeners` ([Player](../networking/player.md)) |  |
| Error | Failed removing player `{UserInfo.Username}` from All players list | `Player.OnDestroy` ([Player](../networking/player.md)) |  |
| Error | Failed Saving player: `{item.UserInfo}` | `Player.SaveAll` ([Player](../networking/player.md)) |  |
| Error | Body Animator somehow destroyed for `{name}` `{NetworkPlayer.UserInfo.Identifier}` `{BodyAnimator}` | `PlayerCharacter.Update` ([PlayerController and the body](../networking/player-controller.md#playercharacter)) |  |
| Error | Encountered Issue while Updating Character IK for: `{NetworkPlayer.UserInfo.Username}` | `PlayerCharacter.UpdateIK` ([PlayerController and the body](../networking/player-controller.md#playercharacter)) |  |
| Error | Failed to load PlayerCharacter for `{save.PlayerIdentifier}` | `PlayerCharacter.LoadFrom` ([PlayerController and the body](../networking/player-controller.md#playercharacter)) |  |
| Error | No initial save data found for `{NetworkPlayer}` and no default data found | `PlayerCharacter.LoadFrom` ([PlayerController and the body](../networking/player-controller.md#playercharacter)) |  |
| Error | Deleting item (`{networkEntity.name}`) that shouldn't be childed to players (`{NetworkPlayer.UserInfo}`) hand | `PlayerController.SerializeHands` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Error | Deleting item (`{networkEntity2.name}`) that shouldn't be childed to players (`{NetworkPlayer.UserInfo}`) hand | `PlayerController.SerializeHands` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Error | Encountered issue when calling LocalPlayerSet | `PlayerController.LinkToPlayer` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Error | Error clearing hands while loading player | `PlayerController.SerializeHands` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Error | Item loaded in hand failed to begin interaction. `{networkPrefab}` | `PlayerController.SerializeInteractor` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Error | Item no longer interactable. Cannot load in hand. `{networkPrefab}` | `PlayerController.SerializeInteractor` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Error | PlayerController Sync Received TWICE `{player2.UserInfo.Username}` -&gt; `{Player.Current.UserInfo.Username}` | `PlayerController.SyncPlayer` ([PlayerController and the body](../networking/player-controller.md)) | A client got the link between a player and their controller a second time. It ignores the second one. |
| Error | Smooth transform in `{name}` is null. Skipping... | `PlayerLocomotionController.UpdateSmoothing` ([Locomotion](../networking/locomotion.md#playerlocomotioncontroller)) |  |
| Error | `{"PlayerLocomotionController"}` has no smoothing setting for index `{smoothingLevel}`. Using max index instead `{num}`. | `PlayerLocomotionController.UpdateSmoothing` ([Locomotion](../networking/locomotion.md#playerlocomotioncontroller)) |  |
| Error | \[PlayerStates\] state `{Name}` for `{Player}` is already inactive | `PlayerStateBase.Deactivate` ([Player states](../networking/player-states.md#playerstatebase)) |  |
| Error | \[PlayerStates\] Unable to change `{Player}` state to `{Name}` as it is already actve | `PlayerStateBase.Activate` ([Player states](../networking/player-states.md#playerstatebase)) |  |
| Error | `{Player.UserInfo}` - State: `{Name}` has no base state so cannot end state, perhaps swap state through the state manager | `PlayerStateBase.EndState` ([Player states](../networking/player-states.md#playerstatebase)) |  |
| Error | OnActivate of State: `{playerState}` resulted in Setting another state, this is not allowed, use ValidateStateActivation to forward to the new state instead | `PlayerStateManager.EnterNewState` ([Player states](../networking/player-states.md#playerstatemanager)) |  |
| Error | Player: `{PlayerName}` Leaving State: `{leavingState.Name}` encountered an issue when state `{leavingState.Name}` was Deactivated | `PlayerStateManager.DeactivateCurrentStateAndFindCommonBase` ([Player states](../networking/player-states.md#playerstatemanager)) | A player state threw while switching. The exception after it shows which state. |
| Error | Player: `{PlayerName}` Leaving State: `{leavingState.Name}` encountered and issue when base state: `{playerState.Name}` was Decorated | `PlayerStateManager.DeactivateCurrentStateAndFindCommonBase` ([Player states](../networking/player-states.md#playerstatemanager)) | A player state threw while switching. The exception after it shows which state. |
| Error | Player: `{PlayerName}` State: `{CurrentState.Name}` encountered an issue in Activation | `PlayerStateManager.EnterNewState` ([Player states](../networking/player-states.md#playerstatemanager)) | A player state threw while switching. The exception after it shows which state. |
| Error | Player: `{PlayerName}` State: `{item.Name}` encountered an issue in Loading from State | `PlayerStateManager.LoadFromStream` ([Player states](../networking/player-states.md#playerstatemanager)) | A player state threw while switching. The exception after it shows which state. |
| Error | Player: `{PlayerName}` State: `{item2.Name}` encountered an issue in Writing to Stream | `PlayerStateManager.WriteToStream` ([Player states](../networking/player-states.md#playerstatemanager)) | A player state threw while switching. The exception after it shows which state. |
| Error | Player: `{PlayerName}` State: `{leavingState.Name}` encountered an issue in SyncStateLeave | `PlayerStateManager.GetSyncStreamForLeavingState` ([Player states](../networking/player-states.md#playerstatemanager)) | A player state threw while switching. The exception after it shows which state. |
| Error | Serialized player state manager with 0 states | `PlayerStateManager.LoadFromStream` ([Player states](../networking/player-states.md#playerstatemanager)) |  |
| Error | Shouldnt load Player State Manager from Save before setting its Player | `PlayerStateManager.LoadFrom` ([Player states](../networking/player-states.md#playerstatemanager)) |  |
| Error | State of type: `{stateType}` already active for player `{player.UserInfo.Username}` | `PlayerStateManager.SetState` ([Player states](../networking/player-states.md#playerstatemanager)) |  |
| Error | You are adding a new state of the same type, why not just add resetting logic to the current state? | `PlayerStateManager.SetState` ([Player states](../networking/player-states.md#playerstatemanager)) |  |
| Error | You are trying to set a state during State Serialize, this is not allowed. Try doing so in OnActivate etc... | `PlayerStateManager.SetState` ([Player states](../networking/player-states.md#playerstatemanager)) |  |
| Error | Can't sync from a non-server socket | `SceneSerializer.InitialSyncEntities` |  |
| Error | Encountered error when serializing entity: `{entityWithSerializer}` | `SceneSerializer.SerializeRead` |  |
| Error | Encountered exception inside Serialize Write of `{isServer ? "Server" : "Client"}` Serialized entities | `SceneSerializer.SerializeWrite` |  |
| Error | Hit 1000 Messages | `SceneSerializer.SendSerialized` |  |
| Error | No Serializer on id: `{identifier}` entity `{entityWithSerializer.name}` - Skipping | `SceneSerializer.SerializeRead` |  |
| Error | Received data that shouldn't be read from player `{connection.Player}` on `{entityWithSerializer}` | `SceneSerializer.SerializeRead` |  |
| Error | Serialize for entity `{entityWithSerializer}` resulted in an incorrect bit count, header: `{value}` actual: `{num}`, this is handled but all serialized messaged for that entity will likely be corrupt | `SceneSerializer.SerializeRead` |  |
| Error | Failed logging error for broken serialized enumerable | `SerializedEnumerable.MoveNext` |  |
| Error | Serialized Enumerable Issue. Info: `{Start}`, `{iterationIndex}`, `{current.IsSerialized}`, `{current.IsEmpty}`, `{current}`, `{current.NextSerialized.IsFake}`, `{current.NextSerialized.IsSerialized}`, `{current.PreviousSerialized.NetworkEntity}`, `{current.NextSerialized.NetworkEntity}`... | `SerializedEnumerable.MoveNext` |  |
| Error | Serialized Enumerable Not Serialized Issue. Info: `{Start}`, `{iterationIndex}`, `{current.IsSerialized}`, `{current.IsEmpty}`, `{current}`, `{current.NextSerialized.IsFake}`, `{current.NextSerialized.IsSerialized}`, `{current.PreviousSerialized.NetworkEntity}`... | `SerializedEnumerable.MoveNext` |  |
| Error | Requesting a file from the client, that does not exist: `{cache}` | `ServerCacheManager.EnsureDownloadedToClient` |  |
| Error | Failed creating server | `ServerCreator.Setup` |  |
| Error | Result `{tuple.Item1}` `{tuple.Item2}` | `ServerCreator.IsAllowedToCreateServer` |  |
| Error | Encountered issue in sending server diagnostic analytics event | `ServerDiagnosticsManager.SendDiagnosticsToDatabaseCoroutine` |  |
| Error | Adding connection step after players have joined. Some players missed this step. | `ServerHandler.AddConnectionStep` ([ServerHandler](../networking/server-handler.md)) | A mod called `AddConnectionStep` too late. Players already on the server skipped the step. |
| Error | Can not have multiple servers running at once. | `ServerHandler.ServerHandler` ([ServerHandler](../networking/server-handler.md)) |  |
| Error | Encountered issues sending server ping, fail count: `{failedCount}` | `ServerHandler.PingServer` ([ServerHandler](../networking/server-handler.md)) | The server's 15-second ping to its API access failed. After 10 in a row (or `MAX_PING_FAIL_COUNT` from the environment) it shuts down with the Fatal line below. A local server access (`LocalServerAccess`) pings nothing, so it can't fail. |
| Error | Error during connection steps for `{connection.Identifier}` | `ServerHandler.UserPrerequisites` ([ServerHandler](../networking/server-handler.md)) | A connection step threw (the game's own or one a mod added with `AddConnectionStep`). The player fails the join check. |
| Error | Error in SpawnPlayerToClient | `ServerHandler.SpawnPlayerToClient` ([ServerHandler](../networking/server-handler.md)) |  |
| Error | Failed setting online players list for server | `ServerHandler.HandleConnectionsChange` ([ServerHandler](../networking/server-handler.md)) |  |
| Error | Failed to deregister server: `{ex.Message}` | `ServerHandler.OnServerStopped` ([ServerHandler](../networking/server-handler.md)) |  |
| Error | Failed to Save player `{player.UserInfo}` on disconnect | `ServerHandler.RemovePlayer` ([ServerHandler](../networking/server-handler.md)) | The player's save failed when they left. Their progress since the last save may be lost. The exception says why. |
| Error | Too late to add bootup step. Try within an embedded entities 'InitializeAsServer'. | `ServerHandler.AddBootupStep` ([ServerHandler](../networking/server-handler.md)) | A mod called `AddBootupStep` after bootup finished. The step doesn't run. |
| Error | Trying to start a headless server but your login details are not set | `ServerHostingGameMode.RestartAsHeadless` |  |
| Error | Disconnect received from unknown source | `ServerMessageReceiverPerConnection.HandleDisconnectEvent` | The transport reported a disconnect for a connection that was already cleaned up. Usually harmless. |
| Error | ServerPingProfiler already exists | `ServerPingProfiler.Initialize` |  |
| Error | Error removing player from server | `ServerPlayerConnectionHandlerOld.OnUserLeft` |  |
| Error | Error when checking if player: `{playerId}` is allowed on server | `ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowed` |  |
| Error | Error: `{playerJoinResult.Error}` , PlayerId: `{playerId}`, Credentials: `{receivedMessage.UserCredentials}` | `ServerPlayerConnectionHandlerOld.CheckApproved` |  |
| Error | Failed serializing join message | `ServerPlayerConnectionHandlerOld.CheckApproved` |  |
| Error | PlayerId: `{playerId}` tried to join during a wipe | `ServerPlayerConnectionHandlerOld.CheckApproved` | Joins are refused while `ServerWipeManager` wipes the server. |
| Error | Token didnt have a server\_id claim | `ServerPlayerConnectionHandlerOld.ValidateConsoleToken` |  |
| Error | Token was for a different server: `{num}` | `ServerPlayerConnectionHandlerOld.ValidateConsoleToken` |  |
| Error | User: `{playerId}` is joining with version: `{clientVersion}` server-version: `{BuildVersion.CurrentVersion}` | `ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowed` | The client's game version string differs from the server's. The player is refused with "Wrong game version". |
| Error | User: `{playerId}` is trying to connect multiple times | `ServerPlayerConnectionHandlerOld.CheckApproved` | The same account is already connected. The new connection is refused ("Already connected to this server"). |
| Error | Received message from wrong player | `ServerSync.IsValidMessageOrigin` |  |
| Error | Server client writer for `{entity.SafeName}` is null! | `ServerSync.SendToPlayer` |  |
| Error | Couldn't parse directory `{allSubFolder.Name}` as a player identifier | `ServerWipeManager.RunThroughAllPlayers` ([Saving](../networking/saving.md)) |  |
| Error | Failed ending server session | `ServerWipeManager.WipeServer` ([Saving](../networking/saving.md)) |  |
| Error | Failed to delete chunk saves! | `ServerWipeManager.DeleteChunksAndCache` ([Saving](../networking/saving.md)) |  |
| Error | Failed to wipe chunk `{chunk.ChunkIdentifier}` | `ServerWipeManager.WipeChunk` ([Saving](../networking/saving.md)) |  |
| Error | Failed to wipe save non reserved map markers for player `{save.PlayerIdentifier}` | `ServerWipeManager.SanitizePlayersSaves` ([Saving](../networking/saving.md)) |  |
| Error | Failed to wipe save position for player `{playerIdentifier}` | `ServerWipeManager.RunThroughAllPlayers` ([Saving](../networking/saving.md)) |  |
| Error | Connection issue. Error: `{ex.Message}` | `Socket.CreateConnection` ([Sockets and connections](../networking/connections.md#socket)) |  |
| Error | Created Network Connection with Network Simulator Enabled | `Socket.CreateConnection` ([Sockets and connections](../networking/connections.md#socket)) |  |
| Error | Started Networking Host with Networking Simulator Settings Enabled | `Socket.Socket` ([Sockets and connections](../networking/connections.md#socket)) |  |
| Error | Information regarding next error. Prefab: `{prefabHash}`, Entity: `{entityIdentifier}` | `SpawnMessage.Serialize` |  |
| Error | Spawning `{PrefabManager.GetPrefab(prefabHash)}` with identifier `{entityIdentifier}` failed | `SpawnMessage.Serialize` |  |
| Error | Stream Assert Failed: `{label}` | `Stream.Assert` ([Stream](../networking/stream.md)) |  |
| Error | Received unauthorized data from player `{player}` | `StreamAuthorityHelper.LogUnauthorizedMessage` |  |
| Error | Failed saving chunk: `{allChunks[j].ChunkIdentifier}` | `StreamerManager.SaveWorld` |  |
| Error | Failed Saving world | `StreamerManager.AutoSave` |  |
| Error | Failed calculating pull for `{pickup}` | `VelocityJoint.FixedUpdate` |  |
| Error | Vivox Voice Chat Unable to parse player id from '`{player.Account.Name}`' | `VoiceChat.OnPlayerJoinedChannel` ([Connection messages](../networking/messages.md)) |  |
| Error | Error starting web server thread | `WebServerThread.Run` |  |
| Warn | This button doesn't work for this component | `ChildSyncableCollectionBase<T>.GetChildren` |  |
| Warn | Outgoing queue limit hit for this frame by `{text}` | `Connection.QueueLimitReached` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Warn | Overriding existing message handler. Call ClearHandler(message) to ignore. | `Connection.SetHandler` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Warn | User has been paused for `{delay.TotalSeconds}` seconds, Disconnecting the connection: `{connection}` | `Connection.DisconnectAfterTimeout` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Warn | \[Domain\] Player or player controllers are null, cannot apply spawn position/rotation. | `Domain.MovePlayerToSpawnPoint` |  |
| Warn | Trying to handle message on disabled entity `{entity}` | `EntityMessageHandler.HandleMessage` ([Entity sync](../networking/entity-sync.md#entitymessagehandler)) |  |
| Warn | Trying to send message of type `{messageType}` from disabled entity `{entity}` to chunks | `EntityMessageHandler.SendToChunks` ([Entity sync](../networking/entity-sync.md#entitymessagehandler)) |  |
| Warn | Trying to send message of type `{messageType}` from disabled entity `{entity}` to player `{player}` | `EntityMessageHandler.SendToPlayer` ([Entity sync](../networking/entity-sync.md#entitymessagehandler)) |  |
| Warn | Unsupported message type on `{entity.Transform.name}` : `{type}` | `EntityMessageHandler.HandleMessage` ([Entity sync](../networking/entity-sync.md#entitymessagehandler)) |  |
| Warn | Missing entity `{SceneEntityMessage.EntityIdentifier}` on `{NetworkSceneManager.Current}` | `EntitySerializationMessage.Serialize` |  |
| Warn | Capped searched entities to: `{100}` | `EntityStatistics.SearchForEntities` |  |
| Warn | Capped Top Entities to: `{100}` | `EntityStatistics.UpdateTopEntitiesList` |  |
| Warn | Capped tracked entities to: `{100}` | `EntityStatistics.UpdateTrackedEntitiesStatsList` |  |
| Warn | There is no active game mode | `GameModeManager.StopCurrentModeAsync` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Warn | Unspawned entity `{spawned.Identifier}` is now spawned with name: `{spawned.name}` handling message now, type: `{entityMessageType}` | `InternalMessage.Serialize` | A client got a message for an entity before the entity's spawn arrived. It waited, and handles the message now. Usually harmless. |
| Warn | Not allowed to join server: `{joinResult.Message}` | `JoinServerPipeline.AttemptToConnectToServer` |  |
| Warn | Connection Receiver Data Item Pool is getting larger than: `{100}` | `MessageReceivePool.Put` |  |
| Warn | Trying to apply NaN torque on: `{rigidbody.name}` | `NetworkedJointDrivenRig.ApplyForceToRotateRigidbody` |  |
| Warn | Trying to send null chunk on the Network Rigidbody `{name}` positioned at `{position.FullString()}` parent `{Entity.ChunkingParent}` with chunk detector `{text}` | `NetworkRigidbody.SerializeChunkAndPosition` |  |
| Warn | Found `{name}` trying to sync null chunk again, destroying it | `NetworkTransform.Serialize` |  |
| Warn | Found `{name}` trying to sync null chunk, going to destroy on the next go | `NetworkTransform.Serialize` |  |
| Warn | No resources - Connection: `{connection.Identifier}` Channel: `{channel.Identifier}` | `Packet.Send` |  |
| Warn | \[Player\] Respawning `{UserInfo}`, original position was a null chunk at `{spawnPosition}` | `Player.GetDefaultSpawnChunkAndUpdatePosition` ([Player](../networking/player.md)) |  |
| Warn | Player not currently in chunk. No fading done. | `PlayerController.WaitForChunkLoad` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Warn | Trying to add too many messages to the message queue (above a 1000) | `PlayerMessageDisplay.Display` |  |
| Warn | Unsupported DisplayMessageType `{type}` | `PlayerMessageDisplay.Display` |  |
| Warn | Connection without player got disconnected | `ServerHandler.UserLeft` ([ServerHandler](../networking/server-handler.md)) |  |
| Warn | Connection: `{connection.Identifier}` has not responded with a ready to spawn within 2 minutes, terminating connection | `ServerHandler.CheckForNoResponseFromConnectionAsync` ([ServerHandler](../networking/server-handler.md)) | A client connected but never said it had loaded, within 2 minutes. The server drops it. Usually a client that crashed or hung while loading. |
| Warn | Connection: `{connection.Identifier}` was disconnected before server was able to load save for player: `{connection.UserInfo.Username}` | `ServerHandler.SpawnPlayerToClient` ([ServerHandler](../networking/server-handler.md)) |  |
| Warn | Player: `{connection.UserInfo}` connection disconnected while waiting for scene load | `ServerHandler.SpawnPlayerToClient` ([ServerHandler](../networking/server-handler.md)) |  |
| Warn | Already trying to start server. | `ServerLifetimePipeline.AttemptToStartServer` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Warn | Failed to start server: `{error}` | `ServerLifetimePipeline.StartRejected` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Warn | Received disconnect event for unknown connection, id: `{connection.Id}` | `ServerPacketReceiver.DestroyConnection` |  |
| Warn | Skipping allowed check for dev join token | `ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowed` |  |
| Warn | Already Wiping | `ServerWipeManager.WipeServer` ([Saving](../networking/saving.md)) |  |
| Warn | Begining Cave Wipe | `ServerWipeManager.WipeCaves` ([Saving](../networking/saving.md)) |  |
| Warn | Begining Wipe | `ServerWipeManager.WipeServer` ([Saving](../networking/saving.md)) |  |
| Warn | Clearing Cave Teleporters | `ServerWipeManager.WipeCaves` ([Saving](../networking/saving.md)) |  |
| Warn | Clearing Caves | `ServerWipeManager.WipeCaves` ([Saving](../networking/saving.md)) |  |
| Warn | Finished Cave Wipe | `ServerWipeManager.WipeCaves` ([Saving](../networking/saving.md)) |  |
| Warn | Moved player `{save.PlayerIdentifier}` out of caves | `ServerWipeManager.MovePlayerOutOfCaves` ([Saving](../networking/saving.md)) |  |
| Warn | Moving players out of the caves | `ServerWipeManager.WipeCaves` ([Saving](../networking/saving.md)) |  |
| Warn | Wipe: deleting entire save folder for server | `ServerWipeManager.DeleteEntireSaveFolder` ([Saving](../networking/saving.md)) |  |
| Warn | Wipe: deleting saves | `ServerWipeManager.DeleteChunksAndCache` ([Saving](../networking/saving.md)) |  |
| Warn | Wipe: running wipe operations | `ServerWipeManager.FastWipeOperations` ([Saving](../networking/saving.md)) |  |
| Warn | Wipe: sanitizing player saves | `ServerWipeManager.RunThroughAllPlayers` ([Saving](../networking/saving.md)) |  |
| Warn | Wipe: wiped successfully | `ServerWipeManager.WipeServer` ([Saving](../networking/saving.md)) |  |
| Warn | Last safe position is not safe anymore at `{LastSafePosition.FullString()}`, moving to Respawn Point | `SmoothLocomotion.MoveToSafety` ([Locomotion](../networking/locomotion.md#smoothlocomotion)) |  |
| Warn | Attempting to redestroy connection to player: `{connection.Identifier}` | `Socket.DestroyConnection` ([Sockets and connections](../networking/connections.md#socket)) |  |

<details>
<summary>Info and debug lines (150)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | Cancelling running user disconnect due to client pause: `{connection}` | `Connection.DisconnectAfterTimeout` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Info | Queue is fine for connection - id: `{TransportConnection.Id}` | `Connection.QueueLimitReached` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Info | Received connection pause, connection: `{connection}`, isPausing: `{value}` | `Connection.HandleConnectionPause` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Info | Starting to Queue message on connection: `{this}` | `Connection.StartQueuing` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Info | `{UserInfo}` was disconnected for: `{reason}` | `Connection.Disconnect` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Info | `{text}` : `{quaternion}` | `CustomFixedJoint.Setup` |  |
| Info | Ending customization for `{Player.UserInfo}` | `CustomizationState.Sync` ([Player states](../networking/player-states.md)) |  |
| Info | Saving customization from `{Player.UserInfo}` | `CustomizationState.Sync` ([Player states](../networking/player-states.md)) |  |
| Info | Syncing customization from `{Player.UserInfo}` | `CustomizationState.Sync` ([Player states](../networking/player-states.md)) |  |
| Info | Verifying customization from `{Player.UserInfo}` | `CustomizationState.Sync` ([Player states](../networking/player-states.md)) |  |
| Info | `{Player.UserInfo.Username}` killed by `{impactHit.ImpactDetector}` (`{impactHit.Source}`) wielded by `{impactHit.Wielder.name}` (`{UserInfo}`) | `DeadState.OnActivate` ([Player states](../networking/player-states.md)) |  |
| Info | `{Player.UserInfo.Username}` killed by `{tool.name}` (`{impactHit.Source}`) wielded by `{tool.Wielder.name}` (`{UserInfo}`) | `DeadState.OnActivate` ([Player states](../networking/player-states.md)) |  |
| Info | `{Player.UserInfo}` killed by `{KillingImpact.Source}` | `DeadState.OnActivate` ([Player states](../networking/player-states.md)) |  |
| Info | \[Domains\] Destroying domain `{this}` | `DomainController.DestroyDomain` |  |
| Info | Player `{player}` recieved sync for domain `{domainChunk}` | `DomainController.SyncAddDomainToAddedChunks` |  |
| Info | Server is syncing domain `{domainChunk}` to player `{player}` | `DomainController.SyncAddDomainToAddedChunks` |  |
| Info | Search found `{searchedEntities.Count}` entites | `EntityStatistics.SearchForEntities` |  |
| Info | Searching for entities with: `{searchString}` | `EntityStatistics.SearchForEntities` |  |
| Info | Updated stats for tracked entities | `EntityStatistics.UpdateTrackedEntitiesStatsList` |  |
| Info | Updating tracked entities | `EntityStatistics.UpdateTrackedEntitiesStatsList` |  |
| Info | Swapping to game scene with index: `{sceneIndex}` took `{timer.Elapsed.TotalMilliseconds}` ms | `GameMode.LoadAndSwapToGameSceneAsync` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Info | \[Game Mode Manager\] Mode '`{newMode}`' started. | `GameModeManager.StartGameModeAsync` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Info | Attempting to activate game mode: `{newMode}` | `GameModeManager.StartGameModeAsync` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Info | Starting game mode took `{timer.Elapsed.TotalMilliseconds}` ms | `GameModeManager.StartGameModeAsync` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Info | Stopping current game mode: `{currentMode}` | `GameModeManager.StopCurrentModeAsync` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Info | Running garbage collection | `GarbageCollectTimer.RunGarbageCollect` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Info | \[JoinServerHameMode\] Connect attempt `{retryCount}` failed `{recoverable}` with reason `{connectionResult.Result}` and message: `{connectionResult.ErrorMessage}`. | `JoinedServerGameMode.ConnectToServer` |  |
| Info | \[JoinServerHameMode\] Connect to server `{server.Name}` | `JoinedServerGameMode.ConnectToServer` |  |
| Info | Informing Server we are ready to spawn | `JoinedServerGameMode.LoadGameScene` |  |
| Info | Attempting to connect to server. Name: `{ServerConnectingTo.Name}`. IP: `{serverIpAddress}`:`{connectionInfo.GamePort}`. | `JoinServerPipeline.AttemptToConnectToServer` |  |
| Info | Connected to the server successfully | `JoinServerPipeline.ConnectionApprovedByServer` |  |
| Info | Connection cancelled | `JoinServerPipeline.CancelAttempt` |  |
| Info | Connection to server was lost | `JoinServerPipeline.ConnectionToServerLost` |  |
| Info | Connection to server was not successful | `JoinServerPipeline.ConnectionToServerFailed` |  |
| Info | Prerequisites finished. | `JoinServerPipeline.HandleServerConnectionResponse` |  |
| Info | Server accepted join request. Waiting for prerequisites | `JoinServerPipeline.HandleServerConnectionResponse` |  |
| Info | Incoming Server Transport Override: `{transportSystem}` | `NetworkingSettings.GetTransportSystem` |  |
| Info | Selected Transport System: '`{transportSystem2}`' | `NetworkingSettings.GetTransportSystem` |  |
| Info | Set Network transport to `{transport}` | `NetworkingSettings.SetTransportSystem` |  |
| Info | Closing Networking Socket: `{socket}` HostId: `{socket.TransportSocket}` | `NetworkManager.CloseSocket` ([Sockets and connections](../networking/connections.md#networkmanager)) |  |
| Info | Created a Networking Socket, Port: '`{0}`', IsServer: '`{1}`', Channels: '`{2}`', Default-Channel: '`{3}`', Transport `{4}` | `NetworkManager.CreateSocket` ([Sockets and connections](../networking/connections.md#networkmanager)) |  |
| Info | Terminating NetworkManager, Transport Started: `{IsTransportStarted}` Number of Sockets: `{sockets.Count}` | `NetworkManager.Terminate` ([Sockets and connections](../networking/connections.md#networkmanager)) |  |
| Info | Finished Starting NetworkScene, took `{timer.Elapsed.TotalMilliseconds}` ms | `NetworkScene.Initialize` |  |
| Info | NetworkScene Awake() | `NetworkScene.Awake` |  |
| Info | TEMP pre server started | `NetworkScene.InitializeAsServer` |  |
| Info | TEMP scene started | `NetworkScene.InitializeAsServer` |  |
| Info | No joint used | `PickupJoints.CreateJoint` |  |
| Info | \[Player on Server\] Awaiting for `{UserInfo}` to load `{chunk.ChunkIdentifier}` | `Player.AwaitRemoteClientToLoadChunk` ([Player](../networking/player.md)) |  |
| Info | \[Player on Server\] Finished waiting for `{UserInfo}` to load `{chunk.ChunkIdentifier}` | `Player.AwaitRemoteClientToLoadChunk` ([Player](../networking/player.md)) |  |
| Info | \[Player:Server\] Saving all players | `Player.SaveAll` ([Player](../networking/player.md)) |  |
| Info | \[Player:Server\] Syncing player for `{UserInfo}` | `Player.OnConnected` ([Player](../networking/player.md)) |  |
| Info | Player: `{UserInfo.Username}` Disconnected from Platform | `Player.OnDisconnectedFromPlatform` ([Player](../networking/player.md)) |  |
| Info | Saving player: `{item.UserInfo}` | `Player.SaveAll` ([Player](../networking/player.md)) |  |
| Info | `{UserInfo.Username}` controller saved. | `Player.SaveControllerAndState` ([Player](../networking/player.md)) |  |
| Info | `{UserInfo.Username}` had no controller while saving | `Player.SaveControllerAndState` ([Player](../networking/player.md)) |  |
| Info | `{UserInfo.Username}` state saved. | `Player.SaveControllerAndState` ([Player](../networking/player.md)) |  |
| Info | `{UserInfo.Username}` with saveFile (`{saveFile}`) not saving | `Player.SaveControllerAndState` ([Player](../networking/player.md)) |  |
| Info | `{UserInfo}` was kicked for: '`{reason}`' | `Player.Kick` ([Player](../networking/player.md)) |  |
| Info | Loaded save for `{NetworkPlayer}` | `PlayerCharacter.LoadFrom` ([PlayerController and the body](../networking/player-controller.md#playercharacter)) |  |
| Info | No save data found for `{NetworkPlayer}` - loading default data | `PlayerCharacter.LoadFrom` ([PlayerController and the body](../networking/player-controller.md#playercharacter)) |  |
| Info | `{NetworkPlayer}` linked to player character `{name}` | `PlayerCharacter.OnLinkedToPlayer` ([PlayerController and the body](../networking/player-controller.md#playercharacter)) |  |
| Info | PlayerController Sync Received `{player2.UserInfo.Username}` -&gt; `{Player.Current.UserInfo.Username}` | `PlayerController.SyncPlayer` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Info | Displaying message: "`{topMessage.Message}`" | `PlayerMessageDisplay.DisplayMessageQueue` |  |
| Info | Cache `{name}` doesn't exist. Generating... | `ServerCacheManager.GetCache` |  |
| Info | Cache `{name}` took `{timer.Elapsed.TotalMilliseconds}`ms to generate. | `ServerCacheManager.GetCache` |  |
| Info | Loading cache `{name}` took `{timer.Elapsed.TotalMilliseconds}`ms | `ServerCacheManager.GetCache` |  |
| Info | Requesting cache `{cache}` from connection `{connection.Identifier}` | `ServerCacheManager.EnsureDownloadedToClient` |  |
| Info | `{connection.Identifier}` returned cache result for `{value}`. Success : `{flag}` | `ServerCacheManager.HandleCacheRequest` |  |
| Info | Created group: `{created.Group}` | `ServerCreator.CreateServerAsync` |  |
| Info | Creating in region: `{regions[scroller.CurrentEnumIndex].Name}` | `ServerCreator.CreateServerAsync` |  |
| Info | Released unused index `{mapIndex}` while the current is `{currentLoaded}` | `ServerCubeMaps.ApplyCubeMap` |  |
| Info | Bootup status: `{message}` | `ServerHandler.SetBootupMessage` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Checking user prerequisites on connection `{connection.Identifier}`: `{connection.UserInfo}` | `ServerHandler.UserPrerequisites` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Connection Created: `{connection.Identifier}` | `ServerHandler.ConnectionCreated` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Connection Step for `{connection.Identifier}` - `{value}` | `ServerHandler.UserPrerequisites` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Finished bootup | `ServerHandler.Bootup` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | No respond from connection: `{connection.Identifier}` check has been cancelled | `ServerHandler.CheckForNoResponseFromConnectionAsync` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Player: `{connection.UserInfo.Username}` signalled ready to spawn, starting player spawn process | `ServerHandler.SpawnPlayerToClient` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Spawning Player Object: `{connection.UserInfo.Username}`. | `ServerHandler.SpawnPlayerToClient` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Starting bootup | `ServerHandler.Bootup` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Stopping Server, reason: `{reason.Reason}` | `ServerHandler.StopAsync` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Stopping ServerHandler for migration | `ServerHandler.StopForMigration` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Successfully deregistered server | `ServerHandler.OnServerStopped` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | User joined on connection `{connection.Identifier}`: `{connection.UserInfo}` | `ServerHandler.UserJoined` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | User left: `{connection.UserInfo.Username}` | `ServerHandler.UserLeft` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Waiting for bootup steps for `{connection.Identifier}` | `ServerHandler.UserPrerequisites` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Waiting for player to signal theyre ready to spawn | `ServerHandler.UserJoined` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Waiting for scene load before spawning player: `{connection.UserInfo}` to client | `ServerHandler.SpawnPlayerToClient` ([ServerHandler](../networking/server-handler.md)) |  |
| Info | Launching External Server | `ServerHostingGameMode.ActivateAsync` |  |
| Info | Added server lock: `{serverLock}` | `ServerLockCollection.Add` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Info | Removed server lock: `{serverLock}` | `ServerLockCollection.Remove` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Info | Checking player join took: `{stopwatch.Elapsed.TotalMilliseconds}` ms | `ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom` |  |
| Info | Checking player join took: `{timer.Elapsed.TotalMilliseconds}` ms | `ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowed` |  |
| Info | Disconnecting user `{connection.UserInfo.Username}` from server `{server.ServerInfo.Name}` | `ServerPlayerConnectionHandlerOld.OnUserLeft` |  |
| Info | Received Join request from player: `{playerId}` | `ServerPlayerConnectionHandlerOld.CheckApproved` |  |
| Info | Request accepted, doing prerequisites. UserId: `{playerId}` | `ServerPlayerConnectionHandlerOld.CheckApproved` |  |
| Info | Sending request response, UserId: `{playerId}` | `ServerPlayerConnectionHandlerOld.CheckApproved` |  |
| Info | Destroying connection to player: `{connection.PlayerName}` | `Socket.DestroyConnection` ([Sockets and connections](../networking/connections.md#socket)) |  |
| Info | Auto Saving at `{DateTime.Now}` | `StreamerManager.AutoSave` |  |
| Info | Saving World. Instant: `{isInstant}` | `StreamerManager.SaveWorld` |  |
| Info | World Saved over `{totalMilliseconds.ToString("F3")}`ms. | `StreamerManager.SaveWorld` |  |
| Info | There was already a joint present | `VelocityJoint.Initialize` |  |
| Info | Creating web server | `WebServerThread.Create` |  |
| Info | Running web server | `WebServerThread.Run` |  |
| Info | Web server disposed | `WebServerThread.Dispose` |  |
| Info | Web server state change: `{e.NewState}` | `WebServerThread.StateChanged` |  |
| Debug | Approving connection: `{connection.Identifier}` | `ClientPacketReceiver.CreateConnection` |  |
| Debug | Connection Requested: `{id}` | `ClientPacketReceiver.CreateConnection` |  |
| Debug | Disconnect Received: `{id}` | `ClientPacketReceiver.DestroyConnection` |  |
| Debug | Save Disk: Stream reader: `{stream.IsReading}` remaining = `{currentOutOfCombatTimer}` | `CombatState.SerializeDisk` ([Player states](../networking/player-states.md)) |  |
| Debug | Cleared all handlers on connection | `Connection.ClearAllHandlers` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Debug | Disconnect sending from `{Socket.IsServer ? "Server" : "Client"}` | `Connection.Dispose` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Debug | Disconnect successful | `Connection.Dispose` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Debug | Disconnected failed: `{networkTransportResult.Error}` | `Connection.Dispose` ([Sockets and connections](../networking/connections.md#connection)) |  |
| Debug | Creating new socket for connection | `ConnectToServerUtility.ConnectToServer` ([Joining a server](../networking/joining.md)) |  |
| Debug | Ignoring destroy message for `{entity}` as it had spawn index `{entity.SpawnIndex.Index}` higher than the despawn of `{cachedSpawnIndex}` | `DestroyMessage.Serialize` |  |
| Debug | Ignoring destroy message for `{SceneEntityMessage.Entity}` as it had spawn index `{Index}` higher than the despawn of `{entitySpawnIndex}` | `DestroyMessage.Serialize` |  |
| Debug | \[Comain Controller\] Domain created for `{player}` at `{vector}` with index `{nextAvailableOffsetIndex}` - bounds: `{component.Chunk.Bounds}` | `DomainController.CreateDomain` |  |
| Debug | \[Domains\] Attempting to destroy domain `{this}` | `DomainController.DestroyDomain` |  |
| Debug | \[Domains\] Domain `{this}` destroyed, clearing save... | `DomainController.DestroyDomain` |  |
| Debug | \[Domains\] Domain `{this}` save cleared. | `DomainController.DestroyDomain` |  |
| Debug | Creating JoinedServerGameMode for server `{server.Name}` `{server}` | `JoinedServerGameMode.JoinedServerGameMode` |  |
| Debug | Connection attempt failed, waiting 1 sec and retrying | `JoinServerPipeline.AttemptToConnectToServer` |  |
| Debug | Getting the connection info for server: `{ServerConnectingTo.Name}` | `JoinServerPipeline.AttemptToConnectToServer` |  |
| Debug | Got server response: `{joinResult.Result}` | `JoinServerPipeline.AttemptToConnectToServer` |  |
| Debug | Starting new join server pipeline to connect to `{server.Name}` : `{server.Identifier}` | `JoinServerPipeline.JoinServerPipeline` |  |
| Debug | \[Player\] Local player set to `{player}` | `Player.SetLocal` ([Player](../networking/player.md)) |  |
| Debug | Platform on entity: `{Identifier}` was changed to: `{mode}` | `Player.SetPlayerMode` ([Player](../networking/player.md)) |  |
| Debug | PlayerSystem on entity: `{Identifier}` was changed to: `{target}` | `Player.SetPlatformTarget` ([Player](../networking/player.md)) |  |
| Debug | `{this}` has loaded `{chunk}`, spawning `{controllerType}` at `{spawnPosition}` | `Player.SpawnNewControllerAtPointInChunk` ([Player](../networking/player.md)) |  |
| Debug | `{this}` spawning in `{chunk}`, waiting for client to load chunk... | `Player.SpawnNewControllerAtPointInChunk` ([Player](../networking/player.md)) |  |
| Debug | Attemping interact on player load `{commonInteractable}` | `PlayerController.SerializeInteractor` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Debug | Setting Player Controller Current, old: `{current}` new: `{value}` | `PlayerController.Current` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Debug | Waiting for fade in of `{currentChunk.ChunkIdentifier}` | `PlayerController.WaitForChunkLoad` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Debug | `{chunk.ChunkIdentifier}` finished loading | `PlayerController.TriggeredFadeIn` ([PlayerController and the body](../networking/player-controller.md)) |  |
| Debug | \[PlayerStates\] player `{Player}` deactivated state `{Name}` | `PlayerStateBase.Deactivate` ([Player states](../networking/player-states.md#playerstatebase)) |  |
| Debug | \[PlayerStates\] `{Player.UserInfo}` activated state: `{Name}` | `PlayerStateBase.Activate` ([Player states](../networking/player-states.md#playerstatebase)) |  |
| Debug | \[PlayerStates\] &#123;Player&#125; has enmded state &#123;Name&#125; | `PlayerStateBase.EndState` ([Player states](../networking/player-states.md#playerstatebase)) |  |
| Debug | Already have `{newState.Name}` as current state | `PlayerStateManager.SetState` ([Player states](../networking/player-states.md#playerstatemanager)) |  |
| Debug | Player State manager does not have a state yet and will therefore not sync to the remote | `PlayerStateManager.SyncStatesToRemotePlayer` ([Player states](../networking/player-states.md#playerstatemanager)) |  |
| Debug | Setting loaded State: `{item2}` resulted in Setting another state, skipping the rest of the state loading as the save data will be for the now skipped states | `PlayerStateManager.LoadFromStream` ([Player states](../networking/player-states.md#playerstatemanager)) |  |
| Debug | Player has left the server: `{player.UserInfo.Username}` | `ServerHandler.RemovePlayer` ([ServerHandler](../networking/server-handler.md)) |  |
| Debug | using max fail count of: `{result}` | `ServerHandler.PingServer` ([ServerHandler](../networking/server-handler.md)) |  |
| Debug | Attempting to start `{serverAccess.ServerInfo.Name}` | `ServerLifetimePipeline.StartServerHandler` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Debug | Server ended. ServerStartupPipeline reopened. | `ServerLifetimePipeline.ServerEnded` ([Server lifecycle](../networking/server-lifecycle.md)) |  |
| Debug | Connection Approved: `{connectionIdentifier}` | `ServerMessageReceiverPerConnection.HandleConnectionEvent` |  |
| Debug | Connection Requested: `{connectionIdentifier}` | `ServerMessageReceiverPerConnection.HandleConnectionEvent` |  |
| Debug | Disconnect Received: `{connectionIdentifier}` | `ServerMessageReceiverPerConnection.HandleDisconnectEvent` |  |
| Debug | UserStatus: `{userInfoAndRole.MemberStatus}` | `ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowed` |  |
| Debug | Wiping chunk `{chunk.ChunkIdentifier}` with `{list.Count}` entities | `ServerWipeManager.WipeChunk` ([Saving](../networking/saving.md)) |  |

</details>

## Players and characters

120 errors and warnings, 54 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Error | Action Index: '`{index}`' no found | `ActionItemHandlersBase.SummonIndexIsValid` |  |
| Error | Action: `{summonAction.name}` no found | `ActionItemsManager.TryGetActionIndex` |  |
| Error | `{this}` Already have input: `{input}` registered with bowstring: `{bowStrings[input]}` and now trying to register with string: `{component}` | `BowDrawSkill.Register` |  |
| Error | Can only use the bow string pullback input with a bow string, trying to use it on: `{pickupHandler.Pickup}` | `BowStringPullbackInputMethod.RegisterHandler` |  |
| Error | Encountered an error in calling IK PreRenderCallback for player: `{playerCharacter.name}` | `CharacterIKController.OnBodyIKFinished` |  |
| Error | Encountered an error in calling IK Updates Finished for player: `{playerCharacter.name}` | `CharacterIKController.OnBodyIKFinished` |  |
| Error | Encountered an error in calling Pre IK Updates for player: `{playerCharacter.name}` | `CharacterIKController.OnPreIKUpdate` |  |
| Error | Trying to enable control thats already active | `CharacterIKController.EnableIKControl` |  |
| Error | Cannot add action mapping that is null | `ControllerActions.AddActionMapping` |  |
| Error | Cannot set action mapping that is null | `ControllerActions.SetActionMapping` |  |
| Error | No body type found. | `CosmeticHairPart.PostRandomize` |  |
| Error | No eyebrows found. | `CosmeticHairPart.PostRandomize` |  |
| Error | Attempting to read cosmetic `{this}` | `CosmeticMeshPartBase<T>.Attach` |  |
| Error | Failed to load `{part.hash}` | `CosmeticPacker.FillPartMap` |  |
| Error | Failed to Pack meshes, currently using `{stringBuilder}` | `CosmeticPacker.PackMeshes` |  |
| Error | Error packing cosmetics | `CosmeticPackScheduler.StartProcessing` |  |
| Error | Error checking save for preset | `CosmeticPresetsManager.CheckSavePresetIfEmpty` |  |
| Error | Error creating preset trophy | `CosmeticPresetsManager.GetCurrentPreset` |  |
| Error | Preset Manager `{name}` failed login with exception e | `CosmeticPresetsManager.LoggedIn` |  |
| Error | Error applying data to trophy | `CosmeticPresetTrophy.Apply` |  |
| Error | Somehow Cosmetic Scroll Element didn't get destroyed, but it's contents did, so I'm forcing it | `CosmeticScrollElement.UpdateOwned` |  |
| Error | Circular reference found on `{name}`. This will cause a crash when trying to paint this item | `CustomizationVisual.OnValidate` |  |
| Error | No primary slots found on `{name}` | `CustomizationVisual.OnValidate` |  |
| Error | Visual `{visual.Definition.Name}` has `{visual.Parts.Length}` parts, but only `{arguments.Length}` arguments were provided | `CustomizationVisualManager.Register` |  |
| Error | Failed to apply arguments for `{name}` on `{handler.Name}` | `CustomizationVisualPart.ChangeArguments` |  |
| Error | Failed to attach `{name}` to `{handler.Name}` | `CustomizationVisualPart.Show` |  |
| Error | Failed to detach `{name}` from `{handler.Name}` | `CustomizationVisualPart.Hide` |  |
| Error | Error interacting with editable slot | `EditableSlot.InteractedWith` |  |
| Error | Minimum Assessed Points is larger than the total Elbow Data Points | `ElbowController.PopulateDataPointLists` |  |
| Error | Youre trying to override the player settings object with a new elbow data point set | `ElbowController.ElbowDataPoints` |  |
| Error | Could not casr element to TeleportPointElement | `GymnasiumTeleportPointPage.OnTeleportPointSelected` |  |
| Error | ControllerOffsetSettings is null, no hand alignment will be applied | `Hand.UpdateControllerOffsets` |  |
| Error | Failed to perform gradual grip. Gesture Map `{gestureMap}` Controller `{Controller}` Interactor `{Controller.Interactor}` Player Controller `{Controller.PlayerController}` | `HandGestureController.PerformGradualGrip` |  |
| Error | Received hand gesture with animation index: `{value2}`, couldnt find any hand gestures for this | `HandGestureController.Serialize` |  |
| Error | Hand Target `{targetName}` for `{entity.PrefabRoot.SafeName}` has been destroyed | `HandTargetHandler.RegenerateHandTarget` |  |
| Error | Input To Action Mapping: `{platform}` Unsupported - You need to add a case for this platform. | `InputToActionMapping.GetButtonsForPlatform` |  |
| Error | Error initializing customization room | `MainMenuCustomizationInterface.InitializeRoom` |  |
| Error | Shop Interface failed to login with Exception | `MainMenuShopInterface.LoggedIn` |  |
| Error | Error setting up MainMenuShopItem | `MainMenuShopItem.Setup` |  |
| Error | Received a mod mute request from non mod player `{player.UserInfo.Identifier}`-`{player.UserInfo.Username}` | `ModsMicMuteManager.SyncRequest` |  |
| Error | Not on server, have no data to show | `OfflinePlayerProgressionHandler.LogCurrent` |  |
| Error | Failed to get Server Settings permissions for player `{userIdentifier}` | `PermissionsHelper.DoesUserHavePermissions` | The client's settings menu asks Alta's web API whether you may change server settings. That API is gone, so it fails and the answer is no. |
| Error | Cannot get content manager for null player. | `PerPlayerManager<TThis, TContent, TSaveFormat>.GetContentIfLoaded` |  |
| Error | Failed to load content for player `{playerIdentifier}` | `PerPlayerManager<TThis, TContent, TSaveFormat>.GetContentAsync` |  |
| Error | \[PlayerChunkManager\] `{player}` is in a null chunk - known micro tutorial issue - keeping current chunk despite bounds check failure. | `PlayerChunkManager.PlayerControllerSet` |  |
| Error | Can't move to a null chunk (`{player.UserInfo}`) | `PlayerChunkManager.LoadChunkAt` |  |
| Error | Tried to move player: `{player.UserInfo}` to chunk: `{newChunk}` and position: `{position}` but position is really in chunk: `{Chunk}` | `PlayerChunkManager.LoadChunkAt` |  |
| Error | `{player}` is in a null chunk after trying to load chunks at position `{position}`, sending to respawn | `PlayerChunkManager.LoadFromPosition` |  |
| Error | Trying to send a message from a client | `PlayerCommunicationManager.SendMessageToPlayer` |  |
| Error | Error while loading player | `PlayerSave.ReadFrom` |  |
| Error | Error while saving player | `PlayerSave.WriteTo` |  |
| Error | Invalid Player State Type | `PlayerStateFactory.CreateNewPlayerState` |  |
| Error | Null postProcessController in PlayerVisionComfort | `PlayerVisionComfort.UpdateComfort` |  |
| Error | Could not find the purchasable : `{hash}` | `Purchasable.Get` |  |
| Error | Couldnt load all purchasables into RAM | `Purchasable.LoadAllIntoRAM` |  |
| Error | Failed loading `{load.Value}` | `Purchasable.LoadAllIntoRAM` |  |
| Error | Failed to load purchasable `{text}` | `Purchasable.LoadAllIntoRAM` |  |
| Error | Issue updating current store rotation, clearing it | `PurchasedList.UpdateCurrentRotation` | The shop rotation comes from Alta's web API, which is gone. Expected. |
| Error | Dont have an original material for renderer: `{allRenderer.name}` | `RendererMaterializerHandler.ResetAllMaterialsInstanced` |  |
| Error | \[BEACON CONTROLLER\] Tried to spawn a beacon prefab that doesn't have an IRespawnBeaconView Component | `RespawnBeaconController.SpawnBeaconViewForShrine` |  |
| Error | \[RESPAWN SHRINE\] Trying to add player `{playerId}` to list of subscribers for shrine `{ShrineId}`, but they are already subscribed | `RespawnShrineModel.AddSubscriber` |  |
| Error | \[RESPAWN SYSTEM MODEL\] Received null dictionary from load. | `RespawnSystemModel.LoadShrineModelsFromJsonString` |  |
| Error | \[RESPAWN SYSTEM SETTINGS\] Detected duplicate GUID `{shrineId}` on shrine `{respawnShrineSetting.name}` | `RespawnSystemSettings.OnEnable` |  |
| Error | \[RESPAWN SYSTEM SETTINGS\] Does NOT contain a global shrine | `RespawnSystemSettings.OnEnable` |  |
| Error | Error spawning event orb | `ReviveCompletableActivity.SpawnReviveOrb` |  |
| Error | Failed to raise server settings change event | `ServerSettingsChangeLogger.LogServerSettingsChange` |  |
| Error | Could not write server settings, cancelling sync. | `ServerSettingsSync.WriteServerSettings` |  |
| Error | Error reading synced server settings. | `ServerSettingsSync.ClientReadSettingsFromServer` |  |
| Error | Error: Request for server settings failed. | `ServerSettingsSync.RequestServerSettingsFromServer` |  |
| Error | Error: Request for server settings was cancelled. | `ServerSettingsSync.RequestServerSettingsFromServer` |  |
| Error | Unable to determine permissions for reading synced server settings from `{player}`. | `ServerSettingsSync.SaveServerSettingsFromClient` |  |
| Error | Received null Server Settings from Server | `SettingsQuickAccessMenu.ValidateAccessAndGetServerSettings` |  |
| Error | Error trying to get custom shop config path | `ShopConfigUtility.GetCustomFolderPath` |  |
| Error | Failed loading custom store config | `ShopConfigUtility.GetCurrentShopConfigurationForUser` |  |
| Error | Failed to process purchase | `ShopInterface.AttemptBuy` |  |
| Error | Shop failed | `ShopInterface.LoggedIn` | The cosmetics shop couldn't load from Alta's web API, which is gone. Expected. |
| Error | `{item}` is marked as not owned and is not on the current store | `ShopInterface.UpdateCheckout` |  |
| Error | Orb received unknow slot for tree | `SkillOrb.SyncFull` |  |
| Error | Skill orb couldn't properly handle sync | `SkillOrb.SyncFull` |  |
| Error | Failed to receive Stats from Steam | `SteamStats.StatsReceived` |  |
| Error | Failed to store Stats on Steam | `SteamStats.StatsStored` |  |
| Error | Part is missing arguments `{part.Arguments?}` or Part `{cosmeticMeshPartBase}` | `TexturePacker.Pack` |  |
| Error | Part is missing texture `{Hash}` | `TexturePacker.Pack` |  |
| Error | Could not find Health Stat on AI Agent `{enemy.transform.name}` | `ToggleEnemyHealthBars.CheckEnemyNeedsHealthBar` |  |
| Error | Reading null color as primary, defaulting to ERROR color | `TwoColors.Serialize` |  |
| Error | Reading null color as secondary, defaulting to ERROR color | `TwoColors.Serialize` |  |
| Error | Writing null color as primary, defaulting to ERROR color | `TwoColors.Serialize` |  |
| Error | Writing null color as secondary, defaulting to ERROR color | `TwoColors.Serialize` |  |
| Warn | Player '`{player}`' was removed but no handlers were found for it. | `ActionItemHandlerCollectionMap.RemovePlayer` |  |
| Warn | Clavicle is null, please asign before continuing | `ArmIKControllerHelper.AttemptToFillTransformsFromClavicle` |  |
| Warn | Disabled cache not found | `CharacterCollisionController.SetColliders` |  |
| Warn | There is no controller of Type: `{typeof(T).Name}` in this controller collection. | `CharacterComponentControllerCollection.GetController` |  |
| Warn | Couldnt find bone on player that has name: `{currentBone.name}` | `CharacterRigPoser.StartBoneAnimation` |  |
| Warn | Cannot remove action mapping that is null | `ControllerActions.RemoveActionMapping` |  |
| Warn | Couldnt find buttons for action type: `{controllerAction.Type}` | `ControllerActions.SetActionMapping` |  |
| Warn | You are trying to override the controller of the hand: `{name}` with: `{value}` | `Hand.Controller` |  |
| Warn | Failed to get interactor for controller `{controller}` | `HandInteractor.Start` |  |
| Warn | Cannot trigger an action by input: NONE | `InputToActionMapping.GetButtonsForPlatform` |  |
| Warn | This mode for (All) contains an empty input field | `InputToActionMapping.GetButtonsForPlatform` |  |
| Warn | The neck IK controller has no IK component | `NeckIKController.SetActive` |  |
| Warn | Please assign the root bone | `NeckIKControllerHelper.FillNeckBonesFromRoot` |  |
| Warn | Player: `{player.UserInfo}` is already in chunk: `{Chunk}` | `PlayerChunkManager.LoadChunkAt` |  |
| Warn | Received a player text message for a player without a player controller | `PlayerCommunicationManager.HandlePlayerMessage` |  |
| Warn | Trying to send a message to player that doesnt have a player controller | `PlayerCommunicationManager.SendMessageToPlayer` |  |
| Warn | Null platform height offsets in `{name}` | `PlayerHeightFixer.GetPlatformHeightOffset` |  |
| Warn | Couldnt find item of type: `{typeof(T).Name}` with name/hash: `{text2}` | `PlayerProgressFlagConverter<T>.ConvertFrom` |  |
| Warn | Player Save for `{PlayerIdentifier}` had null content, was null Customization: `{flag}` State: `{flag2}` Prefab: `{flag3}` Progression: `{flag4}` Player: `{flag5}` | `PlayerSave.Dispose` |  |
| Warn | Read empty player save: `{info.FullName}` | `PlayerSave.ReadFrom` |  |
| Warn | This is a local test. Not banning player as there is no server ID to ban from | `RecentPlayerActionPage.UnbanPlayerTask` |  |
| Warn | Null mesh ref in `{name}` | `RecentPlayerElement.UpdateView` |  |
| Warn | \[RESPAWN SYSTEM\] Trying to subscribe `{player.UserInfo.Username}` to shrine `{shrineId}`, but it is already subscribed to it | `RespawnSystem.SetRespawnShrineForPlayer` |  |
| Warn | User `{player}` is not permitted to sync server settings. | `ServerSettingsSync.SaveServerSettingsFromClient` |  |
| Warn | New Bone added to spine manager, change the rotation limit settings | `SpineIKHelper.FillReferencesFromRoot` |  |
| Warn | Please assign the root bone | `SpineIKHelper.FillReferencesFromRoot` |  |
| Warn | `{GetType()}` tried setting active to same value | `StateTransition<TFrom, TTo>.IsActive` |  |
| Warn | Transition: `{transition}`:isActive=`{transition.IsActive}` is already present on state: `{parentState.Name}` | `StateTransitionsManager.Add` |  |
| Warn | Transition: `{transition}`:isActive=`{transition.IsActive}` was not in transitions list on state: `{parentState.Name}` | `StateTransitionsManager.Remove` |  |
| Warn | GetAchievement failed for `{identifier}` | `SteamStats.RequestUpdate` |  |
| Warn | GetStat failed for `{stat.Definition.Identifier}` | `SteamStats.RequestUpdate` |  |
| Warn | Steam Stats issue, reloading stats | `SteamStats.StatsStored` |  |

<details>
<summary>Info and debug lines (54)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | Achievement Unlocked: `{Name}` | `Achievement.ServerUpdate` |  |
| Info | Refreshed Managers | `ArmIKControllerHelper.ResetManagers` |  |
| Info | Created Bone Colliders | `CharacterCollisionControllerHelper.CreateBoneColliders` |  |
| Info | Generated Climbing Reports at `{dataPath}` | `ClimbingHandlerAnalytics.PrintLocal` |  |
| Info | Creating default custom offset file at `{text}` | `CustomControllerOffsetReader.CustomControllerOffsetReader` |  |
| Info | Handler exists : `{handlers.Contains(handler)}` | `CustomizationVisualManager.UpdateFirstPerson` |  |
| Info | \[TRANSITION\] `{GetType().Name}` added listeners. | `DownedToDeadTransition.AddListeners` |  |
| Info | \[TRANSITION\] `{GetType().Name}` removed listeners. | `DownedToDeadTransition.RemoveListeners` |  |
| Info | \[TRANSITION\] `{GetType().Name}` added listeners. | `DownedToPlayingTransition.AddListeners` |  |
| Info | \[TRANSITION\] `{GetType().Name}` removed listeners. | `DownedToPlayingTransition.RemoveListeners` |  |
| Info | BT `{i}`: `{bestMatches[i].Point}` | `ElbowController.FixedUpdateCharacterComponent` |  |
| Info | Deleted data point: `{dataPoint.name}` | `ElbowDataPointSet.DeleteDataPoint` |  |
| Info | \[GLOBAL SHRINE\] Received new system model update | `GlobalRespawnShrine.OnModelChanged` |  |
| Info | Missing bone on IKHandRoot : `{transform.name}` | `MasterHand.SetupBonesMap` |  |
| Info | `{player}` moved from `{oldChunk}` to `{currentChunk}` | `PlayerChunkManager.LoadFromPosition` |  |
| Info | Sending message to all `{Player.AllPlayers.Count}` players, message: `{message}` duration: `{displayDuration}` | `PlayerCommunicationManager.SendMessageToAllPlayers` |  |
| Info | Entity is null! Put this script on the same object as the entity or a child object | `PlayerDetect.Update` |  |
| Info | Drank liquid: `{container.ContainedLiquid}` from container: `{container}` | `PlayerDrinkingMouth.LiquidAmountChanged` |  |
| Info | Could not find the player '`{trimmed}`'. Skipping | `PlayerListConverter.ConvertFrom` |  |
| Info | \[TRANSITION\] `{GetType().Name}` added listeners. | `PlayingToDownedTransition.AddListeners` |  |
| Info | \[TRANSITION\] `{GetType().Name}` removed listeners. | `PlayingToDownedTransition.RemoveListeners` |  |
| Info | \[RESPAWN SHRINE\] Received new system model update | `PoweredRespawnShrine.OnModelChanged` |  |
| Info | \[RESPAWN SHRINE\] Shrine `{ShrineId}` fuel dock now has `{fuelValue}` fuel | `PoweredRespawnShrine.SetFuelForShrine` |  |
| Info | Loaded all: `{LoadedPurchasables.Count}` Purchasables into RAM | `Purchasable.LoadAllIntoRAM` |  |
| Info | Added: `{recentPlayerUserInfo}` as friend with result: `{friendAddedStatus}` | `RecentPlayerActionPage.AddFriend` |  |
| Info | Removing: `{recentPlayer.UserInfo.Username}` as friend, ID: `{RecentPlayerId}` | `RecentPlayerActionPage.RemoveFriend` |  |
| Info | LocalFriendshipStatusUpdated -= `{GetInstanceID()}` | `RecentPlayerElement.OnDisable` |  |
| Info | Reported: `{playerReportInfo.ReportedUser}` for: `{playerReportInfo.Type}` on server: `{playerReportInfo.Server}` | `ReportPlayers.CreateReport` |  |
| Info | \[RESPAWN SHRINE\] \]Added player `{playerId}` to list of subscribers for shrine `{ShrineId}` | `RespawnShrineModel.AddSubscriber` |  |
| Info | \[RESPAWN SHRINE\] Removed player `{playerId}` from list of subscribers for shrine `{ShrineId}` | `RespawnShrineModel.RemoveSubscriber` |  |
| Info | \[RESPAWN SHRINE\] Shrine `{ShrineId}` now has a fuel value of `{Fuel}` | `RespawnShrineModel.SetFuel` |  |
| Info | Received Stats from Steam | `SteamStats.StatsReceived` |  |
| Info | Steam Stats Initialized | `SteamStats.Initialize` |  |
| Info | Stored Stats on Steam | `SteamStats.StatsStored` |  |
| Info | You moved through a trigger! Trigger: `{player.UnityObjectName}` | `TeleportAwareTriggerExample.OnTriggerTeleportedThrough` |  |
| Info | Testing Packing... | `TexturePacker.Pack` |  |
| Debug | Clearing action mappings, hand index `{playerInput.HandIndex}` | `ControllerActions.ClearAllActionMappings` |  |
| Debug | Setting action mappings for platform: `{newActionMapping.Platform}` | `ControllerActions.SetActionMapping` |  |
| Debug | The specified action mappings (`{actionMappingToRemove}`) werent active, and hence could not be removed | `ControllerActions.RemoveActionMapping` |  |
| Debug | Menu controller disconnected from Platform | `LocomotionlessPlayerController.OnDisconnectedFromPlatform` |  |
| Debug | Menu controller disconnected from Platform | `MainMenuPlayerController.OnDisconnectedFromPlatform` |  |
| Debug | Mod not spawned to run | `ModsMicMuteManager.UpdateMute` |  |
| Debug | No local player to mute | `ModsMicMuteManager.UpdateMute` |  |
| Debug | Receiving mod mute request from `{argument.modPlayerIdentifier}` active `{argument.isActive}` | `ModsMicMuteManager.SyncRequest` |  |
| Debug | Sending mod mute request active `{argument.isActive}` | `ModsMicMuteManager.SendRequest` |  |
| Debug | Sending mod mute request from `{argument.modPlayerIdentifier}` active `{argument.isActive}` | `ModsMicMuteManager.SyncRequest` |  |
| Debug | Syncing on connect for `{value}` mods | `ModsMicMuteManager.SyncOnConnected` |  |
| Debug | Got levels for player `{playersToLevel.Key}` | `OfflinePlayerProgressionHandler.LogCurrent` |  |
| Debug | No player levels stored | `OfflinePlayerProgressionHandler.LogCurrent` |  |
| Debug | Player `{player.UserInfo.Username}` got `{num4}` xp on `{path}`, going from level `{num}` to level `{num5}` | `OfflinePlayerProgressionHandler.ModifySkills` |  |
| Debug | Player `{player.UserInfo.Username}` lost `{-levels}` levels on `{path}`, going from level `{num}` to level `{value.CurrentLevel}` | `OfflinePlayerProgressionHandler.ModifySkills` |  |
| Debug | `{original.name}` doesn't have \_MainTex property | `PlayerSpecialEffectsController.SetMaterial` |  |
| Debug | Found Alta Launcher settings file: `{text}` | `ShopConfigUtility.GetCustomFolderPath` |  |
| Debug | Found custom config file from Settings.json: `{text2}` | `ShopConfigUtility.GetCustomFolderPath` |  |

</details>

## World, chunks and saving

247 errors and warnings, 85 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Fatal | Ran out of chunk indices, failed for chunk: `{this}` | `Chunk.FindIndex` ([Chunks](../world/chunks.md#chunk)) | Every one of the 8191 chunk indices is in use. The server shuts itself down. |
| Fatal | Empty linked list contains full link with entity: `{networkEntityLink.NetworkEntity}` | `EntityManager.GetNextLink` ([Finding entities](../world/finding-entities.md#every-entity-entitymanager)) |  |
| Fatal | Failed to reserve link for embedded entity for `{entity.name}`. Link ID: `{nextLink.Index}`. Already contained: `{nextLink.NetworkEntity.name}` | `EntityManager.ForceRegisterEntity` ([Finding entities](../world/finding-entities.md#every-entity-entitymanager)) |  |
| Fatal | No Free Entity Links | `EntityManager.GetNextLink` ([Finding entities](../world/finding-entities.md#every-entity-entitymanager)) | All of the 100000 entity slots are taken, so a new entity gets no link. Expect errors after it. Far too many objects are loaded. |
| Error | There is no Element on `{plugin?}` but it's trying to be applied | `ApplyElementInstance.ApplyElementInstance` |  |
| Error | Atmosphere manager failing to get color for `{set}` | `AtmosphereManager.GetHighestPlugin` ([Time and environment](../world/time-and-environment.md)) |  |
| Error | Attempting to double register `{population.Definition.name}` to the BasicEcosystem `{name}` | `BasicEcosystem.Add` ([Populations and spawners](../world/populations.md)) |  |
| Error | Forest not ready!? | `BasicPopulationManager.Spawn` ([Populations and spawners](../world/populations.md)) |  |
| Error | Missing Loot Category on `{entry.Item.name}` | `Category.Filter` |  |
| Error | Failed to register portal for `{streamer}` with layer `{streamer.LayerIdentifier}` | `CaveLayerManager.RequestPortalRegistering` ([Caves](../world/caves.md#cavelayermanager)) |  |
| Error | Premature entrance setting | `CaveLayerManager.SetEntrance` ([Caves](../world/caves.md#cavelayermanager)) |  |
| Error | Registering cave layer prefab in incorrect order | `CaveLayerManager.CreateLayer` ([Caves](../world/caves.md#cavelayermanager)) |  |
| Error | There already exists a CaveLayerManager Instance | `CaveLayerManager.Awake` ([Caves](../world/caves.md#cavelayermanager)) |  |
| Error | Waited over 10s to generate A\* map for `{Chunk.ChunkIdentifier}`, returning null | `CaveLayerStreamer.GeneratePathfinding` ([Caves](../world/caves.md#cavelayerstreamer)) |  |
| Error | Trying to get connection before initialization | `CaveTeleporter.InitializeConnection` |  |
| Error | Destroying chunk: `{name}` | `Chunk.OnDestroy` ([Chunks](../world/chunks.md#chunk)) |  |
| Error | Shouldn't be clearing a chunk with players in it. | `Chunk.ClearEntities` ([Chunks](../world/chunks.md#chunk)) |  |
| Error | Error unloading `{Chunk}` `{ex.Message}` `{ex.StackTrace}` | `ChunkContentManager.Unload` |  |
| Error | Chunk Detector for destroyed entity `{chunker.NetworkEntity.SafeName}` is still running | `ChunkDetector.CheckForChunkUpdate` ([Chunks](../world/chunks.md#chunkdetector)) |  |
| Error | Added embedded entity to unloaded chunk `{entity.name}` - `{Chunk.name}` | `ChunkEntityManager.HandleChunkNotLoaded` |  |
| Error | Error during entity sort | `ChunkEntityManager.Cache` |  |
| Error | Failed to calculate distance between `{a.OriginalName}` and `{b.OriginalName}`, where they were destroyed `{a.IsBeingDestroyed}`,`{b.IsBeingDestroyed}` | `ChunkEntityManager.CompareEntitiesPosition` |  |
| Error | Not sure why this would happen... `{entity.name}` - `{Chunk.name}` | `ChunkEntityManager.HandleChunkNotLoaded` |  |
| Error | Embedded Entity changing it's parent: `{NetworkEntity.name}` - `{Parent.NetworkEntity.name}` - `{name}` | `Chunker.SetParent` ([Chunks](../world/chunks.md#chunker-how-an-entity-belongs-to-a-chunk)) |  |
| Error | Trying to set parent of destroyed entity `{NetworkEntity.SafeName}` to `{target.NetworkEntity.SafeName}` | `Chunker.SetParent` ([Chunks](../world/chunks.md#chunker-how-an-entity-belongs-to-a-chunk)) |  |
| Error | Trying to set the chunk of the uninitialized entity: `{NetworkEntity.name}`, newChunk: `{newChunk.name}` | `Chunker.SetChunkInternal` ([Chunks](../world/chunks.md#chunker-how-an-entity-belongs-to-a-chunk)) |  |
| Error | `{NetworkEntity.Identifier}` - `{NetworkEntity.OriginalName}` does not have a chunk and is evaluating to a new null chunk | `Chunker.EvaluateChunk` ([Chunks](../world/chunks.md#chunker-how-an-entity-belongs-to-a-chunk)) |  |
| Error | Chunk Physics Resolver has no center. This is okay, but will result in chunk physics resolving in an unoptimized order. | `ChunkPhysicsResolver.InitializeAsServer` |  |
| Error | Encountered issue resolving physics for chunk: `{chunk}` | `ChunkPhysicsResolver.ResolveChunkPhysicsAsync` |  |
| Error | Failed to load asset `{reference.AssetGUID}` in `{chunk.ChunkIdentifier}` | `ChunkPrefabPointer.UseOld` |  |
| Error | Failed to load asset `{reference}` in `{chunk.ChunkIdentifier}` | `ChunkPrefabPointer.Use` |  |
| Error | Failed to load pointer `{pointerInstance.Reference}` for chunk `{pointerInstance.Uses.FirstOrDefault()}` | `ChunkPrefabPointer.LoadNext` |  |
| Error | Failed to use pointer `{reference}` for chunk `{chunk}` | `ChunkPrefabPointer.Use` |  |
| Error | Trying to load a pointer that hasn't been 'used', `{reference}` | `ChunkPrefabPointer.WaitForLoad` |  |
| Error | `{pointerInstance.Reference}` is missing it's GameObject | `ChunkPrefabPointer.LoadNext` |  |
| Error | Failed to read Date Time `{num3}`/`{num2}`/`{num}` `{num4}`:`{num5}`:`{num6}` | `ChunkSaveFormat.LoadDate` |  |
| Error | Encountered Exception during chunk sync | `ChunkSync.SyncAll` |  |
| Error | Encountered Exception during chunk sync to `{playerSync.Key.UserInfo}` | `ChunkSync.SyncAll` |  |
| Error | Encountered Exception when trying to destroy entity: `{chunker.NetworkEntity.SafeName}` | `ChunkSync.SyncDestroy` |  |
| Error | Encountered issue in chunk sync, chunker: `{chunker.NetworkEntity.Identifier}` - `{chunker.NetworkEntity.SafeName}` last-chunker: `{chunker2.NetworkEntity.Identifier}` - `{chunker2.NetworkEntity.SafeName}` | `ChunkSync.SyncSpawn` |  |
| Error | Entity: `{chunker2.NetworkEntity.Identifier}` - `{chunker2.NetworkEntity.SafeName}` modified its children chunker list when doing its spawn to player | `ChunkSync.SyncSpawn` |  |
| Error | Existing: `{value}` Current: `{version}` | `ChunkVersioning.Add` |  |
| Error | Version already found for `{hash}` | `ChunkVersioning.Add` |  |
| Error | Client cache format is null, creating empty, name: `{name}` | `ClientCacheManager.GetCache` |  |
| Error | Error downloading cache `{cacheName}`. Disconnecting from server | `ClientCacheManager.HandleCacheRequest` |  |
| Error | Error preloading cache | `ClientCacheManager.HandleCacheRequest` |  |
| Error | Error downloading `{Name}`. Download failed. | `ClientCacheManager.FileDownloader.Start` |  |
| Error | Error downloading `{Name}`. Retrying in `{retryInterval}`ms | `ClientCacheManager.FileDownloader.Start` |  |
| Error | Error during file download for: `{Name}` | `ClientCacheManager.FileDownloader.Start` |  |
| Error | Error in outer method of downloader | `ClientCacheManager.FileDownloader.Start` |  |
| Error | Missing file that just downloaded? `{Name}` | `ClientCacheManager.FileDownloader.Start` |  |
| Error | Attempting to spawn `{prefabHash}` on fake entity id: `{entityIdentifier}` | `ClientSpawnManager.SpawnAsClient` ([Spawning](../world/spawning.md)) |  |
| Error | Cant spawn as client | `ClientSpawnManager.SpawnInternal` ([Spawning](../world/spawning.md)) |  |
| Error | Destroy should not be called on clients | `ClientSpawnManager.Destroy` ([Spawning](../world/spawning.md)) |  |
| Error | entity.Prefab is null or has a mismatched hash between entity.prefab.hash and prefabhash. `{entity.Prefab}` `{entity.Prefab.Hash}` `{prefabHash}` | `ClientSpawnManager.SpawnAsClient` ([Spawning](../world/spawning.md)) |  |
| Error | Error during check spawned event for entity: `{entity.SafeName}` | `ClientSpawnManager.CheckSpawnEvent` ([Spawning](../world/spawning.md)) |  |
| Error | Spawn Failed `{prefabHash}` - `{entityIdentifier}` | `ClientSpawnManager.SpawnAsClient` ([Spawning](../world/spawning.md)) |  |
| Error | Waiting for spawn of entity link thats marked as fake: `{entityIdentifier}` | `ClientSpawnManager.WaitForSpawn` ([Spawning](../world/spawning.md)) |  |
| Error | Failed generated cliff vertical | `CliffFill.GenerateInternal` ([Forest](../world/forest.md)) |  |
| Error | Failed generating cliff | `CliffFill.GenerateInternal` ([Forest](../world/forest.md)) |  |
| Error | Copy failed - Target layer is bigger than inputs | `CopyPartInstance.Modify` |  |
| Error | There is a missing reference on `{name}` (in `{festivity.Festivity.name}`), please fix | `Distribution.OnValidate` ([Caves](../world/caves.md)) |  |
| Error | There is a missing reference on `{name}`, please fix | `Distribution.OnValidate` ([Caves](../world/caves.md)) |  |
| Error | There is an empty festivity group on `{name}`, please fix | `Distribution.OnValidate` ([Caves](../world/caves.md)) |  |
| Error | Chunk save found, but could not read. Reverting `{Chunk.name}` to resources. | `DynamicChunkContentManager` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Chunk: `{Chunk.ChunkIdentifier}` - Failed loading entity: `{array[j]}`, SavedObject.Hash: `{version.Objects[j].Hash}` | `DynamicChunkContentManager.LoadEntities` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Chunk: `{Chunk.ChunkIdentifier}` - Failed loading setup and setting owned for entity: `{networkEntity}` | `DynamicChunkContentManager.LoadEntities` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Chunk: `{Chunk.ChunkIdentifier}` - Failed setting chunk on entity: `{networkEntity2}` | `DynamicChunkContentManager.LoadEntities` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Entity `{entity.OriginalName}` entered chunk that has never loaded/generated. Unfortunately it must be destroyed... | `DynamicChunkContentManager.UnloadSingle` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) | An object ended up in a chunk that has never been loaded or generated, and that chunk is unloading. It has nowhere to be saved, so the server destroys it. Things thrown or carried into unexplored areas can vanish this way. |
| Error | Error getting transform position during save | `DynamicChunkContentManager.SaveEntities` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Failed loading dynamic content for chunk: `{Chunk.ChunkIdentifier}` | `DynamicChunkContentManager.LoadInternal` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Failed loading dynamic in procedural streamer for chunk: `{Chunk}` | `DynamicChunkContentManager.LoadInternal` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Failed loading embedded entity on global chunk | `DynamicChunkContentManager.LoadEntities` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Failed loading static in procedural streamer for chunk: `{Chunk}` | `DynamicChunkContentManager.LoadInternal` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Failed to load default save for chunk `{Chunk.ChunkIdentifier}` with exception: `{ex}` | `DynamicChunkContentManager` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Null entity in chunk `{Chunk.ChunkIdentifier}` | `DynamicChunkContentManager.SaveEntities` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Prefab `{entity.PrefabRoot}` in the global chunk won't be saved! | `DynamicChunkContentManager.SaveEmbedded` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Save should have been loaded or created empty in LoadFromSaveOrResources. This is real bad, and data may be lost. `{Chunk.ChunkIdentifier}` | `DynamicChunkContentManager.LoadInternal` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Skipping Unload Single `{Chunk.ChunkIdentifier}` for `{entity.name}`, as it is still loading in, or loaded already. This shouldn't occur. | `DynamicChunkContentManager.UnloadSingle` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) | An object tried to unload into a chunk that is loading or already loaded. The game skips it. The message itself says this shouldn't happen. |
| Error | Failed on index `{x}` | `ForestFill.GenerateInternal` ([Forest](../world/forest.md)) |  |
| Error | Missing generation core: `{contentId}` | `ForestGCoreInstruction.GetGcore` ([Forest](../world/forest.md)) |  |
| Error | Static environment has no generation core: `{contentId}` | `ForestGCoreInstruction.GetGcore` ([Forest](../world/forest.md)) |  |
| Error | Path node index out of range: `{fromIndex}` or `{toIndex}` out of `{nodes.Count}` | `ForestGeneration.GetEdge` ([Forest](../world/forest.md#forestgeneration)) |  |
| Error | Early request of forest generation | `ForestGenerator.GetGenerated` ([Forest](../world/forest.md#forestgenerator)) |  |
| Error | Error generating terrain | `ForestGenerator.GenerateTerrain` ([Forest](../world/forest.md#forestgenerator)) |  |
| Error | Failed regenerating navmesh | `ForestGenerator.RegenerateNavmesh` ([Forest](../world/forest.md#forestgenerator)) |  |
| Error | Infinite Stop | `ForestGenerator.GenerateInternalAsync` ([Forest](../world/forest.md#forestgenerator)) |  |
| Error | Trying to generate forest with -1 seed. Waiting for seed - `{cache}` | `ForestGenerator.GenerateAsync` ([Forest](../world/forest.md#forestgenerator)) |  |
| Error | Incorrect Time Keyword | `GameTimeManager.UpdateTimeByKeyWord` ([Time and environment](../world/time-and-environment.md#gametimemanager)) |  |
| Error | Generated Loot: `{Entity}` is trying to respawn with count: `{count}` but has no chunk | `GeneratedLoot.Respawn` |  |
| Error | Failed invoking rendering complete on layer: `{Layer}` | `GenerationBase.UpdateRendering` |  |
| Error | Failed moving next in generation rendering queue, layer: `{Layer}` | `GenerationBase.UpdateRendering` |  |
| Error | Failed rendering on layer: `{Layer}` mapChunk: `{rendering[0].X}`,`{rendering[0].Z}` | `GenerationBase.UpdateRendering` |  |
| Error | Lake hit water edge limit | `LakeGenerator.GenerateLake` ([Forest](../world/forest.md)) |  |
| Error | Found filter wo Mesh on `{worldLandmark}` at `{componentsInChildren[m]}` | `LandmarkDebugger.Run` |  |
| Error | Found filter wo Mesh on `{worldLandmark}` at `{lODs[k].renderers[l]}` | `LandmarkDebugger.Run` |  |
| Error | Found null lod on `{worldLandmark}` | `LandmarkDebugger.Run` |  |
| Error | Found renderer wo Mesh filter on `{worldLandmark}` at `{lODs[k].renderers[l]}` | `LandmarkDebugger.Run` |  |
| Error | `{worldLandmark}` is loaded but has no prefab | `LandmarkDebugger.Run` |  |
| Error | Failed to update connection for level `{level}` | `LevelSelectCaveTeleporter.UpdateLevel` ([Caves](../world/caves.md)) |  |
| Error | Unhandled prefab hash `{prefabHash}` | `LocalSpawnManager.SpawnInternal` ([Spawning](../world/spawning.md)) |  |
| Error | Loot `{commonPickup.name}` failed to dock due to `{allowedResult}`. | `LootHelper.Spawn` |  |
| Error | Map board cannot setup map pieces from a null map manager | `MapBoard.SetupMapPieces` |  |
| Error | MapBoard.WorldToMapPosition() requires a valid map to function properly, returning default value. | `MapBoard.WorldToMapPosition` |  |
| Error | `{name}` cannot setup the map because the map is null | `MapBoard.SetupMap` |  |
| Error | Target is null `{PluginInstance.Name}` | `MapGeneratorPartInstance<T>.MapGeneratorPartInstance` |  |
| Error | Map Manager cannot get map manager for null player. | `MapManager.GetMapManager` ([Map and landmarks](../world/map-and-landmarks.md)) |  |
| Error | Attempted to destroy child `{name}` without parent `{Parent.name}` | `NetworkEntity.PrepareForDestroy` ([NetworkEntity](../world/network-entity.md)) |  |
| Error | Encountered error during Entity Destroyed by Scene callback: `{name}` | `NetworkEntity.OnDestroyedByScene` ([NetworkEntity](../world/network-entity.md)) |  |
| Error | Entity being unofficially destroyed `{name}` | `NetworkEntity.OnDisable` ([NetworkEntity](../world/network-entity.md)) | An entity's GameObject was destroyed without going through the spawner, which sets `IsBeingDestroyed` first. From a mod, destroy entities with `SceneDestroy()` on the server, not `Object.Destroy`. |
| Error | Error during Initialize for entity behaviour index: `{i}` on entity: `{name}` | `NetworkEntity.InitializeBehaviours` ([NetworkEntity](../world/network-entity.md)) |  |
| Error | Error during Initialize for entity behaviour: `{FullName}` on entity: `{name}` | `NetworkEntity.InitializeBehaviours` ([NetworkEntity](../world/network-entity.md)) |  |
| Error | Error during OnConnected for entity behaviour: `{monoBehaviour.GetType().FullName}` on entity: `{name}` | `NetworkEntity.OnConnected` ([NetworkEntity](../world/network-entity.md)) |  |
| Error | Error during OnDisconnected for entity behaviour: `{monoBehaviour.GetType().FullName}` on entity: `{name}` | `NetworkEntity.OnDisconnected` ([NetworkEntity](../world/network-entity.md)) |  |
| Error | `{name}`: `{ex}` | `NetworkEntity.InitializeAsServer` ([NetworkEntity](../world/network-entity.md)) |  |
| Error | Error accumulating child prefabs on `{name}` with `{parent.NetworkEntity.name}` | `NetworkPrefab.AccumulateChildPrefabs` ([Prefabs and prefab hashes](../world/prefabs.md#networkprefab)) |  |
| Error | Error running child callback on `{childPrefab2.child.name}` | `NetworkPrefab.SaveSerialize` ([Prefabs and prefab hashes](../world/prefabs.md#networkprefab)) |  |
| Error | Missing parenting hash `{value3}` on `{name}` | `NetworkPrefab.SaveSerialize` ([Prefabs and prefab hashes](../world/prefabs.md#networkprefab)) |  |
| Error | Null child entity in chunker on `{child.Parent.NetworkEntity.name}` | `NetworkPrefab.AccumulateChildPrefabs` ([Prefabs and prefab hashes](../world/prefabs.md#networkprefab)) |  |
| Error | Prefab: `{name}` has its own entity in its embedded entities list | `NetworkPrefab.Awake` ([Prefabs and prefab hashes](../world/prefabs.md#networkprefab)) |  |
| Error | `{name}` - Trying to initialize client entity without embeddedIdentifiers | `NetworkPrefab.InitializeChildren` ([Prefabs and prefab hashes](../world/prefabs.md#networkprefab)) |  |
| Error | `{name}` - Trying to initialize client with incorrect embedded count. Received `{num}`, expected `{embeddedEntities.Count}` | `NetworkPrefab.InitializeChildren` ([Prefabs and prefab hashes](../world/prefabs.md#networkprefab)) |  |
| Error | Failed to load for `{target}` with exception | `NewSaveData<TSavable, TData>.Apply` |  |
| Error | Attempting to use old save data | `OldSaveData.Apply` |  |
| Error | One Time Event `{GetType()}` was already invoked | `OneTimeEvent<T>.Invoke` |  |
| Error | Operation failed - Target layer is bigger than inputs | `OperationPartInstance.Modify` |  |
| Error | Package: `{package.name}` contains a null prefab | `PackageManager.DelayedSpawn` |  |
| Error | Error during entity spawn for players. Entity: `{entity.Chunker.NetworkEntity.SafeName}` | `PlayerEntitySyncServer.BeginEntityAdded` |  |
| Error | Player map manager cannot return discovered piece indexes for a null map. | `PlayerMapManager.GetUndiscoveredMapPieces` ([Map and landmarks](../world/map-and-landmarks.md)) |  |
| Error | Failed plugin (`{Name}`): Type -&gt; `{ex2.GetType()?}` Stack -&gt; `{ex2.StackTrace}` Message -&gt; `{ex2.Message}` | `PluginInstance.ModifyChunk` ([Caves](../world/caves.md)) |  |
| Error | Found null attribute on &#123;0&#125; | `PointsPopulationValue.GetPoint` |  |
| Error | PopulationPoints: `{argument}` - Trying to get spawn point at index: `{pointIndex}` but it only has `{Points.Count}` points | `PointsPopulationValue.GetPoint` |  |
| Error | Population already set on `{name}`, so destroying the new sample | `PopulationFolderBase.SetSample` ([Populations and spawners](../world/populations.md)) |  |
| Error | Error getting static spawn point on `{name}`. At `{i}`/`{numberOfSpawnPoints}` points, population positioned at `{transform.position}`. | `PopulationSpawnArea.InitializeAsServer` ([Populations and spawners](../world/populations.md#populationspawnarea)) |  |
| Error | Failed to initialize as Server on `{Entity.OriginalName}` with population of `{populationDefinition}` | `PopulationSpawnArea.InitializeAsServer` ([Populations and spawners](../world/populations.md#populationspawnarea)) |  |
| Error | Pouch Spawner trying To Spawn a pouch inside a pouch, for real? Prefab `{prefab}` Distribution `{distribution}` | `PouchSpawner.Spawn` |  |
| Error | Pointer with ID: `{pointerID}` went missing, requested by `{chunk}` | `PrefabLoadManager.LoadPointer` |  |
| Error | `{prefabs[i].name}` and `{prefabMap[prefabs[i].Hash].name}` share a prefab hash `{prefabs[i].Hash}`. | `PrefabManager.AddToPrefabMap` ([Prefabs and prefab hashes](../world/prefabs.md#prefabmanager)) |  |
| Error | Null set in preset loot module on `{Entity.PrefabRoot.name}` | `PresetLootModule.Spawn` |  |
| Error | Finished Profiling: `{profilingPosition.Name}` | `ProfileChunkLoading.Profile` |  |
| Error | Profiling Position: `{profilingPosition.Name}` Iteration: `{i}` Pos: `{position}` Center-Chunk: `{bestContaining}` | `ProfileChunkLoading.Profile` |  |
| Error | Failed generating river edge | `RiverCenterFill.GenerateInternal` ([Forest](../world/forest.md)) |  |
| Error | Failed generating river edge | `RiverEdgeFill.GenerateInternal` ([Forest](../world/forest.md)) |  |
| Error | Missing generation core: `{contentId}` | `RiverGCoreInstruction.Execute` |  |
| Error | Static environment has no generation core: `{contentId}` | `RiverGCoreInstruction.Execute` |  |
| Error | Cannto spawn visuals until river calculation is completed | `RiverGenerator.SpawnVisuals` ([Forest](../world/forest.md)) |  |
| Error | Trying to access river before generation | `RiverGenerator.TryGetGenerated` ([Forest](../world/forest.md)) |  |
| Error | Rock Cluster missing definition. Initializing with random. | `RockCluster.SetupExisting` |  |
| Error | Tried to spawn a saved dynamic object of hash `{hash}` with empty data | `SavedDynamicObject.Spawn` |  |
| Error | Bit read count incorrect on : `{savable.name}` (`{savable.GetType().Name}`) --- Read `{stream.BitIndex - bitIndex}` of `{value}`. Version: `{version}`. | `SavingSystem.Read` | A component's save data was a different length than its reader expected: saved by another version of that component, often a mod that changed what it saves. The game moves to where the next component starts, so the rest of the object loads, but that component's state may be wrong. |
| Error | Bit read count incorrect on null savable --- Read `{stream.BitIndex - bitIndex}` of `{value}`. Version: `{version}`. | `SavingSystem.Read` | A component's save data was a different length than its reader expected: saved by another version of that component, often a mod that changed what it saves. The game moves to where the next component starts, so the rest of the object loads, but that component's state may be wrong. |
| Error | Error loading object. See Exception above. | `SavingSystem.Read` |  |
| Error | Error saving `{setup.Topic.Name}`. Potential issues with save file. See Exception above. | `SavingSystem.Write` | A component threw while saving. The exception is logged just before it. Its part of the save may be missing. |
| Error | Missing hash `{hash}` on chunk versioning for `{value.Topic}` | `SavingSystem.Load` |  |
| Error | No saving setup for `{savable.GetType()}` | `SavingSystem.Serialize` |  |
| Error | No saving setup for `{type}` | `SavingSystem.Serialize` |  |
| Error | Save application failed. for `{value.Topic}` | `SavingSystem.Load` |  |
| Error | The latest save version of `{Topic.Name}` (`{latestSetup.Type.Name}`) is not reflected by an ISavable implementation. | `SavingSystem.SavingSetup.FinishInitialization` |  |
| Error | `{dataType}` has two save formats for version `{version}`. | `SavingSystem.SavingSetup.Add` |  |
| Error | Failed to spawn using string `{value}` | `SerializedSavedDynamicObject.SpawnFromString` |  |
| Error | SerializedEventTimer: `{this}` already has timers when load was called | `SerializedTimedEvent.Load` |  |
| Error | Couldn't get marker for landmark index `{landmark.Index}` name `{landmark.name}` | `ServerLandmarkManager.ForceSync` |  |
| Error | Deregistering unregistered landmark `{landmark.Entity.Identifier}`-`{landmark.Entity.SafeName}`, with aware `{landmark.AwareIcon}` and discover `{landmark.DiscoveredIcon}` | `ServerLandmarkManager.Deregister` |  |
| Error | Failed to aware landmark `{landmark.name}` index `{landmark.Index}` for player `{player}` | `ServerLandmarkManager.AwareFor` |  |
| Error | Failed to discover landmark `{landmark.name}` index `{landmark.Index}` for player `{player}` | `ServerLandmarkManager.DiscoverFor` |  |
| Error | MarkerInfo map somehow null for `{landmark.name}` | `ServerLandmarkManager.ForceSync` |  |
| Error | Trying to aware deregistered landmark `{landmark.Entity.Identifier}`-`{landmark.Entity.SafeName}` with index `{landmark.Index}`, with aware `{landmark.AwareIcon}` and discover `{landmark.DiscoveredIcon}`, for player `{player.UserInfo.Username}` | `ServerLandmarkManager.AwareFor` |  |
| Error | Trying to aware landmark `{landmark.Entity.Identifier}`-`{landmark.Entity.SafeName}` with index `{landmark.Index}`, with aware `{landmark.AwareIcon}` and discover `{landmark.DiscoveredIcon}`, for unregistered player `{player.UserInfo.Username}` | `ServerLandmarkManager.AwareFor` |  |
| Error | Trying to aware unregistered landmark `{landmark.Entity.Identifier}`-`{landmark.Entity.SafeName}`, with aware `{landmark.AwareIcon}` and discover `{landmark.DiscoveredIcon}` | `ServerLandmarkManager.AwareFor` |  |
| Error | Trying to deregister landmark that wasn't properly registered: `{landmark.DiscoveredIcon}` | `ServerLandmarkManager.Deregister` |  |
| Error | Trying to discover deregistered landmark `{landmark.Entity.Identifier}`-`{landmark.Entity.SafeName}` with index `{landmark.Index}`, with aware `{landmark.AwareIcon}` and discover `{landmark.DiscoveredIcon}`, for player `{player.UserInfo.Username}` | `ServerLandmarkManager.DiscoverFor` |  |
| Error | Trying to discover landmark `{landmark.Entity.Identifier}`-`{landmark.Entity.SafeName}` index `{landmark.Index}`, with aware `{landmark.AwareIcon}` and discover `{landmark.DiscoveredIcon}`, for unregistered player `{player.UserInfo.Username}` | `ServerLandmarkManager.DiscoverFor` |  |
| Error | Trying to discover unregistered landmark `{landmark.Entity.Identifier}`-`{landmark.Entity.SafeName}`, with aware `{landmark.AwareIcon}` and discover `{landmark.DiscoveredIcon}` | `ServerLandmarkManager.DiscoverFor` |  |
| Error | Failed to SpawnDocked `{pickup.name}` into `{dock.name}` | `SpawnHelper.SpawnDockedPickup` ([Spawning](../world/spawning.md#spawnhelper)) |  |
| Error | Destroying prefabs: `{prefabToSpawn}` took `{F2}`ms on average | `SpawningTimer.Spawn` |  |
| Error | instantiateTime prefabs: `{prefabToSpawn}` took `{F2}`ms on average | `SpawningTimer.Spawn` |  |
| Error | setOwnedTime prefabs: `{prefabToSpawn}` took `{F2}`ms on average | `SpawningTimer.Spawn` |  |
| Error | setScaleTime prefabs: `{prefabToSpawn}` took `{F2}`ms on average | `SpawningTimer.Spawn` |  |
| Error | Something went wrong trying to time the function: `{ex}` | `SpawningTimer.TimeFunction` |  |
| Error | Spawing prefabs: `{prefabToSpawn}` took `{F2}`ms on average | `SpawningTimer.Spawn` |  |
| Error | spawnExistingTime prefabs: `{prefabToSpawn}` took `{F2}`ms on average | `SpawningTimer.Spawn` |  |
| Error | Missing static environment: `{contentId}` | `SpawnInstruction.Execute` |  |
| Error | Can't spawn null prefab | `SpawnManager.Spawn` ([Spawning](../world/spawning.md#spawnmanager)) |  |
| Error | Trying to spawn entity with prefabHash: `{prefabHash}`, which already exists as: `{link.NetworkEntity}`, returning the existing prefabs entity | `SpawnManager.SpawnLocal` ([Spawning](../world/spawning.md#spawnmanager)) |  |
| Error | Unchilding child of destroyed prefab. Child: `{networkPrefab.name}`. Destroyed: `{prefab.name}` | `SpawnManager.DestroyChildPrefabs` ([Spawning](../world/spawning.md#spawnmanager)) |  |
| Error | Unhandled prefab hash `{prefabHash}` | `SpawnManager.SpawnLocal` ([Spawning](../world/spawning.md#spawnmanager)) |  |
| Error | Why is a non-prefab being destroyed? `{entity.Transform.name}` | `SpawnManager.DestroyLocal` ([Spawning](../world/spawning.md#spawnmanager)) |  |
| Error | Invalid spawn position index: `{name}` : `{index}` | `SpawnPositions.GetSpawnPosition` |  |
| Error | Failed on index `{x}` | `SplatPainter.Paint` |  |
| Error | Missing static environment: `{contentId}` | `SplineInstruction.Execute` ([Forest](../world/forest.md)) |  |
| Error | Waited over 10s to generate A\* map for `{chunk}`, returning null | `StaticCaveChunk.GeneratePathfinding` |  |
| Error | Error using pointer. Skipping. | `StaticChunkContentManager.LoadPointerAsync` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Error | Missing piece definition for `{name}` | `StaticEnvironmentPieceInstance.CreatePiece` |  |
| Error | Null child on `{name}` | `StaticGenerationParent.Generate` |  |
| Error | Found NaN on `{prefab}` position with chunk parent `{prefab.Entity.ChunkingParent}` at chunk `{prefab.Entity.Chunk}` | `StreamerHelper.SerializePrefab` |  |
| Error | `{prefab}` is at y `{vector.y}` and thus will be destroyed (or posted) | `StreamerHelper.SerializePrefab` | An object fell below y = -15000 (out of the world). It's destroyed at the end of the frame, or, if a player held it last, posted to that player (`StreamerHelper.DelayDestroy`). |
| Error | `{prefab}` is positioned at NaN and couldn't get safe position thus will be destroyed (or posted) | `StreamerHelper.SerializePrefab` | An object's position became NaN and no parent has a sane one. It's destroyed, or posted to the player who held it last. |
| Error | `{prefab}` is positioned at NaN, but a safe position could be get by parent `{transform.transform}` | `StreamerHelper.SerializePrefab` |  |
| Error | `{prefab}` is unchilded and positioned at NaN thus will be destroyed (or posted) | `StreamerHelper.SerializePrefab` | An object's position became NaN. It's destroyed, or posted to the player who held it last. |
| Error | New `{stopwatch.ElapsedMilliseconds}`ms \| Old `{stopwatch2.ElapsedMilliseconds}`ms | `VisibilityTimer.Test` |  |
| Error | Failed to find chunk `{item}` | `WipeManager.ChunksToPreWipe` |  |
| Error | Missing landmark on `{name}` | `WorldLandmark.Load` |  |
| Error | Null result on landmark `{name}` | `WorldLandmark.LoadComplete` |  |
| Error | Somehow have an invalid operation handle on landmark loaded callback: `{this}` | `WorldLandmark.LoadComplete` |  |
| Error | `{this}` - Loading but still have an active load operation | `WorldLandmark.Load` |  |
| Error | Couldnt find WorldLandmarkManager in the scene | `WorldLandmarkManager.EnableLandmarks` |  |
| Error | Error resolving landmark | `WorldLandmarkManager.ResolveChunkReferences` |  |
| Error | Failed resetting landmark: `{worldLandmark}` | `WorldLandmarkManager.Setup` |  |
| Warn | Chunk containing player not found. Can't adjust atmosphere | `AtmosphereManager.OverrideAtmosphere` ([Time and environment](../world/time-and-environment.md)) |  |
| Warn | Null MainAudio on AtmosphereManager | `AtmosphereManager.ToggleGlobalAmbienceMute` ([Time and environment](../world/time-and-environment.md)) |  |
| Warn | Adding layer as requested `{layer}` | `CaveLayerManager.WaitForEntranceInformation` ([Caves](../world/caves.md#cavelayermanager)) |  |
| Warn | Cleared layer `{layerPair.Value}` save | `CaveLayerManager.ClearCaveSystem` ([Caves](../world/caves.md#cavelayermanager)) |  |
| Warn | Clearing layer `{layerPair.Value}` save | `CaveLayerManager.ClearCaveSystem` ([Caves](../world/caves.md#cavelayermanager)) |  |
| Warn | Spawning layer as requested `{layer}` | `CaveLayerManager.WaitForEntranceInformation` ([Caves](../world/caves.md#cavelayermanager)) |  |
| Warn | Unloading layer `{layerPair.Value}` | `CaveLayerManager.ClearCaveSystem` ([Caves](../world/caves.md#cavelayermanager)) |  |
| Warn | Using predefined seed. Ignore if deliberate. | `CaveLayerManager.Prepare` ([Caves](../world/caves.md#cavelayermanager)) |  |
| Warn | Waiting requested at `{item.Key}` with status `{item.Value.Task.Status}` | `CaveLayerManager.ClearCaveSystem` ([Caves](../world/caves.md#cavelayermanager)) |  |
| Warn | Tried to generate A\* map for `{Chunk.ChunkIdentifier}` while manager scanning | `CaveLayerStreamer.GeneratePathfinding` ([Caves](../world/caves.md#cavelayerstreamer)) |  |
| Warn | Failed to create connection from `{fromLayer}` to `{toLayer}`, missing from | `CaveTeleporterManager.RequestConnection` ([Caves](../world/caves.md)) |  |
| Warn | Looped around chunk indices | `Chunk.FindIndex` ([Chunks](../world/chunks.md#chunk)) | Chunk indices wrapped around to 1. Harmless on its own; if they run out completely, the Fatal line follows. |
| Warn | `{entity.name}` entered the unloaded chunk: `{Chunk.name}` | `ChunkEntityManager.HandleChunkNotLoaded` |  |
| Warn | `{NetworkEntity.name}` ran out of chunks (Previously `{locationChunk}`). Positioned at: `{framePosition}`. Spawning Instructions : `{saveOf.StringVersion()}` | `Chunker.EvaluateChunk` ([Chunks](../world/chunks.md#chunker-how-an-entity-belongs-to-a-chunk)) |  |
| Warn | `{NetworkEntity.name}` ran out of chunks (Previously `{oldChunk}`). Positioned at: `{position}`. Sent to `{oldChunk}` postbox | `Chunker.PostToPlayer` ([Chunks](../world/chunks.md#chunker-how-an-entity-belongs-to-a-chunk)) |  |
| Warn | Attempting to spawn - Using existing entity `{entity.name}`. Existing hash: `{entity.Prefab.Hash}`. New Hash: `{prefabHash}` | `ClientSpawnManager.SpawnAsClient` ([Spawning](../world/spawning.md)) |  |
| Warn | Trying to read darkness for a disabled camera! | `ComputeShaderDarknessReader.UpdateLoop` |  |
| Warn | Trying to enable darkness reader for Headless (`{ApplicationManager.IsHeadless}`) or unOwned (`{!character.IsLocalPlayer}`) | `DarknessReaderMethod.Enable` |  |
| Warn | For more efficiency, call 'StartLoadingFromFile' prior to requiring dynamic content to load. | `DynamicChunkContentManager.LoadInternal` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Warn | Save for chunk `{chunk.name}` was using old version `{save.SaveVersion}` when compared to desired version `{chunk.MinimumSaveVersion}` | `DynamicChunkContentManager.IsSaveValid` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Warn | Already have data for `{populationHash}` | `Ecosystem.SetPoints` ([Populations and spawners](../world/populations.md)) |  |
| Warn | incorrect total weight when generating biome, from: `{from}` to: `{to}` total-weight: `{totalWeight}` | `GeneratingBiome.Generate` |  |
| Warn | Physic Material Binding in Dictionary is null | `ImpactSoundMap.LoadImpactSoundMap` |  |
| Warn | You have two sets of the same Physic Material in this dictionary of type: `{impactSoundSet.PhysicMaterial}` | `ImpactSoundMap.LoadImpactSoundMap` |  |
| Warn | Marching Cubes Chunk Display must be used within a MarchingCubesPlugin | `MarchingCubesChunkDisplay.Render` |  |
| Warn | Second Initialize `{Identifier}` -&gt; `{identifier}` on `{OriginalName}` | `NetworkEntity.Initialize` ([NetworkEntity](../world/network-entity.md)) |  |
| Warn | Can only spawn packages on the server. | `PackageManager.DropPackage` |  |
| Warn | Package does not exists. | `PackageManager.DropPackage` |  |
| Warn | No prefabs for `{name}` | `PopulationDefinition.GetRandom` ([Populations and spawners](../world/populations.md#populationdefinition)) |  |
| Warn | Component not found for save `{value.Topic}` on `{networkEntity.name}`. | `SavingSystem.Load` | A save has data for a component the object no longer has (a removed mod component, or a changed prefab). That data is skipped. |
| Warn | Trying to sync to player that's not loaded yet `{Player.UserInfo.UserInfo}`, skipping and letting the initial sync do the work | `ServerClientLandmarkManager.Sync` |  |
| Warn | Attempting to double register a marker. Index `{num}`. From `{value.DiscoveredIcon}` to `{landmark.DiscoveredIcon}` (`{landmark.Entity.SafeName}`) | `ServerLandmarkManager.Register` |  |
| Warn | Tried to generate A\* map for `{chunk}` while manager scanning | `StaticCaveChunk.GeneratePathfinding` |  |
| Warn | Found `{item3.sharedMesh}` mesh `{item3}` at scene `{item3.gameObject.scene}` that is not readable | `StaticObjectCombiner.JoinMeshes` ([Static objects](../world/static-objects.md#staticobjectcombiner)) |  |
| Warn | Hierarchy `{text}` | `StreamerHelper.SerializePrefab` |  |
| Warn | `{entity.name}` NaN'd. Sent to `{playerId}` postbox | `StreamerHelper.PostToPlayer` |  |
| Warn | This save does not contain the root transform | `TransformSaveCollection.LoadInto` |  |
| Warn | This save contains a different name than the one loading into | `TransformSaveObject.LoadInto` |  |
| Warn | This save contains no data | `TransformSaveObject.LoadInto` |  |

<details>
<summary>Info and debug lines (85)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | `{name}` moved into a new chunk \*without\* a population | `BasicPopulationItem.CheckMoved` |  |
| Info | `{name}` moved into a new population chunk | `BasicPopulationItem.CheckMoved` |  |
| Info | `{name}` moved into unloaded chunk | `BasicPopulationItem.CheckMoved` |  |
| Info | Creating windows | `BuildingRooms.CreateWindow` |  |
| Info | No window opportunities | `BuildingRooms.CreateWindow` |  |
| Info | `{num5}` `{sizeY}` `{num6}` | `BuildingRooms.Run` |  |
| Info | '`{player.UnityObjectName}`', '`{layer}`' -&gt; '`{TargetLayer}`' Teleport passed fuel test | `CaveTeleporter.Teleport` |  |
| Info | `{player.UnityObjectName}` is trying to activate teleport from origin layer: '`{layer}`' -&gt; destination layer: '`{TargetLayer}`' | `CaveTeleporter.Teleport` |  |
| Info | Destination Chunk Selected: `{bestContaining.ChunkIdentifier}`, for position: `{argument.position}` | `CaveTeleporterManager.DelayTeleport` ([Caves](../world/caves.md)) |  |
| Info | Outgoing teleport arguments: layer: `{argument.layer}`, position: `{argument.position}`, isDeparture: `{argument.isDeparture}`, playerID: `{argument.teleportingPlayer}` | `CaveTeleporterManager.TeleportPlayer` ([Caves](../world/caves.md)) |  |
| Info | Connecting `{a.name}` &lt;--&gt; `{b.name}` cost: `{connectionCost}` | `ChunkConnections.ConnectTwoWay` |  |
| Info | Could not find the chunk : `{text}` | `ChunkConverter.ConvertFrom` |  |
| Info | Cleaning Caves Save | `ChunkFileHelper.CleanCavesSave` |  |
| Info | Cache at `{totalSize}` of `{limit}` bytes. | `ClientCacheManager.Clean` |  |
| Info | Cache doesn't require cleaning | `ClientCacheManager.Clean` |  |
| Info | Checking for cache clean | `ClientCacheManager.Clean` |  |
| Info | Cleaning cache | `ClientCacheManager.Clean` |  |
| Info | Client Cache Manager created | `ClientCacheManager.ClientCacheManager` |  |
| Info | Deleting `{altaFile2.FullName}` | `ClientCacheManager.Clean` |  |
| Info | Finished cleaning cache | `ClientCacheManager.Clean` |  |
| Info | Download from `{url}` to `{targetFile}` | `ClientCacheManager.FileDownloader.Start` |  |
| Info | Finished waiting for `{entity.name}` | `ClientSpawnManager.RunSpawnEvent` ([Spawning](../world/spawning.md)) |  |
| Info | Finished waiting for `{link.NetworkEntity.name}` | `ClientSpawnManager.WaitForSpawn` ([Spawning](../world/spawning.md)) |  |
| Info | Waiting for `{entityIdentifier}` | `ClientSpawnManager.WaitForSpawn` ([Spawning](../world/spawning.md)) |  |
| Info | Instantiated `{i}` | `ClumpSpawner.Start` |  |
| Info | No resouces found for `{Chunk.ChunkIdentifier}` - creating new empty chunk save | `DynamicChunkContentManager` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Info | `{Chunk.ChunkIdentifier}` loaded from resources | `DynamicChunkContentManager` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Info | Disposing entity manager | `EntityManager.Dispose` ([Finding entities](../world/finding-entities.md#every-entity-entitymanager)) |  |
| Info | Finished preparing entity list, took `{stopwatch.Elapsed.TotalMilliseconds}` ms | `EntityManager.PrepareLinkedEntityList` ([Finding entities](../world/finding-entities.md#every-entity-entitymanager)) |  |
| Info | Preparing entity list | `EntityManager.PrepareLinkedEntityList` ([Finding entities](../world/finding-entities.md#every-entity-entitymanager)) |  |
| Info | Reusing prepared entity list | `EntityManager.PrepareLinkedEntityList` ([Finding entities](../world/finding-entities.md#every-entity-entitymanager)) |  |
| Info | Forest area : `{area}` | `ForestGeneration.EvaluateBounds` ([Forest](../world/forest.md#forestgeneration)) |  |
| Info | Apply terrain `{cache}` | `ForestGenerator.GenerateTerrain` ([Forest](../world/forest.md#forestgenerator)) |  |
| Info | Bounds `{text}` = `{bounds2}` | `ForestGenerator.GenerateTerrain` ([Forest](../world/forest.md#forestgenerator)) |  |
| Info | Entire generation of `{cache}` took `{stopwatch.Elapsed.TotalMilliseconds}`ms | `ForestGenerator.GenerateAsync` ([Forest](../world/forest.md#forestgenerator)) |  |
| Info | Finished terrain `{cache}` | `ForestGenerator.GenerateTerrain` ([Forest](../world/forest.md#forestgenerator)) |  |
| Info | Forest seed received - `{cache}` | `ForestGenerator.GenerateAsync` ([Forest](../world/forest.md#forestgenerator)) |  |
| Info | Reheighted! `{stopwatch.Elapsed.TotalMilliseconds}` | `ForestGenerator.Reheight` ([Forest](../world/forest.md#forestgenerator)) |  |
| Info | Resplatted! `{stopwatch.Elapsed.TotalMilliseconds}` | `ForestGenerator.Resplat` ([Forest](../world/forest.md#forestgenerator)) |  |
| Info | `{cache}` Reached river gen | `ForestGenerator.GenerateTerrain` ([Forest](../world/forest.md#forestgenerator)) |  |
| Info | `{cache}` Reached river visuals | `ForestGenerator.GenerateTerrain` ([Forest](../world/forest.md#forestgenerator)) |  |
| Info | `{LayerStreamer.Chunk.ChunkIdentifier}` Map Seed : `{seed}` Seed test: `{random.Next()}` Simplex: `{SimplexNoise.Noise(0.1, 0.2, 0.3, 0.4)}` Hash: `{HashFunction.Value(10, 20)}` | `GenerationBase.StartGenerating` |  |
| Info | No ICraftingIngredientProvider Interface on '`{component.name}`' | `GymnasiumCraftingIngredientSpawner.OnDockRecipe` |  |
| Info | No PageInstance Component on '`{pickup.name}`' | `GymnasiumCraftingIngredientSpawner.OnDockRecipe` |  |
| Info | Physic Materials Dictionary Loaded | `ImpactSoundMap.LoadImpactSoundMap` |  |
| Info | Generating a lake with area of `{area}` | `LakeGenerator.GenerateLake` ([Forest](../world/forest.md)) |  |
| Info | Local player moved to `{ChunkIdentifier}` | `LocationChunk.OnLocalPlayerChange` ([Chunks](../world/chunks.md#locationchunk)) |  |
| Info | X: `{layer.Chunk.X}` Z: `{layer.Chunk.Z}` Min: `{a}` Max: `{a2}` Avg: `{num2}` | `LogRangeInstance.Modify` |  |
| Info | Cannot update the map while the game is playing. | `MapBoard.OnValidate` |  |
| Info | `{player.UserInfo.Username}` discovered `{pieceIndex}` on `{map.name}` | `MapManager.DiscoverPiece` ([Map and landmarks](../world/map-and-landmarks.md)) |  |
| Info | Already smoothed | `MarchingCubesChunkDisplay.SmoothNormals` |  |
| Info | Mesh Missing A: `{above.mesh?}` B: `{below.mesh}` | `MarchingCubesChunkDisplay.SmoothNormals` |  |
| Info | Handler Lambda, number: `{number}` | `OneTimeEventTest.Awake` |  |
| Info | Handler, number: `{number}` | `OneTimeEventTest.TestHandler` |  |
| Info | Aborted generation within `{Name}` | `PluginInstance.ModifyChunk` ([Caves](../world/caves.md)) |  |
| Info | `{num3}` `{num4}` `{isHandled.GetLength(0)}` `{isHandled.GetLength(1)}` | `PolygonChunkDisplay.Render` |  |
| Info | Finished loading all prefabs, took `{stopwatch.Elapsed.TotalMilliseconds}` ms | `PrefabManager.PrepareSpawnSetups` ([Prefabs and prefab hashes](../world/prefabs.md#prefabmanager)) |  |
| Info | Null Data for `{value.Topic}` | `SavingSystem.Load` |  |
| Info | Tested: `{component.name}` | `SpawningTimer.SpawnAll` |  |
| Info | Continuing chunk load - `{name}` | `StaticCaveChunk.LoadStatic` |  |
| Info | Pathfinding calculated - `{name}` | `StaticCaveChunk.GeneratePathfinding` |  |
| Info | Set Entrance | `StaticCaveChunk.SetEntrance` |  |
| Info | Waiting for pathfinding - `{name}` | `StaticCaveChunk.LoadStatic` |  |
| Debug | Cave layer streamer has already generated | `CaveLayerStreamer.Generate` ([Caves](../world/caves.md#cavelayerstreamer)) |  |
| Debug | Failed to call sound effect due to cooldow, `{TotalSeconds}` | `CaveTeleporterManager.CheckForLocalSoundCooldown` ([Caves](../world/caves.md)) |  |
| Debug | Here is the spawning instructions: `{StringVersion}` | `Chunker.EvaluateChunk` ([Chunks](../world/chunks.md#chunker-how-an-entity-belongs-to-a-chunk)) |  |
| Debug | Chunker children count stayed the same??? | `ChunkSync.SyncSpawn` |  |
| Debug | Chunker children was added to | `ChunkSync.SyncSpawn` |  |
| Debug | Chunker children was removed from | `ChunkSync.SyncSpawn` |  |
| Debug | Creating Dynamic Chunk Save for: `{Chunk.ChunkIdentifier}` | `DynamicChunkContentManager.CreateSave` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Debug | Discarding saved object with hash `{version.Objects[j].Hash}` in save for chunk `{Chunk.ChunkIdentifier}` | `DynamicChunkContentManager.LoadEntities` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Debug | Reverting unload single for `{entity.name}`. Chunk loaded while waiting for read task | `DynamicChunkContentManager.UnloadSingle` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Debug | Skipping Save on `{Chunk.ChunkIdentifier}`, as it is still loading in | `DynamicChunkContentManager.Save` ([Chunk loading and saving](../world/chunk-loading-and-saving.md)) |  |
| Debug | Health for `{networkScene}` Existing: `{num}` Empty: `{num2}` Fake: `{num4}` Fail: `{num3}` | `EntityManager.CheckHealth` ([Finding entities](../world/finding-entities.md#every-entity-entitymanager)) |  |
| Debug | Clearing Game Time Manager Instance | `GameTimeManager.OnDestroy` ([Time and environment](../world/time-and-environment.md#gametimemanager)) |  |
| Debug | Snapping Time from `{DefaultTimeline.Time}` to `{value}` | `GameTimeManager.Sync` ([Time and environment](../world/time-and-environment.md#gametimemanager)) |  |
| Debug | Beginning generation | `GenerationBase.PrepareAndStart` |  |
| Debug | Generation Rendering has completed, layer: `{Layer}` | `GenerationBase.UpdateRendering` |  |
| Debug | Waiting for generation rendering to complete, layer: `{Layer}` | `GenerationBase.StartGenerating` |  |
| Debug | Null Data for `{value.Topic}` | `SavingSystem.Load` |  |
| Debug | `{this}` Loaded with stage index: `{num}` | `TimeBasedStagedPrefab.Load` |  |
| Debug | `{this}` Loaded with time: `{data.startedTime}` current: `{time}` | `TimeBasedStagedPrefab.Load` |  |
| Debug | `{this}` Started | `TimeBasedStagedPrefab.StartTimer` |  |
| Debug | `{this}` Stopped | `TimeBasedStagedPrefab.StopTimers` |  |
| Debug | `{this}` - Unload but dont have a spawned prefab | `WorldLandmark.Unload` |  |

</details>

## Creatures and AI

20 errors and warnings, 2 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Error | Error in hook Used for `{name}` | `ActionComponent.HandleUsed` ([Actions and decisions](../creatures/actions-and-decisions.md#actioncomponent)) |  |
| Error | Somehow reaching target twice? | `ActiveNest.TargetReached` |  |
| Error | Exception caught while running event on channel `{channel}` for `{Entity.SafeName}` from null action | `Agent.FireChannelEvent` ([Agent](../creatures/agent.md)) |  |
| Error | Tried to fire event on empty channel `{channel}` with null action | `Agent.FireChannelEvent` ([Agent](../creatures/agent.md)) |  |
| Error | Can't register agent twice | `AgentUpdater.Register` ([AgentUpdater](../creatures/agent-updater.md)) |  |
| Error | Failed to check change for agent `{value.Entity.SafeName}` | `AgentUpdater.UpdateAndMoveToEnd` ([AgentUpdater](../creatures/agent-updater.md)) |  |
| Error | Failed to update agent `{value.Entity.SafeName}` | `AgentUpdater.UpdateAndMoveToEnd` ([AgentUpdater](../creatures/agent-updater.md)) |  |
| Error | Failed to update priority and sort agent `{value.Entity.SafeName}` | `AgentUpdater.UpdateAgents` ([AgentUpdater](../creatures/agent-updater.md)) |  |
| Error | Error here | `AttackDirectionAnimationLayerLerpSettings.LayerAnimation.Disable` |  |
| Error | Error in Cancelled for `{Action.Name}` | `BasicActiveAction<TAgent>.Cancel` ([Actions and decisions](../creatures/actions-and-decisions.md)) |  |
| Error | Error in Finished for `{Action.Name}` | `BasicActiveAction<TAgent>.Finish` ([Actions and decisions](../creatures/actions-and-decisions.md)) |  |
| Error | Missing sense on `{errorName}` | `BasicSenseSet.Apply` ([Targets and senses](../creatures/targets-and-senses.md#basicsenseset)) |  |
| Error | Error randomizing spectral ghost | `PlayerLikeSpectralGhost.Randomize` ([Other creatures](../creatures/other-creatures.md#playerlikespectralghost)) |  |
| Error | Error syncing spectral body | `PlayerLikeSpectralGhost.SyncBody` ([Other creatures](../creatures/other-creatures.md#playerlikespectralghost)) |  |
| Error | Entity destroyed in initialize on `{Definition.name}` spawner. Prefab: `{random2}` | `PopulationSample.SpawnRandom` ([Spawning and despawning](../creatures/spawning-and-despawning.md#populationsample)) |  |
| Error | `{name}`of `{transform.parent.parent.name}`is missing stat definition on `{transform.Hierarchy()}` | `StatOperation.GetOperation` |  |
| Warn | Trying to fire event on empty channel `{channel}` from `{action.Action.GeneralSettings.name}` | `Agent.FireChannelEvent` ([Agent](../creatures/agent.md)) |  |
| Warn | Can't deregister agent twice | `AgentUpdater.Deregister` ([AgentUpdater](../creatures/agent-updater.md)) |  |
| Warn | `{original.name}` does not have the property \_Color nor \_ColorA1 | `DeathEffect.GetMaterialFromColor` |  |
| Warn | Population of `{Definition?}` is missing parent in `{Chunk?}` which is `{Chunk.IsLoaded}` `{Chunk.IsFullyLoaded}` part of spawner `{spawner?}` | `PopulationSample.SpawnRandom` ([Spawning and despawning](../creatures/spawning-and-despawning.md#populationsample)) |  |

<details>
<summary>Info and debug lines (2)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | False | `IntelligenceExtensionMethods.Print` |  |
| Debug | Exception caught while running event on channel `{channel}` for `{Entity.SafeName}` from `{action.Action.GeneralSettings.name}` | `Agent.FireChannelEvent` ([Agent](../creatures/agent.md)) |  |

</details>

## Items and interaction

85 errors and warnings, 27 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Fatal | Releasing non power of two array to array pool | `UnclearedPower2ArrayPool<T>.Release` |  |
| Error | Issue with: `{item.GetType().FullName}`. Menu names should not contain \_ % \# or &amp;. If you wish to create a hotkey, do it in the hotkey config found at 'Assets/Editor/Hotkeys'. | `AltaMenuItem.GeneratePathSplit` |  |
| Error | Error starting automatic dock area for `{name}` | `AutomaticDockArea.Start` ([Items, interaction and damage](../items/overview.md)) |  |
| Error | Null dock in AutomaticDockArea on `{name}` | `AutomaticDockArea.OnValidate` ([Items, interaction and damage](../items/overview.md)) |  |
| Error | Failed adding page `{newPage}` with index `{spawnedIndex}` to book `{collection}` with `{spawnedPages.Count}` pages | `Book.AddPage` ([Pages and books](../items/pages-and-books.md)) |  |
| Error | Trying to remove page `{spawnedIndex}` from `{collection}` with only `{spawnedPages.Count}` pages | `Book.DestroyPage` ([Pages and books](../items/pages-and-books.md)) |  |
| Error | Book not found - Cannot child - May lose data. `{collection.name}` | `BookRestrictor.Save` ([Pages and books](../items/pages-and-books.md)) |  |
| Error | Failed to load `{num}` items to `{uniqueIdentifier.name}` | `CommunalStorage.DelayLoad` ([Items, interaction and damage](../items/overview.md)) |  |
| Error | Failed to generate hit for `{frameHit.Key.Entity.SafeName}` | `DelayedImpactResolver.Update` ([Impacts and hit detection](../items/impacts.md)) |  |
| Error | Grabbed fakePickup before being buried. Unburying | `DiggingImpactor.StartCheckPull` |  |
| Error | Trying to generate an Edible page for `{item.Prefab.name}` which doesn't have an EdibleObject script! | `EdiblePageProvider.GeneratePage` |  |
| Error | &#123;0&#125; cooking stage switch case broke somehow! | `EdiblePageProvider.GeneratePage` |  |
| Error | `{item.name}` has a null glyph! | `EdiblePageProvider.GeneratePage` |  |
| Error | Failed to destroy joint for interactor `{interactor}` on `{name}` | `FakePickup.DestroyJoint` ([Items, interaction and damage](../items/overview.md)) |  |
| Error | Failed loading global communal storage content | `GlobalCommunalStorageValues.Initialize` |  |
| Error | There is multiple Global Communal Storages with id: `{communalStorageUniqueIdentifier}` they will not work properly | `GlobalCommunalStorageValues.LoadContent` |  |
| Error | `{this}` - Failed GoToStage: `{stageIndex}` | `GrowthItem.GoToStage` |  |
| Error | `{this}` - Stage: `{currentStage.Name}` is set to retry but has a duration of: `{currentStage.Duration}` secs, set this to a sensible number please | `GrowthItem.HandleChecksResult` |  |
| Error | ColorLerp has not been set on this prefab. Skipping Attracting state display. | `HandHoverPoint.AttractingRoutine` ([Grab points and hand-touch points](../items/grab-points.md#handhoverpoint)) | A hand hover point without its colour effect. Only the visual is skipped. |
| Error | Failed to calculate Particle Collision from `{other.name}` on `{healthTarget.Entity.PrefabRoot.name}` with Health | `ImpactDetector.OnParticleCollision` ([Impacts and hit detection](../items/impacts.md#impactdetector)) |  |
| Error | Failed to calculate Particle Collision from `{other.name}` on `{name}` | `ImpactDetector.OnParticleCollision` ([Impacts and hit detection](../items/impacts.md#impactdetector)) |  |
| Error | Particle Impactor `{component}` has missing particle system | `ImpactDetector.HandleParticleHit` ([Impacts and hit detection](../items/impacts.md#impactdetector)) |  |
| Error | Received Client side impact from `{player}` on another player `{playerHealth.Player.NetworkPlayer}` | `ImpactDetector.SyncImpact` ([Impacts and hit detection](../items/impacts.md#impactdetector)) |  |
| Error | Trying to add impact modifier to the same point again | `ImpactModifier.RegisterSlot` |  |
| Error | Encountered issue generating hit | `Impactor.GetFollowAndCurrent` |  |
| Error | Error trying to get Current Attack for impactor: `{this}` Tool: `{RegisteredTool}` ImpactorValues: `{ImpactorValues}` Tool.Recorder: `{RegisteredTool.Recorder}` FromTool: `{FromTool}` | `Impactor.GetCurrentAttack` |  |
| Error | Forced validate on `{name}` | `ImpactorMap.ForceValidate` |  |
| Error | Something amiss on `{name}` | `ImpactorMap.Test` |  |
| Error | Missing filters on `{name}` | `ImpactorSettings.GetHashCode` ([Impacts and hit detection](../items/impacts.md)) |  |
| Error | Missing immunity group on `{name}` | `ImpactorSettings.GetHashCode` ([Impacts and hit detection](../items/impacts.md)) |  |
| Error | `{name}` is missing a channel! | `ImpactorValues.GetHashCode` ([Impacts and hit detection](../items/impacts.md#impactorvalues)) |  |
| Error | Failed sending to player: `{player}` removing player from list | `ImpactSystemHitManager.HandleImpactHit` ([Impacts and hit detection](../items/impacts.md)) |  |
| Error | Failed to register collision on `{entity.OriginalName}` with `{collision.collider}` - | `ImpactTool.OnCollisionEnter` ([Impacts and hit detection](../items/impacts.md#impacttool)) |  |
| Error | Failed to update positions on `{Entity.SafeName}` which is has pickup `{hasPickup}` and is crafted `{hasPickup && Pickup.IsCrafted}` | `ImpactTool.UpdatePositions` ([Impacts and hit detection](../items/impacts.md#impacttool)) |  |
| Error | Tried to sync impact with impactor `{impactor}` that doesn't belong to impact tool `{this}` | `ImpactTool.GetImpactorIndex` ([Impacts and hit detection](../items/impacts.md#impacttool)) |  |
| Error | Trying to generate an Ingredient page for `{item.Prefab.name}` which doesn't have a CookableItem component on the item! | `IngredientPageProvider.GeneratePage` |  |
| Error | &#123;0&#125; cooking stage switch case broke somehow! | `IngredientPageProvider.GeneratePage` |  |
| Error | `{item.name}` has a null glyph! | `IngredientPageProvider.GeneratePage` |  |
| Error | Network Interaction forcing interaction that failed interactable assessment interactor: `{interactor.name}` interactable: `{name}` score: `{score}` | `Interactable.NetworkStartInteraction` ([Interactable](../items/interactable.md)) |  |
| Error | Network Interaction forcing interaction that failed score interactor: `{interactor.name}` interactable: `{name}` score: `{score}` | `Interactable.NetworkStartInteraction` ([Interactable](../items/interactable.md)) |  |
| Error | Already interacting with: `{interactingWith}` now starting to interact with: `{interactable}` | `Interactor.StartInteract` ([Interactor and hands](../items/interactor-and-hands.md)) |  |
| Error | Failed getting forward interactable for: `{targetInteractable}` | `Interactor.GetConfirmationOnInteractable` ([Interactor and hands](../items/interactor-and-hands.md)) |  |
| Error | No items left to shoot | `ItemShooter.ShootOne` |  |
| Error | Could not find lock prefab | `LockableHinge.Load` ([Items, interaction and damage](../items/overview.md)) |  |
| Error | You are releasing a pooledObject that has been destroyed, think about releasing it | `MaxLimitPooledObjectPool.Release` |  |
| Error | You are releasing pooledObject: `{pooledObject.Name}` that has been destroyed, think about releasing it | `MaxLimitPooledObjectPool.Release` |  |
| Error | This class is obsolete. Use the new projectile. | `NetworkContactProjectile.Awake` ([Impacts and hit detection](../items/impacts.md)) |  |
| Error | Page Instance: `{this}` didnt have page data | `PageInstance.Save` ([Pages and books](../items/pages-and-books.md)) |  |
| Error | Failed to create page texture | `PageRenderer.CreateNewMaterial` |  |
| Error | Recreating! | `PageRenderer.EnsureMaterialTextureIsCreated` |  |
| Error | Pickup (`{name}`) with subdocks has a null subdock, validate that subdocks are correctly configured. | `Pickup.GetQuantity` ([Pickup](../items/pickup.md)) |  |
| Error | Didn't have the container target `{otherDockIdentifier}` for `{name}` | `PickupContainer.MoveQuantity` ([Player inventory](../items/player-inventory.md#pouches-and-pickupcontainer)) |  |
| Error | Error in MoveQuantity, Entity: `{Entity}` OtherDock: `{pickupDock}` Pickup: `{pickup}` | `PickupContainer.MoveQuantity` ([Player inventory](../items/player-inventory.md#pouches-and-pickupcontainer)) |  |
| Error | Failed to dock `{pickup.name}` to `{component.name}` with `{allowedResult}` result on server | `PickupDocker.RequestDock` |  |
| Error | How is this not null? | `PickupDocker.DockInto` |  |
| Error | Failed sending inventory event stream. Exception: `{arg}` | `PickupEventStreamLogger.LogInventoryChangeWithConsoleEvents` |  |
| Error | Missing trackers for `{player.UserInfo.Identifier}` | `PlayerInteractionManager.SyncFull` ([Items, interaction and damage](../items/overview.md)) |  |
| Error | Player `{player.UserInfo.UserInfo}` is trying to get charges for non registered id `{id}` | `PlayerInteractionManager.CheckAvailableInteractions` ([Items, interaction and damage](../items/overview.md)) |  |
| Error | Creating a pooled object that isnt a mesh replace pooled object, try using a normal definition or a different pooled object | `PooledMeshReplaceObjectDefinition.Get` |  |
| Error | You are releasing a pooledObject that has been destroyed, think about releasing it | `PooledObjectPool.Release` |  |
| Error | You are releasing pooledObject: `{pooledObject.Name}` that has been destroyed, think about releasing it | `PooledObjectPool.Release` |  |
| Error | Group removed: `{component?}` now child of `{entity.ChunkingParent}` | `PositionRestrictor.ChildRemoved` ([Pages and books](../items/pages-and-books.md)) |  |
| Error | Lost tracked object: `{item.Entity.SafeName}` `{item.Entity.ChunkingParent.SafeName}` `{item.Entity.Chunk.ChunkIdentifier}` | `PositionRestrictor.Save` ([Pages and books](../items/pages-and-books.md)) |  |
| Error | Lost tracked object: `{item2.Entity.SafeName}` `{item2.Entity.ChunkingParent.SafeName}` `{item2.Entity.Chunk.ChunkIdentifier}` | `PositionRestrictor.CheckDistances` ([Pages and books](../items/pages-and-books.md)) |  |
| Error | Failed to triangulated on index `{j}` | `QuadTriangulationToolLogic.CalculateChanges` |  |
| Error | Need to have as many MeshRenderers as MeshFilters | `RendererMeshReplacePooledObject.OnValidate` |  |
| Error | Missing pickup reference | `RotatePickupPuzzleOLD.Awake` |  |
| Error | Missing references | `RotatePickupPuzzleOLD.Awake` |  |
| Error | Error setting spline particles | `SplineParticlesPooled.Set` |  |
| Error | Have no interactors on the pickup: `{Pickup.name}` | `StabilizePickupJoint.RecordLocalPositionBeforeMoving` |  |
| Error | `{pickup.name}` has no stacking mesh. | `StorageOrganizer.Setup` ([Items, interaction and damage](../items/overview.md)) |  |
| Error | Attempting to release null array | `UnclearedPower2ArrayPool<T>.Release` |  |
| Warn | Couldnt find physical material on bow: `{bow}` so using 1 as tighness multiplier for string: `{this}` | `BowString.TightnessMultiplier` |  |
| Warn | `{definition}` - Stage: `{currentStage.Name}` is set to force kinematic but its prefab has no rigidbody | `GrowthItem.HandlePrefabKinematic` |  |
| Warn | `{name}` thinks an interactor is still interacting with it (when it doesn't think that!) | `Interactable.CheckInteractAllowedAndReplace` ([Interactable](../items/interactable.md)) |  |
| Warn | Interaction loop too deep on `{interactable.name}` from `{interactable3.name}` and `{interactable2}` for `{name}` | `Interactor.StartInteract` ([Interactor and hands](../items/interactor-and-hands.md)) |  |
| Warn | Items should not have a null prefab - `{name}` | `Item.Prefab` ([Items and materials](../items/items-and-materials.md#item)) |  |
| Warn | PooledObject: `{pooledObject.name}` was released twice | `MaxLimitPooledObjectPool.Release` |  |
| Warn | Setting to null material `{name}` | `PhysicalMaterialPart.SetMaterial` ([Items and materials](../items/items-and-materials.md#physicalmaterialpart)) |  |
| Warn | Null content in Quantity 1 pickup container | `PickupContainer.CheckForward` ([Player inventory](../items/player-inventory.md#pouches-and-pickupcontainer)) |  |
| Warn | Pouch in dock somehow | `PickupContainer.CheckBreak` ([Player inventory](../items/player-inventory.md#pouches-and-pickupcontainer)) |  |
| Warn | Server said to dock `{pickup.name}` to null dock `{request.Dock}`. Waiting for dock spawn | `PickupDocker.RequestDock` |  |
| Warn | PooledObject: `{pooledObject.name}` was released twice | `PooledObjectPool.Release` |  |
| Warn | Title was too long, truncated `{text.Length - title.Length}` characters. From '`{text}`' to '`{title}`' | `QuickAccessMenuController.GetFormattedTitle` ([Quick access menu](../items/quick-access-menu.md#quickaccessmenucontroller)) |  |
| Warn | Just ran the weird code in the bag with old position `{position}` new position `{position2}` offset `{vector}` | `StabilizePickupJoint.MoveWithPlayer` |  |

<details>
<summary>Info and debug lines (27)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | `{this}` Action item owner updated, owner: `{player2}` | `ActionItem.SyncOwner` |  |
| Info | `{this}` Action item owner updated, owner: `{player}` | `ActionItem.SetupOwner` |  |
| Info | All pooled arrays | `ArrayPoolManager.LogAllPools` |  |
| Info | Array Length: `{item.Length}` | `ArrayPoolManager.LogAllPools` |  |
| Info | `{enumerable.Count()}` arrays of size `{Mathf.Pow(2f, 4 + i)}` | `ArrayPoolManager.LogAllPools` |  |
| Info | `{type.Name}`\[\] pool | `ArrayPoolManager.LogAllPools` |  |
| Info | Player: `{player}` is subscribing to all server impact hit: `{state}` | `ImpactSystemHitManager.HandlePlayerSubscribe` ([Impacts and hit detection](../items/impacts.md)) |  |
| Info | `{this?}` MovePickupPuzzle movementAxis is (0,0,0), setting to Y (0,1,0) | `MovePickup.Awake` ([Items, interaction and damage](../items/overview.md)) |  |
| Info | Could not find the collection : `{input}` | `PageCollectionConverter.ConvertFrom` |  |
| Info | Changing pages RT format to `{fallBackFormats[num]}` | `PageRenderer.Start` |  |
| Info | Dock 0 - Dock 1 =`{(dock0Weight - dock1weight)}` | `PickupDockScaleCompare.ScaleCompare` |  |
| Info | Pickup - `{containedPickup}` | `PickupWeightScale.OnTriggerEnter` |  |
| Info | Weight Scale says: `{num2 * 100f}`kg | `PickupWeightScale.UpdateWeightDisplayInternal` |  |
| Info | replace item time up! | `PlaceItemNoDockPuzzleLogic.CheckReplace` |  |
| Info | `{this?}` RotatePickupPuzzle rotatingObject is null, setting to `{this?}` transform | `RotatePickup.Awake` ([Items, interaction and damage](../items/overview.md)) |  |
| Info | `{this?}` RotatePickupPuzzle rotationAxis is (0,0,0), setting to Y (0,1,0) | `RotatePickup.Awake` ([Items, interaction and damage](../items/overview.md)) |  |
| Info | No interactor yet | `RotatePickupPuzzleOLD.Update` |  |
| Debug | Couldnt find collider group for entity: `{other}` | `Embeddable.DisableCollisionsWithOther` |  |
| Debug | Struck Rigibody: `{struckRigidBody}` which cannot be indexed by Entity or EmbeddableManager | `Embeddable.TryGetStruckObject` |  |
| Debug | Unembedding: `{this}` due to destruction | `Embeddable.HandleDestroyed` |  |
| Debug | Loaded GCS file with availableData: `{data.storageDatas.Count}` stored: `{data.stored.Count}` identifiers: `{data.identifiers.Count}` | `GlobalCommunalStorageValues.LoadContent` |  |
| Debug | Hit with `{typeof(T).Name}` Area Filter finding `{num}` colliders | `ImpactorAreaFilter<T>.CheckFilter` |  |
| Debug | Handling impact hit from server | `ImpactSystemHitManager.HandleReceivedImpactHit` ([Impacts and hit detection](../items/impacts.md)) |  |
| Debug | Drop immediately + `{flag}` `{InteractingWith}` | `Interactor.ReadStartArguments` ([Interactor and hands](../items/interactor-and-hands.md)) |  |
| Debug | Swap target is null | `Interactor.SwapInteract` ([Interactor and hands](../items/interactor-and-hands.md)) |  |
| Debug | Wait for spawn to grab `{name}` `{args.Target}` | `Interactor.ReadStartArguments` ([Interactor and hands](../items/interactor-and-hands.md)) |  |
| Debug | The pouch's interactor is `{interactor}` | `PickupContainer.DestroyPickup` ([Player inventory](../items/player-inventory.md#pouches-and-pickupcontainer)) |  |

</details>

## Crafting and game systems

127 errors and warnings, 35 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Error | Failed to raise atm balance change event | `ATMMachine.LogBalanceChangeWithConsoleEvents` ([Trading](../game-systems/trading.md#atmmachine)) |  |
| Error | There is an unconfigured Cookable on `{Entity.PrefabRoot.name}` | `Cookable.InitializeAsServer` ([Cooking](../game-systems/cooking.md#roasting-cookable)) |  |
| Error | Missing cooking garnish on item: `{pickup.Item}` | `CookingGarnishComponent.GarnishItem` ([Cooking](../game-systems/cooking.md)) |  |
| Error | Cooking liquid visual doesnt have a liquid container as a parent: `{transform.Hierarchy()}` | `CookingLiquidVisualTippingPointController.SetupSurfaceTipLimits` |  |
| Error | Failed handling existing garnish: `{containedCookable}` | `CookingPot.HandleExistingGarnishes` ([Cooking](../game-systems/cooking.md#cookingpot)) |  |
| Error | Loaded in stage: `{currentStage}` and cant find any stew as child of pot | `CookingPot.SetStewOnStewManager` ([Cooking](../game-systems/cooking.md#cookingpot)) |  |
| Error | Error defaulting to original | `CosmeticCustomizationManager.DefaultToOriginal` ([Customization](../game-systems/customization.md)) |  |
| Error | Error initializing customization for player `{player.UserInfo}` | `CosmeticCustomizationManager.InitializeForPlayer` ([Customization](../game-systems/customization.md)) |  |
| Error | Error randomizing customization manager | `CosmeticCustomizationManager.Randomize` ([Customization](../game-systems/customization.md)) |  |
| Error | Error randomizing character | `CosmeticOwnershipManager.Randomize` ([Customization](../game-systems/customization.md)) |  |
| Error | Failed | `CosmeticOwnershipManager.LoadFor` ([Customization](../game-systems/customization.md)) |  |
| Error | Failed `{item}` cosmetic with category `{playerCosmeticCategory}` | `CosmeticOwnershipManager.CosmeticOwnershipManager` ([Customization](../game-systems/customization.md)) |  |
| Error | Refresh store failed with exception | `CosmeticOwnershipManager.RefreshStore` ([Customization](../game-systems/customization.md)) |  |
| Error | Failed to replace crafting part. `{entity.name}` `{networkEntity.name}` | `CraftingPart.ReplacedWith` ([Crafting](../game-systems/crafting.md#craftingpart)) |  |
| Error | Attempting to start a customization addressable session while one already exists | `CustomizationWrapper.StartSession` ([Customization](../game-systems/customization.md)) |  |
| Error | Definition must be active to apply it's arguments | `CustomizationWrapper.ApplyArguments` ([Customization](../game-systems/customization.md)) |  |
| Error | Removed items should already be cached. Failing to remove. | `CustomizationWrapper.DeregisterInternal` ([Customization](../game-systems/customization.md)) |  |
| Error | Trying to remove item that doesn't exist `{item}` | `CustomizationWrapper.Remove` ([Customization](../game-systems/customization.md)) |  |
| Error | Error loading customization | `CustomizationWrapperSerializer.LoadAsync` ([Customization](../game-systems/customization.md)) |  |
| Error | Error while serializing `{definitionHash}` | `CustomizationWrapperSerializer.SerializeArguments` ([Customization](../game-systems/customization.md)) |  |
| Error | Invalid customization data | `CustomizationWrapperSerializer.LoadAsync` ([Customization](../game-systems/customization.md)) |  |
| Error | Mismatched bitcount for customization item : `{definitionHash}` expected `{num}` networked: `{value}` | `CustomizationWrapperSerializer.SerializeArguments` ([Customization](../game-systems/customization.md)) |  |
| Error | DamageMultiplier enchant effect can only be used with an ImpactHit | `DamageMultiplierApplication.Invoke` |  |
| Error | DurabilitySaveEnchantment enchant effect can only be used with an ImpactHitWithTool | `DurabilitySaveEnchantmentApplication.Invoke` |  |
| Error | Pickup on `{this?}` edible object is null, cannot add page! | `EdibleObject.StartEating` ([Hunger, eating and drinking](../game-systems/hunger-and-eating.md#edibleobject)) |  |
| Error | \[GameTaskManager\] Failed to find progress tracker for `{player}` | `GameTaskManager.OnPlayerCompletedAchievement` ([Other systems](../game-systems/other-systems.md#gametaskmanager)) |  |
| Error | Failed executing GameTaskAction: `{argument.Channel}` player: `{player}` count: `{argument.Count}` | `GameTaskManager.ActionExecuted` ([Other systems](../game-systems/other-systems.md#gametaskmanager)) |  |
| Error | Failed to find progress flag with hash: `{flagHash}` | `GameTaskManager.SyncProgressFlagStatus` ([Other systems](../game-systems/other-systems.md#gametaskmanager)) |  |
| Error | bestPieceKey should not be greater than 0 and not in the dict | `GenericCraftingStation.TryAddPiece` ([Crafting](../game-systems/crafting.md#genericcraftingstation)) |  |
| Error | Received a recipe different from the current project | `GenericCraftingStation.SyncProject` ([Crafting](../game-systems/crafting.md#genericcraftingstation)) |  |
| Error | There can only be one global liquid container | `GlobalLiquidContainer.Awake` |  |
| Error | Logic manager stack issues | `GlobalLogicManager.PopContext` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Failed to load Grower component `{Entity.OriginalName}` with stage time `{timeSpan}` and current time `{time}` | `GrowerComponent.Load` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md#growercomponent)) |  |
| Error | `{this}` - Failed GoToStage: `{stageIndex}` | `GrowerComponent.GoToStage` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md#growercomponent)) |  |
| Error | `{this}` - Stage: `{currentStage.Name}` is set to retry but has a duration of: `{currentStage.Duration}` secs, set this to a sensible number please | `GrowerComponent.HandleChecksResult` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md#growercomponent)) |  |
| Error | Failed to load Grower component `{Entity.OriginalName}` with stage time `{timeSpan}` and current time `{time}` | `GrowerGroup.Load` |  |
| Error | `{this}` already has growth definition: `{GrowthDefinition}` tryint to set to `{definition}` | `GrowthStageComponent.SetStage` |  |
| Error | '`{path}`' not found | `GymnasiumXpStatusDisplay.MaxOutXpSinglePath` |  |
| Error | `{this}` - Failed updating heatpoint: `{heatPoint}` | `HeatArea.UpdateHeatPointTemperature` ([Heat](../game-systems/heat.md#heatarea)) |  |
| Error | `{name}` is lit, but gameObject disabled | `HeatSourceBase.SyncSerialize` ([Heat](../game-systems/heat.md#heatsourcebase)) |  |
| Error | Failed to set objects active on `{Entity.OriginalName}` | `JointPoint.SetObjectsActive` ([Crafting](../game-systems/crafting.md)) |  |
| Error | Adding liquid transition to container: `{name}` from container: `{name}` which doesnt not have any liquid content | `LiquidContainer.AddLiquidInTransition` |  |
| Error | Can only add positive amount of liquid into: `{name}`, trying to add `{amountToAdd}` | `LiquidContainer.AddLiquid` |  |
| Error | Can only remove positive amount | `LiquidContainer.RemoveLiquid` |  |
| Error | Couldnt add liquid amount `{amountToFill}` to `{to}`. Check container space checking logic | `LiquidContainer.FillInto` |  |
| Error | Couldnt remove liquid amount `{amountToFill}` from `{from}`. Check container space checking logic | `LiquidContainer.FillInto` |  |
| Error | Failed filling `{amountToFill}` from `{from.Entity.SafeName}` to `{to.Entity.SafeName}`, reason `{text}` | `LiquidContainer.FillInto` |  |
| Error | Liquid missing. Container `{name}` is now empty. | `LiquidContainer.Load` |  |
| Error | Trying to Add liquid to container: `{name}` on client, can only be done on server | `LiquidContainer.AddLiquid` |  |
| Error | Trying to add null liquid to container: `{name}` | `LiquidContainer.AddLiquid` |  |
| Error | Trying to Remove liquid from container: `{name}` on client, can only be done on server | `LiquidContainer.RemoveLiquid` |  |
| Error | Trying to apply effect on client | `LiquidData.Apply` ([Liquids](../game-systems/liquids.md#liquiddefinition-liquidcontent-and-liquiddata)) |  |
| Error | No pourable | `LiquidGradualDrinker.HandleLiquidContainer` |  |
| Error | You cannot set a heat points volume to 0 | `LiquidHeatAreaController.OnValidate` ([Liquids](../game-systems/liquids.md)) |  |
| Error | Couldnt find PouringParticles in the parent of the Liquid Pouring Particles Marker: `{name}` | `LiquidPouringParticlesMarker.Awake` |  |
| Error | Trying to get a liquid material but the template is null: `{name}` | `LiquidVisualData.GetSharedMaterial` |  |
| Error | Couldn't find slot to remove for player `{targetPlayer.Player.UserInfo.Username}` - `{Path}` | `PathExperience.RemoveSlots` ([Progression](../game-systems/progression.md#pathexperience)) |  |
| Error | `Tried to unlock slot {slot.Hash} for {targetPlayer.Player.UserInfo.Username}, but that's too expensive` | `PathExperience.UnlockSlot` ([Progression](../game-systems/progression.md#pathexperience)) |  |
| Error | Dock has QuantityStored of 0, but has a DockedPickup. Setting quantityStored to 1 to avoid issues: `{Entity.PrefabRoot.SafeName}` | `PickupDock.Save` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Empty child on dock `{name}` in `{Entity.PrefabRoot.Prefab.name}`. There are `{HashedGeneralValue<Item>.Count}` items. | `PickupDock.Load` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Empty pouch with docked Item `{componentInChildren.dockedType}` being checked on `{name}` | `PickupDock.CheckAllowed` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Error creating new image while docking | `PickupDock.CreateNewImage` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Failed to dock new image : dock no longer exists. | `PickupDock.CreateNewImage` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Failed to dock new image `{allowedResult}` | `PickupDock.CreateNewImage` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Inconsistent!? `{name}` docking `{pickup.name}` with current quantity of `{QuantityStored}` adding `{dockingQuantity}` | `PickupDock.Dock` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Item: `{DockedPickup.Item}` has DockedStackSize: `{DockedPickup.Item.DockedStackSize}`, it needs to be a positive number | `PickupDock.UndockUnlimitedPouches` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Loaded `{quantityStored}` `{commonPickup.name}` in `{name}` where it failed with result `{allowedResult}` | `PickupDock.LoadDockPickup` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Pouch with content has null item type `{name}` - `{pickup.name}` | `PickupDock.CheckAllowed` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Pouch without content has null pickup docked `{name}` - `{componentInChildren.dockedType}` | `PickupDock.CheckAllowed` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Removing Quantity `{count}` from Dock: `{name}` with Quantity: `{quantityStored}` but the dock has no contained Pickup | `PickupDock.DestroyAmount` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Requesting undock of more than the maximum stack size! | `PickupDock.UndockQuantity` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Undock All on dock with &gt; 1 contents | `PickupDock.UndockAll` ([Other systems](../game-systems/other-systems.md)) |  |
| Error | Trying to attach a destroyed handler. | `PlayerCharacterCustomizationManager.Attach` ([Customization](../game-systems/customization.md)) |  |
| Error | Bone Search couldnt get bone with name: `{originalName}` | `PlayerCustomizationHandler.GetBone` ([Customization](../game-systems/customization.md)) |  |
| Error | Empty version in postbox for player `{PlayerIdentifier}` | `PlayerPostboxStorage.Pop` ([Trading](../game-systems/trading.md)) |  |
| Error | `Tried to unlock slot {slot.Hash} for {Player.UserInfo.Username}, but not all dependant skills were unlocked` | `PlayerProgressionManager.UnlockSlot` ([Progression](../game-systems/progression.md#playerprogressionmanager)) |  |
| Error | Error opening postbox | `Postbox.Opened` ([Trading](../game-systems/trading.md)) |  |
| Error | Shouldn't put non rigidbodies `{spawned.SafeName}` into a post box. | `Postbox.HandleNew` ([Trading](../game-systems/trading.md)) |  |
| Error | Pooled Pouring particles were destroyed instead of being released | `PouringParticles.ResetBeforeRelease` |  |
| Error | Pouring particles were already set up for container: `{PourableContainer}` but container `{liquidContainer}` is trying to claim them, whats going on | `PouringParticles.SetupForPourableContainer` |  |
| Error | Trying to setup pouring particles `{name}` for container `{liquidContainer}` which doesnt have any content, why? | `PouringParticles.SetupForPourableContainer` |  |
| Error | Can't find `{attachment.AttachmentHash}` | `PresetTree.HandleEditorStep` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Error | Tree must be in scene to edit | `PresetTree.GenerateEditorTreeOnExisting` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Error | `{component.name}` is missing the connection: `{step.ChildConnectionHashes[j]}` | `PresetTree.HandleStep` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Error | Couldn't find skill tree for `{path}` path | `ProfessionSkillTree.GetProfessionTree` ([Skills and unlocks](../game-systems/skills-and-unlocks.md)) |  |
| Error | Found duplicate trees for `{professionSkillTree.Path}` path | `ProfessionSkillTree.GetProfessionTree` ([Skills and unlocks](../game-systems/skills-and-unlocks.md)) |  |
| Error | Could not find `{statManagerSaveDataStat.definition.Name}` on `{name}`. | `StatManager.Load` ([Stats](../game-systems/stats.md#statmanager)) |  |
| Error | Saved stat definition for `{name}` is null. | `StatManager.Load` ([Stats](../game-systems/stats.md#statmanager)) |  |
| Error | Stew has burnt away | `StewManager.HandleNewStewStage` ([Cooking](../game-systems/cooking.md#stewmanager)) |  |
| Error | The item for cookable: `{cookable.name}` doesnt have an item with a cookableItem component for stewing | `StewManager.AddIngredient` ([Cooking](../game-systems/cooking.md#stewmanager)) |  |
| Error | Found two effects applications of the same effect: `{name}` in the `{listName}` of recipe: `{name}` | `StewRecipe.CheckForDuplicates` ([Cooking](../game-systems/cooking.md#stewrecipe)) |  |
| Error | `{ingredient}` doesnt have any cookable effects | `StewRecipe.GetStewEffects` ([Cooking](../game-systems/cooking.md#stewrecipe)) |  |
| Error | Error setting TemperatureToMaterial. Does the renderer array have nulls? | `TemperatureToMaterial.UpdateValue` ([Heat](../game-systems/heat.md)) |  |
| Error | Ran operation on empty definition | `TimberBlock.SyncPickup` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Error | Destroying Trade Deck of `{Owner}` with `{buyItemDisplayDock.DockedPickup}` | `TradeVendor.InitializeAsServer` ([Trading](../game-systems/trading.md#tradevendor-and-taxmanager)) |  |
| Error | Error creating image | `TradeVendor.StockAdded` ([Trading](../game-systems/trading.md#tradevendor-and-taxmanager)) |  |
| Error | Failed to undock item `{text}` on sold, deactivating deck | `TradeVendor.MoneyEnteredBuyer` ([Trading](../game-systems/trading.md#tradevendor-and-taxmanager)) |  |
| Error | Invalid evaluated price : `{num3}` | `TradeVendor.MoneyEnteredBuyer` ([Trading](../game-systems/trading.md#tradevendor-and-taxmanager)) |  |
| Error | Error in Tree Decay. Returning true | `TreeDecay.IsDecayValid` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Error | Duplicate tree found on `{name}`. Resolving. | `TreeSpawner.InitializeAsServer` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Error | Destroying active trial: `{trialKey}` | `TrialLogic.OnDestroy` |  |
| Error | playerResetPosition is null for `{name}`! Cannot teleport player `{player.UserInfo.Username}`. | `TrialLogic.TeleportPlayerOutside` |  |
| Error | Bottom Points `{mapNode.Model.name}` | `WoodcutTree.OnCollisionEnter` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Error | Break Points `{mapNode.Parent.Model.name}` | `WoodcutTree.OnCollisionEnter` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Error | Connections | `WoodcutTree.OnCollisionEnter` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Error | Incorrect color count on `{mesh.name}` | `WoodcutTreeBakingHandler.Bake` |  |
| Error | Null species | `WoodcutTreeNodeBaker.GetMaterial` |  |
| Error | Null Tree | `WoodcutTreeNodeBaker.GetMaterial` |  |
| Warn | Unknown version of ClimbingTowerTeleporterSaveData: `{num}` | `ClimbingTowerTeleporterSaveData.ReadFrom` |  |
| Warn | Customization load cancelled | `CustomizationWrapperSerializer.ReadStreamAsync` ([Customization](../game-systems/customization.md)) |  |
| Warn | `{growthDefinition}` - Stage: `{currentStage.Name}` is set to force kinematic but its prefab has no rigidbody | `GrowerComponent.HandlePrefabKinematic` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md#growercomponent)) |  |
| Warn | Failed filling `{amountToFill}` from `{from.Entity.SafeName}` to `{to.Entity.SafeName}`, reason `{text}` | `LiquidContainer.FillInto` |  |
| Warn | Infinite Sources need to save with content: `{name}` content will be set to the default liquid (Water) | `LiquidContainer.SerializeLiquidContent` |  |
| Warn | The container `{name}` has liquid in it but no content object, it will be saved as empty | `LiquidContainer.SerializeLevelAndSettingsIntoStream` |  |
| Warn | `{this?}` sender is null. | `LogicFloatChangeOnBool.Update` ([Other systems](../game-systems/other-systems.md)) |  |
| Warn | `{this?}` sender is null. | `LogicFloatReset.Update` ([Other systems](../game-systems/other-systems.md)) |  |
| Warn | Player `{targetPlayer}` had old skill `{value2}` lost in serialization | `PathExperience.Serialize` ([Progression](../game-systems/progression.md#pathexperience)) |  |
| Warn | Dock Quantity &gt; 0, but Docked is null. Type: `{dockedType.name}` | `PickupDock.CheckForward` ([Other systems](../game-systems/other-systems.md)) |  |
| Warn | Dock Quantity &gt; 0, Docked is null, but is forwarding to clientDocked | `PickupDock.CheckForward` ([Other systems](../game-systems/other-systems.md)) |  |
| Warn | Nothing in dock? in dock: `{name}` | `PickupDock.CheckForward` ([Other systems](../game-systems/other-systems.md)) |  |
| Warn | Null Docked Type! name: `{name}` | `PickupDock.LoadSetup` ([Other systems](../game-systems/other-systems.md)) |  |
| Warn | Null Scene! name: `{name}` | `PickupDock.LoadSetup` ([Other systems](../game-systems/other-systems.md)) |  |
| Warn | `{step?}` attach `{i}` | `PresetTree.HandleEditorStep` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Warn | Requested Tool Effect for entity: `{entity}` but it is still null! | `ProfessionSkill.RequestToolEffect` ([Skills and unlocks](../game-systems/skills-and-unlocks.md)) |  |
| Warn | defaultUpgrades was null for `{this?}` smelter! | `SmelterUnlockManager.Awake` ([Smelting and forging](../game-systems/smelting-and-forging.md#smelterupgrades-and-smelterunlockmanager)) |  |
| Warn | The cookable: `{networkEntity}` doesnt have pickup on its entities parent | `StewManager.FadeOutAddedIngredient` ([Cooking](../game-systems/cooking.md#stewmanager)) |  |
| Warn | No coins left to tax. Sending profit and remaining stock to player `{tradeVendor.Owner}` post box. | `TaxManager.TakeTaxAmount` ([Trading](../game-systems/trading.md#tradevendor-and-taxmanager)) |  |

<details>
<summary>Info and debug lines (35)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | Initializing Cosmetic Customization for `{player.UserInfo.Username}` | `CosmeticCustomizationManager.InitializeForPlayer` ([Customization](../game-systems/customization.md)) |  |
| Info | \[Customization\] Identified missing default `{defaultItem.Value}` | `CustomizationWrapperSerializer.GetMissingDefaults` ([Customization](../game-systems/customization.md)) |  |
| Info | Take Poison Damage | `EffectHandler.RunPoison` ([Effects](../game-systems/effects.md#effecthandler)) |  |
| Info | '`{path}`' not found | `GymnasiumXpStatusDisplay.ResetXpSinglePath` |  |
| Info | Syncing unlocks from `{Player.UserInfo?}` to `{player.UserInfo}` | `PlayerUnlockManager.OnConnected` ([Skills and unlocks](../game-systems/skills-and-unlocks.md)) |  |
| Info | Door Closed! | `PuzzleDoor.DoorStateChanged` |  |
| Info | Door Opened! | `PuzzleDoor.DoorStateChanged` |  |
| Info | Could not find the stat '`{text}`' on `{PlayerConverter.Last.UnityObjectName}` | `StatConverter.ConvertFrom` |  |
| Info | Missing player parameter, Player needs to passed in before the stat | `StatConverter.ConvertFrom` |  |
| Info | Could not find the stat '`{text}`' on `{PlayerConverter.Last.UnityObjectName}` | `StatListConverter.ConvertFrom` |  |
| Info | Taxing `{num}` coins from player `{tradeVendor.Owner}` | `TaxManager.TakeTaxAmount` ([Trading](../game-systems/trading.md#tradevendor-and-taxmanager)) |  |
| Info | `{lastInteractorPlayerId}` just bought `{num2}` `{text}` from `{Owner}` at `{amount}` coins / `{amount2}` units | `TradeVendor.MoneyEnteredBuyer` ([Trading](../game-systems/trading.md#tradevendor-and-taxmanager)) |  |
| Info | Decay failed on tree due to recent damage. Restarting timer. | `TreeDecay.DecayFailed` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Info | Tree: `{tree}`, Rigidbody: `{tree.Rigidbody}` | `TreeDecay.IsDecayValid` ([Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md)) |  |
| Info | Added `{player.UserInfo.Username}` to `{name}` trial (`{IsActive ? "Active" : "Starting"}`) participants | `TrialLogic.RegisterPlayer` |  |
| Info | Last player left `{name}`, starting leave grace timer | `TrialLogic.StartReset` |  |
| Info | No players left in `{name}` participants, resetting. | `TrialLogic.Progress` |  |
| Info | Removing `{player.UserInfo.Username}` from `{name}` (`{IsActive ? "ACTIVE" : "FINISHED"}`) trial participants | `TrialLogic.DeregisterPlayer` |  |
| Info | Reset cancelled for `{name}`, currently `{trialParticipants.Count}` trial participants | `TrialLogic.CheckReset` |  |
| Info | Reset Sender set to false, unloading chunk | `TrialLogic.ClearResetSender` |  |
| Info | Resetting `{name}` | `TrialLogic.ResetState` |  |
| Info | Teleporting `{player.UserInfo.Username}` outside trial. | `TrialLogic.TeleportPlayerOutside` |  |
| Info | `{name}` completed | `TrialLogic.Progress` |  |
| Info | `{name}` entered phase `{currentPhase}` | `TrialLogic.Progress` |  |
| Info | Generated Successfully! | `WoodcutPointCollection.OnValidate` |  |
| Debug | Changed stat for `{targetStat.Definition.name}` from `{num}` to `{argument}` | `IndirectStatModifier.Changed` ([Stats](../game-systems/stats.md)) |  |
| Debug | Failed filling `{amountToFill}` from `{from.Entity.SafeName}` to `{to.Entity.SafeName}`, reason `{text}` | `LiquidContainer.FillInto` |  |
| Debug | Post box pushing content with hash `{content.Hash}` for `{PlayerIdentifier}` - `{TargetPlayer}` reaching `{num}` items | `PlayerPostboxStorage.Push` ([Trading](../game-systems/trading.md)) |  |
| Debug | Post box pushing `{entity.SafeName}` for `{PlayerIdentifier}` - `{TargetPlayer}` reaching `{latest.Objects.Count}` items | `PlayerPostboxStorage.Push` ([Trading](../game-systems/trading.md)) |  |
| Debug | Loaded item `{spawned}` with scale different than 1 `{spawned.transform.localScale}` | `Postbox.HandleNew` ([Trading](../game-systems/trading.md)) |  |
| Debug | Post box poped `{spawned.SafeName}` for `{handlePickup.LastPlayerInteractor}` | `Postbox.HandleNew` ([Trading](../game-systems/trading.md)) |  |
| Debug | Finishing Wipe of postboxes | `PostboxManager.ConcludeWipe` ([Trading](../game-systems/trading.md)) |  |
| Debug | Pushing `{data.Value.CoinCount}` coins and `{data.Value.ItemCount}` items for user `{data.Key}` | `PostboxManager.ConcludeWipe` ([Trading](../game-systems/trading.md)) |  |
| Debug | Recycling a `{meltingModel.Entity.Identifier}`-`{meltingModel.Entity.SafeName}` made of `{meltingModel.PhysicalMaterial}` yielding `{num}` to a slot containing `{slot.TotalContent}` | `Recycler.UpdateMeltingModels` ([Smelting and forging](../game-systems/smelting-and-forging.md#recycler)) |  |
| Debug | Wiping `{name}` with Owner `{Owner}` | `TradeVendor.WipeOperation` ([Trading](../game-systems/trading.md#tradevendor-and-taxmanager)) |  |

</details>

## Console, commands and logging

147 errors and warnings, 215 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Fatal | Failed setting up remote alta folder system at root: `{text3}` | `AltaIO.SetSavePath` ([Settings and files](../console-and-utilities/settings-and-files.md#altaio)) |  |
| Error | Failed to send analytics event. | `AltaAnalyticsDispatcher.SendData` ([Alta's web API](../console-and-utilities/alta-web-api.md)) |  |
| Error | Error deserializing REST console request from: `{userInfo}` | `AltaConsoleModule.OnRequestAsync` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Error | Invalid REST console authorization: `{token}` | `AltaConsoleModule.OnRequestAsync` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Error | Coroutine was null | `AltaCoroutine.Stop` ([Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#altacoroutine)) |  |
| Error | Error in coroutine | `AltaCoroutine.CoroutineHandler` ([Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#altacoroutine)) |  |
| Error | Error in delay call | `AltaCoroutine.Delay` ([Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#altacoroutine)) |  |
| Error | Failed to initialize save path. SavePath: `{text}` | `AltaIO.SetSavePath` ([Settings and files](../console-and-utilities/settings-and-files.md#altaio)) |  |
| Error | Trying to use S3 remote saves without providing AWS credentials | `AltaIO.SetSavePath` ([Settings and files](../console-and-utilities/settings-and-files.md#altaio)) |  |
| Error | \[AltaSceneManager\] Can not load game scene. Another load is blocking it. | `AltaSceneManager.LoadGameScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Error | \[AltaSceneManager\] Can not load Main Menu Scene right now. Currently loading another scene | `AltaSceneManager.LoadMainMenuSceneAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Error | \[AltaSceneManager\] Can not tutorial scene. Another load is blocking it. | `AltaSceneManager.LoadTutorialAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Error | \[AltaSceneManager\] Cannont cleanup loading scene. Could not find loading scene. | `AltaSceneManager.CleanUpLoadingScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Error | \[AltaSceneManager\] Game scene is already activated | `AltaSceneManager.SwitchFromMenuToGameScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Error | \[AltaSceneManager\] Game scene is not currently loaded. | `AltaSceneManager.UnloadGameSceneAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Error | \[AltaSceneManager\] Loading scene TCS already exists. Overwriting TCS. | `AltaSceneManager.CreateLoadingScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Error | \[AltaSceneManager\] Unable to return to main menu. A scene load may be in progress | `AltaSceneManager.ReturnToMainMenuAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Error | Already have an Api Client | `ApiAccess.StartWithEndpoint` ([Alta's web API](../console-and-utilities/alta-web-api.md#apiaccess)) |  |
| Error | Starting in Offline Mode | `ApiAccess.StartApiAccess` ([Alta's web API](../console-and-utilities/alta-web-api.md#apiaccess)) |  |
| Error | Starting with API Endpoint: `{apiEndpoint}` | `ApiAccess.StartAPI` ([Alta's web API](../console-and-utilities/alta-web-api.md#apiaccess)) |  |
| Error | You dont have internet so starting as offline | `ApiAccess.ShouldUseOffline` ([Alta's web API](../console-and-utilities/alta-web-api.md#apiaccess)) |  |
| Error | Could not parse isHeadless boolean | `ApplicationStartupManager.AttemptServerStartAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager)) |  |
| Error | Could not parse port | `ApplicationStartupManager.AttemptServerStartAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager)) |  |
| Error | Could not parse server id. | `ApplicationStartupManager.AttemptServerJoinAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager)) |  |
| Error | Couldnt find tutorial server to join | `ApplicationStartupManager.JoinTutorialAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager)) |  |
| Error | No internet connection detected. Loading no internet scene... | `ApplicationStartupManager.Start` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager)) |  |
| Error | Error during close of Command Handler: `{ex}` | `ClientCommandHandler.Close` |  |
| Error | Error handling received command | `ClientCommandHandler.ReceiveConsoleInput` |  |
| Error | Received unhandled remote command of type: `{remoteConsoleCommandType}` from: `{userInfo}` | `ClientCommandHandler.Handle` |  |
| Error | Error during close of Log Sender: `{ex}` | `ClientLogSender.Close` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Error | Failed logging command result as table | `CommandResult<T>.Log` ([Arguments and results](../console-and-utilities/arguments-and-results.md#commandresult)) |  |
| Error | Error in console event processor | `ConsoleEvent.Processor.ProcessQueue` |  |
| Error | No handler for log level `{ordinal}` | `ConsoleLogEvents.HandleLog` |  |
| Error | Failed to load logging settings | `Debug.LoadConfiguration` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Error | Logging Setup Error | `Debug.SetupLogging` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Error | Can't spawn Rusty Spade for a marker! Using Hash`{33230}` | `DebuggingCommandModule.SpawnLoadMarker` |  |
| Error | Failed to run | `DebuggingCommandModule.SpawnQASet` |  |
| Error | `{player}` doesn't have a controller | `DebuggingCommandModule.SpawnLoadMarker` |  |
| Error | `{"Duplicate listener subscription"}` `{listener}` for `{typeof(T)}` | `EventBus<T>.AddListener` ([Event buses and services](../console-and-utilities/event-buses-and-services.md)) |  |
| Error | No event bus of type `{typeFromHandle}` could be found. | `EventBusLocator.Get` ([Console, utilities and Alta assemblies](../console-and-utilities/overview.md)) |  |
| Error | To connect to a local server please use "game ip-local \[sceneIndex\]" | `GameCommandModule.JoinServerAtIpAsync` |  |
| Error | Couldn't find `{name}` for type `{typeof(T).Name}` | `HashedGeneralValue<T>.Get` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Error | Missing hash `{hash}` for type `{typeof(T).Name}` | `HashedGeneralValue<T>.Get` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Error | No `{typeof(T).Name}` found at `{string.Join(", ", paths)}` | `HashedGeneralValue<T>.CheckItems` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Error | Still can't find `{name}` | `HashedGeneralValue<T>.ValidateHashes` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Error | There are 2 items with the same name `{text}` in `{typeof(T).Name}` | `HashedGeneralValue<T>.BuildNameDictionary` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Error | Null hash for `{target.name}` | `HashHelper.Validate` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Error | Something unexpected happened while generating hash for `{target.name}` - `{target.GetType().Name}`. New hash: `{hash}`, original hash: `{num}` | `HashHelper.Validate` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Error | Player controller is null, unable to get inventory | `Inventory.Inventory` |  |
| Error | Failed reading input for linux console | `LinuxServerConsole.RunConsole` |  |
| Error | LoginManager.Instance is null | `LoginCommandModule.LoginAsync` |  |
| Error | Invalid file download authorization | `OutputFolderModule.OnRequestAsync` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Error | Couldnt decrypt the player preferences file | `PlayerPreferences.LoadFromDisk` ([Settings and files](../console-and-utilities/settings-and-files.md#playerpreferences)) |  |
| Error | There was an error loading the player prefs from disk | `PlayerPreferences.LoadFromDisk` ([Settings and files](../console-and-utilities/settings-and-files.md#playerpreferences)) |  |
| Error | There was an error saving the player prefs to disk | `PlayerPreferences.SaveToDisk` ([Settings and files](../console-and-utilities/settings-and-files.md#playerpreferences)) |  |
| Error | Couldn't generate a Clean Memory Dump | `ProfilingCommandModule.CleanMemDump` |  |
| Error | &lt;Color=red&gt;\[Failure\]&lt;/color&gt; failed to repair teleporter on floor `{i}` | `ProgressCommandModule.RepairTeleportersTo` |  |
| Error | Couldn't find layer `{layer}`, it's either not found/built or invalid | `ProgressCommandModule.FillCaveTeleporter` |  |
| Error | No teleporters before layer 10, please specify a layer value of 10+ | `ProgressCommandModule.RepairTeleportersTo` |  |
| Error | No teleporters beyond layer 100, please specify a layer value between 10-100 to prevent the server spending too much time generating. | `ProgressCommandModule.RepairTeleportersTo` |  |
| Error | \[`{name}`\] instance already set, destroy! | `ProjectLifetimeScope.Awake` ([Event buses and services](../console-and-utilities/event-buses-and-services.md)) |  |
| Error | Log message is too large to send | `RemoteConsoleUtility.SerializeLogEvent` |  |
| Error | Could not find the player `{user.ProvidedArgument()}` | `SavingCommandModule.WipePlayer` |  |
| Error | Failed informing new server to start up fully | `ServerCommandModule.InformNewServerOfReadiness` |  |
| Error | Failed sending migration warning message to players | `ServerCommandModule.SendPlayerCommunications` |  |
| Error | Failed to send websocket message with reason: `{ex.Message}` | `ServerCommandModule.SendWebsocketMessage` |  |
| Error | Failed calling TextEntered Callback for Server Console | `ServerConsole.ProcessInputQueue` ([Logging](../console-and-utilities/logging.md)) |  |
| Error | Already have a console open | `ServerConsoleManager.StartUp` ([Remote console](../console-and-utilities/remote-console.md#serverconsolemanager)) |  |
| Error | Failed handling command: `{command}` | `ServerConsoleManager.HandleInput` ([Remote console](../console-and-utilities/remote-console.md#serverconsolemanager)) |  |
| Error | Failed to start Server Console Manager | `ServerConsoleManager.CheckPermissions` ([Remote console](../console-and-utilities/remote-console.md#serverconsolemanager)) |  |
| Error | Token didnt have a server\_id claim | `ServerConsoleManager.ValidateConsoleToken` ([Remote console](../console-and-utilities/remote-console.md#serverconsolemanager)) |  |
| Error | Token was for a different server: `{argument}` | `ServerConsoleManager.ValidateConsoleToken` ([Remote console](../console-and-utilities/remote-console.md#serverconsolemanager)) |  |
| Error | Couldnt find heartbeat to shutdown | `ServerHeartbeat.Shutdown` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Error | Failed reading heartbeat arguments | `ServerHeartbeat.StartHeartbeatMonitor` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Error | Failed Begin Accept: `{ex}` | `ServerRemoteConsole.StartSocketListen` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Error | Failed handling new connection: `{ex}` | `ServerRemoteConsole.HandleNewConnectionAsync` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Error | Failed starting remote console | `ServerRemoteConsole.StartSocketListen` ([Remote console](../console-and-utilities/remote-console.md)) | Port 1758 couldn't be opened, most likely because something else has it. |
| Error | Error while getting ip address | `ServerUtilities.GetLocalIPv4` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#serverutilities)) |  |
| Error | Failed getting a local IP address | `ServerUtilities.GetLocalIPv4` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#serverutilities)) |  |
| Error | Failed to get public ip address | `ServerUtilities.GetPublicIPAddress` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#serverutilities)) |  |
| Error | Failed to find settings | `SettingsManager.GetSettingsFromString` ([Settings and files](../console-and-utilities/settings-and-files.md#settingsmanager)) |  |
| Error | Missing package name | `SpawnCommandModule.Packages.DropPackage` |  |
| Error | Couldn't parse measure `{measure}` | `TimeCommandModule.Future` |  |
| Error | Reached repeat call limit for repeatable entry. Entry serialized with interval: `{value}` calling method `{callback.Method.DeclaringType.FullName}`.`{callback.Method.Name}`() | `Timeline.SerializeRepeatableEntry` ([Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#timeline)) |  |
| Error | Timeline action failed with exception | `Timeline.Load` ([Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#timeline)) |  |
| Error | Tried to create an interval 0 repeatable entry, inserted as non repeating | `Timeline.InsertRepeatableCallbackAtTime` ([Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#timeline)) |  |
| Error | Trying to serialize an entry that is not a repeatable entry as repeating | `Timeline.SerializeRepeatableEntry` ([Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#timeline)) |  |
| Error | `{argument}` interval of 0 | `Timeline.SerializeRepeatableEntry` ([Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#timeline)) |  |
| Error | Could not find the player `{user.ProvidedArgument()}` | `TradeCommandModule.GetContent` |  |
| Error | Couldn't find content for player `{user.GetUsername().Result}` | `TradeCommandModule.GetContent` |  |
| Error | Herp derp, `{networkEntity}` shouldn't be in here | `TradeCommandModule.PostBoxString` |  |
| Error | Herp derp, `{prefab}` shouldn't be in here | `TradeCommandModule.PostBox` |  |
| Error | Unhandled Exception: `{context}` `{exception}` | `UnityLogHandler.LogException` | An exception nobody caught, with its stack trace. If your mod's name is in the trace, it's yours. |
| Error | Already have a update module with name: `{module.Name}` | `UnityUpdateManager.RegisterModuleToList` ([Update modules](../console-and-utilities/update-modules.md#unityupdatemanager)) |  |
| Error | Module: `{allModule.Name}` with count: `{moduleInfo.RegisteredCount}` actual: `{num}` | `UnityUpdateManager.VerifyAllCounts` ([Update modules](../console-and-utilities/update-modules.md#unityupdatemanager)) |  |
| Error | There is already an instance of the update manager | `UnityUpdateManager.Awake` ([Update modules](../console-and-utilities/update-modules.md#unityupdatemanager)) |  |
| Error | Error while invoking Unity Update Method: `{Name}` | `UpdateModule.IterateOverLinkedList` ([Update modules](../console-and-utilities/update-modules.md#updatemodule)) | An update method threw. The game removes that method from the module, so it isn't called again this session. If it's your mod's method, its update loop has stopped. |
| Error | Trying to register a null method to the unity update module: `{Name}` | `UpdateModule.RegisterMethod` ([Update modules](../console-and-utilities/update-modules.md#updatemodule)) |  |
| Error | Could not find the player `{user.ProvidedArgument()}` | `UsersCommandModule.LoginAsync` |  |
| Error | Failed parsing value as vector3 needs format x,y,z | `Vector3Converter.ConvertFrom` |  |
| Error | Using Vivox Sandbox | `VivoxUtility.Config` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Error | Can't clear body for player `{player2.UserInfo.Username}`, because they are online! | `WackyCommandModule.CleanPlayerBody` |  |
| Error | \[WebSocketCommandHandler\]: Error closing socket connection OnClose | `WebSocketCommandHandler.OnClose` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Error | \[WebSocketCommandHandler\]: Error sending to websocket | `WebSocketCommandHandler.Send` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Error | \[WebSocketCommandHandler\]: Failed authorizing websocket for `{connectionString}` Message: `{message}` | `WebSocketCommandHandler.ProcessAuthorization` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Error | \[WebSocketCommandHandler\]: Failed to raise console command execution event | `WebSocketCommandHandler.TryLogConsoleCommandExecutionWithEventStream` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Error | \[WebSocketCommandHandler\]: Invalid authorization for `{message}` | `WebSocketCommandHandler.ProcessAuthorization` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Error | \[`{"WebSocketCommandHandler"}`\]: Error deserializing websocket request for user `{UserInfo}` with message: `{message}` | `WebSocketCommandHandler.HandleRequest` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Error | Failed starting WebSocket Console | `WebSocketRemoteConsole.Start` | The websocket console couldn't start. Most likely its port (1760, or TavernLib's `console_port`) is taken, for example by another copy of the game on the same PC. The console stays off for this run. |
| Error | Encountered error in console | `WindowsServerConsole.ConsoleThread` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Warn | Cannot start an Alta Coroutin that is already running | `AltaCoroutine.Start` ([Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#altacoroutine)) |  |
| Warn | The AltaCoroutine Handler has been destroyed and the hence the Coroutine has already been stopped | `AltaCoroutine.Stop` ([Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#altacoroutine)) |  |
| Warn | \[AltaSceneManager\] Can not find loading sceen! | `AltaSceneManager.UnloadLoadingScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Warn | \[AltaSceneManager\] Cannont cleanup loading scene. Loading scene is not valid. | `AltaSceneManager.CleanUpLoadingScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Warn | \[AltaSceneManager\] Game scene is already loaded | `AltaSceneManager.LoadGameScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Warn | \[AltaSceneManager\] Loading scene already existed but there was no completed TCS. Creating a new one. | `AltaSceneManager.CreateLoadingScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) | Shows on a normal client start. |
| Warn | Reloading scene | `ApplicationManager.StartReload` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager)) |  |
| Warn | Overriding existing Socket Event : `{socketEvent.Name}` | `ConsoleEventProcessor.Register` |  |
| Warn | GameObjectLifetimeScope has no parent lifetime. | `GameObjectLifetimeScope.ConfigureScope` ([Event buses and services](../console-and-utilities/event-buses-and-services.md)) |  |
| Warn | Couldnt find item of type: `{typeof(T).Name}` with name/hash: `{text2}` | `HashedGeneralValueConverter<T>.ConvertFrom` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Warn | Null hand controller for player | `Inventory.AddHandItem` |  |
| Warn | Null hand interactor for player | `Inventory.AddHandItem` |  |
| Warn | Player controller is not a player character, skipping back and belt docks | `Inventory.Inventory` |  |
| Warn | Quitting Linux Console | `LinuxServerConsole.Shutdown` |  |
| Warn | RECEIVED SIGINT | `LinuxServerConsole.HandleInteruptSignal` |  |
| Warn | RECEIVED SIGTERM | `LinuxServerConsole.HandleTerminateSignal` |  |
| Warn | Already have a mod with name: `{name}` | `ModCommands.AddMod` |  |
| Warn | Dont have a mod with name: `{name}` | `ModCommands.GetMods` |  |
| Warn | Trying to save player prefs to disk but nothing new has been added since the last save | `PlayerPreferences.SaveToDisk` ([Settings and files](../console-and-utilities/settings-and-files.md#playerpreferences)) |  |
| Warn | Finished Memory dump | `ProfilingCommandModule.CleanMemDump` |  |
| Warn | Starting Memory dump | `ProfilingCommandModule.CleanMemDump` |  |
| Warn | Waiting for chunks to unload | `ProfilingCommandModule.CleanMemDump` |  |
| Warn | Couldnt find the ground | `SelectionCommandModule.SnapToGround` |  |
| Warn | No object selected | `SelectionCommandModule.DestroySelection` |  |
| Warn | No object selected | `SelectionCommandModule.MovingModule.Exact` |  |
| Warn | No object selected | `SelectionCommandModule.RotatingModule.Exact` |  |
| Warn | Failed to get new allocation for migration with reason, `{ex.Message}`. Trying again | `ServerCommandModule.RequestMigrationFromWebApi` |  |
| Warn | Failed to get new allocation for migration with reason, `{result.FailureType}`. Trying again | `ServerCommandModule.RequestMigrationFromWebApi` |  |
| Warn | Remote console is already started | `ServerConsoleManager.StartRemoteConsole` ([Remote console](../console-and-utilities/remote-console.md#serverconsolemanager)) |  |
| Warn | Server is not running but console is connecting to it, token: `{token.Write()}` | `ServerConsoleManager.ValidateConsoleToken` ([Remote console](../console-and-utilities/remote-console.md#serverconsolemanager)) |  |
| Warn | Socket was closed while handling new connection | `ServerRemoteConsole.HandleNewConnectionAsync` ([Remote console](../console-and-utilities/remote-console.md)) | The old TCP console on port 1758 had its socket closed while it waited for a connection. TavernLib closes that console right after it starts (`CommandSecurityPatches`), so on a Tavern server this shows on every start and is expected. |
| Warn | Couldn't position population in front of player | `SpawnCommandModule.SpawnPopulation` |  |
| Warn | Loading timeline entry too far in the future. Fixing! Either spawn durations were reduced, or the timeline was reset while the world wasn't. | `Timeline.LoadRepeatableEntry` ([Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#timeline)) |  |
| Warn | \[WebSocketCommandHandler\]: Already authorized. Using context: `{context.GetDebugInfo()}` | `WebSocketCommandHandler.ProcessPreAuthorizedRequest` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Warn | \[WebSocketCommandHandler\]: Authorization failed for `{connectionString}` Message: `{message}` | `WebSocketCommandHandler.ProcessAuthorization` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Warn | Cave layers must be generaterd. Check Quick Access Menu FPS for server updates on cave gen progress | `WorldCommandModule.CaveCommandModule.CaveTeleport` |  |
| Warn | Unknown VR mode: `{text}` | `XRUtility.GetCommandMode` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |

<details>
<summary>Info and debug lines (215)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | Recieved REST command from `{userInfo}`. `{request.content}` | `AltaConsoleModule.OnRequestAsync` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Info | Using base folder path at: `{text}` | `AltaIO.SetSavePath` ([Settings and files](../console-and-utilities/settings-and-files.md#altaio)) |  |
| Info | Using remote storage folder at: `{text3}` of type: `{text2}` | `AltaIO.SetSavePath` ([Settings and files](../console-and-utilities/settings-and-files.md#altaio)) |  |
| Info | \[AltaSceneManager\] Set NetworkScene Current to `{component}` | `AltaSceneManager.SwitchFromMenuToGameScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Info | \[AltaSceneManager\] Waiting for game scene `{LoadProgress * 100f}`% | `AltaSceneManager.FinishLoadingGameSceneInBackground` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Info | Application Quit - HasShutdown events: `{(ApplicationQuit != null)}` | `ApplicationManager.OnApplicationQuit` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager)) |  |
| Info | External OnApplicationQuit: `{reason.Reason}` | `ApplicationManager.ExternalOnApplicationQuit` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager)) |  |
| Info | Finished Shutdown events | `ApplicationManager.OnApplicationQuit` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager)) |  |
| Info | OnApplicationPause: `{isPaused}` | `ApplicationManager.OnApplicationPause` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager)) |  |
| Info | Running GC | `ApplicationManager.CleanMemory` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager)) |  |
| Info | Running GC Complete | `ApplicationManager.CleanMemory` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager)) |  |
| Info | Shutting down | `ApplicationManager.OnApplicationQuit` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager)) |  |
| Info | Unloading unused assets | `ApplicationManager.CleanMemory` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager)) |  |
| Info | Automatically joining tutorial server: `{gameServerInfo}` | `ApplicationStartupManager.JoinTutorialAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager)) |  |
| Info | Running application startup actions | `ApplicationStartupManager.RunStartupActions` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager)) |  |
| Info | Attemping login with refresh token. | `AuthenticationUtility.LoginWithRefreshTokenAsync` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Attempting to login with command line arguments. | `AuthenticationUtility.LoginWithCommandLineArgumentsAsync` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Attempting to login with username `{username}` and password hash. | `AuthenticationUtility.LoginWithUserPassHashAsync` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Client has no saved login details. | `AuthenticationUtility.GetRefreshToken` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Logging in with OAuth Credentials from command line | `AuthenticationUtility.LoginWithCommandLineArgumentsAsync` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Logging in with Tokens from command line | `AuthenticationUtility.LoginWithCommandLineArgumentsAsync` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Logging in with Username/Password from command line | `AuthenticationUtility.LoginWithCommandLineArgumentsAsync` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Logging in with Username/PasswordHash from command line | `AuthenticationUtility.LoginWithCommandLineArgumentsAsync` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Login successful for user `{userApiClient.LoggedInUserInfo.Username}` | `AuthenticationUtility.LoginWithUserPassHashAsync` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | No valid command line arguments found. | `AuthenticationUtility.LoginWithCommandLineArgumentsAsync` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Refresh token is null or empty | `AuthenticationUtility.GetRefreshToken` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Received command: `{receivedString}` from: `{userInfo}` | `ClientCommandHandler.HandleConsoleCommand` |  |
| Info | Received Mod from: `{userInfo}` | `ClientCommandHandler.HandleModUpload` |  |
| Info | Started Client command handler, Local: `{socketToClient.LocalEndPoint}` Remote: `{socketToClient.RemoteEndPoint}` | `ClientCommandHandler.ClientCommandHandler` |  |
| Info | \[NLOG\] Raw Command Line Arguments: `{string.Join("\n", allArguments)}` | `CommandLineArgsLogger.LogAltaCommandLineArgs` |  |
| Info | \[NLOG\] Raw Command Line Arguments: `{string.Join("\n", commandLineArgs)}` | `CommandLineArgsLogger.LogRawCommandLineArgs` |  |
| Info | \[Unity Logger\] Raw Command Line Arguments: `{string.Join("\n", allArguments)}` | `CommandLineArgsLogger.LogAltaCommandLineArgs` |  |
| Info | \[Unity Logger\] Raw Command Line Arguments: `{string.Join("\n", commandLineArgs)}` | `CommandLineArgsLogger.LogRawCommandLineArgs` |  |
| Info | Not enough arguments provided for command line arg: `{argument}`, expected: `{numberOfArgumentsExpected}`, isOptional: `{isOptionalArgs}` | `CommandLineArguments.TryGetNextArguments` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#commandlinearguments)) |  |
| Info | \[CommandService.Handle\] Command received with no context - creating new user context for command | `CommandService.Handle` ([Writing commands](../console-and-utilities/commands.md#commandservice)) |  |
| Info | \[CommandService.Handle\] Created default context for user `{userInfoWithPermissions.Username}` | `CommandService.Handle` ([Writing commands](../console-and-utilities/commands.md#commandservice)) |  |
| Info | \[CommandService.Handle\] Running command `{command}` as user `{context.CallingUser}` | `CommandService.Handle` ([Writing commands](../console-and-utilities/commands.md#commandservice)) |  |
| Info | `{TotalSeconds}` websocket subscription messages per second of processing | `ConsoleEvent.Processor.ProcessQueue` |  |
| Info | Usage for `{Name}`: `{Usage}` | `ConsoleOption.PrintHelp` |  |
| Info | Actually Quitting | `ConsoleWindow.ConsoleCtrlCheck` |  |
| Info | CONSOLE QUIT: `{ctrlType}` | `ConsoleWindow.ConsoleCtrlCheck` |  |
| Info | Couldn't redirect output: `{ex.Message}` | `ConsoleWindow.Initialize` |  |
| Info | Shutting down console window | `ConsoleWindow.Shutdown` |  |
| Info | \[TRACE\] Setting up Custom Logging | `Debug.SetupLogging` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Info | Logging Configuration reloaded | `Debug.LogManagerConfigurationReloaded` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Info | Not showing `{num}` servers due to them not being target: `{ServerFeatureSetProvider.FeatureSet}` | `GameCommandModule.SetRecentlyShownServers` |  |
| Info | Failed to load items for `{typeof(T).Name}`. IsFail = `{isFail}`, isInResourceLoading = `{isInResourceLoading}` | `HashedGeneralValue<T>.CheckItems` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | `{target.name}` - `{target.GetType().Name}` hash was generated from `{num}` to new hash `{hash}` | `HashHelper.Validate` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Destroy trace is now: `{isEnabled}` | `LoggingCommandModule.SetDestroyTrace` |  |
| Info | Opening log files folder at: `{Debug.LogFolderPath}` | `LoggingCommandModule.OpenLogFile` |  |
| Info | Clearing saved login credentials | `LoginPreferences.ClearCredentials` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Saving login credentials | `LoginPreferences.SaveCredentials` ([Alta assemblies](../console-and-utilities/alta-assemblies.md)) |  |
| Info | Trying to save player prefs to disk but nothing new has been added since the last save | `PlayerPreferences.SaveToDisk` ([Settings and files](../console-and-utilities/settings-and-files.md#playerpreferences)) |  |
| Info | &lt;Color=green&gt;\[Success\]&lt;/color&gt; Repaired floor `{i}` teleporter. | `ProgressCommandModule.RepairTeleportersTo` |  |
| Info | Done waiting for websocket task | `ServerCommandModule.SendWebsocketMessage` |  |
| Info | Got Connection details, Allowed: `{serverJoinResult.IsAllowed}` | `ServerCommandModule.SendWebsocketMessage` |  |
| Info | Got new allocation from AltaApi, IsAllocated: `{result.IsAllocated}` | `ServerCommandModule.RequestMigrationFromWebApi` |  |
| Info | Informing new server that it is allowed to boot up | `ServerCommandModule.InformNewServerOfReadiness` |  |
| Info | Migrating server `{activeServer}`, Remaining Time: `{GetTimeRemaining()}` | `ServerCommandModule.Migrate` |  |
| Info | Received response: `{args.Data}` | `ServerCommandModule.SendWebsocketMessage` |  |
| Info | Requesting new allocation for migration from AltaApi | `ServerCommandModule.RequestMigrationFromWebApi` |  |
| Info | Saving world before completing migration | `ServerCommandModule.SaveWorld` |  |
| Info | Sending request `{text}` to game server `{serverIdentifier}` via websockets | `ServerCommandModule.SendWebsocketMessage` |  |
| Info | Sent websocket request to game server `{serverIdentifier}` | `ServerCommandModule.SendWebsocketMessage` |  |
| Info | Shutting down server post migration | `ServerCommandModule.ShutdownPostMigration` |  |
| Info | Successfully authenticated websocket console with game server `{serverIdentifier}` | `ServerCommandModule.SendWebsocketMessage` |  |
| Info | Shutting down heartbeat monitor | `ServerHeartbeat.Shutdown` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Info | Starting heartbeat application at: `{text}` with alert interval: `{argument}` ms | `ServerHeartbeat.StartHeartbeatMonitor` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Info | Starting server heartbeat | `ServerHeartbeat.StartSending` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Info | Stopping server heartbeat | `ServerHeartbeat.StopSending` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Info | Accepted Connection, Local: `{newSocket.LocalEndPoint}` Remote: `{newSocket.RemoteEndPoint}` | `ServerRemoteConsole.HandleNewConnectionAsync` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Info | Received token: `{text}` | `ServerRemoteConsole.HandleNewConnectionAsync` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Info | Recejected client command request: `{newSocket.RemoteEndPoint}` | `ServerRemoteConsole.HandleNewConnectionAsync` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Info | Remote Console Disconnected: `{client.ClientEndpoint}` | `ServerRemoteConsole.HandleClientTerminated` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Info | Starting remote console handler | `ServerRemoteConsole.Start` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Info | Waiting for connection | `ServerRemoteConsole.StartSocketListen` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Info | Mould command still under construction! | `SpawnCommandModule.Moulds.DropPackage` |  |
| Info | Spawning `{definition.name}` for `{players.CountOrName()}` | `SpawnCommandModule.Moulds.DropPackage` |  |
| Info | Unhandled Unity Log: `{format}` | `UnityLogHandler.LogFormat` |  |
| Info | Module: `{allModule.Name}` with count: `{moduleInfo.RegisteredCount}` actual: `{num}` | `UnityUpdateManager.VerifyAllCounts` ([Update modules](../console-and-utilities/update-modules.md#unityupdatemanager)) |  |
| Info | \[WebSocketCommandHandler\]: Connection closed for `{connectionString}` | `WebSocketCommandHandler.OnClose` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Info | \[WebSocketCommandHandler\]: Connection opened for `{connectionString}` | `WebSocketCommandHandler.OnOpen` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Info | \[WebSocketCommandHandler\]: Received authorization message from `{connectionString}` | `WebSocketCommandHandler.ProcessAuthorization` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Info | \[WebSocketCommandHandler\]: Running Command `{request.content}` with context: `{context.GetDebugInfo()}` | `WebSocketCommandHandler.RunCommand` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Info | \[`{"WebSocketCommandHandler"}`\]: Authenticated as: `{UserInfo}` with new calling context. `{context.GetDebugInfo()}` | `WebSocketCommandHandler.ProcessAuthorization` ([Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler)) |  |
| Info | Starting WebSocket server | `WebSocketRemoteConsole.Start` |  |
| Info | Console Started | `WindowsServerConsole.ConsoleThread` ([Remote console](../console-and-utilities/remote-console.md)) |  |
| Debug | \[AltaSceneManager\] Activating game scene | `AltaSceneManager.SwitchFromMenuToGameScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Can not unload login scene as it is not loaded. | `AltaSceneManager.UnloadRegistrationSceneAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Cleaning Up Loading Scene | `AltaSceneManager.CleanUpLoadingScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Finishing game scene load. | `AltaSceneManager.LoadGameScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Game scene already loaded. Returning syncroniously | `AltaSceneManager.StartLoadingGameSceneInBackground` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Game scene is ready to be activated | `AltaSceneManager.FinishLoadingGameSceneInBackground` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Load Scene Complete: `{sceneName}` | `AltaSceneManager.LoadSceneAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Load Scene Started: `{sceneName}` | `AltaSceneManager.LoadSceneAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Loaded MainMenu Scene: `{menuSceneName}` and setting active | `AltaSceneManager.LoadMainMenuSceneInternalAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Loading game scene... | `AltaSceneManager.LoadGameScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Loading game scene: `{gameSceneName}` | `AltaSceneManager.FinishLoadingGameSceneInBackground` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Loading main menu scene. | `AltaSceneManager.LoadMainMenuSceneAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Loading MainMenu Scene: `{menuSceneName}` | `AltaSceneManager.LoadMainMenuSceneInternalAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Loading registration scne... | `AltaSceneManager.LoadRegistrationSceneAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Loading scene already exisis, skipping creation | `AltaSceneManager.CreateLoadingScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Loading tutorial scene... | `AltaSceneManager.LoadTutorialAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Menu Scene: `{menuSceneName}` is already loaded | `AltaSceneManager.LoadMainMenuSceneInternalAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Registration scene already loading - setting as active scene. | `AltaSceneManager.LoadRegistrationSceneAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Removing Loading Screen | `AltaSceneManager.RemoveLoadingScreen` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Returning to main menu scene... | `AltaSceneManager.ReturnToMainMenuAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Starting loading operations for `{loadOperationName}`. Is Loading = `{IsLoading}` | `AltaSceneManager.FlagLoadingStarted` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Starting to load game scene `{sceneName}` in background | `AltaSceneManager.StartLoadingGameSceneInBackground` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Stopping loading operations for `{loadOperationName}`. Is Loading = `{IsLoading}` | `AltaSceneManager.FlagLoadingStopped` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Unloading game scene... | `AltaSceneManager.UnloadGameSceneAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Unloading Loading Scene... | `AltaSceneManager.UnloadLoadingScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Unloading login scene... | `AltaSceneManager.UnloadRegistrationSceneAsync` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Unloading MainMenu Scene | `AltaSceneManager.UnloadMainMenuScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[AltaSceneManager\] Using existing loading scene and creating fresh TCS. | `AltaSceneManager.CreateLoadingScene` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager)) |  |
| Debug | \[LifetimeScope\] \[AppLifetime\] Registering Platform Dependencies | `ApplicationLifetimeScope.RegisterPlatformDependencies` ([Event buses and services](../console-and-utilities/event-buses-and-services.md)) |  |
| Debug | Clearing Offline Credentials | `ApplicationStartupManager.CleanStoreCredentials` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager)) |  |
| Debug | Storing users offline token | `ApplicationStartupManager.StoreOfflineCredentials` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager)) |  |
| Debug | User with offline permissions has logged in | `ApplicationStartupManager.StoreOfflineCredentials` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager)) |  |
| Debug | Users login tokens have refreshed storing updated offline credentials | `ApplicationStartupManager.StoreUpdatedOfflineCredentials` ([Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager)) |  |
| Debug | Client Closed Remote Console Connection | `ClientCommandHandler.ReceiveConsoleInput` |  |
| Debug | Registering event `{socketEvent.Name}` | `ConsoleEventProcessor.Register` |  |
| Debug | Changed log file path to: `{newLogFolder}` | `Debug.UpdateLogFolderPath` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Debug | Current Fixed Delta Time: `{Time.fixedDeltaTime}` \~ `{fixedDeltaTime}` frames/s | `DebuggingCommandModule.FixedTime` |  |
| Debug | Spawned set `{index}` for `{player.UserInfo.Username}` | `DebuggingCommandModule.SpawnQASet` |  |
| Debug | Changing logging rule: `{LogManager.Configuration.LoggingRules[i]}` | `LoggingCommandModule.ChangeConfig` |  |
| Debug | Loading player prefs from disk at `{SavePath}` | `PlayerPreferences.LoadFromDisk` ([Settings and files](../console-and-utilities/settings-and-files.md#playerpreferences)) |  |
| Debug | Saving player prefs to disk | `PlayerPreferences.SaveToDisk` ([Settings and files](../console-and-utilities/settings-and-files.md#playerpreferences)) |  |
| Debug | Creating memory dump to `{path}` | `ProfilingCommandModule.CleanMemDump` |  |
| Debug | Creating profile dump to `{text}` | `ProfilingCommandModule.Sample` |  |
| Debug | \[DependencyInjectionEditorInitializer\] OnApplicationQuit | `ProjectLifetimeScope.OnApplicationQuit` ([Event buses and services](../console-and-utilities/event-buses-and-services.md)) |  |
| Debug | \[`{name}`\] Alta Awake Complete | `ProjectLifetimeScope.Awake` ([Event buses and services](../console-and-utilities/event-buses-and-services.md)) |  |
| Debug | \[`{name}`\] Build Complete | `ProjectLifetimeScope.Awake` ([Event buses and services](../console-and-utilities/event-buses-and-services.md)) |  |
| Debug | Fake disposer `{arg}` created. | `ProjectLifetimeScope.Awake` ([Event buses and services](../console-and-utilities/event-buses-and-services.md)) |  |
| Debug | Started console | `ServerConsoleManager.StartUp` ([Remote console](../console-and-utilities/remote-console.md#serverconsolemanager)) |  |
| Debug | Hearbeat Monitor Args: `{text4}` | `ServerHeartbeat.StartHeartbeatMonitor` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Debug | Enabled in game server settings board | `SettingsCommandModules.EnableServerBoard` |  |
| Debug | `{setting}` set to `{item.GetValue(baseSettings)}` | `SettingsCommandModules.ChangeSetting` |  |
| Debug | `{setting}` set to `{value}` | `SettingsCommandModules.ChangeSetting` |  |
| Debug | `{file.FullName}` has reloaded | `SettingsFileAccess<TSettings>.OnFileChanged` ([Settings and files](../console-and-utilities/settings-and-files.md#settingsfileaccess)) |  |
| Debug | Tried to remove `{userName}` as friend | `SocialCommandModule.RemoveFriend` |  |
| Debug | `{userName}` is not a friend | `SocialCommandModule.RemoveFriend` |  |
| Debug | Wiping `{array.Length}` trade decks | `TradeCommandModule.EmptyTradeDecks` |  |
| Debug | Got response | `VivoxUtility.End` ([Startup and app state](../console-and-utilities/startup-and-app-state.md)) |  |
| Debug | Replacing smelter | `WackyCommandModule.Smelter` |  |
| Debug | Replacing the Chisel Deck | `WackyCommandModule.ChiselDeck` |  |
| Debug | Teleported player: `{player.UserInfo.Username}` to cavelayer: `{caveLayer.LayerIdentifier}` | `WorldCommandModule.CaveCommandModule.CaveTeleport` |  |
| Trace (console) | \[CommandService.HandleMatchedCommand\] Encountered exception when invoking command: `{ex2.GetType()}` - `{ex2.Message}` - `{ex2.StackTrace}` | `CommandService.HandleMatchedCommand` ([Writing commands](../console-and-utilities/commands.md#commandservice)) |  |
| Trace (console) | \[CommandService.HandleMatchedCommand\] Encountered inner exception when invoking command: `{innerException.GetType()}` - `{innerException.Message}` - `{innerException.StackTrace}` | `CommandService.HandleMatchedCommand` ([Writing commands](../console-and-utilities/commands.md#commandservice)) |  |
| Trace (console) | \[CommandService.HandleMatchedCommand\] Finished command `{matchedCommand.command.FullName}` | `CommandService.HandleMatchedCommand` ([Writing commands](../console-and-utilities/commands.md#commandservice)) |  |
| Trace (console) | \[CommandService.HandleMatchedCommand\] Started command `{matchedCommand.command.FullName}` | `CommandService.HandleMatchedCommand` ([Writing commands](../console-and-utilities/commands.md#commandservice)) |  |
| Trace (console) | Couldnt find any entity with Id: `{id}` | `DebuggingCommandModule.NameEntity` |  |
| Trace (console) | Coulnt find type with name: `{behaviourName}` | `DebuggingCommandModule.CountBehaviours` |  |
| Trace (console) | Coulnt find type with name: `{scriptName}` | `DebuggingCommandModule.PrintNames` |  |
| Trace (console) | Coulnt find type with name: `{typeName}` | `DebuggingCommandModule.CountScripts` |  |
| Trace (console) | Found `{array.Length}` type(s) matching name: `{behaviourName}` | `DebuggingCommandModule.CountBehaviours` |  |
| Trace (console) | Found `{array.Length}` type(s) matching name: `{typeName}` | `DebuggingCommandModule.CountScripts` |  |
| Trace (console) | Limiting the frame rate to: `{targetFPS}` | `DebuggingCommandModule.PrintNames` |  |
| Trace (console) | Opening log files folder at: `{Debug.LogFolderPath}` | `DebuggingCommandModule.OpenLogFile` |  |
| Trace (console) | Prefab: `{prefab.name}` exists `{num}` number of times in the scene | `DebuggingCommandModule.Count` |  |
| Trace (console) | Removed the frame rate limiter | `DebuggingCommandModule.PrintNames` |  |
| Trace (console) | `{foundType.FullName}` exists `{source.Count()}` number of times in `{Scene}` | `DebuggingCommandModule.CountScripts` |  |
| Trace (console) | `{type.FullName}` exists `{num2}` with enabled: `{isEnabled}` number of times in the Scene | `DebuggingCommandModule.CountBehaviours` |  |
| Trace (console) | Couldnt find user: `{player.ProvidedArgument()}` | `GameCommandModule.ConnectToPlayer` |  |
| Trace (console) | Deleting Server Save: `{serverInfo.Name}` | `GameCommandModule.DeleteSave` |  |
| Trace (console) | IP Address is not in the correct format | `GameCommandModule.JoinServerAtIpAsync` |  |
| Trace (console) | Joining Server at IP: `{ipAddress}`:`{port}`, PlayerMode: `{playerMode}` | `GameCommandModule.JoinServerAtLocalIpAsync` |  |
| Trace (console) | Joining Server at IP: `{serverIp}`:`{port}`, PlayerMode: `{playerMode}` | `GameCommandModule.JoinServerAtIpAsync` |  |
| Trace (console) | Joining Server: `{gameServerInfo}` PlayerMode: `{playerMode}` | `GameCommandModule.ConnectToServer` |  |
| Trace (console) | Joining Server: `{serverInfo.Name}` PlayerMode: `{playerMode}` | `GameCommandModule.JoinServerAsync` |  |
| Trace (console) | Starting Local Test as: `{playerMode}` of Server: `{serverAccess.ServerInfo}` | `GameCommandModule.StartLocalTestAsync` |  |
| Trace (console) | Starting Local Test as: `{playerMode}` with scene index: `{scene}` | `GameCommandModule.StartLocalTestWithSceneAsync` |  |
| Trace (console) | Starting Server: `{serverInfo.Name}` on Port: `{port}` in `{isHeadless ? "Headless" : "Normal"}` mode, `{Externally}` | `GameCommandModule.StartServerAsync` |  |
| Trace (console) | Stopping GameMode: `{GameModeManager.CurrentMode}` | `GameCommandModule.StopGameMode` |  |
| Trace (console) | User is not playing on any servers right now | `GameCommandModule.ConnectToPlayer` |  |
| Trace (console) | `{i}` - `{gameServerInfo.Name}` - `{text}` - Players: `{gameServerInfo.OnlinePlayers.Count()}` | `GameCommandModule.DisplayServers` |  |
| Trace (console) | Player Mode: `{PlayerModeUtilities.PlayerMode}` | `InfoCommandModule.PlayerMode` |  |
| Trace (console) | Version: `{BuildVersion.CurrentVersion}` | `InfoCommandModule.CurrentVersion` |  |
| Trace (console) | Logging out user: `{Username}` | `LogoutCommandModule.Logout` |  |
| Trace (console) | FPS:`{((float)frameCount / (0f - time))}` | `ProfilingCommandModule.Profile` |  |
| Trace (console) | Locking server and unloading world before taking memory snapshot | `ProfilingCommandModule.CleanMemDump` |  |
| Trace (console) | Encountered exception when invoking command: `{ex.GetType()}` - `{ex.Message}` - `{ex.StackTrace}` | `RepeatCommandModule.Repeat` |  |
| Trace (console) | Finished repetition | `RepeatCommandModule.Repeat` |  |
| Trace (console) | Repeat failed | `RepeatCommandModule.Handler` |  |
| Trace (console) | Repeat ready. ID: `{nextId}` | `RepeatCommandModule.Repeat` |  |
| Trace (console) | Repetition `{(i + 1)}` out of `{repeatCount}` | `RepeatCommandModule.Repeat` |  |
| Trace (console) | Starting repetition | `RepeatCommandModule.Repeat` |  |
| Trace (console) | Can't save when game is not running | `SavingCommandModule.Save` |  |
| Trace (console) | Couldn't find entity with id `{identifier}` | `SelectionCommandModule.SnapToOtherObject` |  |
| Trace (console) | Couldnt find a `{prefab.name}` to select | `SelectionCommandModule.FindPrefab` |  |
| Trace (console) | Destroyed: `{SafeName}` | `SelectionCommandModule.DestroySelection` |  |
| Trace (console) | Selected: `{networkPrefab.name}` | `SelectionCommandModule.FindPrefab` |  |
| Trace (console) | Unselected object: `{Current}` | `SelectionCommandModule.ClearSelection` |  |
| Trace (console) | Starting Server: `{serverAccess.ServerInfo.Name}` on Port: `{port}` in `{isHeadless ? "Headless" : "Normal"}` mode, `{Externally}` | `ServerCommandModule.StartServerAsync` |  |
| Trace (console) | Heat conductivity multiplier set to: `{multiplier}` | `SettingsCommandModules.Heat` |  |
| Trace (console) | `{setting}` is not a setting. | `SettingsCommandModules.ToggleSetting` |  |
| Trace (console) | Prefab not found | `SpawnCommandModule.For` |  |
| Trace (console) | Spawning `{prefab.name}` for `{players.CountOrName()}`. | `SpawnCommandModule.For` |  |
| Trace (console) | `{player.UserInfo.Username}` does not have a player controller. | `SpawnCommandModule.For` |  |
| Trace (console) | `{player.UserInfo.Username}` does not have a player controller. | `SpawnCommandModule.Moulds.DropPackage` |  |
| Trace (console) | Dropping `{arguments[0]}` for `{players.CountOrName()}` | `SpawnCommandModule.Packages.DropPackage` |  |
| Trace (console) | Spawning `{collection.name}` for `{players.CountOrName()}` | `SpawnCommandModule.Pages.DropPackage` |  |
| Trace (console) | `{player.UserInfo.Username}` does not have a player controller. | `SpawnCommandModule.Pages.DropPackage` |  |
| Trace (console) | No DayTime Manager | `TimeCommandModule.Set` |  |
| Trace (console) | Normalized Time of Day: `{CurrentNormalizedTime}` | `TimeCommandModule.PrintCurrentTimeOfDay` |  |
| Trace (console) | Progressed by `{progress}` `{argument}`. | `TimeCommandModule.Future` |  |
| Trace (console) | Time of Day: `{GameTimeManager.Instance.CurrentTime}` | `TimeCommandModule.PrintCurrentTimeOfDay` |  |
| Trace (console) | Time: `{Timeline.Instance.Time}` | `TimeCommandModule.PrintCurrentTime` |  |
| Trace (console) | Play Time: `{userStatistics.PlayTime}` hours | `UsersCommandModule.LoginAsync` |  |
| Trace (console) | Sign Up Date: `{userStatistics.SignupTime}` | `UsersCommandModule.LoginAsync` |  |
| Trace (console) | Can't destroy entity `{entity}`, because it's not a prefab, the correct one is `{entity.PrefabRoot}` | `WackyCommandModule.Destroy` |  |
| Trace (console) | Can't destroy entity `{entity}`, because it's parented to `{entity.ChunkingParent}` | `WackyCommandModule.Destroy` |  |
| Trace (console) | Couldn't find entity with id `{id}` | `WackyCommandModule.Destroy` |  |
| Trace (console) | Destroyed: `{num}` of `{prefab.name}` | `WackyCommandModule.DestroyBase` |  |
| Trace (console) | Dstroying entity `{entity}` | `WackyCommandModule.Destroy` |  |

</details>

## Login, web API, platforms and voice

65 errors and warnings, 74 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Error | Failed to login after registration with user: `{username}` error :`{result3.ErrorMessage}` | `AltaAccountRegistererAndLinker.InternalSubmit` |  |
| Error | Failed to register user: `{username}` error :`{result.ErrorMessage}` | `AltaAccountRegistererAndLinker.InternalSubmit` |  |
| Error | Invalid email `{emailInput.InputText}` | `AltaAccountRegistererAndLinker.InternalEmailValidation` |  |
| Error | FAIL\_SAFE | `AnalyticalButton.ButtonEnableAnimation` |  |
| Error | Unsupported list type | `AnalyticsTools.GetListFieldType` |  |
| Error | You are sending analytics records of a class that has no marked fields, try adding the AnalyticsRecord or the AnalyticsRecordForAll attribute | `AnalyticsTools.CreateSerializationFunction` |  |
| Error | Cannot enqueue request with null client | `ApiBatchRequestService.IsRequestValid` |  |
| Error | Cannot enqueue request with null data | `ApiBatchRequestService.IsRequestValid` |  |
| Error | Cannot enqueue request with null or empty uri | `ApiBatchRequestService.IsRequestValid` |  |
| Error | Failed to send analytics event | `DeepLinkAnalyticsService.CreateDeepLinkEvent` |  |
| Error | Failed to Start the discord controller | `DiscordController.Start` | Discord rich presence couldn't start (the Discord SDK threw). Only rich presence is lost. |
| Error | Failed updating activity in discord controller | `DiscordController.LateUpdate` |  |
| Error | Failed serializing string into object of type: `{typeof(T).FullName}` string: `{contentString}` | `HttpContentExtensions.ReadAsJsonAsync` |  |
| Error | Error Response for: `{response.RequestMessage.Method.Method}` - `{response.RequestMessage.RequestUri}` Headers: `{headersString}` Body: `{text}` RequestId: `{values.FirstOrDefault()}` | `HttpResponseExtensionMethods.LogErrorResponse` |  |
| Error | \[LoginManager\] An error occured while processing login callbacks. | `LoginManager.ProcessSuccessfulLogin` |  |
| Error | Login failed: `{ex.ApiError.Message}` | `LoginScreen.LoginAsync` |  |
| Error | Login failed: `{ex2.Message}` | `LoginScreen.LoginAsync` |  |
| Error | An error occured while trying to connect via deeplink: | `OculusDeepLinkService.JoinServerViaDeepLink` |  |
| Error | Could not swap servers. Returning to menu instead | `OculusDeepLinkService.ChangesServerViaDeepLink` |  |
| Error | Deeplink Join Error: `{ex.Message}`, Stacktrace: `{ex.StackTrace}` | `OculusDeepLinkService.JoinServerViaDeepLink` |  |
| Error | Platform of Mode: `{mode}` is already active | `PlatformDriver.StartPlatformCoroutine` |  |
| Error | Swapping VR mode is not currently supported | `PlatformDriver.StartPlatformCoroutine` |  |
| Error | Trying to setup platform with a different player mode, current: `{ActiveDevice.Mode}` new: `{newMode}` | `PlatformDriver.SetupPlatform` |  |
| Error | Failed to send analytics event. clearing existing analytic data | `PlayerCommunityAnalytics.CreateAnalyticEvent` |  |
| Error | `{reportEventOriginType}` not supported in FriendlyText() | `PlayerCommunityAnalytics.FriendlyText` |  |
| Error | Failed sending web request to: `{request.RequestUri}` | `RetryHandler.SendAsync` |  |
| Error | Failed to send analytics event | `SignupAnalyticsReporter.PostReport` |  |
| Error | Couldnt get SteamVR instance | `SteamVRDeviceLifecycle.EnableSDK` |  |
| Error | Failed to populate user settings report data, stats is null: `{userStatistics == null}`, settings is null: `{settings == null}` | `UserSettingsReport.PopulateEventData` |  |
| Error | Failed to send analytics event | `UserSettingsReport.PostReport` |  |
| Error | Can not log in to a Vivox Client twice. | `VivoxClient.Login` |  |
| Error | Error during Vivox login: `{ex}` | `VivoxClient.Login` | Vivox voice chat logs in through Alta's web API, which is gone. Expected on every client start. |
| Error | Failed to log in to vivox | `VivoxClient.Login` |  |
| Error | Vivox Attempting to join already joined channel! | `VivoxClient.JoinChannel` |  |
| Error | Vivox session proprty changed exception `{arg}` | `VivoxClient.SessionPropertyChanged` |  |
| Error | Vivox Trying to leave channel: '`{channel}`', but it has not been joined | `VivoxClient.LeaveChannel` |  |
| Error | Failed logout of vivox after game mode change | `VivoxManager.OnGameModeChanged` |  |
| Error | Vivox LoggedIn Error | `VivoxManager.LoginVivoxClient` | Vivox voice chat couldn't log in (see the line before). Expected, since Alta's web API is gone. |
| Error | Vivox manager Encountered error trying to handle player controller set | `VivoxManager.OnPlayerControllerSet` |  |
| Error | Vivox Session Failed getting token for joining voice chat channel, retrying. Error: `{ex.ApiError.Message}` | `VivoxSession.Initialize` |  |
| Error | Vivox Session Failed getting token to join server voice chat | `VivoxSession.Initialize` |  |
| Error | Vivox Voice Failed to deativate positional voice | `VivoxVoice.DisconnectAudioCallback` |  |
| Error | Vivox Voice Failed to set audio connected | `VivoxVoice.ConnectAudioCallback` |  |
| Warn | Friend Request timed out | `FriendRequestToken.TimeoutFade` |  |
| Warn | General Loading Object is not initalized. Could not display message: `{message}` | `GeneralLoadingObjectManager.DisplayMessage` | A loading-screen message with no loading screen to show it on, as on a headless game. Harmless; the message is in the log line. |
| Warn | Transform to rotate is null and will not be modified, try checking references on General Loading Object Manager. | `GeneralLoadingObjectManager.CacheTransformToRotateNullComparison` |  |
| Warn | JsonContent with null object | `HttpClientExtensions.JsonContent.Convert` |  |
| Warn | Response Status: `{response.StatusCode}` | `HttpResponseExtensionMethods.HandleForbiddenOrOtherHttpStatus` |  |
| Warn | Response Status: `{response.StatusCode}` and Error: `{apiError.Message}`, Request Id: `{values.FirstOrDefault()}` | `HttpResponseExtensionMethods.CreateApiErrorExceptionAsync` |  |
| Warn | Response Status: `{response.StatusCode}` and Failed reading error as APIError class, raw data: `{contentString}` | `HttpResponseExtensionMethods.CreateApiErrorExceptionAsync` |  |
| Warn | Action Execution time has already passed | `LowLevelApiClient.ScheduleAction` |  |
| Warn | Received Timeout Event but the last Timeout was very recent so wont reset the internal HttpClients yet | `LowLevelApiClient.HandleTimeout` |  |
| Warn | Response Status: `{response.StatusCode}` | `LowLevelApiClient.HandleForbiddenOrOtherHttpStatus` | A call to Alta's web API got an error back. Those services are closed, so a few of these at startup are expected. |
| Warn | Response Status: `{response.StatusCode}` and Error: `{apiError.Message}` | `LowLevelApiClient.CreateApiErrorExceptionAsync` | A call to Alta's web API got an error back. Those services are closed, so a few of these at startup are expected. |
| Warn | Response Status: `{response.StatusCode}` and Failed reading error as APIError class, raw data: `{contentString}` | `LowLevelApiClient.CreateApiErrorExceptionAsync` | A call to Alta's web API got an error back. Those services are closed, so a few of these at startup are expected. |
| Warn | There was no active platform to stop | `PlatformDriver.StopActivePlatform` | Nothing to stop, usually during shutdown or a scene reload. Harmless. |
| Warn | Sending API Request failed, retrying... (`{request.Method.Method}`: `{uriString}`) | `RetryHandler.SendAsync` |  |
| Warn | Sending API Request timed out (`{request.Method.Method}`: `{uriString}`) | `RetryHandler.SendAsync` |  |
| Warn | Failed Attempting to assign posedObject: `{posedObject.name}` to device: `{device}` | `SteamVRDeviceLifecycle.AttemptAssignDevice` |  |
| Warn | Failed to load UserSettingsAnalyticsReporterConfiguration. | `UserSettingsAnalyticsReporter.LoadConfig` |  |
| Warn | Reporting is not allowed after the end date. | `UserSettingsAnalyticsReporter.Report` |  |
| Warn | UserSettingsAnalyticsReporterConfiguration is null, ensure that it is present in the Addressables group and is baked. Expected: UserSettingsAnalyticsReporterConfiguration | `UserSettingsAnalyticsReporter.OnLoggedIn` | An analytics config asset didn't load. It only feeds analytics, so it's harmless. |
| Warn | Tried to handle Vivox null login session | `VivoxClient.HandleSessionStateChanged` |  |
| Warn | Vivox Session `{session.Channel}` didn't contain user `{username}` | `VivoxSession.SetMuted` |  |
| Warn | Vivox Voice Session is already disconnected. | `VivoxVoice.Deactivate` |  |

<details>
<summary>Info and debug lines (74)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | Enqueued batch request to `{uri}` | `ApiBatchRequestService.Enqueue` |  |
| Info | Initialized batch request queue | `ApiBatchRequestService.InitializeQueue` |  |
| Info | Sending batched request to `{key}` with `{value2.Count}` entries | `ApiBatchRequestService.ProcessQueueInternal` |  |
| Info | Attempting auto login with command line arguments... | `AuthenticationService.AutoLoginAsync` |  |
| Info | Attempting auto login with editor override credentials. | `AuthenticationService.LoginUsingEditorOverrideCredentials` |  |
| Info | Attempting auto login with refresh token... | `AuthenticationService.AutoLoginAsync` |  |
| Info | Auto login not needed. CLient is already logged in. | `AuthenticationService.AutoLoginAsync` |  |
| Info | Could not login with command like arguments: `{result.ErrorMessage}` | `AuthenticationService.AutoLoginAsync` |  |
| Info | \[DISCORD\] `{log}` | `DiscordController.Log` |  |
| Info | Discord not installed. Disabling. | `DiscordController.LateUpdate` |  |
| Info | Discord Result : `{result}` | `DiscordController.ResultCallback` |  |
| Info | Failed to Start the discord controller: `{ex.GetType().Name}`:`{ex.Message}` | `DiscordController.Start` | Discord rich presence couldn't start (the Discord SDK threw). Only rich presence is lost. |
| Info | \[Friendship Manager\] Updating Friends | `FriendshipManager.GetFriends` |  |
| Info | Local Updating Friends complete | `FriendshipManager.GetFriends` |  |
| Info | Displaying message to user: `{message}` | `GeneralLoadingObjectManager.DisplayMessage` |  |
| Info | Setting up Oculus IAP Manager | `IAPViewModel.Setup` |  |
| Info | \[LoginManager\] Already logged in, executing action `{action}` immediately | `LoginManager.AddPostLoginAction` |  |
| Info | \[LoginManager\] Attempting automatic login. | `LoginManager.AutoLoginAsync` |  |
| Info | \[LoginManager\] Automatic login successful. | `LoginManager.AutoLoginAsync` |  |
| Info | \[LoginManager\] Could not log in automatically: `{loginResult.ErrorMessage}` | `LoginManager.ProcessAutoLoginFailed` |  |
| Info | \[LoginManager\] Executing post login actions | `LoginManager.ExecutePostLoginActions` |  |
| Info | \[LoginManager\] Invoking login callbacks | `LoginManager.ProcessSuccessfulLogin` |  |
| Info | \[LoginManager\] Invoking logout callbacks | `LoginManager.Logout` |  |
| Info | \[LoginManager\] Loading account setup scene. | `LoginManager.ProcessAutoLoginFailed` |  |
| Info | \[LoginManager\] Tried to log out when not logged in. | `LoginManager.Logout` |  |
| Info | Found existing refresh routine, cancelling to handle new tokens | `LowLevelApiClient.CancelRefreshRoutine` |  |
| Info | Resetting HttpClients due to a Timeout on API call: `{request.RequestUri}` | `LowLevelApiClient.HandleTimeout` |  |
| Info | Updated Login Credentials, Started timer to automatically update them at `{dateTime}` | `LowLevelApiClient.OnNewCredentials` |  |
| Info | Could not get valid Deeplink launch details | `OculusDeepLinkService.ChangesServerViaDeepLink` |  |
| Info | Deep link intent received... | `OculusDeepLinkService.OnDeepLinkIntent` |  |
| Info | Deep link request for server `{serverID}` but player is already in this server. | `OculusDeepLinkService.TryGetValidLaunchDetails` |  |
| Info | Deep linking to server `{serverID}`. | `OculusDeepLinkService.TryGetValidLaunchDetails` |  |
| Info | Deeplink server join success: `{isGameModeStarted}` | `OculusDeepLinkService.JoinServerViaDeepLink` |  |
| Info | Deeplink to join server: `{gameServerInfo}`, raw message: `{launchDetails.DeeplinkMessageJson}` | `OculusDeepLinkService.JoinServerViaDeepLink` |  |
| Info | Launched with Deeplink | `OculusDeepLinkService.TryConnectToDeepLinkServer` |  |
| Info | No deep link info found. | `OculusDeepLinkService.TryGetValidLaunchDetails` |  |
| Info | Not quest or in local test server - aborting deep link | `OculusDeepLinkService.TryGetValidLaunchDetails` |  |
| Info | Not yet logged in, aborting deep link intent flow. The player should pick this back up again after authenticating. | `OculusDeepLinkService.OnDeepLinkIntent` |  |
| Info | \[Oculus Destination Controller\] Initializing DeepLinks | `OculusDestinationController.InitializeDeepLinkFromSetup` |  |
| Info | Destroying OculusDestinationController because not on Quest | `OculusDestinationController.Start` |  |
| Info | Not updating Oculus destination. IsQuest = `{PlatformProvider.IsQuest()}`, IsValidDestination = `{text}`, IsLastDestination = `{text2}`. | `OculusDestinationController.UpdatePresence` |  |
| Info | Setting Oculus destination to `{destination}` | `OculusDestinationController.SetDestination` |  |
| Info | Updating Oculus destination | `OculusDestinationController.UpdatePresence` |  |
| Info | Setting Platform Player for Active platform: `{ActiveDevice.Mode}` to player: `{player}` | `PlatformDriver.SetupPlatform` |  |
| Info | Stopped Active Platform: `{ActiveDevice.GetType()}` | `PlatformDriver.StopActivePlatform` |  |
| Info | Retrying web request sending in `{num}` seconds | `RetryHandler.SendAsync` |  |
| Info | Encountered unexpeted vivox client state `{loginSession.State}`. Aborting login attempt. | `VivoxClient.Login` |  |
| Info | Handling Vivox LoginSession state change: `{loginSession.State}` | `VivoxClient.HandleSessionStateChanged` |  |
| Info | Successfully logged in to vivox | `VivoxClient.Login` |  |
| Debug | Logged in, creating user, server and launcher api clients | `HighLevelApiClient.CreateLoggedInApiClients` |  |
| Debug | API call: `{uri}` witn no content (expected). | `HttpClientExtensions.LogApiRequest` |  |
| Debug | API call: `{uri}` content:`{text}` | `HttpClientExtensions.LogApiRequest` |  |
| Debug | API Response for: `{response.RequestMessage.Method.Method}` - `{response.RequestMessage.RequestUri}` Headers: `{headersString}` Body: `{text}` RequestId: `{values.FirstOrDefault()}` | `HttpResponseExtensionMethods.LogDebugResponse` |  |
| Debug | Skipping the tutorial from Registration Screen Prompt | `LoginScreenManager.SkipTutorial` |  |
| Debug | Skipping the tutorial from Registration Screen Prompt AND joining deeplink server | `LoginScreenManager.LoadDeeplinkServer` |  |
| Debug | Starting the tutorial from Registration Screen Prompt | `LoginScreenManager.StartTutorial` |  |
| Debug | `{request.Method.Method}`: `{uriString}` | `RetryHandler.SendAsync` |  |
| Debug | Logged out of vivox | `VivoxClient.Logout` |  |
| Debug | Vivox LoginSession Property Changed, PropName: `{e.PropertyName}` with Value: `{argument}` | `VivoxClient.SessionPropertyChanged` |  |
| Debug | Attempting to relog vivox manager after game mode change | `VivoxManager.OnGameModeChanged` |  |
| Debug | Vivox Manager: New player joined. Server has `{Player.AllPlayers.Count}` players | `VivoxManager.OnPlayerJoinedServer` |  |
| Debug | Vivox Session Failed to connect participant `{key}` - `{player.Account.Name}`. Waiting `{delay}` sec. | `VivoxSession.PairWithPlayer` |  |
| Debug | Vivox Session Got response | `VivoxSession.ConnectAsync` |  |
| Debug | Vivox Session player `{player2}` to participant `{key}` - `{player.Account.Name}` | `VivoxSession.PairWithPlayer` |  |
| Debug | Vivox Session Setting user `{username}` to muted `{isMuted}` | `VivoxSession.SetMuted` |  |
| Debug | Vivox Session Successfully joined voice channel `{Channel.Name}` | `VivoxSession.Initialize` |  |
| Debug | Vivox Session Voice token : `{accessToken}` | `VivoxSession.Initialize` |  |
| Debug | Vivox Session `{participant.Account.DisplayName}` joined chat `{Channel.Name}` | `VivoxSession.PlayerJoined` |  |
| Debug | Vivox Session `{participant.Account.DisplayName}` left chat `{Channel.Name}` | `VivoxSession.PlayerLeft` |  |
| Debug | VivoxChannel Session Property Changed, PropName: `{e.PropertyName}` with Value: `{sender}` | `VivoxSession.SessionPropertyChanged` |  |
| Debug | Vivox Voice Activated positional voice with `{head.name}` | `VivoxVoice.Activate` |  |
| Debug | Vivox Voice Deactivating positional voice complete | `VivoxVoice.DisconnectAudioCallback` |  |
| Debug | Vivox Voice is transmiting: '`{session.IsTransmitting}`' | `VivoxVoice.Activate` |  |
| Debug | Vivox Voice Start deactivating positional voice | `VivoxVoice.Deactivate` |  |

</details>

## Menus, UI and tutorial

75 errors and warnings, 92 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Error | \[ClientController\] A client runtime step for `{step.StepName}` already exists for player with id `{playerId}`. | `ClientController.OnServerSpawnedStep` |  |
| Error | \[ClientController\] Failed to remove client runtime steps for player with id `{playerId}`. | `ClientController.OnServerClearedTutorialSteps` |  |
| Error | \[ClientController\] No client runtime step for `{step.StepName}` exists for player with id `{playerId}` | `ClientController.OnServerSpawnedAdditionalStepContent` |  |
| Error | `{this}` - Failed running cancel callback on confirm panel | `ConfirmPopupPanel.HandleCancelPressed` |  |
| Error | `{this}` - Failed running confirm callback on confirm panel | `ConfirmPopupPanel.HandleConfirmPressed` |  |
| Error | Failed creating server! | `CreateServerPanel.Run` |  |
| Error | `{this}` step index `{num}` is out of range for the current MicroTutorial. | `DestroyStepContentStep.RunForInstance` |  |
| Error | Dynamic Mask cannot initialize without a valid blit shader | `DynamicMask.Initialize` |  |
| Error | Dynamic mask could not add texture, please convert the texture from `{texture.format}` to RGBA32 and try again. | `DynamicMask.AddTexture` |  |
| Error | Failed updating server! | `EditServerPanel.Run` |  |
| Error | Event orb '`{gameObject.name}`' does not have a valid release action | `EventOrb.ValidatePickupInteraction` |  |
| Error | Event orb '`{gameObject.name}`' tried to call a null method | `EventOrb.OnValidLetGo` |  |
| Error | Failed Leaving group | `GroupInfoTab.LeaveGroupAsync` |  |
| Error | Error during group invite accept | `GroupInviteNotification.Accept` |  |
| Error | Failed Kicking Player | `GroupMembersPage.KickMemberAsync` |  |
| Error | Too Many users in group to currently display | `GroupMembersPage.SetupMembersList` |  |
| Error | Failed to get all friends requests | `InboxPanel.GetAllNotifications` |  |
| Error | Failed to get all group invites | `InboxPanel.GetAllNotifications` |  |
| Error | Failed to get status | `InboxPanel.GetAllNotifications` |  |
| Error | Had no data mapping for inbox element: `{element}` | `InboxPanel.HandleSelectedElement` |  |
| Error | Issue while sorting notifications | `InboxPanel.GetAllNotifications` |  |
| Error | Failed to setup key `{key}` track | `KeyboardEventTriggers.RegisterKeyPressed` |  |
| Error | There is no keyboard attached! | `KeyboardEventTriggers.RegisterKeyPressed` | Something registered a key handler on Windows without a keyboard device, as on a headless server. Expected there; the handler just isn't registered. |
| Error | `{this}` client load completed for `{player}` but was expecting `{Player}`. Ignoring event... | `MicroTutorial.OnClientLoadCompleted` |  |
| Error | \[MicroTutorialAnalyticsEvent\] Invalid step index: `{stepIndex}` for tutorial: `{tutorial.Settings.TutorialName}`. | `MicroTutorialAnalyticsEvent.static` |  |
| Error | \[MicroTutorialAnalyticsEvent\] Unhandled tutorial state: `{tutorial.State}` encountered. | `MicroTutorialAnalyticsEvent.static` |  |
| Error | \[MicroTutorialExitFaceOrb\] MicroTutorialSettings was null when trying to start tutorial. | `MicroTutorialFaceOrb.StartTutorial` |  |
| Error | \[MicroTutorialExitFaceOrb\] MicroTutorialSystemController was null when trying to start tutorial. | `MicroTutorialFaceOrb.StartTutorial` |  |
| Error | \[MicroTutorialExitFaceOrb\] Player was null when trying to start tutorial. | `MicroTutorialFaceOrb.StartTutorial` |  |
| Error | Invalid tutorial data. Key = `{activeTutorial.Key}`, Value = `{activeTutorial.Value}` | `MicroTutorialModule.ListActiveTutorials` |  |
| Error | \[MicroTutorialOrbInjector\] Could not spawn orb in chunk `{data.ChunkIdentifier}` because the identifier does not exist | `MicroTutorialOrbInjector.SetupOrbSpawnData` |  |
| Error | Setting message of options popup but dont have a text renderer setup: `{this}` | `OptionsPanel.Setup` |  |
| Error | `{this}` - Failed running callback on options panel | `OptionsPanel.Setup` |  |
| Error | Player in position observer spawned outside of domain, searching disabled. | `PlayerInPositionObserver.Start` |  |
| Error | Encountered error reporting player: `{report.Info.ReportedUser.Username}` for: `{report.Info.Type}` on server: `{report.Info.Server}` | `PlayerReportBaseNotification.BanUserFromReport` |  |
| Error | \[PrefabInPositionObserver\] Could not find domain | `PrefabInPositionObserver.OnTriggerEnter` |  |
| Error | \[PrefabInPositionObserver\] Domain has null player | `PrefabInPositionObserver.OnTriggerEnter` |  |
| Error | Encountered error reporting player: `{UserInfo}` for: `{reportType}` on server: `{player.Server}` | `RecentPlayersListPanel.ReportPlayer` |  |
| Error | Had no data mapping for inbox element: `{element}` | `ReportsPanel.HandleSelectedElement` |  |
| Error | Failed to save Android screenshot | `Screenshot.SavePhotoAndroid` |  |
| Error | Failed to save Windows screenshot | `Screenshot.SavePhotoWindows` |  |
| Error | Invalid Screenshot Path | `Screenshot.SavePhotoWindows` |  |
| Error | `{PlatformProvider.PlatformName}` is not supported for saving photos | `Screenshot.SavePhoto` |  |
| Error | The lever you are using for the scroller needs to have only one selection option (in the middle) | `ScrollerEnumMenuSetting.OnValidate` |  |
| Error | The lever you are using for the scroller needs to have only one selection option (in the middle) | `ScrollerSelector.OnValidate` |  |
| Error | \[ServerController\] Null settings for tutorial start request for `{player}`. | `ServerController.SpawnTutorial` |  |
| Error | \[ServerController\] Unable to create tutorial instance from `{settings}` for `{player}` | `ServerController.SpawnTutorial` |  |
| Error | \[ServerController\] `{player}` is not currently in a tutorial | `ServerController.DespawnTutorial` |  |
| Error | `{this}` is already complete - ignoring duplicate completion request. | `ServerStepInstance.Complete` |  |
| Error | `{this}` tutorial chunk is null! | `ServerStepInstance.SpawnDynamicStepContent` |  |
| Error | The lever you are using for the scroller needs to have only one selection option (in the middle) | `StandardFloatAsEnum.OnValidate` |  |
| Error | `{this}` has null dynamicContentTransform | `StepInstance.SpawnAdditionalStaticContent` |  |
| Error | `{this}` is already spawned, ignoring spawn command | `StepInstance.SpawnStaticStepContent` |  |
| Error | `{this}` - Can only switch to tabs that are setup on the tabbed panel | `TabbedPanel.SwitchToTab` |  |
| Error | Failed to bake text renderer `{textRenderer}` | `TextRenderer.AndroidTextRendererQueue.UpdateQueue` |  |
| Error | Could not find insert position for extra key `{keyInfo.key}` | `TouchScreenKeyboard.AddExtraKey` |  |
| Error | Spawned a second touch screen keyboard, current: `{Instance}` | `TouchScreenKeyboard.Awake` |  |
| Error | Failed starting game | `VrMainMenu.StartGameAsync` |  |
| Error | Error while waiting for task | `Window.ShowLoadingForTask` |  |
| Error | Failed to show popup with message `{message}` | `Window.ShowConfirmPopup` |  |
| Error | `{this}` Already on panel: `{panel}` | `Window.SwitchToPanel` |  |
| Warn | Unknown platform, ignoring platform filtering step. | `APIStatusManager.IsCorrectPlatform` |  |
| Warn | Error during get user for add as friend | `FriendsListPanel.AddFriend` |  |
| Warn | Error during get user for invite user to group | `GroupMembersPage.InviteUser` |  |
| Warn | Trying to set `{this}` to state: `{state}`. But it is already in that state | `Panel.SetActive` |  |
| Warn | No Current Player. Cannot pull player cosmetics. Using debug settings for supporter status | `QuestBoard.DebugApplyPlayerAndRewards` |  |
| Warn | couldn't get character info: `{character}` | `TextRenderer.GetWidth` |  |
| Warn | error couldn't find letter: `{c2}` | `TextRenderer.DrawTextLine` |  |
| Warn | error couldn't find letter: `{c3}` | `TextRenderer.DrawTextLine` |  |
| Warn | error couldn't find letter: `{c4}` | `TextRenderer.DrawTextLine` |  |
| Warn | error couldn't find letter: `{c}` | `TextRenderer.DrawTextLine` |  |
| Warn | Already in the process of starting a game | `VrMainMenu.StartLocalTest` |  |
| Warn | Low memory! | `VrMainMenu.LowMemory` |  |
| Warn | `{this}` - Confirm Popup is not setup | `Window.ShowConfirmPopup` |  |
| Warn | `{this}` - Loading UI is not setup | `Window.SetLoadingActive` |  |

<details>
<summary>Info and debug lines (92)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | No game server info, ignoring region filtering step for Status API. | `APIStatusManager.IsCorrectRegion` |  |
| Info | Pressed Button: `{this}` | `Button.Press` |  |
| Info | Released Button: `{this}` | `Button.Release` |  |
| Info | \[ClientController\] Client with id `{playerId}` received clear steps event | `ClientController.OnServerClearedTutorialSteps` |  |
| Info | \[ClientController\] Client with id `{playerId}` received despawn event for `{step}` | `ClientController.OnServerDespawnedTutorialStepContent` |  |
| Info | \[ClientController\] Creating step instance for `{step}` for player with id `{playerId}`. | `ClientController.OnServerSpawnedStep` |  |
| Info | \[ClientController\] Spawning additional step content for `{step}` for player with id `{playerId}` | `ClientController.OnServerSpawnedAdditionalStepContent` |  |
| Info | \[ClientStepInstanceMap\] Adding step instance for player with id `{playerId}` | `ClientStepInstanceMap.Add` |  |
| Info | \[ClientStepInstanceMap\] Creating new step map for player with id `{playerId}` | `ClientStepInstanceMap.Add` |  |
| Info | \[ClientStepInstanceMap\] Removing all step instances for player with id `{playerId}` : result = `{flag}` | `ClientStepInstanceMap.Remove` |  |
| Info | \[ItemForgedStep\] player = `{itemForgedEvent.Source.UserInfo.Username}`, and forgedItemHash = `{itemForgedEvent.ItemHash}` | `ItemForgedStep.IsCompletedByEvent` |  |
| Info | `{name}` is missing a setting | `MenuToggleSetting.OnValidate` |  |
| Info | `{this}` cleaning up content with `{StepCount}` steps to despawn. | `MicroTutorial.CleanUpTutorialContent` |  |
| Info | `{this}` client load completed for `{player}`. | `MicroTutorial.OnClientLoadCompleted` |  |
| Info | `{this}` Creating domain... | `MicroTutorial.CreateDomain` |  |
| Info | `{this}` despawned tutorial step content. | `MicroTutorial.CleanUpTutorialContent` |  |
| Info | `{this}` despawning for `{Player}`. | `MicroTutorial.Despawn` |  |
| Info | `{this}` destroyed domain. | `MicroTutorial.CleanUpTutorialContent` |  |
| Info | `{this}` has finished final step for `{Player}`. | `MicroTutorial.OnStepCompleted` |  |
| Info | `{this}` moving to next step for `{Player}`. | `MicroTutorial.NextStep` |  |
| Info | `{this}` returned `{player}` to game. | `MicroTutorial.ReturnPlayerToGame` |  |
| Info | `{this}` save blocker removed, respawning player in overworld. | `MicroTutorial.ReturnPlayerToGame` |  |
| Info | `{this}` Spawning for `{Player}`. | `MicroTutorial.Spawn` |  |
| Info | `{this}` starting first step for `{Player}`. | `MicroTutorial.Start` |  |
| Info | `{this}` `{Player}` moved back to previous chunk. | `MicroTutorial.Despawn` |  |
| Info | \[MicroTutorialModule\] Exiting tutorial for &#123;player&#125; | `MicroTutorialModule.ExitTutorial` |  |
| Info | \[MicroTutorialModule\] Starting `{tutorialSettings}` for `{player}` | `MicroTutorialModule.StartTutorial` |  |
| Info | \[MicroTutorialOrbInjector\] Destroying orb | `MicroTutorialOrbInjector.DespawnOrbsForChunk` |  |
| Info | \[MicroTutorialOrbInjector\] Destroying `{value.Count}` orbs | `MicroTutorialOrbInjector.DespawnOrbsForChunk` |  |
| Info | \[MicroTutorialOrbInjector\] Micro tutorial system is disabled, skipping orb spawn for chunk: `{chunk.ChunkIdentifier}` | `MicroTutorialOrbInjector.SpawnOrbsForChunk` |  |
| Info | \[MicroTutorialOrbInjector\] No orbs found in `{chunk}` - tutorials enabled = `{IsEnabled}` | `MicroTutorialOrbInjector.DespawnOrbsForChunk` |  |
| Info | \[MicroTutorialOrbInjector\] Retrieving data from spawn settings | `MicroTutorialOrbInjector.Initialize` |  |
| Info | \[MicroTutorialOrbInjector\] Spawned orb for `{item.Tutorial.TutorialName}` | `MicroTutorialOrbInjector.SpawnOrbsForChunk` |  |
| Info | \[MicroTutorialOrbInjector\] Spawning `{value.Count}` orbs | `MicroTutorialOrbInjector.SpawnOrbsForChunk` |  |
| Info | \[MicroTutorialOrbInjector\] Trying to remove orbs for chunk: `{chunk.ChunkIdentifier}` | `MicroTutorialOrbInjector.DespawnOrbsForChunk` |  |
| Info | \[MicroTutorialOrbInjector\] Trying to spawn orbs for chunk: `{chunk.ChunkIdentifier}` | `MicroTutorialOrbInjector.SpawnOrbsForChunk` |  |
| Info | `{this}` Finished SetState animation state: `{state}` | `Panel.InternalSetState` |  |
| Info | Took screenshot to: `{text}` | `Screenshot.SavePhotoWindows` |  |
| Info | Taking Screenshot | `ScreenshotTaker.TakeHiResShot` |  |
| Info | Took screenshot to: `{text}` | `ScreenshotTaker.CarryOutShot` |  |
| Info | \[All commands completed\] | `ServerComboCommandDefinition.OnCommandCompleted` |  |
| Info | \[Command '`{command}`' Result From Server\]: `{result}` | `ServerComboCommandDefinition.OnCommandCompleted` |  |
| Info | \[Syncing command to Server\]: '`{text}`' | `ServerComboCommandDefinition.RunNextCommand` |  |
| Info | \[ServerController\] `{tutorial}` completed for `{player}`. | `ServerController.OnTutorialCompleted` |  |
| Info | \[ServerController\] `{tutorial}` despawned for `{player}`. | `ServerController.OnTutorialDespawned` |  |
| Info | \[ServerController\] `{tutorial}` spawned for `{player}`. | `ServerController.OnTutorialSpawned` |  |
| Info | `{this}` is complete! | `ServerStepInstance.Complete` |  |
| Info | `{this}` is despawning `{componentsInChildren.Length}` dynamic entities. | `ServerStepInstance.DespawnDynamicContent` |  |
| Info | `{this}` spawning dynamic content at `{Tutorial.Entity.transform.position}`. | `ServerStepInstance.SpawnDynamicStepContent` |  |
| Info | `{this}` is despawning static content | `StepInstance.DespawnStaticContent` |  |
| Info | Textboard cleared! | `TextBoard.Clear` |  |
| Info | The line '`{message}`' was added to the TextBoard | `TextBoard.Add` |  |
| Info | The Textboard color has been changed | `TextBoard.Color` |  |
| Info | `{this}` Touch Screen setup, isLocal: `{isLocal}` | `TouchScreenMenuBase.Setup` |  |
| Info | Preparing to start game | `VrMainMenu.StartGameAsync` |  |
| Info | `{this}` Finished Popup switch to: `{panel}` | `Window.FinishPopupSwitch` |  |
| Info | `{this}` Popup switch to: `{panel}` | `Window.ShowAsPopup` |  |
| Debug | `{this}` received `{Player}` acknowledgement of content spawn, proceeding with tutorial flow. | `MicroTutorial.WaitForClientLoad` |  |
| Debug | `{this}` waiting for `{Player}` to acknowledge content spawn before proceeding with tutorial flow. | `MicroTutorial.WaitForClientLoad` |  |
| Debug | `{this}` Set state: `{state}` | `Panel.SetActive` |  |
| Debug | `{this}` - Refreshing Data | `PanelComponent.HandlePanelStateChange` |  |
| Debug | \[PrefabInPositionObserver\] found `{networkPrefab}` in range of `{name}` | `PrefabInPositionObserver.OnTriggerEnter` |  |
| Debug | \[ServerController\] despawning `{value}` for `{player}`. | `ServerController.DespawnTutorial` |  |
| Debug | \[ServerStepInstance\] Server starting step behaviour. | `ServerStepInstance.ExecuteStepLogic` |  |
| Debug | \[ServerStepInstance\] Starting step `{Name}` in `{Tutorial}` for `{Tutorial.Player}`. | `ServerStepInstance.Start` |  |
| Debug | Ignoring despawn request for already despawned step `{this}`. | `ServerStepInstance.DespawnContent` |  |
| Debug | `{this}` dynamic content is null - no need to load | `ServerStepInstance.SpawnDynamicStepContent` |  |
| Debug | `{this}` no dynamic data - no need to load | `ServerStepInstance.SpawnDynamicStepContent` |  |
| Debug | `{this}` Notified client to spawn additional static content. | `ServerStepInstance.SpawnDynamicStepContent` |  |
| Debug | `{this}` spawning `{list.Count}` additional static content objects. | `ServerStepInstance.SpawnDynamicStepContent` |  |
| Debug | `{this}` syncing position of `{componentsInChildren.Length}` entities. | `ServerStepInstance.SyncTutorialEntityPositions` |  |
| Debug | \[StepInstance\] Static content is null. No need to spawn static content. | `StepInstance.SpawnStaticStepContent` |  |
| Debug | `{this}` Finished initializing hierarchy for `{Name}` | `StepInstance.InitializeHierarchy` |  |
| Debug | `{this}` Finished spawning static content at `{staticContent.transform.position}` | `StepInstance.SpawnStaticStepContent` |  |
| Debug | `{this}` Initializing hierarchy for `{Name}` | `StepInstance.InitializeHierarchy` |  |
| Debug | `{this}` is already despawned (`{staticContentTransform == null}`\|`{!isSpawned}`), ignoring despawn command | `StepInstance.DespawnStaticContent` |  |
| Debug | `{this}` is spawning `{componentsInChildren.Length}` additional static content items | `StepInstance.SpawnAdditionalStaticContent` |  |
| Debug | `{this}` spawned additional static content for `{additionalStaticContent.gameObject.name}` at position `{position}` | `StepInstance.SpawnAdditionalStaticContent` |  |
| Debug | \[MicroTutorialSystemController\] Client `{playerId}` acknowledged additional content spawn command for `{value}`. | `SyncController.SyncNotifyPlayerToSpawnAdditionalTutorialContent` |  |
| Debug | \[MicroTutorialSystemController\] Client `{playerId}` completed spawning additional content for `{value}` | `SyncController.SyncNotifyPlayerToSpawnAdditionalTutorialContent` |  |
| Debug | \[MicroTutorialSystemController\] Raising despawn event for player `{playerId}` on client. | `SyncController.SyncNotifyPlayerToDespawnTutorial` |  |
| Debug | \[MicroTutorialSystemController\] Server received client load tutorial complete message from `{player2}`. | `SyncController.SyncClientLoadTutorialComplete` |  |
| Debug | \[MicroTutorialSystemController\] `{arg}` despawn command for `{value}`. | `SyncController.SyncNotifyPlayerToDespawnTutorial` |  |
| Debug | \[SyncController\] Client with player id `{playerId}` completed spawning static content for `{value}`, notifying server. | `SyncController.SyncNotifyPlayerToSpawnTutorial` |  |
| Debug | \[SyncController\] Client with player id `{playerId}` received static content spawn command for `{value}`. | `SyncController.SyncNotifyPlayerToSpawnTutorial` |  |
| Debug | \[SyncController\] Test client finished spawning static content, notify server via notifyServerClientLoadTutorialComplete. | `SyncController.SyncNotifyPlayerToSpawnTutorial` |  |
| Debug | `{this}` - Current tab is already: `{tab}` | `TabbedPanel.SwitchToTab` |  |
| Debug | Finished mem snap: `{arg1}`, `{arg2}` | `VrMainMenu.FinishedSnapshot` |  |
| Debug | Taking mem snap at: `{text}` | `VrMainMenu.TakeMemorySnapShot` |  |
| Debug | `{this}` Already on popup: `{panel}` | `Window.ShowAsPopup` |  |
| Debug | `{this}` Finished panel switch to: `{panel}` | `Window.FinishSwitch` |  |
| Debug | `{this}` Panel switch to: `{panel}` | `Window.SwitchToPanel` |  |

</details>

## Rendering, audio and VR

41 errors and warnings, 64 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Error | Error attempting to fix mesh UVs on `{workingMesh}`. Submesh index `{subMeshIndex}` is out of range. Does it have too many materials? | `AtlasDefinition.FixMeshUVs` |  |
| Error | Found shader that is not properly mapped in code: `{material.shader}` | `AtlasDefinition.Blit` |  |
| Error | Error in audio manager ready callback | `AudioManager.WhenReady` |  |
| Error | Billboard Particle Script Needs to be on same object as particle system. | `BillboardParticle.OnValidate` |  |
| Error | Out on safety | `BuildingAnimation.OrderComponents` |  |
| Error | Bakeable is null, is skipping | `BuildRendererBakeable.BakeBuildBakeables` |  |
| Error | Failed to bake build bakeable `{item}` | `BuildRendererBakeable.BakeBuildBakeables` |  |
| Error | Failed to bake build renderer bakeables, target is null | `BuildRendererBakeable.BakeBuildBakeables` |  |
| Error | Flag index out of range `{index}` | `FlagAnimationManager.SetState` |  |
| Error | Error baking mesh. Null input | `MeshUtility.BakeStaticMeshCount` |  |
| Error | Can't apply paintbrush without player being set in the manager. | `PaintBrush.Apply` |  |
| Error | Failed applying paint brush | `PaintBrush.Apply` |  |
| Error | Could not get pico token. | `PicoLoginController.OnLoginButtonPressed` |  |
| Error | Could not update pico user. | `PicoLoginController.OnLoginButtonPressed` |  |
| Error | Not pico platform. | `PicoLoginController.OnLoginButtonPressed` |  |
| Error | Failed to finish render for player `{item.Key.NetworkPlayer.UserInfo.Username}` | `PlayerSwapMaterialFilter.PostRender` |  |
| Error | Failed to prepare player `{allPlayer.UserInfo.Username}` | `PlayerSwapMaterialFilter.PreRender` |  |
| Error | MoveToPlayer called with null player or player controller, this is not allowed. If you would like to move particles without a player, use MoveToCustom instead. | `PooledParticleSystemManipulator.MoveToPlayer` |  |
| Error | Pooled particle system manipulator failed to get custom targets, no valid targets were specified. | `PooledParticleSystemManipulator.AddTargetsForCustomDestination` |  |
| Error | Error in property block accessor | `PropertyBlockColorAccessor.Set` |  |
| Error | A brush error occurred: `{ex}` | `RampBrush.rampBrush` |  |
| Error | Less than two control points. | `RampBrush.parameterizedLine` |  |
| Error | No terrain component on this GameObject | `RampBrush.rampBrush` |  |
| Error | Off end=`{t}` | `RampBrush.parameterizedLine` |  |
| Error | The start point or the end point was out of bounds. Make sure the gizmo is over the terrain before setting the start and end points.Note: that sometimes Unity does not update the collider after changing settings in the 'Set Resolution' dial... | `RampBrush.rampBrush` |  |
| Error | Missing sampler on `{material.name}` | `RampLerpBlit.Blit` |  |
| Error | Missing texture on `{material}` | `RampLerpNoCullCutoutBlit.Blit` |  |
| Error | \[XR Loader Initializer\] Failed to add `{settings.ValveOpenVrLoader}` as `{"Unity.XR.OpenVR.OpenVRLoader"}` | `WindowsXRLoaderInitializer.ConfigureValve` |  |
| Error | \[XR Loader Initializer\] Failed to remove `{loaderName}` | `WindowsXRLoaderInitializer.TryRemoveLoader` |  |
| Error | \[XR Management Failed to add `{settings.OpenXrLoader}` as `{"UnityEngine.XR.OpenXR.OpenXRLoader"}` | `WindowsXRLoaderInitializer.ConfigureOpenXr` |  |
| Error | \[XR Management\] failed to deinitialize active loader | `XRManagerSettingsController.ActiveLoaderShutdown` |  |
| Error | \[XR Management\] failed to stop active loader | `XRManagerSettingsController.ActiveLoaderShutdown` |  |
| Warn | AkGameObj or AkGameObj.gameObject is null. Cannot apply sound properties. | `AudioControl.ReapplySoundProperties` |  |
| Warn | Old sound enum still used for `{fallback}` on `{caller.name ?? "Unknown"}` | `AudioManager.Resolve` |  |
| Warn | Old sound enum unmapped: `{fallback}` on `{caller.name ?? "Unknown"}` | `AudioManager.Resolve` |  |
| Warn | Wwise Failed to Play Sound Effect: `{soundEffect}`, called by: `{caller}` | `AudioManager.IsAudioValid` |  |
| Warn | Light is null or already removed on `{light}` | `PCLightsController.RemoveLight` |  |
| Warn | Light is null! | `PCLightsController.RemoveLight` |  |
| Warn | \[XR Management\] failed to initialize `{activeLoader.name}` | `XRManagerSettingsController.InitializeXrManager` |  |
| Warn | \[XR Management\] failed to Start `{activeLoader.name}` | `XRManagerSettingsController.InitializeXrManager` |  |
| Warn | \[XR Management\] no active loader | `XRManagerSettingsController.InitializeXrManager` |  |

<details>
<summary>Info and debug lines (64)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | Audio was muted on Server | `AudioManager.DisableSound` |  |
| Info | Wwise ready | `AudioManager.WaitForLoad` |  |
| Info | Doing Look at | `BillboardParticle.BillboardSystem` |  |
| Info | VR Camera Stabelizer, isActive: `{IsActive}` | `CameraStabelizer.ToggleCamera` |  |
| Info | Fallback camera `{disabled}` | `FallbackCamera.UpdateCamera` |  |
| Info | `{num5}` `{num8}` | `FollowCamera.LateUpdate` |  |
| Info | Player `{Player.GetPlayer(owner)}` took a photo | `HandCamera.SyncPhoto` |  |
| Info | Painting `{slot}` `{color}` | `PaintBrush.ApplyColor` |  |
| Info | Attemping auto login. | `PicoLoginController.OnLoginButtonPressed` |  |
| Info | Have pico account details `{userService.LoggedInUser.DisplayName}` : `{userService.LoggedInUser.Id}`. | `PicoLoginController.OnLoginButtonPressed` |  |
| Info | No Alta account found for this pico user. Continuing with account registration. | `PicoLoginController.OnLoginButtonPressed` |  |
| Info | Redirecting to main menu scene. | `PicoLoginController.OnLoginButtonPressed` |  |
| Info | Successfully logged into ATT with pico account. Uere's access token must have expired. | `PicoLoginController.OnLoginButtonPressed` |  |
| Info | Brush Width: `{num6}` | `RampBrush.rampBrush` |  |
| Info | Local begin Pos Rev Transformed:`{array3[0]}` `{array3[1]}` | `RampBrush.rampBrush` |  |
| Info | Local Begin Pos:`{vector6}` | `RampBrush.rampBrush` |  |
| Info | Local End Pos Rev Transformed:`{array3[0]}` `{array3[1]}` | `RampBrush.rampBrush` |  |
| Info | Local End Pos:`{vector6}` | `RampBrush.rampBrush` |  |
| Info | parameterized brush width `{num6}` | `RampBrush._StrokePath` |  |
| Info | pixel begin coord:`{array[0]}` `{array[0]}` | `RampBrush.rampBrush` |  |
| Info | pixel End coord:`{array2[0]}` `{array2[1]}` | `RampBrush.rampBrush` |  |
| Info | Sample w `{num3}` h `{num4}` | `RampBrush._StrokePath` |  |
| Info | Sample Width/height: `{num3}` `{num4}` | `RampBrush.rampBrush` |  |
| Info | terrainData heightmapHeight/heightmapWidth:`{heightmapResolution}` `{heightmapResolution}` | `RampBrush.rampBrush` |  |
| Info | terrainData heightMapResolution:`{terrainData.heightmapResolution}` | `RampBrush.rampBrush` |  |
| Info | terrainData size:`{terrainData.size}` | `RampBrush.rampBrush` |  |
| Info | `{l}` Local begin Pos Rev Transformed:`{array4[0]}` `{array4[1]}` | `RampBrush._StrokePath` |  |
| Info | `{l}` Local control Pos:`{list[l]}` | `RampBrush._StrokePath` |  |
| Info | `{l}` pixel begin coord:`{array3[0]}` `{array3[0]}` | `RampBrush._StrokePath` |  |
| Info | Action In | `SilenceAnimationEvents.ActionIn` |  |
| Info | Action Out | `SilenceAnimationEvents.ActionOut` |  |
| Info | Animation Ended | `SilenceAnimationEvents.AnimationEnded` |  |
| Info | Play Sound | `SilenceAnimationEvents.PlaySound` |  |
| Info | Using cached mesh for `{mesh}` | `VertexColorUtility.GetColouredMesh` |  |
| Info | \[XR Management\] Initialized | `XRManagerSettingsController.InitializeXRManager` |  |
| Info | \[XR Management\] Waiting for XRGeneralSettings.Instance to be available | `XRManagerSettingsController.GetXRManager` |  |
| Info | \[XR Management\] Waiting for XRGeneralSettings.Instance.Manager to be available | `XRManagerSettingsController.GetXRManager` |  |
| Info | \[XR Management\] XRManager found | `XRManagerSettingsController.GetXRManager` |  |
| Debug | Target is null after baking | `BuildRendererBakeable.BakeBuildBakeables` |  |
| Debug | Warming up `{shaderVariantCollection.name}` | `ShaderVariantWarmer.PlatformCollection.Warm` |  |
| Debug | `{shaderVariantCollection.name}` took `{watch.Elapsed.TotalMilliseconds}`ms to warm | `ShaderVariantWarmer.PlatformCollection.Warm` |  |
| Debug | \[XR Loader Initializer\] adding OpenXR | `WindowsXRLoaderInitializer.ConfigureOpenXr` |  |
| Debug | \[XR Loader Initializer\] initialized successfully, active loader is `{manager.activeLoader}` | `WindowsXRLoaderInitializer.Initialize` |  |
| Debug | \[XR Loader Initializer\] Initializing support system `{xrSupportSystem.GetType()}` | `WindowsXRLoaderInitializer.InitializeWindowsLoaders` |  |
| Debug | \[XR Loader Initializer\] loader removed: `{loaderName}` | `WindowsXRLoaderInitializer.TryRemoveLoader` |  |
| Debug | \[XR Loader Initializer\] No VR configured | `WindowsXRLoaderInitializer.ConfigureNoVR` |  |
| Debug | \[XR Loader Initializer\] OpenXR already available in loaders | `WindowsXRLoaderInitializer.ConfigureOpenXr` |  |
| Debug | \[XR Loader Initializer\] OpenXR configured | `WindowsXRLoaderInitializer.ConfigureOpenXr` |  |
| Debug | \[XR Loader Initializer\] switching to OpenXR | `WindowsXRLoaderInitializer.ConfigureRuntime` |  |
| Debug | \[XR Loader Initializer\] switching to Valve OpenVR | `WindowsXRLoaderInitializer.ConfigureRuntime` |  |
| Debug | \[XR Loader Initializer\] try removing loader: `{loaderName}` | `WindowsXRLoaderInitializer.TryRemoveLoader` |  |
| Debug | \[XR Loader Initializer\] Valve OpenVR already available in loaders | `WindowsXRLoaderInitializer.ConfigureValve` |  |
| Debug | \[XR Loader Initializer\] Valve OpenVR configured | `WindowsXRLoaderInitializer.ConfigureValve` |  |
| Debug | \[XR Loader Initializer\] initialized `{mode}` successfully, active loader is `{manager.activeLoader}` | `WindowsXRLoaderInitializer.InitializeWindowsLoaders` |  |
| Debug | \[XR Management\] ActiveLoader is `{manager.activeLoader}` | `XRManagerSettingsController.LogXRManagerSettings` |  |
| Debug | \[XR Management\] deinitialized active loader `{xrManager.activeLoader}` | `XRManagerSettingsController.ShutdownXrManager` |  |
| Debug | \[XR Management\] deinitialized loader `{xrManager.activeLoader}` | `XRManagerSettingsController.ShutdownXrManager` |  |
| Debug | \[XR Management\] initialized with `{activeLoader.name}` | `XRManagerSettingsController.InitializeXrManager` |  |
| Debug | \[XR Management\] isInitializationComplete: `{manager.isInitializationComplete}` | `XRManagerSettingsController.LogXRManagerSettings` |  |
| Debug | \[XR Management\] manager is `{manager}` | `XRManagerSettingsController.LogXRManagerSettings` |  |
| Debug | \[XR Management\] started subsystems | `XRManagerSettingsController.InitializeXrManager` |  |
| Debug | \[XR Management\] started `{activeLoader.name}` | `XRManagerSettingsController.InitializeXrManager` |  |
| Debug | \[XR Management\] stopped active loader `{manager.activeLoader}` | `XRManagerSettingsController.ActiveLoaderShutdown` |  |
| Debug | \[XR Management\] stopped subsystems | `XRManagerSettingsController.ShutdownXrManager` |  |

</details>

## Everything else

89 errors and warnings, 29 other lines.

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Error | Failed to run C\# event handler | `AltaEvent.Invoke` |  |
| Error | Failed to run inspector event handler | `AltaEvent.Invoke` |  |
| Error | Failed to run C\# event handler. Argument: `{argument}` | `AltaEvent<T, UnityEventT>.Invoke` |  |
| Error | Failed to run inspector event handler. Argument: `{argument}` | `AltaEvent<T, UnityEventT>.Invoke` |  |
| Error | Failed to run C\# event handler. Argument1: `{argument1}` Argument2: `{argument3}` Argument3: `{argument4}` Argument4: `{argument4}` | `AltaEvent<T1, T2, T3, T4, UnityEventT1T2T3T4>.Trigger` |  |
| Error | Failed to run inspector event handler. Argument1: `{argument1}` Argument2: `{argument3}` Argument3: `{argument4}` | `AltaEvent<T1, T2, T3, T4, UnityEventT1T2T3T4>.Trigger` |  |
| Error | Failed to run C\# event handler. Argument1: `{argument1}` Argument2: `{argument2}` Argument3: `{argument3}` | `AltaEvent<T1, T2, T3, UnityEventT1T2T3>.Invoke` |  |
| Error | Failed to run inspector event handler. Argument1: `{argument1}` Argument2: `{argument2}` Argument3: `{argument3}` | `AltaEvent<T1, T2, T3, UnityEventT1T2T3>.Invoke` |  |
| Error | Failed to run C\# event handler. Argument1: `{argument1}` Argument2: `{argument2}` | `AltaEvent<T1, T2, UnityEventT1T2>.Invoke` |  |
| Error | Failed to run inspector event handler. Argument1: `{argument1}` Argument2: `{argument2}` | `AltaEvent<T1, T2, UnityEventT1T2>.Invoke` |  |
| Error | Task state : `{task.Status}` | `AsyncPump.UnityWait` |  |
| Error | Decaying `{Entity.SafeName}` but somehow it has no prefab root | `BasicDecay.CheckDecay` |  |
| Error | Couldn't find generator or edge for `{name}` - `{data.fromIndex}` - `{data.toIndex}` - `{Forest}` | `BasicDynamicPath.Load` |  |
| Error | Trying to save uninitialized path: `{this}` | `BasicDynamicPath.Save` |  |
| Error | InertiaTensor failed for `{name}` with `{inertiaTensor}` | `CenterOfMassSetter.CenterOfMass` |  |
| Error | Trying to ignore collision FROM null collider | `ColliderGroup.IgnoreCollisionsCoroutine` |  |
| Error | Trying to ignore collision WITH null collider | `ColliderGroup.IgnoreCollisionsCoroutine` |  |
| Error | Object at \[`{path}`\] has been destroyed! Unsubscribing event. | `ComponentEventSubscriber.Invoke` |  |
| Error | Couldnt find file at path: `{fileToCompress}` | `CompressionUtilities.CompressFile` |  |
| Error | Couldnt find file at path: `{fileToDecompress}` | `CompressionUtilities.DecompressFile` |  |
| Error | Destination folder does not exist | `CompressionUtilities.CompressFile` |  |
| Error | Folder to unzip into doesnt exist | `CompressionUtilities.DecompressFile` |  |
| Error | Calling method `{Method}` on `{type.Name}` that doesn't return a bool! Assuming always true which is slower | `CustomMethodApplyAttribute.HandleApply` |  |
| Error | Couldnt find method with name: `{Method}` on `{type.Name}` | `CustomMethodApplyAttribute.HandleApply` |  |
| Error | Collection was modified while iterating, check stacktrace of this log | `DebuggingCollection<T>.CheckForEnumerationViolation` | Something changed a collection while the game was looping over it. The stack trace with the line shows who; often a handler that adds or removes things during an event. |
| Error | Name: `{eventData.EventName}`, Duration: `{durationInSeconds}`, Message: `{message}` | `DebugTriggerEvent.Trigger` |  |
| Error | Invalid LOD index, LOD group has: `{LODCount}` levels | `DistanceLODGroup.ModifyLODLevelRenderers` |  |
| Error | Trying to resolve editor link outside of editor | `EditorLink.Load` |  |
| Error | Failed to validate email `{email}` | `EmailValidationHelper.IsValidEmail` |  |
| Error | Failed to send email verification to `{input}` | `EmailVerificationManager.SendVerification` |  |
| Error | Missing pickup reference | `FaceObject.Start` |  |
| Error | Missing references | `FaceObject.Start` |  |
| Error | Resource fetched festivity is null on '`{name}`' | `FestiveFeature.TryGetFestivityFromResources` |  |
| Error | Target game object is null on '`{name}`' | `FestiveFeature.Modify` |  |
| Error | `{gameObject.name}` has no festivity assigned | `FestiveFeature.OnEnable` |  |
| Error | Requested output folder with no command context | `FileDownload.GetPath` |  |
| Error | Effect is still null! | `Gatherer.RequestToolEffect` |  |
| Error | Error generating part `{workingPart.name}` on `{name}` | `GenerationCore.GenerateDynamic` |  |
| Error | Error generating `{name}` | `GenerationCore.Generate` |  |
| Error | Error running static generation helper on `{name}` | `GenerationCore.GenerateDynamic` |  |
| Error | `{prefab}` - Missing `{field.FieldType.Name}` which component is being looked for in: `{component.GetType().Name}`.`{field.Name}` | `GetComponentAttribute.HandleApply` |  |
| Error | `{prefab}` - Couldnt fine any `{field.FieldType.Name}` which component is looking for in: `{component.GetType().Name}`.`{field.Name}` | `GetComponentsAttribute.HandleApply` |  |
| Error | `{prefab}` - Couldnt fine any `{field.FieldType.Name}` which component is looking for in: `{component.GetType().Name}`.`{field.Name}` | `GetComponentsInterfaceAttribute.HandleApply` |  |
| Error | GhostSnapObject must have a ghostVersion set: `{name}` | `GhostSnapObject.EnsureGhost` |  |
| Error | Failed to find path for `{this}` | `GuidedMovement.Awake` |  |
| Error | Couldn't find CheckItems method for `{type.Name}` | `HashedGeneralValue.OfType` |  |
| Error | Failed to load hashed values from `{type.Name}` | `HashedGeneralValue.OfType` |  |
| Error | Legacy Asset Spawned: `{name}` | `Legacy.Start` |  |
| Error | Failed to link `{logicValueSender.name}` to `{((Component)logicValueLinkReceiver).name}` | `LinkerPart.GenerateDynamic` |  |
| Error | Invalid receiver : `{spawnerPart2.name}` | `LinkerPart.GenerateDynamic` |  |
| Error | Invalid sender : `{spawnerPart.name}` | `LinkerPart.GenerateDynamic` |  |
| Error | Can't add to listened list through ICollection | `ListenedList<T>.Add` |  |
| Error | There can only be one local test mode active at a time | `LocalTestGameMode.ActivateAsync` |  |
| Error | `{name}` took `{watch.ElapsedMilliseconds}` ms | `LoggingWatch.Measure` |  |
| Error | Active Input Device `{Name}` &amp;&amp; Effective Input Device `{Name}` weren't available when initialized | `MicrophoneEnumSettingAccess.GetValue` |  |
| Error | Trying to set microphone `{value}` that's not available! | `MicrophoneEnumSettingAccess.SetValue` |  |
| Error | Object Issue Log entries should never be null. See message below | `ObjectIssueLog.Add` |  |
| Error | Null Input for ObjectPipeline on `{errorName}` | `ObjectPipeline.Get` |  |
| Error | Received Popup Closed event for non current popup: `{popup}`, current: `{CurrentPopup}` | `PopupManager.OnPopupClosed` |  |
| Error | Failed shooting arrow | `Shooter.Shoot` |  |
| Error | Attempt to ban player with id `{playerToBanId}` on server `{serverId}` from null player. Aborting. | `SocialService.BanPlayer` |  |
| Error | Failed to check store banner popup | `StoreRotationPopup.LoggedIn` |  |
| Error | Failed to Check for subscription rewards | `SubscriptionManager.LoggedIn` |  |
| Error | Already running task | `TaskLock.Run` |  |
| Error | Task Failed | `TaskLock.Run` |  |
| Error | Encountered issue invoking tracked event with args: `{args}` | `TrackedEvent<T>.InvokeHandler` |  |
| Error | Encountered target invocation issue invoking tracked event with args: `{args}` | `TrackedEvent<T>.InvokeHandler` |  |
| Error | Handler is null, skipping invocation | `TrackedEvent<T>.InvokeHandler` |  |
| Error | Parameter Types do not match One Time Event Delegate | `TrackedEvent<T>.Invoke` |  |
| Error | Transform to track for posing got deleted, cancelling pose checking | `TransformDeltaChangeChecker.CheckForPoseTrigger` |  |
| Error | Type serialization not found for `{type}`. | `TypeSerializationHelper.GetSerialization` |  |
| Error | Logic manager is null for this object! Is it under Logic Context? | `TypeSerializationHelper.LogicValueDataSerialization<T>.Serialize` |  |
| Error | Received couldn't find data for `{value}` | `TypeSerializationHelper.LogicValueDataSerialization<T>.Serialize` |  |
| Error | Using incorrect type serializer. | `TypeSerializationHelper.TypeSerialization<TType>.Handle` |  |
| Error | Rope can not be extended since the IsExtensible property has been marked as false | `UltimateRope.ExtendRope` |  |
| Error | Rope can not be extended through coil rotation since no coil is present | `UltimateRope.ExtendRope` |  |
| Error | Failed wall collision helper for entity `{pickup.Entity.SafeName}` | `WallCollisionHelper.IncreaseCollisionDetectionForDuration` |  |
| Error | Trying to initialize unitialized pickup in the WallCollisionHelper | `WallCollisionHelper.Initialize` |  |
| Error | Path has no waypoints! WayPointPath.cs GetPointFromArray fails, returning. | `WayPointPath.GetPointFromArray` |  |
| Warn | Couldnt get controller extension of type: `{typeof(T)}` | `Controller.GetControllerExtension` |  |
| Warn | You are trying to override the controller: `{controller?}` with: `{value}` | `ControllerExtension.Controller` |  |
| Warn | There can only be one `{identifier}` | `DontDestroyOnLoad.Awake` |  |
| Warn | Joining local server, skipping API check | `GameServerInfoExtensions.JoinServerAsync` |  |
| Warn | No data displays set for `{name}` | `LiveDataDisplayView.RunDataAction` |  |
| Warn | `{name}` took `{watch.ElapsedMilliseconds}` ms | `LoggingWatch.Measure` |  |
| Warn | `{renderer?}` has an empty mesh | `ProfilingPositionCycler.StartProfiling` |  |
| Warn | The `{userService.GetType().Name}` does not support account linking. | `RedesignedAltaAccountLinker.ProcessAccountLinkingNotSupported` |  |
| Warn | Unable to link account. Logged in user info is null. Aborting. | `RedesignedAltaAccountLinker.InternalSubmit` |  |
| Warn | NAN for align torque | `ThrowAlignHelper.ThrowBehaviour` |  |

<details>
<summary>Info and debug lines (29)</summary>

| Level | Message | Written by | Notes |
| --- | --- | --- | --- |
| Info | Sync already initialized | `ClassSerializationHelper.Prepare` |  |
| Info | Compressed: `{fileToCompress}` to: `{text}` | `CompressionUtilities.CompressFile` |  |
| Info | Compressed: `{m}` | `CompressionUtilities.CompressFile` |  |
| Info | Decompressed: `{fileToDecompress}` to: `{folderToCompressTo}` | `CompressionUtilities.DecompressFile` |  |
| Info | Decompressed: `{m}` | `CompressionUtilities.DecompressFile` |  |
| Info | No interactor yet | `FaceObject.Update` |  |
| Info | Festivity '`{festivity.name}`' was not set to the resources version. Reapplying now | `FestiveFeature.TryGetFestivityFromResources` |  |
| Info | `{Name}` failed to unload | `ModBase.OnDestroy` |  |
| Info | `{Name}` failed to `{(flag ? "load" : "reload")}` | `ModBase.Start` |  |
| Info | `{Name}` Unloaded | `ModBase.OnDestroy` |  |
| Info | Adding new popup: `{popup}` | `PopupManager.Show` |  |
| Info | Showing popup: `{popupConfig.Prefab.Transform.name}` | `PopupManager.ShowPopup` |  |
| Info | Object name: `{hit.transform.name}` | `RaycastReflection.Update` |  |
| Info | `{name}` scale is `{localscale}` | `ScaleTracker.Awake` |  |
| Info | Firing DEFAULT with max velocity of : `{maxVelocity}` with strength: `{strength}` with multiplier of: `{num3}` resulting in `{strength * maxVelocity * num3}` | `Shooter.Shoot` |  |
| Info | Migrating `{i}` to `{num3}` | `SkinnedBatchingHelper.GetBoneMapping` |  |
| Info | `{adminUser.Username}` attempted to ban `{bannedUser.Username}` but they are a server owner or developer. Aborting. | `SocialService.BanPlayer` |  |
| Info | All Stalactites dropped! | `StalactiteFall.SendOneTrue` |  |
| Info | `{Name}` : `{value}` | `ToggleBool.Value` |  |
| Info | Tracker `{Name}` created on `{Entity.Identifier}` | `Tracker.Initialize` |  |
| Info | Tracker `{Name}` destroyed | `Tracker.Destroyed` |  |
| Info | Tracker `{Name}` loaded as `{Entity.Identifier}` | `Tracker.Load` |  |
| Info | Tracker `{name}` not found. Waiting for load | `Tracker.Remove` |  |
| Info | Tracker `{Name}` removed | `Tracker.Remove` |  |
| Info | Tracker `{Name}` unloaded | `Tracker.Destroyed` |  |
| Debug | Resetted to `{inertiaTensor}` | `CenterOfMassSetter.CenterOfMass` |  |
| Debug | Joining local DEV server, skipping API check | `GameServerInfoExtensions.JoinServerAsync` |  |
| Debug | `{this}` - Listener Claimed: `{isActive}` | `ListenerClaimer.SetActive` |  |
| Debug | `{name}` took `{watch.ElapsedMilliseconds}` ms | `LoggingWatch.Measure` |  |

</details>

## What is left out

- Lines from third-party code: A* Pathfinding Project (126), Agones game server SDK (17), CSharpCompiler (runtime C# compiling) (10), FinalIK (35), FlyingWorm Console Pro (5), I2 Localization (14), QuickLod (4), Steamworks.NET (7), Stylized Water Shader (2), Triangle.NET (24), UnityHeapEx (heap dumps) (2), Wwise (Audiokinetic) Unity integration (39).
- 90 `Trace` lines outside `Alta.Console`. `NLog.config` only writes Debug and above to the files, so you never see them unless you change it.
- Calls whose message isn't a string in the code (a variable, or only an exception). `Debug.LogException` calls are among them.

## See also

- [Logging](../console-and-utilities/logging.md) for where the files go, `NLog.config` and how to log from a mod.
- [The type browser](../types/overview.md) for the types named here.
