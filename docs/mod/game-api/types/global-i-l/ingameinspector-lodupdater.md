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
| <Link id="m-ctor" /><code>{"LODUpdater("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | <span className="api-desc">Creates an `InGameInspector.LODUpdater` from `inspector`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"private bool changed"}</code> | <span className="api-desc">Set once the selected group's LODs have been edited. Nothing reads it here.</span> |
| <Link id="m-lods" /><code>{"private LOD[] lods"}</code> | <span className="api-desc">Copy of the selected group's LOD array that edits are made on.</span> |
| <Link id="m-selected" /><code>{"private int selected"}</code> | <span className="api-desc">Index of the LOD level being edited.</span> |
| <Link id="m-selectedgroup" /><code>{"private LODGroup selectedGroup"}</code> | <span className="api-desc">The LOD group being edited.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">Shown on the inspector as "LOD updater".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Restores teleport mode and turns off the pointer ray.</span> |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Takes over the teleport button, turns on the pointer ray and clears the selection.</span> |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | <span className="api-desc">Clears the selection and hides the text panel.</span> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | <span className="api-desc">Selects the previous LOD level to edit.</span> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | <span className="api-desc">Selects the next LOD level to edit.</span> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | <span className="api-desc">Sets the selected level's `screenRelativeTransitionHeight` from the swipe angle (0 to 1) and applies it.</span> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">On a teleport press with nothing selected, tries to select a group with `CheckSelect`.</span> |
| <Link id="m-update" /><code>{"override void Update()"}</code> | <span className="api-desc">Shows the group name, LOD count, selected level and its transition height.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkselect" /><code>{"private void CheckSelect()"}</code> | <span className="api-desc">Raycasts from the pointer and selects the hit object's `LODGroup`, or one under its network prefab.</span> |

</details>
