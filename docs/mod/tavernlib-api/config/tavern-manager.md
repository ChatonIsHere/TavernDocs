---
title: TavernManager
description: The server service that holds TavernLib's config files.
sidebar_position: 1
---

# TavernManager

`TavernLib.Backend.Api.TavernManager` in `TavernLib.dll`. Server only.

The service that owns the server's config files. Get it from the service registry. It isn't there on a client.

```csharp
var manager = TavernServices.GetService<TavernManager>();
```

## Members

`public class TavernManager : IService`

| Member | File | Page |
| --- | --- | --- |
| `UserConfigFile UserConfig { get; }` | `users.json` | [User config](user-config.md) |
| `ServerSettingsConfig ServerConfig { get; }` | `server_settings.json` | [Server settings](server-settings.md) |
| `TavernServerConfig TavernConfig { get; }` | `tavern_server.json` | [Ports](tavern-server.md) |
| `WhitelistRequestsConfigFile WhitelistRequests { get; }` | `whitelist_requests.json` | [Other config files](other-config-files.md#whitelist-requests) |

Each one is a [`ServerConfigFile<T>`](server-config-file.md): `LastRead` is the file as last read, `Read()` reads it again, `Update` changes it safely.

It also has two `internal` members, the login server (`AuthManager`) and the Community Servers listing (`ListingController`). Mods can't reach them without reflection.

## When it's made

TavernLib creates it in its `OnEarlyInitializeMelon` on a server, so it's ready before your mod's `OnInitializeMelon`. The constructor:

1. Reads all four files. A missing file is created with the defaults. One that can't be read is logged (`TavernLib keeps running without users.json; joins that need it are refused until it reads.`) and skipped, so its `LastRead` holds the defaults and its `Readable` is `false`.
2. Starts the listing if `community_listed` is on. Changing it later needs a restart.
3. Starts the login server on the auth port, unless the server was started with `/launcherauth`. The configs are there either way.

Don't create a `TavernManager` yourself. A second one would try to start a second login server on the same port.

## How fresh is LastRead?

TavernLib reads some files again as it goes, and each read replaces `LastRead`:

| File | Read again |
| --- | --- |
| `users.json` | On every login and every join. |
| `server_settings.json` | On every login request and join, on each console login (for `console_owner_local_only`), and when the game's `GarbageCollectTimer` starts. |
| `tavern_server.json` | Never. Ports are read once at start. |
| `whitelist_requests.json` | When a player asks to join a whitelisted server. |

So on a busy server, `LastRead` is rarely more than a join old. On an empty one it can be hours old. If you need the file as it is now, call `Read()` (see [ServerConfigFile](server-config-file.md#members)).

Roles have their own copy that's refreshed every second: use [`Roles`](../roles.md) for those, not `UserConfig`.

## Example

```csharp
using System;
using MelonLoader;
using TavernLib.Backend.Api;
using TavernLib.Backend.Server.Configs;
using TavernLib.Services;

public static class ReadSettings
{
    public static void Log(MelonLogger.Instance log)
    {
        var manager = TavernServices.GetService<TavernManager>();
        if (manager == null) return;

        ServerSettings settings = manager.ServerConfig.LastRead;
        log.Msg($"{settings.Name}: up to {settings.PlayerLimit} players, password {(settings.PasswordHash.Length > 0 ? "on" : "off")}");

        TavernServer ports = manager.TavernConfig.LastRead;
        log.Msg($"Game port {ports.Game}, auth {ports.Auth}, web {ports.Web}, console {ports.Console}");
    }

    public static ServerSettings Fresh()
    {
        var config = TavernServices.GetService<TavernManager>().ServerConfig;
        try
        {
            return config.Read();
        }
        catch (Exception)
        {
            return config.LastRead;   // unreadable right now: keep what was read before
        }
    }
}
```

These types use Newtonsoft.Json attributes, so reference `Newtonsoft.Json` from the game's `Managed` folder too.

## See also

- [Config reference](../../../host/config-reference.md) for what each setting means to a host
- [Files](../files.md)
