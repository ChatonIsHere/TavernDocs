---
title: "EmailVerificationManager"
description: "UI for the email verification popup: validates the typed address and asks the API to change the account email to it, which probably sends the verification mail."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmailVerificationManager

A **class** in `Root.Township`, no namespace.

UI for the email verification popup: validates the typed address and asks the API to change the account email to it, which probably sends the verification mail.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EmailVerificationManager()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emailinput" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" emailInput"}</code> | Field where the address is typed. |
| <Link id="m-errormessage" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" errorMessage"}</code> | Text that shows validation or API errors. |
| <Link id="m-issending" /><code>{"private bool isSending"}</code> | True while a request is running, to block repeats. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-resultmessage" /><code>{"private GameObject resultMessage"}</code> | Object shown when the request succeeds. |
| <Link id="m-timerobject" /><code>{"private GameObject timerObject"}</code> | Object shown while the request runs. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendverification" /><code>{"async void SendVerification()"}</code> | Validates the input, calls the API's `ChangeEmail` with it and shows the result or the error. |
