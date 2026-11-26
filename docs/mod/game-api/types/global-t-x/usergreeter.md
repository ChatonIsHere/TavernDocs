---
title: "UserGreeter"
description: "A LoggedInTool that shows a random greeting with the logged-in username on a text renderer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserGreeter

A **class** in `Root.Township`, the global namespace.

A `LoggedInTool` that shows a random greeting with the logged-in username on a text renderer. Client side.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserGreeter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basegreetings" /><code>{"private string[] baseGreetings"}</code> | <span className="api-desc">Greeting formats; `{0}` is replaced with the username.</span> |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | <span className="api-desc">Text renderer the greeting is shown on.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override void LoggedIn()"}</code> | <span className="api-desc">Sets the text to a random greeting filled with the logged-in username.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Clears the text.</span> |
