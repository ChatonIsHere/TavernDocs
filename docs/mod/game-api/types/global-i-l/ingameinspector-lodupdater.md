---
title: "InGameInspector.LODUpdater"
description: "Debug inspector tool that edits the screen-height transition of each LOD level on the LOD group you point at, live."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.LODUpdater

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that edits the screen-height transition of each LOD level on the LOD group you point at, live.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/mod/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.NonTeleporterInGameTool`](/mod/game-api/types/global-i-l/ingameinspector-nonteleporteringametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODUpdater("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | Creates an `InGameInspector.LODUpdater` from `inspector`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"private bool changed"}</code> | Set once the selected group's LODs have been edited. Nothing reads it here. |
| <Link id="m-lods" /><code>{"private LOD[] lods"}</code> | Copy of the selected group's LOD array that edits are made on. |
| <Link id="m-selected" /><code>{"private int selected"}</code> | Index of the LOD level being edited. |
| <Link id="m-selectedgroup" /><code>{"private LODGroup selectedGroup"}</code> | The LOD group being edited. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Shown on the inspector as "LOD updater". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Restores teleport mode and turns off the pointer ray. |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Takes over the teleport button, turns on the pointer ray and clears the selection. |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | Clears the selection and hides the text panel. |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | Selects the previous LOD level to edit. |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | Selects the next LOD level to edit. |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | Sets the selected level's `screenRelativeTransitionHeight` from the swipe angle (0 to 1) and applies it. |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | On a teleport press with nothing selected, tries to select a group with `CheckSelect`. |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Shows the group name, LOD count, selected level and its transition height. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkselect" /><code>{"private void CheckSelect()"}</code> | Raycasts from the pointer and selects the hit object's `LODGroup`, or one under its network prefab. |

</details>
