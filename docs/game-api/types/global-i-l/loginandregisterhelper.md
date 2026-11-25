---
title: "LoginAndRegisterHelper"
description: "abstract class LoginAndRegisterHelper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginAndRegisterHelper

An **internal abstract class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`UIActionLock.ILockUIAction`](/game-api/types/alta-menus/uiactionlock-ilockuiaction)
- **Derived types** [`AltaAccountRegistererAndLinker`](/game-api/types/alta-menus/altaaccountregistererandlinker), [`RedesignedAltaAccountLinker`](/game-api/types/global-q-r/redesignedaltaaccountlinker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LoginAndRegisterHelper()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-genericerrortext" /><code>{"protected "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" genericErrorText"}</code> |  |
| <Link id="m-loadingobject" /><code>{"private GameObject loadingObject"}</code> |  |
| <Link id="m-passwordinput" /><code>{"protected "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" passwordInput"}</code> |  |
| <Link id="m-usernameinput" /><code>{"protected "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" usernameInput"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprocessing" /><code>{"protected bool IsProcessing { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"virtual void OnDisable()"}</code> |  |
| <Link id="m-submit" /><code>{"async void Submit()"}</code> |  |
| <Link id="m-internalsubmit" /><code>{"protected abstract Task InternalSubmit()"}</code> |  |
