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
| `max_players` | `24` | How many players can be on at once. |
| `whitelist_enabled` | `false` | Only players on the whitelist can join. Others can ask to join. |
| `enforce_ip_limit` | `false` | At most 5 accounts from one IP address. Stops one person making loads of accounts. |
| `community_listed` | `false` | Show the server on Community Servers. Needs a restart. See [Getting listed](getting-listed.md). |
| `region` | `"unknown"` | `EU`, `NA`, `SA`, `Asia`, `Oceania`, `Africa` or `unknown`. Shown on the list. |
| `public_hostname` | none | A name to show on the list instead of your IP. It has to point at your server. |
| `community_listing_token` | made for you | How the list knows updates are from your server. Leave it alone. |
| `quest_scene` | `false` | Run the Quest scene (no forest, lighter graphics). Needs a restart. |
| `tutorial_scene` | `false` | Run the tutorial scene. Beats `quest_scene` if both are on. Needs a restart. |
| `server_backup_time` | `0` | Hours between automatic world backups on a headless server. `0` is off. The Windows launcher does its own backups. |
| `server_backup_max_backups` | `0` | How many automatic backups to keep. `0` keeps them all. |
| `garbage_collection_timer` | `30` | How often the game cleans up dropped items and other leftovers. |
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
| `Logs/logs/unity-log.csv` | The game's log. Older ones are in `Archives/`, 20 at most. |

`ServerConfiguration.json` is written on the first start. AMP shows its settings in its UI. Elsewhere, stop the server and edit it by hand.
