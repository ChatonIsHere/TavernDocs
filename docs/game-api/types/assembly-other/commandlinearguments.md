---
title: "CommandLineArguments"
description: "Static access to the game's command line."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandLineArguments

A **static class** in `Alta.CommandLine`, no namespace.

Static access to the game's command line. Matching is case-insensitive, and the constants name the flags the game reads.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state#commandlinearguments)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accesstokenargument" /><code>{"const string AccessTokenArgument"}</code> | `/access_token`: login access token passed by the launcher. Also marks the launch source as Launcher. |
| <Link id="m-agonesargument" /><code>{"const string AgonesArgument"}</code> | `/agones`: marks an Agones-hosted server. Skips the launch analytics event. |
| <Link id="m-appdatapathargument" /><code>{"const string AppDataPathArgument"}</code> | `/app_data_path`: base folder for game data instead of the default A Township Tale folder in AppData. |
| <Link id="m-autocamargument" /><code>{"const string AutocamArgument"}</code> | `/autocam` flag name. Not read anywhere in this build. |
| <Link id="m-batchmodeargument" /><code>{"const string BatchmodeArgument"}</code> | Unity's `-batchmode`. Makes `ApplicationManager.IsHeadless` true. |
| <Link id="m-consoleargument" /><code>{"const string ConsoleArgument"}</code> | `/console`: opens the in-game console on start for users with `debug_features`. |
| <Link id="m-customendpointargument" /><code>{"const string CustomEndpointArgument"}</code> | `/custom_api`: use the next argument as the web API URL. |
| <Link id="m-databasesettingsargument" /><code>{"const string DatabaseSettingsArgument"}</code> | `/db_settings`: server loads its config by server id instead of from the save folder. |
| <Link id="m-developmentapiendpointargument" /><code>{"const string DevelopmentApiEndpointArgument"}</code> | `/development_api`: use the development web API. |
| <Link id="m-flyargument" /><code>{"const string FlyArgument"}</code> | `/fly`: run without VR. |
| <Link id="m-forceofflinemode" /><code>{"const string ForceOfflineMode"}</code> | `/force_offline`: always start the offline API client. |
| <Link id="m-headlessserverlogfilename" /><code>{"const string HeadlessServerLogFileName"}</code> | Suffix of the headless server's log file name. |
| <Link id="m-heartbeatargument" /><code>{"const string HeartbeatArgument"}</code> | `/heartbeat`: server sends heartbeats. |
| <Link id="m-hostingplatform" /><code>{"const string HostingPlatform"}</code> | `/hosting_platform` flag name. Not read anywhere in this build. |
| <Link id="m-identitytokenargument" /><code>{"const string IdentityTokenArgument"}</code> | `/identity_token`: login identity token passed by the launcher. |
| <Link id="m-ignoreofflinemode" /><code>{"const string IgnoreOfflineMode"}</code> | `/ignore_offline`: don't fall back to offline mode when there's no internet. |
| <Link id="m-joinserverargument" /><code>{"const string JoinServerArgument"}</code> | `/join_server`: join the server with the next argument as its id after login. |
| <Link id="m-latestapiendpointargument" /><code>{"const string LatestApiEndpointArgument"}</code> | `/latest_api`: use the latest web API stage. |
| <Link id="m-launchsourceargument" /><code>{"const string LaunchSourceArgument"}</code> | `/source`: launch source sent with the GameLaunch analytics event. |
| <Link id="m-listentoapiargument" /><code>{"const string ListenToApiArgument"}</code> | `/listen_to_api` flag name. Not read anywhere in this build. |
| <Link id="m-localapiendpointargument" /><code>{"const string LocalApiEndpointArgument"}</code> | `/local_api`: use a web API on localhost:13490. |
| <Link id="m-logfileargument" /><code>{"const string LogFileArgument"}</code> | Unity's `-logFile`, read when setting up logging. |
| <Link id="m-loggingconfigpathargument" /><code>{"const string LoggingConfigPathArgument"}</code> | `/logging_config_path`: path to the NLog config file to use. |
| <Link id="m-loginargument" /><code>{"const string LoginArgument"}</code> | `/login`: log in with the next two arguments. |
| <Link id="m-loginwithhashargument" /><code>{"const string LoginWithHashArgument"}</code> | `/login_hash`: log in with a username and password hash. |
| <Link id="m-modspathargument" /><code>{"const string ModsPathArgument"}</code> | `/mods_path`: folder to load mod scripts from. |
| <Link id="m-nographicsargument" /><code>{"const string NoGraphicsArgument"}</code> | Unity's `-nographics`. Makes `ApplicationManager.IsHeadless` true. |
| <Link id="m-oauthloginargument" /><code>{"const string OauthLoginArgument"}</code> | `/oauth_login`: OAuth login with the next three arguments. |
| <Link id="m-refreshtokenargument" /><code>{"const string RefreshTokenArgument"}</code> | `/refresh_token`: login refresh token passed by the launcher. |
| <Link id="m-remoteconsoleargument" /><code>{"const string RemoteConsoleArgument"}</code> | `/remote_console` flag name. Not read anywhere in this build. |
| <Link id="m-remotesavesargument" /><code>{"const string RemoteSavesArgument"}</code> | `/remote_saves`: store saves remotely (type gcs or s3, then the location). |
| <Link id="m-s3credentialsargument" /><code>{"const string S3CredentialsArgument"}</code> | `/s3_credentials`: access and secret key for S3 remote saves. |
| <Link id="m-skiptestsargument" /><code>{"const string SkipTestsArgument"}</code> | `/skip-tests` flag name. Not read anywhere in this build. |
| <Link id="m-spotinstanceargument" /><code>{"const string SpotInstanceArgument"}</code> | `/spot_instance` flag name. Not read anywhere in this build. |
| <Link id="m-startserverargument" /><code>{"const string StartServerArgument"}</code> | `/start_server`: start a server with id, headless flag and port. |
| <Link id="m-testapiendpointargument" /><code>{"const string TestApiEndpointArgument"}</code> | `/test_api`: use the test web API stage. |
| <Link id="m-versionargument" /><code>{"const string VersionArgument"}</code> | `/version` flag name. Not read anywhere in this build. |
| <Link id="m-vivoxsandboxargument" /><code>{"const string VivoxSandboxArgument"}</code> | `/vivox_sandbox`: use the Vivox sandbox for voice. |
| <Link id="m-vrmodekey" /><code>{"const string VrModeKey"}</code> | `-vrmode`: picks the XR mode from the next argument. |
| <Link id="m-vrmodekeyalt" /><code>{"const string VrModeKeyAlt"}</code> | `/vrmode`: same as `-vrmode`. |
| <Link id="m-wipeargument" /><code>{"const string WipeArgument"}</code> | `/wipe`: server wipes its world once it has started. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"private static List<string> arguments"}</code> | Backing field for `AllArguments`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-originalarguments" /><code>{"private static Dictionary<string, string> originalArguments"}</code> | Map from lowercased argument to its original text. |
| <Link id="m-rawcommandline" /><code>{"private static string rawCommandLine"}</code> | Backing field for `RawCommandLine`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allarguments" /><code>{"static List<string> AllArguments { get; }"}</code> | All arguments, lowercased. Null until something has called `Contains` or `TryGetNextArguments`. |
| <Link id="m-rawcommandline-2" /><code>{"static string RawCommandLine { get; }"}</code> | The full command line with the executable path removed. Cached after first use. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"static bool Contains(string argument)"}</code> | True if the given flag is on the command line, ignoring case. |
| <Link id="m-trygetnextarguments" /><code>{"static bool TryGetNextArguments(string argument, int numberOfArgumentsExpected, out string[] nextArguments, bool isOptionalArgs = false)"}</code> | Gets the given number of arguments after a flag, with their original case. Returns `isOptionalArgs` if there aren't enough. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkinitialized" /><code>{"private static void CheckInitialized()"}</code> | Reads the command line on first use, storing lowercased arguments and a map back to the original text. |
| <Link id="m-parsearguments" /><code>{"private static IEnumerable<string> ParseArguments(string commandLine)"}</code> | Splits a command line string on spaces outside quotes and strips the quotes. Not called in this file. |

</details>
