---
title: "SavableCache"
description: "Static cache of the savable components (ISavableSaveBase) on each network entity, so saving doesn't call GetComponents every time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavableCache

A **static class** in `Root.Township`, `Alta.Saving`.

Static cache of the savable components (`ISavableSaveBase`) on each network entity, so saving doesn't call `GetComponents` every time. Extra savables can be added by hand.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-savablesperentity" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", IEnumerable<"}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{">> savablesPerEntity"}</code> | Cached savables for each entity. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisteradditional" /><code>{"static void DeregisterAdditional("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable)"}</code> | Removes a savable from an entity's list. |
| <Link id="m-getfor" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{"> GetFor("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Gets an entity's savables, finding its components and caching them the first time; dropped when the entity is destroyed. |
| <Link id="m-registeradditional" /><code>{"static void RegisterAdditional("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable)"}</code> | Adds a savable to the entity's list that isn't one of its components. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-removefromsavablesmap" /><code>{"private static void RemoveFromSavablesMap("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Drops an entity's cached list when it is destroyed. |
| <Link id="m-tolist" /><code>{"private static List<"}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{"> ToList("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, IEnumerable<"}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{"> existing)"}</code> | Swaps an entity's cached array for a list so it can be changed. |

</details>
