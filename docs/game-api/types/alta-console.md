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
| [`Analytics`](/game-api/types/alta-console/analytics) | static class |  | 2 |  |
| [`AnalyticsOptions`](/game-api/types/alta-console/analyticsoptions) | enum |  | 5 | Obsolete flags for which extra fields (timestamp, user ID, server ID, game time) the old analytics system adds to events. |
| [`AnalyticsRecordAttribute`](/game-api/types/alta-console/analyticsrecordattribute) | class | `Attribute` | 0 |  |
| [`AnalyticsRecordForAllAttribute`](/game-api/types/alta-console/analyticsrecordforallattribute) | class | `Attribute` | 2 |  |
| [`AnalyticsTools`](/game-api/types/alta-console/analyticstools) | static class |  | 1 |  |
| [`AnalyticsType`](/game-api/types/alta-console/analyticstype) | enum |  | 6 | Old analytics record categories (combat hit, teleportation, device stats and so on), each mapped to an endpoint name. `Analytics.SendRecord` is empty in this build. |
| [`DeviceStatRecord`](/game-api/types/alta-console/devicestatrecord) | class |  | 19 | Obsolete analytics record of the player's hardware, filled from Unity's `SystemInfo`. |
| [`TeleportationRecord`](/game-api/types/alta-console/teleportationrecord) | struct |  | 3 |  |

## Alta.Analytics.UserSettingsAnalytics

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`UserSettingsAnalyticsReporter`](/game-api/types/alta-console/usersettingsanalyticsreporter) | class | `IInitializable`, `IIsolate` | 3 |  |
| [`UserSettingsAnalyticsReporterConfiguration`](/game-api/types/alta-console/usersettingsanalyticsreporterconfiguration) | class | `ScriptableObject` | 2 | Asset that sets the title and cut-off date of a user settings analytics report. Read by `UserSettingsAnalyticsReporter`. |
| [`UserSettingsReport`](/game-api/types/alta-console/usersettingsreport) | class |  | 3 |  |

## Alta.Console

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AliasAttribute`](/game-api/types/alta-console/aliasattribute) | class | `Attribute` | 2 |  |
| [`AllowNullAttribute`](/game-api/types/alta-console/allownullattribute) | class | `Attribute` | 0 |  |
| [`BasePart`](/game-api/types/alta-console/basepart) | class |  | 6 | Base of console command pieces that have a name and description: `CommandPart` and `Parameter`. |
| [`ClientOnlyAttribute`](/game-api/types/alta-console/clientonlyattribute) | class | `RequirementAttribute` | 2 |  |
| [`Command`](/game-api/types/alta-console/command) | class | `CommandPart` | 9 | [Writing commands](../console-and-utilities/commands.md#module-and-command), [Health and damage](../items/health-and-damage.md): Not created anywhere in the game's own code. TavernLib's kill command uses it. |
| [`CommandAttribute`](/game-api/types/alta-console/commandattribute) | class | `Attribute` | 5 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| [`CommandCollection`](/game-api/types/alta-console/commandcollection) | class |  | 8 | [Writing commands](../console-and-utilities/commands.md#commandcollection): Get it from `CommandService.CommandCollection`. |
| [`CommandContext`](/game-api/types/alta-console/commandcontext) | class |  | 7 | [Writing commands](../console-and-utilities/commands.md#commandcontext): One per console session: each websocket connection has its own, and `Handle` without a context uses one shared default. |
| [`CommandContextExtensions`](/game-api/types/alta-console/commandcontextextensions) | static class |  | 1 |  |
| [`CommandException`](/game-api/types/alta-console/commandexception) | class | `Exception` | 1 |  |
| [`CommandPart`](/game-api/types/alta-console/commandpart) | abstract class | `BasePart` | 10 | Base for an entry in the console command tree: a module or a command. Holds its name, aliases, parent module and requirements. |
| [`CommandResult`](/game-api/types/alta-console/commandresult) | class |  | 8 | [Arguments and results](../console-and-utilities/arguments-and-results.md#commandresult): For an object result, `Log()` serializes it to JSON and, in the same line, copies that JSON to the system clipboard of the machine running the game. |
| [`CommandResult<T>`](/game-api/types/alta-console/commandresult-t) | class | `CommandResult` | 4 | [Arguments and results](../console-and-utilities/arguments-and-results.md#commandresult): For an object result, `Log()` serializes it to JSON and, in the same line, copies that JSON to the system clipboard of the machine running the game. |
| [`CommandResultSuccess`](/game-api/types/alta-console/commandresultsuccess) | enum |  | 5 | Outcome of matching console input to a command: success, or why the parameters didn't fit (too few, too many, wrong types, failed to parse). Carried on `CommandSearchResult`. |
| [`CommandSearchResult`](/game-api/types/alta-console/commandsearchresult) | struct |  | 8 | The outcome of matching console input to a command: which command was found, whether its arguments fit, and the parsed arguments. |
| [`CommandService`](/game-api/types/alta-console/commandservice) | static class |  | 8 | [Writing commands](../console-and-utilities/commands.md#commandservice), [Console, utilities and Alta assemblies](../console-and-utilities/overview.md): Main thread: every console the game has calls it from Unity's main thread, and you should too. |
| [`ConsoleEvent`](/game-api/types/alta-console/consoleevent) | abstract class |  | 5 | Base for a named event that websocket console users can subscribe to. Messages are queued and sent from a background task, not the main thread. |
| [`ConsoleEvent.Processor`](/game-api/types/alta-console/consoleevent-processor) | class | `IDisposable` | 2 | Background task that takes queued console event messages and raises each event's `Invoked`. One shared instance runs for all events. |
| [`ConsoleEvent<T>`](/game-api/types/alta-console/consoleevent-t) | class | `ConsoleEvent`, `IConsoleEvent` | 4 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| [`ConsoleEventProcessor`](/game-api/types/alta-console/consoleeventprocessor) | static class |  | 5 |  |
| [`ConsoleEvents`](/game-api/types/alta-console/consoleevents) | static class |  | 16 | The game's console events as static fields. Console (websocket) sessions subscribe to them by name. See the Console events guide for what raises each one. |
| [`ConsoleLogEvents`](/game-api/types/alta-console/consolelogevents) | static class |  | 1 |  |
| [`DevOnlyAttribute`](/game-api/types/alta-console/devonlyattribute) | class | `RequirementAttribute` | 2 |  |
| [`DynamicCommandResult`](/game-api/types/alta-console/dynamiccommandresult) | class | `CommandResult<object>` | 2 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| [`EditorOnlyAttribute`](/game-api/types/alta-console/editoronlyattribute) | class | `RequirementAttribute` | 2 |  |
| [`GroupPermissionAttribute`](/game-api/types/alta-console/grouppermissionattribute) | class | `RequirementAttribute` | 2 |  |
| [`HashedItemInfo`](/game-api/types/alta-console/hashediteminfo) | class |  | 5 | A hash and name pair for console output, such as the list of spawnable prefabs. Converts from prefabs, items and hashed values. |
| [`IConsoleEvent`](/game-api/types/alta-console/iconsoleevent) | interface |  | 3 | An event that server console (websocket) connections can subscribe to; registered with `ConsoleEventProcessor`. |
| [`JsonSerializerSettingsExtensions`](/game-api/types/alta-console/jsonserializersettingsextensions) | static class |  | 1 |  |
| [`LoggedInOnlyAttribute`](/game-api/types/alta-console/loggedinonlyattribute) | class | `RequirementAttribute` | 2 |  |
| [`Module`](/game-api/types/alta-console/module) | class | `CommandPart` | 5 | [Writing commands](../console-and-utilities/commands.md#module-and-command) |
| [`ModuleAttribute`](/game-api/types/alta-console/moduleattribute) | class | `Attribute` | 3 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| [`NonSimpleServerAttribute`](/game-api/types/alta-console/nonsimpleserverattribute) | class | `RequirementAttribute` | 3 |  |
| [`NotAllowedInRemoteAttribute`](/game-api/types/alta-console/notallowedinremoteattribute) | class | `RequirementAttribute` | 2 |  |
| [`NullableStructSerializer<TStruct>`](/game-api/types/alta-console/nullablestructserializer-tstruct) | class | `JsonConverter<TStruct?>` | 2 |  |
| [`ParamAttribute`](/game-api/types/alta-console/paramattribute) | class | `Attribute` | 2 |  |
| [`Parameter`](/game-api/types/alta-console/parameter) | class | `BasePart` | 9 | One parameter of a console `Command`, built from the method's `ParameterInfo`. |
| [`PlayOnlyAttribute`](/game-api/types/alta-console/playonlyattribute) | class | `RequirementAttribute` | 2 |  |
| [`PriorityAttribute`](/game-api/types/alta-console/priorityattribute) | class | `Attribute` | 2 |  |
| [`ProgressiveHandler`](/game-api/types/alta-console/progressivehandler) | class |  | 0 | Empty marker type. A console command whose first parameter is a `ProgressiveHandler` is flagged as progressive; it must be the first parameter or registration throws. |
| [`RequirementAttribute`](/game-api/types/alta-console/requirementattribute) | abstract class | `Attribute` | 2 | Base attribute for a condition a console command (method or whole module class) needs before it can run. Subclasses override `Check`. |
| [`ServerOnlyAttribute`](/game-api/types/alta-console/serveronlyattribute) | class | `RequirementAttribute` | 2 |  |
| [`StringTypeConverter`](/game-api/types/alta-console/stringtypeconverter) | class | `JsonConverter<Type>` | 3 |  |
| [`Vector2TypeConverter`](/game-api/types/alta-console/vector2typeconverter) | class | `JsonConverter<Vector2>` | 2 |  |
| [`Vector3Converter`](/game-api/types/alta-console/vector3converter) | class | `TypeConverter` | 2 |  |
| [`Vector3TypeConverter`](/game-api/types/alta-console/vector3typeconverter) | class | `JsonConverter<Vector3>` | 2 |  |
| [`Vector4TypeConverter`](/game-api/types/alta-console/vector4typeconverter) | class | `JsonConverter<Vector4>` | 2 |  |
| [`WebSocketCommandHandler`](/game-api/types/alta-console/websocketcommandhandler) | class | `IRemoteConsoleHandler` | 8 | [Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler): One per websocket connection. `WebSocketRemoteConsole.Handlers` (a static list) holds every one, logged in or not. |
| [`WebSocketCommandHandler.Request`](/game-api/types/alta-console/websocketcommandhandler-request) | struct |  | 2 | A command request sent by a websocket console client, parsed from JSON. |
| [`WebSocketCommandHandler.ResponseData`](/game-api/types/alta-console/websocketcommandhandler-responsedata) | class |  | 7 | One message sent to a remote console client over the WebSocket: a system message, subscription event or command result, serialized to JSON. |
| [`WebSocketCommandHandler.ResponseType`](/game-api/types/alta-console/websocketcommandhandler-responsetype) | enum |  | 3 | Kind of message the remote console websocket sends back: a system message (such as the auth result), a subscription event, or the result of a command. |
| [`WebSocketCommandHandler.SubscriptionResult`](/game-api/types/alta-console/websocketcommandhandler-subscriptionresult) | enum |  | 3 | Result of a websocket console subscribe or unsubscribe: done, no change (already in that state) or the event type wasn't found. |
| [`WebSocketConsoleCommandModule`](/game-api/types/alta-console/websocketconsolecommandmodule) | class |  | 3 |  |
| [`WebsocketContractResolver`](/game-api/types/alta-console/websocketcontractresolver) | class | `DefaultContractResolver` | 1 |  |
| [`WebSocketRemoteConsole`](/game-api/types/alta-console/websocketremoteconsole) | class | `IRemoteConsole` | 7 |  |
| [`WithGroupPermissionsOnlyAttribute`](/game-api/types/alta-console/withgrouppermissionsonlyattribute) | class | `RequirementAttribute` | 3 |  |
| [`WithPermissionOnlyAttribute`](/game-api/types/alta-console/withpermissiononlyattribute) | class | `RequirementAttribute` | 4 |  |

## Alta.Console.Commands

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaSelection`](/game-api/types/alta-console/altaselection) | class |  | 2 | The entity a console user has selected, kept on their `CommandContext` as `Selection`. |
| [`AudioCommandModule`](/game-api/types/alta-console/audiocommandmodule) | static class |  | 0 |  |
| [`AudioCommandModule.Microphone`](/game-api/types/alta-console/audiocommandmodule-microphone) | static class |  | 0 |  |
| [`BaseCommands`](/game-api/types/alta-console/basecommands) | static class |  | 5 |  |
| [`ChunkInfo`](/game-api/types/alta-console/chunkinfo) | class |  | 2 |  |
| [`DebuggingCommandModule`](/game-api/types/alta-console/debuggingcommandmodule) | static class |  | 0 |  |
| [`DebuggingCommandModule.StaticCommandSubModule`](/game-api/types/alta-console/debuggingcommandmodule-staticcommandsubmodule) | static class |  | 0 |  |
| [`DebuggingCommandModule.Tracking`](/game-api/types/alta-console/debuggingcommandmodule-tracking) | static class |  | 3 |  |
| [`EntityInfo`](/game-api/types/alta-console/entityinfo) | class |  | 8 | A summary of a network entity returned by console commands: IDs, prefab, position and rotation. Any `NetworkEntity` converts to it. |
| [`GameCommandModule`](/game-api/types/alta-console/gamecommandmodule) | static class |  | 1 |  |
| [`InfoCommandModule`](/game-api/types/alta-console/infocommandmodule) | static class |  | 0 |  |
| [`Inventory`](/game-api/types/alta-console/inventory) | class |  | 6 |  |
| [`LeaderboardCommandModule`](/game-api/types/alta-console/leaderboardcommandmodule) | static class |  | 6 |  |
| [`LoggingCommandModule`](/game-api/types/alta-console/loggingcommandmodule) | static class |  | 1 |  |
| [`LoginCommandModule`](/game-api/types/alta-console/logincommandmodule) | static class |  | 0 |  |
| [`LogoutCommandModule`](/game-api/types/alta-console/logoutcommandmodule) | static class |  | 0 |  |
| [`MaintenanceCommandModule`](/game-api/types/alta-console/maintenancecommandmodule) | static class |  | 0 |  |
| [`ModCommands`](/game-api/types/alta-console/modcommands) | static class |  | 8 |  |
| [`ModInfo`](/game-api/types/alta-console/modinfo) | class |  | 4 | A row returned by the mod list console command: a loaded script bundle's name and whether it is active. |
| [`NetworkEntityInfo`](/game-api/types/alta-console/networkentityinfo) | class |  | 3 | A short summary of a network entity (ID and name) returned by console commands such as spawn. Any `NetworkEntity` converts to it. |
| [`PrefabInfoDump`](/game-api/types/alta-console/prefabinfodump) | class |  | 4 | Server: one prefab's entry in the `spawn infodump` command output, with its hash, name and the network entities inside it. |
| [`PrefabInfoDump.NetworkEntityInfoDump`](/game-api/types/alta-console/prefabinfodump-networkentityinfodump) | class |  | 4 | One network entity inside a prefab, as listed by `PrefabInfoDump`. |
| [`PrefabInfoDump.SavableInfoDump`](/game-api/types/alta-console/prefabinfodump-savableinfodump) | class |  | 3 | One savable component type on an entity, as listed by `PrefabInfoDump`. |
| [`ProfilingCommandModule`](/game-api/types/alta-console/profilingcommandmodule) | static class |  | 1 |  |
| [`ProgressCommandModule`](/game-api/types/alta-console/progresscommandmodule) | static class |  | 1 |  |
| [`QualityCommandModule`](/game-api/types/alta-console/qualitycommandmodule) | class |  | 3 |  |
| [`QuitCommandModule`](/game-api/types/alta-console/quitcommandmodule) | static class |  | 0 |  |
| [`RepairBoxModule`](/game-api/types/alta-console/repairboxmodule) | static class |  | 5 |  |
| [`RepeatCommandModule`](/game-api/types/alta-console/repeatcommandmodule) | static class |  | 0 |  |
| [`SavingCommandModule`](/game-api/types/alta-console/savingcommandmodule) | static class |  | 1 |  |
| [`SelectionCommandModule`](/game-api/types/alta-console/selectioncommandmodule) | static class |  | 0 |  |
| [`SelectionCommandModule.MovingModule`](/game-api/types/alta-console/selectioncommandmodule-movingmodule) | static class |  | 0 |  |
| [`SelectionCommandModule.RotatingModule`](/game-api/types/alta-console/selectioncommandmodule-rotatingmodule) | static class |  | 0 |  |
| [`ServerCommandModule`](/game-api/types/alta-console/servercommandmodule) | static class |  | 0 |  |
| [`SettingsCommandModules`](/game-api/types/alta-console/settingscommandmodules) | static class |  | 0 |  |
| [`SettingsCommandModules.PopulationSettings`](/game-api/types/alta-console/settingscommandmodules-populationsettings) | static class |  | 3 |  |
| [`SocialCommandModule`](/game-api/types/alta-console/socialcommandmodule) | static class |  | 3 |  |
| [`SpawnCommandModule`](/game-api/types/alta-console/spawncommandmodule) | static class |  | 3 |  |
| [`SpawnCommandModule.MouldDefinitionInfo`](/game-api/types/alta-console/spawncommandmodule-moulddefinitioninfo) | class |  | 2 | A row in the mould list console command. |
| [`SpawnCommandModule.Moulds`](/game-api/types/alta-console/spawncommandmodule-moulds) | static class |  | 0 |  |
| [`SpawnCommandModule.Packages`](/game-api/types/alta-console/spawncommandmodule-packages) | static class |  | 0 |  |
| [`SpawnCommandModule.PageCollectionInfo`](/game-api/types/alta-console/spawncommandmodule-pagecollectioninfo) | class |  | 3 | A row in the page collection list console command. |
| [`SpawnCommandModule.Pages`](/game-api/types/alta-console/spawncommandmodule-pages) | static class |  | 0 |  |
| [`SpawnCommandModule.PopulationType`](/game-api/types/alta-console/spawncommandmodule-populationtype) | enum |  | 3 | Shape of the population area the `spawn population` command spawns: disk, sphere or directional. Each picks a different built-in prefab. |
| [`SpawnCommandModule.SpawnLists`](/game-api/types/alta-console/spawncommandmodule-spawnlists) | static class |  | 0 |  |
| [`TimeCommandModule`](/game-api/types/alta-console/timecommandmodule) | static class |  | 0 |  |
| [`TradeCommandModule`](/game-api/types/alta-console/tradecommandmodule) | static class |  | 0 |  |
| [`TradeCommandModule.ATMCommandModule`](/game-api/types/alta-console/tradecommandmodule-atmcommandmodule) | static class |  | 3 |  |
| [`TrialCommandModule`](/game-api/types/alta-console/trialcommandmodule) | static class |  | 0 |  |
| [`UserInfoDetailed`](/game-api/types/alta-console/userinfodetailed) | class | `UserInfo` | 13 |  |
| [`UsersCommandModule`](/game-api/types/alta-console/userscommandmodule) | static class |  | 0 |  |
| [`WackyCommandModule`](/game-api/types/alta-console/wackycommandmodule) | static class |  | 1 |  |
| [`WorldCommandModule`](/game-api/types/alta-console/worldcommandmodule) | static class |  | 0 |  |
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
