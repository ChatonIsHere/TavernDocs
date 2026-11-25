---
title: "ServerListingPayload"
description: "The JSON body each heartbeat sends to the Community Servers listing, built from the server's settings and ports."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerListingPayload

A **struct** in `TavernLib`, `TavernLib.Backend.Server`.

The JSON body each heartbeat sends to the Community Servers listing, built from the server's settings and ports.

- **Listed in** [TavernLib.Backend.Server](/tavernlib-api/types/backend-server)
- **Nested types** [`SceneKind`](/tavernlib-api/types/backend-server/serverlistingpayload-scenekind)
- **Documented in** [ServerListingPayload](/tavernlib-api/types/backend-server/serverlistingpayload), [Internals](/tavernlib-api/internals)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-communitylisted" /><code>{"bool CommunityListed { get; private set; }"}</code> | `community_listed` from the server settings. |
| <Link id="m-haspassword" /><code>{"bool HasPassword { get; private set; }"}</code> | True when the settings have a password hash. |
| <Link id="m-hostname" /><code>{"string HostName { get; private set; }"}</code> | `public_hostname` from the server settings. |
| <Link id="m-listingtoken" /><code>{"string ListingToken { get; private set; }"}</code> | The server's `community_listing_token`, which identifies it to the listing. |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | The server's name. |
| <Link id="m-playercount" /><code>{"int PlayerCount { get; private set; }"}</code> | `ServerHandler.Current.Connections`, or 0 before the server is up. |
| <Link id="m-playerlimit" /><code>{"int PlayerLimit { get; private set; }"}</code> | The live `ServerHandler.PlayerLimit`, or the settings' limit before the server is up. |
| <Link id="m-port" /><code>{"int Port { get; private set; }"}</code> | `server_port` from `tavern_server.json`, as written (0 if left out). |
| <Link id="m-quest" /><code>{"bool Quest { get; private set; }"}</code> | True when the server runs the Quest scene: `/questScene`, or `quest_scene` in the settings. |
| <Link id="m-region" /><code>{"string Region { get; private set; }"}</code> | `region` from the server settings. |
| <Link id="m-tutorial" /><code>{"bool Tutorial { get; private set; }"}</code> | True when the server runs the tutorial scene: `/tutorialScene`, or `tutorial_scene`. Beats Quest. |
| <Link id="m-version" /><code>{"string Version { get; private set; }"}</code> | TavernLib's version. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromconfig" /><code>{"static "}<Link to="/tavernlib-api/types/backend-server/serverlistingpayload">{"ServerListingPayload"}</Link>{" FromConfig("}<Link to="/tavernlib-api/types/backend-server-configs/serversettingsconfig">{"ServerSettingsConfig"}</Link>{" config, "}<Link to="/tavernlib-api/types/backend-server-configs/tavernserverconfig">{"TavernServerConfig"}</Link>{" tavernConfig)"}</code> | Builds the payload from the last-read settings and ports, using the live player limit and connection count when a server is running. |
| <Link id="m-resolvescene" /><code>{"private static "}<Link to="/tavernlib-api/types/backend-server/serverlistingpayload-scenekind">{"ServerListingPayload.SceneKind"}</Link>{" ResolveScene("}<Link to="/tavernlib-api/types/backend-server-configs/serversettingsconfig">{"ServerSettingsConfig"}</Link>{" config)"}</code> |  |
