---
title: "InputField"
description: "A text input field in the game's world-space menus, showing its text through a TextRenderer with an optional caret and secret (password) mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputField

A **class** in `Root.Township`, `Alta.Meta.UI`.

A text input field in the game's world-space menus, showing its text through a `TextRenderer` with an optional caret and secret (password) mode.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `SelectionBase`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InputField()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-issecret" /><code>{"bool isSecret"}</code> | Whether the text is shown masked with `*`. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-caret" /><code>{"private Transform caret"}</code> | The caret transform set by `SetupCaret`, or null when the caret is off. |
| <Link id="m-inputtext" /><code>{"private string inputText"}</code> | Serialized copy of the text, kept in step with `InputText` and used when toggling secret mode. |
| <Link id="m-maxlength" /><code>{"private int maxLength"}</code> | Display length before the text is cut with "...". -1 means no limit. Doesn't limit what can be typed. |
| <Link id="m-onsubmit" /><code>{"private UnityEvent onSubmit"}</code> | Inspector event invoked by `OnSubmit`. |
| <Link id="m-textvisuals" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textVisuals"}</code> | Text renderer that shows the text, or asterisks in secret mode. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inputtext-2" /><code>{"string InputText { get; private set; }"}</code> | The field's current text (the real value, not the masked display). |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-inputchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{"> InputChanged"}</code> | Raised whenever the text is set to something new. |
| <Link id="m-submitted" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{"> Submitted"}</code> | Raised when the field is submitted. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablecaret" /><code>{"void DisableCaret()"}</code> | Stops moving the caret with the text. |
| <Link id="m-onsubmit-2" /><code>{"void OnSubmit()"}</code> | Raises `Submitted` and the inspector's submit event. |
| <Link id="m-settext" /><code>{"void SetText(string newText)"}</code> | Sets the text and updates the display (masked with `*` if secret, cut to the max length otherwise). |
| <Link id="m-settext-2" /><code>{"void SetText(string newText, bool toggleSecret)"}</code> | Sets the text and updates the display (masked with `*` if secret, cut to the max length otherwise). |
| <Link id="m-setupcaret" /><code>{"void SetupCaret(Transform caret)"}</code> | Attaches a caret transform that follows the end of the text. |
| <Link id="m-togglesecret" /><code>{"void ToggleSecret()"}</code> | Flips secret mode and redraws the text. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatecaret" /><code>{"private void UpdateCaret()"}</code> | Moves the caret to the end of the current line of text, or the text start when empty. |

</details>

## Used in

Members of other types that take, return or hold a `InputField`:

[`InputFieldWithKeyboard.inputField`](/game-api/types/alta-menus/inputfieldwithkeyboard#m-inputfield), [`InputFieldWithKeyboard.InputField`](/game-api/types/alta-menus/inputfieldwithkeyboard#m-inputfield-2), [`FriendsListPanel.AddFriend`](/game-api/types/alta-menus/friendslistpanel#m-addfriend), [`FriendsListPanel.friendSearch`](/game-api/types/alta-menus/friendslistpanel#m-friendsearch), [`GroupMembersPage.HandleInvitePressed`](/game-api/types/alta-menus/groupmemberspage#m-handleinvitepressed), [`GroupMembersPage.inviteField`](/game-api/types/alta-menus/groupmemberspage#m-invitefield), [`ServerDetailsPanel.descriptionInput`](/game-api/types/alta-menus/serverdetailspanel#m-descriptioninput), [`ServerDetailsPanel.nameInput`](/game-api/types/alta-menus/serverdetailspanel#m-nameinput), [`ServerDetailsPanel.UpdateSummary`](/game-api/types/alta-menus/serverdetailspanel#m-updatesummary), [`AccountNameTextReplacer.UpdateFromInput`](/game-api/types/alta-menus/accountnametextreplacer#m-updatefrominput), [`AltaAccountRegistererAndLinker.confirmPasswordInput`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-confirmpasswordinput), [`AltaAccountRegistererAndLinker.emailInput`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-emailinput), [`EmailVerificationManager.emailInput`](/game-api/types/global-e-h/emailverificationmanager#m-emailinput), [`LoginAndRegisterHelper.passwordInput`](/game-api/types/global-i-l/loginandregisterhelper#m-passwordinput), [`LoginAndRegisterHelper.usernameInput`](/game-api/types/global-i-l/loginandregisterhelper#m-usernameinput), [`RuntimeConsole.OnInputSubmitted`](/game-api/types/global-q-r/runtimeconsole#m-oninputsubmitted).
