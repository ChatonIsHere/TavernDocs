---
title: "LoginPreferences"
description: "class LoginPreferences in Alta.Authentication."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginPreferences

A **class** in `Alta.Authentication`, `Alta.Authentication`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ILoginPreferences`](/game-api/types/assembly-other/iloginpreferences), `IInitializable`, `IDisposable`
- **Attributes** `Preserve`, `UsedImplicitly`
- **Documented in** [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginPreferences("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accesstoken" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" accessToken"}</code> |  |
| <Link id="m-apiclient" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> |  |
| <Link id="m-identitytoken" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" identityToken"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-refreshtoken" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" refreshToken"}</code> |  |
| <Link id="m-rememberdetails" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/playerpreferencebool">{"PlayerPreferenceBool"}</Link>{" rememberDetails"}</code> |  |
| <Link id="m-savedusername" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/playerpreferencestring">{"PlayerPreferenceString"}</Link>{" savedUsername"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-refreshtoken-2" /><code>{"string RefreshToken { get; }"}</code> |  |
| <Link id="m-rememberdetails-2" /><code>{"bool RememberDetails { get; set; }"}</code> |  |
| <Link id="m-savedusername-2" /><code>{"string SavedUsername { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcredentials" /><code>{"void ClearCredentials()"}</code> |  |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |
| <Link id="m-savecredentials" /><code>{"void SaveCredentials("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> |  |
| <Link id="m-oncredentialschanged" /><code>{"private void OnCredentialsChanged("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" oldCredentials, "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" newCredentials)"}</code> |  |
