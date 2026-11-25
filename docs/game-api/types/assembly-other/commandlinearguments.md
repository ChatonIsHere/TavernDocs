---
title: "CommandLineArguments"
description: "Reads Environment.GetCommandLineArgs() once, on first use."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandLineArguments

A **static class** in `Alta.CommandLine`, no namespace.

Reads `Environment.GetCommandLineArgs()` once, on first use.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state#commandlinearguments)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accesstokenargument" /><code>{"const string AccessTokenArgument"}</code> |  |
| <Link id="m-agonesargument" /><code>{"const string AgonesArgument"}</code> |  |
| <Link id="m-appdatapathargument" /><code>{"const string AppDataPathArgument"}</code> |  |
| <Link id="m-autocamargument" /><code>{"const string AutocamArgument"}</code> |  |
| <Link id="m-batchmodeargument" /><code>{"const string BatchmodeArgument"}</code> |  |
| <Link id="m-consoleargument" /><code>{"const string ConsoleArgument"}</code> |  |
| <Link id="m-customendpointargument" /><code>{"const string CustomEndpointArgument"}</code> |  |
| <Link id="m-databasesettingsargument" /><code>{"const string DatabaseSettingsArgument"}</code> |  |
| <Link id="m-developmentapiendpointargument" /><code>{"const string DevelopmentApiEndpointArgument"}</code> |  |
| <Link id="m-flyargument" /><code>{"const string FlyArgument"}</code> |  |
| <Link id="m-forceofflinemode" /><code>{"const string ForceOfflineMode"}</code> |  |
| <Link id="m-headlessserverlogfilename" /><code>{"const string HeadlessServerLogFileName"}</code> |  |
| <Link id="m-heartbeatargument" /><code>{"const string HeartbeatArgument"}</code> |  |
| <Link id="m-hostingplatform" /><code>{"const string HostingPlatform"}</code> |  |
| <Link id="m-identitytokenargument" /><code>{"const string IdentityTokenArgument"}</code> |  |
| <Link id="m-ignoreofflinemode" /><code>{"const string IgnoreOfflineMode"}</code> |  |
| <Link id="m-joinserverargument" /><code>{"const string JoinServerArgument"}</code> |  |
| <Link id="m-latestapiendpointargument" /><code>{"const string LatestApiEndpointArgument"}</code> |  |
| <Link id="m-launchsourceargument" /><code>{"const string LaunchSourceArgument"}</code> |  |
| <Link id="m-listentoapiargument" /><code>{"const string ListenToApiArgument"}</code> |  |
| <Link id="m-localapiendpointargument" /><code>{"const string LocalApiEndpointArgument"}</code> |  |
| <Link id="m-logfileargument" /><code>{"const string LogFileArgument"}</code> |  |
| <Link id="m-loggingconfigpathargument" /><code>{"const string LoggingConfigPathArgument"}</code> |  |
| <Link id="m-loginargument" /><code>{"const string LoginArgument"}</code> |  |
| <Link id="m-loginwithhashargument" /><code>{"const string LoginWithHashArgument"}</code> |  |
| <Link id="m-modspathargument" /><code>{"const string ModsPathArgument"}</code> |  |
| <Link id="m-nographicsargument" /><code>{"const string NoGraphicsArgument"}</code> |  |
| <Link id="m-oauthloginargument" /><code>{"const string OauthLoginArgument"}</code> |  |
| <Link id="m-refreshtokenargument" /><code>{"const string RefreshTokenArgument"}</code> |  |
| <Link id="m-remoteconsoleargument" /><code>{"const string RemoteConsoleArgument"}</code> |  |
| <Link id="m-remotesavesargument" /><code>{"const string RemoteSavesArgument"}</code> |  |
| <Link id="m-s3credentialsargument" /><code>{"const string S3CredentialsArgument"}</code> |  |
| <Link id="m-skiptestsargument" /><code>{"const string SkipTestsArgument"}</code> |  |
| <Link id="m-spotinstanceargument" /><code>{"const string SpotInstanceArgument"}</code> |  |
| <Link id="m-startserverargument" /><code>{"const string StartServerArgument"}</code> |  |
| <Link id="m-testapiendpointargument" /><code>{"const string TestApiEndpointArgument"}</code> |  |
| <Link id="m-versionargument" /><code>{"const string VersionArgument"}</code> |  |
| <Link id="m-vivoxsandboxargument" /><code>{"const string VivoxSandboxArgument"}</code> |  |
| <Link id="m-vrmodekey" /><code>{"const string VrModeKey"}</code> |  |
| <Link id="m-vrmodekeyalt" /><code>{"const string VrModeKeyAlt"}</code> |  |
| <Link id="m-wipeargument" /><code>{"const string WipeArgument"}</code> |  |
| <Link id="m-arguments" /><code>{"private static List<string> arguments"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-originalarguments" /><code>{"private static Dictionary<string, string> originalArguments"}</code> |  |
| <Link id="m-rawcommandline" /><code>{"private static string rawCommandLine"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allarguments" /><code>{"static List<string> AllArguments { get; }"}</code> |  |
| <Link id="m-rawcommandline-2" /><code>{"static string RawCommandLine { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"static bool Contains(string argument)"}</code> |  |
| <Link id="m-trygetnextarguments" /><code>{"static bool TryGetNextArguments(string argument, int numberOfArgumentsExpected, out string[] nextArguments, bool isOptionalArgs = false)"}</code> |  |
| <Link id="m-checkinitialized" /><code>{"private static void CheckInitialized()"}</code> |  |
| <Link id="m-parsearguments" /><code>{"private static IEnumerable<string> ParseArguments(string commandLine)"}</code> |  |
