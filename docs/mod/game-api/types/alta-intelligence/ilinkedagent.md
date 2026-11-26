---
title: "ILinkedAgent"
description: "What AgentUpdater needs from a creature AI to schedule it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILinkedAgent

An **interface** in `Root.Township`, `Alta.Intelligence`.

What `AgentUpdater` needs from a creature AI to schedule it. `Agent` implements it explicitly; agents are kept in a linked list sorted by priority.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`Agent`](/mod/game-api/types/alta-intelligence/agent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The agent's network entity. Agents whose entity is gone or being destroyed are dropped from the list. |
| <Link id="m-node" /><code>{"LinkedListNode<"}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{"> Node { get; set; }"}</code> | The agent's node in the updater's list. Null when not registered. |
| <Link id="m-priority" /><code>{"int Priority { get; set; }"}</code> | How urgently the agent needs a decision. Reset to 0 after each check and raised by the updater over time. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkchange" /><code>{"bool CheckChange()"}</code> | Called for the highest priority agents each update. Returns true if the agent re-chose its action (its next decision time had passed). |
| <Link id="m-updateagent" /><code>{"void UpdateAgent()"}</code> | Runs the agent's current action for this frame, after updating hurt state and checking the target still exists. |

## Used in

Members of other types that take, return or hold a `ILinkedAgent`:

[`Agent.Alta.Intelligence.ILinkedAgent.Node`](/mod/game-api/types/alta-intelligence/agent#m-alta-intelligence-ilinkedagent-node), [`AgentUpdater.agents`](/mod/game-api/types/alta-intelligence/agentupdater#m-agents), [`AgentUpdater.Deregister`](/mod/game-api/types/alta-intelligence/agentupdater#m-deregister), [`AgentUpdater.Register`](/mod/game-api/types/alta-intelligence/agentupdater#m-register), [`AgentUpdater.Sort`](/mod/game-api/types/alta-intelligence/agentupdater#m-sort), [`AgentUpdater.UpdatePriority`](/mod/game-api/types/alta-intelligence/agentupdater#m-updatepriority).
