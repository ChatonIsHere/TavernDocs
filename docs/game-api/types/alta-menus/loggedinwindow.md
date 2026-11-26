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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LoggedInWindow()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loggedinpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" loggedInPanel"}</code> | Panel to show after login. |
| <Link id="m-targetwindow" /><code>{"private "}<Link to="/game-api/types/alta-menus/window">{"Window"}</Link>{" targetWindow"}</code> | The window to watch. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to the target window's `Started` event. |
| <Link id="m-handlelogin" /><code>{"private void HandleLogin()"}</code> | Unsubscribes from `LoginManager.LoggedIn` and switches to the logged-in panel. |
| <Link id="m-windowstarted" /><code>{"private void WindowStarted("}<Link to="/game-api/types/alta-menus/window">{"Window"}</Link>{" obj)"}</code> | When the window starts, switches panels now if already logged in, otherwise waits for `LoginManager.LoggedIn`. |

</details>
