---
title: "ControllerActions"
description: "One hand's set of ControllerActions, one per ControllerActionType, bound to buttons by PlatformActionMappings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActions

A **class** in `Root.Township`, no namespace.

One hand's set of `ControllerAction`s, one per `ControllerActionType`, bound to buttons by `PlatformActionMapping`s. Owned by `PlayerInput`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerActions("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Creates a `ControllerActions` from `playerInput`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{"[] actions"}</code> | All actions, in enum order. |
| <Link id="m-actionsmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{"> actionsMap"}</code> | Backing field for `ActionsMap`. |
| <Link id="m-activeactionmappings" /><code>{"private List<"}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> activeActionMappings"}</code> | Backing field for `ActiveActionMappings`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> | The hand's `PlayerInput` this belongs to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionsmap-2" /><code>{"Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{"> ActionsMap { get; }"}</code> | Actions by type. |
| <Link id="m-activeactionmappings-2" /><code>{"List<"}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> ActiveActionMappings { get; }"}</code> | Mappings currently bound. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addactionmapping" /><code>{"void AddActionMapping("}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" newActionMapping)"}</code> | Adds a mapping's buttons to every action, on top of those already bound. |
| <Link id="m-clearallactionmappings" /><code>{"void ClearAllActionMappings()"}</code> | Removes all inputs and listeners from every action and clears the active mappings. |
| <Link id="m-initializedictionary" /><code>{"void InitializeDictionary()"}</code> | Creates one action per `ControllerActionType`, skipping the 0 value. |
| <Link id="m-removeactionmapping" /><code>{"void RemoveActionMapping("}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" actionMappingToRemove)"}</code> | Removes one active mapping's inputs and listeners from every action. |
| <Link id="m-setactionmapping" /><code>{"void SetActionMapping("}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" newActionMapping)"}</code> | Replaces every action's bindings with the given mapping's buttons for this hand. |

## Used in

Members of other types that take, return or hold a `ControllerActions`:

[`ControllerActionsManager.ControllerActions`](/game-api/types/global-c-d/controlleractionsmanager#m-controlleractions).
