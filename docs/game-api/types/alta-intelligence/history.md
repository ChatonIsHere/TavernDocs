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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"History()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-days" /><code>{"private List<"}<Link to="/game-api/types/alta-intelligence/day">{"Day"}</Link>{"> days"}</code> |  |
| <Link id="m-firstfake" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" firstFake"}</code> |  |
| <Link id="m-lastfake" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" lastFake"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code><Link to="/game-api/types/alta-intelligence/day">{"Day"}</Link>{" Current { get; private set; }"}</code> | The current day. A new day starts each time `Time` passes 1. |
| <Link id="m-time" /><code>{"float Time { get; private set; }"}</code> | Time of day as a 0 to 1 fraction. Wraps back to 0 and starts a new day when it passes 1. |
| <Link id="m-time24" /><code>{"float Time24 { get; }"}</code> | Time of day in hours (0 to 24). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createevent" /><code><Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" CreateEvent(float lifeTime = -1, params "}<Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{"[] knowledge)"}</code> | Creates an event in the current day carrying the given knowledge, with an optional lifetime in days (-1 for no limit). |
| <Link id="m-duration" /><code>{"static float Duration(int days = 0, int hours = 0, int minutes = 0, int seconds = 0)"}</code> | Converts days, hours, minutes and seconds into a duration in days. |
| <Link id="m-getactive" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{"> GetActive() (iterator)"}</code> | Enumerates the events that are still active, oldest first. |
| <Link id="m-hours" /><code>{"static float Hours(int hours)"}</code> | Converts whole hours into a fraction of a day. |
| <Link id="m-minutes" /><code>{"static float Minutes(int minutes)"}</code> | Converts whole minutes into a fraction of a day. |
| <Link id="m-seconds" /><code>{"static float Seconds(int seconds)"}</code> | Converts whole seconds into a fraction of a day. |
| <Link id="m-update" /><code>{"void Update(float progression)"}</code> | Advances time by the given fraction of a day and updates every active event. |
| <Link id="m-startday" /><code>{"private void StartDay()"}</code> |  |

## Used in

Members of other types that take, return or hold a `History`:

[`Day.Day`](/game-api/types/alta-intelligence/day#m-ctor), [`Day.History`](/game-api/types/alta-intelligence/day#m-history), [`Intelligence.history`](/game-api/types/alta-intelligence/intelligence#m-history).
