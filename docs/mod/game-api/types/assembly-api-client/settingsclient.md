---
title: "SettingsClient"
description: "High-level API client for named settings documents stored on the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

High-level API client for named settings documents stored on the Alta API. Reached through the high-level API client.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`ISettingsClient`](/mod/game-api/types/assembly-api-client/isettingsclient)
- **Documented in** [Alta's web API](/mod/game-api/console-and-utilities/alta-web-api)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal SettingsClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates a `SettingsClient` from `clientManager`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsettings" /><code>{"async Task<string> GetSettings(string name)"}</code> | Fetches the named settings and returns their content, or an empty string if none exist. |
| <Link id="m-setsettings" /><code>{"Task SetSettings(string name, string content)"}</code> | Stores the content under the given settings name. |
