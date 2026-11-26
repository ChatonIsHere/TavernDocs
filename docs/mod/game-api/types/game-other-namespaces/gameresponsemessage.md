---
title: "GameResponseMessage"
description: "Reply to a game command message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameResponseMessage

A **class** in `Root.Township`, `GameCommands.Messages`.

Reply to a game command message. Nothing else in this build uses it.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameResponseMessage()"}</code> | <span className="api-desc">Creates a `GameResponseMessage` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-errormessage" /><code>{"string ErrorMessage { get; set; }"}</code> | <span className="api-desc">Error text when the command failed.</span> |
| <Link id="m-wassuccessfull" /><code>{"bool WasSuccessfull { get; set; }"}</code> | <span className="api-desc">Whether the command succeeded.</span> |
