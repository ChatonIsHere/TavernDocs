---
title: "InGameInspector.ChunkBounds"
description: "Debug inspector tool that shows the bounds of the location chunk you are in as a see-through cube that follows you between chunks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.ChunkBounds

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that shows the bounds of the location chunk you are in as a see-through cube that follows you between chunks.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/mod/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/mod/game-api/types/global-i-l/ingameinspector-ingametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkBounds("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | <span className="api-desc">Creates an `InGameInspector.ChunkBounds` from `inspector`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private GameObject bounds"}</code> | <span className="api-desc">The cube primitive drawn over the chunk. Hidden from the hierarchy and not saved.</span> |
| <Link id="m-currentchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk"}</code> | <span className="api-desc">The location chunk the cube is currently drawn for.</span> |
| <Link id="m-isshowing" /><code>{"private bool isShowing"}</code> | <span className="api-desc">Whether the bounds cube is turned on.</span> |
| <Link id="m-usedmaterial" /><code>{"private Material usedMaterial"}</code> | <span className="api-desc">Copy of the inspector's chunk bounds material, whose alpha the up and down buttons change.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">Shown on the inspector as "Chunks Bounds".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Hides the bounds cube if it is showing.</span> |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | <span className="api-desc">Toggles the bounds cube on or off for the chunk that best contains the inspector.</span> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | <span className="api-desc">Makes the bounds cube 0.1 more transparent.</span> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | <span className="api-desc">Makes the bounds cube 0.1 more opaque.</span> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-update" /><code>{"override void Update()"}</code> | <span className="api-desc">While showing, moves the cube to whichever location chunk now best contains the inspector.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatechunk" /><code>{"private void UpdateChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" newchunk)"}</code> | <span className="api-desc">Creates, moves and scales the cube to a chunk's bounds, or destroys it when passed null.</span> |

</details>
