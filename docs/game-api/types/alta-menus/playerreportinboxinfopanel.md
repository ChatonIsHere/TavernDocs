---
title: "PlayerReportInboxInfoPanel"
description: "Client: server management panel that shows one player report from the API: who was reported, why, by whom, when, and any action taken."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportInboxInfoPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client: server management panel that shows one player report from the API: who was reported, why, by whom, when, and any action taken.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerReportInboxInfoPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actiontakenattext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" actionTakenAtText"}</code> | Date the action was taken. |
| <Link id="m-actiontakenbytext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" actionTakenByText"}</code> | Who acted on the report. |
| <Link id="m-actiontakentext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" actionTakenText"}</code> | The action taken on the report. |
| <Link id="m-reasontext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" reasonText"}</code> | The report reason. |
| <Link id="m-reportedusertext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" reportedUserText"}</code> | Name of the reported player. |
| <Link id="m-reportertext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" reporterText"}</code> | Name of the player who made the report. |
| <Link id="m-servertext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" serverText"}</code> | The server the report came from. |
| <Link id="m-timetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" timeText"}</code> | How long ago the report was made. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupforreport" /><code>{"void SetupForReport("}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" playerReport)"}</code> | Fills the texts from a report. The action lines only show when the report's status is acted on, and then always read "Banned". |

## Used in

Members of other types that take, return or hold a `PlayerReportInboxInfoPanel`:

[`InboxPanel.reportInfoPanel`](/game-api/types/alta-menus/inboxpanel#m-reportinfopanel), [`PlayerReportNotification.PlayerReportNotification`](/game-api/types/alta-menus/playerreportnotification#m-ctor), [`PlayerReportNotification.reportInfoPanel`](/game-api/types/alta-menus/playerreportnotification#m-reportinfopanel).
