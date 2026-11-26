---
title: "InGameInspector.SpawnPointTeleporter"
description: "Debug inspector tool that moves the holder to a random position in one of the scene's spawn areas."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.SpawnPointTeleporter

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that moves the holder to a random position in one of the scene's spawn areas.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/mod/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/mod/game-api/types/global-i-l/ingameinspector-ingametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnPointTeleporter("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | <span className="api-desc">Creates an `InGameInspector.SpawnPointTeleporter` from `inspector`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablepoints" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{"> availablePoints"}</code> | <span className="api-desc">Spawn areas found in `SpawnArea.InstanceMap` when the tool was built.</span> |
| <Link id="m-currentpoint" /><code>{"private int currentPoint"}</code> | <span className="api-desc">Index of the selected spawn area.</span> |
| <Link id="m-length" /><code>{"private int length"}</code> | <span className="api-desc">Number of spawn areas found.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">Shown on the inspector as "Spawn Point Teleporter".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | <span className="api-desc">Moves the holder to a random spawn position in the selected spawn area.</span> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | <span className="api-desc">Selects the previous spawn area, wrapping round.</span> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | <span className="api-desc">Selects the next spawn area, wrapping round.</span> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-update" /><code>{"override void Update()"}</code> | <span className="api-desc">Shows the selected spawn area.</span> |
