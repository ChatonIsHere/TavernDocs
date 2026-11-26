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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code><Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{"("}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{" next, "}<Link to="/mod/game-api/types/alta-intelligence/day">{"Day"}</Link>{" day, float lifeTime, params "}<Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{"[] knowledge)"}</code> | <span className="api-desc">Creates an `Event` from `previous`.</span> |
| <Link id="m-ctor-2" /><code><Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{"("}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{" previous)"}</code> | <span className="api-desc">Creates an `Event` from `previous`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nextactive" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{" nextActive"}</code> | <span className="api-desc">Next event in the linked list of live events.</span> |
| <Link id="m-previousactive" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{" previousActive"}</code> | <span className="api-desc">Previous event in the linked list of live events.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-day" /><code><Link to="/mod/game-api/types/alta-intelligence/day">{"Day"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/day">{"Day"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The day the event happened.</span> |
| <Link id="m-isalive" /><code>{"bool IsAlive { get; private set; }"}</code> | <span className="api-desc">False once the event is older than its lifetime and has left the active list.</span> |
| <Link id="m-knowledge" /><code><Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{"[] Knowledge { get; private set; }"}</code> | <span className="api-desc">The knowledge atoms this event holds. Their age weighting falls from 1 to 0 as the event ages.</span> |
| <Link id="m-next" /><code><Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{" Next { get; }"}</code> | <span className="api-desc">The next active event in the history list.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-age" /><code>{"private float Age { get; set; }"}</code> | <span className="api-desc">How long the event has existed, added to by `Update`.</span> |
| <Link id="m-lifetime" /><code>{"private float LifeTime { get; set; }"}</code> | <span className="api-desc">How long the event lasts. Its knowledge fades from weight 1 to 0 over this time.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"void Update(float duration)"}</code> | <span className="api-desc">Ages the event, lowering its knowledge weighting, and unlinks it once its lifetime runs out.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ageweightknowledge" /><code>{"private void AgeWeightKnowledge(float weight)"}</code> | <span className="api-desc">Sets the age weighting on every knowledge atom of the event.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Event`:

<div className="api-used-in">

[`Day.events`](/mod/game-api/types/alta-intelligence/day#m-events), [`Day.RegisterEvent`](/mod/game-api/types/alta-intelligence/day#m-registerevent), [`History.CreateEvent`](/mod/game-api/types/alta-intelligence/history#m-createevent), [`History.firstFake`](/mod/game-api/types/alta-intelligence/history#m-firstfake), [`History.GetActive`](/mod/game-api/types/alta-intelligence/history#m-getactive), [`History.lastFake`](/mod/game-api/types/alta-intelligence/history#m-lastfake), [`KnowledgeHolder.Inform`](/mod/game-api/types/alta-intelligence/knowledgeholder#m-inform-2), [`KnowledgeHolder.knownEvents`](/mod/game-api/types/alta-intelligence/knowledgeholder#m-knownevents), [`KnowledgeHolder.KnowsAbout`](/mod/game-api/types/alta-intelligence/knowledgeholder#m-knowsabout).

</div>
