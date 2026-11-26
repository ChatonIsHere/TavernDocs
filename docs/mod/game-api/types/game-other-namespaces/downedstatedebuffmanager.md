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
| <Link id="m-ctor" /><code>{"DownedStateDebuffManager()"}</code> | <span className="api-desc">Creates a `DownedStateDebuffManager` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playerstatmodifiers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{", "}<Link to="/mod/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{"> playerStatModifiers"}</code> | <span className="api-desc">Applied timed modifiers by player character.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applydebufftoplayer" /><code>{"void ApplyDebuffToPlayer("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter, IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{"> debuffs, float duration)"}</code> | <span className="api-desc">Applies each debuff to the player's stats as a timed modifier and records it. A player can only hold one entry, so a second debuff or a second call before removal throws.</span> |
| <Link id="m-clearalldebuffs" /><code>{"void ClearAllDebuffs()"}</code> | <span className="api-desc">Removes every recorded debuff from every player.</span> |
| <Link id="m-removedebuffsforplayer" /><code>{"void RemoveDebuffsForPlayer("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter)"}</code> | <span className="api-desc">Removes the recorded debuffs from one player. Called by `DownedState` when the player leaves the state.</span> |

## Used in

Members of other types that take, return or hold a `DownedStateDebuffManager`:

<div className="api-used-in">

[`DownedState.debuffManager`](/mod/game-api/types/alta-player/downedstate#m-debuffmanager), [`DownedState.DownedState`](/mod/game-api/types/alta-player/downedstate#m-ctor), [`PlayerStateFactory.debuffManager`](/mod/game-api/types/alta-player/playerstatefactory#m-debuffmanager).

</div>
