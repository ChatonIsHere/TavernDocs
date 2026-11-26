---
title: "IControllerAction"
description: "A controller input action (such as a button) with a pressed state and start and end events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IControllerAction

An **interface** in `Root.Township`, no namespace.

A controller input action (such as a button) with a pressed state and start and end events.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`ControllerAction`](/game-api/types/global-c-d/controlleraction), [`ControllerActionProxy`](/game-api/types/global-c-d/controlleractionproxy)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-state" /><code>{"bool State { get; }"}</code> | True while the action is held. |
| <Link id="m-type" /><code><Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" Type { get; set; }"}</code> | Which controller action this is. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ended" /><code>{"event "}<Link to="/game-api/types/global-c-d/clickedendeventhandler">{"ClickedEndEventHandler"}</Link>{" Ended"}</code> | Raised when the action is released. |
| <Link id="m-started" /><code>{"event "}<Link to="/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Started"}</code> | Raised when the action is pressed. |
