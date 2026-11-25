---
title: "ControllerActionsManagerProxy"
description: "class ControllerActionsManagerProxy in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionsManagerProxy

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Attributes** `DefaultMember`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ControllerActionsManagerProxy()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-actionsmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{"> actionsMap"}</code> |
| <Link id="m-linkedactionsmanager" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" linkedActionsManager"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-actionsmap-2" /><code>{"Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{"> ActionsMap { get; }"}</code> |
| <Link id="m-item" /><code><Link to="/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" this["}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" type] { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initializedictionary" /><code>{"void InitializeDictionary()"}</code> |
| <Link id="m-linktoactionsmanager" /><code>{"void LinkToActionsManager("}<Link to="/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" actionsManager)"}</code> |
| <Link id="m-unlinkfromactionsmanager" /><code>{"void UnlinkFromActionsManager()"}</code> |

## Used in

Members of other types that take, return or hold a `ControllerActionsManagerProxy`:

[`Controller.ActionsManager`](/game-api/types/global-c-d/controller#m-actionsmanager), [`ControllerExtension.Actions`](/game-api/types/global-c-d/controllerextension#m-actions).
