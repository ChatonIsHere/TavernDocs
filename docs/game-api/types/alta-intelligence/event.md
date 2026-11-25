---
title: "Event"
description: "class Event in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Event

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code><Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{"("}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" next, "}<Link to="/game-api/types/alta-intelligence/day">{"Day"}</Link>{" day, float lifeTime, params "}<Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{"[] knowledge)"}</code> |  |
| <Link id="m-ctor-2" /><code><Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{"("}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" previous)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nextactive" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" nextActive"}</code> |  |
| <Link id="m-previousactive" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" previousActive"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-day" /><code><Link to="/game-api/types/alta-intelligence/day">{"Day"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/day">{"Day"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-isalive" /><code>{"bool IsAlive { get; private set; }"}</code> |  |
| <Link id="m-knowledge" /><code><Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{"[] Knowledge { get; private set; }"}</code> |  |
| <Link id="m-next" /><code><Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" Next { get; }"}</code> |  |
| <Link id="m-age" /><code>{"private float Age { get; set; }"}</code> |  |
| <Link id="m-lifetime" /><code>{"private float LifeTime { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"void Update(float duration)"}</code> |  |
| <Link id="m-ageweightknowledge" /><code>{"private void AgeWeightKnowledge(float weight)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Event`:

[`Day.events`](/game-api/types/alta-intelligence/day#m-events), [`Day.RegisterEvent`](/game-api/types/alta-intelligence/day#m-registerevent), [`History.CreateEvent`](/game-api/types/alta-intelligence/history#m-createevent), [`History.firstFake`](/game-api/types/alta-intelligence/history#m-firstfake), [`History.GetActive`](/game-api/types/alta-intelligence/history#m-getactive), [`History.lastFake`](/game-api/types/alta-intelligence/history#m-lastfake), [`KnowledgeHolder.Inform`](/game-api/types/alta-intelligence/knowledgeholder#m-inform-2), [`KnowledgeHolder.knownEvents`](/game-api/types/alta-intelligence/knowledgeholder#m-knownevents), [`KnowledgeHolder.KnowsAbout`](/game-api/types/alta-intelligence/knowledgeholder#m-knowsabout).
