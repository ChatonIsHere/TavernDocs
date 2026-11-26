---
title: "RepairBoxDevControlPanel"
description: "Developer-only panel on a repair box with build and destroy buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBoxDevControlPanel

A **class** in `Root.Township`, `Alta.UI`.

Developer-only panel on a repair box with build and destroy buttons. It deletes itself unless the local player is a developer.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairBoxDevControlPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buildbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" buildButton"}</code> | <span className="api-desc">Button that sends the build command.</span> |
| <Link id="m-destroybutton" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" destroyButton"}</code> | <span className="api-desc">Button that sends the destroy command.</span> |
| <Link id="m-messagetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" messageText"}</code> | <span className="api-desc">Text on the panel, refreshed on start.</span> |
| <Link id="m-repairbox" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/repairbox">{"RepairBox"}</Link>{" repairBox"}</code> | <span className="api-desc">The repair box the commands go to.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Deletes the panel if there is no repair box or the local player is not a developer; otherwise hooks the buttons.</span> |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Only lets developers press the buttons.</span> |
| <Link id="m-handlebuildpressed" /><code>{"private void HandleBuildPressed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Asks the server to build the repair box.</span> |
| <Link id="m-handledestroypressed" /><code>{"private void HandleDestroyPressed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Asks the server to destroy the repair box.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the buttons.</span> |

</details>
