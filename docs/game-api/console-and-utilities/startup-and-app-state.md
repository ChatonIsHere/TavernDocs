---
title: Startup and app state
description: CommandLineArguments and every flag the game reads, ApplicationManager and headless detection, startup, AltaSceneManager, player mode, XR and platform checks.
sidebar_position: 10
---

# Startup and app state

How the game reads its command line, decides what kind of process it is, starts up, loads scenes and shuts down. Both sides unless a row says otherwise.

## CommandLineArguments

`CommandLineArguments` in `Alta.CommandLine` (no namespace, static). Reads `Environment.GetCommandLineArgs()` once, on first use.

| Member | What it does | Notes |
| --- | --- | --- |
| `static bool Contains(string argument)` | The argument is on the command line. | Ignores case. |
| `static bool TryGetNextArguments(string argument, int numberOfArgumentsExpected, out string[] nextArguments, bool isOptionalArgs = false)` | Finds the argument and gives you the next N words. | Values come back as typed. With too few words it returns `isOptionalArgs` and an empty array, and logs at Info. |
| `static List<string> AllArguments { get; }` | Every word, lower case, the program path first. | Null until something has called `Contains` or `TryGetNextArguments`. |
| `static string RawCommandLine { get; }` | The command line without the program path. | |
| constants such as `StartServerArgument` (`/start_server`), `ConsoleArgument` (`/console`), `BatchmodeArgument` (`-batchmode`) | The flag names. | |

Matching lower-cases everything, and the original spelling of each word is kept in a dictionary keyed by its lower-case form. Two words that differ only by case (`/x Abc /y abc`) share one entry, so both come back as the last one's spelling. Nothing checks that a value isn't another flag: `/hello_port /console` gives `/console` as the port.

### Your own flags

```csharp
public static int Port { get; private set; } = 8080;

public static void Read()
{
    // Matching ignores case; the value comes back as typed.
    if (CommandLineArguments.TryGetNextArguments("/hello_port", 1, out string[] values) && int.TryParse(values[0], out int port))
        Port = port;

    bool verbose = CommandLineArguments.Contains("/hello_verbose");
    MelonLogger.Msg($"Port {Port}, verbose {verbose}, headless {ApplicationManager.IsHeadless}");
}
```

Prefix your flags with your mod's name. Unity and MelonLoader read the same command line and ignore what they don't know.

### Flags the game reads

From the decompiled server build, which Tavern installs. [Command-line flags](../networking/command-line.md) in the Networking area covers the same flags from the server's side, plus the ones TavernLib adds and the Docker image's server line. The launchers start a server with something like `/force_offline /access_token <a> /refresh_token <r> /identity_token <i> -batchmode -nographics /fly /start_server -1 false <port> -logFile <file>`.

| Flag | Read by | What it does |
| --- | --- | --- |
| `-batchmode`, `-nographics` | `ApplicationManager.IsHeadless` | Either one makes the process headless. These are Unity's own flags too. |
| `/start_server <serverId> <isHeadless> <port>` | `ApplicationStartupManager.RunStartupActions` (server build) | After login, starts a server and skips the join and menu steps. `-1` is the local game server (`MenuSettings.LocalGameServerAccess`, no web API); any other id is fetched from Alta's web API. Bad values log "Could not parse ..." and nothing starts. The original client download doesn't read it. |
| `/join_server <id>` | `ApplicationStartupManager` | Joins that server after login. |
| `/console` | `ServerConsoleManager` | Opens the local console window (needs `debug_features`). |
| `-logFile <file>` | `Debug` | Unity's log file; the game also puts its `logs` folder next to it. |
| `/logging_config_path <file>` | `Debug` | Another `NLog.config`. |
| `/login <user> <password>`, `/login_hash <user> <hash>` | `AuthenticationUtility` | Logs in to Alta. Dead. |
| `/access_token <t> /refresh_token <t> /identity_token <t>` | `AuthenticationUtility`, `ApplicationStartupManager` | Logs in with these tokens without asking the API. This is how TavernLib's launchers log the game in. |
| `/oauth_login <id> <secret> <scopes>` | `AuthenticationUtility` | OAuth login to Alta. Dead. |
| `/force_offline` | `ApiAccess` | Uses the offline API client, if a matching offline token is stored. |
| `/ignore_offline` | `ApiAccess` | Skips the internet check that would otherwise choose offline mode. |
| `/development_api`, `/local_api`, `/latest_api`, `/test_api`, `/custom_api <url>` | `ApiAccess` | Picks the web API's address. See [Alta's web API](alta-web-api.md). |
| `/fly` | `PlayerModeUtilities`, `XRUtility` | No VR: the player mode becomes `Fly`. |
| `-vrmode <mode>`, `/vrmode <mode>` | `XRUtility` | `valve` or `openvr` picks OpenVR; anything else stays OpenXR and logs a warning. |
| `/app_data_path <folder>` | `AltaIO` | Moves `%APPDATA%\A Township Tale`. See [Settings and files](settings-and-files.md#altaio). |
| `/remote_saves <type> <path>`, `/s3_credentials <key> <secret>` | `AltaIO` | Saves in another folder or an S3 bucket. |
| `/mods_path <folder>` | `DemoLoadScripts` | The folder for the game's own C# script mods (not MelonLoader). |
| `/heartbeat <program> <ms>` | `ServerHeartbeat` | Starts a watchdog program with the server's name, process id and command line. |
| `/vivox_sandbox` | `VivoxUtility` | Vivox's test servers. Voice is dead. |
| `/agones`, `/source <name>` | `ApplicationStartupManager` | Launch analytics. `/agones` (Alta's hosting) skips the game-launched event; `/source` names where the launch came from. |

Read only in the server build: `/wipe` (wipes the world as soon as the server has started, through `ServerHandler.WipeServer`, which ends by quitting) and `/db_settings` (reads and writes server settings through Alta's web API `SettingsClient`, keyed by the server id, instead of `ServerConfiguration.json`; dead). Defined but never read in either build: `/listen_to_api`, `/autocam`, `/remote_console`, `/version`, `/spot_instance`, `/skip-tests` and `/hosting_platform`.

## Server or client

There are several tests and they don't mean the same thing.

| Test | True when |
| --- | --- |
| `ServerHandler.Current != null` | A server is running in this process. The usual check, and what `[ServerOnly]` uses. False during startup. Also true on a client in the main menu, where `LocalNetworkScene` makes a dummy one (`ServerHandler.Current.IsDummyLocalServer` is true). |
| `NetworkSceneManager.IsServer` | This process hosts the current scene. Also true in a client's main menu. See [Which side am I on?](../networking/overview.md#which-side-am-i-on) in the Networking area. |
| `CommandLineArguments.Contains("/start_server")` | The process was started as a server. True from the first line of your mod. |
| `ApplicationManager.IsHeadless` | No window (`-batchmode` or `-nographics`). Servers usually are, but a headless client is possible (Rover's bots). |
| `PlatformProvider.IsServer()` | **Running on Linux.** Nothing else. A Windows server is a client by this test. Don't use it. |

```csharp
// Don't use PlatformProvider.IsServer(): it only means "running on Linux".
public static bool IsServerProcess => CommandLineArguments.Contains("/start_server");

// The main menu's dummy server doesn't count.
public static bool IsServerRunning => Alta.Networking.Servers.ServerHandler.Current is { IsDummyLocalServer: false };
```

## ApplicationManager

`ApplicationManager : SingletonBehaviour<ApplicationManager>` in `Root.Township` (no namespace). Most members are static. (There's an unrelated `Discord.ApplicationManager` too.)

| Member | What it is | Notes |
| --- | --- | --- |
| `static bool IsHeadless { get; }` | `-batchmode` or `-nographics` is on the command line. | Read once and cached. |
| `static bool IsQuitting { get; }` | Shutdown has started. | |
| `static bool IsReloading { get; }` | A scene reload is in progress. | |
| `static bool IsApplicationPaused` | Unity paused the app (`OnApplicationPause`). | Public field. |
| `static bool ShouldRestartAfterShutdown` | Skips stopping the heartbeat watchdog on quit. | Public field. |
| `static event Action ApplicationQuit` | Runs once, during shutdown. | See below. |
| `static event Action GameReload` | `StartReload()` was called. | |
| `static event Action<bool> ApplicationPaused` | Unity's pause changed. | |
| `static void ExternalOnApplicationQuit(ShutdownReason reason)` | Asks for a clean shutdown on the next `Update`. | Safe from any thread: it only sets flags. |
| `void OnApplicationQuit()` | The shutdown itself. | Unity calls it too. |
| `static Task CleanMemory()` | Unloads unused assets, then a full GC. | |
| `static string FilteredCommandLine()` | The command line with tokens and passwords blanked. | Use it if you log the command line. |

Its `Start` sets `Application.runInBackground = true` and `Application.targetFrameRate = 90`. A server that should run faster or slower needs to set the frame rate after that.

### Shutting down

`OnApplicationQuit` runs once. It stops the current game mode (and waits for it), stops the heartbeat, saves `PlayerPreferences`, then calls every `ApplicationQuit` handler, then finishes all pending file writes (`AltaFile.FinishAllWriting`) and quits.

Handlers are sorted by `[ApplicationShutdownOrder(int)]` on the class that declares the handler method, lowest first; no attribute counts as 0. `ServerLifetimePipeline` is 1, `LoginManager` 50 and `Debug` (which shuts NLog down) `int.MaxValue`. A lambda's method is declared on a compiler-made class, so a lambda always counts as 0.

```csharp
public static void Hook()
{
    ApplicationManager.ApplicationQuit += Flush;
}

private static void Flush()
{
    try
    {
        // save your mod's state
    }
    catch (Exception e)
    {
        // An exception here stops the game's remaining shutdown handlers.
        MelonLogger.Error(e);
    }
}
```

:::warning
Handlers are called with `DynamicInvoke` and nothing catches their exceptions. One that throws stops the rest of the handlers and the final file writes, so saves can be lost. Always catch in yours.
:::

## ApplicationStartupManager

`ApplicationStartupManager : MonoBehaviour` in `Root.Township`. Runs once at launch.

- `Start` checks for internet on anything but Linux, Windows servers included (a request to `clients3.google.com/generate_204`), and shows the "No Internet" scene without it. TavernLib's postfix on `ApiAccess.IsConnectedToInternetInternal` always answers true.
- It checks the version with `IValidVersionService`, posts a launch analytics event, and after login runs `RunStartupActions`: start the `/start_server` server (server build), else join `/join_server`'s server, else follow an Oculus deep link, else load the main menu (not when headless). Called with `checksTutorial: true`, it tries the tutorial server before the deep link.
- `static event Action Started`, `static bool IsSkippingMenu`, `static void DisableRegularStartupActions()`.

TavernLib prefixes `RunStartupActions`.

## AltaSceneManager

`AltaSceneManager` in `Root.Township` (no namespace, static). Every scene is loaded additively. Main thread; the async methods poll with `Task.Delay` and continue on the main thread.

| Member | What it does |
| --- | --- |
| `static Task LoadMainMenuSceneAsync()` | Loads the main menu. |
| `static Task LoadGameScene(int sceneIndex)` | Unloads the menu, shows a loading scene, loads the game scene (index into `MenuSettings.GameScenes`), activates it and sets `NetworkSceneManager.Current` to its `NetworkScene`. |
| `static Task ReturnToMainMenuAsync()` | Unloads the game scene and loads the menu. |
| `static Task UnloadGameSceneAsync()` | Unloads the game scene. |
| `static Task<bool> LoadTutorialAsync()`, `static void LoadNoInternetScene()`, `static Task LoadRegistrationSceneAsync()`, `static Task CreateLoadingScene()` | The other scene changes. |
| `static bool IsLoading { get; }`, `static float LoadProgress { get; }` | Load state. |

`LoadGameScene`, `LoadMainMenuSceneAsync`, `ReturnToMainMenuAsync` and `LoadTutorialAsync` refuse while another load is running, or after the no-internet scene: they log an error and return. MelonLoader's `OnSceneWasLoaded` fires for each additive scene, loading scenes included, so check the scene's name.

## Player mode and XR

`PlayerModeUtilities` (`Root.Township`, static) decides how the local player is controlled:

| Member | What it is |
| --- | --- |
| `static PlayerMode PlayerMode { get; }` | The mode. Worked out once: `OverrideMode` if set, else `Fly` with `/fly`, else from `XRUtility.GetCommandXRMode()` on Windows (OpenXR, OpenVR, or `Fly` for no VR). |
| `static PlayerMode OverrideMode { get; set; }` | Set it before anything reads `PlayerMode` to force a mode. Rover sets `OpenVR` in MelonLoader's pre-initialisation. |
| `static bool IsNormalPlayerMode(PlayerMode)` | False for `Fly` and `AutoCam`, the modes the game won't save in. |

`PlayerMode` (in `Alta.Platform`) is a flags enum: `Fly` 1, `AutoCam` 2, `OpenVR` 4, `Oculus` 8, `OpenXR` 0x1C, `MetaQuest` 0x28, `PicoXR` 0x40. `OpenXR` includes the `OpenVR` and `Oculus` bits, so `mode.HasFlag(PlayerMode.OpenVR)` is true in OpenXR. Compare with `==`.

`XRUtility.GetCommandXRMode()` (`Alta.XRManagement`, static) reads `/fly` and `-vrmode` and returns a `TownshipXRMode`: `OpenXR` (the default), `Valve` or `NoVR`. `WindowsXRLoaderInitializer` loads no XR runtime at all for `NoVR`. Rover prefixes `GetCommandXRMode` to return `NoVR`.

`PlatformProvider` (`Alta.PlatformInformation`, static): `IsWindows()`, `IsLinux()`, `IsAndroid()`, `IsQuest()`, `IsPico()`, `PlatformName`, `PlatformFlags`, and `SetClientRuntimeOverride(PlatformFlags)` to pretend to be another platform. On PC the answer is `Windows` for everything that isn't `LinuxPlayer`. Its `IsServer()` and `IsClient()` only test for Linux (above).

## ServerUtilities

`ServerUtilities` in `Root.Township` (no namespace).

| Member | What it does | Notes |
| --- | --- | --- |
| `static Task<IPAddress> GetPublicIPAddress()` | Asks Alta's web API for this machine's public address, once, and caches it. | Waits for the API to time out (about a minute, measured by Rover), then answers `0.0.0.0`. A local server (`/start_server -1`) awaits it while starting, so the start waits too. TavernEssentials, Steady and Rover answer at once. |
| `static string GetIpAddress(string serverIp)` | Turns shortcuts into addresses for `game join-ip`. | `local` is `127.0.0.1`; some Alta developers' first names and initials, and any number under 10, become `192.168.0.x`. |
| `static IPAddress GetLocalIPv4()` | The first IPv4 address of this machine's host name. | |
| `static bool ValidateIPv4(string)` | Four dot-separated bytes. | |
| `IEnumerator GetPing(string ipAddress, Action<int> pingReceivedCallback)` | A coroutine that pings for up to five seconds. | Instance method. |

## See also

- [Logging](logging.md) for `-logFile` and `/logging_config_path`.
- [Alta's web API](alta-web-api.md) for what the API flags pick.
- [Client, server or both](../../mod/tavernlib/client-server-or-both.md).
