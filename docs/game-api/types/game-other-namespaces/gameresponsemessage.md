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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GameResponseMessage()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-errormessage" /><code>{"string ErrorMessage { get; set; }"}</code> | Error text when the command failed. |
| <Link id="m-wassuccessfull" /><code>{"bool WasSuccessfull { get; set; }"}</code> | Whether the command succeeded. |
