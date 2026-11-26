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
| <Link id="m-ctor" /><code>{"ServerSettings()"}</code> | Created by TavernLib; mods don't make one. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultmaxplayers" /><code>{"const int DefaultMaxPlayers"}</code> | 24, the player limit when `max_players` is 0 or less. The launcher's default too. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-communitylisted" /><code>{"bool CommunityListed { get; private set; }"}</code> | `community_listed`: whether the server is sent to the Community Servers listing. Only read when `TavernManager` starts. |
| <Link id="m-communitylistingtoken" /><code>{"string CommunityListingToken { get; internal set; }"}</code> | `community_listing_token`, the server's secret for the listing. Made by `ServerSettingsConfig.ReadFromFile` when empty. |
| <Link id="m-consoleownerlocalonly" /><code>{"bool ConsoleOwnerLocalOnly { get; private set; }"}</code> | `console_owner_local_only`: when on, the owner console token only logs in from a loopback address. |
| <Link id="m-enforceiplimit" /><code>{"bool EnforceIpLimit { get; private set; }"}</code> | `enforce_ip_limit`, on by default: at most 5 new names may register from one address. |
| <Link id="m-garbagecollectiontimer" /><code>{"float GarbageCollectionTimer { get; private set; }"}</code> | `garbage_collection_timer`, the game's garbage collect interval in seconds. Defaults to 30. |
| <Link id="m-maxplayers" /><code>{"int MaxPlayers { get; private set; }"}</code> | `max_players` as written. Use `PlayerLimit`, which handles 0 or less. |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | `name`, shown on the listing and in ping replies. Defaults to `My Tavern Server`. |
| <Link id="m-password" /><code>{"string Password { get; internal set; }"}</code> | `password`, a plain password typed in by hand. Reading the file swaps it for `password_hash` and removes it. |
| <Link id="m-passwordhash" /><code>{"string PasswordHash { get; internal set; }"}</code> | `password_hash`: SHA-256 of SHA-256 of the password, or empty for none. |
| <Link id="m-playerlimit" /><code>{"int PlayerLimit { get; }"}</code> | `max_players`, or `DefaultMaxPlayers` when that is 0 or less. Not saved to the file. |
| <Link id="m-publichostname" /><code>{"string PublicHostname { get; private set; }"}</code> | `public_hostname`, sent to the listing as the server's host name. |
| <Link id="m-questscene" /><code>{"bool QuestScene { get; private set; }"}</code> | `quest_scene`: tells joining players the Quest scene is needed, and is the listing's fallback when no scene argument is given. |
| <Link id="m-region" /><code>{"string Region { get; private set; }"}</code> | `region`, sent to the listing. Defaults to `unknown`. |
| <Link id="m-serverbackupmaxbackups" /><code>{"int ServerBackupMaxBackups { get; private set; }"}</code> | `server_backup_max_backups`: how many backups to keep. 0 keeps all. |
| <Link id="m-serverbackuptime" /><code>{"float ServerBackupTime { get; private set; }"}</code> | `server_backup_time`: hours between backups. 0 turns them off. |
| <Link id="m-tutorialscene" /><code>{"bool TutorialScene { get; private set; }"}</code> | `tutorial_scene`: like `QuestScene`, for the tutorial scene. |
| <Link id="m-whitelistenabled" /><code>{"bool WhitelistEnabled { get; private set; }"}</code> | `whitelist_enabled`: turns the whitelist on. Without `/launcherauth`, a non-empty whitelist is on regardless. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | Holds JSON keys TavernLib doesn't model, so they are written back unchanged. |

</details>

## Used in

Members of other types that take, return or hold a `ServerSettings`:

[`AuthManager.CheckIfPermitted`](/mod/tavernlib-api/types/backend-auth/authmanager#m-checkifpermitted), [`AuthManager.ReadSettings`](/mod/tavernlib-api/types/backend-auth/authmanager#m-readsettings), [`AuthManager.Register`](/mod/tavernlib-api/types/backend-auth/authmanager#m-register), [`JoinRules.WhitelistOn`](/mod/tavernlib-api/types/backend-auth/joinrules#m-whiteliston), [`ServerSettingsConfig.Tidy`](/mod/tavernlib-api/types/backend-server-configs/serversettingsconfig#m-tidy).
