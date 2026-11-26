---
title: "EmailVerificationManager"
description: "UI for the email verification popup: validates the typed address and asks the API to change the account email to it, which probably sends the verification mail."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmailVerificationManager

A **class** in `Root.Township`, the global namespace.

UI for the email verification popup: validates the typed address and asks the API to change the account email to it, which probably sends the verification mail.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmailVerificationManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emailinput" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" emailInput"}</code> | <span className="api-desc">Field where the address is typed.</span> |
| <Link id="m-errormessage" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" errorMessage"}</code> | <span className="api-desc">Text that shows validation or API errors.</span> |
| <Link id="m-issending" /><code>{"private bool isSending"}</code> | <span className="api-desc">True while a request is running, to block repeats.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-resultmessage" /><code>{"private GameObject resultMessage"}</code> | <span className="api-desc">Object shown when the request succeeds.</span> |
| <Link id="m-timerobject" /><code>{"private GameObject timerObject"}</code> | <span className="api-desc">Object shown while the request runs.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendverification" /><code>{"async void SendVerification()"}</code> | <span className="api-desc">Validates the input, calls the API's `ChangeEmail` with it and shows the result or the error.</span> |
