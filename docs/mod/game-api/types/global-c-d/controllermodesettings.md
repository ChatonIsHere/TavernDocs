---
title: "ControllerModeSettings"
description: "Scriptable object listing ControllerActionModes, looked up by ControllerModeType."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerModeSettings

A **class** in `Root.Township`, the global namespace.

Scriptable object listing `ControllerActionMode`s, looked up by `ControllerModeType`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerModeSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-modes" /><code>{"private List<"}<Link to="/mod/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> modes"}</code> | <span className="api-desc">Backing field for `Modes`.</span> |
| <Link id="m-modesmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{", "}<Link to="/mod/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> modesMap"}</code> | <span className="api-desc">Backing field for `ModesMap`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modes-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> Modes { get; }"}</code> | <span className="api-desc">All modes in the list.</span> |
| <Link id="m-modesmap-2" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{", "}<Link to="/mod/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> ModesMap { get; }"}</code> | <span className="api-desc">Modes by type, built the first time it's read.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addmode" /><code>{"void AddMode()"}</code> | <span className="api-desc">Adds a new empty mode to the list.</span> |
| <Link id="m-getmode" /><code><Link to="/mod/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{" GetMode("}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType)"}</code> | <span className="api-desc">Returns the mode of the given type, or null with a warning.</span> |
| <Link id="m-getmodeat" /><code><Link to="/mod/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{" GetModeAt(int index)"}</code> | <span className="api-desc">Returns the mode at the given list index.</span> |
| <Link id="m-removemode" /><code>{"void RemoveMode(int indexToRemove)"}</code> | <span className="api-desc">Removes the mode at the given index.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializedictionary" /><code>{"private void InitializeDictionary()"}</code> | <span className="api-desc">Builds `modesMap` from the list.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: logs an error if two modes share a type.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ControllerModeSettings`:

<div className="api-used-in">

[`ControllerActionsManager.controllerSettings`](/mod/game-api/types/global-c-d/controlleractionsmanager#m-controllersettings).

</div>
