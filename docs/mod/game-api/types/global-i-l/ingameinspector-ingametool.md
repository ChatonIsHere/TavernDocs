---
title: "InGameInspector.InGameTool"
description: "Private base for the debug tools on the in-game inspector pickup (LOD tools, teleporters, cloner, console command runner and others)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.InGameTool

An **private abstract class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private base for the debug tools on the in-game inspector pickup (LOD tools, teleporters, cloner, console command runner and others). The inspector forwards input to the selected tool.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/mod/game-api/types/global-i-l/ingameinspector)
- **Derived types** [`InGameInspector.ChunkBounds`](/mod/game-api/types/global-i-l/ingameinspector-chunkbounds), [`InGameInspector.CommandRunner`](/mod/game-api/types/global-i-l/ingameinspector-commandrunner), [`InGameInspector.LODVizualizer`](/mod/game-api/types/global-i-l/ingameinspector-lodvizualizer), [`InGameInspector.MineStairsPointer`](/mod/game-api/types/global-i-l/ingameinspector-minestairspointer), [`InGameInspector.NonTeleporterInGameTool`](/mod/game-api/types/global-i-l/ingameinspector-nonteleporteringametool), [`InGameInspector.SpawnPointTeleporter`](/mod/game-api/types/global-i-l/ingameinspector-spawnpointteleporter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InGameTool("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | Creates an `InGameInspector.InGameTool` from `inspector`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"abstract string Name { get; }"}</code> | Display name of the tool. |
| <Link id="m-inspector" /><code>{"protected "}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" Inspector { get; set; }"}</code> | The inspector that owns the tool. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"abstract void Disable()"}</code> | Called when the inspector is let go or destroyed. |
| <Link id="m-enable" /><code>{"abstract void Enable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Called when a player grabs the inspector with this tool selected. |
| <Link id="m-pressclearasync" /><code>{"abstract void PressClearAsync()"}</code> | Runs the tool's main action, from the inspector's clear button. |
| <Link id="m-pressdown" /><code>{"abstract void PressDown()"}</code> | Handles the down button, often to change a value or step back. |
| <Link id="m-pressup" /><code>{"abstract void PressUp()"}</code> | Handles the up button, often to change a value or step forward. |
| <Link id="m-receiveangle" /><code>{"abstract void ReceiveAngle(float angle)"}</code> | Receives the swipe rotation angle while the touchpad is held. |
| <Link id="m-receiveinput" /><code>{"abstract void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Receives the controller input when teleport is pressed. |
| <Link id="m-serialize" /><code>{"virtual void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads tool data for the inspector's sync message. The command runner uses it to run its command on the server. |
| <Link id="m-update" /><code>{"abstract void Update()"}</code> | Called every frame while held, usually to update the display text. |

## Used in

Members of other types that take, return or hold a `InGameTool`:

[`InGameInspector.availableTools`](/mod/game-api/types/global-i-l/ingameinspector#m-availabletools).
