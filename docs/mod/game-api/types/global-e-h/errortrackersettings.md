---
title: "ErrorTrackerSettings"
description: "Settings asset for how the editor reports logged errors."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ErrorTrackerSettings

A **class** in `Root.Township`, the global namespace.

Settings asset for how the editor reports logged errors.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ErrorTrackerSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displaydialogonfirsterror" /><code>{"bool displayDialogOnFirstError"}</code> | Show a dialog on the first error. |
| <Link id="m-displaymessagewhenthereareerrors" /><code>{"bool displayMessageWhenThereAreErrors"}</code> | Show a message while there are errors. |
