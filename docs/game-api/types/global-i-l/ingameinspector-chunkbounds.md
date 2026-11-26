---
title: "InGameInspector.ChunkBounds"
description: "Debug inspector tool that shows the bounds of the location chunk you are in as a see-through cube that follows you between chunks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.ChunkBounds

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that shows the bounds of the location chunk you are in as a see-through cube that follows you between chunks.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChunkBounds("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private GameObject bounds"}</code> | The cube primitive drawn over the chunk. Hidden from the hierarchy and not saved. |
| <Link id="m-currentchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk"}</code> | The location chunk the cube is currently drawn for. |
| <Link id="m-isshowing" /><code>{"private bool isShowing"}</code> | Whether the bounds cube is turned on. |
| <Link id="m-usedmaterial" /><code>{"private Material usedMaterial"}</code> | Copy of the inspector's chunk bounds material, whose alpha the up and down buttons change. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Shown on the inspector as "Chunks Bounds". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Hides the bounds cube if it is showing. |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Does nothing for this tool. |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | Toggles the bounds cube on or off for the chunk that best contains the inspector. |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | Makes the bounds cube 0.1 more transparent. |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | Makes the bounds cube 0.1 more opaque. |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | Does nothing for this tool. |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Does nothing for this tool. |
| <Link id="m-update" /><code>{"override void Update()"}</code> | While showing, moves the cube to whichever location chunk now best contains the inspector. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatechunk" /><code>{"private void UpdateChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" newchunk)"}</code> | Creates, moves and scales the cube to a chunk's bounds, or destroys it when passed null. |

</details>
