---
title: "LoggedInWindow"
description: "Switches a main menu window to its logged-in panel once the player is logged in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoggedInWindow

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Switches a main menu window to its logged-in panel once the player is logged in. Client only.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoggedInWindow()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loggedinpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" loggedInPanel"}</code> | <span className="api-desc">Panel to show after login.</span> |
| <Link id="m-targetwindow" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/window">{"Window"}</Link>{" targetWindow"}</code> | <span className="api-desc">The window to watch.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to the target window's `Started` event.</span> |
| <Link id="m-handlelogin" /><code>{"private void HandleLogin()"}</code> | <span className="api-desc">Unsubscribes from `LoginManager.LoggedIn` and switches to the logged-in panel.</span> |
| <Link id="m-windowstarted" /><code>{"private void WindowStarted("}<Link to="/mod/game-api/types/alta-menus/window">{"Window"}</Link>{" obj)"}</code> | <span className="api-desc">When the window starts, switches panels now if already logged in, otherwise waits for `LoginManager.LoggedIn`.</span> |

</details>
