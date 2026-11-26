---
title: "IControllerAction"
description: "A controller input action (such as a button) with a pressed state and start and end events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IControllerAction

An **interface** in `Root.Township`, the global namespace.

A controller input action (such as a button) with a pressed state and start and end events.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`ControllerAction`](/mod/game-api/types/global-c-d/controlleraction), [`ControllerActionProxy`](/mod/game-api/types/global-c-d/controlleractionproxy)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-state" /><code>{"bool State { get; }"}</code> | <span className="api-desc">True while the action is held.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">Which controller action this is.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ended" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/clickedendeventhandler">{"ClickedEndEventHandler"}</Link>{" Ended"}</code> | <span className="api-desc">Raised when the action is released.</span> |
| <Link id="m-started" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Started"}</code> | <span className="api-desc">Raised when the action is pressed.</span> |
