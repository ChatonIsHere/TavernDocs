---
title: Other config files
description: Whitelist requests, the modlist, mod sources and console tokens.
sidebar_position: 6
---

# Other config files

The rest of TavernLib's `ServerConfigFile` classes. All server only. Read them if they help; leave writing to TavernLib.

## Whitelist requests

`TavernLib.Backend.Server.Configs.WhitelistRequestList` and `WhitelistRequestsConfigFile`. On `TavernManager.WhitelistRequests`.

`whitelist_requests.json`: players who asked to join a whitelisted server.

| Member | JSON key | |
| --- | --- | --- |
| `List<WhitelistRequest> Requests` | `requests` | |
| `WhitelistRequest.Username` | `username` | As they typed it. |
| `WhitelistRequest.Ip` | `ip` | |
| `WhitelistRequest.AppliedAt` | `applied_at` | A string, not a `DateTime`. |

TavernLib adds to it, with `Update`, when a player asks to join. It skips a request with the same name and IP as one already there. With `/launcherauth`, the Server launcher handles requests and TavernLib ignores them. Approving a request is the host's job: they add the player to the whitelist in `users.json`.

## Modlist

`TavernLib.Backend.Server.Configs.ModsList` and `ModsListConfig`. Not on `TavernManager`.

The file named by `/modlist` on the command line: the mods a headless server keeps installed. See [Mods on your server](../../../host/mods-on-your-server.md).

| Member | What it is |
| --- | --- |
| `List<string> Mods` | `mods`: entries like `Author.Repo` or `Author.Repo@1.2.3`. |
| `static (string Id, string PinnedVersion) ParseEntry(string entry)` | Splits an entry at `@`. No `@`, or nothing after it, gives `null` for the version (latest). |

The launcher's exported file also has `repos` and `untracked` keys. TavernLib ignores both on purpose: mods only come from trusted sources, and untracked entries are file names.

## Mod sources

`TavernLib.Backend.Server.Configs.TrustedRepos` and `TrustedReposConfig`. Not on `TavernManager`.

`mod_repos.json`: sources added with `modmanager addrepo`.

| Member | What it is |
| --- | --- |
| `int Schema` | `schema`, `1`. |
| `Dictionary<string, string> Repos` | `repos`: short name (`user/repo`) to base URL. |
| `List<string> EffectiveRepoUrls()` | The default TavernMods source first, then every added one that isn't it. |

Only `modmanager addrepo` adds a source, after checking it serves a real index. Naming a source in a modlist never does.

## Console tokens

`TavernLib.Backend.RemoteConsole.ConsoleTokenList`, `ConsoleToken` and `ConsoleTokenFile`.

`console_tokens.json`: the named console tokens and the owner token's generation. See [Console and tokens](../../../host/console-and-tokens.md#named-tokens).

| `ConsoleTokenList` | JSON key | |
| --- | --- | --- |
| `int OwnerGeneration` | `owner_generation` | Goes up on each `token rotate owner`. |
| `List<ConsoleToken> Tokens` | `tokens` | |

| `ConsoleToken` | JSON key | |
| --- | --- | --- |
| `string Id` | `id` | |
| `string Name` | `name` | |
| `string Preset` | `preset` | `full`, or a label like `custom` |
| `List<string> Access` | `access` | Command and module paths. See [Console](../console.md#named-token-paths). |
| `int Generation` | `generation` | Goes up on each rotate. |
| `DateTime Created`, `DateTime? Expires`, `DateTime? Revoked`, `DateTime? LastUsed` | | |
| `bool IsFull` | | `Preset` is `full`. |
| `string Status(DateTime now)` | | `revoked`, `expired` or `active`. |
| `const string FullPreset = "full"` | | |

The token text isn't in the file. It's made from the row and the server's secret when needed.

:::warning[Never write this file]

The server checks tokens against its own copy in memory, read at start and refreshed only when the server itself changes the file (a `token` command, or a named token logging in). An edit from outside isn't seen until then. And if the file won't read when the server starts, every console token is refused, the owner's too, until it does. Use the `token` commands.

:::

## See also

- [ServerConfigFile](server-config-file.md)
- [Files](../files.md)
