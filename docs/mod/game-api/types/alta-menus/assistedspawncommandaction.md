---
title: "AssistedSpawnCommandAction"
description: "Client dev tools board control for an assisted spawn command: quantity buttons plus the virtual keyboard to type a prefab name, then a submit button that..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AssistedSpawnCommandAction

A **class** in `Root.Township`, `Alta.Menu`.

Client dev tools board control for an assisted spawn command: quantity buttons plus the virtual keyboard to type a prefab name, then a submit button that sends the spawn command.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ServerMultiCommandAction`](/mod/game-api/types/alta-menus/servermulticommandaction), [`IUseVirtualKeyboard`](/mod/game-api/types/global-i-l/iusevirtualkeyboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AssistedSpawnCommandAction()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assistedcommanddefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/assistedspawncommanddefinition">{"AssistedSpawnCommandDefinition"}</Link>{" assistedCommandDefinition"}</code> | <span className="api-desc">The spawn command definition this control fills in and runs.</span> |
| <Link id="m-baseuser" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" baseUser"}</code> | <span className="api-desc">The keyboard user to hand the keyboard back to.</span> |
| <Link id="m-progresstext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" progressText"}</code> | <span className="api-desc">Text showing what will be spawned.</span> |
| <Link id="m-submitbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" submitButton"}</code> | <span className="api-desc">Button that sends the command; disabled until the arguments are valid.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxcharacterslimit" /><code>{"int MaxCharactersLimit { get; }"}</code> | <span className="api-desc">Keyboard input limit, 50 characters.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> | <span className="api-desc">Sets the `prefab` argument to the typed text and rechecks if the command can be sent.</span> |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> | <span className="api-desc">Always false, so typed text is shown.</span> |
| <Link id="m-lostfocus" /><code>{"void LostFocus()"}</code> | <span className="api-desc">Hands the touch screen keyboard back to the user it had before.</span> |
| <Link id="m-next" /><code>{"void Next()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-previous" /><code>{"void Previous()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-setsettings" /><code>{"override void SetSettings("}<Link to="/mod/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> | <span className="api-desc">First call only: takes the `AssistedSpawnCommandDefinition`, builds the quantity buttons and hooks up the submit button.</span> |
| <Link id="m-dynamicbuttonsetup" /><code>{"protected override void DynamicButtonSetup("}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" textButton, int buttonIndex)"}</code> | <span className="api-desc">Wires each quantity button to set that quantity and then open the keyboard.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkcansubmitcommand" /><code>{"private void CheckCanSubmitCommand()"}</code> | <span className="api-desc">Enables the submit button only when the command's arguments are valid, and updates the progress text.</span> |
| <Link id="m-connectkeyboard" /><code>{"private void ConnectKeyboard("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">Opens the runtime console and points the touch screen keyboard at this control, remembering the previous keyboard user.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Gives the keyboard back to its previous user.</span> |
| <Link id="m-setprogresstext" /><code>{"private void SetProgressText()"}</code> | <span className="api-desc">Shows the current quantity and prefab arguments on `progressText`.</span> |
| <Link id="m-setquantityforcommand" /><code>{"private void SetQuantityForCommand(int quantity)"}</code> | <span className="api-desc">Sets the `quantity` argument and rechecks if the command can be sent.</span> |
| <Link id="m-submitcommand" /><code>{"private void SubmitCommand("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">Runs the spawn command and closes the runtime console.</span> |

</details>
