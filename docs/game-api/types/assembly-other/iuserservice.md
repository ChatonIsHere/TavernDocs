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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAuthenticationService`](/game-api/types/assembly-other/iauthenticationservice)
- **Derived types** [`UserService`](/game-api/types/assembly-other/userservice)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> | True while a user is signed in. |
| <Link id="m-loggedinuser" /><code><Link to="/game-api/types/assembly-other/iuser">{"IUser"}</Link>{" LoggedInUser { get; }"}</code> | The signed-in user, or probably null when nobody is signed in. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getuserwithid" /><code>{"Task<IResult<"}<Link to="/game-api/types/assembly-other/iuser">{"IUser"}</Link>{">> GetUserWithId(string userId)"}</code> | Looks up another user by their user ID, as an async result. |
| <Link id="m-refreshloggedinuser" /><code>{"Task<IResult> RefreshLoggedInUser()"}</code> | Fetches the signed-in user's details again, as an async result. |

## Used in

Members of other types that take, return or hold a `IUserService`:

[`AccountNameTextReplacer.Inject`](/game-api/types/alta-menus/accountnametextreplacer#m-inject), [`AccountNameTextReplacer.userService`](/game-api/types/alta-menus/accountnametextreplacer#m-userservice), [`AltaAccountRegistererAndLinker.Inject`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-inject), [`AltaAccountRegistererAndLinker.userService`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-userservice), [`PicoLoginController.Inject`](/game-api/types/game-other-namespaces/picologincontroller#m-inject), [`PicoLoginController.userService`](/game-api/types/game-other-namespaces/picologincontroller#m-userservice), [`LoginManager.Inject`](/game-api/types/global-i-l/loginmanager#m-inject), [`LoginManager.userService`](/game-api/types/global-i-l/loginmanager#m-userservice), [`RedesignedAltaAccountLinker.Inject`](/game-api/types/global-q-r/redesignedaltaaccountlinker#m-inject), [`RedesignedAltaAccountLinker.userService`](/game-api/types/global-q-r/redesignedaltaaccountlinker#m-userservice).
