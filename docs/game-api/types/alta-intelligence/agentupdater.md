---
title: "AgentUpdater"
description: "A scene MonoBehaviour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentUpdater

A **class** in `Root.Township`, `Alta.Intelligence`.

A scene `MonoBehaviour`. Ticks only on the server.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Module`
- **Documented in** [AgentUpdater](/game-api/creatures/agent-updater), [Update modules](/game-api/console-and-utilities/update-modules)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentUpdater()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-agents" /><code>{"private LinkedList<"}<Link to="/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{"> agents"}</code> |  |
| <Link id="m-furthestdistancesquared" /><code>{"private float furthestDistanceSquared"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maxextra" /><code>{"private int maxExtra"}</code> |  |
| <Link id="m-maxpriorityincrement" /><code>{"private int maxPriorityIncrement"}</code> |  |
| <Link id="m-minpriorityincrement" /><code>{"private int minPriorityIncrement"}</code> |  |
| <Link id="m-timer" /><code>{"private static Stopwatch timer"}</code> |  |
| <Link id="m-updateagents" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateAgents"}</code> |  |
| <Link id="m-updateagentsmethod" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateAgentsMethod"}</code> |  |
| <Link id="m-updatecount" /><code>{"private int updateCount"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-agentcount" /><code>{"static int AgentCount { get; }"}</code> |  |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/agentupdater">{"AgentUpdater"}</Link>{" Instance { get; private set; }"}</code> |  |
| <Link id="m-sortingagentstimems" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SortingAgentsTimeMs { get; }"}</code> |  |
| <Link id="m-toppriority" /><code>{"int TopPriority { get; }"}</code> |  |
| <Link id="m-updatingagentstimems" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" UpdatingAgentsTimeMs { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> |  |
| <Link id="m-printall" /><code>{"static void PrintAll()"}</code> |  |
| <Link id="m-register" /><code>{"void Register("}<Link to="/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onserverstarted" /><code>{"private void OnServerStarted()"}</code> |  |
| <Link id="m-sort" /><code>{"private void Sort("}<Link to="/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> |  |
| <Link id="m-updateagents-2" /><code>{"private void UpdateAgents()"}</code> |  |
| <Link id="m-updateandmovetoend" /><code>{"private void UpdateAndMoveToEnd()"}</code> |  |
| <Link id="m-updatepriority" /><code>{"private void UpdatePriority("}<Link to="/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> |  |
