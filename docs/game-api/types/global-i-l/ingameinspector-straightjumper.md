---
title: "InGameInspector.StraightJumper"
description: "Debug inspector tool that moves the player a set distance forward, up or down in one step."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.StraightJumper

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that moves the player a set distance forward, up or down in one step.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool)
- **Nested types** [`Direction`](/game-api/types/global-i-l/ingameinspector-straightjumper-direction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StraightJumper("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | Creates an `InGameInspector.StraightJumper` from `inspector`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentdirection" /><code>{"private "}<Link to="/game-api/types/global-i-l/ingameinspector-straightjumper-direction">{"InGameInspector.StraightJumper.Direction"}</Link>{" currentDirection"}</code> | Horizontal, up or down. |
| <Link id="m-distance" /><code>{"private float distance"}</code> | Jump length in metres. Starts at 0.5. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Shown on the inspector as "Straight Jumper". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | Moves the player `distance` metres in the chosen direction. Forward uses the head direction flattened to horizontal. |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | Shortens the jump by 0.5 metres. |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | Lengthens the jump by 0.5 metres. |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | Does nothing for this tool. |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Picks up, horizontal or down from the angle of the swipe when the teleport button is pressed. |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Shows the distance and direction. |
