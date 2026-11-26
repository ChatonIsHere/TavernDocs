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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccountNameTextReplacer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-altaaccounttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" altaAccountText"}</code> | <span className="api-desc">Text showing the Alta account username.</span> |
| <Link id="m-deviceaccounttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" deviceAccountText"}</code> | <span className="api-desc">Text showing the platform (device) account display name. Was called `oculusAccountText`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-userservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> | <span className="api-desc">The injected platform user service.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatefrominput" /><code>{"void UpdateFromInput("}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" input)"}</code> | <span className="api-desc">Sets the Alta account text to whatever is typed in the given input field.</span> |
| <Link id="m-updatefromlogin" /><code>{"void UpdateFromLogin()"}</code> | <span className="api-desc">Sets the Alta account text to the username of the user logged in to the Alta API.</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" injectedUserService)"}</code> | <span className="api-desc">VContainer injection point; receives the `IUserService`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private async void OnEnable()"}</code> | <span className="api-desc">Shows the platform user's display name, refreshing the logged-in platform user first if needed.</span> |

</details>
