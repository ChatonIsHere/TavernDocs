---
title: "InGameInspector.LODBias"
description: "Debug inspector tool that changes Unity's global QualitySettings.lodBias, and puts it back when the tool is turned off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.LODBias

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that changes Unity's global `QualitySettings.lodBias`, and puts it back when the tool is turned off.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/mod/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.NonTeleporterInGameTool`](/mod/game-api/types/global-i-l/ingameinspector-nonteleporteringametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODBias("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | <span className="api-desc">Creates an `InGameInspector.LODBias` from `inspector`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basebias" /><code>{"private float baseBias"}</code> | <span className="api-desc">The LOD bias when the tool was created, restored by `Disable`.</span> |
| <Link id="m-biasstep" /><code>{"private float biasStep"}</code> | <span className="api-desc">How much each up or down press changes the bias. Starts at 0.1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">Shown on the inspector as "LOD Bias".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Restores teleport mode and resets the LOD bias to the value it had when the tool was built.</span> |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | <span className="api-desc">Resets the LOD bias by calling `Disable`.</span> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | <span className="api-desc">Lowers the LOD bias by `biasStep`.</span> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | <span className="api-desc">Raises the LOD bias by `biasStep`.</span> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | <span className="api-desc">Sets `biasStep` from the swipe angle, from 0 to 1 in steps of 0.1.</span> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-update" /><code>{"override void Update()"}</code> | <span className="api-desc">Shows the current LOD bias and step.</span> |
