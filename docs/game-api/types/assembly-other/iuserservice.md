---
title: "IUserService"
description: "interface IUserService in Alta.Platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUserService

An **interface** in `Alta.Platform`, `Alta.Platform`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAuthenticationService`](/game-api/types/assembly-other/iauthenticationservice)
- **Derived types** [`UserService`](/game-api/types/assembly-other/userservice)

## Properties

| Member |
| --- |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> |
| <Link id="m-loggedinuser" /><code><Link to="/game-api/types/assembly-other/iuser">{"IUser"}</Link>{" LoggedInUser { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getuserwithid" /><code>{"Task<IResult<"}<Link to="/game-api/types/assembly-other/iuser">{"IUser"}</Link>{">> GetUserWithId(string userId)"}</code> |
| <Link id="m-refreshloggedinuser" /><code>{"Task<IResult> RefreshLoggedInUser()"}</code> |

## Used in

Members of other types that take, return or hold a `IUserService`:

[`AccountNameTextReplacer.Inject`](/game-api/types/alta-menus/accountnametextreplacer#m-inject), [`AccountNameTextReplacer.userService`](/game-api/types/alta-menus/accountnametextreplacer#m-userservice), [`AltaAccountRegistererAndLinker.Inject`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-inject), [`AltaAccountRegistererAndLinker.userService`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-userservice), [`PicoLoginController.Inject`](/game-api/types/game-other-namespaces/picologincontroller#m-inject), [`PicoLoginController.userService`](/game-api/types/game-other-namespaces/picologincontroller#m-userservice), [`LoginManager.Inject`](/game-api/types/global-i-l/loginmanager#m-inject), [`LoginManager.userService`](/game-api/types/global-i-l/loginmanager#m-userservice), [`RedesignedAltaAccountLinker.Inject`](/game-api/types/global-q-r/redesignedaltaaccountlinker#m-inject), [`RedesignedAltaAccountLinker.userService`](/game-api/types/global-q-r/redesignedaltaaccountlinker#m-userservice).
