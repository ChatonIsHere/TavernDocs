---
title: "EmailValidationHelper"
description: "Static check that an email address is well formed, used by the account UI."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmailValidationHelper

A **static class** in `Root.Township`, no namespace.

Static check that an email address is well formed, used by the account UI.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-invalidemailerrormessage" /><code>{"const string InvalidEmailErrorMessage"}</code> | Message shown for a bad address: "Enter a valid email address". |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalidemail" /><code>{"static bool IsValidEmail(string email)"}</code> | True when `MailAddress` parses the text to exactly the same address; logs and returns false on a parse error. |
