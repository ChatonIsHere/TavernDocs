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

- **Listed in** [TavernLib.Backend.Api](/mod/tavernlib-api/types/backend-api)
- **Inherits or implements** [`IService`](/mod/tavernlib-api/types/services/iservice)
- **Documented in** [TavernManager](/mod/tavernlib-api/config/tavern-manager), [Services](/mod/tavernlib-api/services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TavernManager()"}</code> | <span className="api-desc">Creates and reads the config files, then starts the listing controller and auth manager when they are on.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serverconfig" /><code><Link to="/mod/tavernlib-api/types/backend-server-configs/serversettingsconfig">{"ServerSettingsConfig"}</Link>{" ServerConfig { get; private set; }"}</code> | <span className="api-desc">`server_settings.json`.</span> |
| <Link id="m-tavernconfig" /><code><Link to="/mod/tavernlib-api/types/backend-server-configs/tavernserverconfig">{"TavernServerConfig"}</Link>{" TavernConfig { get; private set; }"}</code> | <span className="api-desc">`tavern_server.json`, the ports.</span> |
| <Link id="m-userconfig" /><code><Link to="/mod/tavernlib-api/types/backend-server-configs/userconfigfile">{"UserConfigFile"}</Link>{" UserConfig { get; private set; }"}</code> | <span className="api-desc">`users.json`. Change it through `Update` on this object, which is the one TavernLib writes through.</span> |
| <Link id="m-whitelistrequests" /><code><Link to="/mod/tavernlib-api/types/backend-server-configs/whitelistrequestsconfigfile">{"WhitelistRequestsConfigFile"}</Link>{" WhitelistRequests { get; private set; }"}</code> | <span className="api-desc">`whitelist_requests.json`.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-authmanager" /><code>{"internal "}<Link to="/mod/tavernlib-api/types/backend-auth/authmanager">{"AuthManager"}</Link>{" "}<Link to="/mod/tavernlib-api/types/backend-auth/authmanager">{"AuthManager"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Internal: the login server on the auth port. `null` with `/launcherauth`.</span> |
| <Link id="m-listingcontroller" /><code>{"internal "}<Link to="/mod/tavernlib-api/types/backend-server/serverlistingcontroller">{"ServerListingController"}</Link>{" ListingController { get; private set; }"}</code> | <span className="api-desc">Internal: the Community Servers heartbeat. `null` unless `community_listed` was on at start.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tryread" /><code>{"private static void TryRead(Action read, string path)"}</code> | <span className="api-desc">Runs a config read and logs an error instead of throwing if it fails.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TavernManager`:

<div className="api-used-in">

[`AuthManager._manager`](/mod/tavernlib-api/types/backend-auth/authmanager#m-manager), [`AuthManager.AuthManager`](/mod/tavernlib-api/types/backend-auth/authmanager#m-ctor), [`ServerListingController._manager`](/mod/tavernlib-api/types/backend-server/serverlistingcontroller#m-manager), [`ServerListingController.ServerListingController`](/mod/tavernlib-api/types/backend-server/serverlistingcontroller#m-ctor), [`PlayerJoinFilter.Refusal`](/mod/tavernlib-api/types/patches/playerjoinfilter#m-refusal).

</div>
