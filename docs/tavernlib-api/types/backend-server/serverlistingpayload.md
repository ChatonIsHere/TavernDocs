---
title: "ServerListingPayload"
description: "A struct in TavernLib, TavernLib.Backend.Server."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerListingPayload

A **struct** in `TavernLib`, `TavernLib.Backend.Server`.

A **struct** in `TavernLib`, `TavernLib.Backend.Server`.

- **Listed in** [TavernLib.Backend.Server](/tavernlib-api/types/backend-server)
- **Nested types** [`SceneKind`](/tavernlib-api/types/backend-server/serverlistingpayload-scenekind)
- **Documented in** [ServerListingPayload](/tavernlib-api/types/backend-server/serverlistingpayload), [Internals](/tavernlib-api/internals)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-communitylisted" /><code>{"bool CommunityListed { get; private set; }"}</code> |  |
| <Link id="m-haspassword" /><code>{"bool HasPassword { get; private set; }"}</code> |  |
| <Link id="m-hostname" /><code>{"string HostName { get; private set; }"}</code> |  |
| <Link id="m-listingtoken" /><code>{"string ListingToken { get; private set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> |  |
| <Link id="m-playercount" /><code>{"int PlayerCount { get; private set; }"}</code> |  |
| <Link id="m-playerlimit" /><code>{"int PlayerLimit { get; private set; }"}</code> |  |
| <Link id="m-port" /><code>{"int Port { get; private set; }"}</code> |  |
| <Link id="m-quest" /><code>{"bool Quest { get; private set; }"}</code> |  |
| <Link id="m-region" /><code>{"string Region { get; private set; }"}</code> |  |
| <Link id="m-tutorial" /><code>{"bool Tutorial { get; private set; }"}</code> |  |
| <Link id="m-version" /><code>{"string Version { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromconfig" /><code>{"static "}<Link to="/tavernlib-api/types/backend-server/serverlistingpayload">{"ServerListingPayload"}</Link>{" FromConfig("}<Link to="/tavernlib-api/types/backend-server-configs/serversettingsconfig">{"ServerSettingsConfig"}</Link>{" config, "}<Link to="/tavernlib-api/types/backend-server-configs/tavernserverconfig">{"TavernServerConfig"}</Link>{" tavernConfig)"}</code> |  |
| <Link id="m-resolvescene" /><code>{"private static "}<Link to="/tavernlib-api/types/backend-server/serverlistingpayload-scenekind">{"ServerListingPayload.SceneKind"}</Link>{" ResolveScene("}<Link to="/tavernlib-api/types/backend-server-configs/serversettingsconfig">{"ServerSettingsConfig"}</Link>{" config)"}</code> |  |
