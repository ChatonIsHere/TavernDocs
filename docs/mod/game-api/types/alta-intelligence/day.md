---
title: "Day"
description: "One day in an AI History, holding the events registered on it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Day

A **class** in `Root.Township`, `Alta.Intelligence`.

One day in an AI `History`, holding the events registered on it.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Day("}<Link to="/mod/game-api/types/alta-intelligence/history">{"History"}</Link>{" history, int index)"}</code> | Creates a `Day` from `history` and `index`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-events" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{"> events"}</code> | Events that happened on this day. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-history" /><code><Link to="/mod/game-api/types/alta-intelligence/history">{"History"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/history">{"History"}</Link>{" { get; private set; }"}</code> | The history this day belongs to. |
| <Link id="m-index" /><code>{"int Index { get; private set; }"}</code> | Day number within the history. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registerevent" /><code>{"void RegisterEvent("}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{" newEvent)"}</code> | Adds an event to the day. |

## Used in

Members of other types that take, return or hold a `Day`:

[`Event.Day`](/mod/game-api/types/alta-intelligence/event#m-day), [`Event.Event`](/mod/game-api/types/alta-intelligence/event#m-ctor), [`History.Current`](/mod/game-api/types/alta-intelligence/history#m-current), [`History.days`](/mod/game-api/types/alta-intelligence/history#m-days), [`KnowledgeHolder.knownEvents`](/mod/game-api/types/alta-intelligence/knowledgeholder#m-knownevents).
