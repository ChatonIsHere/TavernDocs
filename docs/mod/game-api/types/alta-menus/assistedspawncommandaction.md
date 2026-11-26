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
| <Link id="m-ctor" /><code>{"AssistedSpawnCommandAction()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assistedcommanddefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/assistedspawncommanddefinition">{"AssistedSpawnCommandDefinition"}</Link>{" assistedCommandDefinition"}</code> | The spawn command definition this control fills in and runs. |
| <Link id="m-baseuser" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" baseUser"}</code> | The keyboard user to hand the keyboard back to. |
| <Link id="m-progresstext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" progressText"}</code> | Text showing what will be spawned. |
| <Link id="m-submitbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" submitButton"}</code> | Button that sends the command; disabled until the arguments are valid. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxcharacterslimit" /><code>{"int MaxCharactersLimit { get; }"}</code> | Keyboard input limit, 50 characters. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> | Sets the `prefab` argument to the typed text and rechecks if the command can be sent. |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> | Does nothing. |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> | Always false, so typed text is shown. |
| <Link id="m-lostfocus" /><code>{"void LostFocus()"}</code> | Hands the touch screen keyboard back to the user it had before. |
| <Link id="m-next" /><code>{"void Next()"}</code> | Does nothing. |
| <Link id="m-previous" /><code>{"void Previous()"}</code> | Does nothing. |
| <Link id="m-setsettings" /><code>{"override void SetSettings("}<Link to="/mod/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> | First call only: takes the `AssistedSpawnCommandDefinition`, builds the quantity buttons and hooks up the submit button. |
| <Link id="m-dynamicbuttonsetup" /><code>{"protected override void DynamicButtonSetup("}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" textButton, int buttonIndex)"}</code> | Wires each quantity button to set that quantity and then open the keyboard. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkcansubmitcommand" /><code>{"private void CheckCanSubmitCommand()"}</code> | Enables the submit button only when the command's arguments are valid, and updates the progress text. |
| <Link id="m-connectkeyboard" /><code>{"private void ConnectKeyboard("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | Opens the runtime console and points the touch screen keyboard at this control, remembering the previous keyboard user. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Gives the keyboard back to its previous user. |
| <Link id="m-setprogresstext" /><code>{"private void SetProgressText()"}</code> | Shows the current quantity and prefab arguments on `progressText`. |
| <Link id="m-setquantityforcommand" /><code>{"private void SetQuantityForCommand(int quantity)"}</code> | Sets the `quantity` argument and rechecks if the command can be sent. |
| <Link id="m-submitcommand" /><code>{"private void SubmitCommand("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | Runs the spawn command and closes the runtime console. |

</details>
