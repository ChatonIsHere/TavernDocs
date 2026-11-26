---
title: "InGameInspector.MineStairsPointer"
description: "Debug inspector tool that points a compass on the inspector at the cave layer portal up or down from the layer you are in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.MineStairsPointer

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that points a compass on the inspector at the cave layer portal up or down from the layer you are in.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/mod/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/mod/game-api/types/global-i-l/ingameinspector-ingametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MineStairsPointer("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | <span className="api-desc">Creates an `InGameInspector.MineStairsPointer` from `inspector`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentlayer" /><code>{"private int currentLayer"}</code> | <span className="api-desc">Layer identifier of the cave layer you are in.</span> |
| <Link id="m-currentportal" /><code>{"private Transform currentPortal"}</code> | <span className="api-desc">Transform of the portal the compass points at.</span> |
| <Link id="m-currentstreamer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" currentStreamer"}</code> | <span className="api-desc">The cave layer streamer on the current chunk, or null outside the caves.</span> |
| <Link id="m-direction" /><code>{"private int direction"}</code> | <span className="api-desc">1 for up, -1 for down. Starts at 0, which acts as down.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" manager"}</code> | <span className="api-desc">The scene's `CaveLayerManager`, found when the tool is built.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">Shown on the inspector as "Stairs down pointer".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Stops listening for chunk changes and hides the compass.</span> |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Listens for the local player's chunk changes and checks the current chunk.</span> |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | <span className="api-desc">Points the compass down to the next layer's portal.</span> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | <span className="api-desc">Points the compass up to this layer's portal.</span> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-update" /><code>{"override void Update()"}</code> | <span className="api-desc">Turns the compass towards the portal and shows the direction and layer, or a waiting or not in caves message.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changedchunk" /><code>{"private void ChangedChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Called when the local player changes chunk. Picks up the chunk's `CaveLayerStreamer` and finds the portal, or hides the compass.</span> |
| <Link id="m-getportal" /><code>{"private bool GetPortal()"}</code> | <span className="api-desc">Finds the target portal: this layer's portal when pointing up, the next layer's when pointing down. Returns false if not loaded.</span> |

</details>
