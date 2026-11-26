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

- **Listed in** [TavernLib.Backend.Server](/mod/tavernlib-api/types/backend-server)
- **Nested types** [`SceneKind`](/mod/tavernlib-api/types/backend-server/serverlistingpayload-scenekind)
- **Documented in** [Internals](/mod/tavernlib-api/internals)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-communitylisted" /><code>{"bool CommunityListed { get; private set; }"}</code> | <span className="api-desc">`community_listed` from the server settings.</span> |
| <Link id="m-haspassword" /><code>{"bool HasPassword { get; private set; }"}</code> | <span className="api-desc">True when the settings have a password hash.</span> |
| <Link id="m-hostname" /><code>{"string HostName { get; private set; }"}</code> | <span className="api-desc">`public_hostname` from the server settings.</span> |
| <Link id="m-listingtoken" /><code>{"string ListingToken { get; private set; }"}</code> | <span className="api-desc">The server's `community_listing_token`, which identifies it to the listing.</span> |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">The server's name.</span> |
| <Link id="m-playercount" /><code>{"int PlayerCount { get; private set; }"}</code> | <span className="api-desc">`ServerHandler.Current.Connections`, or 0 before the server is up.</span> |
| <Link id="m-playerlimit" /><code>{"int PlayerLimit { get; private set; }"}</code> | <span className="api-desc">The live `ServerHandler.PlayerLimit`, or the settings' limit before the server is up.</span> |
| <Link id="m-port" /><code>{"int Port { get; private set; }"}</code> | <span className="api-desc">`server_port` from `tavern_server.json`, as written (0 if left out).</span> |
| <Link id="m-quest" /><code>{"bool Quest { get; private set; }"}</code> | <span className="api-desc">True when the server runs the Quest scene: `/questScene`, or `quest_scene` in the settings.</span> |
| <Link id="m-region" /><code>{"string Region { get; private set; }"}</code> | <span className="api-desc">`region` from the server settings.</span> |
| <Link id="m-tutorial" /><code>{"bool Tutorial { get; private set; }"}</code> | <span className="api-desc">True when the server runs the tutorial scene: `/tutorialScene`, or `tutorial_scene`. Beats Quest.</span> |
| <Link id="m-version" /><code>{"string Version { get; private set; }"}</code> | <span className="api-desc">TavernLib's version.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromconfig" /><code>{"static "}<Link to="/mod/tavernlib-api/types/backend-server/serverlistingpayload">{"ServerListingPayload"}</Link>{" FromConfig("}<Link to="/mod/tavernlib-api/types/backend-server-configs/serversettingsconfig">{"ServerSettingsConfig"}</Link>{" config, "}<Link to="/mod/tavernlib-api/types/backend-server-configs/tavernserverconfig">{"TavernServerConfig"}</Link>{" tavernConfig)"}</code> | <span className="api-desc">Builds the payload from the last-read settings and ports, using the live player limit and connection count when a server is running.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-resolvescene" /><code>{"private static "}<Link to="/mod/tavernlib-api/types/backend-server/serverlistingpayload-scenekind">{"ServerListingPayload.SceneKind"}</Link>{" ResolveScene("}<Link to="/mod/tavernlib-api/types/backend-server-configs/serversettingsconfig">{"ServerSettingsConfig"}</Link>{" config)"}</code> | <span className="api-desc">Decides whether the server runs the normal, quest or tutorial scene, with the launch arguments first and the settings as fallback.</span> |

</details>
