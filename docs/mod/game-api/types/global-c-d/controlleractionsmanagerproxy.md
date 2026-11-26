---
title: "ControllerActionsManagerProxy"
description: "A stable set of ControllerActionProxy objects, one per controller action type, that can be relinked to whichever ControllerActionsManager is current."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionsManagerProxy

A **class** in `Root.Township`, the global namespace.

A stable set of `ControllerActionProxy` objects, one per controller action type, that can be relinked to whichever `ControllerActionsManager` is current. Each `Controller` has one as `ActionsManager`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerActionsManagerProxy()"}</code> | <span className="api-desc">Creates a `ControllerActionsManagerProxy` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionsmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/mod/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{"> actionsMap"}</code> | <span className="api-desc">Backing field for `ActionsMap`.</span> |
| <Link id="m-linkedactionsmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" linkedActionsManager"}</code> | <span className="api-desc">The actions manager currently linked.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionsmap-2" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/mod/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{"> ActionsMap { get; }"}</code> | <span className="api-desc">Proxies by action type, created on first use.</span> |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" this["}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" type] { get; }"}</code> | <span className="api-desc">The proxy for the given action type.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializedictionary" /><code>{"void InitializeDictionary()"}</code> | <span className="api-desc">Creates a proxy for every `ControllerActionType` except the zero value.</span> |
| <Link id="m-linktoactionsmanager" /><code>{"void LinkToActionsManager("}<Link to="/mod/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" actionsManager)"}</code> | <span className="api-desc">Links every proxy to the matching action on a new actions manager, unlinking the old one first.</span> |
| <Link id="m-unlinkfromactionsmanager" /><code>{"void UnlinkFromActionsManager()"}</code> | <span className="api-desc">Unlinks every proxy from its action.</span> |

## Used in

Members of other types that take, return or hold a `ControllerActionsManagerProxy`:

<div className="api-used-in">

[`Controller.ActionsManager`](/mod/game-api/types/global-c-d/controller#m-actionsmanager), [`ControllerExtension.Actions`](/mod/game-api/types/global-c-d/controllerextension#m-actions).

</div>
