---
title: Known patch points
description: Every Harmony patch in our own mods and the public mods in the TavernMods index, by game area, with the method it hooks, the kind of patch and what it's for.
sidebar_position: 2
---

# Known patch points

These are the game methods that working mods already patch, so you know they're good hooks and who else is on them. It covers our own mods (TavernLib, TavernEssentials, Steady, Canary, Rover, Lens and ATT-Optimizations' Cave Performance and Forest Performance) and the public mods in the TavernMods index that patch the game. Community mods are listed by their index id (`Owner.Repo`).

How to read the tables:

- **Kind**: `Pre` prefix, `Post` postfix, `Fin` finalizer, `Trans` transpiler. "skips" means the prefix returns `false`, so the game's method doesn't run: always, or only in the case described.
- **Side**: where the patch has an effect. A patch applied with attributes is installed on both sides even when only one side ever calls the method.
- Types with no namespace are top-level types in `Root.Township`. `Pathfinding.*`, `AstarPath` and `Seeker` are the A* Pathfinding Project, compiled into `Root.Township`.
- `MoveNext` rows patch a compiler-made state machine (`<Name>d__N`), found by name at run time.

Methods that more than one mod patches are listed at the end, under [Methods patched by more than one mod](#methods-patched-by-more-than-one-mod).

:::note
Some targets, like `ServerPlayerConnectionHandlerOld`, `ServerHandler.PlayerLimit`, `StreamerManager.SaveWorld`, `ServerCacheManager` and most of the console command modules, only exist in the server build. That's the build every Tavern install runs, and what att-stubs is made from. The original client download doesn't have them. See [Finding your way around](finding-your-way-around.md#client-builds-and-server-builds).
:::

## How each mod patches

| Mod | Type | How it applies patches | Side |
| --- | --- | --- | --- |
| TavernLib | `MelonPlugin` | `[HarmonyPatch]` attributes, applied as the plugin loads. Console command fixes by hand in `OnLateInitializeMelon`, plus one MonoMod detour. | Installs everything on both sides; most targets only run on one. |
| TavernEssentials | `MelonMod` | By hand in `OnInitializeMelon`, one Harmony id per feature (`tavernessentials.board` and so on), each feature in its own `try`. | Decides with `ApplicationManager.IsHeadless` or `/start_server`. |
| Steady | `MelonMod` | By hand in `OnInitializeMelon` through a helper that skips missing targets. Each fix has a MelonPreferences toggle; several step aside when ATT-Optimizations does the same job. | Most fixes server only (`/start_server`). |
| Cave Performance, Forest Performance | `MelonMod` | By hand in `OnInitializeMelon`. Refuse to start unless `Root.Township`'s MVID is the one for server 0.0.39.2. Modules have their own Harmony ids and toggles. | Only when `Application.isBatchMode`, which a headless bot client also is. |
| Rover | `MelonPlugin` | By hand: early patches in `OnPreInitialization`, the rest at `OnApplicationLateStart`. | Bot clients only. Does nothing on a server but add console commands. |
| Lens | `MelonMod` | By hand in `OnInitializeMelon` through a helper. | Clients with graphics only. |
| Canary | `MelonMod` | Its profiler patches methods while `canary profile` runs, 25 a frame, and takes them off after. | Server. |
| `Nyx12012.CookingLib` | `MelonMod` | By hand, server only, in feature groups. | Server. |
| `Cheeto35.CheetosOreSpawnFix` | `MelonMod` | Attributes; bodies check for a server and the config. | Server in effect. |
| `CG-Nik.CustomRecipesAPI` | `MelonMod` | One patch by hand in `OnLateInitializeMelon`. | Both. |
| `CG-Nik.DyeingAPI` | `MelonMod` | By hand inside a `ServerHandler.Initialized` handler. | Meant for the server. |
| `Circl-NoE.ATTMateriaLib` | `MelonMod` | Attributes. | Both. |
| `TheRavenSeb.hydrateordiedrate` | `MelonMod` | By hand with its own Harmony id, server or client patches by `/start_server`. | Both, different patches. |
| `calebv2.Portal-Gun` | `MelonMod` | Attributes, in separate client and server DLLs. | Client in effect. |

## Start-up, VR and settings

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `Alta.XRLoaders.XRUtility.GetCommandXRMode()` (`Alta.XRManagement`) | Pre, always skips | Rover | Client | Answers `NoVR`, so no VR runtime loads. Patched in `OnPreInitialization`. |
| `DeviceControllerFactory.Create` | Pre, always skips | Rover | Client | Returns Rover's own input device. |
| `Alta.Utilities.GameSettings.IsUsingSmoothLocomotion`, `TouchLocomotionMode`, `PressLocomotionMode`, `SmoothLocomotionRunMode`, `IsInvertingSmoothWalkAndRun` (getters) | Pre, always skips | Rover | Client | Forces smooth locomotion, head-relative stick, hold to run, no walk/run swap. |
| `DarknessReader` `IInitializeAsLocalPlayer.InitializeAsLocalPlayer` (explicit interface) | Fin | Rover | Client | Swallows the throw from the compute shader with no GPU, which otherwise skipped the rest of `PlayerController.LinkToPlayer`. |
| `Discord.Discord` constructor `(long, ulong)`, found by name | Pre, throws | Rover | Client | Makes the Discord link fail the way it does on a PC without Discord, so a bot doesn't take over the PC's Discord status. |
| `ApplicationStartupManager.RunStartupActions()` | Pre, skips with TavernLib's join-local argument | TavernLib | Client | Joins a local server straight from the command line. |
| `MenuSettings.LocalGameServerInfo(int)` | Post | TavernLib | Client | Points the local test server at loopback and the port from the command line; forced scene index. |
| `JoinedServerGameMode` constructor `(GameServerInfo)` | Post | TavernLib | Client | Forces the tutorial (1) or Quest (4) scene from the command line. |
| `ApiAccess.IsConnectedToInternetInternal` | Post | TavernLib | Both | Always answers that there's internet. |
| `StatManager.Awake()` (private) | Pre | TavernLib | Both | Renames the cripple damage protection stat (hash 44538) from `damageprotection` to `crippledamageprotection`. In the game's assets both it and the Damage Protection stat are named `damageprotection`, so anything that looks a stat up by name could get the wrong one. |

## Joining a server: the client

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `JoinServerPipeline.AttemptToConnectToServer` | Pre, skips when handing over | TavernLib | Client | Quits for the launcher to install missing mods when you rejoin a server that just refused you for them. |
| `JoinServerPipeline.OnServerRejectedRequest(Connection, ConfirmJoinMessage)` | Pre | TavernLib | Client | On a mod-mismatch refusal, writes `last_rejection.json` for the launcher, marks it `JoinRejected` so the game doesn't retry, and rewrites the message. |
| same | Post | Rover | Client | Reports the refusal and quits the bot. |
| `Alta.Networking.Servers.JoinResult.ErrorMessage` (getter) | Post | TavernLib | Client | Shows TavernLib's refusal text instead of the game's fixed line. |
| same | Post | TavernEssentials | Client | Shows the server's own refusal reason. |
| `JoinResult.IsRecoverableFailure` (getter) | Post | TavernEssentials | Client | Stops retrying (24 times over two minutes) a refusal that waiting won't fix. |
| `GameServerInfoExtensions.JoinServerAsync(GameServerInfo)` (static, async, found by name) | Post | TavernEssentials | Client | For community-list servers, runs the port 1762 handshake first and puts its token in the join. |
| `JoinServerPipeline.ConnectionApprovedByServer(Connection)` (private) | Pre | TavernEssentials | Client | Sets the logged-in user id to the one in the join token before the join message is built. |
| `Alta.Networking.Servers.ConnectToServerUtility.SetupConnectionToServer(Connection)` | Post | TavernEssentials | Client | Registers its own message handler on each new connection. |
| same | Post | `TheRavenSeb.hydrateordiedrate` | Client | Registers a handler for its message type 40 and says hello to get the thirst level. |
| `ServerElement.SetupForServer(GameServerInfo)` | Post | TavernEssentials | Client | Marks servers where friends were seen with a `*`. |

## Joining a server: the server

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `Alta.Networking.Servers.ServerPlayerConnectionHandlerOld.InitializeConnection(Connection)` | Pre, always skips | TavernLib | Server | Puts TavernLib's join filter on `RequestJoin`: fly-camera check, account token, mod parity, blacklist and whitelist, then the game's own check. |
| `ServerPlayerConnectionHandlerOld` constructor `(ServerHandler)` | Post | TavernLib | Server | Raises TavernLib's player-left console event from the handler's `UserLeft`. |
| `ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom(...)` (async) | Pre, always skips | TavernLib | Server | Reads the token's single `UserId` and `Username`, refuses a mismatch, refuses once the server is past `PlayerLimit` ("Reached player limit of: N"), and maps `users.json` roles to the game's subscriber statuses. Never asks Alta, and skips the game's version and allow-list checks. |
| same | Post | TavernEssentials | Server | Join guard: logs, or with `refuse` mode refuses, a join whose token id differs from the player id. |
| `Alta.Networking.ConfirmJoinMessage` constructor | Post | TavernLib | Server | Logs every refusal. |
| `Player.InitializePlayerOnServer(...)` (async) | Post | TavernLib | Server | Raises the player-joined console event. Runs at the method's first await. |
| same | Post | TavernLib | Server | Sends the player their roles (TavernLib message `ReceiveRoles`). |
| `Alta.Networking.Servers.ServerHandler.PlayerLimit` (getter) | Post | TavernLib | Server | Player limit from `server_settings.json`'s `max_players` (24 when it's missing or 0). TavernLib's join check enforces it. |
| `ServerHostingGameMode.OnStartSucceeded` | Post | TavernLib | Server | Loads all cosmetics into memory once the server is up. |
| `UserInfoAccess.SearchForUserAsync()` (private, async) | Pre, skips when nobody matches | TavernEssentials | Server | Names players from connections and TavernLib's accounts, never Alta. |

## Messages and networking

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `Alta.Networking.Internal.MessageProcessor.ProcessSingleMessageFromData(...)` | Pre, always skips | TavernLib | Both | Reads the message type in 8 bits instead of 5, so there can be 256 types. Both ends need it. |
| same | Post | Rover | Client | Capture mode: records every message received. |
| `Alta.Networking.Internal.OutgoingPacketManager.StartSerialize(Connection, MessageType)` | Pre, always skips | TavernLib | Both | Writes the type in 8 bits. |
| `OutgoingPacketManager.StopSerialize` | Post | Rover | Client | Capture mode: records every message sent. |
| `Alta.Networking.Socket` constructor | Post | TavernLib | Both | Raises `TavernEvents.SocketCreated`. |
| `Alta.Networking.EntitySerializer.SerializeDataInternal` (private) | Pre, Post | Rover | Client | Capture mode: which entity each record belongs to. |
| Every `INetworkSerialized.Serialize` implementation seen (explicit interface, found through the interface map) | Pre, Post | Rover | Client | Capture mode: bit ranges of each behaviour's record. |
| `EntitySerializer.IsEntitySpawnedFor(IPlayer)` | Pre, skips when it can answer | Steady | Server | Answers from the chunk's `HashSet` of players instead of a LINQ scan, for every entity, connection and send. |
| `Alta.NetworkingTransport.MessageReceivePool.Put(byte[])` (`Alta.NetworkTransport.Runtime`) | Pre, always skips | Steady | Both | Keeps up to 400 receive buffers instead of 100, so bursts don't allocate. |
| `Alta.Networking.Internal.SceneSerializer.SerializeWrite`, `EntitySerializer.WriteDataIntoStream`, `Alta.Networking.NetworkTransform.Serialize`, `Alta.Networking.Connection.Send(ConnectionChannel, StreamWriter, int)` and `InternalSend` | Pre, Fin | Cave Performance (combat diagnostics) | Server | Logs how cave creatures' updates are packed and sent. Observation only. |
| `Alta.WebServer.WebServerThread` constructor `(int)` | Pre | TavernLib | Server | Moves the web server off 1761 to `tavern_server.json`'s `web_port`. |
| `Alta.Console.WebSocketRemoteConsole.Start` | Trans | TavernLib | Server | Swaps the hard-coded 1760 for `console_port`. |

## Alta's web API and the store

Alta's servers are gone, so each of these would wait for a timeout. Steady's `AltaCutoff` prefixes run last (`Priority.Last`) and step aside when another mod already answered.

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `System.Net.Http.HttpClientHandler.SendAsync`, `HttpMessageInvoker.SendAsync` (not the game) | Pre, skips for Alta's hosts | Steady | Both | Fails any request to `townshiptale.com` or Alta's AWS endpoint at once, the way a timeout would. `HttpClient.SendAsync` alone catches nothing on Mono. |
| `Alta.Api.Client.HighLevel.UserApiClient.RefreshLoginAsync()` | Pre, always skips | TavernEssentials, Steady | Client (TE), both (Steady) | No login refresh. Without it, leaving a server could end on a black screen. |
| `Alta.Api.Client.HighLevel.ServicesApiClient.GetPublicIpAddressAsync()` | Pre, always skips | TavernEssentials, Steady | as above | Answers 0.0.0.0. |
| `ServerUtilities.GetPublicIPAddress()` (static, async) | Pre, always skips | Rover | Client | Answers 0.0.0.0 instead of waiting a minute. |
| `UserApiClient.IsUserVerifiedAsync()` | Pre, always skips | TavernEssentials | Client | True, so no email popup. |
| `Alta.Api.Client.LowLevel.LowLevelApiClient.EnqueueAnalyticsEvent(AnalyticsEventData)` | Pre, always skips | TavernEssentials, Steady | as above | Drops analytics. |
| `ATT.Analytics.AltaAnalyticsDispatcher.OnAnalyticsEvent` (protected override) | Pre, always skips | Steady | Both | Stops posting area visits, challenges, unlocks and tutorials. |
| `Alta.Api.Client.HighLevel.StatusAPI.GetStatus()` | Pre, always skips | TavernEssentials, Steady | as above | Empty inbox (TE shows its own welcome once). |
| `Alta.Api.Client.HighLevel.PlayerReportsClient.ViewAllReports(...)` | Pre, always skips | TavernEssentials, Steady | as above | Empty list. |
| `PlayerReportsClient.ReportPlayer(int, ReportType, int)` | Pre, always skips | TavernEssentials | Client | Reports go to the server instead. |
| `Alta.Api.Client.HighLevel.ServerApiClient.HasPermissionsInServer(...)` | Pre, always skips | TavernEssentials, Steady | as above | False. TE's settings board decides who sees the bubble. |
| `ServerApiClient` and `OfflineServerApiClient`: `GetPublicServersAsync`, `GetOpenServersAsync`, `DiscoverServers`, `GetJoinedServersAsync` | Pre, skips once the list has loaded | TavernEssentials | Client | The menu's server boards show the community server list. |
| `Alta.Api.Client.HighLevel.JoinedGroupManager.LeaveGroup()` | Pre, skips for TE's groups | TavernEssentials | Client | "Leave server" removes it from My Servers. |
| `Alta.Api.Client.HighLevel.RecentPlayersClient.RecordInteractionAsync`, `GetAllAsync` | Pre, always skips | TavernEssentials | Client | Recent players kept in a local file. |
| `UserApiClient.GetAllCosmeticsPresets`, `CreateCosmeticsPreset`, `DeleteCosmeticPreset` | Pre, always skips | TavernLib | Client | Cosmetic presets saved as local files. |
| `LowLevelApiClient.ValidateIdentityToken` | Pre, always skips | TavernLib | Server | Always valid: there's no central validator. |
| `Alta.Customization.PurchasedList.UpdateCurrentRotation()` (static, async) | Pre, always skips | TavernEssentials | Client | Empty store rotation, so the customizer opens at once. TavernLib has a method for this too, but it has neither a `Prefix` name nor `[HarmonyPrefix]`, so Harmony never applies it. |
| `PurchasedList.ValidatePlayersOwnedItems` | Pre, always skips | TavernLib | Server | Every cosmetic is allowed. |
| `PurchasedList.Refresh` | Pre, always skips | TavernLib | Both | Owned and available are just the free-for-all set. |

## Console and commands

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `Alta.Console.CommandService.HandleMatchedCommand(CommandSearchResult)` (static, async) | Pre, skips on an empty player list | TavernLib | Server | A command given players that matched nobody fails with a message instead of answering Success. |
| same | Post | TavernLib | Server | Wraps the Task to unwrap `TargetInvocationException`, so the console shows the command's own error. |
| `PlayerListConverter.ConvertFrom` | Post | TavernLib | Server | Remembers what was typed, for that message. |
| `Alta.Console.CommandPart.RequirementsAreMet` | Post | TavernLib | Server | Limits what a named console token can run and see. |
| `ServerConsoleManager.ValidateConsoleToken` | Pre (always skips), Post | TavernLib | Server | TavernLib's own console token check; the postfix keeps its verdict. |
| `Alta.Console.WebSocketCommandHandler.ProcessAuthorization` | Pre, Fin | TavernLib | Server | Marks a login as coming through port 1760, and from where. |
| `WebSocketCommandHandler.TryLogConsoleCommandExecutionWithEventStream` | Pre | TavernLib | Server | Logs each 1760 command and keeps token text out of the event. |
| `WebSocketCommandHandler.GetCurrentServerPermissionsForLoggedInUser` | Pre, always skips | TavernLib | Server | Answers Console permission without asking Alta. |
| `Alta.Console.CommandResult.Log` | Pre, skips for token commands | TavernLib | Server | Keeps token text out of the trace log. |
| `ServerConsoleManager.StartRemoteConsole` | Post | TavernLib | Server | Closes the game's extra remote console at once. |
| `ATT.Character.QuickAccessMenu.CommandSync.RouteCommand(string, Action)` | Pre, always skips | TavernLib | Both | Drops wrist-menu commands: the game runs them straight away on a server and sends them to the server from a client. TavernLib's own comment isn't sure this is needed. |
| `CommandSync.SyncCommand(IPlayer, Stream)` (async void) | Post | TavernEssentials | Server | Logs that a board command row was pressed. |
| `TimeCommandModule.Set`, `SettingsCommandModules.ListPossivleValues` (the game's spelling), `SelectionCommandModule.MovingModule.Exact`, `RotatingModule.Exact`, `WackyCommandModule.Destroy` | Pre or Post | TavernLib | Server | Throw a real error where the game answered Success having done nothing. Applied in `OnLateInitializeMelon`. |
| `WorldCommandModule.CaveCommandModule.CaveTeleport` | Pre, always skips | TavernLib | Server | Teleports to a cave layer even when it already exists, and says who moved. |
| `SelectionCommandModule.FindObjects` (private static) | MonoMod `Hook`, not Harmony | TavernLib | Server | `select find` without throwing on a player with no body. |

TavernLib also replaces `time ofday` with its own command object, which isn't a patch.

## Server settings and the wrist menu

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `ATT.Character.QuickAccessMenu.ServerSettingsSync.IsServerSyncPermitted(IPlayer)` | Post | TavernLib | Server | Only owners and moderators may change settings; the game lets anyone. |
| `ServerSettingsSync.SaveServerSettingsFromClient(IPlayer, ServerSettings)` (async void) | Pre, always skips | TavernEssentials | Server | Staff only, and only the board's own fields, applied through `ServerConfig.SetAllSettings`. |
| `ServerSettingsSync.Initialize()`, `UpdateMenuSettingsValue` (private), `RequestSettings(IPlayer, Stream)` | Post; Pre always skips; Pre always skips | TavernEssentials | Server | Whether the board is available, and the real settings sent to staff only. |
| `Alta.QuickAccessActions.SettingsQuickAccessMenu.IsIgnored` (getter), `Run(Controller)` | Post | TavernEssentials | Client | Shows the settings bubble to staff only; logs its rows. |
| `Alta.QuickAccessActions.ReturnToMainMenuAction.LetGoValid()` (async void) | Pre, always skips | TavernLib | Client | Eating the leave orb quits the game (for the launcher). |
| same | Pre, always skips, and unpatches TavernLib's | TavernEssentials | Client | Leaving goes back to the main menu instead. |

## Menus, social and the tablet (TavernEssentials)

All client side unless marked.

| Method | Kind | What it does |
| --- | --- | --- |
| `Alta.QuickAccessActions.ShowNames` nested `NameBoardHandler.Activate()` (private, by reflection) | Post | Turns a friend's name board green. |
| `Alta.Meta.UI.ServerManagement.FriendsRequestsPanel.RefreshData()` (async void) | Pre, Post | Flags the main menu's requests panel for TE's friends list. |
| `RecentPlayerActionPage.Setup`, `MakeFriendRequest`, `ReportPlayer` | Post; Pre, skips | The tablet's recent players page without Alta. |
| `RecentPlayerActionPage.SyncSocialTabletAction(IPlayer, Stream, ...)` (private async void) | Pre, skips when reading on the server | Server: handles tablet reports itself (the game's waits on Alta and never fires its event). |
| `Alta.Meta.UI.ServerManagement.RecentPlayersListPanel.AddPlayerAsFriend`, `ReportPlayer` | Pre, skips | Popups explaining friends and reports on community servers. |
| `FriendSelector.SyncFilter(IPlayer, Stream)` (private) | Pre, Fin | Keeps away friends on the postbox wheel. |
| `PostboxSender.SetupForPlayer(IPlayer)` | Post | Server: fills the postbox wheel with friends. |
| `PostboxSender.Send(int, int)` (async void) | Pre, skips when the check fails | Server: only sends to friends whose account matches. |
| `SettingsPanel.Start()` (private) | Pre | Adds a Mods board to the settings panel. |
| `AchievementBoard.UpdatePlayer`, `FestiveFeature.Modify` | Post | Hides achievement boards. |
| `AchievementEffectHandler.CallEffect` (static) | Pre, always skips | No achievement popup. |
| `Discord.ActivityManager.UpdateActivity` (Discord SDK) | Pre | Rich presence with the community server name. |
| `DiscordController.Start()` (private) | Pre, always skips | Server: never connects to Discord. |

## Players, cosmetics and the character room

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `Player.SyncCosmetics(IPlayer, Stream)` | Pre, always skips | TavernLib | Both | The game's sync, plus: refuses a player changing someone else's look, and on the server sends saved cosmetic bytes as they are. |
| `Alta.Customization.CosmeticCustomizationManager.ExitCustomizationRoom()`, `PlayerScreenFader.CustomFade`, `Alta.PlayerStates.CustomizationState.Sync` (private) | Pre | Rover | Client | Debug tracing of the character room exit. |

## Moving and teleporting

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `Teleporter.TeleportStartedSound` (private) | Fin | Rover | Client | Swallows the throw from the sound without audio. Patching `Teleporter` too early breaks the login UI. |
| `SmoothLocomotion.ApplyMovement(Vector3, bool)` | Pre | `calebv2.Portal-Gun` | Client | Carries the local player through a portal. |
| `SmoothLocomotion.HandleTeleport` (private), `RepositionCharacter(float)`, `CheckForInfiniteFall` (private), `IsCloseToGround` (private) | Pre, skip while crossing a portal | `calebv2.Portal-Gun` | Client | Stops the game's recentring, head-in-wall, fall and ground checks during the crossing. |

## Items, docks, damage

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `Alta.Inventory.PickupDock.Awake()` (protected virtual) | Post | Rover | Client | Turns docks' pickup range back on, which the game switches off when headless. |
| `PickupDock.ItemDockedSound`, `ItemUnDockedSound`, `DockHoverSound` | Fin | Rover | Client | Swallows the sound throws that dropped items mid-grab. |
| `Pickup.EnsureBestGrabFound(Interactor)` | Pre, skips for the gun | `calebv2.Portal-Gun` | Client | A fixed grip for the portal gun. |
| `DurabilityModule.UpdateMaterial(PhysicalMaterial)`, `ISavable` `Load`, `IEntityReplaceHandler.ReplacedWith` (explicit interface) | Post | `Circl-NoE.ATTMateriaLib` | Both | Base durability from material multipliers, kept after loads and replacements. |
| `Alta.Impact.DelayedImpactResolver.Update()` (private static) | Pre, Fin (swallows) | Steady | Both | Drops hits whose tool has no entity, and keeps one bad frame from stopping all held-item damage until a restart. |
| `Alta.Impact.ImpactDetector.OnToolHit`, `Alta.Impact.ImpactTool.OnDestroy` (private) | Pre; Post | Steady | Server | Lets go of destroyed objects the game keeps referencing (memory). |
| `HealthObject.ReceiveDamage(float, float, DamageData)` (virtual) | Pre, Fin | Cave Performance (combat diagnostics) | Server | Logs health around hits from tracked cave creatures. `PlayerHealth` calls base, so player hits are seen. |

## Food, drink, cooking and liquids

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `Alta.Cooking.CookingPot.InitializeAsServer(SpawnData)` | Post | `Nyx12012.CookingLib` | Server | Tracks pots for its cookables. |
| `CookingPot.StartWarmingUpStage(bool)`, `LoadAtCurrentStage()` (private) | Pre | `Nyx12012.CookingLib` | Server | Keeps the stew base once ingredients are in; resumes a stew after a reload. |
| `Alta.Cooking.StewManager` `ISavable` `Load` (explicit interface) | Pre, Post | `Nyx12012.CookingLib` | Server | Drops unknown saved ingredients, refills slots. |
| `StewManager.CreateContentWithTint(Color)` (private) | Pre, Post | `Nyx12012.CookingLib` | Server | Recipe and dye tints, per-stage liquids. |
| `StewManager.CheckForValidRecipe()`, `HandleNewStewStage(NetworkEntity)` (private) | Pre, Post | `Nyx12012.CookingLib` | Server | Raises its stew events. |
| `Alta.Cooking.StewRecipe.FindStewRecipeForIngredients` (static) | Post | `Nyx12012.CookingLib` | Server | Retries with Water when a water-like base matched nothing. |
| `StewRecipePageProvider.GetRandom()`, `EdiblePageProvider.GetRandom()` | Pre, always skips | `Nyx12012.CookingLib` | Server | Random recipe and food pages leave out its own. |
| `Alta.Pages.GlobalPagesManager.AddPage(int, uint)` | Pre, skips for its items | `Nyx12012.CookingLib` | Server | No journal pages for its ingredients. |
| `Alta.Cooking.Cookable.InitializeAsServer`, `SpawnCookedVersion()`, `SwapToBurntVersion()` (private) | Pre, Post, Fin | `Nyx12012.CookingLib` | Server | Roasting rules: temperatures and cooked or burnt results. |
| `EdibleObject.StartEat`, `ConsumptionManager.HandleConsumptionEffects` (internal), `CanConsumeEdible` | Pre, Post | `Nyx12012.CookingLib` | Server | Eating events, and refusing its own edibles when docked or full. |
| `PlayerDrinkingMouth.LiquidAmountChanged` (private) | Pre (`Priority.First`), Post (`Priority.Last`) | `Nyx12012.CookingLib` | Server | Raises a drank event. |
| same | Pre | `TheRavenSeb.hydrateordiedrate` | Server | Adds thirst for what was drunk. |
| `PlayerDrinkingMouth.Initialize()` | Post | `Nyx12012.CookingLib`, `TheRavenSeb.hydrateordiedrate` | Server | Each adds a liquid filter to the mouth (refuse a drink). |
| `Alta.Liquid.LiquidContainerTrigger.OnTriggerEnter(Collider)` | Post (`Priority.Last`) | `Nyx12012.CookingLib` | Server | Infusions: an item dropped in a liquid changes it. |
| same | Post | `CG-Nik.DyeingAPI` | Server | Dyes an item that enters a matching liquid. |
| `Alta.Liquid.LiquidData.SerializeEffectsArray(Stream)` (private), `LiquidData.Load` (twice) | Pre, Fin; Post | `Nyx12012.CookingLib` | Server | Keeps server-only effects off the wire, and restores them after loads. |
| `Alta.Networking.PrefabManager.PrepareSpawnSetups()` (static) | Post | `Nyx12012.CookingLib` | Server | Knows when the prefab map is ready. |

## Crafting and smelting

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `SpawnHelper.Spawn(NetworkPrefab, SpawnData, Chunk, Vector3, Quaternion, SpawningCallback)` (static overload) | Pre, changes position and rotation | `CG-Nik.CustomRecipesAPI` | Server in effect | Offsets smelter outputs for its items. It reads the call stack on every call to this overload, anywhere in the game. |

## Populations, ores and creatures

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `Alta.Populations.PopulationSample.CheckSpawned()` | Trans | Cave Performance (Wyrm population) | Server | Lowers the spawn target of wyrm-only cave populations. |
| same | Post | `Cheeto35.CheetosOreSpawnFix` | Server | Records the group. |
| `PopulationSample.Initialize`, `Destroy`, `SpawnRandom` (private), `LoadTime`, `CheckPopulation` (private), `AddEntity(NetworkEntity, int)` | Pre, Post, Fin | `Cheeto35.CheetosOreSpawnFix` | Server | Ore groups, custom respawn amount and timing, relinking saved crystals. |
| `Alta.Populations.PointsPopulationValue.GetRandom`, `GetPoint(int)`; `PopulationDefinition.IsPositionValid`, `TickFrequency` and `MaxPopulationGrowth` (getters) | Pre (skips), Post | `Cheeto35.CheetosOreSpawnFix` | Server | Even spawning over free points, respawn times. |
| `Alta.Caves.Displays.ClusterGenerator.Generate(SpawnData)`, `PositionChild` (private) | Pre, Post | `Cheeto35.CheetosOreSpawnFix` | Server | Picks a cluster's ore; nudges sunk boulders out of rock. |
| `Alta.Caves.PluginInstance` constructor, `RenderChunk(MapChunk)` (iterator) | Post; Pre, skips | `Cheeto35.CheetosOreSpawnFix` | Server | Mined crystals respawn, totems don't. |
| `Alta.Intelligence.Agent.InitializeAsServer(SpawnData)` | Pre, Post | Cave Performance (search, queue and combat diagnostics) | Server | Links creatures to their navigator and cave. Patched three times by the same mod. |
| `Agent.UpdateHurt()` (private) | Post | Steady | Server | Prunes destroyed targets now and then. |
| `Agent.FireChannelEvent`, `SyncEvent` (private) | Pre, Fin | Cave Performance (combat diagnostics) | Server | Logs creature actions. |
| `Alta.Pathfinding.Walker.Start()` (private) | Pre, Fin | Cave Performance | Server | Ties a walker's first navmesh snap to its cave. |
| `Alta.Pathfinding.Navigator.NavigateTo`, `Wander` (private overload), `WanderTo` (private), a `Wander` lambda | Pre, Post, Fin | Cave Performance | Server | Ties path requests to the cave they're in; saves wanders for replay. |
| `Navigator.OnPathFindFailed` (private), `CancelRequest` (private) | Pre, Post | Cave Performance (navigation recovery) | Server | Clears flags the game leaves set after a failed path, and retries after 2 s. |
| `Navigator.PathFound`, `Seeker.OnPathComplete` (private) | Pre, Fin | Cave Performance (queue diagnostics) | Server | Logs path results. |

## Chunks, streaming and saving

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `Alta.Chunks.LocationChunk.Initialize` | Post | Rover | Client | Applies the master-terrain chunk effect a headless client skips, so the mine's terrain goes away as it does for players. |
| `Alta.Chunks.ChunkPrefabPointer.PointerInstance.Spawned` (setter) | Post | Lens | Client | Hides grass tufts as a chunk's props spawn. |
| `ForestChunk`, `Alta.Chunks.CaveLayerStreamer`, `Alta.Chunks.StaticCaveChunk`: explicit `IProceduralGenerationStreamer.LoadDynamic(bool)` (async) | Post, replaces the Task | Steady | Server | Releases chunks' saved entities over several frames within a time budget. |
| `ForestChunk` `LoadDynamic` | Post, replaces the Task | Forest Performance | Server | One saved-entity batch per frame. |
| `CaveLayerStreamer` `LoadDynamic` | Pre, Post, replaces the Task | Cave Performance | Server | Same, and opens a 60 s window for its timing diagnostics. |
| `Alta.Chunks.DynamicChunkContentManager.LoadEntities(ChunkSaveFormat, bool)` (private) | Pre, Fin | Steady, Cave Performance (twice) | Server | Times entity loads (Steady); links creatures to their cave (Cave). |
| `Alta.Chunks.Chunk.ForceUnloadAndSave()` | Pre, Fin | Cave Performance, Forest Performance | Server | Releases pending batches before a forced save. |
| `Chunk.IsForceLoaded` (setter) | Pre, skips for pinned levels | `Cheeto35.CheetosOreSpawnFix` | Both | Keeps levels pinned by its `orefix load` loaded. |
| `StreamerManager.SaveWorld(bool)` | Pre, Fin | Steady, Cave Performance, Forest Performance | Server | Notes an instant save (Steady saves everyone at once then); releases pending batches (ATT-Optimizations). |
| `Player.SaveAll()` (static) | Pre, skips during autosaves | Steady | Server | Saves players over several frames instead of one. |
| `Alta.Saving.SavingSystem.Write(...)` (private static) | Pre, skips for bit streams | Steady | Server | Serializes each component once instead of twice. Same bytes. |
| `Alta.Utilities.ChunkSaveFormat.WriteTo(Stream, CancellationToken)` | Pre, skips | Steady | Server | Doesn't rewrite a chunk file that hasn't changed. Runs off the main thread. |
| `Alta.Serialization.StreamWriter.Dispose()`, `StreamReader.Dispose()` (`Alta.Serialization.Runtime`) | Post | Steady | Both | `GC.SuppressFinalize`, one less finalizer per saved entity and message. |
| `Alta.Networking.NetworkEntity.InitializeWithChildrenAsServer`, `Alta.Chunks.StreamerHelper.LoadSetupRecursive`, `Alta.Networking.ServerSpawnManager.SpawnInternal(uint)` | Pre, Fin | Cave Performance (timing) | Server | Logs slow calls around cave loads. |

## Forest and cave generation

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `Alta.Static.InstructionSet.ExecuteInternal(object, Task, int)` (private iterator) | Pre, skips for the forest | Steady | Both | Paces forest generation steps within a per-frame budget. |
| same | Pre, lowers the per-frame count | Forest Performance | Server | Forest instructions per frame down from 10 to 1. |
| `InstructionSet` `<ExecuteInternal>d__N.MoveNext` | Pre, Trans, Fin | Forest Performance | Server | Counts every forest instruction toward the batch. |
| `Alta.Forests.ForestGenerator.Wipe(int)` (async) | Pre (`Priority.Last`), always skips | Forest Performance (reset fix) | Server | Replaces the forest reset with an ordered one. |
| `Alta.Forests.ForestGenerator.Wipe(int)` (async) | Pre, skips unless another mod also replaces it | TavernLib | Server | Queues the reset for the next start: clears the forest's chunks now, keeps the running seed, saves the new one. |
| `ForestGenerator`'s `ISavableSave<ForestGeneratorSaveData>.Save` and `ISavable<ForestGeneratorSaveData>.Load` (explicit interface methods) | Post | TavernLib | Server | Save writes a queued seed. Load deletes cache files named after any other seed. |
| `WorldCommandModule.ForestCommandModule.Reset` | Pre, always skips | TavernLib | Server | Runs the reset and says what happened. |
| `Alta.Forests.RiverGenerator.GetGenerationAsync` | Pre | Forest Performance (reset fix) | Server | Clears failed river tasks and supplies terrain on the main thread. |
| `ServerCacheManager.CleanCache(string)` (async) | Pre (`Priority.Last`) | Forest Performance (reset fix) | Server | Removes failed cache entries first. |
| `ForestChunk` `LoadStatic`, `LoadDynamic`; `ForestGenerator.RequestStatic`, `RequestDynamic`, `GenerateTerrain`, `GenerateAsync`, `GenerateInternalAsync`; `Alta.Forests.ForestGeneration.SortNodes` and its lambdas; `TerrainAccess.ApplyHeights`, `ApplySplat`, `SampleSplat` (state machine `MoveNext`s and methods) | Pre, Fin | Forest Performance (step diagnostics) | Server | Logs slow forest steps. |
| `Alta.Caves.GenerationBase.UpdateRendering()` (private) | Pre (skips over budget), Trans, Fin | Cave Performance | Server | One shared per-frame budget for all cave generators. |
| `GenerationBase` `<Render>d__N.MoveNext` | Pre, Fin | Cave Performance (step diagnostics) | Server | Logs slow cave render steps. |
| `Alta.Chunks.CaveLayerStreamer.GeneratePathfinding()` (iterator) | Pre, always skips | Steady | Server | Its own scan, one cave at a time, with retries, so two layers loading together don't break each other's navmesh. |
| same | Post, wraps the iterator | Cave Performance (navigation recovery) | Server | Up to 3 attempts with the failed graph removed between. |
| `CaveLayerStreamer.NeedToGeneratePathFinding` (getter) | Post | Cave Performance (navigation recovery) | Server | True until a scan really finished. |
| `StaticCaveChunk.GeneratePathfinding()` (private iterator) | Pre, always skips | Steady | Server | As above, and always lets the chunk finish loading. |

## Pathfinding (A* Pathfinding Project)

All server side: clients have no navmesh.

| Method | Kind | Mod | What it does |
| --- | --- | --- | --- |
| `AstarPath.InitializePathProcessor()` (private) | Pre | Steady, Cave Performance | Sets the number of path threads before the processor is built. |
| `AstarPath.GetNearest(Vector3, NNConstraint, GraphNode)` | Pre (`Priority.Last`), skips | Steady | Nearest graphs first, skipping ones that can't hold a closer node. |
| same | Pre, Post, Fin | Cave Performance | Limits the search to the creature's own cave graph, falling back to the full search. |
| `Pathfinding.NNConstraint.SuitableGraph(int, NavGraph)` (virtual) | Pre, skips | Steady, Cave Performance, Forest Performance | A* tests graph bits modulo 32, so cave graph 32 matched masks meant for graph 0. All three fix it, in different cases. |
| `AstarPath.ScanAsync(NavGraph[])` (iterator) | Pre; Post, wraps | Steady (local area fill), Cave Performance | Distrusts area labels on a scan (Steady); pauses path threads before the first scan step (Cave). |
| `AstarPath` `<ScanAsync>d__N.MoveNext` | Trans | Steady | Removes the full `GC.Collect()` after every scan (2 to 3 s on a busy server). |
| same | Post; Pre, Fin | Cave Performance (search, navigation recovery, step diagnostics) | Marks graphs fully scanned. |
| `<ScanGraph>d__N`, `RecastGraph` `<ScanInternal>d__N` and `<ScanAllTiles>d__N` `MoveNext` | Pre, Fin | Cave Performance (step diagnostics) | Times scan steps. |
| `Pathfinding.GraphUpdateProcessor.FloodFill()` (internal type) | Pre (skips), Fin | Steady | Faster area labelling (union-find), or only the swapped tiles; same result. |
| same | Pre, Fin | Cave Performance (queue diagnostics), Forest Performance (connectivity) | Timing; counts full fills. |
| `AstarPath.FloodFill()` | Trans | Forest Performance | Routes the fill through its local relabel, with the full fill as fallback. |
| `Pathfinding.NavmeshBase.ReplaceTile(int, int, int, int, Int3[], int[])` | Pre, Post, Fin | Steady, Forest Performance | Records nodes around a cut tile swap. |
| `Pathfinding.WorkItemProcessor.AddWorkItem` | Pre | Steady, Forest Performance | Notes work that could change areas. |
| `WorkItemProcessor.ProcessWorkItems(bool)`, `EnsureValidFloodFill`, `IWorkItemContext.QueueFloodFill` | Pre, Fin | Forest Performance, Cave Performance (queue diagnostics) | Tracks nesting; timing. |
| `Pathfinding.Util.TileHandler` work-item lambdas (4, found in the IL) | Pre, Fin | Forest Performance | Marks known tile work. |
| `Pathfinding.RecastGraph` `IUpdatableGraph.UpdateAreaPost` (explicit interface) | Pre, Post, Fin | Steady | Records the forest update's tile swap. |
| same | Trans | Forest Performance | Tells tile cutting about the rebuilt tiles only, not the whole graph. |
| same, with `UpdateAreaInit` and `UpdateArea` | Pre, Fin | Cave Performance (queue diagnostics) | Timing. |
| `Pathfinding.NavmeshUpdates.NavmeshUpdateSettings.OnRecalculatedTiles(NavmeshTile[])` (internal nested) | Pre, changes the argument | Steady | The same fix as Forest Performance's transpiler: re-cut only rebuilt tiles. Re-cutting all about 19,000 froze the server 2 to 3 s per forest chunk. |
| `Pathfinding.NavmeshUpdates.ForceUpdate()` | Pre, always skips | Steady | Walks navmesh cuts once a frame instead of twice. |
| `GraphUpdateProcessor.ProcessPostUpdates()` (private) | Pre | Steady; Cave Performance (timing) | Trusts labels again after a graph update's own fill. |
| `GraphUpdateProcessor.ProcessGraphUpdates`, `ProcessRegularUpdates`; `PathProcessor.Lock`, `Unlock`, `TickNonMultithreaded`; `PathReturnQueue.ReturnPaths`; `AstarPath.FlushWorkItems` (both) | Pre, Fin, two Trans | Cave Performance (queue diagnostics) | Timing; the transpilers swap a wait for a timed copy of the same wait. |
| `AstarPath.StartPath(Path, bool)` (static), `Pathfinding.Path.Reset()`, `ABPath.Prepare()`, `ConstantPath.Prepare()`, `Path` `IPathInternals.AdvanceState`, `ReturnPath`; `ABPath` and `ConstantPath` `Initialize`, `CalculateStep`, `Cleanup` | Pre, Fin | Cave Performance | Ties each path to its cave while start and end nodes are looked up (on path threads); diagnostics. |
| `Pathfinding.Recast.RecastMeshGatherer.CollectTerrainMeshes` (found by name) | Pre, Post | Rover | Cuts terrain triangles over terrain holes from Rover's own scans. Client. |

## Physics, garbage collection and timing

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `GarbageCollectTimer.Start()` (private) | Pre | TavernLib | Server | Sets the forced collection interval from `garbage_collection_timer`. |
| same | Pre, always skips | Steady | Server | No forced collection at all (each was a 0.2 to 3 s pause). |
| `Alta.Utilities.DynamicPhysicsTimeSet.SettingsChanged` (private) | Pre | Steady | Server | Stops each settings reload stacking another physics-rate updater. |
| `DynamicPhysicsTimeSet.Update()`, `Disable()` (private) | Post | Steady | Server | Optional cap on the physics rate. |
| `UnityEngine.SetupCoroutine.InvokeMoveNext`, `UnitySynchronizationContext` `WorkRequest.Invoke` (Unity internals, by name) | Pre, Fin | Cave Performance (timing) | Server | Logs slow coroutine steps and Task continuations. |
| Every `Update`, `FixedUpdate`, `LateUpdate`, collision and trigger method, and every other mod's patched method | Pre (`Priority.First`), Post (`Priority.Last`) | Canary | Server | While `canary profile` runs: times them, then unpatches. |

## Rendering (Lens)

All client side, and only with graphics.

| Method | Kind | What it does |
| --- | --- | --- |
| `OptimizationManager` nested `QualitySetting.Apply`, `Township.PostProcessing.Windows.WindowsPostProcessController.OnSettingsChanged` | Post | Puts Lens's quality settings back after the game's own. |
| `PostProcessVolume.OnEnable` (Unity's post-processing package), `WindowsPostProcessController.Reset` | Post | Bloom on or off on every volume. |
| `Alta.ScreenshotCamera.HandCamera.VisibilityUpdated` | Pre, skips for other players' cameras | Keeps other players' camera viewfinders from rendering. |
| `ExposurePlayerScreenFader.Awake`, `PlayerController.UpdateCameraCulling` | Post | View distance and small-object cull distance. |
| `DistanceLODGroup.GetLevel(float)` | Pre, changes the distance | Tree detail distance. Only patched once set, since it runs for every tree. |
| `Alta.Environmental.Atmosphere.DayTimeManager.Awake`, `PooledFireEffect.UpdateSettings` | Post | Sun, moon and fire shadows. |

## Logging

| Method | Kind | Mod | Side | What it does |
| --- | --- | --- | --- | --- |
| `NLog.LoggerImpl.Write` (internal, by reflection) | Pre (`Priority.First`) | TavernEssentials (LogGuard) | Server | Scrubs join tokens and passwords from every game log line. |
| `TavernLib.TavernLogger.Log` (private, by name) | Pre | TavernEssentials (LogGuard) | Server | The same for TavernLib's own lines. |

TavernLib also drops refused-token lines with an NLog filter rather than a patch.

## Methods patched by more than one mod

Most of these work together. The ones that clash, or that make another mod's patch pointless, are marked.

| Method | Mods | How they combine |
| --- | --- | --- |
| `GarbageCollectTimer.Start` | TavernLib, Steady | Steady stops the timer unless `garbage_collection_timer` is set to something other than 30 (the default every launcher writes), or its own `ForcedGc` is on. Then TavernLib's interval applies. |
| `ForestGenerator.Wipe` | TavernLib, Forest Performance | TavernLib steps aside when another mod also prefixes it, so Forest Performance's reset runs. |
| `ReturnToMainMenuAction.LetGoValid` | TavernLib, TavernEssentials | **Replaced on purpose.** With `board_leave_orb=1`, TE removes TavernLib's quit prefix and returns to the menu. It removes it again after each mode change, since TavernLib's may land later. |
| `PurchasedList.UpdateCurrentRotation` | TavernLib, TavernEssentials | TavernLib's method is never applied (no prefix name or attribute), so only TE's runs. |
| `JoinResult.ErrorMessage` | TavernLib, TavernEssentials | Both postfixes. TavernLib only replaces the text when it doesn't already contain its own line, so TE's line, which quotes it, stays. |
| `JoinServerPipeline.OnServerRejectedRequest` | TavernLib, Rover | Compatible (prefix and postfix). Rover also tries to block TavernLib's `last_rejection.json` by patching `JoinRejectionRecorder.WriteRejectionFile`, but current TavernLib has no such method (it writes through `Save`), so that guard no longer applies. |
| `ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom` | TavernLib, TavernEssentials | TavernLib's prefix replaces it; TE's postfix still runs after and can only turn an accept into a refusal. The game reaches this method on every TavernLib server: the join filter hands over to `CheckApproved`, which calls it because the server's id is -1. |
| `MessageProcessor.ProcessSingleMessageFromData` | TavernLib, Rover | TavernLib replaces it; Rover's capture postfix reads what it did. TE checks TavernLib's prefix is there before using message types over 31. |
| `ConnectToServerUtility.SetupConnectionToServer` | TavernEssentials, `TheRavenSeb.hydrateordiedrate` | Both postfixes, different message types (TE 35, hydrate 40). |
| The seven Alta API methods marked "TavernEssentials, Steady" above | TavernEssentials, Steady | Steady's prefixes run last and step aside when TE (or TavernLib) already answered. On a server, where TE's Backend doesn't run, Steady's answer stands. |
| `NNConstraint.SuitableGraph` | Steady, Cave Performance, Forest Performance | Steady leaves it to Forest Performance when its `navigation_fixes` is on. Cave and Forest act on different cases and are tested together in both orders. |
| `AstarPath.InitializePathProcessor` | Steady, Cave Performance | Steady steps aside when Cave's `path_workers` is on. |
| `AstarPath.GetNearest` | Steady, Cave Performance | Steady's runs last, so Cave's cave-only search goes first. |
| `GraphUpdateProcessor.FloodFill`, `NavmeshBase.ReplaceTile`, `WorkItemProcessor.AddWorkItem` | Steady, Forest Performance, Cave Performance | Steady's local fill is off when Forest's `connectivity_updates` is on. Both fall back to the full fill when unsure, and Forest's fallback still goes through Steady's prefix. |
| `RecastGraph` `UpdateAreaPost` and `NavmeshUpdateSettings.OnRecalculatedTiles` | Steady, Forest Performance, Cave Performance | Steady and Forest fix the same thing in two places; when Forest's transpiler has already passed only the rebuilt tiles, Steady's prefix sees no whole-graph array and does nothing. |
| `AstarPath.ScanAsync` and its `MoveNext` | Steady, Cave Performance | Steady's transpiler and Cave's prefixes and postfixes stack. Steady logs if the `GC.Collect()` it removes is already gone. |
| `InstructionSet.ExecuteInternal` | Steady, Forest Performance | Steady steps aside when Forest's `forest_instructions_per_frame` is on. |
| `CaveLayerStreamer.GeneratePathfinding` | Steady, Cave Performance | Steady steps aside when Cave's `navigation_recovery` is on. Otherwise Steady's prefix replaces the iterator and Cave's wrapper never sees the game's. |
| The three `LoadDynamic` methods | Steady, Cave Performance, Forest Performance | Steady leaves the forest one to Forest and the cave layer one to Cave when their `separate_entity_loads` is on. `StaticCaveChunk` is always Steady's. |
| `DynamicChunkContentManager.LoadEntities`, `StreamerManager.SaveWorld`, `Chunk.ForceUnloadAndSave` | Steady, Cave Performance, Forest Performance | Prefix and finalizer pairs that don't skip. They stack. |
| `PopulationSample.CheckSpawned` | Cave Performance, `Cheeto35.CheetosOreSpawnFix` | A transpiler and a postfix that only records. Compatible. |
| `PlayerDrinkingMouth.LiquidAmountChanged`, `PlayerDrinkingMouth.Initialize` | `Nyx12012.CookingLib`, `TheRavenSeb.hydrateordiedrate` | Neither skips; each adds its own filter. Compatible. |
| `LiquidContainerTrigger.OnTriggerEnter` | `Nyx12012.CookingLib`, `CG-Nik.DyeingAPI` | Both postfixes. DyeingAPI runs first and sees the liquid before CookingLib's infusion can change it or destroy the item. |
| `Agent.InitializeAsServer`, `Navigator.Wander` and several pathfinding methods | Cave Performance, several times | The same mod's modules stacking. |
| `Chunk.IsForceLoaded` and `Chunk.ForceUnloadAndSave` | `Cheeto35.CheetosOreSpawnFix`; Forest Performance's reset sets `IsForceLoaded` | A level pinned with `orefix load` ignores the reset's attempt to unpin it. |

## See also

- [Harmony in A Township Tale](harmony.md) for how to write each kind of patch.
- [Finding your way around](finding-your-way-around.md) for finding your own hook points.
- [What TavernLib does](../../tavernlib/what-tavernlib-does.md), the guide version of TavernLib's changes.
