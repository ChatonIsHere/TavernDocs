---
title: "InGameInspector.MineStairsPointer"
description: "Debug inspector tool that points a compass on the inspector at the cave layer portal up or down from the layer you are in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.MineStairsPointer

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that points a compass on the inspector at the cave layer portal up or down from the layer you are in.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MineStairsPointer("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | Creates an `InGameInspector.MineStairsPointer` from `inspector`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentlayer" /><code>{"private int currentLayer"}</code> | Layer identifier of the cave layer you are in. |
| <Link id="m-currentportal" /><code>{"private Transform currentPortal"}</code> | Transform of the portal the compass points at. |
| <Link id="m-currentstreamer" /><code>{"private "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" currentStreamer"}</code> | The cave layer streamer on the current chunk, or null outside the caves. |
| <Link id="m-direction" /><code>{"private int direction"}</code> | 1 for up, -1 for down. Starts at 0, which acts as down. |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" manager"}</code> | The scene's `CaveLayerManager`, found when the tool is built. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Shown on the inspector as "Stairs down pointer". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Stops listening for chunk changes and hides the compass. |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Listens for the local player's chunk changes and checks the current chunk. |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | Does nothing for this tool. |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | Points the compass down to the next layer's portal. |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | Points the compass up to this layer's portal. |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | Does nothing for this tool. |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Does nothing for this tool. |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Turns the compass towards the portal and shows the direction and layer, or a waiting or not in caves message. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changedchunk" /><code>{"private void ChangedChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Called when the local player changes chunk. Picks up the chunk's `CaveLayerStreamer` and finds the portal, or hides the compass. |
| <Link id="m-getportal" /><code>{"private bool GetPortal()"}</code> | Finds the target portal: this layer's portal when pointing up, the next layer's when pointing down. Returns false if not loaded. |

</details>
