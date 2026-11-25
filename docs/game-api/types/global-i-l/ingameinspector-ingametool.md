---
title: "InGameInspector.InGameTool"
description: "abstract class InGameInspector.InGameTool in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.InGameTool

An **private abstract class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Derived types** [`InGameInspector.ChunkBounds`](/game-api/types/global-i-l/ingameinspector-chunkbounds), [`InGameInspector.CommandRunner`](/game-api/types/global-i-l/ingameinspector-commandrunner), [`InGameInspector.LODVizualizer`](/game-api/types/global-i-l/ingameinspector-lodvizualizer), [`InGameInspector.MineStairsPointer`](/game-api/types/global-i-l/ingameinspector-minestairspointer), [`InGameInspector.NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool), [`InGameInspector.SpawnPointTeleporter`](/game-api/types/global-i-l/ingameinspector-spawnpointteleporter)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InGameTool("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-name" /><code>{"abstract string Name { get; }"}</code> |
| <Link id="m-inspector" /><code>{"protected "}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" Inspector { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-disable" /><code>{"abstract void Disable()"}</code> |
| <Link id="m-enable" /><code>{"abstract void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-pressclearasync" /><code>{"abstract void PressClearAsync()"}</code> |
| <Link id="m-pressdown" /><code>{"abstract void PressDown()"}</code> |
| <Link id="m-pressup" /><code>{"abstract void PressUp()"}</code> |
| <Link id="m-receiveangle" /><code>{"abstract void ReceiveAngle(float angle)"}</code> |
| <Link id="m-receiveinput" /><code>{"abstract void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |
| <Link id="m-serialize" /><code>{"virtual void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-update" /><code>{"abstract void Update()"}</code> |

## Used in

Members of other types that take, return or hold a `InGameTool`:

[`InGameInspector.availableTools`](/game-api/types/global-i-l/ingameinspector#m-availabletools).
