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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ButtonWithEvents`](/game-api/types/alta-menus/buttonwithevents), [`TouchScreenButton`](/game-api/types/alta-menus/touchscreenbutton)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Button()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-btnpressed" /><code>{"private bool btnPressed"}</code> |  |
| <Link id="m-btnreleased" /><code>{"private bool btnReleased"}</code> |  |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-label" /><code>{"private string label"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger shared by all buttons. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonsettings">{"ButtonSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-sounds" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttonsoundsettings">{"ButtonSoundSettings"}</Link>{" sounds"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | Whether the button is enabled. Setting it raises `EnabledChanged`; nothing here stops `Press` when disabled. |
| <Link id="m-label-2" /><code>{"string Label { get; set; }"}</code> | The button text. Setting it raises `LabelChanged`. |
| <Link id="m-settings-2" /><code><Link to="/game-api/types/alta-menus/buttonsettings">{"ButtonSettings"}</Link>{" Settings { get; set; }"}</code> | The `ButtonSettings` asset for the button. Setting it raises `SettingsChanged`. |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> | True between `Press` and `Release`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-enabledchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{"> EnabledChanged"}</code> | Raised when `IsEnabled` changes. |
| <Link id="m-labelchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{"> LabelChanged"}</code> | Raised when `Label` changes. |
| <Link id="m-pressed" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{"> Pressed"}</code> | Raised by `Press`. |
| <Link id="m-released" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{"> Released"}</code> | Raised by `Release`. |
| <Link id="m-settingschanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{"> SettingsChanged"}</code> | Raised when `Settings` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onpressed" /><code>{"void OnPressed()"}</code> | Same as `Press`; exists so the inspector debug button can call it. |
| <Link id="m-onreleased" /><code>{"void OnReleased()"}</code> | Same as `Release`; exists so the inspector debug button can call it. |
| <Link id="m-press" /><code>{"void Press()"}</code> | Logs the press, sets `State` to true and raises `Pressed`. |
| <Link id="m-release" /><code>{"void Release()"}</code> | Logs the release, sets `State` to false and raises `Released`. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Button`:

[`AssistedSpawnCommandAction.ConnectKeyboard`](/game-api/types/alta-menus/assistedspawncommandaction#m-connectkeyboard), [`AssistedSpawnCommandAction.SubmitCommand`](/game-api/types/alta-menus/assistedspawncommandaction#m-submitcommand), [`ButtonCollection.buttons`](/game-api/types/alta-menus/buttoncollection#m-buttons), [`ButtonCollection.CurrentButton`](/game-api/types/alta-menus/buttoncollection#m-currentbutton), [`ButtonCollection.HandleButtonPress`](/game-api/types/alta-menus/buttoncollection#m-handlebuttonpress), [`ButtonEvents.button`](/game-api/types/alta-menus/buttonevents#m-button), [`ButtonEvents.HandleEnabledChanged`](/game-api/types/alta-menus/buttonevents#m-handleenabledchanged), [`ButtonWithEvents.HandleEnabledChanged`](/game-api/types/alta-menus/buttonwithevents#m-handleenabledchanged), [`ConfirmPopupPanel.cancelButton`](/game-api/types/alta-menus/confirmpopuppanel#m-cancelbutton), [`ConfirmPopupPanel.confirmButton`](/game-api/types/alta-menus/confirmpopuppanel#m-confirmbutton), [`ConfirmPopupPanel.HandleCancelPressed`](/game-api/types/alta-menus/confirmpopuppanel#m-handlecancelpressed), [`ConfirmPopupPanel.HandleConfirmPressed`](/game-api/types/alta-menus/confirmpopuppanel#m-handleconfirmpressed), [`ListElementWithButton.OnPressed`](/game-api/types/alta-menus/listelementwithbutton#m-onpressed), [`NavigateTo.button`](/game-api/types/alta-menus/navigateto#m-button), [`OptionsPanel.GetPrefab`](/game-api/types/alta-menus/optionspanel#m-getprefab), [`OptionsPanelButtonConfig.buttonPrefab`](/game-api/types/alta-menus/optionspanelbuttonconfig#m-buttonprefab), [`OptionsPanelButtonConfig.ButtonPrefab`](/game-api/types/alta-menus/optionspanelbuttonconfig#m-buttonprefab-2), [`GroupInfoTab.HandleLeaveButtonPress`](/game-api/types/alta-menus/groupinfotab#m-handleleavebuttonpress), [`InboxPanel.acceptButton`](/game-api/types/alta-menus/inboxpanel#m-acceptbutton), [`InboxPanel.declineButton`](/game-api/types/alta-menus/inboxpanel#m-declinebutton), [`InboxPanel.HandleAccept`](/game-api/types/alta-menus/inboxpanel#m-handleaccept), [`InboxPanel.HandleDecline`](/game-api/types/alta-menus/inboxpanel#m-handledecline), [`ReportsPanel.acceptButton`](/game-api/types/alta-menus/reportspanel#m-acceptbutton), [`ReportsPanel.declineButton`](/game-api/types/alta-menus/reportspanel#m-declinebutton), [`ReportsPanel.HandleAccept`](/game-api/types/alta-menus/reportspanel#m-handleaccept), [`ReportsPanel.HandleDecline`](/game-api/types/alta-menus/reportspanel#m-handledecline), [`ServerDetailsPanel.confirmButton`](/game-api/types/alta-menus/serverdetailspanel#m-confirmbutton), [`ServerDetailsPanel.ConfirmButtonPressed`](/game-api/types/alta-menus/serverdetailspanel#m-confirmbuttonpressed), [`TabletToggle.button`](/game-api/types/alta-menus/tablettoggle#m-button), [`TextButton.OnLabelChanged`](/game-api/types/alta-menus/textbutton#m-onlabelchanged), [`TouchScreenButtonVisual.button`](/game-api/types/alta-menus/touchscreenbuttonvisual#m-button), [`TouchScreenButtonVisual.LabelChanged`](/game-api/types/alta-menus/touchscreenbuttonvisual#m-labelchanged), [`TouchScreenButtonVisual.Pressed`](/game-api/types/alta-menus/touchscreenbuttonvisual#m-pressed), [`TouchScreenButtonVisual.Released`](/game-api/types/alta-menus/touchscreenbuttonvisual#m-released), [`TouchScreenButtonVisual.SettingsChanged`](/game-api/types/alta-menus/touchscreenbuttonvisual#m-settingschanged), [`DevToolsBoard.DisableButtons`](/game-api/types/alta-player/devtoolsboard#m-disablebuttons), [`DevToolsBoard.NextPanel`](/game-api/types/alta-player/devtoolsboard#m-nextpanel), [`DevToolsBoard.PreviousPanel`](/game-api/types/alta-player/devtoolsboard#m-previouspanel), [`DevToolsBoard.SafeSubscribe`](/game-api/types/alta-player/devtoolsboard#m-safesubscribe), [`DevToolsBoard.ToggleConsole`](/game-api/types/alta-player/devtoolsboard#m-toggleconsole), [`RecentPlayersPage.OnPageBackwards`](/game-api/types/alta-menus/recentplayerspage#m-onpagebackwards), [`RecentPlayersPage.OnPageForward`](/game-api/types/alta-menus/recentplayerspage#m-onpageforward), [`RecentPlayersPage.RefreshList`](/game-api/types/alta-menus/recentplayerspage#m-refreshlist), [`GymnasiumTeleportPointPage.OnPageBackwards`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-onpagebackwards), [`GymnasiumTeleportPointPage.OnPageForward`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-onpageforward), [`RecentPlayerActionPage.banButton`](/game-api/types/global-q-r/recentplayeractionpage#m-banbutton), [`RecentPlayerActionPage.muteButton`](/game-api/types/global-q-r/recentplayeractionpage#m-mutebutton), [`RecentPlayerActionPage.ToggleMute`](/game-api/types/global-q-r/recentplayeractionpage#m-togglemute), [`RecentPlayerActionPage.unbanButton`](/game-api/types/global-q-r/recentplayeractionpage#m-unbanbutton), [`RecentPlayerActionPage.unmuteButton`](/game-api/types/global-q-r/recentplayeractionpage#m-unmutebutton).
