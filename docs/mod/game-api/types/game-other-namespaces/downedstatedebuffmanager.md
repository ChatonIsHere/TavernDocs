---
title: "DownedStateDebuffManager"
description: "Tracks the timed stat debuffs a player gets on respawning from the downed state, so they can be removed early."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownedStateDebuffManager

A **class** in `Root.Township`, `ATT.PlayerStates`.

Tracks the timed stat debuffs a player gets on respawning from the downed state, so they can be removed early. One is made by `PlayerStateFactory` and shared by every `DownedState`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DownedStateDebuffManager()"}</code> | Creates a `DownedStateDebuffManager` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playerstatmodifiers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{", "}<Link to="/mod/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{"> playerStatModifiers"}</code> | Applied timed modifiers by player character. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applydebufftoplayer" /><code>{"void ApplyDebuffToPlayer("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter, IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{"> debuffs, float duration)"}</code> | Applies each debuff to the player's stats as a timed modifier and records it. A player can only hold one entry, so a second debuff or a second call before removal throws. |
| <Link id="m-clearalldebuffs" /><code>{"void ClearAllDebuffs()"}</code> | Removes every recorded debuff from every player. |
| <Link id="m-removedebuffsforplayer" /><code>{"void RemoveDebuffsForPlayer("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter)"}</code> | Removes the recorded debuffs from one player. Called by `DownedState` when the player leaves the state. |

## Used in

Members of other types that take, return or hold a `DownedStateDebuffManager`:

[`DownedState.debuffManager`](/mod/game-api/types/alta-player/downedstate#m-debuffmanager), [`DownedState.DownedState`](/mod/game-api/types/alta-player/downedstate#m-ctor), [`PlayerStateFactory.debuffManager`](/mod/game-api/types/alta-player/playerstatefactory#m-debuffmanager).
