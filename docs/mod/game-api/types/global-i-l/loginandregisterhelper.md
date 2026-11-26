---
title: "LoginAndRegisterHelper"
description: "Internal base for client login and registration forms: holds the username and password fields and runs one submit at a time with a loading indicator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginAndRegisterHelper

An **internal abstract class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal base for client login and registration forms: holds the username and password fields and runs one submit at a time with a loading indicator.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`UIActionLock.ILockUIAction`](/mod/game-api/types/alta-menus/uiactionlock-ilockuiaction)
- **Derived types** [`AltaAccountRegistererAndLinker`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker), [`RedesignedAltaAccountLinker`](/mod/game-api/types/global-q-r/redesignedaltaaccountlinker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LoginAndRegisterHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-genericerrortext" /><code>{"protected "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" genericErrorText"}</code> | <span className="api-desc">Text that shows form errors.</span> |
| <Link id="m-passwordinput" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" passwordInput"}</code> | <span className="api-desc">Password field.</span> |
| <Link id="m-usernameinput" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" usernameInput"}</code> | <span className="api-desc">Username field.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadingobject" /><code>{"private GameObject loadingObject"}</code> | <span className="api-desc">Object shown while a submit is running.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprocessing" /><code>{"protected bool IsProcessing { get; set; }"}</code> | <span className="api-desc">Shared busy flag (`LoginScreenManager.IsProcessing`); setting it also shows or hides the loading object.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"virtual void OnDisable()"}</code> | <span className="api-desc">Clears the error text and releases the UI action lock.</span> |
| <Link id="m-submit" /><code>{"async void Submit()"}</code> | <span className="api-desc">Runs `InternalSubmit` unless already busy or the UI is locked, clearing errors and showing loading meanwhile.</span> |
| <Link id="m-internalsubmit" /><code>{"protected abstract Task InternalSubmit()"}</code> | <span className="api-desc">The form's actual submit work, written by each subclass.</span> |
