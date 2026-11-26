---
title: "IUserService"
description: "Platform service for the signed-in Alta user: login state, the current user and lookups of other users by ID."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUserService

An **interface** in `Alta.Platform`, `Alta.Platform`.

Platform service for the signed-in Alta user: login state, the current user and lookups of other users by ID.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IAuthenticationService`](/mod/game-api/types/assembly-other/iauthenticationservice)
- **Derived types** [`UserService`](/mod/game-api/types/assembly-other/userservice)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> | True while a user is signed in. |
| <Link id="m-loggedinuser" /><code><Link to="/mod/game-api/types/assembly-other/iuser">{"IUser"}</Link>{" LoggedInUser { get; }"}</code> | The signed-in user, or probably null when nobody is signed in. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getuserwithid" /><code>{"Task<IResult<"}<Link to="/mod/game-api/types/assembly-other/iuser">{"IUser"}</Link>{">> GetUserWithId(string userId)"}</code> | Looks up another user by their user ID, as an async result. |
| <Link id="m-refreshloggedinuser" /><code>{"Task<IResult> RefreshLoggedInUser()"}</code> | Fetches the signed-in user's details again, as an async result. |

## Used in

Members of other types that take, return or hold a `IUserService`:

[`AccountNameTextReplacer.Inject`](/mod/game-api/types/alta-menus/accountnametextreplacer#m-inject), [`AccountNameTextReplacer.userService`](/mod/game-api/types/alta-menus/accountnametextreplacer#m-userservice), [`AltaAccountRegistererAndLinker.Inject`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-inject), [`AltaAccountRegistererAndLinker.userService`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-userservice), [`PicoLoginController.Inject`](/mod/game-api/types/game-other-namespaces/picologincontroller#m-inject), [`PicoLoginController.userService`](/mod/game-api/types/game-other-namespaces/picologincontroller#m-userservice), [`LoginManager.Inject`](/mod/game-api/types/global-i-l/loginmanager#m-inject), [`LoginManager.userService`](/mod/game-api/types/global-i-l/loginmanager#m-userservice), [`RedesignedAltaAccountLinker.Inject`](/mod/game-api/types/global-q-r/redesignedaltaaccountlinker#m-inject), [`RedesignedAltaAccountLinker.userService`](/mod/game-api/types/global-q-r/redesignedaltaaccountlinker#m-userservice).
