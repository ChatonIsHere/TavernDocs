---
title: "Console, logging and analytics"
description: "Types in Alta.Console, Alta.Console.Commands, Alta.Logging, Alta.Analytics and Alta.QATools."
sidebar_position: 11
---

# Console, logging and analytics

Types in Alta.Console, Alta.Console.Commands, Alta.Logging, Alta.Analytics and Alta.QATools. 139 types, 16 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Analytics

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Analytics`](/game-api/types/alta-console/analytics) | static class |  | 2 | Obsolete static analytics sender. `SendRecord` is now empty, so nothing it is given goes anywhere. |
| [`AnalyticsOptions`](/game-api/types/alta-console/analyticsoptions) | enum |  | 5 | Obsolete flags for which extra fields (timestamp, user ID, server ID, game time) the old analytics system adds to events. |
| [`AnalyticsRecordAttribute`](/game-api/types/alta-console/analyticsrecordattribute) | class | `Attribute` | 0 | Obsolete. Marked a field or property for the old `AnalyticsTools.Serialize` to include. |
| [`AnalyticsRecordForAllAttribute`](/game-api/types/alta-console/analyticsrecordforallattribute) | class | `Attribute` | 2 | Obsolete. Marked a class or struct so the old `AnalyticsTools.Serialize` includes all its fields and properties, with extra options. |
| [`AnalyticsTools`](/game-api/types/alta-console/analyticstools) | static class |  | 1 | Obsolete reflection serializer that turned records into the old DynamoDB-style JSON for `Analytics.SendRecord`. Builds and caches one serializer per type. |
| [`AnalyticsType`](/game-api/types/alta-console/analyticstype) | enum |  | 6 | Old analytics record categories (combat hit, teleportation, device stats and so on), each mapped to an endpoint name. `Analytics.SendRecord` is empty in this build. |
| [`DeviceStatRecord`](/game-api/types/alta-console/devicestatrecord) | class |  | 19 | Obsolete analytics record of the player's hardware, filled from Unity's `SystemInfo`. |
| [`TeleportationRecord`](/game-api/types/alta-console/teleportationrecord) | struct |  | 3 | Obsolete analytics record for a teleport, from the old analytics system. |

## Alta.Analytics.UserSettingsAnalytics

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`UserSettingsAnalyticsReporter`](/game-api/types/alta-console/usersettingsanalyticsreporter) | class | `IInitializable`, `IIsolate` | 3 | Sends a one-off report of the player's settings after login, if the addressable config's end date has not passed and this report title was not already sent. Client side; built by VContainer. |
| [`UserSettingsAnalyticsReporterConfiguration`](/game-api/types/alta-console/usersettingsanalyticsreporterconfiguration) | class | `ScriptableObject` | 2 | Asset that sets the title and cut-off date of a user settings analytics report. Read by `UserSettingsAnalyticsReporter`. |
| [`UserSettingsReport`](/game-api/types/alta-console/usersettingsreport) | class |  | 3 | Collects the logged-in player's playtime, platform and many comfort, locomotion and graphics settings, and sends them as one analytics event. |

## Alta.Console

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AliasAttribute`](/game-api/types/alta-console/aliasattribute) | class | `Attribute` | 2 | Gives a console module or command extra names it can be called by, such as `mic` for `microphone`. |
| [`AllowNullAttribute`](/game-api/types/alta-console/allownullattribute) | class | `Attribute` | 0 | Put on a command parameter (or a type converter) to let the parameter's converted value be null. Without it a null value fails parsing with `value was null`. |
| [`BasePart`](/game-api/types/alta-console/basepart) | class |  | 6 | Base of console command pieces that have a name and description: `CommandPart` and `Parameter`. |
| [`ClientOnlyAttribute`](/game-api/types/alta-console/clientonlyattribute) | class | `RequirementAttribute` | 2 | Console requirement: the module or command is only available when the current game mode is a client (or there is no game mode yet). |
| [`Command`](/game-api/types/alta-console/command) | class | `CommandPart` | 9 | [Writing commands](../console-and-utilities/commands.md#module-and-command), [Health and damage](../items/health-and-damage.md): Not created anywhere in the game's own code. TavernLib's kill command uses it. |
| [`CommandAttribute`](/game-api/types/alta-console/commandattribute) | class | `Attribute` | 5 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| [`CommandCollection`](/game-api/types/alta-console/commandcollection) | class |  | 8 | [Writing commands](../console-and-utilities/commands.md#commandcollection): Get it from `CommandService.CommandCollection`. |
| [`CommandContext`](/game-api/types/alta-console/commandcontext) | class |  | 7 | [Writing commands](../console-and-utilities/commands.md#commandcontext): One per console session: each websocket connection has its own, and `Handle` without a context uses one shared default. |
| [`CommandContextExtensions`](/game-api/types/alta-console/commandcontextextensions) | static class |  | 1 | Debug helper for `CommandContext`. |
| [`CommandException`](/game-api/types/alta-console/commandexception) | class | `Exception` | 1 | Exception a command can throw to report a failure. `CommandService` catches it separately from other exceptions. |
| [`CommandPart`](/game-api/types/alta-console/commandpart) | abstract class | `BasePart` | 10 | Base for an entry in the console command tree: a module or a command. Holds its name, aliases, parent module and requirements. |
| [`CommandResult`](/game-api/types/alta-console/commandresult) | class |  | 8 | [Arguments and results](../console-and-utilities/arguments-and-results.md#commandresult): For an object result, `Log()` serializes it to JSON and, in the same line, copies that JSON to the system clipboard of the machine running the game. |
| [`CommandResult<T>`](/game-api/types/alta-console/commandresult-t) | class | `CommandResult` | 4 | [Arguments and results](../console-and-utilities/arguments-and-results.md#commandresult): For an object result, `Log()` serializes it to JSON and, in the same line, copies that JSON to the system clipboard of the machine running the game. |
| [`CommandResultSuccess`](/game-api/types/alta-console/commandresultsuccess) | enum |  | 5 | Outcome of matching console input to a command: success, or why the parameters didn't fit (too few, too many, wrong types, failed to parse). Carried on `CommandSearchResult`. |
| [`CommandSearchResult`](/game-api/types/alta-console/commandsearchresult) | struct |  | 8 | The outcome of matching console input to a command: which command was found, whether its arguments fit, and the parsed arguments. |
| [`CommandService`](/game-api/types/alta-console/commandservice) | static class |  | 8 | [Writing commands](../console-and-utilities/commands.md#commandservice), [Console, utilities and Alta assemblies](../console-and-utilities/overview.md): Main thread: every console the game has calls it from Unity's main thread, and you should too. |
| [`ConsoleEvent`](/game-api/types/alta-console/consoleevent) | abstract class |  | 5 | Base for a named event that websocket console users can subscribe to. Messages are queued and sent from a background task, not the main thread. |
| [`ConsoleEvent.Processor`](/game-api/types/alta-console/consoleevent-processor) | class | `IDisposable` | 2 | Background task that takes queued console event messages and raises each event's `Invoked`. One shared instance runs for all events. |
| [`ConsoleEvent<T>`](/game-api/types/alta-console/consoleevent-t) | class | `ConsoleEvent`, `IConsoleEvent` | 4 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| [`ConsoleEventProcessor`](/game-api/types/alta-console/consoleeventprocessor) | static class |  | 5 | Registry of named console events that websocket console clients can subscribe to. Its static constructor registers the log events and `ConsoleEvents`. |
| [`ConsoleEvents`](/game-api/types/alta-console/consoleevents) | static class |  | 16 | The game's console events as static fields. Console (websocket) sessions subscribe to them by name. See the Console events guide for what raises each one. |
| [`ConsoleLogEvents`](/game-api/types/alta-console/consolelogevents) | static class |  | 1 | Publishes server log lines as console events (`TraceLog` to `FatalLog`) so websocket console clients can subscribe to them. |
| [`DevOnlyAttribute`](/game-api/types/alta-console/devonlyattribute) | class | `RequirementAttribute` | 2 | Console requirement: the command (or settings property) is only for users whose identity token has the developer role. |
| [`DynamicCommandResult`](/game-api/types/alta-console/dynamiccommandresult) | class | `CommandResult<object>` | 2 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| [`EditorOnlyAttribute`](/game-api/types/alta-console/editoronlyattribute) | class | `RequirementAttribute` | 2 | Console requirement: the command only runs outside play mode (in the Unity editor). |
| [`GroupPermissionAttribute`](/game-api/types/alta-console/grouppermissionattribute) | class | `RequirementAttribute` | 2 | Console requirement: on a simple server the caller needs all the listed group permissions; on other servers it always passes. Fails on clients. |
| [`HashedItemInfo`](/game-api/types/alta-console/hashediteminfo) | class |  | 5 | A hash and name pair for console output, such as the list of spawnable prefabs. Converts from prefabs, items and hashed values. |
| [`IConsoleEvent`](/game-api/types/alta-console/iconsoleevent) | interface |  | 3 | An event that server console (websocket) connections can subscribe to; registered with `ConsoleEventProcessor`. |
| [`JsonSerializerSettingsExtensions`](/game-api/types/alta-console/jsonserializersettingsextensions) | static class |  | 1 | Adds `Nullable` versions of struct JSON converters to a serializer settings object. Used by the websocket console's JSON settings. |
| [`LoggedInOnlyAttribute`](/game-api/types/alta-console/loggedinonlyattribute) | class | `RequirementAttribute` | 2 | Console requirement: the command needs the game to be logged in to the Alta API. |
| [`Module`](/game-api/types/alta-console/module) | class | `CommandPart` | 5 | [Writing commands](../console-and-utilities/commands.md#module-and-command) |
| [`ModuleAttribute`](/game-api/types/alta-console/moduleattribute) | class | `Attribute` | 3 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| [`NonSimpleServerAttribute`](/game-api/types/alta-console/nonsimpleserverattribute) | class | `RequirementAttribute` | 3 | Console requirement: the command runs freely on non-simple servers; on a simple server the caller needs the listed policies (`debug_features` by default). Fails on clients. |
| [`NotAllowedInRemoteAttribute`](/game-api/types/alta-console/notallowedinremoteattribute) | class | `RequirementAttribute` | 2 | Console requirement: the command can only be run by the locally logged-in user, not by a remote console user. |
| [`NullableStructSerializer<TStruct>`](/game-api/types/alta-console/nullablestructserializer-tstruct) | class | `JsonConverter<TStruct?>` | 2 | JSON converter for a nullable struct that writes null or hands the value to the struct's own converter. Created by `AddNullableConverters`. |
| [`ParamAttribute`](/game-api/types/alta-console/paramattribute) | class | `Attribute` | 2 | Gives a console command parameter a description, shown in the command's help. |
| [`Parameter`](/game-api/types/alta-console/parameter) | class | `BasePart` | 9 | One parameter of a console `Command`, built from the method's `ParameterInfo`. |
| [`PlayOnlyAttribute`](/game-api/types/alta-console/playonlyattribute) | class | `RequirementAttribute` | 2 | Console requirement: the command only runs in play mode. |
| [`PriorityAttribute`](/game-api/types/alta-console/priorityattribute) | class | `Attribute` | 2 | Sets a console command overload's priority. When several commands match, higher priority wins among equally successful matches. |
| [`ProgressiveHandler`](/game-api/types/alta-console/progressivehandler) | class |  | 0 | Empty marker type. A console command whose first parameter is a `ProgressiveHandler` is flagged as progressive; it must be the first parameter or registration throws. |
| [`RequirementAttribute`](/game-api/types/alta-console/requirementattribute) | abstract class | `Attribute` | 2 | Base attribute for a condition a console command (method or whole module class) needs before it can run. Subclasses override `Check`. |
| [`ServerOnlyAttribute`](/game-api/types/alta-console/serveronlyattribute) | class | `RequirementAttribute` | 2 | Console requirement: the command only runs on a server (when `ServerHandler.Current` exists). |
| [`StringTypeConverter`](/game-api/types/alta-console/stringtypeconverter) | class | `JsonConverter<Type>` | 3 | Write-only JSON converter that writes a `Type` as its name string. |
| [`Vector2TypeConverter`](/game-api/types/alta-console/vector2typeconverter) | class | `JsonConverter<Vector2>` | 2 | JSON converter that writes a `Vector2` as a two-number array and reads it back. |
| [`Vector3Converter`](/game-api/types/alta-console/vector3converter) | class | `TypeConverter` | 2 | `TypeConverter` that parses an `x,y,z` string into a `Vector3`. |
| [`Vector3TypeConverter`](/game-api/types/alta-console/vector3typeconverter) | class | `JsonConverter<Vector3>` | 2 | JSON converter that writes a `Vector3` as a three-number array and reads it back. |
| [`Vector4TypeConverter`](/game-api/types/alta-console/vector4typeconverter) | class | `JsonConverter<Vector4>` | 2 | JSON converter that writes a `Vector4` as a four-number array and reads it back. |
| [`WebSocketCommandHandler`](/game-api/types/alta-console/websocketcommandhandler) | class | `IRemoteConsoleHandler` | 8 | [Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler): One per websocket connection. `WebSocketRemoteConsole.Handlers` (a static list) holds every one, logged in or not. |
| [`WebSocketCommandHandler.Request`](/game-api/types/alta-console/websocketcommandhandler-request) | struct |  | 2 | A command request sent by a websocket console client, parsed from JSON. |
| [`WebSocketCommandHandler.ResponseData`](/game-api/types/alta-console/websocketcommandhandler-responsedata) | class |  | 7 | One message sent to a remote console client over the WebSocket: a system message, subscription event or command result, serialized to JSON. |
| [`WebSocketCommandHandler.ResponseType`](/game-api/types/alta-console/websocketcommandhandler-responsetype) | enum |  | 3 | Kind of message the remote console websocket sends back: a system message (such as the auth result), a subscription event, or the result of a command. |
| [`WebSocketCommandHandler.SubscriptionResult`](/game-api/types/alta-console/websocketcommandhandler-subscriptionresult) | enum |  | 3 | Result of a websocket console subscribe or unsubscribe: done, no change (already in that state) or the event type wasn't found. |
| [`WebSocketConsoleCommandModule`](/game-api/types/alta-console/websocketconsolecommandmodule) | class |  | 3 | Console module `websocket`: lets a websocket console client list and subscribe to console events. |
| [`WebsocketContractResolver`](/game-api/types/alta-console/websocketcontractresolver) | class | `DefaultContractResolver` | 1 | JSON contract resolver for websocket console replies that drops `DevOnly` members from the output, based on the calling user's policies. |
| [`WebSocketRemoteConsole`](/game-api/types/alta-console/websocketremoteconsole) | class | `IRemoteConsole` | 7 | The server's websocket remote console: a Fleck server on port 1760 that makes a `WebSocketCommandHandler` per connection. |
| [`WithGroupPermissionsOnlyAttribute`](/game-api/types/alta-console/withgrouppermissionsonlyattribute) | class | `RequirementAttribute` | 3 | Console requirement: the caller needs all the listed group permissions, on any server type. |
| [`WithPermissionOnlyAttribute`](/game-api/types/alta-console/withpermissiononlyattribute) | class | `RequirementAttribute` | 4 | Console requirement: the caller needs all the listed policies (for example `server_owner`). |

## Alta.Console.Commands

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaSelection`](/game-api/types/alta-console/altaselection) | class |  | 2 | The entity a console user has selected, kept on their `CommandContext` as `Selection`. |
| [`AudioCommandModule`](/game-api/types/alta-console/audiocommandmodule) | static class |  | 0 | Console module `audio` for audio input and output settings. Client only, in play. |
| [`AudioCommandModule.Microphone`](/game-api/types/alta-console/audiocommandmodule-microphone) | static class |  | 0 | Console module `audio microphone` (alias `mic`) for the local microphone in Vivox voice chat. |
| [`BaseCommands`](/game-api/types/alta-console/basecommands) | static class |  | 5 | Console module `help`: lists, searches and describes modules and commands. |
| [`ChunkInfo`](/game-api/types/alta-console/chunkinfo) | class |  | 2 | Small result object for console commands that shows a chunk by its identifier. |
| [`DebuggingCommandModule`](/game-api/types/alta-console/debuggingcommandmodule) | static class |  | 0 | Console module `debug` with developer commands for counting objects, logging entities, server stats, frame rate limits and test spawns. |
| [`DebuggingCommandModule.StaticCommandSubModule`](/game-api/types/alta-console/debuggingcommandmodule-staticcommandsubmodule) | static class |  | 0 | Console module `debug static` for modifiable static objects such as bridges and stairs. Server only, in play. |
| [`DebuggingCommandModule.Tracking`](/game-api/types/alta-console/debuggingcommandmodule-tracking) | static class |  | 3 | Console module `debug tracking` for following an entity by a name you give it. Needs the `server_owner` permission. |
| [`EntityInfo`](/game-api/types/alta-console/entityinfo) | class |  | 8 | A summary of a network entity returned by console commands: IDs, prefab, position and rotation. Any `NetworkEntity` converts to it. |
| [`GameCommandModule`](/game-api/types/alta-console/gamecommandmodule) | static class |  | 1 | Console module `game` (alias `g`) for finding, joining, starting and stopping servers from the client. Needs a logged in user, in play, and isn't allowed from the remote console. |
| [`InfoCommandModule`](/game-api/types/alta-console/infocommandmodule) | static class |  | 0 | Console module `info` about game systems. Needs the `server_owner` permission. Only `version` and `player-mode` print anything in this build. |
| [`Inventory`](/game-api/types/alta-console/inventory) | class |  | 6 | Console result object that lists what a player holds: hand items, back and belt dock items, and their child items. |
| [`LeaderboardCommandModule`](/game-api/types/alta-console/leaderboardcommandmodule) | static class |  | 6 | Console module `leaderboard` for setting up course leaderboards and their checkpoints. Server only. The board and checkpoint commands act on the selected object. |
| [`LoggingCommandModule`](/game-api/types/alta-console/loggingcommandmodule) | static class |  | 1 | Console module `logs`: commands that change NLog rules at runtime, print the logging config and open the log folder. |
| [`LoginCommandModule`](/game-api/types/alta-console/logincommandmodule) | static class |  | 0 | Console module `login`: signs in to the game with a username and password through `LoginManager`. Play mode only. |
| [`LogoutCommandModule`](/game-api/types/alta-console/logoutcommandmodule) | static class |  | 0 | Console module `logout`: signs the current user out through `LoginManager`. |
| [`MaintenanceCommandModule`](/game-api/types/alta-console/maintenancecommandmodule) | static class |  | 0 | Console module `maintenance`: memory housekeeping commands (garbage collection, unloading unused Unity assets). Play mode only. |
| [`ModCommands`](/game-api/types/alta-console/modcommands) | static class |  | 8 | Console module `mods`: manages the game's built-in C# script mods (the `.cs` files `DemoLoadScripts` loads from the mods folder). Needs the `server_owner` permission. |
| [`ModInfo`](/game-api/types/alta-console/modinfo) | class |  | 4 | A row returned by the mod list console command: a loaded script bundle's name and whether it is active. |
| [`NetworkEntityInfo`](/game-api/types/alta-console/networkentityinfo) | class |  | 3 | A short summary of a network entity (ID and name) returned by console commands such as spawn. Any `NetworkEntity` converts to it. |
| [`PrefabInfoDump`](/game-api/types/alta-console/prefabinfodump) | class |  | 4 | Server: one prefab's entry in the `spawn infodump` command output, with its hash, name and the network entities inside it. |
| [`PrefabInfoDump.NetworkEntityInfoDump`](/game-api/types/alta-console/prefabinfodump-networkentityinfodump) | class |  | 4 | One network entity inside a prefab, as listed by `PrefabInfoDump`. |
| [`PrefabInfoDump.SavableInfoDump`](/game-api/types/alta-console/prefabinfodump-savableinfodump) | class |  | 3 | One savable component type on an entity, as listed by `PrefabInfoDump`. |
| [`ProfilingCommandModule`](/game-api/types/alta-console/profilingcommandmodule) | static class |  | 1 | Console module `profiling`: Unity profiler samples, heap dumps and memory snapshots. Play mode only, needs `server_owner`. |
| [`ProgressCommandModule`](/game-api/types/alta-console/progresscommandmodule) | static class |  | 1 | Console module `progress`: server commands that skip world progression, such as finishing repair boxes, filling books, forging blades and generating caves. Server and play mode only. |
| [`QualityCommandModule`](/game-api/types/alta-console/qualitycommandmodule) | class |  | 3 | Console module `quality`: LOD bias and chunk streaming distance multipliers. |
| [`QuitCommandModule`](/game-api/types/alta-console/quitcommandmodule) | static class |  | 0 | Console module `quit`: closes the application. Play mode only. |
| [`RepairBoxModule`](/game-api/types/alta-console/repairboxmodule) | static class |  | 5 | Console module `repair-box`: spawns a repair box at a player that takes up to three item inputs and produces a chosen prefab. Server and play mode only; on simple servers needs `debug_features`. |
| [`RepeatCommandModule`](/game-api/types/alta-console/repeatcommandmodule) | static class |  | 0 | Console module `repeat`: runs the next command typed a set number of times at an interval, or reruns the last command. |
| [`SavingCommandModule`](/game-api/types/alta-console/savingcommandmodule) | static class |  | 1 | Console module `save`: server commands to save the world and to wipe the world, caves, community storage or player saves. Play mode only. |
| [`SelectionCommandModule`](/game-api/types/alta-console/selectioncommandmodule) | static class |  | 0 | Console module `select` (alias `s`): picks a networked entity as the console's current selection and moves, snaps, exports or destroys it. On simple servers needs `debug_features`. |
| [`SelectionCommandModule.MovingModule`](/game-api/types/alta-console/selectioncommandmodule-movingmodule) | static class |  | 0 | Console submodule `select move` (alias `m`): moves the selected entity along world axes and forces a position sync. |
| [`SelectionCommandModule.RotatingModule`](/game-api/types/alta-console/selectioncommandmodule-rotatingmodule) | static class |  | 0 | Console submodule `select rotate` (alias `r`): rotates the selected entity and forces a position sync. |
| [`ServerCommandModule`](/game-api/types/alta-console/servercommandmodule) | static class |  | 0 | Console module `server`: starts servers, proxies commands to other servers over their websocket console, and runs a spot-instance migration. Needs login, play mode and `server_owner`. |
| [`SettingsCommandModules`](/game-api/types/alta-console/settingscommandmodules) | static class |  | 0 | Console module `settings`: reads and changes game or server settings by name, toggles settings, and sets info board text. |
| [`SettingsCommandModules.PopulationSettings`](/game-api/types/alta-console/settingscommandmodules-populationsettings) | static class |  | 3 | Console submodule `settings population`: checks and overrides how often a population respawns. Server only. |
| [`SocialCommandModule`](/game-api/types/alta-console/socialcommandmodule) | static class |  | 3 | Console module `social`: adds, removes and lists friends through the Alta API. Needs login, play mode and `server_owner`. |
| [`SpawnCommandModule`](/game-api/types/alta-console/spawncommandmodule) | static class |  | 3 | Console module `spawn`: spawns prefabs, saved-object strings and population areas in front of players. Play mode only; on simple servers needs `debug_features`. Spawned entities become the console selection. |
| [`SpawnCommandModule.MouldDefinitionInfo`](/game-api/types/alta-console/spawncommandmodule-moulddefinitioninfo) | class |  | 2 | A row in the mould list console command. |
| [`SpawnCommandModule.Moulds`](/game-api/types/alta-console/spawncommandmodule-moulds) | static class |  | 0 | Console submodule `spawn moulds`: spawns casting moulds for a given mould definition. Marked as under construction in the code. |
| [`SpawnCommandModule.Packages`](/game-api/types/alta-console/spawncommandmodule-packages) | static class |  | 0 | Console submodule `spawn package`: drops named spawn packages through `PackageManager`. |
| [`SpawnCommandModule.PageCollectionInfo`](/game-api/types/alta-console/spawncommandmodule-pagecollectioninfo) | class |  | 3 | A row in the page collection list console command. |
| [`SpawnCommandModule.Pages`](/game-api/types/alta-console/spawncommandmodule-pages) | static class |  | 0 | Console submodule `spawn pages`: spawns every page of a page collection as paper. |
| [`SpawnCommandModule.PopulationType`](/game-api/types/alta-console/spawncommandmodule-populationtype) | enum |  | 3 | Shape of the population area the `spawn population` command spawns: disk, sphere or directional. Each picks a different built-in prefab. |
| [`SpawnCommandModule.SpawnLists`](/game-api/types/alta-console/spawncommandmodule-spawnlists) | static class |  | 0 | Console submodule `spawn list`: lists what can be spawned. |
| [`TimeCommandModule`](/game-api/types/alta-console/timecommandmodule) | static class |  | 0 | Console module `time`: sets and reads the time of day and advances real (timeline) time. Server and play mode only. |
| [`TradeCommandModule`](/game-api/types/alta-console/tradecommandmodule) | static class |  | 0 | Console module `trade`: empties trade decks and sends spawned items to a player's post box. Play mode only. |
| [`TradeCommandModule.ATMCommandModule`](/game-api/types/alta-console/tradecommandmodule-atmcommandmodule) | static class |  | 3 | Console submodule `trade atm`: reads and changes a player's ATM (bank) gold balance, even when they are offline. |
| [`TrialCommandModule`](/game-api/types/alta-console/trialcommandmodule) | static class |  | 0 | Console module `trial`: lists, advances and resets active combat trials. Server and play mode only. |
| [`UserInfoDetailed`](/game-api/types/alta-console/userinfodetailed) | class | `UserInfo` | 13 | A `UserInfo` with a player's body, chunk and head and hand transforms, returned by console commands that report player details. |
| [`UsersCommandModule`](/game-api/types/alta-console/userscommandmodule) | static class |  | 0 | Console module `users`: user statistics from the Alta API. Needs login and `server_owner`. |
| [`WackyCommandModule`](/game-api/types/alta-console/wackycommandmodule) | static class |  | 1 | Console module `wacky`: odd fix-up and debug commands the code itself calls "not necessarily safe/functional", such as replacing broken entities, mass destroys and cleaning offline player saves. Play mode only. |
| [`WorldCommandModule`](/game-api/types/alta-console/worldcommandmodule) | static class |  | 0 | Console module `world`: holder for the `world forest` and `world caves` submodules (forest info, teleport and reset; cave reset and teleport). Server and play mode only. |
| [`WorldCommandModule.CaveCommandModule`](/game-api/types/alta-console/worldcommandmodule-cavecommandmodule) | static class |  | 1 | [Caves](../world/caves.md#console-commands-worldcommandmodulecavecommandmodule): The `world caves` module. |
| [`WorldCommandModule.ForestCommandModule`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule) | static class |  | 2 | [Forest](../world/forest.md#console-commands-worldcommandmoduleforestcommandmodule): The `world forest` module. |

## Alta.Logging

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CommandLineArgsLogger`](/game-api/types/alta-console/commandlineargslogger) | class | `MonoBehaviour` | 0 |  |

## Alta.Logging.Targets

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ConsoleCommandsLogTarget`](/game-api/types/alta-console/consolecommandslogtarget) | class | `TargetWithLayout` | 2 |  |
| [`FullStackTraceRenderer`](/game-api/types/alta-console/fullstacktracerenderer) | class | `LayoutRenderer`, `IUsesStackTrace` | 1 |  |
| [`LogHandler`](/game-api/types/alta-console/loghandler) | delegate |  | 0 | Event handler for a formatted log line and its level. Used by `ServerConsoleLogTarget.LogSent` and `ConsoleCommandsLogTarget.LogSent`. |
| [`MainMenuTarget`](/game-api/types/alta-console/mainmenutarget) | class | `TargetWithLayout` | 0 | [Logging](../console-and-utilities/logging.md) |
| [`NetworkEntityChunkRenderer`](/game-api/types/alta-console/networkentitychunkrenderer) | class | `NetworkEntityRenderer` | 0 |  |
| [`NetworkEntityIdentifierRenderer`](/game-api/types/alta-console/networkentityidentifierrenderer) | class | `NetworkEntityRenderer` | 0 |  |
| [`NetworkEntityOwnedRenderer`](/game-api/types/alta-console/networkentityownedrenderer) | class | `NetworkEntityRenderer` | 0 |  |
| [`NetworkEntityParentRenderer`](/game-api/types/alta-console/networkentityparentrenderer) | class | `NetworkEntityRenderer` | 0 |  |
| [`NetworkEntityPrefabRenderer`](/game-api/types/alta-console/networkentityprefabrenderer) | class | `NetworkEntityRenderer` | 0 |  |
| [`NetworkEntityRenderer`](/game-api/types/alta-console/networkentityrenderer) | abstract class | `LayoutRenderer` | 0 | Base for NLog layout renderers that print something about a `NetworkEntity` passed as the log message's first parameter (its prefab, parent, owner, identifier or chunk). |
| [`RawLogHandler`](/game-api/types/alta-console/rawloghandler) | delegate |  | 0 | Event handler for a raw NLog event. Used by the `LogSentRaw` events on `ServerConsoleLogTarget` and `ConsoleCommandsLogTarget`. |
| [`ServerConsoleLogTarget`](/game-api/types/alta-console/serverconsolelogtarget) | class | `TargetWithLayout` | 2 |  |
| [`UnityConsoleLogTarget`](/game-api/types/alta-console/unityconsolelogtarget) | class | `TargetWithLayout` | 2 | [Logging](../console-and-utilities/logging.md) |

## Alta.QATools

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`DebugLoadMarker`](/game-api/types/alta-console/debugloadmarker) | class |  | 1 |  |
| [`DebugLoadMarker.IChunkLoader`](/game-api/types/alta-console/debugloadmarker-ichunkloader) | interface |  | 1 | Picks which chunks a `DebugLoadMarker` keeps loaded around its entity. There is an optimised version for simple servers and a normal one. |
