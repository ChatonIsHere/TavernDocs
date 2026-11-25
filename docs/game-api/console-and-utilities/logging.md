---
title: Logging
description: How the game logs through NLog, its own Debug class, NLog.config and its targets, where the log files go, and how a mod can log into them.
sidebar_position: 7
---

# Logging

The game logs everything through NLog (third party). Almost every class has a `private static Logger logger = LogManager.GetCurrentClassLogger()`, so logger names are class names like `Alta.Console.WebSocketCommandHandler`. Both sides.

MelonLoader's own log (`MelonLoader\Latest.log`) is separate. Your mod's `LoggerInstance` writes there, not to the game's logs.

## The game's Debug class

`Debug` in `Root.Township` (no namespace, static). It replaces `UnityEngine.Debug` for the game's code: `Log`, `LogWarning`, `LogError`, `LogException`, `LogFormat`, `Assert` and the rest all write to NLog's `Debug` logger instead of Unity's console.

Its static constructor sets up logging, which happens the first time anything touches `Debug`:

1. Sets NLog's `server_name` and `hostname` to the `HOSTNAME` environment variable, or `agones-server`.
2. Registers the game's NLog targets and layout renderers (below).
3. Loads `NLog.config`: from `/logging_config_path <file>` if given, else `A Township Tale_Data\StreamingAssets\NLog.config`. There's also a `LogSettingsPath` in `GameSettings`, but the code returns the (empty) command-line value before it ever reads it.
4. Reloads `NLog.config` from disk each time `GameConfiguration.json` is read, unless `/logging_config_path` was given. It compares the file in use with that empty value, so they never match. Anything you changed in `LogManager.Configuration` at runtime is lost then; re-apply it from `LogManager.ConfigurationChanged`, as TavernLib does.
5. Replaces Unity's log handler with `UnityLogHandler`, so `UnityEngine.Debug.Log` calls (from the engine and from plugins) also go to NLog, under the `UnityLogHandler` logger, prefixed `Unhandled Unity Log:`.
6. Hooks `Application.logMessageReceivedThreaded` to send Unity exceptions to the `UnhandledExceptions` logger and other Unity messages to `Unhandled`.
7. Flushes and shuts NLog down in `ApplicationManager.ApplicationQuit` (last of all the quit handlers).

| Member | What it is |
| --- | --- |
| `static string LogFolderPath { get; }` | The folder the file targets write to, from `NLog.config`'s `logFolderPath` variable. |
| `static string LogConfigPath` | The `NLog.config` in use. |
| `static void UpdateLogFolderPath(string newLogFolder)` | Moves the logs and reloads the config. Nothing in the game calls it. |
| `static void SetupLogging()` | Runs once; later calls do nothing. |
| `static bool isDebugBuild` | Always false. |

### Which Debug you get

If your mod references `Root.Township`, plain `Debug` in your code is the game's class, even with `using UnityEngine;`. C# finds a type in the global namespace before one brought in by a `using`.

```csharp
// With Root.Township referenced, plain Debug is the game's global Debug class, not UnityEngine.Debug.
Debug.Log("Goes to NLog's Debug logger");
string folder = Debug.LogFolderPath; // only the game's Debug has this
UnityEngine.Debug.Log("Goes through Unity's log handler, which the game also sends to NLog: " + folder);
```

Both end up in the game's logs.

## Logging through NLog

To write to the game's own logs, make an NLog logger. Add a reference to `NLog.dll` from the game's `Managed` folder.

```csharp
private static readonly NLog.Logger Log = LogManager.GetLogger("HelloTavern");

public static void Hello(string name, Exception error)
{
    Log.Info("Hello {0}", name);  // unity-log.csv and the server console, at Debug and above
    Log.Error(error, "Something broke for {0}", name); // also unity-error-log.csv
}
```

Use your mod's name as the logger name so hosts can filter it. Don't start it with `Alta.Console.`: those loggers only go to the console, not to the log files (see below).

## NLog.config

The game ships `StreamingAssets\NLog.config`, the same on client and server. It has `autoReload="true"`, so editing it takes effect while the game runs.

Targets it defines:

| Target | Type | Where it goes |
| --- | --- | --- |
| `logFile` | File (CSV) | `logs\unity-log.csv` |
| `errorLogFile` | File (CSV) | `logs\unity-error-log.csv` |
| `unhandledLogFile` | File (CSV) | `logs\unity-unhandled-log.csv` |
| `ServerConsole`, `MinServerConsole` | `ServerConsoleTarget` | The local console window and the [log console events](console-events.md#log-events). |
| `ConsoleCommands` | `ConsoleCommandsTarget` | The in-game runtime console and the 1758 console session. |
| `UnityConsole` | `UnityConsoleLogTarget` | Unity's console. Not used by any rule. |
| `MainMenu` | `MainMenuTarget` | The main menu's log panel. Not used by any rule. |

Rules, in order:

1. `Alta.Console.*` at Trace and above goes to `MinServerConsole` and `ConsoleCommands`, and stops there (`final`). Command results are logged here at Trace.
2. Everything at Debug and above goes to `logFile` and `ServerConsole`.
3. Everything at Error and above also goes to `errorLogFile`.
4. The `Unhandled` logger goes to `unhandledLogFile`.

Archives go to `logs\archives`, up to 20 files of 10 MB, and a new file is started each launch.

### Changing it at runtime

`logs config` prints the rules, and `logs change-target <target> <minLevel> [maxLevel] [loggerPattern]` replaces the first rule that writes to a target. From code, change `LogManager.Configuration` and call `LogManager.ReconfigExistingLoggers()`. TavernLib adds a filter to every rule this way (`ConsoleTokenPatches.RefusedLoginFilter`) to keep refused tokens out of the logs; read it before you do the same, since adding a filter to a rule with none changes what the rule lets through.

`HighLevelApiClientFactory.SetLogging(LoggingConfiguration)` replaces NLog's whole configuration. The game never calls it.

## Where the files go

`NLog.config` writes to `${logpath}/logs/`. `${logpath}` is a layout renderer the game registers. It's decided once, when `Debug` first sets up:

- the folder of the `-logFile <path>` command-line argument, if there is one,
- otherwise the data folder (`A Township Tale_Data`) if a server is already running, which it never is that early,
- otherwise `AltaIO.ClientFolder`: `%APPDATA%\A Township Tale\Client`.

So a client logs to `%APPDATA%\A Township Tale\Client\logs\`, and a server started with `-logFile` (as the launchers do) logs next to that file. `logs open` and `debug open-logs` open the folder.

## The game's targets and renderers

Registered by `Debug`, usable in your own NLog config:

| Name | What it is |
| --- | --- |
| `ServerConsoleTarget` (`Alta.Logging.Targets.ServerConsoleLogTarget`) | Raises `static event LogHandler LogSent` (rendered text and level) and `static event RawLogHandler LogSentRaw` (the `LogEventInfo`). The console window, the 1759 log stream and the log console events listen to these. |
| `ConsoleCommandsTarget`, `MainMenuTarget`, `UnityConsoleLogTarget` | The other targets above. |
| `${logpath}` | The base log folder. |
| `${fullstacktrace}` | The stack trace of the log call. |
| `${entity-chunk}`, `${entity-parent}`, `${entity-prefab}`, `${entity-id}`, `${entity-owned}` | Details of a `NetworkEntity` passed as the first format argument, or `n/a`. |

`ServerConsoleLogTarget.LogSentRaw` is the simplest way to see every Debug-and-above log line from a mod. It's raised on whatever thread logged, so don't touch Unity objects in the handler.

## Gotchas

- Trace is off for everything except `Alta.Console.*`. A `logger.Trace` in your mod is dropped unless the name starts with `Alta.Console.`, and then it only reaches the console.
- File targets are wrapped in NLog's async wrapper, so a crash can lose the last lines. `LogManager.Flush()` writes them.
- Command results are logged at Trace to `Alta.Console.CommandResult`. For object results that line also copies the JSON to the clipboard; see [Arguments and results](arguments-and-results.md#commandresult).

## See also

- [Console events](console-events.md#log-events) for streaming logs to a console client.
- [Startup and app state](startup-and-app-state.md) for `-logFile` and `/logging_config_path`.
- The log line index, for what individual lines in these logs mean.
