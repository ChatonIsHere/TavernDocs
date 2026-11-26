---
title: User config
description: UserConfig and UserConfigFile, for users.json.
sidebar_position: 4
---

# User config

`TavernLib.Backend.Server.Configs.UserConfig` and `UserConfigFile` in `TavernLib.dll`. Server only.

`users.json`: every player's account, their roles, the whitelist and the blacklist. Read it through `TavernManager.UserConfig`. The file's layout is in the [config reference](../../../host/config-reference.md#usersjson).

:::danger[Account tokens]

Each user's `Token` is their key to their account on this server. Never log it, show it, or send it anywhere.

:::

## UserConfig

`public class UserConfig`

| Property | JSON key | What it is |
| --- | --- | --- |
| `Dictionary<string, User> Users` | `users` | Every account, by username. TavernLib writes the names lower case. |
| `ListConfig Whitelist` | `whitelist` | |
| `ListConfig Blacklist` | `blacklist` | |

The `Users` dictionary compares names with case, like any `Dictionary<string, T>`. Look names up lower case, or use `UserConfigFile.GetUser`, which does it for you.

### UserConfig.User

| Member | JSON key | What it is |
| --- | --- | --- |
| `ulong UserId` | `user_id` | The player's id on this server. Their save is filed under it. |
| `string Token` | `token` | Their account key. See the warning above. |
| `string RegisteredFrom` | `registered_from` | The IP address they first joined from. |
| `List<string> Roles` | `roles` | |
| `Dictionary<string, string> Mods` | `mods` | `id` to `version` of the mods their game loads, from their last join. `null` when that join didn't send a list (the Quest app, a direct connect). |
| `bool HasRole(string role)` | | Without case. |
| `bool IsModerator` | | Has `moderator` or `owner`. |
| `bool CanEnterFlyMode` | | `IsModerator`, or has `fly`. |

### UserConfig.ListConfig

| Property | JSON key |
| --- | --- |
| `List<string> Usernames` | `usernames` |
| `List<string> Ips` | `ips` |
| `List<ulong> UserIds` | `user_ids` |

A player matches a list if any of these do: their name (without case), their id, or the address they're joining from. For the whitelist, the address they registered from counts too. How TavernLib uses the whitelist is in `JoinRules`, which is `internal`. In short: the whitelist is on when `whitelist_enabled` is, and also on a headless server whose whitelist has anything in it.

Every class keeps keys it doesn't know and writes them back.

## UserConfigFile

`public class UserConfigFile(string filePath) : ServerConfigFile<UserConfig>(filePath)`

All of these look in `LastRead`, without reading the file:

| Member | What it does |
| --- | --- |
| `UserConfig.User GetUser(string username)` | Lower-cases the name and looks it up. `null` if there's none. |
| `UserConfig.User GetUser(int identifier)` | The first user with that `UserId`. `null` if there's none. |
| `bool TryGetUser(string username, out UserConfig.User user)` | |
| `bool TryGetUser(int identifier, out UserConfig.User user)` | |

The rest (`Read`, `Update`, `LastRead`) is [`ServerConfigFile`](server-config-file.md).

## Reading

```csharp
using TavernLib.Backend.Api;
using TavernLib.Services;

public static class Users
{
    public static string Describe(string username)
    {
        var users = TavernServices.GetService<TavernManager>().UserConfig;
        if (!users.TryGetUser(username, out var user)) return $"{username} has never joined";
        return $"{username} is #{user.UserId}, roles: {string.Join(", ", user.Roles)}";
    }
}
```

For roles, [`Roles`](../roles.md) is usually better: it's refreshed every second, while `LastRead` is only as fresh as the last join.

## Writing

The [Folders and files](../../tavernlib/folders-and-files.md) guide says not to write TavernLib's files, and for most mods that's right. TavernLib writes `users.json` when a player registers, when a join sends its mod list, and for `player ban` and `player unban`. The Server launcher writes it for **Edit Roles** and its player lists.

If your mod's job is to manage users (giving a role from an in-game command, say), change it with `Update` on TavernManager's object, so your change and TavernLib's never overwrite each other:

```csharp
using TavernLib.Backend.Api;
using TavernLib.Services;

public static class UserAdmin
{
    // Changes users.json under TavernLib's own lock. Only do this if your mod is meant to manage roles.
    public static void GiveRole(string username, string role)
    {
        var users = TavernServices.GetService<TavernManager>().UserConfig;
        users.Update(config =>
        {
            if (!config.Users.TryGetValue(username.ToLowerInvariant(), out var user)) return false;
            if (user.HasRole(role)) return false;
            user.Roles.Add(role);
            return true;
        });
    }
}
```

`Roles` sees the change within two seconds and tells the player's game. `Update` throws if the file can't be read, so catch it.

The launcher is another program, and it doesn't share TavernLib's lock. A change made in the launcher at the same moment can still be lost. Don't add or remove accounts, or change `user_id` or `token`: those are what let players back into their saves.

## See also

- [Roles](../roles.md)
- [Config reference](../../../host/config-reference.md#usersjson)
