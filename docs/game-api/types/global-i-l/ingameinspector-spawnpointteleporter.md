---
title: "InGameInspector.SpawnPointTeleporter"
description: "Debug inspector tool that moves the holder to a random position in one of the scene's spawn areas."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.SpawnPointTeleporter

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that moves the holder to a random position in one of the scene's spawn areas.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnPointTeleporter("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | Creates an `InGameInspector.SpawnPointTeleporter` from `inspector`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablepoints" /><code>{"private List<"}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{"> availablePoints"}</code> | Spawn areas found in `SpawnArea.InstanceMap` when the tool was built. |
| <Link id="m-currentpoint" /><code>{"private int currentPoint"}</code> | Index of the selected spawn area. |
| <Link id="m-length" /><code>{"private int length"}</code> | Number of spawn areas found. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Shown on the inspector as "Spawn Point Teleporter". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Does nothing for this tool. |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Does nothing for this tool. |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | Moves the holder to a random spawn position in the selected spawn area. |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | Selects the previous spawn area, wrapping round. |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | Selects the next spawn area, wrapping round. |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | Does nothing for this tool. |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Does nothing for this tool. |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Shows the selected spawn area. |
