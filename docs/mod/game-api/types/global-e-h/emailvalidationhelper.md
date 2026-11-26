---
title: "EmailValidationHelper"
description: "Static check that an email address is well formed, used by the account UI."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmailValidationHelper

A **static class** in `Root.Township`, the global namespace.

Static check that an email address is well formed, used by the account UI.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-invalidemailerrormessage" /><code>{"const string InvalidEmailErrorMessage"}</code> | <span className="api-desc">Message shown for a bad address: "Enter a valid email address".</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalidemail" /><code>{"static bool IsValidEmail(string email)"}</code> | <span className="api-desc">True when `MailAddress` parses the text to exactly the same address; logs and returns false on a parse error.</span> |
