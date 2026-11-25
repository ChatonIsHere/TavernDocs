---
title: Config reference
description: Every server config file, where it lives, and what's in it.
---

# Config reference

Stop the server before editing any of these by hand. A running server can write over your changes.

## Where the files are

| | TavernLib's config | The game's folder (world, logs) |
| --- | --- | --- |
| Windows | `%APPDATA%\TheModdingTavern` | `%APPDATA%\A Township Tale` |
| Docker | `tavern-config` | `server-data` |
| Panels | `tavern-config` in the server's directory | `server-data` |
| Wine | `~/att-server/config` | `~/att-server/saves` |

## TavernLib's config

| File | What it is |
| --- | --- |
| `server_settings.json` | Name, password, listing and more. [Below](#server_settingsjson). |
| `users.json` | Every player's account, their roles, the whitelist and blacklist. [Below](#usersjson). |
| `tavern_server.json` | The server's ports. [Below](#tavern_serverjson). |
| `console_token.txt` | The owner console token. Keep it secret. |
| `server_secret.key` | Signs every console token. Never share it. If it's lost, all tokens stop working. |
| `console_tokens.json` | Named console tokens. See [Console and tokens](console-and-tokens.md). |
| `console_token_log.jsonl` | What each console token did. |
| `modlist.json` | Mods the server keeps installed. See [Mods on your server](mods-on-your-server.md). |
| `mod_repos.json` | Extra mod sources added with `modmanager addrepo`. |
| `whitelist_requests.json` | Players asking to join a whitelisted server. |

Back up the whole folder along with the world.

### server_settings.json

Made with the defaults on the first start. Keys you leave out use the default.

| Key | Default | What it does |
| --- | --- | --- |
| `name` | `"My Tavern Server"` | The name players see. |
| `password` | | Set a password here in plain text. On its next read, the server hashes it into `password_hash` and removes this line. |
| `password_hash` | `""` | The password, hashed. Empty means no password. Set it to `""` to remove a password. |
| `max_players` | `24` | How many players can be on at once. Anyone past that is told "Reached player limit of: 24". |
| `whitelist_enabled` | `false` | Only players on the whitelist can join. Others can ask to join. Without the Windows launcher, the whitelist is also on whenever it has anything in it. |
| `enforce_ip_limit` | `true` | At most 5 new names can be made from one IP address. Stops one person making loads of accounts. Players who already have a name keep joining. |
| `community_listed` | `false` | Show the server on Community Servers. Needs a restart. See [Getting listed](getting-listed.md). |
| `region` | `"unknown"` | `EU`, `NA`, `SA`, `Asia`, `Oceania`, `Africa` or `unknown`. Shown on the list. |
| `public_hostname` | none | A name to show on the list instead of your IP. It has to point at your server. |
| `community_listing_token` | made for you | How the list knows updates are from your server. Leave it alone. |
| `quest_scene` | `false` | Run the Quest scene (no forest, lighter graphics). Needs a restart. |
| `tutorial_scene` | `false` | Run the tutorial scene. Beats `quest_scene` if both are on. Needs a restart. |
| `server_backup_time` | `0` | Hours between automatic world backups on a headless server. `0` is off. The Windows launcher does its own backups. |
| `server_backup_max_backups` | `0` | How many automatic backups to keep. `0` keeps them all. |
| `garbage_collection_timer` | `30` | Seconds between the game's memory clean-ups (.NET garbage collection) on a server running without graphics. It doesn't touch items in the world. Needs a restart. With Steady installed, the clean-ups only run if this is set to something other than 30. |
| `console_owner_local_only` | `false` | Only accept the owner console token from the server itself. |

The Windows Server launcher has a **Settings** window for all of these. In Docker, `SCENE` in `.env` sets the two scene keys for you.

:::note[Scenes]

The scene only changes when the server starts with `/questScene` or `/tutorialScene`. The Windows launcher, the container and the panels read these two keys and add that for you. With Wine, set it in `start.sh`.

:::

### users.json

Made when the first player joins. Every name is stored in lower case.

```json
{
    "users": {
        "placeholder": {
            "user_id": 1001,
            "token": "...",
            "registered_from": "203.0.113.20",
            "roles": ["moderator"]
        }
    },
    "whitelist": { "usernames": [], "ips": [], "user_ids": [] },
    "blacklist": { "usernames": [], "ips": [], "user_ids": [] }
}
```

- `token` is that player's key to their account. Never share this file.
- An IP on the whitelist lets in everyone on that connection. Only add one for a place where you trust everyone.

#### Roles

| Role | What it gives |
| --- | --- |
| `owner` | Can join in **Fly** mode and change the server's settings from the in-game settings board. |
| `moderator` | Same as `owner`. |
| `fly` | Can join in **Fly** mode, and nothing else. |
| `mod` | Shows as a moderator in the game. |
| `dev` | Shows as a developer in the game. |
| `supporter` | Shows as a supporter in the game. |

Players without `owner`, `moderator` or `fly` who try to join in Fly mode are kicked with "Bizarre mode detected."

Mods can check for their own roles too, so a mod's page might tell you to add one.

### tavern_server.json

```json
{
    "server_port": 1757,
    "auth_port": 1762,
    "web_port": 1761,
    "console_port": 1760
}
```

A missing or broken value means the default. See [Join by name](srv-records.md) for moving them. In Docker, the container writes this file from `.env` on every start, so change `.env` instead.

## The game's folder

The world is in `Servers/-1/` inside the game's folder:

| | |
| --- | --- |
| `Save/` | The world save. |
| `Backups/` | Automatic backups. |
| `ServerConfiguration.json` | The game's own settings: autosave, time speed, spawn rates, death rules and so on. |
| `Logs/logs/unity-log.csv` | The game's log. Older ones are in `archives/`, 20 of each kind at most. |

`ServerConfiguration.json` is written on the first start. AMP shows its settings in its UI. Elsewhere, stop the server and edit it by hand. Every key is [below](#serverconfigurationjson). What's in `Save/` is in [Save format](save-format.md).

## ServerConfiguration.json

The game's own settings for the world. The game writes the file with the defaults on the first start. A key you leave out keeps its default.

```json
{
  "IsAutoSaving": true,
  "MinutesBetweenAutoSaving": 5.0,
  "TimeSpeedMultiplier": 1.0,
  "IsPVPEnabled": false,
  "DropAllOnDeath": false
}
```

That's a few of the keys. The real file has all of them.

### How changes apply

The game watches this file. When it changes, the running server reads it again, and most settings apply straight away. The **Restart** column below marks the ones that only apply on the next start. If a change doesn't seem to apply, restart.

Stopping the server first is still the safe way. The in-game settings board and the `settings` console commands write the whole file, so they can put back a value you just changed by hand.

From the console, `settings set server <key> <value>` changes one key, saves the file and applies it. For example `settings set server IsPVPEnabled true`. `settings list server` shows the current values, and `settings reset` puts every key back to its default.

Ranges are given where the game has one. The game keeps a value inside its range when it writes the file, but doesn't check what it reads, so stay inside it when you edit by hand.

### Saving

| Key | Type | Default | What it does | Restart |
| --- | --- | --- | --- | --- |
| `IsSaving` | true/false | `true` | Save the world and players at all. `false` makes a throwaway world: nothing is written, and players start fresh each time they join. | Yes |
| `IsAutoSaving` | true/false | `true` | Save the world every `MinutesBetweenAutoSaving` minutes. With it off, the world is still saved when the server stops, and each player when they leave. | Yes |
| `MinutesBetweenAutoSaving` | number | `5` | Minutes between autosaves. 1 to 60. | Yes |
| `WipesWhenEmpty` | true/false | `false` | Not used by this version of the game. | |
| `HasRunRepairBoxFix` | true/false | `false` | Not used by this version of the game. | |

### Players

| Key | Type | Default | What it does | Restart |
| --- | --- | --- | --- | --- |
| `PlayerLimit` | whole number | `-1` | Ignored on a Tavern server: TavernLib uses `max_players` from [server_settings.json](#server_settingsjson) instead. Without TavernLib, `0` or less means no limit. | |
| `IsCustomizationEnabled` | true/false | `true` | New players go to the character room on their first join. `false` skips it. | No |
| `InitialPlayerInventory` | text | `Default` | What a new player starts with: `Default`, `DeckedOut` or `None` (empty hands). Only players joining for the first time get it. | No |
| `HasAFKTimer` | true/false | `true` | Warns players who haven't moved or hit anything for 10 minutes, then kicks them 35 seconds later. The warning says "in 600 seconds", which is wrong. | No |
| `PlayerLandmarkMode` | text | `ShowAll` | Other players on the map: `ShowAll`, `FriendsOnly` or `Hidden`. With `FriendsOnly`, players see only their friends. | No |
| `PlayerSmoothingLevel` | text | `Default` | How much players' movement is smoothed: `Default` or `Low`. | No |
| `HandoverRequireConfirmation` | true/false | `true` | Not used by this version of the game. | |

### Death

| Key | Type | Default | What it does | Restart |
| --- | --- | --- | --- | --- |
| `DownedStateDuration` | whole number | `60` | Seconds a player stays downed, and can be revived, before they die. `0` skips being downed. 0 to 120. | No |
| `DropAllOnDeath` | true/false | `false` | Players drop everything they carry when they die. Off, they keep it. | No |
| `IsResetingHungerOnDeath` | true/false | `false` | Resets a player's hunger when they die. | No |
| `UnspentExperienceLostOnDeath` | number | `0.0001` | How much of their unspent XP a player loses on death, from 0 to 1. `0.5` is half. It can't go below 0.0001, which is next to nothing. | No |
| `ImpactInvincibilityTime` | number | `12` | Seconds a player can't be hurt by hits after they spawn or come through a cave teleporter. 1 to 30. | No |
| `RespawnTimeSeconds` | number | `4` | Not used by this version of the game. | |

### Combat

| Key | Type | Default | What it does | Restart |
| --- | --- | --- | --- | --- |
| `IsPVPEnabled` | true/false | `false` | Players can hurt each other with weapons and tools. | No |
| `PVPMultiplier` | number | `0.1` | Damage one player's hit does to another, times this. 0.0001 to 100. | No |
| `PVPCrippleMultiplier` | number | `0.3` | Cripple damage one player's hit does to another, times this. 0.0001 to 100. | No |
| `DamageX` | number | `1` | Damage from hits and area attacks, times this. 0.0001 to 100. | No |
| `PlayerDamageTakenMultiplier` | number | `1` | Damage players take, times this. `0` means players can't be hurt. 0 to 100. TavernLib's player damage commands change this key. | No |

### Hunger and health

| Key | Type | Default | What it does | Restart |
| --- | --- | --- | --- | --- |
| `HungerTick` | number | `0.0005` | How fast hunger goes down. Higher is faster. 0.0001 to 1. | No |
| `HungerDealsDamage` | true/false | `true` | Starving players lose health. | No |
| `HealthRegenMultiplier` | number | `1` | How fast players heal, times this. `0` stops healing over time. 0 to 10. | No |

### Time

| Key | Type | Default | What it does | Restart |
| --- | --- | --- | --- | --- |
| `TimeSpeedMultiplier` | number | `1` | How fast the in-game day goes. `2` is twice as fast. 0.0001 to 10. | No |
| `IsAdvancingTimeWhenOffline` | true/false | `true` | When the server starts, move the clock on by how long it was off, so time seems to have passed. | Yes |
| `FixedDaytime` | number | `-1` | Lock the time of day. `-1` lets the day run. A value from 0 to 1 picks a point in the day. | No |

### Experience

| Key | Type | Default | What it does | Restart |
| --- | --- | --- | --- | --- |
| `XPX` | number | `1` | All XP, times this. 0 or more. | No |
| `ForgingXPX`, `WoodcuttingXPX`, `MiningXPX`, `ChiselingXPX`, `CookingXPX`, `MeleeXPX`, `RangedXPX` | number | `1` | XP for that skill, times this. It stacks with `XPX`: `2` here and `2` in `XPX` is four times as much. 0 or more. | No |
| `CanOnlyBuySkillsAfterPracticing` | true/false | `true` | Players have to practise a skill before they can buy it. Off, they can buy any skill. | No |

### World

| Key | Type | Default | What it does | Restart |
| --- | --- | --- | --- | --- |
| `SpawningRateMultiplier` | number | `1` | How often creatures and other spawns come back. `2` halves the wait. More than 0. | No |
| `DecayMultiplier` | number | `1` | How fast things decay. `2` is twice as fast. Things already decaying keep their old timer. More than 0. | No |
| `CommunityStorageMultiplier` | number | `1` | How much each player can take from the town's shared storage (like the ore and stick storage) each in-game day, times this. Changing it resets everyone's allowance. More than 0. | No |
| `AvoidSpawnCollectedPages` | true/false | `true` | Not used by this version of the game. | |

### Physics

The server lowers how often it runs physics when its frame rate drops, so a busy server doesn't fall further behind. It checks every 5 seconds.

| Key | Type | Default | What it does | Restart |
| --- | --- | --- | --- | --- |
| `IsUpdatingPhysicsFixedFrameCount` | true/false | `true` | Change the physics rate with the frame rate. Off, physics runs at the maximum all the time. | No |
| `MaximumPhysicsFixedFramesPerSecond` | whole number | `45` | Physics steps a second when the server runs well. | No |
| `MinimumPhysicsFixedFramesPerSecond` | whole number | `15` | Physics steps a second at worst. | No |
| `FPSForMaximumFixedFrameCount` | whole number | `20` | At this server frame rate or above, physics runs at the maximum. | No |
| `FPSForMinimumFixedFrameCount` | whole number | `5` | At this server frame rate or below, physics runs at the minimum. | No |

### Other

| Key | Type | Default | What it does | Restart |
| --- | --- | --- | --- | --- |
| `HasInGameSettings` | true/false | `false` | Adds the server settings board to the quick-access menu. On a Tavern server only `owner` and `moderator` can change settings with it. `settings enable-board` and `settings disable-board` on the console do the same. | No |
| `EmptyServerShutdownTimeInSeconds` | whole number | `300` | Not used by this version of the game. Some panels list it, but it does nothing. | |

"Not used by this version of the game" means the game keeps the key and shows it on the settings board, but nothing in the game reads it.
