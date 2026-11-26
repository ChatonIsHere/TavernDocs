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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ILoginPreferences`](/game-api/types/assembly-other/iloginpreferences), `IInitializable`, `IDisposable`
- **Attributes** `Preserve`, `UsedImplicitly`
- **Documented in** [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginPreferences("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient)"}</code> | Creates a `LoginPreferences` from `apiClient`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accesstoken" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" accessToken"}</code> | Player preference holding the access token. |
| <Link id="m-apiclient" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> | The API client whose credential changes are saved. |
| <Link id="m-identitytoken" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" identityToken"}</code> | Player preference holding the identity token. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-refreshtoken" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" refreshToken"}</code> | Player preference holding the refresh token. |
| <Link id="m-rememberdetails" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/playerpreferencebool">{"PlayerPreferenceBool"}</Link>{" rememberDetails"}</code> | Player preference `rememberLogin`, backing `RememberDetails`. |
| <Link id="m-savedusername" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" savedUsername"}</code> | Player preference `savedUsername`, backing `SavedUsername`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-refreshtoken-2" /><code>{"string RefreshToken { get; }"}</code> | The saved refresh token. |
| <Link id="m-rememberdetails-2" /><code>{"bool RememberDetails { get; set; }"}</code> | Whether the player chose to stay logged in. Refresh token login is skipped when false. |
| <Link id="m-savedusername-2" /><code>{"string SavedUsername { get; set; }"}</code> | Username saved for the login screen. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcredentials" /><code>{"void ClearCredentials()"}</code> | Empties the saved access, refresh and identity tokens. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Unhooks from the API client's `CredentialsChanged`. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Hooks the API client's `CredentialsChanged` so new tokens are saved. |
| <Link id="m-savecredentials" /><code>{"void SaveCredentials("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | Writes all three tokens to player preferences and saves them to disk, whatever `RememberDetails` says. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncredentialschanged" /><code>{"private void OnCredentialsChanged("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" oldCredentials, "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" newCredentials)"}</code> | Saves the new credentials on the main thread. |

</details>
