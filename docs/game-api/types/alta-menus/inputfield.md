---
title: "InputField"
description: "class InputField in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputField

A **class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputField()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-issecret" /><code>{"bool isSecret"}</code> |  |
| <Link id="m-caret" /><code>{"private Transform caret"}</code> |  |
| <Link id="m-inputtext" /><code>{"private string inputText"}</code> |  |
| <Link id="m-maxlength" /><code>{"private int maxLength"}</code> |  |
| <Link id="m-onsubmit" /><code>{"private UnityEvent onSubmit"}</code> |  |
| <Link id="m-textvisuals" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textVisuals"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inputtext-2" /><code>{"string InputText { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-inputchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{"> InputChanged"}</code> |  |
| <Link id="m-submitted" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{"> Submitted"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablecaret" /><code>{"void DisableCaret()"}</code> |  |
| <Link id="m-onsubmit-2" /><code>{"void OnSubmit()"}</code> |  |
| <Link id="m-settext" /><code>{"void SetText(string newText)"}</code> |  |
| <Link id="m-settext-2" /><code>{"void SetText(string newText, bool toggleSecret)"}</code> |  |
| <Link id="m-setupcaret" /><code>{"void SetupCaret(Transform caret)"}</code> |  |
| <Link id="m-togglesecret" /><code>{"void ToggleSecret()"}</code> |  |
| <Link id="m-updatecaret" /><code>{"private void UpdateCaret()"}</code> |  |

## Used in

Members of other types that take, return or hold a `InputField`:

[`InputFieldWithKeyboard.inputField`](/game-api/types/alta-menus/inputfieldwithkeyboard#m-inputfield), [`InputFieldWithKeyboard.InputField`](/game-api/types/alta-menus/inputfieldwithkeyboard#m-inputfield-2), [`FriendsListPanel.AddFriend`](/game-api/types/alta-menus/friendslistpanel#m-addfriend), [`FriendsListPanel.friendSearch`](/game-api/types/alta-menus/friendslistpanel#m-friendsearch), [`GroupMembersPage.HandleInvitePressed`](/game-api/types/alta-menus/groupmemberspage#m-handleinvitepressed), [`GroupMembersPage.inviteField`](/game-api/types/alta-menus/groupmemberspage#m-invitefield), [`ServerDetailsPanel.descriptionInput`](/game-api/types/alta-menus/serverdetailspanel#m-descriptioninput), [`ServerDetailsPanel.nameInput`](/game-api/types/alta-menus/serverdetailspanel#m-nameinput), [`ServerDetailsPanel.UpdateSummary`](/game-api/types/alta-menus/serverdetailspanel#m-updatesummary), [`AccountNameTextReplacer.UpdateFromInput`](/game-api/types/alta-menus/accountnametextreplacer#m-updatefrominput), [`AltaAccountRegistererAndLinker.confirmPasswordInput`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-confirmpasswordinput), [`AltaAccountRegistererAndLinker.emailInput`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-emailinput), [`EmailVerificationManager.emailInput`](/game-api/types/global-e-h/emailverificationmanager#m-emailinput), [`LoginAndRegisterHelper.passwordInput`](/game-api/types/global-i-l/loginandregisterhelper#m-passwordinput), [`LoginAndRegisterHelper.usernameInput`](/game-api/types/global-i-l/loginandregisterhelper#m-usernameinput), [`RuntimeConsole.OnInputSubmitted`](/game-api/types/global-q-r/runtimeconsole#m-oninputsubmitted).
