---
title: "ControllerActions"
description: "class ControllerActions in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActions

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ControllerActions("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-actions" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{"[] actions"}</code> |
| <Link id="m-actionsmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{"> actionsMap"}</code> |
| <Link id="m-activeactionmappings" /><code>{"private List<"}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> activeActionMappings"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-actionsmap-2" /><code>{"Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{"> ActionsMap { get; }"}</code> |
| <Link id="m-activeactionmappings-2" /><code>{"List<"}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> ActiveActionMappings { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-addactionmapping" /><code>{"void AddActionMapping("}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" newActionMapping)"}</code> |
| <Link id="m-clearallactionmappings" /><code>{"void ClearAllActionMappings()"}</code> |
| <Link id="m-initializedictionary" /><code>{"void InitializeDictionary()"}</code> |
| <Link id="m-removeactionmapping" /><code>{"void RemoveActionMapping("}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" actionMappingToRemove)"}</code> |
| <Link id="m-setactionmapping" /><code>{"void SetActionMapping("}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" newActionMapping)"}</code> |

## Used in

Members of other types that take, return or hold a `ControllerActions`:

[`ControllerActionsManager.ControllerActions`](/game-api/types/global-c-d/controlleractionsmanager#m-controlleractions).
