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
| <Link id="m-ctor" /><code>{"LogoutAction()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-leverobject" /><code>{"private GameObject leverObject"}</code> | <span className="api-desc">The lever object.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | <span className="api-desc">Logs out through `LoginManager`.</span> |
| <Link id="m-loggedin" /><code>{"protected override void LoggedIn()"}</code> | <span className="api-desc">Shows the lever.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Hides the lever.</span> |
