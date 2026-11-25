---
title: "Console, logging and analytics"
description: "Types in Alta.Console, Alta.Console.Commands, Alta.Logging, Alta.Analytics and Alta.QATools."
sidebar_position: 11
---

# Console, logging and analytics

Types in Alta.Console, Alta.Console.Commands, Alta.Logging, Alta.Analytics and Alta.QATools. 139 types, 15 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Analytics

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Analytics` | static class |  | 2 |  |
| `AnalyticsOptions` | enum |  | 5 |  |
| `AnalyticsRecordAttribute` | class | `Attribute` | 0 |  |
| `AnalyticsRecordForAllAttribute` | class | `Attribute` | 2 |  |
| `AnalyticsTools` | static class |  | 1 |  |
| `AnalyticsType` | enum |  | 6 |  |
| `DeviceStatRecord` | class |  | 19 |  |
| `TeleportationRecord` | struct |  | 3 |  |

## Alta.Analytics.UserSettingsAnalytics

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `UserSettingsAnalyticsReporter` | class | `IInitializable`, `IIsolate` | 3 |  |
| `UserSettingsAnalyticsReporterConfiguration` | class | `ScriptableObject` | 2 |  |
| `UserSettingsReport` | class |  | 3 |  |

## Alta.Console

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AliasAttribute` | class | `Attribute` | 2 |  |
| `AllowNullAttribute` | class | `Attribute` | 0 |  |
| `BasePart` | class |  | 6 |  |
| `ClientOnlyAttribute` | class | `RequirementAttribute` | 2 |  |
| `Command` | class | `CommandPart` | 9 | [Writing commands](../console-and-utilities/commands.md#module-and-command), [Health and damage](../items/health-and-damage.md): TavernLib's kill command uses it. |
| `CommandAttribute` | class | `Attribute` | 5 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| `CommandCollection` | class |  | 8 | [Writing commands](../console-and-utilities/commands.md#commandcollection): Get it from `CommandService.CommandCollection`. |
| `CommandContext` | class |  | 7 | [Writing commands](../console-and-utilities/commands.md#commandcontext): One per console session: each websocket connection has its own, and `Handle` without a context uses one shared default. |
| `CommandContextExtensions` | static class |  | 1 |  |
| `CommandException` | class | `Exception` | 1 |  |
| `CommandPart` | abstract class | `BasePart` | 10 |  |
| `CommandResult` | class |  | 8 | [Arguments and results](../console-and-utilities/arguments-and-results.md#commandresult): For an object result, `Log()` serializes it to JSON and, in the same line, copies that JSON to the system clipboard of the machine running the game. |
| `CommandResult<T>` | class | `CommandResult` | 4 | [Arguments and results](../console-and-utilities/arguments-and-results.md#commandresult): For an object result, `Log()` serializes it to JSON and, in the same line, copies that JSON to the system clipboard of the machine running the game. |
| `CommandResultSuccess` | enum |  | 5 |  |
| `CommandSearchResult` | struct |  | 8 |  |
| `CommandService` | static class |  | 8 | [Writing commands](../console-and-utilities/commands.md#commandservice), [Console, utilities and Alta assemblies](../console-and-utilities/overview.md): Main thread: every console the game has calls it from Unity's main thread, and you should too. |
| `ConsoleEvent` | abstract class |  | 5 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| `ConsoleEvent.Processor` | class | `IDisposable` | 2 |  |
| `ConsoleEvent<T>` | class | `ConsoleEvent`, `IConsoleEvent` | 4 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| `ConsoleEventProcessor` | static class |  | 5 |  |
| `ConsoleEvents` | static class |  | 16 |  |
| `ConsoleLogEvents` | static class |  | 1 |  |
| `DevOnlyAttribute` | class | `RequirementAttribute` | 2 |  |
| `DynamicCommandResult` | class | `CommandResult<object>` | 2 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| `EditorOnlyAttribute` | class | `RequirementAttribute` | 2 |  |
| `GroupPermissionAttribute` | class | `RequirementAttribute` | 2 |  |
| `HashedItemInfo` | class |  | 5 |  |
| `IConsoleEvent` | interface |  | 3 |  |
| `JsonSerializerSettingsExtensions` | static class |  | 1 |  |
| `LoggedInOnlyAttribute` | class | `RequirementAttribute` | 2 |  |
| `Module` | class | `CommandPart` | 5 | [Writing commands](../console-and-utilities/commands.md#module-and-command) |
| `ModuleAttribute` | class | `Attribute` | 3 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| `NonSimpleServerAttribute` | class | `RequirementAttribute` | 3 |  |
| `NotAllowedInRemoteAttribute` | class | `RequirementAttribute` | 2 |  |
| `NullableStructSerializer<TStruct>` | class | `JsonConverter<TStruct?>` | 2 |  |
| `ParamAttribute` | class | `Attribute` | 2 |  |
| `Parameter` | class | `BasePart` | 9 |  |
| `PlayOnlyAttribute` | class | `RequirementAttribute` | 2 |  |
| `PriorityAttribute` | class | `Attribute` | 2 |  |
| `ProgressiveHandler` | class |  | 0 |  |
| `RequirementAttribute` | abstract class | `Attribute` | 2 |  |
| `ServerOnlyAttribute` | class | `RequirementAttribute` | 2 |  |
| `StringTypeConverter` | class | `JsonConverter<Type>` | 3 |  |
| `Vector2TypeConverter` | class | `JsonConverter<Vector2>` | 2 |  |
| `Vector3Converter` | class | `TypeConverter` | 2 |  |
| `Vector3TypeConverter` | class | `JsonConverter<Vector3>` | 2 |  |
| `Vector4TypeConverter` | class | `JsonConverter<Vector4>` | 2 |  |
| `WebSocketCommandHandler` | class | `IRemoteConsoleHandler` | 8 | [Remote console](../console-and-utilities/remote-console.md#websocketcommandhandler): One per websocket connection. `WebSocketRemoteConsole.Handlers` (a static list) holds every one, logged in or not. |
| `WebSocketCommandHandler.Request` | struct |  | 2 |  |
| `WebSocketCommandHandler.ResponseData` | class |  | 7 |  |
| `WebSocketCommandHandler.ResponseType` | enum |  | 3 |  |
| `WebSocketCommandHandler.SubscriptionResult` | enum |  | 3 |  |
| `WebSocketConsoleCommandModule` | class |  | 3 |  |
| `WebsocketContractResolver` | class | `DefaultContractResolver` | 1 |  |
| `WebSocketRemoteConsole` | class | `IRemoteConsole` | 7 |  |
| `WithGroupPermissionsOnlyAttribute` | class | `RequirementAttribute` | 3 |  |
| `WithPermissionOnlyAttribute` | class | `RequirementAttribute` | 4 |  |

## Alta.Console.Commands

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AltaSelection` | class |  | 2 |  |
| `AudioCommandModule` | static class |  | 0 |  |
| `AudioCommandModule.Microphone` | static class |  | 0 |  |
| `BaseCommands` | static class |  | 5 |  |
| `ChunkInfo` | class |  | 2 |  |
| `DebuggingCommandModule` | static class |  | 0 |  |
| `DebuggingCommandModule.StaticCommandSubModule` | static class |  | 0 |  |
| `DebuggingCommandModule.Tracking` | static class |  | 3 |  |
| `EntityInfo` | class |  | 8 |  |
| `GameCommandModule` | static class |  | 1 |  |
| `InfoCommandModule` | static class |  | 0 |  |
| `Inventory` | class |  | 6 |  |
| `LeaderboardCommandModule` | static class |  | 6 |  |
| `LoggingCommandModule` | static class |  | 1 |  |
| `LoginCommandModule` | static class |  | 0 |  |
| `LogoutCommandModule` | static class |  | 0 |  |
| `MaintenanceCommandModule` | static class |  | 0 |  |
| `ModCommands` | static class |  | 8 |  |
| `ModInfo` | class |  | 4 |  |
| `NetworkEntityInfo` | class |  | 3 |  |
| `PrefabInfoDump` | class |  | 4 |  |
| `PrefabInfoDump.NetworkEntityInfoDump` | class |  | 4 |  |
| `PrefabInfoDump.SavableInfoDump` | class |  | 3 |  |
| `ProfilingCommandModule` | static class |  | 1 |  |
| `ProgressCommandModule` | static class |  | 1 |  |
| `QualityCommandModule` | class |  | 3 |  |
| `QuitCommandModule` | static class |  | 0 |  |
| `RepairBoxModule` | static class |  | 5 |  |
| `RepeatCommandModule` | static class |  | 0 |  |
| `SavingCommandModule` | static class |  | 1 |  |
| `SelectionCommandModule` | static class |  | 0 |  |
| `SelectionCommandModule.MovingModule` | static class |  | 0 |  |
| `SelectionCommandModule.RotatingModule` | static class |  | 0 |  |
| `ServerCommandModule` | static class |  | 0 |  |
| `SettingsCommandModules` | static class |  | 0 |  |
| `SettingsCommandModules.PopulationSettings` | static class |  | 3 |  |
| `SocialCommandModule` | static class |  | 3 |  |
| `SpawnCommandModule` | static class |  | 3 |  |
| `SpawnCommandModule.MouldDefinitionInfo` | class |  | 2 |  |
| `SpawnCommandModule.Moulds` | static class |  | 0 |  |
| `SpawnCommandModule.Packages` | static class |  | 0 |  |
| `SpawnCommandModule.PageCollectionInfo` | class |  | 3 |  |
| `SpawnCommandModule.Pages` | static class |  | 0 |  |
| `SpawnCommandModule.PopulationType` | enum |  | 3 |  |
| `SpawnCommandModule.SpawnLists` | static class |  | 0 |  |
| `TimeCommandModule` | static class |  | 0 |  |
| `TradeCommandModule` | static class |  | 0 |  |
| `TradeCommandModule.ATMCommandModule` | static class |  | 3 |  |
| `TrialCommandModule` | static class |  | 0 |  |
| `UserInfoDetailed` | class | `UserInfo` | 13 |  |
| `UsersCommandModule` | static class |  | 0 |  |
| `WackyCommandModule` | static class |  | 1 |  |
| `WorldCommandModule` | static class |  | 0 |  |
| `WorldCommandModule.CaveCommandModule` | static class |  | 1 |  |
| `WorldCommandModule.ForestCommandModule` | static class |  | 2 |  |

## Alta.Logging

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CommandLineArgsLogger` | class | `MonoBehaviour` | 0 |  |

## Alta.Logging.Targets

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ConsoleCommandsLogTarget` | class | `TargetWithLayout` | 2 |  |
| `FullStackTraceRenderer` | class | `LayoutRenderer`, `IUsesStackTrace` | 1 |  |
| `LogHandler` | delegate |  | 0 |  |
| `MainMenuTarget` | class | `TargetWithLayout` | 0 | [Logging](../console-and-utilities/logging.md) |
| `NetworkEntityChunkRenderer` | class | `NetworkEntityRenderer` | 0 |  |
| `NetworkEntityIdentifierRenderer` | class | `NetworkEntityRenderer` | 0 |  |
| `NetworkEntityOwnedRenderer` | class | `NetworkEntityRenderer` | 0 |  |
| `NetworkEntityParentRenderer` | class | `NetworkEntityRenderer` | 0 |  |
| `NetworkEntityPrefabRenderer` | class | `NetworkEntityRenderer` | 0 |  |
| `NetworkEntityRenderer` | abstract class | `LayoutRenderer` | 0 |  |
| `RawLogHandler` | delegate |  | 0 |  |
| `ServerConsoleLogTarget` | class | `TargetWithLayout` | 2 |  |
| `UnityConsoleLogTarget` | class | `TargetWithLayout` | 2 | [Logging](../console-and-utilities/logging.md) |

## Alta.QATools

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `DebugLoadMarker` | class |  | 1 |  |
| `DebugLoadMarker.IChunkLoader` | interface |  | 1 |  |
