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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`SettingsClient`](/mod/game-api/types/assembly-api-client/settingsclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsettings" /><code>{"Task<string> GetSettings(string name)"}</code> | <span className="api-desc">Gets the content of a named setting.</span> |
| <Link id="m-setsettings" /><code>{"Task SetSettings(string name, string content)"}</code> | <span className="api-desc">Saves the content of a named setting.</span> |

## Used in

Members of other types that take, return or hold a `ISettingsClient`:

<div className="api-used-in">

[`HighLevelApiClient.SettingsClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-settingsclient), [`IHighLevelApiClient.SettingsClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-settingsclient), [`OfflineHighLevelApiClient.SettingsClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-settingsclient).

</div>
