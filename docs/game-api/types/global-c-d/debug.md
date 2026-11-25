---
title: "Debug"
description: "static class Debug in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Debug

A **static class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Attributes** `ApplicationShutdownOrder`
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state), [Connection messages](/game-api/networking/messages)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logconfigpath" /><code>{"static string LogConfigPath"}</code> |  |
| <Link id="m-commandlinepath" /><code>{"private static string commandLinePath"}</code> |  |
| <Link id="m-defaultunitylogger" /><code>{"private static ILogHandler defaultUnityLogger"}</code> |  |
| <Link id="m-issetup" /><code>{"private static bool isSetup"}</code> |  |
| <Link id="m-logbasepath" /><code>{"private static string logBasePath"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-unhandledexceptionslogger" /><code>{"private static readonly Logger unhandledExceptionsLogger"}</code> |  |
| <Link id="m-unhandledlogger" /><code>{"private static readonly Logger unhandledLogger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdebugbuild" /><code>{"static bool isDebugBuild { get; }"}</code> |  |
| <Link id="m-logfolderpath" /><code>{"static string LogFolderPath { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assert" /><code>{"static void Assert(bool condition, string errorMessage = \"Assert Failed\", Object context = null)"}</code> |  |
| <Link id="m-break" /><code>{"static void Break()"}</code> |  |
| <Link id="m-drawline" /><code>{"static void DrawLine(Vector3 start, Vector3 end, Color color)"}</code> |  |
| <Link id="m-log" /><code>{"static void Log(object message, Object context = null)"}</code> |  |
| <Link id="m-logerror" /><code>{"static void LogError(object message, Object context = null)"}</code> |  |
| <Link id="m-logerrorformat" /><code>{"static void LogErrorFormat(string format, params object[] args)"}</code> |  |
| <Link id="m-logexception" /><code>{"static void LogException(Exception exception, Object context = null)"}</code> |  |
| <Link id="m-logformat" /><code>{"static void LogFormat(string format, params object[] args)"}</code> |  |
| <Link id="m-logwarning" /><code>{"static void LogWarning(object message, Object context = null)"}</code> |  |
| <Link id="m-logwarningformat" /><code>{"static void LogWarningFormat(string format, params object[] args)"}</code> |  |
| <Link id="m-setuplogging" /><code>{"static void SetupLogging()"}</code> |  |
| <Link id="m-updatelogfolderpath" /><code>{"static void UpdateLogFolderPath(string newLogFolder)"}</code> |  |
| <Link id="m-addcsvtargetwithname" /><code>{"private static void AddCsvTargetWithName(LoggingConfiguration config, CsvLayout csvLayout, string name)"}</code> |  |
| <Link id="m-addcustomtarget" /><code>{"private static void AddCustomTarget(LoggingConfiguration config, string fileName, params string[] fields)"}</code> |  |
| <Link id="m-addcustomtargetsandrenderers" /><code>{"private static void AddCustomTargetsAndRenderers()"}</code> |  |
| <Link id="m-adderrortarget" /><code>{"private static void AddErrorTarget(LoggingConfiguration config)"}</code> |  |
| <Link id="m-addsimpletarget" /><code>{"private static void AddSimpleTarget(LoggingConfiguration config, string fileName)"}</code> |  |
| <Link id="m-addsupersimpletarget" /><code>{"private static void AddSuperSimpleTarget(LoggingConfiguration config, string fileName)"}</code> |  |
| <Link id="m-getlogfolderpath" /><code>{"private static string GetLogFolderPath()"}</code> |  |
| <Link id="m-getlogsettingspath" /><code>{"private static string GetLogSettingsPath()"}</code> |  |
| <Link id="m-loadconfiguration" /><code>{"private static void LoadConfiguration()"}</code> |  |
| <Link id="m-logmanagerconfigurationreloaded" /><code>{"private static void LogManagerConfigurationReloaded(object sender, LoggingConfigurationReloadedEventArgs e)"}</code> |  |
| <Link id="m-setfulllogfolderpath" /><code>{"private static void SetFullLogFolderPath()"}</code> |  |
| <Link id="m-setupforandroid" /><code>{"private static void SetupForAndroid()"}</code> |  |
| <Link id="m-setupforstandalone" /><code>{"private static void SetupForStandalone()"}</code> |  |
| <Link id="m-setuphostname" /><code>{"private static void SetupHostname()"}</code> |  |
| <Link id="m-shutdownnlog" /><code>{"private static void ShutdownNLog()"}</code> |  |
| <Link id="m-unhandledunitylog" /><code>{"private static void UnhandledUnityLog(string condition, string stackTrace, LogType type)"}</code> |  |
