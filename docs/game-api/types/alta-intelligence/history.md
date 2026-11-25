---
title: "History"
description: "class History in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# History

A **class** in `Root.Township`, `Alta.Intelligence`.

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
| <Link id="m-current" /><code><Link to="/game-api/types/alta-intelligence/day">{"Day"}</Link>{" Current { get; private set; }"}</code> |  |
| <Link id="m-time" /><code>{"float Time { get; private set; }"}</code> |  |
| <Link id="m-time24" /><code>{"float Time24 { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createevent" /><code><Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" CreateEvent(float lifeTime = -1, params "}<Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{"[] knowledge)"}</code> |  |
| <Link id="m-duration" /><code>{"static float Duration(int days = 0, int hours = 0, int minutes = 0, int seconds = 0)"}</code> |  |
| <Link id="m-getactive" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{"> GetActive() (iterator)"}</code> |  |
| <Link id="m-hours" /><code>{"static float Hours(int hours)"}</code> |  |
| <Link id="m-minutes" /><code>{"static float Minutes(int minutes)"}</code> |  |
| <Link id="m-seconds" /><code>{"static float Seconds(int seconds)"}</code> |  |
| <Link id="m-update" /><code>{"void Update(float progression)"}</code> |  |
| <Link id="m-startday" /><code>{"private void StartDay()"}</code> |  |

## Used in

Members of other types that take, return or hold a `History`:

[`Day.Day`](/game-api/types/alta-intelligence/day#m-ctor), [`Day.History`](/game-api/types/alta-intelligence/day#m-history), [`Intelligence.history`](/game-api/types/alta-intelligence/intelligence#m-history).
