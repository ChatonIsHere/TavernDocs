---
title: Roles
description: Roles, RolesChange, and reading your own roles on the client.
sidebar_position: 2
---

# Roles

`TavernLib.ModdingApi.Roles` in `TavernLib.dll`. Server only (on a client it's always empty).

Players' roles from `users.json`, kept in memory and refreshed while the server runs. Use it to gate a feature on a role. The how-to is [Roles](../mod/tavernlib/roles.md); the roles TavernLib itself gives meaning to are in the [config reference](../host/config-reference.md#roles).

## Members

`public static class Roles`

| Member | What it does |
| --- | --- |
| `static bool HasRole(Connection connection, string role)` | True if that player has the role. Names compare without case. |
| `static IReadOnlyList<string> GetRoles(Connection connection)` | The player's roles, by `connection.UserInfo.Username`. |
| `static IReadOnlyList<string> GetRoles(string username)` | The same, by username, without case. |
| `static readonly TavernEvent<RolesChange> RolesChanged` | Raised when a player's roles change. See [Events](events.md) for `TavernEvent<T>`. |

`public sealed class RolesChange`

| Member | What it is |
| --- | --- |
| `string Username { get; }` | The name as it's written in `users.json` (TavernLib writes them lower case). |
| `IReadOnlyList<string> OldRoles { get; }` | Roles before. Empty if they had none. |
| `IReadOnlyList<string> NewRoles { get; }` | Roles now. Empty if they have none left, or were removed from the file. |

## Behaviour

- **Where it comes from.** On a server, TavernLib reads `users.json` when it starts (before your mod loads), then checks the file's last-write time once a second. When the time has changed and then stayed the same for a check, it reads the file again. So a change shows up one to two seconds after the file is saved, and a file that's still being written isn't read half-done.
- **A file that won't read** keeps the roles from before, with one warning in the log per change to the file.
- **Empty and blank role names are dropped.** A user with no roles isn't stored at all, so `GetRoles` gives an empty list, never `null`. A `null` connection or username also gives an empty list.
- **The lists are shared.** Don't cast them back to `List<string>` and change them.
- **On a client** the poll never starts, so every call gives an empty list. Use [the client's own roles](#on-the-client) instead.
- **Players don't need to be online.** `GetRoles(string)` works for anyone in `users.json`.

When roles change, TavernLib does two things for each changed user, in this order:

1. If they're online, it sends their game the new list (message 32, see [Network messages](network-messages.md)). That's what shows or hides the server settings board.
2. It raises `RolesChanged`.

## Threading

The poll runs from `MelonEvents.OnUpdate`, so `RolesChanged` handlers run on Unity's main thread. You can touch game objects in them.

`HasRole` and `GetRoles` are safe from any thread. Each reload swaps in a whole new set of lists.

## Gotchas

:::warning[One throwing handler stops the rest]

TavernLib catches an exception from `RolesChanged` and logs it, but it's one call to every handler in turn. A handler that throws stops the ones after it. Catch your own exceptions inside your handler.

:::

- `RolesChanged` doesn't fire when the server starts, only on changes after that. Read `GetRoles` at start if you need the first state.
- Some things are only decided at join. The game status from `dev`, `mod` and `supporter` is set from `Roles` when the player joins, and Fly mode access is checked against a fresh read of `users.json` (through `TavernManager.UserConfig`, see [User config](config/user-config.md)). A role change reaches `Roles` within seconds, but those two only change when the player rejoins.
- Only `owner` and `moderator` may change the server's settings from the settings board. TavernLib patches `ServerSettingsSync.IsServerSyncPermitted` to check `Roles` for that.

## Example

```csharp
using System.Collections.Generic;
using Alta.Networking;
using HarmonyLib;
using MelonLoader;
using TavernLib.ModdingApi;

[HarmonyPatch(typeof(Player), nameof(Player.InitializePlayerOnServer))]
static class GreetStaff
{
    static void Postfix(Player __instance)
    {
        Connection connection = __instance.ConnectionToRemotePlayer;
        if (Roles.HasRole(connection, "event-host"))
            MelonLogger.Msg($"{__instance.UserInfo.Username} can run events");
    }
}

public static class WatchRoles
{
    public static void Start(MelonLogger.Instance log)
    {
        Roles.RolesChanged.Subscribe(change =>
        {
            bool gained = !Has(change.OldRoles, "event-host") && Has(change.NewRoles, "event-host");
            if (gained) log.Msg($"{change.Username} is now an event host");
        });
    }

    static bool Has(IReadOnlyList<string> roles, string role)
    {
        foreach (var r in roles)
            if (string.Equals(r, role, System.StringComparison.OrdinalIgnoreCase)) return true;
        return false;
    }
}
```

`Player.InitializePlayerOnServer` is `async`, so a postfix runs when it first awaits, not when the player is fully set up. TavernLib patches the same method to send roles.

## On the client

A client has no `users.json`. What it has is the list the server sent, in `TavernLib.Backend.EntranceMessageHandler`, which TavernLib registers as a [service](services.md) on both sides.

| Member | What it is |
| --- | --- |
| `UserConfig.User LocalUser { get; }` | Your user on the server you're on. Only `Roles` is filled in. |
| `LocalUser.Roles` | `List<string>`, replaced each time the server sends roles. |
| `LocalUser.HasRole(string role)` | Without case. |
| `LocalUser.IsModerator` | Has `moderator` or `owner`. |
| `LocalUser.CanEnterFlyMode` | `IsModerator`, or has `fly`. |

```csharp
using TavernLib.Backend;
using TavernLib.Services;

public static class ClientRoles
{
    // On a client: the roles the server sent for you.
    public static bool IAmModerator()
    {
        var handler = TavernServices.GetService<EntranceMessageHandler>();
        return handler != null && handler.LocalUser.IsModerator;
    }
}
```

- The server sends roles when you join, and again whenever they change.
- The message is handled on the main thread, from the game's network receive.
- It's only what the server says. Don't trust it for anything the server should check; check on the server with `Roles`.
- Nothing clears the list when you leave. Until the next server sends its list, it still holds the last server's roles.
- `EntranceMessageHandler` is in `TavernLib.Backend`, so treat it as internal: TavernEssentials reads it by reflection for this reason. Don't create one yourself (see [Services](services.md#tavernmessagehandler)).

## See also

- [Roles](../mod/tavernlib/roles.md) (how-to)
- [User config](config/user-config.md) for the rest of `users.json`
