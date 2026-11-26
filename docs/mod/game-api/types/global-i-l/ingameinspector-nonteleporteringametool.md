---
title: "InGameInspector.NonTeleporterInGameTool"
description: "Base for inspector tools that use the teleport button themselves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.NonTeleporterInGameTool

An **private abstract class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Base for inspector tools that use the teleport button themselves. While enabled it removes the player's teleport controller mode on that hand.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/mod/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/mod/game-api/types/global-i-l/ingameinspector-ingametool)
- **Derived types** [`InGameInspector.BubbleInspectorTool`](/mod/game-api/types/global-i-l/ingameinspector-bubbleinspectortool), [`InGameInspector.ClonerTool`](/mod/game-api/types/global-i-l/ingameinspector-clonertool), [`InGameInspector.DirectTeleporter`](/mod/game-api/types/global-i-l/ingameinspector-directteleporter), [`InGameInspector.LODBias`](/mod/game-api/types/global-i-l/ingameinspector-lodbias), [`InGameInspector.LODForcer`](/mod/game-api/types/global-i-l/ingameinspector-lodforcer), [`InGameInspector.LODUpdater`](/mod/game-api/types/global-i-l/ingameinspector-lodupdater), [`InGameInspector.StraightJumper`](/mod/game-api/types/global-i-l/ingameinspector-straightjumper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NonTeleporterInGameTool("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | <span className="api-desc">Creates an `InGameInspector.NonTeleporterInGameTool` from `inspector`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller"}</code> | <span className="api-desc">Input of the player holding the inspector, set while the tool is enabled.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Adds teleport mode back to the player's controller.</span> |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stores the holder's `PlayerInput` and removes its teleport controller mode.</span> |
