---
title: "ControllerModeSettings"
description: "class ControllerModeSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerModeSettings

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerModeSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-modes" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> modes"}</code> |  |
| <Link id="m-modesmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> modesMap"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modes-2" /><code>{"List<"}<Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> Modes { get; }"}</code> |  |
| <Link id="m-modesmap-2" /><code>{"Dictionary<"}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{", "}<Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{"> ModesMap { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addmode" /><code>{"void AddMode()"}</code> |  |
| <Link id="m-getmode" /><code><Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{" GetMode("}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType)"}</code> |  |
| <Link id="m-getmodeat" /><code><Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{" GetModeAt(int index)"}</code> |  |
| <Link id="m-removemode" /><code>{"void RemoveMode(int indexToRemove)"}</code> |  |
| <Link id="m-initializedictionary" /><code>{"private void InitializeDictionary()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ControllerModeSettings`:

[`ControllerActionsManager.controllerSettings`](/game-api/types/global-c-d/controlleractionsmanager#m-controllersettings).
