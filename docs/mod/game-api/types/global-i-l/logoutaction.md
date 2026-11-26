---
title: "LogoutAction"
description: "Logged in tool that shows a lever while logged in and logs out when it is used."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogoutAction

A **class** in `Root.Township`, the global namespace.

Logged in tool that shows a lever while logged in and logs out when it is used. Client.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogoutAction()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-leverobject" /><code>{"private GameObject leverObject"}</code> | The lever object. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | Logs out through `LoginManager`. |
| <Link id="m-loggedin" /><code>{"protected override void LoggedIn()"}</code> | Shows the lever. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Hides the lever. |
