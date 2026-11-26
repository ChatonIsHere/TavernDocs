---
title: "InGameInspector.BubbleInspectorTool"
description: "Debug inspector tool that points at a networked object and runs BubbleInspector.Evaluate on it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.BubbleInspectorTool

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that points at a networked object and runs `BubbleInspector.Evaluate` on it. One of the twelve tools built in `InGameInspector.Awake`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BubbleInspectorTool("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-selected" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" selected"}</code> | The network prefab the last raycast hit. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Shown on the inspector as "Bubble Inspector". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Restores teleport mode and turns off the pointer ray. |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Takes over the teleport button and turns on the pointer ray. |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | Runs `BubbleInspector.Evaluate` on the selected prefab, if one is selected. |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | Does nothing for this tool. |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | Does nothing for this tool. |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | Does nothing for this tool. |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | On a teleport press, raycasts from the pointer and selects the `NetworkPrefab` that was hit. |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Shows the selected entity's name, or asks you to select an object. |
