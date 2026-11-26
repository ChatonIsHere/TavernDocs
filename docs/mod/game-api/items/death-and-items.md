---
title: Death and items
description: What happens to a player's held and docked items when they're downed, revived, killed and respawned, and the server setting that decides it.
sidebar_position: 13
---

# Death and items

A player at 0 health isn't dead yet: they're **downed**. They die when the downed timer runs out, and respawn a while after. Each step does something to their items. All of it is decided on the server, in the player state classes in `Alta.PlayerStates` (the states themselves are on [Player states](../networking/player-states.md); this page covers the items).

One server setting decides most of it: `ServerSettings.DropAllOnDeath` (`ServerHandler.Current.ServerConfig.Settings.DropAllOnDeath`).

## Downed

`PlayerHealth` raises `Downed` when health hits 0, and the player moves into `DownedState`. On the server, `DownedState`:

- kills the player at once if the server's `DownedStateDuration` is 0;
- otherwise marks them downed, then **saves and destroys whatever is in their hands** (`SaveHeldInteractables`). Only items that are their own root entity and are saved normally are kept this way;
- spawns a gravestone and moves the body to the ground;
- starts the downed timer and the revive activity.

On the downed player's client, anything held that isn't networked is dropped. On other clients, the downed player's body, belt and back docks are hidden, and their hands are switched to the `DownedCharacter` interaction channel.

Docked items stay where they are while downed.

## Revived or timed out

When the player leaves the downed state (`OnDeactivate`), the server spawns the saved hand items again. Then:

- if they were **revived**, or `DropAllOnDeath` is off, the items go back into their hands, with a forced grab that holds them (`isForcingHold`);
- otherwise the items stay where they spawned (where they were saved, at the hands).

If the timer ran out, the player is killed (`PlayerHealth.OnKilled`) and moves to `DeadState`.

## Dead

On the server, `DeadState`:

1. Logs `<user> killed by <tool> (<source>) wielded by <wielder>` and raises the console's `PlayerKilled` event.
2. Marks the player not alive.
3. If `DropAllOnDeath` is on, **drops everything** (`DropPickups`): both hands let go (forced), and every dock embedded in the player (the hips, belt and back) is emptied with `UndockAll`. Each item that comes out is moved to 1 m above the head. A worn bag comes off whole, with its contents still in it. A stack comes out as a pouch.
4. Resets stats for death and **saves the player**, items included.
5. If `DropAllOnDeath` is off, **destroys the items** (`DestroyPickups`) in the docks and hands. They aren't lost: they were just saved with the player and come back with the new body.
6. Waits for the respawn time, then destroys the old body and spawns a new one.

## Timings and values

From the server settings (code defaults) and the `DownedStateSettings` and `DeadStateSettings` assets (build main-1.7.2.1.42203):

| What | Value | Where |
| --- | --- | --- |
| Time downed before dying | 60 s by default | `ServerSettings.DownedStateDuration` (0 kills at once) |
| Revive orbs around the grave | 3, each adds 15 s to the downed timer | `numberOfRevivalOrbsToSpawn`, `secondsAddedToRevivalTimerPerOrb` |
| Health after a revive | 50 % of maximum | `healthPercentageForRevivedPlayers` |
| Debuff after a revive | Speed × 0.7 for 30 s | `respawnDebuffs`, `respawnDebuffDurationInSeconds` |
| From death to respawn | 1 s of fog, 5 s wait, 0.5 s fade | `timeToIncreaseFog`, `timeToRespawn`, `fadeInOutTime`. The server's `RespawnTimeSeconds` setting (4) isn't read by `DeadState`. |
| Stats reset on death | Cripple health, health, poison, nightmare, both hand staminas | `statsToResetOnDeath` |
| Stats changed on death | Hunger below 0.6 is raised to 0.6, and fullness is then set to 0. With the server's `IsResetingHungerOnDeath` setting on, hunger is then reset to its default as well. | `statsToModifyOnDeath`, `StatManager.DeathReset` |

Rover saw the same in a test: downed, dead 60 s later, a new body about 7 s after that.

## Hooking it

The methods are private, so patch them by name (or against att-stubs' publicized `Root.Township`):

| Method | Runs | Good for |
| --- | --- | --- |
| `DownedState.SaveHeldInteractables` | Server, when downed. | Keeping or dropping what's held. |
| `DownedState.LoadInteractablesOnStateExit` | Server, leaving downed. | Changing who gets the items back. |
| `DeadState.DropPickups` | Server, on death with `DropAllOnDeath` on. | Choosing what drops, say keeping the back slot. |
| `DeadState.DestroyPickups` | Server, on death with it off. | |
| `DeadState.OnActivate` | Server, on death. | Anything at the moment of death. It's `protected override`. |

```csharp
using HarmonyLib;
using MelonLoader;

[HarmonyPatch(typeof(Alta.PlayerStates.DeadState), "DropPickups")]
static class BeforeDeathDrop
{
    static void Prefix(Alta.PlayerStates.DeadState __instance)
    {
        MelonLogger.Msg("dropping everything for a dead player");
    }
}
```

A prefix that returns false on `DropPickups` leaves the items in the old body's docks when the player is saved, so the new body gets them back. The old body is later removed with `DestroyPlayerControllerAndOldEntities(isUndocking: true, ...)`, which looks like it can drop those same items into the world: a duplication risk. Test it on a real server before you ship it.

:::tip
For a mod that only needs to know a player died, see [Console events](../console-and-utilities/console-events.md) for `ConsoleEvents.PlayerKilled` and [Player states](../networking/player-states.md) for the downed and dead states. `PlayerHealth.Downed` is the server's first signal.
:::

## See also

- [Health and damage](health-and-damage.md)
- [Player inventory](player-inventory.md)
- [Interactor and hands](interactor-and-hands.md#driving-hands-from-the-server)
