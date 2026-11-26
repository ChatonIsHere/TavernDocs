---
title: "AccountNameTextReplacer"
description: "Client UI component on the login screen that fills in the device account name and the Alta account name text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccountNameTextReplacer

A **internal class** in `Root.Township`, `Alta.OculusLogin`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client UI component on the login screen that fills in the device account name and the Alta account name text.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AccountNameTextReplacer()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-altaaccounttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" altaAccountText"}</code> | Text showing the Alta account username. |
| <Link id="m-deviceaccounttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" deviceAccountText"}</code> | Text showing the platform (device) account display name. Was called `oculusAccountText`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-userservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> | The injected platform user service. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatefrominput" /><code>{"void UpdateFromInput("}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" input)"}</code> | Sets the Alta account text to whatever is typed in the given input field. |
| <Link id="m-updatefromlogin" /><code>{"void UpdateFromLogin()"}</code> | Sets the Alta account text to the username of the user logged in to the Alta API. |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" injectedUserService)"}</code> | VContainer injection point; receives the `IUserService`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private async void OnEnable()"}</code> | Shows the platform user's display name, refreshing the logged-in platform user first if needed. |

</details>
