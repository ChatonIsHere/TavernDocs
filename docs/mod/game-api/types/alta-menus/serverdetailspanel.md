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
| <Link id="m-ctor" /><code>{"protected ServerDetailsPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currenttype" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/serverdetailspanel-buttondata">{"ServerDetailsPanel.ButtonData"}</Link>{" currentType"}</code> | <span className="api-desc">The join type button picked, with its data and friendly name.</span> |
| <Link id="m-descriptioninput" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" descriptionInput"}</code> | <span className="api-desc">The server description field.</span> |
| <Link id="m-joinbuttondata" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/serverdetailspanel-buttondata">{"ServerDetailsPanel.ButtonData"}</Link>{"[] joinButtonData"}</code> | <span className="api-desc">The join type buttons with the data each stands for.</span> |
| <Link id="m-joinbuttons" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{" joinButtons"}</code> | <span className="api-desc">The button group for picking a join type.</span> |
| <Link id="m-joinedserverspage" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" joinedServersPage"}</code> | <span className="api-desc">The joined servers panel.</span> |
| <Link id="m-nameinput" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" nameInput"}</code> | <span className="api-desc">The server name field.</span> |
| <Link id="m-selectedserverpanel" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/selectedgrouppanel">{"SelectedGroupPanel"}</Link>{" selectedServerPanel"}</code> | <span className="api-desc">The panel for the selected server.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-confirmbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" confirmButton"}</code> | <span className="api-desc">Button that runs the panel's `Run` task when pressed.</span> |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> | <span className="api-desc">True while `Run` is in progress, so repeat presses of the confirm button are ignored.</span> |
| <Link id="m-summarytext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" summaryText"}</code> | <span className="api-desc">Text that shows `GetSummaryText`, refreshed when the name, description or join type changes.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-confirmbuttonpressed" /><code>{"protected async void ConfirmButtonPressed("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Runs `Run` when confirm is pressed, ignoring presses while one is running.</span> |
| <Link id="m-getsummarytext" /><code>{"protected abstract string GetSummaryText()"}</code> | <span className="api-desc">Subclasses return the summary text to show.</span> |
| <Link id="m-run" /><code>{"protected abstract Task Run()"}</code> | <span className="api-desc">Subclasses create or update the server.</span> |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | <span className="api-desc">Hooks the inputs, confirm button and join type buttons.</span> |
| <Link id="m-updatesummary" /><code>{"protected void UpdateSummary("}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" obj)"}</code> | <span className="api-desc">Refreshes the summary text.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlejointypechanged" /><code>{"private void HandleJoinTypeChanged("}<Link to="/mod/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{" obj)"}</code> | <span className="api-desc">Sets `currentType` to the join button data matching the newly chosen button and refreshes the summary.</span> |

</details>
