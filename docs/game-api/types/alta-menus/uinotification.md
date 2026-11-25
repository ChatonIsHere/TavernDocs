---
title: "UINotification"
description: "abstract class UINotification in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UINotification

An **abstract class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Derived types** [`APIStatusNotification`](/game-api/types/alta-menus/apistatusnotification), [`FriendRequestNotification`](/game-api/types/alta-menus/friendrequestnotification), [`GroupInviteNotification`](/game-api/types/alta-menus/groupinvitenotification), [`PlayerReportBaseNotification`](/game-api/types/alta-menus/playerreportbasenotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected UINotification("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-panel" /><code>{"protected "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accepttext" /><code>{"virtual string AcceptText { get; }"}</code> |  |
| <Link id="m-declinetext" /><code>{"virtual string DeclineText { get; }"}</code> |  |
| <Link id="m-isusingaccept" /><code>{"virtual bool IsUsingAccept { get; }"}</code> |  |
| <Link id="m-isusingdecline" /><code>{"virtual bool IsUsingDecline { get; }"}</code> |  |
| <Link id="m-message" /><code>{"abstract string Message { get; }"}</code> |  |
| <Link id="m-shortmessage" /><code>{"abstract string ShortMessage { get; }"}</code> |  |
| <Link id="m-showloadingforaccept" /><code>{"virtual bool ShowLoadingForAccept { get; }"}</code> |  |
| <Link id="m-time" /><code>{"abstract DateTime Time { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"virtual Task<bool> Accept()"}</code> |  |
| <Link id="m-decline" /><code>{"virtual Task Decline()"}</code> |  |
| <Link id="m-onselected" /><code>{"virtual void OnSelected(bool isSelected)"}</code> |  |

## Used in

Members of other types that take, return or hold a `UINotification`:

[`InboxPanel.currentShowing`](/game-api/types/alta-menus/inboxpanel#m-currentshowing), [`InboxPanel.dataMapping`](/game-api/types/alta-menus/inboxpanel#m-datamapping), [`InboxPanel.GetAllNotifications`](/game-api/types/alta-menus/inboxpanel#m-getallnotifications), [`InboxPanel.GetFirstTenInReverseOrder`](/game-api/types/alta-menus/inboxpanel#m-getfirstteninreverseorder), [`ReportsPanel.currentShowing`](/game-api/types/alta-menus/reportspanel#m-currentshowing), [`ReportsPanel.dataMapping`](/game-api/types/alta-menus/reportspanel#m-datamapping), [`ReportsPanel.GetAllNotifications`](/game-api/types/alta-menus/reportspanel#m-getallnotifications).
