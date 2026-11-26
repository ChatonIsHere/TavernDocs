---
title: "CommandLineArguments"
description: "Static access to the game's command line."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandLineArguments

A **static class** in `Alta.CommandLine`, the global namespace.

Static access to the game's command line. Matching is case-insensitive, and the constants name the flags the game reads.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Documented in** [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state#commandlinearguments)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accesstokenargument" /><code>{"const string AccessTokenArgument"}</code> | <span className="api-desc">`/access_token`: login access token passed by the launcher. Also marks the launch source as Launcher.</span> |
| <Link id="m-agonesargument" /><code>{"const string AgonesArgument"}</code> | <span className="api-desc">`/agones`: marks an Agones-hosted server. Skips the launch analytics event.</span> |
| <Link id="m-appdatapathargument" /><code>{"const string AppDataPathArgument"}</code> | <span className="api-desc">`/app_data_path`: base folder for game data instead of the default A Township Tale folder in AppData.</span> |
| <Link id="m-autocamargument" /><code>{"const string AutocamArgument"}</code> | <span className="api-desc">`/autocam` flag name. Not read anywhere in this build.</span> |
| <Link id="m-batchmodeargument" /><code>{"const string BatchmodeArgument"}</code> | <span className="api-desc">Unity's `-batchmode`. Makes `ApplicationManager.IsHeadless` true.</span> |
| <Link id="m-consoleargument" /><code>{"const string ConsoleArgument"}</code> | <span className="api-desc">`/console`: opens the in-game console on start for users with `debug_features`.</span> |
| <Link id="m-customendpointargument" /><code>{"const string CustomEndpointArgument"}</code> | <span className="api-desc">`/custom_api`: use the next argument as the web API URL.</span> |
| <Link id="m-databasesettingsargument" /><code>{"const string DatabaseSettingsArgument"}</code> | <span className="api-desc">`/db_settings`: server loads its config by server id instead of from the save folder.</span> |
| <Link id="m-developmentapiendpointargument" /><code>{"const string DevelopmentApiEndpointArgument"}</code> | <span className="api-desc">`/development_api`: use the development web API.</span> |
| <Link id="m-flyargument" /><code>{"const string FlyArgument"}</code> | <span className="api-desc">`/fly`: run without VR.</span> |
| <Link id="m-forceofflinemode" /><code>{"const string ForceOfflineMode"}</code> | <span className="api-desc">`/force_offline`: always start the offline API client.</span> |
| <Link id="m-headlessserverlogfilename" /><code>{"const string HeadlessServerLogFileName"}</code> | <span className="api-desc">Suffix of the headless server's log file name.</span> |
| <Link id="m-heartbeatargument" /><code>{"const string HeartbeatArgument"}</code> | <span className="api-desc">`/heartbeat`: server sends heartbeats.</span> |
| <Link id="m-hostingplatform" /><code>{"const string HostingPlatform"}</code> | <span className="api-desc">`/hosting_platform` flag name. Not read anywhere in this build.</span> |
| <Link id="m-identitytokenargument" /><code>{"const string IdentityTokenArgument"}</code> | <span className="api-desc">`/identity_token`: login identity token passed by the launcher.</span> |
| <Link id="m-ignoreofflinemode" /><code>{"const string IgnoreOfflineMode"}</code> | <span className="api-desc">`/ignore_offline`: don't fall back to offline mode when there's no internet.</span> |
| <Link id="m-joinserverargument" /><code>{"const string JoinServerArgument"}</code> | <span className="api-desc">`/join_server`: join the server with the next argument as its id after login.</span> |
| <Link id="m-latestapiendpointargument" /><code>{"const string LatestApiEndpointArgument"}</code> | <span className="api-desc">`/latest_api`: use the latest web API stage.</span> |
| <Link id="m-launchsourceargument" /><code>{"const string LaunchSourceArgument"}</code> | <span className="api-desc">`/source`: launch source sent with the GameLaunch analytics event.</span> |
| <Link id="m-listentoapiargument" /><code>{"const string ListenToApiArgument"}</code> | <span className="api-desc">`/listen_to_api` flag name. Not read anywhere in this build.</span> |
| <Link id="m-localapiendpointargument" /><code>{"const string LocalApiEndpointArgument"}</code> | <span className="api-desc">`/local_api`: use a web API on localhost:13490.</span> |
| <Link id="m-logfileargument" /><code>{"const string LogFileArgument"}</code> | <span className="api-desc">Unity's `-logFile`, read when setting up logging.</span> |
| <Link id="m-loggingconfigpathargument" /><code>{"const string LoggingConfigPathArgument"}</code> | <span className="api-desc">`/logging_config_path`: path to the NLog config file to use.</span> |
| <Link id="m-loginargument" /><code>{"const string LoginArgument"}</code> | <span className="api-desc">`/login`: log in with the next two arguments.</span> |
| <Link id="m-loginwithhashargument" /><code>{"const string LoginWithHashArgument"}</code> | <span className="api-desc">`/login_hash`: log in with a username and password hash.</span> |
| <Link id="m-modspathargument" /><code>{"const string ModsPathArgument"}</code> | <span className="api-desc">`/mods_path`: folder to load mod scripts from.</span> |
| <Link id="m-nographicsargument" /><code>{"const string NoGraphicsArgument"}</code> | <span className="api-desc">Unity's `-nographics`. Makes `ApplicationManager.IsHeadless` true.</span> |
| <Link id="m-oauthloginargument" /><code>{"const string OauthLoginArgument"}</code> | <span className="api-desc">`/oauth_login`: OAuth login with the next three arguments.</span> |
| <Link id="m-refreshtokenargument" /><code>{"const string RefreshTokenArgument"}</code> | <span className="api-desc">`/refresh_token`: login refresh token passed by the launcher.</span> |
| <Link id="m-remoteconsoleargument" /><code>{"const string RemoteConsoleArgument"}</code> | <span className="api-desc">`/remote_console` flag name. Not read anywhere in this build.</span> |
| <Link id="m-remotesavesargument" /><code>{"const string RemoteSavesArgument"}</code> | <span className="api-desc">`/remote_saves`: store saves remotely (type gcs or s3, then the location).</span> |
| <Link id="m-s3credentialsargument" /><code>{"const string S3CredentialsArgument"}</code> | <span className="api-desc">`/s3_credentials`: access and secret key for S3 remote saves.</span> |
| <Link id="m-skiptestsargument" /><code>{"const string SkipTestsArgument"}</code> | <span className="api-desc">`/skip-tests` flag name. Not read anywhere in this build.</span> |
| <Link id="m-spotinstanceargument" /><code>{"const string SpotInstanceArgument"}</code> | <span className="api-desc">`/spot_instance` flag name. Not read anywhere in this build.</span> |
| <Link id="m-startserverargument" /><code>{"const string StartServerArgument"}</code> | <span className="api-desc">`/start_server`: start a server with id, headless flag and port.</span> |
| <Link id="m-testapiendpointargument" /><code>{"const string TestApiEndpointArgument"}</code> | <span className="api-desc">`/test_api`: use the test web API stage.</span> |
| <Link id="m-versionargument" /><code>{"const string VersionArgument"}</code> | <span className="api-desc">`/version` flag name. Not read anywhere in this build.</span> |
| <Link id="m-vivoxsandboxargument" /><code>{"const string VivoxSandboxArgument"}</code> | <span className="api-desc">`/vivox_sandbox`: use the Vivox sandbox for voice.</span> |
| <Link id="m-vrmodekey" /><code>{"const string VrModeKey"}</code> | <span className="api-desc">`-vrmode`: picks the XR mode from the next argument.</span> |
| <Link id="m-vrmodekeyalt" /><code>{"const string VrModeKeyAlt"}</code> | <span className="api-desc">`/vrmode`: same as `-vrmode`.</span> |
| <Link id="m-wipeargument" /><code>{"const string WipeArgument"}</code> | <span className="api-desc">`/wipe`: server wipes its world once it has started.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"private static List<string> arguments"}</code> | <span className="api-desc">Backing field for `AllArguments`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-originalarguments" /><code>{"private static Dictionary<string, string> originalArguments"}</code> | <span className="api-desc">Map from lowercased argument to its original text.</span> |
| <Link id="m-rawcommandline" /><code>{"private static string rawCommandLine"}</code> | <span className="api-desc">Backing field for `RawCommandLine`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allarguments" /><code>{"static List<string> AllArguments { get; }"}</code> | <span className="api-desc">All arguments, lowercased. Null until something has called `Contains` or `TryGetNextArguments`.</span> |
| <Link id="m-rawcommandline-2" /><code>{"static string RawCommandLine { get; }"}</code> | <span className="api-desc">The full command line with the executable path removed. Cached after first use.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"static bool Contains(string argument)"}</code> | <span className="api-desc">True if the given flag is on the command line, ignoring case.</span> |
| <Link id="m-trygetnextarguments" /><code>{"static bool TryGetNextArguments(string argument, int numberOfArgumentsExpected, out string[] nextArguments, bool isOptionalArgs = false)"}</code> | <span className="api-desc">Gets the given number of arguments after a flag, with their original case. Returns `isOptionalArgs` if there aren't enough.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkinitialized" /><code>{"private static void CheckInitialized()"}</code> | <span className="api-desc">Reads the command line on first use, storing lowercased arguments and a map back to the original text.</span> |
| <Link id="m-parsearguments" /><code>{"private static IEnumerable<string> ParseArguments(string commandLine)"}</code> | <span className="api-desc">Splits a command line string on spaces outside quotes and strips the quotes. Not called in this file.</span> |

</details>
