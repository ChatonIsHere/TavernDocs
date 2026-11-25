---
title: "ActiveSchmeecheePlant"
description: "class ActiveSchmeecheePlant in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveSchmeecheePlant

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Schmeechee, SchmeecheePlantSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveSchmeecheePlant()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-finishplant" /><code>{"private float finishPlant"}</code> |  |
| <Link id="m-isplanting" /><code>{"private bool isPlanting"}</code> |  |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/activeidle">{"ActiveIdle"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/agentidlesettings">{"AgentIdleSettings"}</Link>{"> GetAction("}<Link to="/game-api/types/alta-intelligence/agentidlesettings">{"AgentIdleSettings"}</Link>{" settings)"}</code> |  |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> |  |
| <Link id="m-onfinished" /><code>{"private void OnFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |  |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> |  |
