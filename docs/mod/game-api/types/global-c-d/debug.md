---
title: "Debug"
description: "The game's own global Debug class, which hides UnityEngine.Debug in the game code."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Debug

A **static class** in `Root.Township`, the global namespace.

The game's own global `Debug` class, which hides `UnityEngine.Debug` in the game code. Sets up NLog logging on first use and sends Unity's log output and these calls through NLog.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Attributes** `ApplicationShutdownOrder`
- **Documented in** [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state), [Connection messages](/mod/game-api/networking/messages)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logconfigpath" /><code>{"static string LogConfigPath"}</code> | <span className="api-desc">Path of the NLog config file in use. Defaults to `StreamingAssets/NLog.config` unless `/logging_config_path` is given.</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commandlinepath" /><code>{"private static string commandLinePath"}</code> | <span className="api-desc">Cached `/logging_config_path` value, empty if not given.</span> |
| <Link id="m-defaultunitylogger" /><code>{"private static ILogHandler defaultUnityLogger"}</code> | <span className="api-desc">Unity's original log handler, saved before the game replaces it.</span> |
| <Link id="m-issetup" /><code>{"private static bool isSetup"}</code> | <span className="api-desc">True once `SetupLogging` has run.</span> |
| <Link id="m-logbasepath" /><code>{"private static string logBasePath"}</code> | <span className="api-desc">Base log folder used by the `logpath` layout renderer. Changed by `UpdateLogFolderPath`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger that the `Log` methods write to.</span> |
| <Link id="m-unhandledexceptionslogger" /><code>{"private static readonly Logger unhandledExceptionsLogger"}</code> | <span className="api-desc">NLog logger named UnhandledExceptions, for exceptions Unity logs.</span> |
| <Link id="m-unhandledlogger" /><code>{"private static readonly Logger unhandledLogger"}</code> | <span className="api-desc">NLog logger named Unhandled, for other Unity log messages.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdebugbuild" /><code>{"static bool isDebugBuild { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-logfolderpath" /><code>{"static string LogFolderPath { get; private set; }"}</code> | <span className="api-desc">The log folder as worked out from the NLog config's `logFolderPath` variable.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assert" /><code>{"static void Assert(bool condition, string errorMessage = \"Assert Failed\", Object context = null)"}</code> | <span className="api-desc">Logs the error message if the condition is false. Doesn't throw or break.</span> |
| <Link id="m-break" /><code>{"static void Break()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-drawline" /><code>{"static void DrawLine(Vector3 start, Vector3 end, Color color)"}</code> | <span className="api-desc">Draws a debug line through Unity's `Debug.DrawLine`.</span> |
| <Link id="m-log" /><code>{"static void Log(object message, Object context = null)"}</code> | <span className="api-desc">Logs the message at Info level.</span> |
| <Link id="m-logerror" /><code>{"static void LogError(object message, Object context = null)"}</code> | <span className="api-desc">Logs the message at Error level.</span> |
| <Link id="m-logerrorformat" /><code>{"static void LogErrorFormat(string format, params object[] args)"}</code> | <span className="api-desc">Logs a formatted message at Error level.</span> |
| <Link id="m-logexception" /><code>{"static void LogException(Exception exception, Object context = null)"}</code> | <span className="api-desc">Logs the exception and its message at Error level.</span> |
| <Link id="m-logformat" /><code>{"static void LogFormat(string format, params object[] args)"}</code> | <span className="api-desc">Logs a formatted message at Info level.</span> |
| <Link id="m-logwarning" /><code>{"static void LogWarning(object message, Object context = null)"}</code> | <span className="api-desc">Logs the message at Warn level.</span> |
| <Link id="m-logwarningformat" /><code>{"static void LogWarningFormat(string format, params object[] args)"}</code> | <span className="api-desc">Logs a formatted message at Warn level.</span> |
| <Link id="m-setuplogging" /><code>{"static void SetupLogging()"}</code> | <span className="api-desc">Loads the NLog config, registers the game's targets and layout renderers and takes over Unity's log handler. Runs once.</span> |
| <Link id="m-updatelogfolderpath" /><code>{"static void UpdateLogFolderPath(string newLogFolder)"}</code> | <span className="api-desc">Changes the base log folder and reloads the NLog config.</span> |

<details className="api-private">
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addcsvtargetwithname" /><code>{"private static void AddCsvTargetWithName(LoggingConfiguration config, CsvLayout csvLayout, string name)"}</code> | <span className="api-desc">Adds an async CSV file target under Logs in the persistent data folder, archiving at 10 MB and keeping 20 archives.</span> |
| <Link id="m-addcustomtarget" /><code>{"private static void AddCustomTarget(LoggingConfiguration config, string fileName, params string[] fields)"}</code> | <span className="api-desc">Adds a CSV target with time, level, logger and the given event property columns.</span> |
| <Link id="m-addcustomtargetsandrenderers" /><code>{"private static void AddCustomTargetsAndRenderers()"}</code> | <span className="api-desc">Registers the game's NLog targets (Unity console, server console, console commands, main menu) and layout renderers such as `logpath` and `entity-id`.</span> |
| <Link id="m-adderrortarget" /><code>{"private static void AddErrorTarget(LoggingConfiguration config)"}</code> | <span className="api-desc">Adds the ErrorLogFile CSV target with message, stack trace and exception columns.</span> |
| <Link id="m-addsimpletarget" /><code>{"private static void AddSimpleTarget(LoggingConfiguration config, string fileName)"}</code> | <span className="api-desc">Adds a CSV target with time, level, logger and message columns.</span> |
| <Link id="m-addsupersimpletarget" /><code>{"private static void AddSuperSimpleTarget(LoggingConfiguration config, string fileName)"}</code> | <span className="api-desc">Adds a CSV target with only time and message columns.</span> |
| <Link id="m-getlogfolderpath" /><code>{"private static string GetLogFolderPath()"}</code> | <span className="api-desc">Base log folder: the data folder on a server, the client folder otherwise, or the folder of `-logFile` if given.</span> |
| <Link id="m-getlogsettingspath" /><code>{"private static string GetLogSettingsPath()"}</code> | <span className="api-desc">Returns the `/logging_config_path` value, or an empty string. The cached empty string means the `GameConfig` fallback is never reached.</span> |
| <Link id="m-loadconfiguration" /><code>{"private static void LoadConfiguration()"}</code> | <span className="api-desc">Loads the NLog config and reconfigures existing loggers, logging to Unity if it fails.</span> |
| <Link id="m-logmanagerconfigurationreloaded" /><code>{"private static void LogManagerConfigurationReloaded(object sender, LoggingConfigurationReloadedEventArgs e)"}</code> | <span className="api-desc">Logs a line when NLog reloads its configuration.</span> |
| <Link id="m-setfulllogfolderpath" /><code>{"private static void SetFullLogFolderPath()"}</code> | <span className="api-desc">Sets `LogFolderPath` from the `logFolderPath` variable in the loaded NLog config.</span> |
| <Link id="m-setupforandroid" /><code>{"private static void SetupForAndroid()"}</code> | <span className="api-desc">Builds an NLog config in code for Android with Unity console and CSV file targets. Not called in this file.</span> |
| <Link id="m-setupforstandalone" /><code>{"private static void SetupForStandalone()"}</code> | <span className="api-desc">Loads NLog config from the settings path or StreamingAssets/NLog.config, and hooks Unity's threaded log messages.</span> |
| <Link id="m-setuphostname" /><code>{"private static void SetupHostname()"}</code> | <span className="api-desc">Sets the `server_name` and `hostname` NLog context values from the HOSTNAME variable, or agones-server.</span> |
| <Link id="m-shutdownnlog" /><code>{"private static void ShutdownNLog()"}</code> | <span className="api-desc">Flushes and shuts down NLog. Runs last on application quit.</span> |
| <Link id="m-unhandledunitylog" /><code>{"private static void UnhandledUnityLog(string condition, string stackTrace, LogType type)"}</code> | <span className="api-desc">Forwards Unity log messages to NLog: exceptions to the UnhandledExceptions logger, everything else as warnings to Unhandled.</span> |

</details>
