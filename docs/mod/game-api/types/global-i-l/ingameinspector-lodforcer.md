---
title: "InGameInspector.LODForcer"
description: "Debug inspector tool that forces a chosen LOD level on the LOD group you point at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.LODForcer

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that forces a chosen LOD level on the LOD group you point at.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/mod/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.NonTeleporterInGameTool`](/mod/game-api/types/global-i-l/ingameinspector-nonteleporteringametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODForcer("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | <span className="api-desc">Creates an `InGameInspector.LODForcer` from `inspector`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentlod" /><code>{"private int currentLOD"}</code> | <span className="api-desc">The forced LOD index, or -1 for not forced.</span> |
| <Link id="m-lods" /><code>{"private int lods"}</code> | <span className="api-desc">Number of LOD levels in the selected group.</span> |
| <Link id="m-selectedgroup" /><code>{"private LODGroup selectedGroup"}</code> | <span className="api-desc">The LOD group being forced.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">Shown on the inspector as "LOD forcer".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Restores teleport mode and turns off the pointer ray.</span> |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Takes over the teleport button, turns on the pointer ray and clears the selection.</span> |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | <span className="api-desc">Clears the selection. It nulls the group before un-forcing, so the forced LOD stays forced.</span> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | <span className="api-desc">Forces the previous LOD level, wrapping round.</span> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | <span className="api-desc">Forces the next LOD level, wrapping round.</span> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">On a teleport press with nothing selected, tries to select a group with `CheckSelect`.</span> |
| <Link id="m-update" /><code>{"override void Update()"}</code> | <span className="api-desc">Shows the selected group and LOD. The forced and not forced labels are swapped in the code.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkselect" /><code>{"private void CheckSelect()"}</code> | <span className="api-desc">Raycasts from the pointer and selects the hit object's `LODGroup`, or one under its network prefab.</span> |

</details>
