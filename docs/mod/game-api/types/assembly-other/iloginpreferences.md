---
title: "ILoginPreferences"
description: "Client-side storage for login details: whether to remember them, the saved username and the refresh token."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILoginPreferences

An **interface** in `Alta.Authentication`, `Alta.Authentication`.

Client-side storage for login details: whether to remember them, the saved username and the refresh token.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`LoginPreferences`](/mod/game-api/types/assembly-other/loginpreferences)
- **Documented in** [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-refreshtoken" /><code>{"string RefreshToken { get; }"}</code> | <span className="api-desc">The saved refresh token used to sign in again without a password.</span> |
| <Link id="m-rememberdetails" /><code>{"bool RememberDetails { get; set; }"}</code> | <span className="api-desc">Whether the player chose to have their login remembered.</span> |
| <Link id="m-savedusername" /><code>{"string SavedUsername { get; set; }"}</code> | <span className="api-desc">The username to prefill on the login screen.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcredentials" /><code>{"void ClearCredentials()"}</code> | <span className="api-desc">Forgets the saved login credentials.</span> |
| <Link id="m-savecredentials" /><code>{"void SaveCredentials("}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | <span className="api-desc">Stores the credentials from a successful login.</span> |

## Used in

Members of other types that take, return or hold a `ILoginPreferences`:

<div className="api-used-in">

[`AuthenticationUtility.AuthenticationUtility`](/mod/game-api/types/assembly-other/authenticationutility#m-ctor), [`AuthenticationUtility.loginPreferences`](/mod/game-api/types/assembly-other/authenticationutility#m-loginpreferences), [`LoginManager.Inject`](/mod/game-api/types/global-i-l/loginmanager#m-inject), [`LoginManager.loginPreferences`](/mod/game-api/types/global-i-l/loginmanager#m-loginpreferences), [`LoginManager.Preferences`](/mod/game-api/types/global-i-l/loginmanager#m-preferences), [`LoginScreen.Inject`](/mod/game-api/types/global-i-l/loginscreen#m-inject), [`LoginScreen.loginPreferences`](/mod/game-api/types/global-i-l/loginscreen#m-loginpreferences), [`RedesignedAltaAccountLinker.Inject`](/mod/game-api/types/global-q-r/redesignedaltaaccountlinker#m-inject), [`RedesignedAltaAccountLinker.loginPreferences`](/mod/game-api/types/global-q-r/redesignedaltaaccountlinker#m-loginpreferences).

</div>
