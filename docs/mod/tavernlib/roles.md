---
title: Roles
description: Check a player's roles from your mod, and react when they change.
---

# Roles

Hosts give players roles in `users.json`, with the Server launcher's **Edit Roles** or by hand (see [Roles](../../host/config-reference.md#roles)). Your mod can read them, so you can make a command for moderators only, or a feature for supporters.

`Roles` only works on the server. On a client every call gives an empty list. A client can read its own roles, as the server sent them, from TavernLib's `EntranceMessageHandler`: see [On the client](../tavernlib-api/roles.md#on-the-client).

## Checking a role

```csharp
using TavernLib.ModdingApi;

if (Roles.HasRole(connection, "moderator"))
{
    // let them do it
}
```

`connection` is the player's `Alta.Networking.Connection`, for example `player.ConnectionToRemotePlayer`. Names are matched without caring about case. `Connection` is in `Root.Township`, which your mod already references.

To get all of them:

```csharp
IReadOnlyList<string> roles = Roles.GetRoles(connection);
IReadOnlyList<string> sameThing = Roles.GetRoles("placeholder"); // by username
```

A player with no roles gets an empty list, never `null`.

## Your own roles

Roles are just names, so you can make up your own, like `builder` or `event-host`. Say on your mod's page which ones it uses, so hosts know what to add.

These ones already mean something to TavernLib, so don't reuse them for something else: `owner`, `moderator`, `fly`, `mod`, `dev`, `supporter`.

## When roles change

TavernLib checks `users.json` about once a second while the server runs. When a player's roles change, it tells their game and raises `Roles.RolesChanged`:

```csharp
Roles.RolesChanged.Subscribe(change =>
{
    LoggerInstance.Msg($"{change.Username}: {string.Join(", ", change.OldRoles)} -> {string.Join(", ", change.NewRoles)}");
});
```

It runs on the game's main thread. It doesn't fire for the roles players already have when the server starts, so read `GetRoles` at start if you need those.

Catch your own exceptions in the handler. TavernLib logs one that escapes, but it also stops the handlers after yours from running.

Some things only change when the player rejoins: Fly mode access, and the `dev`, `mod` and `supporter` status in the game.

The full details are in the [Roles reference](../tavernlib-api/roles.md).
