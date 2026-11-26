---
title: "InGameInspector.StraightJumper"
description: "Debug inspector tool that moves the player a set distance forward, up or down in one step."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.StraightJumper

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that moves the player a set distance forward, up or down in one step.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/mod/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.NonTeleporterInGameTool`](/mod/game-api/types/global-i-l/ingameinspector-nonteleporteringametool)
- **Nested types** [`Direction`](/mod/game-api/types/global-i-l/ingameinspector-straightjumper-direction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StraightJumper("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | <span className="api-desc">Creates an `InGameInspector.StraightJumper` from `inspector`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentdirection" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ingameinspector-straightjumper-direction">{"InGameInspector.StraightJumper.Direction"}</Link>{" currentDirection"}</code> | <span className="api-desc">Horizontal, up or down.</span> |
| <Link id="m-distance" /><code>{"private float distance"}</code> | <span className="api-desc">Jump length in metres. Starts at 0.5.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">Shown on the inspector as "Straight Jumper".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | <span className="api-desc">Moves the player `distance` metres in the chosen direction. Forward uses the head direction flattened to horizontal.</span> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | <span className="api-desc">Shortens the jump by 0.5 metres.</span> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | <span className="api-desc">Lengthens the jump by 0.5 metres.</span> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Picks up, horizontal or down from the angle of the swipe when the teleport button is pressed.</span> |
| <Link id="m-update" /><code>{"override void Update()"}</code> | <span className="api-desc">Shows the distance and direction.</span> |
