---
title: "Debug"
description: "The game's own global Debug class, which hides UnityEngine.Debug in the game code."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Debug

A **static class** in `Root.Township`, no namespace.

The game's own global `Debug` class, which hides `UnityEngine.Debug` in the game code. Sets up NLog logging on first use and sends Unity's log output and these calls through NLog.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Attributes** `ApplicationShutdownOrder`
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state), [Connection messages](/game-api/networking/messages)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logconfigpath" /><code>{"static string LogConfigPath"}</code> | Path of the NLog config file in use. Defaults to `StreamingAssets/NLog.config` unless `/logging_config_path` is given. |

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commandlinepath" /><code>{"private static string commandLinePath"}</code> | Cached `/logging_config_path` value, empty if not given. |
| <Link id="m-defaultunitylogger" /><code>{"private static ILogHandler defaultUnityLogger"}</code> | Unity's original log handler, saved before the game replaces it. |
| <Link id="m-issetup" /><code>{"private static bool isSetup"}</code> | True once `SetupLogging` has run. |
| <Link id="m-logbasepath" /><code>{"private static string logBasePath"}</code> | Base log folder used by the `logpath` layout renderer. Changed by `UpdateLogFolderPath`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger that the `Log` methods write to. |
| <Link id="m-unhandledexceptionslogger" /><code>{"private static readonly Logger unhandledExceptionsLogger"}</code> | NLog logger named UnhandledExceptions, for exceptions Unity logs. |
| <Link id="m-unhandledlogger" /><code>{"private static readonly Logger unhandledLogger"}</code> | NLog logger named Unhandled, for other Unity log messages. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdebugbuild" /><code>{"static bool isDebugBuild { get; }"}</code> | Always false. |
| <Link id="m-logfolderpath" /><code>{"static string LogFolderPath { get; private set; }"}</code> | The log folder as worked out from the NLog config's `logFolderPath` variable. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assert" /><code>{"static void Assert(bool condition, string errorMessage = \"Assert Failed\", Object context = null)"}</code> | Logs the error message if the condition is false. Doesn't throw or break. |
| <Link id="m-break" /><code>{"static void Break()"}</code> | Does nothing. |
| <Link id="m-drawline" /><code>{"static void DrawLine(Vector3 start, Vector3 end, Color color)"}</code> | Draws a debug line through Unity's `Debug.DrawLine`. |
| <Link id="m-log" /><code>{"static void Log(object message, Object context = null)"}</code> | Logs the message at Info level. |
| <Link id="m-logerror" /><code>{"static void LogError(object message, Object context = null)"}</code> | Logs the message at Error level. |
| <Link id="m-logerrorformat" /><code>{"static void LogErrorFormat(string format, params object[] args)"}</code> | Logs a formatted message at Error level. |
| <Link id="m-logexception" /><code>{"static void LogException(Exception exception, Object context = null)"}</code> | Logs the exception and its message at Error level. |
| <Link id="m-logformat" /><code>{"static void LogFormat(string format, params object[] args)"}</code> | Logs a formatted message at Info level. |
| <Link id="m-logwarning" /><code>{"static void LogWarning(object message, Object context = null)"}</code> | Logs the message at Warn level. |
| <Link id="m-logwarningformat" /><code>{"static void LogWarningFormat(string format, params object[] args)"}</code> | Logs a formatted message at Warn level. |
| <Link id="m-setuplogging" /><code>{"static void SetupLogging()"}</code> | Loads the NLog config, registers the game's targets and layout renderers and takes over Unity's log handler. Runs once. |
| <Link id="m-updatelogfolderpath" /><code>{"static void UpdateLogFolderPath(string newLogFolder)"}</code> | Changes the base log folder and reloads the NLog config. |

<details>
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addcsvtargetwithname" /><code>{"private static void AddCsvTargetWithName(LoggingConfiguration config, CsvLayout csvLayout, string name)"}</code> | Adds an async CSV file target under Logs in the persistent data folder, archiving at 10 MB and keeping 20 archives. |
| <Link id="m-addcustomtarget" /><code>{"private static void AddCustomTarget(LoggingConfiguration config, string fileName, params string[] fields)"}</code> | Adds a CSV target with time, level, logger and the given event property columns. |
| <Link id="m-addcustomtargetsandrenderers" /><code>{"private static void AddCustomTargetsAndRenderers()"}</code> | Registers the game's NLog targets (Unity console, server console, console commands, main menu) and layout renderers such as `logpath` and `entity-id`. |
| <Link id="m-adderrortarget" /><code>{"private static void AddErrorTarget(LoggingConfiguration config)"}</code> | Adds the ErrorLogFile CSV target with message, stack trace and exception columns. |
| <Link id="m-addsimpletarget" /><code>{"private static void AddSimpleTarget(LoggingConfiguration config, string fileName)"}</code> | Adds a CSV target with time, level, logger and message columns. |
| <Link id="m-addsupersimpletarget" /><code>{"private static void AddSuperSimpleTarget(LoggingConfiguration config, string fileName)"}</code> | Adds a CSV target with only time and message columns. |
| <Link id="m-getlogfolderpath" /><code>{"private static string GetLogFolderPath()"}</code> | Base log folder: the data folder on a server, the client folder otherwise, or the folder of `-logFile` if given. |
| <Link id="m-getlogsettingspath" /><code>{"private static string GetLogSettingsPath()"}</code> | Returns the `/logging_config_path` value, or an empty string. The cached empty string means the `GameConfig` fallback is never reached. |
| <Link id="m-loadconfiguration" /><code>{"private static void LoadConfiguration()"}</code> | Loads the NLog config and reconfigures existing loggers, logging to Unity if it fails. |
| <Link id="m-logmanagerconfigurationreloaded" /><code>{"private static void LogManagerConfigurationReloaded(object sender, LoggingConfigurationReloadedEventArgs e)"}</code> | Logs a line when NLog reloads its configuration. |
| <Link id="m-setfulllogfolderpath" /><code>{"private static void SetFullLogFolderPath()"}</code> | Sets `LogFolderPath` from the `logFolderPath` variable in the loaded NLog config. |
| <Link id="m-setupforandroid" /><code>{"private static void SetupForAndroid()"}</code> | Builds an NLog config in code for Android with Unity console and CSV file targets. Not called in this file. |
| <Link id="m-setupforstandalone" /><code>{"private static void SetupForStandalone()"}</code> | Loads NLog config from the settings path or StreamingAssets/NLog.config, and hooks Unity's threaded log messages. |
| <Link id="m-setuphostname" /><code>{"private static void SetupHostname()"}</code> | Sets the `server_name` and `hostname` NLog context values from the HOSTNAME variable, or agones-server. |
| <Link id="m-shutdownnlog" /><code>{"private static void ShutdownNLog()"}</code> | Flushes and shuts down NLog. Runs last on application quit. |
| <Link id="m-unhandledunitylog" /><code>{"private static void UnhandledUnityLog(string condition, string stackTrace, LogType type)"}</code> | Forwards Unity log messages to NLog: exceptions to the UnhandledExceptions logger, everything else as warnings to Unhandled. |

</details>
