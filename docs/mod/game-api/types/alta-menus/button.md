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
| <Link id="m-ctor" /><code>{"Button()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">NLog logger shared by all buttons.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnpressed" /><code>{"private bool btnPressed"}</code> | <span className="api-desc">Inspector button that calls `OnPressed`.</span> |
| <Link id="m-btnreleased" /><code>{"private bool btnReleased"}</code> | <span className="api-desc">Inspector button that calls `OnReleased`.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Backing field for `IsEnabled`.</span> |
| <Link id="m-label" /><code>{"private string label"}</code> | <span className="api-desc">Backing field for `Label`.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonsettings">{"ButtonSettings"}</Link>{" settings"}</code> | <span className="api-desc">Backing field for `Settings`.</span> |
| <Link id="m-sounds" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buttonsoundsettings">{"ButtonSoundSettings"}</Link>{" sounds"}</code> | <span className="api-desc">Sounds played on press and release.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether the button is enabled. Setting it raises `EnabledChanged`; nothing here stops `Press` when disabled.</span> |
| <Link id="m-label-2" /><code>{"string Label { get; set; }"}</code> | <span className="api-desc">The button text. Setting it raises `LabelChanged`.</span> |
| <Link id="m-settings-2" /><code><Link to="/mod/game-api/types/alta-menus/buttonsettings">{"ButtonSettings"}</Link>{" Settings { get; set; }"}</code> | <span className="api-desc">The `ButtonSettings` asset for the button. Setting it raises `SettingsChanged`.</span> |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> | <span className="api-desc">True between `Press` and `Release`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-enabledchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"> EnabledChanged"}</code> | <span className="api-desc">Raised when `IsEnabled` changes.</span> |
| <Link id="m-labelchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"> LabelChanged"}</code> | <span className="api-desc">Raised when `Label` changes.</span> |
| <Link id="m-pressed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"> Pressed"}</code> | <span className="api-desc">Raised by `Press`.</span> |
| <Link id="m-released" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"> Released"}</code> | <span className="api-desc">Raised by `Release`.</span> |
| <Link id="m-settingschanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"> SettingsChanged"}</code> | <span className="api-desc">Raised when `Settings` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onpressed" /><code>{"void OnPressed()"}</code> | <span className="api-desc">Same as `Press`; exists so the inspector debug button can call it.</span> |
| <Link id="m-onreleased" /><code>{"void OnReleased()"}</code> | <span className="api-desc">Same as `Release`; exists so the inspector debug button can call it.</span> |
| <Link id="m-press" /><code>{"void Press()"}</code> | <span className="api-desc">Logs the press, sets `State` to true and raises `Pressed`.</span> |
| <Link id="m-release" /><code>{"void Release()"}</code> | <span className="api-desc">Logs the release, sets `State` to false and raises `Released`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the press and release sounds from `sounds`, if set.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Button`:

<div className="api-used-in">

[`AssistedSpawnCommandAction.ConnectKeyboard`](/mod/game-api/types/alta-menus/assistedspawncommandaction#m-connectkeyboard), [`AssistedSpawnCommandAction.SubmitCommand`](/mod/game-api/types/alta-menus/assistedspawncommandaction#m-submitcommand), [`ButtonCollection.buttons`](/mod/game-api/types/alta-menus/buttoncollection#m-buttons), [`ButtonCollection.CurrentButton`](/mod/game-api/types/alta-menus/buttoncollection#m-currentbutton), [`ButtonCollection.HandleButtonPress`](/mod/game-api/types/alta-menus/buttoncollection#m-handlebuttonpress), [`ButtonEvents.button`](/mod/game-api/types/alta-menus/buttonevents#m-button), [`ButtonEvents.HandleEnabledChanged`](/mod/game-api/types/alta-menus/buttonevents#m-handleenabledchanged), [`ButtonWithEvents.HandleEnabledChanged`](/mod/game-api/types/alta-menus/buttonwithevents#m-handleenabledchanged), [`ConfirmPopupPanel.cancelButton`](/mod/game-api/types/alta-menus/confirmpopuppanel#m-cancelbutton), [`ConfirmPopupPanel.confirmButton`](/mod/game-api/types/alta-menus/confirmpopuppanel#m-confirmbutton), [`ConfirmPopupPanel.HandleCancelPressed`](/mod/game-api/types/alta-menus/confirmpopuppanel#m-handlecancelpressed), [`ConfirmPopupPanel.HandleConfirmPressed`](/mod/game-api/types/alta-menus/confirmpopuppanel#m-handleconfirmpressed), [`ListElementWithButton.OnPressed`](/mod/game-api/types/alta-menus/listelementwithbutton#m-onpressed), [`NavigateTo.button`](/mod/game-api/types/alta-menus/navigateto#m-button), [`OptionsPanel.GetPrefab`](/mod/game-api/types/alta-menus/optionspanel#m-getprefab), [`OptionsPanelButtonConfig.buttonPrefab`](/mod/game-api/types/alta-menus/optionspanelbuttonconfig#m-buttonprefab), [`OptionsPanelButtonConfig.ButtonPrefab`](/mod/game-api/types/alta-menus/optionspanelbuttonconfig#m-buttonprefab-2), [`GroupInfoTab.HandleLeaveButtonPress`](/mod/game-api/types/alta-menus/groupinfotab#m-handleleavebuttonpress), [`InboxPanel.acceptButton`](/mod/game-api/types/alta-menus/inboxpanel#m-acceptbutton), [`InboxPanel.declineButton`](/mod/game-api/types/alta-menus/inboxpanel#m-declinebutton), [`InboxPanel.HandleAccept`](/mod/game-api/types/alta-menus/inboxpanel#m-handleaccept), [`InboxPanel.HandleDecline`](/mod/game-api/types/alta-menus/inboxpanel#m-handledecline), [`ReportsPanel.acceptButton`](/mod/game-api/types/alta-menus/reportspanel#m-acceptbutton), [`ReportsPanel.declineButton`](/mod/game-api/types/alta-menus/reportspanel#m-declinebutton), [`ReportsPanel.HandleAccept`](/mod/game-api/types/alta-menus/reportspanel#m-handleaccept), [`ReportsPanel.HandleDecline`](/mod/game-api/types/alta-menus/reportspanel#m-handledecline), [`ServerDetailsPanel.confirmButton`](/mod/game-api/types/alta-menus/serverdetailspanel#m-confirmbutton), [`ServerDetailsPanel.ConfirmButtonPressed`](/mod/game-api/types/alta-menus/serverdetailspanel#m-confirmbuttonpressed), [`TabletToggle.button`](/mod/game-api/types/alta-menus/tablettoggle#m-button), [`TextButton.OnLabelChanged`](/mod/game-api/types/alta-menus/textbutton#m-onlabelchanged), [`TouchScreenButtonVisual.button`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-button), [`TouchScreenButtonVisual.LabelChanged`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-labelchanged), [`TouchScreenButtonVisual.Pressed`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-pressed), [`TouchScreenButtonVisual.Released`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-released), [`TouchScreenButtonVisual.SettingsChanged`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-settingschanged), [`DevToolsBoard.DisableButtons`](/mod/game-api/types/alta-player/devtoolsboard#m-disablebuttons), [`DevToolsBoard.NextPanel`](/mod/game-api/types/alta-player/devtoolsboard#m-nextpanel), [`DevToolsBoard.PreviousPanel`](/mod/game-api/types/alta-player/devtoolsboard#m-previouspanel), [`DevToolsBoard.SafeSubscribe`](/mod/game-api/types/alta-player/devtoolsboard#m-safesubscribe), [`DevToolsBoard.ToggleConsole`](/mod/game-api/types/alta-player/devtoolsboard#m-toggleconsole), [`RecentPlayersPage.OnPageBackwards`](/mod/game-api/types/alta-menus/recentplayerspage#m-onpagebackwards), [`RecentPlayersPage.OnPageForward`](/mod/game-api/types/alta-menus/recentplayerspage#m-onpageforward), [`RecentPlayersPage.RefreshList`](/mod/game-api/types/alta-menus/recentplayerspage#m-refreshlist), [`GymnasiumTeleportPointPage.OnPageBackwards`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-onpagebackwards), [`GymnasiumTeleportPointPage.OnPageForward`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-onpageforward), [`RecentPlayerActionPage.banButton`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-banbutton), [`RecentPlayerActionPage.muteButton`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-mutebutton), [`RecentPlayerActionPage.ToggleMute`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-togglemute), [`RecentPlayerActionPage.unbanButton`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-unbanbutton), [`RecentPlayerActionPage.unmuteButton`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-unmutebutton).

</div>
