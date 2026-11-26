---
title: "AgentUpdater"
description: "Server: the scene singleton that ticks every creature."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentUpdater

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: the scene singleton that ticks every creature. Each fixed update it raises each creature's priority by how close the nearest player is, re-sorts, and lets the top few decide again.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Module`
- **Documented in** [AgentUpdater](/mod/game-api/creatures/agent-updater), [Update modules](/mod/game-api/console-and-utilities/update-modules)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentUpdater()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agents" /><code>{"private LinkedList<"}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{"> agents"}</code> | <span className="api-desc">All registered creatures, ordered by priority, highest first.</span> |
| <Link id="m-furthestdistancesquared" /><code>{"private float furthestDistanceSquared"}</code> | <span className="api-desc">Squared distance past which players add no extra priority. Default 10000 (100 m).</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger, used for per-creature errors and `PrintAll`.</span> |
| <Link id="m-maxextra" /><code>{"private int maxExtra"}</code> | <span className="api-desc">`maxPriorityIncrement` minus `minPriorityIncrement`, recomputed each tick.</span> |
| <Link id="m-maxpriorityincrement" /><code>{"private int maxPriorityIncrement"}</code> | <span className="api-desc">Most priority a creature can gain in one tick, with a player right next to it. Default 100.</span> |
| <Link id="m-minpriorityincrement" /><code>{"private int minPriorityIncrement"}</code> | <span className="api-desc">Priority every creature gains each tick. Default 1.</span> |
| <Link id="m-timer" /><code>{"private static Stopwatch timer"}</code> | <span className="api-desc">Stopwatch used for the two timing averages.</span> |
| <Link id="m-updateagents" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateAgents"}</code> | <span className="api-desc">The "AI Agent Updater" fixed update module, included in server profiling.</span> |
| <Link id="m-updateagentsmethod" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateAgentsMethod"}</code> | <span className="api-desc">The registered `UpdateAgents` call.</span> |
| <Link id="m-updatecount" /><code>{"private int updateCount"}</code> | <span className="api-desc">How many creatures get to decide again each tick. Default 5.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-agentcount" /><code>{"static int AgentCount { get; }"}</code> | <span className="api-desc">Number of creatures registered.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/agentupdater">{"AgentUpdater"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The scene's updater, set in `Awake`.</span> |
| <Link id="m-sortingagentstimems" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SortingAgentsTimeMs { get; }"}</code> | <span className="api-desc">Running average of the time spent updating priorities and sorting each tick.</span> |
| <Link id="m-toppriority" /><code>{"int TopPriority { get; }"}</code> | <span className="api-desc">Priority of the first creature in the list, or 1 if there are none.</span> |
| <Link id="m-updatingagentstimems" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" UpdatingAgentsTimeMs { get; }"}</code> | <span className="api-desc">Running average of the time spent deciding and updating creatures each tick.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> | <span className="api-desc">Removes a creature from the list. Warns if it wasn't registered.</span> |
| <Link id="m-printall" /><code>{"static void PrintAll()"}</code> | <span className="api-desc">The `agents print` console command: logs each creature and its priority at trace level, then the total.</span> |
| <Link id="m-register" /><code>{"void Register("}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> | <span className="api-desc">Adds a creature at the end of the list with priority 0 and runs its first decision and update. Errors if already registered.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `Instance`, initializes all senses and starts updating once the server has started.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the server start event and stops updating.</span> |
| <Link id="m-onserverstarted" /><code>{"private void OnServerStarted()"}</code> | <span className="api-desc">Registers `UpdateAgents` on the fixed update module.</span> |
| <Link id="m-sort" /><code>{"private void Sort("}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> | <span className="api-desc">Moves a creature forward in the list past every creature with a lower priority.</span> |
| <Link id="m-updateagents-2" /><code>{"private void UpdateAgents()"}</code> | <span className="api-desc">The fixed update: caches player head positions, drops destroyed creatures, raises priorities, sorts, then runs `UpdateAndMoveToEnd`.</span> |
| <Link id="m-updateandmovetoend" /><code>{"private void UpdateAndMoveToEnd()"}</code> | <span className="api-desc">Lets the first `updateCount` creatures decide again (more if some didn't change), resets them to priority 0 and moves them to the end. Updates every creature.</span> |
| <Link id="m-updatepriority" /><code>{"private void UpdatePriority("}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> | <span className="api-desc">Adds `minPriorityIncrement` plus up to `maxExtra` more the closer the nearest player is, within `furthestDistanceSquared`.</span> |

</details>
