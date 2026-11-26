---
title: "MainMenuPlayerLogger"
description: "IMainMenuLogger that shows errors to the local player as red on-screen messages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuPlayerLogger

A **class** in `Root.Township`, the global namespace.

`IMainMenuLogger` that shows errors to the local player as red on-screen messages. Info messages are ignored. Client.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`IMainMenuLogger`](/mod/game-api/types/global-i-l/imainmenulogger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuPlayerLogger()"}</code> | <span className="api-desc">Creates a `MainMenuPlayerLogger` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"void Error(string errorMessage)"}</code> | <span className="api-desc">Shows the error text in red on the local player's message display.</span> |
| <Link id="m-error-2" /><code>{"void Error(Exception exception, string errorMessage)"}</code> | <span className="api-desc">Shows the error text in red on the local player's message display.</span> |
| <Link id="m-info" /><code>{"void Info(string logMessage)"}</code> | <span className="api-desc">Does nothing.</span> |
