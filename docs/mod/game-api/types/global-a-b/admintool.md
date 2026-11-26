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
| <Link id="m-ctor" /><code>{"protected AdminTool()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override void LoggedIn()"}</code> | <span className="api-desc">Activates the tool if the user has `debug_features`.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Deactivates the tool.</span> |
| <Link id="m-setactive" /><code>{"protected abstract void SetActive(bool isActive)"}</code> | <span className="api-desc">Implemented by subclasses to show or hide the tool.</span> |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | <span className="api-desc">Starts the tool deactivated.</span> |
