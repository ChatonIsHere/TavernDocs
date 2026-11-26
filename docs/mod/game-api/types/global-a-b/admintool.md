---
title: "AdminTool"
description: "Base for tools that are only active for logged-in users with the debug_features permission."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AdminTool

An **abstract class** in `Root.Township`, the global namespace.

Base for tools that are only active for logged-in users with the `debug_features` permission.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)
- **Derived types** [`LocalTestStarter`](/mod/game-api/types/global-i-l/localteststarter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AdminTool()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override void LoggedIn()"}</code> | Activates the tool if the user has `debug_features`. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Deactivates the tool. |
| <Link id="m-setactive" /><code>{"protected abstract void SetActive(bool isActive)"}</code> | Implemented by subclasses to show or hide the tool. |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | Starts the tool deactivated. |
