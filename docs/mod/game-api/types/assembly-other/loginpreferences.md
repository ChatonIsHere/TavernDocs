---
title: "LoginPreferences"
description: "Keeps the login tokens, remember-me flag and saved username in player preferences, and saves new tokens whenever the API client's credentials change."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginPreferences

A **class** in `Alta.Authentication`, `Alta.Authentication`.

Keeps the login tokens, remember-me flag and saved username in player preferences, and saves new tokens whenever the API client's credentials change. Registered as `ILoginPreferences`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`ILoginPreferences`](/mod/game-api/types/assembly-other/iloginpreferences), `IInitializable`, `IDisposable`
- **Attributes** `Preserve`, `UsedImplicitly`
- **Documented in** [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginPreferences("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient)"}</code> | <span className="api-desc">Creates a `LoginPreferences` from `apiClient`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accesstoken" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" accessToken"}</code> | <span className="api-desc">Player preference holding the access token.</span> |
| <Link id="m-apiclient" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> | <span className="api-desc">The API client whose credential changes are saved.</span> |
| <Link id="m-identitytoken" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" identityToken"}</code> | <span className="api-desc">Player preference holding the identity token.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-refreshtoken" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" refreshToken"}</code> | <span className="api-desc">Player preference holding the refresh token.</span> |
| <Link id="m-rememberdetails" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/playerpreferencebool">{"PlayerPreferenceBool"}</Link>{" rememberDetails"}</code> | <span className="api-desc">Player preference `rememberLogin`, backing `RememberDetails`.</span> |
| <Link id="m-savedusername" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" savedUsername"}</code> | <span className="api-desc">Player preference `savedUsername`, backing `SavedUsername`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-refreshtoken-2" /><code>{"string RefreshToken { get; }"}</code> | <span className="api-desc">The saved refresh token.</span> |
| <Link id="m-rememberdetails-2" /><code>{"bool RememberDetails { get; set; }"}</code> | <span className="api-desc">Whether the player chose to stay logged in. Refresh token login is skipped when false.</span> |
| <Link id="m-savedusername-2" /><code>{"string SavedUsername { get; set; }"}</code> | <span className="api-desc">Username saved for the login screen.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcredentials" /><code>{"void ClearCredentials()"}</code> | <span className="api-desc">Empties the saved access, refresh and identity tokens.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Unhooks from the API client's `CredentialsChanged`.</span> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Hooks the API client's `CredentialsChanged` so new tokens are saved.</span> |
| <Link id="m-savecredentials" /><code>{"void SaveCredentials("}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | <span className="api-desc">Writes all three tokens to player preferences and saves them to disk, whatever `RememberDetails` says.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncredentialschanged" /><code>{"private void OnCredentialsChanged("}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" oldCredentials, "}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" newCredentials)"}</code> | <span className="api-desc">Saves the new credentials on the main thread.</span> |

</details>
