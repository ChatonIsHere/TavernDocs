---
title: "SavableCache"
description: "static class SavableCache in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavableCache

A **static class** in `Root.Township`, `Alta.Saving`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-savablesperentity" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", IEnumerable<"}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{">> savablesPerEntity"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-deregisteradditional" /><code>{"static void DeregisterAdditional("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable)"}</code> |
| <Link id="m-getfor" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{"> GetFor("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-registeradditional" /><code>{"static void RegisterAdditional("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-removefromsavablesmap" /><code>{"private static void RemoveFromSavablesMap("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-tolist" /><code>{"private static List<"}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{"> ToList("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, IEnumerable<"}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{"> existing)"}</code> |

</details>
