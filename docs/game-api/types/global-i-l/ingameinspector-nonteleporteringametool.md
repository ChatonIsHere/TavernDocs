---
title: "InGameInspector.NonTeleporterInGameTool"
description: "Base for inspector tools that use the teleport button themselves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.NonTeleporterInGameTool

An **private abstract class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Base for inspector tools that use the teleport button themselves. While enabled it removes the player's teleport controller mode on that hand.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool)
- **Derived types** [`InGameInspector.BubbleInspectorTool`](/game-api/types/global-i-l/ingameinspector-bubbleinspectortool), [`InGameInspector.ClonerTool`](/game-api/types/global-i-l/ingameinspector-clonertool), [`InGameInspector.DirectTeleporter`](/game-api/types/global-i-l/ingameinspector-directteleporter), [`InGameInspector.LODBias`](/game-api/types/global-i-l/ingameinspector-lodbias), [`InGameInspector.LODForcer`](/game-api/types/global-i-l/ingameinspector-lodforcer), [`InGameInspector.LODUpdater`](/game-api/types/global-i-l/ingameinspector-lodupdater), [`InGameInspector.StraightJumper`](/game-api/types/global-i-l/ingameinspector-straightjumper)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NonTeleporterInGameTool("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code>{"protected "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller"}</code> | Input of the player holding the inspector, set while the tool is enabled. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Adds teleport mode back to the player's controller. |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stores the holder's `PlayerInput` and removes its teleport controller mode. |
