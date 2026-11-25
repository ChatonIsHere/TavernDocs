---
title: "ILoginPreferences"
description: "interface ILoginPreferences in Alta.Authentication."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILoginPreferences

An **interface** in `Alta.Authentication`, `Alta.Authentication`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`LoginPreferences`](/game-api/types/assembly-other/loginpreferences)
- **Documented in** [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-refreshtoken" /><code>{"string RefreshToken { get; }"}</code> |  |
| <Link id="m-rememberdetails" /><code>{"bool RememberDetails { get; set; }"}</code> |  |
| <Link id="m-savedusername" /><code>{"string SavedUsername { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcredentials" /><code>{"void ClearCredentials()"}</code> |  |
| <Link id="m-savecredentials" /><code>{"void SaveCredentials("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ILoginPreferences`:

[`AuthenticationUtility.AuthenticationUtility`](/game-api/types/assembly-other/authenticationutility#m-ctor), [`AuthenticationUtility.loginPreferences`](/game-api/types/assembly-other/authenticationutility#m-loginpreferences), [`LoginManager.Inject`](/game-api/types/global-i-l/loginmanager#m-inject), [`LoginManager.loginPreferences`](/game-api/types/global-i-l/loginmanager#m-loginpreferences), [`LoginManager.Preferences`](/game-api/types/global-i-l/loginmanager#m-preferences), [`LoginScreen.Inject`](/game-api/types/global-i-l/loginscreen#m-inject), [`LoginScreen.loginPreferences`](/game-api/types/global-i-l/loginscreen#m-loginpreferences), [`RedesignedAltaAccountLinker.Inject`](/game-api/types/global-q-r/redesignedaltaaccountlinker#m-inject), [`RedesignedAltaAccountLinker.loginPreferences`](/game-api/types/global-q-r/redesignedaltaaccountlinker#m-loginpreferences).
