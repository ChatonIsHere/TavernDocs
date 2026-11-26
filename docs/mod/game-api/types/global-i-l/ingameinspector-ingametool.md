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
| <Link id="m-ctor" /><code>{"InGameTool("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | <span className="api-desc">Creates an `InGameInspector.InGameTool` from `inspector`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"abstract string Name { get; }"}</code> | <span className="api-desc">Display name of the tool.</span> |
| <Link id="m-inspector" /><code>{"protected "}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" Inspector { get; set; }"}</code> | <span className="api-desc">The inspector that owns the tool.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"abstract void Disable()"}</code> | <span className="api-desc">Called when the inspector is let go or destroyed.</span> |
| <Link id="m-enable" /><code>{"abstract void Enable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Called when a player grabs the inspector with this tool selected.</span> |
| <Link id="m-pressclearasync" /><code>{"abstract void PressClearAsync()"}</code> | <span className="api-desc">Runs the tool's main action, from the inspector's clear button.</span> |
| <Link id="m-pressdown" /><code>{"abstract void PressDown()"}</code> | <span className="api-desc">Handles the down button, often to change a value or step back.</span> |
| <Link id="m-pressup" /><code>{"abstract void PressUp()"}</code> | <span className="api-desc">Handles the up button, often to change a value or step forward.</span> |
| <Link id="m-receiveangle" /><code>{"abstract void ReceiveAngle(float angle)"}</code> | <span className="api-desc">Receives the swipe rotation angle while the touchpad is held.</span> |
| <Link id="m-receiveinput" /><code>{"abstract void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Receives the controller input when teleport is pressed.</span> |
| <Link id="m-serialize" /><code>{"virtual void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads tool data for the inspector's sync message. The command runner uses it to run its command on the server.</span> |
| <Link id="m-update" /><code>{"abstract void Update()"}</code> | <span className="api-desc">Called every frame while held, usually to update the display text.</span> |

## Used in

Members of other types that take, return or hold a `InGameTool`:

<div className="api-used-in">

[`InGameInspector.availableTools`](/mod/game-api/types/global-i-l/ingameinspector#m-availabletools).

</div>
