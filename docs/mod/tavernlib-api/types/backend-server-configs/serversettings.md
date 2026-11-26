---
title: "ServerSettings"
description: "The contents of server_settings.json."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSettings

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

The contents of `server_settings.json`. Unknown keys are kept. Read it through `TavernManager.ServerConfig`.

- **Listed in** [TavernLib.Backend.Server.Configs](/mod/tavernlib-api/types/backend-server-configs)
- **Derived types** [`ServerSettingsConfig`](/mod/tavernlib-api/types/backend-server-configs/serversettingsconfig)
- **Documented in** [ServerSettings](/mod/tavernlib-api/types/backend-server-configs/serversettings), [Server settings](/mod/game-api/networking/server-settings#serversettings), [Server settings](/mod/tavernlib-api/config/server-settings#serversettings), [Folders](/mod/tavernlib-api/directories)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSettings()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultmaxplayers" /><code>{"const int DefaultMaxPlayers"}</code> | <span className="api-desc">24, the player limit when `max_players` is 0 or less. The launcher's default too.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-communitylisted" /><code>{"bool CommunityListed { get; private set; }"}</code> | <span className="api-desc">`community_listed`: whether the server is sent to the Community Servers listing. Only read when `TavernManager` starts.</span> |
| <Link id="m-communitylistingtoken" /><code>{"string CommunityListingToken { get; internal set; }"}</code> | <span className="api-desc">`community_listing_token`, the server's secret for the listing. Made by `ServerSettingsConfig.ReadFromFile` when empty.</span> |
| <Link id="m-consoleownerlocalonly" /><code>{"bool ConsoleOwnerLocalOnly { get; private set; }"}</code> | <span className="api-desc">`console_owner_local_only`: when on, the owner console token only logs in from a loopback address.</span> |
| <Link id="m-enforceiplimit" /><code>{"bool EnforceIpLimit { get; private set; }"}</code> | <span className="api-desc">`enforce_ip_limit`, on by default: at most 5 new names may register from one address.</span> |
| <Link id="m-garbagecollectiontimer" /><code>{"float GarbageCollectionTimer { get; private set; }"}</code> | <span className="api-desc">`garbage_collection_timer`, the game's garbage collect interval in seconds. Defaults to 30.</span> |
| <Link id="m-maxplayers" /><code>{"int MaxPlayers { get; private set; }"}</code> | <span className="api-desc">`max_players` as written. Use `PlayerLimit`, which handles 0 or less.</span> |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">`name`, shown on the listing and in ping replies. Defaults to `My Tavern Server`.</span> |
| <Link id="m-password" /><code>{"string Password { get; internal set; }"}</code> | <span className="api-desc">`password`, a plain password typed in by hand. Reading the file swaps it for `password_hash` and removes it.</span> |
| <Link id="m-passwordhash" /><code>{"string PasswordHash { get; internal set; }"}</code> | <span className="api-desc">`password_hash`: SHA-256 of SHA-256 of the password, or empty for none.</span> |
| <Link id="m-playerlimit" /><code>{"int PlayerLimit { get; }"}</code> | <span className="api-desc">`max_players`, or `DefaultMaxPlayers` when that is 0 or less. Not saved to the file.</span> |
| <Link id="m-publichostname" /><code>{"string PublicHostname { get; private set; }"}</code> | <span className="api-desc">`public_hostname`, sent to the listing as the server's host name.</span> |
| <Link id="m-questscene" /><code>{"bool QuestScene { get; private set; }"}</code> | <span className="api-desc">`quest_scene`: tells joining players the Quest scene is needed, and is the listing's fallback when no scene argument is given.</span> |
| <Link id="m-region" /><code>{"string Region { get; private set; }"}</code> | <span className="api-desc">`region`, sent to the listing. Defaults to `unknown`.</span> |
| <Link id="m-serverbackupmaxbackups" /><code>{"int ServerBackupMaxBackups { get; private set; }"}</code> | <span className="api-desc">`server_backup_max_backups`: how many backups to keep. 0 keeps all.</span> |
| <Link id="m-serverbackuptime" /><code>{"float ServerBackupTime { get; private set; }"}</code> | <span className="api-desc">`server_backup_time`: hours between backups. 0 turns them off.</span> |
| <Link id="m-tutorialscene" /><code>{"bool TutorialScene { get; private set; }"}</code> | <span className="api-desc">`tutorial_scene`: like `QuestScene`, for the tutorial scene.</span> |
| <Link id="m-whitelistenabled" /><code>{"bool WhitelistEnabled { get; private set; }"}</code> | <span className="api-desc">`whitelist_enabled`: turns the whitelist on. Without `/launcherauth`, a non-empty whitelist is on regardless.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | <span className="api-desc">Holds JSON keys TavernLib doesn't model, so they are written back unchanged.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerSettings`:

<div className="api-used-in">

[`AuthManager.CheckIfPermitted`](/mod/tavernlib-api/types/backend-auth/authmanager#m-checkifpermitted), [`AuthManager.ReadSettings`](/mod/tavernlib-api/types/backend-auth/authmanager#m-readsettings), [`AuthManager.Register`](/mod/tavernlib-api/types/backend-auth/authmanager#m-register), [`JoinRules.WhitelistOn`](/mod/tavernlib-api/types/backend-auth/joinrules#m-whiteliston), [`ServerSettingsConfig.Tidy`](/mod/tavernlib-api/types/backend-server-configs/serversettingsconfig#m-tidy).

</div>
