---
title: "UserList"
description: "class UserList in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserList

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `IEnumerable<UserInfoAccess>`, `IEnumerable`
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UserList(IEnumerable<"}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> range)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-players" /><code>{"private IEnumerable<"}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> players"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-lastlist" /><code>{"static IEnumerable<"}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> LastList { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-countorname" /><code>{"async Task<string> CountOrName()"}</code> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{"> GetEnumerator()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `UserList`:

[`PlatformLaunchDetails.Users`](/game-api/types/alta-menus/platformlaunchdetails#m-users), [`PlatformLaunchDetails.UsersOptional`](/game-api/types/alta-menus/platformlaunchdetails#m-usersoptional).
