---
title: "UINotification"
description: "Base for a notification shown in the menu's server management panel, such as a friend request, group invite or API status."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UINotification

An **abstract class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Base for a notification shown in the menu's server management panel, such as a friend request, group invite or API status. Client only.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Derived types** [`APIStatusNotification`](/mod/game-api/types/alta-menus/apistatusnotification), [`FriendRequestNotification`](/mod/game-api/types/alta-menus/friendrequestnotification), [`GroupInviteNotification`](/mod/game-api/types/alta-menus/groupinvitenotification), [`PlayerReportBaseNotification`](/mod/game-api/types/alta-menus/playerreportbasenotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected UINotification("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Creates an `UINotification` from `panel`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">Shared logger for notifications.</span> |
| <Link id="m-panel" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel"}</code> | <span className="api-desc">The panel this notification belongs to.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accepttext" /><code>{"virtual string AcceptText { get; }"}</code> | <span className="api-desc">Label of the accept button.</span> |
| <Link id="m-declinetext" /><code>{"virtual string DeclineText { get; }"}</code> | <span className="api-desc">Label of the decline button.</span> |
| <Link id="m-isusingaccept" /><code>{"virtual bool IsUsingAccept { get; }"}</code> | <span className="api-desc">Whether the accept button is shown.</span> |
| <Link id="m-isusingdecline" /><code>{"virtual bool IsUsingDecline { get; }"}</code> | <span className="api-desc">Whether the decline button is shown.</span> |
| <Link id="m-message" /><code>{"abstract string Message { get; }"}</code> | <span className="api-desc">Full message text.</span> |
| <Link id="m-shortmessage" /><code>{"abstract string ShortMessage { get; }"}</code> | <span className="api-desc">Short text for the list.</span> |
| <Link id="m-showloadingforaccept" /><code>{"virtual bool ShowLoadingForAccept { get; }"}</code> | <span className="api-desc">Whether a loading state shows while `Accept` runs.</span> |
| <Link id="m-time" /><code>{"abstract DateTime Time { get; }"}</code> | <span className="api-desc">When the notification happened.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"virtual Task<bool> Accept()"}</code> | <span className="api-desc">Runs when the player accepts. Returns whether it worked; true by default.</span> |
| <Link id="m-decline" /><code>{"virtual Task Decline()"}</code> | <span className="api-desc">Runs when the player declines. Does nothing by default.</span> |
| <Link id="m-onselected" /><code>{"virtual void OnSelected(bool isSelected)"}</code> | <span className="api-desc">Called when the notification is selected or unselected in the list.</span> |

## Used in

Members of other types that take, return or hold a `UINotification`:

<div className="api-used-in">

[`InboxPanel.currentShowing`](/mod/game-api/types/alta-menus/inboxpanel#m-currentshowing), [`InboxPanel.dataMapping`](/mod/game-api/types/alta-menus/inboxpanel#m-datamapping), [`InboxPanel.GetAllNotifications`](/mod/game-api/types/alta-menus/inboxpanel#m-getallnotifications), [`InboxPanel.GetFirstTenInReverseOrder`](/mod/game-api/types/alta-menus/inboxpanel#m-getfirstteninreverseorder), [`ReportsPanel.currentShowing`](/mod/game-api/types/alta-menus/reportspanel#m-currentshowing), [`ReportsPanel.dataMapping`](/mod/game-api/types/alta-menus/reportspanel#m-datamapping), [`ReportsPanel.GetAllNotifications`](/mod/game-api/types/alta-menus/reportspanel#m-getallnotifications).

</div>
