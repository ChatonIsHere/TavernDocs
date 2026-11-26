---
title: "PlayerStateSettingsManager"
description: "Looks up the settings asset for each player state type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStateSettingsManager

A **static class** in `Root.Township`, `Alta.PlayerStates`.

Looks up the settings asset for each player state type. Loads every `PlayerStateSettings` from Resources/PlayerStates/Settings on first use.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-statesettings" /><code>{"private static Dictionary<Type, "}<Link to="/mod/game-api/types/alta-player/playerstatesettings">{"PlayerStateSettings"}</Link>{"> stateSettings"}</code> | Settings assets keyed by state class; null until first lookup. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsettings" /><code>{"static "}<Link to="/mod/game-api/types/alta-player/playerstatesettings">{"PlayerStateSettings"}</Link>{" GetSettings(Type stateType)"}</code> | Returns the settings asset for the given state class, or null if there is none. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializedictionary" /><code>{"private static void InitializeDictionary()"}</code> | Loads all settings assets and keys them by their `StateType`. Throws if two share a type. |

</details>
