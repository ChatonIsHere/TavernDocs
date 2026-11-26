---
title: "ControllerModeSettings"
description: "Scriptable object listing ControllerActionModes, looked up by ControllerModeType."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerModeSettings

A **class** in `Root.Township`, no namespace.

Scriptable object listing `ControllerActionMode`s, looked up by `ControllerModeType`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ControllerModeSettings()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-modes" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> modes"}</code> | Backing field for `Modes`. |
| <Link id="m-modesmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> modesMap"}</code> | Backing field for `ModesMap`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modes-2" /><code>{"List<"}<Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> Modes { get; }"}</code> | All modes in the list. |
| <Link id="m-modesmap-2" /><code>{"Dictionary<"}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> ModesMap { get; }"}</code> | Modes by type, built the first time it's read. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addmode" /><code>{"void AddMode()"}</code> | Adds a new empty mode to the list. |
| <Link id="m-getmode" /><code><Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{" GetMode("}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType)"}</code> | Returns the mode of the given type, or null with a warning. |
| <Link id="m-getmodeat" /><code><Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{" GetModeAt(int index)"}</code> | Returns the mode at the given list index. |
| <Link id="m-removemode" /><code>{"void RemoveMode(int indexToRemove)"}</code> | Removes the mode at the given index. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializedictionary" /><code>{"private void InitializeDictionary()"}</code> | Builds `modesMap` from the list. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: logs an error if two modes share a type. |

</details>

## Used in

Members of other types that take, return or hold a `ControllerModeSettings`:

[`ControllerActionsManager.controllerSettings`](/game-api/types/global-c-d/controlleractionsmanager#m-controllersettings).
