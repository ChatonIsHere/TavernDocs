---
title: Server settings
description: ServerSettings and ServerSettingsConfig, for server_settings.json.
sidebar_position: 3
---

# Server settings

`TavernLib.Backend.Server.Configs.ServerSettings` and `ServerSettingsConfig` in `TavernLib.dll`. Server only.

`server_settings.json`: the server's name, password, player limit, listing and so on. Read it through `TavernManager.ServerConfig`. What each setting means to a host is in the [config reference](../../../host/config-reference.md#server_settingsjson).

## ServerSettings

`public class ServerSettings`

Every property is read-only from a mod: the setters are `private` or `internal`. You can read settings but not change them through `Update`.

| Property | JSON key | Default |
| --- | --- | --- |
| `string Name` | `name` | `"My Tavern Server"` |
| `string PasswordHash` | `password_hash` | `""` (no password) |
| `string Password` | `password` | `null`. Never set after a read, see below. |
| `bool WhitelistEnabled` | `whitelist_enabled` | `false` |
| `bool EnforceIpLimit` | `enforce_ip_limit` | `true` (at most 5 accounts registered from one address, as in the Windows launcher) |
| `bool CommunityListed` | `community_listed` | `false` |
| `int MaxPlayers` | `max_players` | `24` |
| `string CommunityListingToken` | `community_listing_token` | `""`, then made for you |
| `string PublicHostname` | `public_hostname` | `null` |
| `bool QuestScene` | `quest_scene` | `false` |
| `bool TutorialScene` | `tutorial_scene` | `false` |
| `string Region` | `region` | `"unknown"` |
| `float GarbageCollectionTimer` | `garbage_collection_timer` | `30` |
| `float ServerBackupTime` | `server_backup_time` | `0` (off) |
| `int ServerBackupMaxBackups` | `server_backup_max_backups` | `0` (keep all) |
| `bool ConsoleOwnerLocalOnly` | `console_owner_local_only` | `false` |

| Other member | What it is |
| --- | --- |
| `const int DefaultMaxPlayers = 24` | The Windows launcher's default too. |
| `int PlayerLimit { get; }` | `MaxPlayers` if it's above 0, else `DefaultMaxPlayers`. Not in the JSON. Use this, not `MaxPlayers`: an older file can have `0`. |

Unknown keys are kept and written back.

### The player limit

TavernLib postfixes the game's `ServerHandler.PlayerLimit` getter to return `ServerConfig.LastRead.PlayerLimit`. So a new value shows the next time TavernLib reads the file, which is the next login or join (see [How fresh is LastRead?](tavern-manager.md#how-fresh-is-lastread)). The listing reports `ServerHandler.Current.PlayerLimit`.

TavernLib's join check (its replacement for the game's `CheckIfPlayerIsAllowedCustom`, see [Internals](../internals.md#server)) refuses a join once the socket's connection count goes past the limit, with the game's own message, "Reached player limit of: 24". The joining player's connection is already counted, so with `max_players` at 24 the 25th player is the one turned away.

To refuse joins for your own reasons, postfix `CheckIfPlayerIsAllowedCustom`. The [Joining](../../game-api/networking/joining.md) page has an example.

If your mod patches `ServerHandler.PlayerLimit` too, both postfixes run, and whichever runs last wins. Harmony runs lower priorities later, so `[HarmonyPriority(Priority.Low)]` on yours makes it win. Hosts expect `max_players` to work, so think twice.

## ServerSettingsConfig

`public class ServerSettingsConfig(string filePath) : ServerConfigFile<ServerSettings>(filePath)`

Adds two things to [`ServerConfigFile`](server-config-file.md):

**Password tidy-up** (in `Tidy`, so on every read):

- A `password` key holds a password typed in by hand. It's hashed into `password_hash` and the `password` key is removed from the file. An empty `password` is just removed, leaving `password_hash` as it was.
- A `password_hash` that isn't 64 lower-case hex characters is taken as a plain password typed into the wrong key (AMP's password field does this), and hashed too.
- The hash is SHA-256 of the SHA-256 of the password, each as lower-case hex. That's what the launcher writes and what joins are checked against. To check a password from your mod, compare against that, never against `Password`.

**Listing token** (in `ReadFromFile` only): if `community_listing_token` is empty after the read, it makes a random URL-safe token and writes the file. `Read()` doesn't do this.

## When settings take effect

TavernLib reads most of these as it needs them, so a host's change usually works without a restart:

| Setting | Applies |
| --- | --- |
| `name`, `password_hash`, `whitelist_enabled`, `enforce_ip_limit` | On the next login or join. |
| `max_players` | On the next read, see above. |
| `console_owner_local_only` | On the next console login. |
| `garbage_collection_timer` | When the game's `GarbageCollectTimer` component starts. |
| `server_backup_time`, `server_backup_max_backups` | Within a minute. Headless servers only. |
| `community_listed` | At start. |
| `quest_scene`, `tutorial_scene` | Never by themselves. The scene comes from `/questScene` or `/tutorialScene` on the command line, which launchers add from these keys. TavernLib also reads the keys to say which scene the listing shows. |

## See also

- [Config reference](../../../host/config-reference.md#server_settingsjson)
- [Ports](tavern-server.md)
