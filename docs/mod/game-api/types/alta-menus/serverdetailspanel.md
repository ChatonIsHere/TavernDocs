---
title: "ServerDetailsPanel"
description: "Client: base for the create server and edit server menu panels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerDetailsPanel

An **abstract class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client: base for the create server and edit server menu panels. Holds the name, description and join type inputs and shows a summary that updates as you type.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)
- **Derived types** [`CreateServerPanel`](/mod/game-api/types/alta-menus/createserverpanel), [`EditServerPanel`](/mod/game-api/types/alta-menus/editserverpanel)
- **Nested types** [`ButtonData`](/mod/game-api/types/alta-menus/serverdetailspanel-buttondata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ServerDetailsPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currenttype" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/serverdetailspanel-buttondata">{"ServerDetailsPanel.ButtonData"}</Link>{" currentType"}</code> | The join type button picked, with its data and friendly name. |
| <Link id="m-descriptioninput" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" descriptionInput"}</code> | The server description field. |
| <Link id="m-joinbuttondata" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/serverdetailspanel-buttondata">{"ServerDetailsPanel.ButtonData"}</Link>{"[] joinButtonData"}</code> | The join type buttons with the data each stands for. |
| <Link id="m-joinbuttons" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{" joinButtons"}</code> | The button group for picking a join type. |
| <Link id="m-joinedserverspage" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" joinedServersPage"}</code> | The joined servers panel. |
| <Link id="m-nameinput" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" nameInput"}</code> | The server name field. |
| <Link id="m-selectedserverpanel" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/selectedgrouppanel">{"SelectedGroupPanel"}</Link>{" selectedServerPanel"}</code> | The panel for the selected server. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-confirmbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" confirmButton"}</code> | Button that runs the panel's `Run` task when pressed. |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> | True while `Run` is in progress, so repeat presses of the confirm button are ignored. |
| <Link id="m-summarytext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" summaryText"}</code> | Text that shows `GetSummaryText`, refreshed when the name, description or join type changes. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-confirmbuttonpressed" /><code>{"protected async void ConfirmButtonPressed("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Runs `Run` when confirm is pressed, ignoring presses while one is running. |
| <Link id="m-getsummarytext" /><code>{"protected abstract string GetSummaryText()"}</code> | Subclasses return the summary text to show. |
| <Link id="m-run" /><code>{"protected abstract Task Run()"}</code> | Subclasses create or update the server. |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Hooks the inputs, confirm button and join type buttons. |
| <Link id="m-updatesummary" /><code>{"protected void UpdateSummary("}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" obj)"}</code> | Refreshes the summary text. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlejointypechanged" /><code>{"private void HandleJoinTypeChanged("}<Link to="/mod/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{" obj)"}</code> | Sets `currentType` to the join button data matching the newly chosen button and refreshes the summary. |

</details>
