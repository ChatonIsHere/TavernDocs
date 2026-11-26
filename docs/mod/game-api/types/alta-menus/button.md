---
title: "Button"
description: "A simple button component for the in-game (meta) UI."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Button

A **class** in `Root.Township`, `Alta.Meta.UI`.

A simple button component for the in-game (meta) UI. Holds a label, enabled flag and pressed state, raises events, and plays press and release sounds if set.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ButtonWithEvents`](/mod/game-api/types/alta-menus/buttonwithevents), [`TouchScreenButton`](/mod/game-api/types/alta-menus/touchscreenbutton)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Button()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger shared by all buttons. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnpressed" /><code>{"private bool btnPressed"}</code> | Inspector button that calls `OnPressed`. |
| <Link id="m-btnreleased" /><code>{"private bool btnReleased"}</code> | Inspector button that calls `OnReleased`. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Backing field for `IsEnabled`. |
| <Link id="m-label" /><code>{"private string label"}</code> | Backing field for `Label`. |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonsettings">{"ButtonSettings"}</Link>{" settings"}</code> | Backing field for `Settings`. |
| <Link id="m-sounds" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buttonsoundsettings">{"ButtonSoundSettings"}</Link>{" sounds"}</code> | Sounds played on press and release. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | Whether the button is enabled. Setting it raises `EnabledChanged`; nothing here stops `Press` when disabled. |
| <Link id="m-label-2" /><code>{"string Label { get; set; }"}</code> | The button text. Setting it raises `LabelChanged`. |
| <Link id="m-settings-2" /><code><Link to="/mod/game-api/types/alta-menus/buttonsettings">{"ButtonSettings"}</Link>{" Settings { get; set; }"}</code> | The `ButtonSettings` asset for the button. Setting it raises `SettingsChanged`. |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> | True between `Press` and `Release`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-enabledchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"> EnabledChanged"}</code> | Raised when `IsEnabled` changes. |
| <Link id="m-labelchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"> LabelChanged"}</code> | Raised when `Label` changes. |
| <Link id="m-pressed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"> Pressed"}</code> | Raised by `Press`. |
| <Link id="m-released" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"> Released"}</code> | Raised by `Release`. |
| <Link id="m-settingschanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"> SettingsChanged"}</code> | Raised when `Settings` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onpressed" /><code>{"void OnPressed()"}</code> | Same as `Press`; exists so the inspector debug button can call it. |
| <Link id="m-onreleased" /><code>{"void OnReleased()"}</code> | Same as `Release`; exists so the inspector debug button can call it. |
| <Link id="m-press" /><code>{"void Press()"}</code> | Logs the press, sets `State` to true and raises `Pressed`. |
| <Link id="m-release" /><code>{"void Release()"}</code> | Logs the release, sets `State` to false and raises `Released`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the press and release sounds from `sounds`, if set. |

</details>

## Used in

Members of other types that take, return or hold a `Button`:

[`AssistedSpawnCommandAction.ConnectKeyboard`](/mod/game-api/types/alta-menus/assistedspawncommandaction#m-connectkeyboard), [`AssistedSpawnCommandAction.SubmitCommand`](/mod/game-api/types/alta-menus/assistedspawncommandaction#m-submitcommand), [`ButtonCollection.buttons`](/mod/game-api/types/alta-menus/buttoncollection#m-buttons), [`ButtonCollection.CurrentButton`](/mod/game-api/types/alta-menus/buttoncollection#m-currentbutton), [`ButtonCollection.HandleButtonPress`](/mod/game-api/types/alta-menus/buttoncollection#m-handlebuttonpress), [`ButtonEvents.button`](/mod/game-api/types/alta-menus/buttonevents#m-button), [`ButtonEvents.HandleEnabledChanged`](/mod/game-api/types/alta-menus/buttonevents#m-handleenabledchanged), [`ButtonWithEvents.HandleEnabledChanged`](/mod/game-api/types/alta-menus/buttonwithevents#m-handleenabledchanged), [`ConfirmPopupPanel.cancelButton`](/mod/game-api/types/alta-menus/confirmpopuppanel#m-cancelbutton), [`ConfirmPopupPanel.confirmButton`](/mod/game-api/types/alta-menus/confirmpopuppanel#m-confirmbutton), [`ConfirmPopupPanel.HandleCancelPressed`](/mod/game-api/types/alta-menus/confirmpopuppanel#m-handlecancelpressed), [`ConfirmPopupPanel.HandleConfirmPressed`](/mod/game-api/types/alta-menus/confirmpopuppanel#m-handleconfirmpressed), [`ListElementWithButton.OnPressed`](/mod/game-api/types/alta-menus/listelementwithbutton#m-onpressed), [`NavigateTo.button`](/mod/game-api/types/alta-menus/navigateto#m-button), [`OptionsPanel.GetPrefab`](/mod/game-api/types/alta-menus/optionspanel#m-getprefab), [`OptionsPanelButtonConfig.buttonPrefab`](/mod/game-api/types/alta-menus/optionspanelbuttonconfig#m-buttonprefab), [`OptionsPanelButtonConfig.ButtonPrefab`](/mod/game-api/types/alta-menus/optionspanelbuttonconfig#m-buttonprefab-2), [`GroupInfoTab.HandleLeaveButtonPress`](/mod/game-api/types/alta-menus/groupinfotab#m-handleleavebuttonpress), [`InboxPanel.acceptButton`](/mod/game-api/types/alta-menus/inboxpanel#m-acceptbutton), [`InboxPanel.declineButton`](/mod/game-api/types/alta-menus/inboxpanel#m-declinebutton), [`InboxPanel.HandleAccept`](/mod/game-api/types/alta-menus/inboxpanel#m-handleaccept), [`InboxPanel.HandleDecline`](/mod/game-api/types/alta-menus/inboxpanel#m-handledecline), [`ReportsPanel.acceptButton`](/mod/game-api/types/alta-menus/reportspanel#m-acceptbutton), [`ReportsPanel.declineButton`](/mod/game-api/types/alta-menus/reportspanel#m-declinebutton), [`ReportsPanel.HandleAccept`](/mod/game-api/types/alta-menus/reportspanel#m-handleaccept), [`ReportsPanel.HandleDecline`](/mod/game-api/types/alta-menus/reportspanel#m-handledecline), [`ServerDetailsPanel.confirmButton`](/mod/game-api/types/alta-menus/serverdetailspanel#m-confirmbutton), [`ServerDetailsPanel.ConfirmButtonPressed`](/mod/game-api/types/alta-menus/serverdetailspanel#m-confirmbuttonpressed), [`TabletToggle.button`](/mod/game-api/types/alta-menus/tablettoggle#m-button), [`TextButton.OnLabelChanged`](/mod/game-api/types/alta-menus/textbutton#m-onlabelchanged), [`TouchScreenButtonVisual.button`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-button), [`TouchScreenButtonVisual.LabelChanged`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-labelchanged), [`TouchScreenButtonVisual.Pressed`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-pressed), [`TouchScreenButtonVisual.Released`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-released), [`TouchScreenButtonVisual.SettingsChanged`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-settingschanged), [`DevToolsBoard.DisableButtons`](/mod/game-api/types/alta-player/devtoolsboard#m-disablebuttons), [`DevToolsBoard.NextPanel`](/mod/game-api/types/alta-player/devtoolsboard#m-nextpanel), [`DevToolsBoard.PreviousPanel`](/mod/game-api/types/alta-player/devtoolsboard#m-previouspanel), [`DevToolsBoard.SafeSubscribe`](/mod/game-api/types/alta-player/devtoolsboard#m-safesubscribe), [`DevToolsBoard.ToggleConsole`](/mod/game-api/types/alta-player/devtoolsboard#m-toggleconsole), [`RecentPlayersPage.OnPageBackwards`](/mod/game-api/types/alta-menus/recentplayerspage#m-onpagebackwards), [`RecentPlayersPage.OnPageForward`](/mod/game-api/types/alta-menus/recentplayerspage#m-onpageforward), [`RecentPlayersPage.RefreshList`](/mod/game-api/types/alta-menus/recentplayerspage#m-refreshlist), [`GymnasiumTeleportPointPage.OnPageBackwards`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-onpagebackwards), [`GymnasiumTeleportPointPage.OnPageForward`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-onpageforward), [`RecentPlayerActionPage.banButton`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-banbutton), [`RecentPlayerActionPage.muteButton`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-mutebutton), [`RecentPlayerActionPage.ToggleMute`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-togglemute), [`RecentPlayerActionPage.unbanButton`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-unbanbutton), [`RecentPlayerActionPage.unmuteButton`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-unmutebutton).
