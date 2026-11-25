---
title: "TavernManager"
description: "The service that owns the server's config files. Get it from the service registry. It isn't there on a client."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernManager

A **class** in `TavernLib`, `TavernLib.Backend.Api`.

The service that owns the server's config files. Get it from the service registry. It isn't there on a client.

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
| <Link id="m-serverconfig" /><code><Link to="/tavernlib-api/types/backend-server-configs/serversettingsconfig">{"ServerSettingsConfig"}</Link>{" ServerConfig { get; private set; }"}</code> |  |
| <Link id="m-tavernconfig" /><code><Link to="/tavernlib-api/types/backend-server-configs/tavernserverconfig">{"TavernServerConfig"}</Link>{" TavernConfig { get; private set; }"}</code> |  |
| <Link id="m-userconfig" /><code><Link to="/tavernlib-api/types/backend-server-configs/userconfigfile">{"UserConfigFile"}</Link>{" UserConfig { get; private set; }"}</code> |  |
| <Link id="m-whitelistrequests" /><code><Link to="/tavernlib-api/types/backend-server-configs/whitelistrequestsconfigfile">{"WhitelistRequestsConfigFile"}</Link>{" WhitelistRequests { get; private set; }"}</code> |  |
| <Link id="m-authmanager" /><code>{"internal "}<Link to="/tavernlib-api/types/backend-auth/authmanager">{"AuthManager"}</Link>{" "}<Link to="/tavernlib-api/types/backend-auth/authmanager">{"AuthManager"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-listingcontroller" /><code>{"internal "}<Link to="/tavernlib-api/types/backend-server/serverlistingcontroller">{"ServerListingController"}</Link>{" ListingController { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tryread" /><code>{"private static void TryRead(Action read, string path)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TavernManager`:

[`AuthManager._manager`](/tavernlib-api/types/backend-auth/authmanager#m-manager), [`AuthManager.AuthManager`](/tavernlib-api/types/backend-auth/authmanager#m-ctor), [`ServerListingController._manager`](/tavernlib-api/types/backend-server/serverlistingcontroller#m-manager), [`ServerListingController.ServerListingController`](/tavernlib-api/types/backend-server/serverlistingcontroller#m-ctor), [`PlayerJoinFilter.Refusal`](/tavernlib-api/types/patches/playerjoinfilter#m-refusal).
