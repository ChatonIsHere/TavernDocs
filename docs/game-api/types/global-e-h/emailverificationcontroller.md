---
title: "EmailVerificationController"
description: "Client tool that, on login, asks the API whether the account's email is verified and shows a popup if not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmailVerificationController

A **class** in `Root.Township`, no namespace.

Client tool that, on login, asks the API whether the account's email is verified and shows a popup if not.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmailVerificationController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emailverificationpopup" /><code>{"private "}<Link to="/game-api/types/global-p/popupboard">{"PopupBoard"}</Link>{" emailVerificationPopup"}</code> | Popup shown to unverified users. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | Checks verification with the user client and shows `emailVerificationPopup` when unverified. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Does nothing. |
