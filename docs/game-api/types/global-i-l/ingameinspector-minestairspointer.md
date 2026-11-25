---
title: "InGameInspector.MineStairsPointer"
description: "class InGameInspector.MineStairsPointer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.MineStairsPointer

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MineStairsPointer("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentlayer" /><code>{"private int currentLayer"}</code> |
| <Link id="m-currentportal" /><code>{"private Transform currentPortal"}</code> |
| <Link id="m-currentstreamer" /><code>{"private "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" currentStreamer"}</code> |
| <Link id="m-direction" /><code>{"private int direction"}</code> |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" manager"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |
| <Link id="m-update" /><code>{"override void Update()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-changedchunk" /><code>{"private void ChangedChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-getportal" /><code>{"private bool GetPortal()"}</code> |

</details>
