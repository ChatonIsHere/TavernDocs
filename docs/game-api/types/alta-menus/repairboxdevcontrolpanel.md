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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairBoxDevControlPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buildbutton" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" buildButton"}</code> | Button that sends the build command. |
| <Link id="m-destroybutton" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" destroyButton"}</code> | Button that sends the destroy command. |
| <Link id="m-messagetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" messageText"}</code> | Text on the panel, refreshed on start. |
| <Link id="m-repairbox" /><code>{"private "}<Link to="/game-api/types/global-q-r/repairbox">{"RepairBox"}</Link>{" repairBox"}</code> | The repair box the commands go to. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Deletes the panel if there is no repair box or the local player is not a developer; otherwise hooks the buttons. |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Only lets developers press the buttons. |
| <Link id="m-handlebuildpressed" /><code>{"private void HandleBuildPressed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Asks the server to build the repair box. |
| <Link id="m-handledestroypressed" /><code>{"private void HandleDestroyPressed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Asks the server to destroy the repair box. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the buttons. |

</details>
