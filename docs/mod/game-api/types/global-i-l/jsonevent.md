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
| <Link id="m-ctor" /><code>{"JsonEvent(string user_id, "}<Link to="/mod/game-api/types/global-t-x/xsollaevent">{"XsollaEvent"}</Link>{" event_type)"}</code> | <span className="api-desc">Creates a `JsonEvent` from `user_id` and `event_type`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-event-datetime" /><code>{"string event_datetime"}</code> | <span className="api-desc">UTC time the event was made, as `yyyy-MM-ddTHH:mm:ss`.</span> |
| <Link id="m-event-type" /><code>{"string event_type"}</code> | <span className="api-desc">Name of the `XsollaEvent`.</span> |
| <Link id="m-user-id" /><code>{"string user_id"}</code> | <span className="api-desc">User the event is for.</span> |
