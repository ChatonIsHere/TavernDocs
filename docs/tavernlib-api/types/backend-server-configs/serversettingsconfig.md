---
title: "ServerSettingsConfig"
description: "The ServerConfigFile for server_settings.json."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSettingsConfig

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

The `ServerConfigFile` for `server_settings.json`. Hashes plain passwords and makes a listing token when there is none.

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Inherits or implements** [`ServerConfigFile<ServerSettings>`](/tavernlib-api/types/backend-server-configs/serverconfigfile-t)
- **Documented in** [ServerSettingsConfig](/tavernlib-api/types/backend-server-configs/serversettingsconfig), [Server settings](/tavernlib-api/config/server-settings#serversettingsconfig)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSettingsConfig(string filePath)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sha256hex" /><code>{"private static readonly Regex Sha256Hex"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-readfromfile" /><code>{"override void ReadFromFile()"}</code> | Reads the file, then makes and saves a random `community_listing_token` if it's empty. |
| <Link id="m-hash" /><code>{"private static string Hash(string password)"}</code> |  |
| <Link id="m-tidy" /><code>{"protected override bool Tidy("}<Link to="/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | Swaps a plain `password` for its hash, or hashes a `password_hash` that isn't a SHA-256 hex string. Returns true when it changed anything. |

## Used in

Members of other types that take, return or hold a `ServerSettingsConfig`:

[`TavernManager.ServerConfig`](/tavernlib-api/types/backend-api/tavernmanager#m-serverconfig), [`ServerListingPayload.FromConfig`](/tavernlib-api/types/backend-server/serverlistingpayload#m-fromconfig), [`ServerListingPayload.ResolveScene`](/tavernlib-api/types/backend-server/serverlistingpayload#m-resolvescene).
