---
title: "TavernManager"
description: "The server's config files, registered as a service: get it with TavernServices.GetService<TavernManager>()."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernManager

A **class** in `TavernLib`, `TavernLib.Backend.Api`.

The server's config files, registered as a service: get it with `TavernServices.GetService<TavernManager>()`. Server only, also with `/launcherauth`.

- **Listed in** [TavernLib.Backend.Api](/tavernlib-api/types/backend-api)
- **Inherits or implements** [`IService`](/tavernlib-api/types/services/iservice)
- **Documented in** [TavernManager](/tavernlib-api/config/tavern-manager), [TavernManager](/tavernlib-api/types/backend-api/tavernmanager), [Services](/tavernlib-api/services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TavernManager()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serverconfig" /><code><Link to="/tavernlib-api/types/backend-server-configs/serversettingsconfig">{"ServerSettingsConfig"}</Link>{" ServerConfig { get; private set; }"}</code> | `server_settings.json`. |
| <Link id="m-tavernconfig" /><code><Link to="/tavernlib-api/types/backend-server-configs/tavernserverconfig">{"TavernServerConfig"}</Link>{" TavernConfig { get; private set; }"}</code> | `tavern_server.json`, the ports. |
| <Link id="m-userconfig" /><code><Link to="/tavernlib-api/types/backend-server-configs/userconfigfile">{"UserConfigFile"}</Link>{" UserConfig { get; private set; }"}</code> | `users.json`. Change it through `Update` on this object, which is the one TavernLib writes through. |
| <Link id="m-whitelistrequests" /><code><Link to="/tavernlib-api/types/backend-server-configs/whitelistrequestsconfigfile">{"WhitelistRequestsConfigFile"}</Link>{" WhitelistRequests { get; private set; }"}</code> | `whitelist_requests.json`. |
| <Link id="m-authmanager" /><code>{"internal "}<Link to="/tavernlib-api/types/backend-auth/authmanager">{"AuthManager"}</Link>{" "}<Link to="/tavernlib-api/types/backend-auth/authmanager">{"AuthManager"}</Link>{" { get; private set; }"}</code> | Internal: the login server on the auth port. `null` with `/launcherauth`. |
| <Link id="m-listingcontroller" /><code>{"internal "}<Link to="/tavernlib-api/types/backend-server/serverlistingcontroller">{"ServerListingController"}</Link>{" ListingController { get; private set; }"}</code> | Internal: the Community Servers heartbeat. `null` unless `community_listed` was on at start. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tryread" /><code>{"private static void TryRead(Action read, string path)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TavernManager`:

[`AuthManager._manager`](/tavernlib-api/types/backend-auth/authmanager#m-manager), [`AuthManager.AuthManager`](/tavernlib-api/types/backend-auth/authmanager#m-ctor), [`ServerListingController._manager`](/tavernlib-api/types/backend-server/serverlistingcontroller#m-manager), [`ServerListingController.ServerListingController`](/tavernlib-api/types/backend-server/serverlistingcontroller#m-ctor), [`PlayerJoinFilter.Refusal`](/tavernlib-api/types/patches/playerjoinfilter#m-refusal).
