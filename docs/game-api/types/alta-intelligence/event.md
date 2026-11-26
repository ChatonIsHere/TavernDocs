---
title: "Event"
description: "One remembered event in an AI's History: some knowledge atoms that fade over a lifetime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Event

A **class** in `Root.Township`, `Alta.Intelligence`.

One remembered event in an AI's `History`: some knowledge atoms that fade over a lifetime. Events form a linked list of the active ones.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code><Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{"("}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" next, "}<Link to="/game-api/types/alta-intelligence/day">{"Day"}</Link>{" day, float lifeTime, params "}<Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{"[] knowledge)"}</code> | Creates an `Event` from `previous`. |
| <Link id="m-ctor-2" /><code><Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{"("}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" previous)"}</code> | Creates an `Event` from `previous`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nextactive" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" nextActive"}</code> | Next event in the linked list of live events. |
| <Link id="m-previousactive" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" previousActive"}</code> | Previous event in the linked list of live events. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-day" /><code><Link to="/game-api/types/alta-intelligence/day">{"Day"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/day">{"Day"}</Link>{" { get; private set; }"}</code> | The day the event happened. |
| <Link id="m-isalive" /><code>{"bool IsAlive { get; private set; }"}</code> | False once the event is older than its lifetime and has left the active list. |
| <Link id="m-knowledge" /><code><Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{"[] Knowledge { get; private set; }"}</code> | The knowledge atoms this event holds. Their age weighting falls from 1 to 0 as the event ages. |
| <Link id="m-next" /><code><Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" Next { get; }"}</code> | The next active event in the history list. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-age" /><code>{"private float Age { get; set; }"}</code> | How long the event has existed, added to by `Update`. |
| <Link id="m-lifetime" /><code>{"private float LifeTime { get; set; }"}</code> | How long the event lasts. Its knowledge fades from weight 1 to 0 over this time. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"void Update(float duration)"}</code> | Ages the event, lowering its knowledge weighting, and unlinks it once its lifetime runs out. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ageweightknowledge" /><code>{"private void AgeWeightKnowledge(float weight)"}</code> | Sets the age weighting on every knowledge atom of the event. |

</details>

## Used in

Members of other types that take, return or hold a `Event`:

[`Day.events`](/game-api/types/alta-intelligence/day#m-events), [`Day.RegisterEvent`](/game-api/types/alta-intelligence/day#m-registerevent), [`History.CreateEvent`](/game-api/types/alta-intelligence/history#m-createevent), [`History.firstFake`](/game-api/types/alta-intelligence/history#m-firstfake), [`History.GetActive`](/game-api/types/alta-intelligence/history#m-getactive), [`History.lastFake`](/game-api/types/alta-intelligence/history#m-lastfake), [`KnowledgeHolder.Inform`](/game-api/types/alta-intelligence/knowledgeholder#m-inform-2), [`KnowledgeHolder.knownEvents`](/game-api/types/alta-intelligence/knowledgeholder#m-knownevents), [`KnowledgeHolder.KnowsAbout`](/game-api/types/alta-intelligence/knowledgeholder#m-knowsabout).
