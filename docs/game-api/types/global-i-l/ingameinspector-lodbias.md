---
title: "InGameInspector.LODBias"
description: "Debug inspector tool that changes Unity's global QualitySettings.lodBias, and puts it back when the tool is turned off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.LODBias

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that changes Unity's global `QualitySettings.lodBias`, and puts it back when the tool is turned off.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LODBias("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basebias" /><code>{"private float baseBias"}</code> | The LOD bias when the tool was created, restored by `Disable`. |
| <Link id="m-biasstep" /><code>{"private float biasStep"}</code> | How much each up or down press changes the bias. Starts at 0.1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Shown on the inspector as "LOD Bias". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Restores teleport mode and resets the LOD bias to the value it had when the tool was built. |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | Resets the LOD bias by calling `Disable`. |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | Lowers the LOD bias by `biasStep`. |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | Raises the LOD bias by `biasStep`. |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | Sets `biasStep` from the swipe angle, from 0 to 1 in steps of 0.1. |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Does nothing for this tool. |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Shows the current LOD bias and step. |
