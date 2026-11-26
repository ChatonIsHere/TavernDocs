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
| <Link id="m-appdata" /><code>{"static string AppData { get; }"}</code> | <span className="api-desc">The current user's roaming application data folder (`%APPDATA%`).</span> |
| <Link id="m-attsave" /><code>{"static string ATTSave { get; }"}</code> | <span className="api-desc">`%APPDATA%\A Township Tale`, the game's own folder with worlds, logs and cosmetic presets.</span> |
| <Link id="m-blacklist" /><code>{"static string Blacklist { get; }"}</code> | <span className="api-desc">`TheModdingTavern\blacklist.json`. TavernLib doesn't use it any more; the blacklist is in `users.json`.</span> |
| <Link id="m-lastrejection" /><code>{"static string LastRejection { get; }"}</code> | <span className="api-desc">`TheModdingTavern\last_rejection.json`. Client: written when a server refuses you for missing mods, for the launcher to read.</span> |
| <Link id="m-launcherpath" /><code>{"static string LauncherPath { get; }"}</code> | <span className="api-desc">`TheModdingTavern\launcher_path.txt`, where the launcher wrote its own exe path. Client: used to start it after a mod refusal.</span> |
| <Link id="m-moddingtavern" /><code>{"static string ModdingTavern { get; }"}</code> | <span className="api-desc">`%APPDATA%\TheModdingTavern`, the folder for TavernLib's and the launcher's config files.</span> |
| <Link id="m-modrepos" /><code>{"static string ModRepos { get; }"}</code> | <span className="api-desc">`TheModdingTavern\mod_repos.json`, the mod sources added with `modmanager addrepo`.</span> |
| <Link id="m-quickjoin" /><code>{"static string QuickJoin { get; }"}</code> | <span className="api-desc">`TheModdingTavern\quick_join`. Quick join is on while this file exists.</span> |
| <Link id="m-serversettings" /><code>{"static string ServerSettings { get; }"}</code> | <span className="api-desc">`TheModdingTavern\server_settings.json`, the server's name, password, limits and backup settings.</span> |
| <Link id="m-tavernserver" /><code>{"static string TavernServer { get; }"}</code> | <span className="api-desc">`TheModdingTavern\tavern_server.json`, the server's ports.</span> |
| <Link id="m-users" /><code>{"static string Users { get; }"}</code> | <span className="api-desc">`TheModdingTavern\users.json`: registered players, roles, whitelist and blacklist.</span> |
| <Link id="m-whitelist" /><code>{"static string Whitelist { get; }"}</code> | <span className="api-desc">`TheModdingTavern\whitelist.json`. TavernLib doesn't use it any more; the whitelist is in `users.json`.</span> |
| <Link id="m-whitelistrequests" /><code>{"static string WhitelistRequests { get; }"}</code> | <span className="api-desc">`TheModdingTavern\whitelist_requests.json`, players who asked to be whitelisted.</span> |
