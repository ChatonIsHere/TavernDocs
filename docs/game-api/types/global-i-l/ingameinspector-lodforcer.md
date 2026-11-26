---
title: "InGameInspector.LODForcer"
description: "Debug inspector tool that forces a chosen LOD level on the LOD group you point at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.LODForcer

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that forces a chosen LOD level on the LOD group you point at.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODForcer("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | Creates an `InGameInspector.LODForcer` from `inspector`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentlod" /><code>{"private int currentLOD"}</code> | The forced LOD index, or -1 for not forced. |
| <Link id="m-lods" /><code>{"private int lods"}</code> | Number of LOD levels in the selected group. |
| <Link id="m-selectedgroup" /><code>{"private LODGroup selectedGroup"}</code> | The LOD group being forced. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Shown on the inspector as "LOD forcer". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Restores teleport mode and turns off the pointer ray. |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Takes over the teleport button, turns on the pointer ray and clears the selection. |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | Clears the selection. It nulls the group before un-forcing, so the forced LOD stays forced. |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | Forces the previous LOD level, wrapping round. |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | Forces the next LOD level, wrapping round. |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | Does nothing for this tool. |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | On a teleport press with nothing selected, tries to select a group with `CheckSelect`. |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Shows the selected group and LOD. The forced and not forced labels are swapped in the code. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkselect" /><code>{"private void CheckSelect()"}</code> | Raycasts from the pointer and selects the hit object's `LODGroup`, or one under its network prefab. |

</details>
