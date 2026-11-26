---
title: "JsonEvent"
description: "Obsolete analytics event for Xsolla events, with a user, event type and UTC time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonEvent

A **class** in `Root.Township`, the global namespace.

Obsolete analytics event for Xsolla events, with a user, event type and UTC time.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonEvent(string user_id, "}<Link to="/mod/game-api/types/global-t-x/xsollaevent">{"XsollaEvent"}</Link>{" event_type)"}</code> | Creates a `JsonEvent` from `user_id` and `event_type`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-event-datetime" /><code>{"string event_datetime"}</code> | UTC time the event was made, as `yyyy-MM-ddTHH:mm:ss`. |
| <Link id="m-event-type" /><code>{"string event_type"}</code> | Name of the `XsollaEvent`. |
| <Link id="m-user-id" /><code>{"string user_id"}</code> | User the event is for. |
