---
title: "ILinkedAgent"
description: "interface ILinkedAgent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILinkedAgent

An **interface** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Derived types** [`Agent`](/game-api/types/alta-intelligence/agent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |
| <Link id="m-node" /><code>{"LinkedListNode<"}<Link to="/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{"> Node { get; set; }"}</code> |  |
| <Link id="m-priority" /><code>{"int Priority { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkchange" /><code>{"bool CheckChange()"}</code> |  |
| <Link id="m-updateagent" /><code>{"void UpdateAgent()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ILinkedAgent`:

[`Agent.Alta.Intelligence.ILinkedAgent.Node`](/game-api/types/alta-intelligence/agent#m-alta-intelligence-ilinkedagent-node), [`AgentUpdater.agents`](/game-api/types/alta-intelligence/agentupdater#m-agents), [`AgentUpdater.Deregister`](/game-api/types/alta-intelligence/agentupdater#m-deregister), [`AgentUpdater.Register`](/game-api/types/alta-intelligence/agentupdater#m-register), [`AgentUpdater.Sort`](/game-api/types/alta-intelligence/agentupdater#m-sort), [`AgentUpdater.UpdatePriority`](/game-api/types/alta-intelligence/agentupdater#m-updatepriority).
