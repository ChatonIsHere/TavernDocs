---
title: "ServerSettings"
description: "A class in TavernLib, TavernLib.Backend.Server.Configs."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSettings

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Derived types** [`ServerSettingsConfig`](/tavernlib-api/types/backend-server-configs/serversettingsconfig)
- **Documented in** [ServerSettings](/tavernlib-api/types/backend-server-configs/serversettings), [Server settings](/game-api/networking/server-settings#serversettings), [Server settings](/tavernlib-api/config/server-settings#serversettings), [Folders](/tavernlib-api/directories)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultmaxplayers" /><code>{"const int DefaultMaxPlayers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-communitylisted" /><code>{"bool CommunityListed { get; private set; }"}</code> |  |
| <Link id="m-communitylistingtoken" /><code>{"string CommunityListingToken { get; internal set; }"}</code> |  |
| <Link id="m-consoleownerlocalonly" /><code>{"bool ConsoleOwnerLocalOnly { get; private set; }"}</code> |  |
| <Link id="m-enforceiplimit" /><code>{"bool EnforceIpLimit { get; private set; }"}</code> |  |
| <Link id="m-garbagecollectiontimer" /><code>{"float GarbageCollectionTimer { get; private set; }"}</code> |  |
| <Link id="m-maxplayers" /><code>{"int MaxPlayers { get; private set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> |  |
| <Link id="m-password" /><code>{"string Password { get; internal set; }"}</code> |  |
| <Link id="m-passwordhash" /><code>{"string PasswordHash { get; internal set; }"}</code> |  |
| <Link id="m-playerlimit" /><code>{"int PlayerLimit { get; }"}</code> |  |
| <Link id="m-publichostname" /><code>{"string PublicHostname { get; private set; }"}</code> |  |
| <Link id="m-questscene" /><code>{"bool QuestScene { get; private set; }"}</code> |  |
| <Link id="m-region" /><code>{"string Region { get; private set; }"}</code> |  |
| <Link id="m-serverbackupmaxbackups" /><code>{"int ServerBackupMaxBackups { get; private set; }"}</code> |  |
| <Link id="m-serverbackuptime" /><code>{"float ServerBackupTime { get; private set; }"}</code> |  |
| <Link id="m-tutorialscene" /><code>{"bool TutorialScene { get; private set; }"}</code> |  |
| <Link id="m-whitelistenabled" /><code>{"bool WhitelistEnabled { get; private set; }"}</code> |  |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerSettings`:

[`AuthManager.CheckIfPermitted`](/tavernlib-api/types/backend-auth/authmanager#m-checkifpermitted), [`AuthManager.ReadSettings`](/tavernlib-api/types/backend-auth/authmanager#m-readsettings), [`AuthManager.Register`](/tavernlib-api/types/backend-auth/authmanager#m-register), [`JoinRules.WhitelistOn`](/tavernlib-api/types/backend-auth/joinrules#m-whiteliston), [`ServerSettingsConfig.Tidy`](/tavernlib-api/types/backend-server-configs/serversettingsconfig#m-tidy).
