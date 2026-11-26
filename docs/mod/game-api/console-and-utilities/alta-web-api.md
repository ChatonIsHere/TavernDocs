---
title: Alta's web API
description: Alta.Api.Client, the client for webapi.townshiptale.com that no longer answers. What calls it, how long a call takes to fail, and what TavernLib, TavernEssentials, Steady and Rover stub out.
sidebar_position: 13
---

# Alta's web API

`Alta.Api.Client` and `Alta.Api.DataTransferModels`, reached through `ApiAccess` in `Root.Township`. Both sides.

Alta ran a web API (`webapi.townshiptale.com`, `accounts.townshiptale.com` and Amazon `execute-api` endpoints in `ap-southeast-2`) for logins, server lists, permissions, friends, the shop, achievements, analytics and more. Those services are gone. The game still calls them, and each call waits until it times out unless a mod answers first.

## ApiAccess

`ApiAccess` in `Root.Township` (no namespace, static).

| Member | What it is | Notes |
| --- | --- | --- |
| `static IHighLevelApiClient ApiClient { get; }` | The game's API client. Made on first use. | Online, or the offline client (below). |
| `static void StartApiAccess()`, `StartWithEndpoint(string)`, `StartOffline(LoginCredentials)` | Make the client. | Each refuses (logs an error) if one already exists. |
| `static Task<bool> IsConnectedToInternet()` | Requests `http://clients3.google.com/generate_204`, twice if needed. | TavernLib forces the inner check to true. |
| `static bool TryGetLoginCredentials(out LoginCredentials)` | Reads the stored tokens from `PlayerPreferences`. | |

Which client and address it picks:

1. **Offline** if a stored `offline_token` matches the stored access token, and either `/force_offline` is given or there's no internet (unless `/ignore_offline`). That's `OfflineHighLevelApiClient`, with offline versions of most clients that answer locally.
2. Otherwise **online**, at `GameSettings.ApiEndpoint`'s address, or the one a flag picks: `/development_api` (`webapidev.townshiptale.com`), `/local_api` (`http://localhost:13490/`), `/latest_api`, `/test_api`, or `/custom_api <url>`.

`/custom_api` points every call at your own address. Nobody has written a replacement API, so in practice it only changes where the calls fail.

## IHighLevelApiClient

`Alta.Api.Client.HighLevel.IHighLevelApiClient`. One property per area, each its own client class:

`ServerClient`, `SocialClient`, `UserClient`, `ServicesClient`, `LauncherClient`, `ShopClient`, `VoiceClient`, `AchievementClient`, `SecurityClient`, `SettingsClient`, `Account`, `Groups`, `MatchMaking`, `Instances`, `Analytics`, `Oculus`, `Pico`, `FutureUserActions`, `PlayerReports`, `RecentPlayers`, plus `UserCredentials`, `LowLevel` (the `LowLevelApiClient` that does the HTTP), `IsLoggedIn` and the login methods.

Not every member makes a request:

- `UserClient.LoggedInUserInfo` and `UserCredentials` are just the current login. They're the most used members by far, and they work.
- `LoginWithTokens(access, refresh, identity)` builds the login from the tokens' claims without a request. That's how the game logs in from `/access_token`, and how TavernLib's launchers log it in. It then schedules a token refresh, which does make a request (`RefreshLoginAsync`).

## What still calls it

From the server build's call sites (the build Tavern installs). The ones marked "stubbed" are answered by a mod on a typical TavernLib setup.

| Call | Used by | What you see |
| --- | --- | --- |
| `ServicesClient.GetPublicIpAddressAsync` | `ServerUtilities.GetPublicIPAddress`, awaited by `ServerHandler` while a local server starts | About a minute's wait, then `0.0.0.0`. Stubbed by TavernEssentials, Steady and Rover. |
| `UserClient.RefreshLoginAsync` | The scheduled token refresh | Retries in the background. Stubbed by TavernEssentials and Steady. |
| `UserClient.GetUserInfoAsync` | `UserInfoAccess` (commands that take a user, offline levels, post boxes, ATM) | The command waits. TavernEssentials answers from the players on the server and TavernLib's accounts. |
| `UserClient` cosmetics presets | The character customiser | Stubbed by TavernLib. |
| `ShopClient` (account, configuration, purchases), `PurchasedList` | The shop and the character room | About a minute in the character room on a first join. TavernLib and TavernEssentials stub the rotation and validation. |
| `ServerClient.GetUserPermissionsForServer` | Websocket console login | Stubbed by TavernLib (answers `Console`). |
| `ServerClient.HasPermissionsInServer` | The wrist menu's server settings (`PermissionsHelper`), the social service and community analytics (owner checks) | Stubbed by TavernEssentials and Steady (no permission). TavernLib has its own role check for server settings. |
| `ServerClient` server lists, `GetServerAsync`, `JoinServer`; `Groups` | The main menu, `game` commands | Nothing useful. TavernEssentials' Board patches the server list clients for its own list. |
| `LowLevelApiClient.ValidateIdentityToken` (through `ServicesClient.IsValidShortLivedIdentityTokenAsync`) | The server's join check (`ServerPlayerConnectionHandlerOld`) | Stubbed by TavernLib (always valid). |
| `SocialClient` (friends) | Friends lists, social tablet | TavernEssentials swaps in its own social client. |
| `Analytics.PostGenericEventAsync`, `LowLevel.EnqueueAnalyticsEvent`, `AltaAnalyticsDispatcher` | Launch, area, challenge, unlocks and tutorial events | Each failure logged with a stack trace. Stubbed by TavernEssentials and Steady. |
| `StatusAPI.GetStatus` (`strapi.townshiptale.dev`), `PlayerReports.ViewAllReports` | The inbox, reports | Stubbed by TavernEssentials and Steady. |
| `UserClient.IsUserVerifiedAsync` | The email check | Stubbed by TavernEssentials. |
| `AchievementClient` | Achievements and action stats | Fails. |
| `VoiceClient` | Vivox voice tokens | Fails; voice is gone anyway. `VoiceChat`'s constructor throws in `Player.SetLocal`, harmlessly. |
| `SettingsClient`, `Account`, `LauncherClient`, `SecurityClient`, `Oculus`, `Pico`, `MatchMaking` | Account and platform screens, tutorial server lookup | Fails. |

A server started as `/start_server -1` (how the Tavern launchers start one) uses `LocalServerAccess` for its own session with the API: starting, pinging, setting the online player list and stopping are all no-ops there, so the server's own lifecycle doesn't wait on Alta. `save wipe true` still asks the API to set the server offline.

## How long a call takes

- `LowLevelApiClient` sends through a `RetryHandler` (`Alta.Api.DataTransferModels.Utility`), made with a 40 second timeout (`ApiAccess` passes 40).
- Each attempt is cancelled after 40 seconds. Up to three attempts, with 2 and 4 second pauses between. The `HttpClient` itself gives up after four times the timeout, 160 seconds.
- An attempt that fails fast (host not found, connection refused) is retried the same way and the last error is thrown as an `HttpRequestException`.
- After all attempts time out, `RetryHandler.TimedOut` fires, the client rebuilds its `HttpClient`s, and the call throws a `TimeoutException`.

So a dead call takes anywhere from about 6 seconds to about two minutes, depending on how the host fails. Rover and Steady measured 40 seconds to a minute. The sending happens inside `Task.Run`, so it doesn't freeze the game, but whatever awaits it waits.

## Answering a call yourself

Patch the high-level method, so the caller gets a finished task and moves on:

```csharp
[HarmonyPatch(typeof(ServicesApiClient), nameof(ServicesApiClient.GetPublicIpAddressAsync))]
static class NoPublicIpLookup
{
    static bool Prefix(ref Task<IPAddress> __result)
    {
        __result = Task.FromResult(IPAddress.Any); // what a failed lookup ends up as anyway
        return false;
    }
}
```

- **Check whether another mod already answers it.** Several mods stub the same calls. Steady runs its patches last and stands aside when another prefix already answered (`__runOriginal` is false). Do the same, or use a Harmony priority.
- **Answer with what a failure would give**, not invented data, unless you really have the data. Callers already handle the failure case.
- **For everything else**, refuse the request by host. Patching `HttpClient.SendAsync` catches nothing on Mono; `HttpClientHandler.SendAsync` and `HttpMessageInvoker.SendAsync` catch every request. Throwing a `TaskCanceledException` from there makes callers take their timeout path at once. Steady's `CutOffAlta` and the AltaApiRemoval mod both do this.
- The high-level classes (`ServicesApiClient`, `UserApiClient`, `ServerApiClient`) are public and their methods are `async`, so the method you patch is the stub that starts the state machine. A prefix that returns false replaces the whole call, which is what you want.

## Alta.Api.DataTransferModels

The shapes the API used, still used all over the game: `UserInfo`, `UserInfoWithPermissions` (`Identifier`, `Username`, `HashSet<string> Policies`, `IsVerified`, `FromToken`), `GameServerInfo`, `GroupPermissions`, `TokenResultResponse`, `ShutdownReason` and many request and response types. Also:

- `JsonUtility.SetupJsonSerializerSettings()`, which sets **`JsonConvert.DefaultSettings` for the whole process**: enums as strings, nulls left out, UTC ISO dates, converters for `IPAddress`, AWS regions and JWTs. The API client calls it when it's made, so your own `JsonConvert` calls get these settings too. Pass your own `JsonSerializerSettings` if you need different ones; Newtonsoft still applies the defaults first.
- `RetryHandler`, above.
- `UserRolesUtility.GetRolesFromIdentityToken`, which reads `dev` and other policies from a token.

## See also

- [Startup and app state](startup-and-app-state.md) for the login and API flags.
- [Remote console](remote-console.md#logging-in) for the console's use of the API.
- Rover's `docs/findings.md` and Steady's `AltaCutoff` for measured timings and a full cut-off.
