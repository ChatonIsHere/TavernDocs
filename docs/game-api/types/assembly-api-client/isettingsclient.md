---
title: "ISettingsClient"
description: "Alta web API calls for named settings stored as text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISettingsClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for named settings stored as text. `ApiAccess.ApiClient.SettingsClient`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`SettingsClient`](/game-api/types/assembly-api-client/settingsclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsettings" /><code>{"Task<string> GetSettings(string name)"}</code> | Gets the content of a named setting. |
| <Link id="m-setsettings" /><code>{"Task SetSettings(string name, string content)"}</code> | Saves the content of a named setting. |

## Used in

Members of other types that take, return or hold a `ISettingsClient`:

[`HighLevelApiClient.SettingsClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-settingsclient), [`IHighLevelApiClient.SettingsClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-settingsclient), [`OfflineHighLevelApiClient.SettingsClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-settingsclient).
