---
title: "Panel"
description: "One page of a meta UI Window."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Panel

A **class** in `Root.Township`, `Alta.Meta.UI`.

One page of a meta UI `Window`. Shows or hides itself, playing an optional scale animation, and raises `StateChanged`.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ConfirmPopupPanel`](/mod/game-api/types/alta-menus/confirmpopuppanel), [`OptionsPanel`](/mod/game-api/types/alta-menus/optionspanel), [`SimpleTextPanel`](/mod/game-api/types/alta-menus/simpletextpanel), [`Tab`](/mod/game-api/types/alta-menus/tab), [`TabbedPanel`](/mod/game-api/types/alta-menus/tabbedpanel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Panel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger shared by panels. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animation" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" animation"}</code> | Scaler animation used to show and hide the panel; without one it toggles after 50 ms. |
| <Link id="m-window" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/window">{"Window"}</Link>{" window"}</code> | Backing field for `Window`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | Whether the panel is currently shown. |
| <Link id="m-window-2" /><code><Link to="/mod/game-api/types/alta-menus/window">{"Window"}</Link>{" "}<Link to="/mod/game-api/types/alta-menus/window">{"Window"}</Link>{" { get; }"}</code> | The window that owns this panel. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-statechanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{"> StateChanged"}</code> | Raised when the panel is shown or hidden. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setactive" /><code>{"void SetActive(bool state)"}</code> | Shows or hides the panel and raises `StateChanged`. Logs a warning and does nothing if already in that state. |
| <Link id="m-setactive-2" /><code>{"void SetActive(bool state, Action onFinished = null)"}</code> | Shows or hides the panel and raises `StateChanged`. Logs a warning and does nothing if already in that state. |
| <Link id="m-switchto" /><code>{"void SwitchTo()"}</code> | Asks the parent window to switch to this panel. |
| <Link id="m-internalsetstate" /><code>{"protected virtual async void InternalSetState(bool state, Action onFinished = null)"}</code> | Turns the object on or off, through the animation if set, otherwise after a 50 ms delay, then calls the finish callback. |

## Used in

Members of other types that take, return or hold a `Panel`:

[`NavigateTo.panel`](/mod/game-api/types/alta-menus/navigateto#m-panel), [`PanelComponent.HandlePanelStateChange`](/mod/game-api/types/alta-menus/panelcomponent#m-handlepanelstatechange), [`PanelComponent.HandleStateChange`](/mod/game-api/types/alta-menus/panelcomponent#m-handlestatechange), [`PanelComponent.panel`](/mod/game-api/types/alta-menus/panelcomponent#m-panel), [`PanelComponent.Panel`](/mod/game-api/types/alta-menus/panelcomponent#m-panel-2), [`APIStatusNotification.APIStatusNotification`](/mod/game-api/types/alta-menus/apistatusnotification#m-ctor), [`CreateGroupInfoPanel.HandleStateChange`](/mod/game-api/types/alta-menus/creategroupinfopanel#m-handlestatechange), [`CreateGroupInfoPanel.showWhenActive`](/mod/game-api/types/alta-menus/creategroupinfopanel#m-showwhenactive), [`EditServerPanel.firstPanel`](/mod/game-api/types/alta-menus/editserverpanel#m-firstpanel), [`FriendRequestNotification.FriendRequestNotification`](/mod/game-api/types/alta-menus/friendrequestnotification#m-ctor), [`FriendsListPanel.HandleStateChange`](/mod/game-api/types/alta-menus/friendslistpanel#m-handlestatechange), [`GroupInviteNotification.GroupInviteNotification`](/mod/game-api/types/alta-menus/groupinvitenotification#m-ctor), [`LoggedInWindow.loggedInPanel`](/mod/game-api/types/alta-menus/loggedinwindow#m-loggedinpanel), [`PlayerReportBaseNotification.PlayerReportBaseNotification`](/mod/game-api/types/alta-menus/playerreportbasenotification#m-ctor), [`PlayerReportNotification.PlayerReportNotification`](/mod/game-api/types/alta-menus/playerreportnotification#m-ctor), [`PlayerReportSummaryNotification.PlayerReportSummaryNotification`](/mod/game-api/types/alta-menus/playerreportsummarynotification#m-ctor), [`SelectedGroupPanel.panel`](/mod/game-api/types/alta-menus/selectedgrouppanel#m-panel), [`UINotification.panel`](/mod/game-api/types/alta-menus/uinotification#m-panel), [`UINotification.UINotification`](/mod/game-api/types/alta-menus/uinotification#m-ctor), [`TabletToggle.home`](/mod/game-api/types/alta-menus/tablettoggle#m-home), [`TabletToggle.homeExtended`](/mod/game-api/types/alta-menus/tablettoggle#m-homeextended), [`Window.CurrentPanel`](/mod/game-api/types/alta-menus/window#m-currentpanel), [`Window.CurrentPopup`](/mod/game-api/types/alta-menus/window#m-currentpopup), [`Window.FinishPopupSwitch`](/mod/game-api/types/alta-menus/window#m-finishpopupswitch), [`Window.FinishSwitch`](/mod/game-api/types/alta-menus/window#m-finishswitch), [`Window.ShowAsPopup`](/mod/game-api/types/alta-menus/window#m-showaspopup), [`Window.startingPanel`](/mod/game-api/types/alta-menus/window#m-startingpanel), [`Window.SwitchToPanel`](/mod/game-api/types/alta-menus/window#m-switchtopanel), [`RecentPlayersPage.HandleStateChange`](/mod/game-api/types/alta-menus/recentplayerspage#m-handlestatechange), [`RecentPlayerActionPage.banSentPage`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-bansentpage), [`RecentPlayerActionPage.friendRemovalSentPage`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-friendremovalsentpage), [`RecentPlayerActionPage.friendRequestAcceptSentPage`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-friendrequestacceptsentpage), [`RecentPlayerActionPage.friendRequestDenySentPage`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-friendrequestdenysentpage), [`RecentPlayerActionPage.friendRequestSentPage`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-friendrequestsentpage), [`RecentPlayerActionPage.reportSentPage`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-reportsentpage), [`RecentPlayerActionPage.unBanSentPage`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-unbansentpage).
