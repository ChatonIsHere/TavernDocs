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
| <Link id="m-ctor" /><code>{"protected LoginAndRegisterHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-genericerrortext" /><code>{"protected "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" genericErrorText"}</code> | Text that shows form errors. |
| <Link id="m-passwordinput" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" passwordInput"}</code> | Password field. |
| <Link id="m-usernameinput" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" usernameInput"}</code> | Username field. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadingobject" /><code>{"private GameObject loadingObject"}</code> | Object shown while a submit is running. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprocessing" /><code>{"protected bool IsProcessing { get; set; }"}</code> | Shared busy flag (`LoginScreenManager.IsProcessing`); setting it also shows or hides the loading object. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"virtual void OnDisable()"}</code> | Clears the error text and releases the UI action lock. |
| <Link id="m-submit" /><code>{"async void Submit()"}</code> | Runs `InternalSubmit` unless already busy or the UI is locked, clearing errors and showing loading meanwhile. |
| <Link id="m-internalsubmit" /><code>{"protected abstract Task InternalSubmit()"}</code> | The form's actual submit work, written by each subclass. |
