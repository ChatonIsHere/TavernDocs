---
title: "MainMenuPlayerLogger"
description: "IMainMenuLogger that shows errors to the local player as red on-screen messages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuPlayerLogger

A **class** in `Root.Township`, no namespace.

`IMainMenuLogger` that shows errors to the local player as red on-screen messages. Info messages are ignored. Client.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`IMainMenuLogger`](/game-api/types/global-i-l/imainmenulogger)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MainMenuPlayerLogger()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"void Error(string errorMessage)"}</code> | Shows the error text in red on the local player's message display. |
| <Link id="m-error-2" /><code>{"void Error(Exception exception, string errorMessage)"}</code> | Shows the error text in red on the local player's message display. |
| <Link id="m-info" /><code>{"void Info(string logMessage)"}</code> | Does nothing. |
