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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputField()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-issecret" /><code>{"bool isSecret"}</code> | <span className="api-desc">Whether the text is shown masked with `*`.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-caret" /><code>{"private Transform caret"}</code> | <span className="api-desc">The caret transform set by `SetupCaret`, or null when the caret is off.</span> |
| <Link id="m-inputtext" /><code>{"private string inputText"}</code> | <span className="api-desc">Serialized copy of the text, kept in step with `InputText` and used when toggling secret mode.</span> |
| <Link id="m-maxlength" /><code>{"private int maxLength"}</code> | <span className="api-desc">Display length before the text is cut with "...". -1 means no limit. Doesn't limit what can be typed.</span> |
| <Link id="m-onsubmit" /><code>{"private UnityEvent onSubmit"}</code> | <span className="api-desc">Inspector event invoked by `OnSubmit`.</span> |
| <Link id="m-textvisuals" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textVisuals"}</code> | <span className="api-desc">Text renderer that shows the text, or asterisks in secret mode.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inputtext-2" /><code>{"string InputText { get; private set; }"}</code> | <span className="api-desc">The field's current text (the real value, not the masked display).</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-inputchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{"> InputChanged"}</code> | <span className="api-desc">Raised whenever the text is set to something new.</span> |
| <Link id="m-submitted" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{"> Submitted"}</code> | <span className="api-desc">Raised when the field is submitted.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablecaret" /><code>{"void DisableCaret()"}</code> | <span className="api-desc">Stops moving the caret with the text.</span> |
| <Link id="m-onsubmit-2" /><code>{"void OnSubmit()"}</code> | <span className="api-desc">Raises `Submitted` and the inspector's submit event.</span> |
| <Link id="m-settext" /><code>{"void SetText(string newText)"}</code> | <span className="api-desc">Sets the text and updates the display (masked with `*` if secret, cut to the max length otherwise).</span> |
| <Link id="m-settext-2" /><code>{"void SetText(string newText, bool toggleSecret)"}</code> | <span className="api-desc">Sets the text and updates the display (masked with `*` if secret, cut to the max length otherwise).</span> |
| <Link id="m-setupcaret" /><code>{"void SetupCaret(Transform caret)"}</code> | <span className="api-desc">Attaches a caret transform that follows the end of the text.</span> |
| <Link id="m-togglesecret" /><code>{"void ToggleSecret()"}</code> | <span className="api-desc">Flips secret mode and redraws the text.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatecaret" /><code>{"private void UpdateCaret()"}</code> | <span className="api-desc">Moves the caret to the end of the current line of text, or the text start when empty.</span> |

</details>

## Used in

Members of other types that take, return or hold a `InputField`:

<div className="api-used-in">

[`InputFieldWithKeyboard.inputField`](/mod/game-api/types/alta-menus/inputfieldwithkeyboard#m-inputfield), [`InputFieldWithKeyboard.InputField`](/mod/game-api/types/alta-menus/inputfieldwithkeyboard#m-inputfield-2), [`FriendsListPanel.AddFriend`](/mod/game-api/types/alta-menus/friendslistpanel#m-addfriend), [`FriendsListPanel.friendSearch`](/mod/game-api/types/alta-menus/friendslistpanel#m-friendsearch), [`GroupMembersPage.HandleInvitePressed`](/mod/game-api/types/alta-menus/groupmemberspage#m-handleinvitepressed), [`GroupMembersPage.inviteField`](/mod/game-api/types/alta-menus/groupmemberspage#m-invitefield), [`ServerDetailsPanel.descriptionInput`](/mod/game-api/types/alta-menus/serverdetailspanel#m-descriptioninput), [`ServerDetailsPanel.nameInput`](/mod/game-api/types/alta-menus/serverdetailspanel#m-nameinput), [`ServerDetailsPanel.UpdateSummary`](/mod/game-api/types/alta-menus/serverdetailspanel#m-updatesummary), [`AccountNameTextReplacer.UpdateFromInput`](/mod/game-api/types/alta-menus/accountnametextreplacer#m-updatefrominput), [`AltaAccountRegistererAndLinker.confirmPasswordInput`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-confirmpasswordinput), [`AltaAccountRegistererAndLinker.emailInput`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-emailinput), [`EmailVerificationManager.emailInput`](/mod/game-api/types/global-e-h/emailverificationmanager#m-emailinput), [`LoginAndRegisterHelper.passwordInput`](/mod/game-api/types/global-i-l/loginandregisterhelper#m-passwordinput), [`LoginAndRegisterHelper.usernameInput`](/mod/game-api/types/global-i-l/loginandregisterhelper#m-usernameinput), [`RuntimeConsole.OnInputSubmitted`](/mod/game-api/types/global-q-r/runtimeconsole#m-oninputsubmitted).

</div>
