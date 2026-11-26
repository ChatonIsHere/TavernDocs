---
title: "ControllerActionsManagerProxy"
description: "A stable set of ControllerActionProxy objects, one per controller action type, that can be relinked to whichever ControllerActionsManager is current."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionsManagerProxy

A **class** in `Root.Township`, no namespace.

A stable set of `ControllerActionProxy` objects, one per controller action type, that can be relinked to whichever `ControllerActionsManager` is current. Each `Controller` has one as `ActionsManager`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Attributes** `DefaultMember`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ControllerActionsManagerProxy()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionsmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{"> actionsMap"}</code> | Backing field for `ActionsMap`. |
| <Link id="m-linkedactionsmanager" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" linkedActionsManager"}</code> | The actions manager currently linked. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionsmap-2" /><code>{"Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{"> ActionsMap { get; }"}</code> | Proxies by action type, created on first use. |
| <Link id="m-item" /><code><Link to="/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" this["}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" type] { get; }"}</code> | The proxy for the given action type. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializedictionary" /><code>{"void InitializeDictionary()"}</code> | Creates a proxy for every `ControllerActionType` except the zero value. |
| <Link id="m-linktoactionsmanager" /><code>{"void LinkToActionsManager("}<Link to="/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" actionsManager)"}</code> | Links every proxy to the matching action on a new actions manager, unlinking the old one first. |
| <Link id="m-unlinkfromactionsmanager" /><code>{"void UnlinkFromActionsManager()"}</code> | Unlinks every proxy from its action. |

## Used in

Members of other types that take, return or hold a `ControllerActionsManagerProxy`:

[`Controller.ActionsManager`](/game-api/types/global-c-d/controller#m-actionsmanager), [`ControllerExtension.Actions`](/game-api/types/global-c-d/controllerextension#m-actions).
