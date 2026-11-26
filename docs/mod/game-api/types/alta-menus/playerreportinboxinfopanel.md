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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerReportInboxInfoPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actiontakenattext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" actionTakenAtText"}</code> | <span className="api-desc">Date the action was taken.</span> |
| <Link id="m-actiontakenbytext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" actionTakenByText"}</code> | <span className="api-desc">Who acted on the report.</span> |
| <Link id="m-actiontakentext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" actionTakenText"}</code> | <span className="api-desc">The action taken on the report.</span> |
| <Link id="m-reasontext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" reasonText"}</code> | <span className="api-desc">The report reason.</span> |
| <Link id="m-reportedusertext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" reportedUserText"}</code> | <span className="api-desc">Name of the reported player.</span> |
| <Link id="m-reportertext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" reporterText"}</code> | <span className="api-desc">Name of the player who made the report.</span> |
| <Link id="m-servertext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" serverText"}</code> | <span className="api-desc">The server the report came from.</span> |
| <Link id="m-timetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" timeText"}</code> | <span className="api-desc">How long ago the report was made.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupforreport" /><code>{"void SetupForReport("}<Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" playerReport)"}</code> | <span className="api-desc">Fills the texts from a report. The action lines only show when the report's status is acted on, and then always read "Banned".</span> |

## Used in

Members of other types that take, return or hold a `PlayerReportInboxInfoPanel`:

<div className="api-used-in">

[`InboxPanel.reportInfoPanel`](/mod/game-api/types/alta-menus/inboxpanel#m-reportinfopanel), [`PlayerReportNotification.PlayerReportNotification`](/mod/game-api/types/alta-menus/playerreportnotification#m-ctor), [`PlayerReportNotification.reportInfoPanel`](/mod/game-api/types/alta-menus/playerreportnotification#m-reportinfopanel).

</div>
