---
title: "TavernDirectories"
description: "The folder and file paths TavernLib uses, worked out each time you read them."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernDirectories

A **static class** in `TavernLib`, `TavernLib`.

The folder and file paths TavernLib uses, worked out each time you read them. None of them creates the folder or file. Both sides.

- **Listed in** [TavernLib](/mod/tavernlib-api/types/root)
- **Documented in** [TavernDirectories](/mod/tavernlib-api/types/root/taverndirectories), [TavernLib API](/mod/tavernlib-api/overview)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-appdata" /><code>{"static string AppData { get; }"}</code> | The current user's roaming application data folder (`%APPDATA%`). |
| <Link id="m-attsave" /><code>{"static string ATTSave { get; }"}</code> | `%APPDATA%\A Township Tale`, the game's own folder with worlds, logs and cosmetic presets. |
| <Link id="m-blacklist" /><code>{"static string Blacklist { get; }"}</code> | `TheModdingTavern\blacklist.json`. TavernLib doesn't use it any more; the blacklist is in `users.json`. |
| <Link id="m-lastrejection" /><code>{"static string LastRejection { get; }"}</code> | `TheModdingTavern\last_rejection.json`. Client: written when a server refuses you for missing mods, for the launcher to read. |
| <Link id="m-launcherpath" /><code>{"static string LauncherPath { get; }"}</code> | `TheModdingTavern\launcher_path.txt`, where the launcher wrote its own exe path. Client: used to start it after a mod refusal. |
| <Link id="m-moddingtavern" /><code>{"static string ModdingTavern { get; }"}</code> | `%APPDATA%\TheModdingTavern`, the folder for TavernLib's and the launcher's config files. |
| <Link id="m-modrepos" /><code>{"static string ModRepos { get; }"}</code> | `TheModdingTavern\mod_repos.json`, the mod sources added with `modmanager addrepo`. |
| <Link id="m-quickjoin" /><code>{"static string QuickJoin { get; }"}</code> | `TheModdingTavern\quick_join`. Quick join is on while this file exists. |
| <Link id="m-serversettings" /><code>{"static string ServerSettings { get; }"}</code> | `TheModdingTavern\server_settings.json`, the server's name, password, limits and backup settings. |
| <Link id="m-tavernserver" /><code>{"static string TavernServer { get; }"}</code> | `TheModdingTavern\tavern_server.json`, the server's ports. |
| <Link id="m-users" /><code>{"static string Users { get; }"}</code> | `TheModdingTavern\users.json`: registered players, roles, whitelist and blacklist. |
| <Link id="m-whitelist" /><code>{"static string Whitelist { get; }"}</code> | `TheModdingTavern\whitelist.json`. TavernLib doesn't use it any more; the whitelist is in `users.json`. |
| <Link id="m-whitelistrequests" /><code>{"static string WhitelistRequests { get; }"}</code> | `TheModdingTavern\whitelist_requests.json`, players who asked to be whitelisted. |
