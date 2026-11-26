---
title: "History"
description: "A timeline of days and knowledge events for the experimental AI reasoning system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# History

A **class** in `Root.Township`, `Alta.Intelligence`.

A timeline of days and knowledge events for the experimental AI reasoning system. Time is in days (1.0 is one day). Only created by the test `Intelligence` component.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"History()"}</code> | <span className="api-desc">Creates a `History` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-days" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-intelligence/day">{"Day"}</Link>{"> days"}</code> | <span className="api-desc">Every day started so far, oldest first.</span> |
| <Link id="m-firstfake" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{" firstFake"}</code> | <span className="api-desc">Sentinel event at the head of the linked list of active events.</span> |
| <Link id="m-lastfake" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{" lastFake"}</code> | <span className="api-desc">Sentinel event at the tail of the active event list. New events are inserted before it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code><Link to="/mod/game-api/types/alta-intelligence/day">{"Day"}</Link>{" Current { get; private set; }"}</code> | <span className="api-desc">The current day. A new day starts each time `Time` passes 1.</span> |
| <Link id="m-time" /><code>{"float Time { get; private set; }"}</code> | <span className="api-desc">Time of day as a 0 to 1 fraction. Wraps back to 0 and starts a new day when it passes 1.</span> |
| <Link id="m-time24" /><code>{"float Time24 { get; }"}</code> | <span className="api-desc">Time of day in hours (0 to 24).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createevent" /><code><Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{" CreateEvent(float lifeTime = -1, params "}<Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{"[] knowledge)"}</code> | <span className="api-desc">Creates an event in the current day carrying the given knowledge, with an optional lifetime in days (-1 for no limit).</span> |
| <Link id="m-duration" /><code>{"static float Duration(int days = 0, int hours = 0, int minutes = 0, int seconds = 0)"}</code> | <span className="api-desc">Converts days, hours, minutes and seconds into a duration in days.</span> |
| <Link id="m-getactive" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{"> GetActive() (iterator)"}</code> | <span className="api-desc">Enumerates the events that are still active, oldest first.</span> |
| <Link id="m-hours" /><code>{"static float Hours(int hours)"}</code> | <span className="api-desc">Converts whole hours into a fraction of a day.</span> |
| <Link id="m-minutes" /><code>{"static float Minutes(int minutes)"}</code> | <span className="api-desc">Converts whole minutes into a fraction of a day.</span> |
| <Link id="m-seconds" /><code>{"static float Seconds(int seconds)"}</code> | <span className="api-desc">Converts whole seconds into a fraction of a day.</span> |
| <Link id="m-update" /><code>{"void Update(float progression)"}</code> | <span className="api-desc">Advances time by the given fraction of a day and updates every active event.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-startday" /><code>{"private void StartDay()"}</code> | <span className="api-desc">Starts a new `Day` with the next index and makes it `Current`. Called on creation and when `Time` passes 1.</span> |

</details>

## Used in

Members of other types that take, return or hold a `History`:

<div className="api-used-in">

[`Day.Day`](/mod/game-api/types/alta-intelligence/day#m-ctor), [`Day.History`](/mod/game-api/types/alta-intelligence/day#m-history), [`Intelligence.history`](/mod/game-api/types/alta-intelligence/intelligence#m-history).

</div>
