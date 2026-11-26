---
title: "UserList"
description: "A list of users parsed from a comma-separated console argument of names or user IDs (through UserListConverter)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserList

A **class** in `Root.Township`, the global namespace.

A list of users parsed from a comma-separated console argument of names or user IDs (through `UserListConverter`).

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `IEnumerable<UserInfoAccess>`, `IEnumerable`
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserList(IEnumerable<"}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> range)"}</code> | <span className="api-desc">Creates an `UserList` from `range`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-players" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> players"}</code> | <span className="api-desc">The users in the list.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastlist" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> LastList { get; private set; }"}</code> | <span className="api-desc">The most recently created list.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-countorname" /><code>{"async Task<string> CountOrName()"}</code> | <span className="api-desc">Returns 'no one', the single user's name, or 'N players'.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> GetEnumerator()"}</code> | <span className="api-desc">Enumerates the users.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates the users.</span> |

</details>

## Used in

Members of other types that take, return or hold a `UserList`:

<div className="api-used-in">

[`PlatformLaunchDetails.Users`](/mod/game-api/types/alta-menus/platformlaunchdetails#m-users), [`PlatformLaunchDetails.UsersOptional`](/mod/game-api/types/alta-menus/platformlaunchdetails#m-usersoptional).

</div>
