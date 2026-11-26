---
title: "ControllerActions"
description: "One hand's set of ControllerActions, one per ControllerActionType, bound to buttons by PlatformActionMappings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActions

A **class** in `Root.Township`, the global namespace.

One hand's set of `ControllerAction`s, one per `ControllerActionType`, bound to buttons by `PlatformActionMapping`s. Owned by `PlayerInput`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerActions("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">Creates a `ControllerActions` from `playerInput`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{"[] actions"}</code> | <span className="api-desc">All actions, in enum order.</span> |
| <Link id="m-actionsmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/mod/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{"> actionsMap"}</code> | <span className="api-desc">Backing field for `ActionsMap`.</span> |
| <Link id="m-activeactionmappings" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> activeActionMappings"}</code> | <span className="api-desc">Backing field for `ActiveActionMappings`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> | <span className="api-desc">The hand's `PlayerInput` this belongs to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionsmap-2" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", "}<Link to="/mod/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{"> ActionsMap { get; }"}</code> | <span className="api-desc">Actions by type.</span> |
| <Link id="m-activeactionmappings-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> ActiveActionMappings { get; }"}</code> | <span className="api-desc">Mappings currently bound.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addactionmapping" /><code>{"void AddActionMapping("}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" newActionMapping)"}</code> | <span className="api-desc">Adds a mapping's buttons to every action, on top of those already bound.</span> |
| <Link id="m-clearallactionmappings" /><code>{"void ClearAllActionMappings()"}</code> | <span className="api-desc">Removes all inputs and listeners from every action and clears the active mappings.</span> |
| <Link id="m-initializedictionary" /><code>{"void InitializeDictionary()"}</code> | <span className="api-desc">Creates one action per `ControllerActionType`, skipping the 0 value.</span> |
| <Link id="m-removeactionmapping" /><code>{"void RemoveActionMapping("}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" actionMappingToRemove)"}</code> | <span className="api-desc">Removes one active mapping's inputs and listeners from every action.</span> |
| <Link id="m-setactionmapping" /><code>{"void SetActionMapping("}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" newActionMapping)"}</code> | <span className="api-desc">Replaces every action's bindings with the given mapping's buttons for this hand.</span> |

## Used in

Members of other types that take, return or hold a `ControllerActions`:

<div className="api-used-in">

[`ControllerActionsManager.ControllerActions`](/mod/game-api/types/global-c-d/controlleractionsmanager#m-controlleractions).

</div>
