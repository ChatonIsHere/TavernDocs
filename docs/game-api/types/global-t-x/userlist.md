---
title: "UserList"
description: "A list of users parsed from a comma-separated console argument of names or user IDs (through UserListConverter)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserList

A **class** in `Root.Township`, no namespace.

A list of users parsed from a comma-separated console argument of names or user IDs (through `UserListConverter`).

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `IEnumerable<UserInfoAccess>`, `IEnumerable`
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserList(IEnumerable<"}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> range)"}</code> | Creates an `UserList` from `range`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-players" /><code>{"private IEnumerable<"}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> players"}</code> | The users in the list. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastlist" /><code>{"static IEnumerable<"}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> LastList { get; private set; }"}</code> | The most recently created list. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-countorname" /><code>{"async Task<string> CountOrName()"}</code> | Returns 'no one', the single user's name, or 'N players'. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> GetEnumerator()"}</code> | Enumerates the users. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the users. |

</details>

## Used in

Members of other types that take, return or hold a `UserList`:

[`PlatformLaunchDetails.Users`](/game-api/types/alta-menus/platformlaunchdetails#m-users), [`PlatformLaunchDetails.UsersOptional`](/game-api/types/alta-menus/platformlaunchdetails#m-usersoptional).
