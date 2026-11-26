---
title: "AllTransitions"
description: "Holds one lazily created instance of every player state transition (playing, combat, dead, downed, spirit, equipment, customization, first join)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AllTransitions

A **class** in `Root.Township`, `Alta.PlayerStates`.

Holds one lazily created instance of every player state transition (playing, combat, dead, downed, spirit, equipment, customization, first join). Each player state has one as `AllTransitions`; each property is named after the transition it returns.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AllTransitions()"}</code> | <span className="api-desc">Creates an `AllTransitions` with default values.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-combattocombat" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/combattocombattransition">{"CombatToCombatTransition"}</Link>{"> combatToCombat"}</code> | <span className="api-desc">Lazy backing field for `CombatToCombatTransition`.</span> |
| <Link id="m-customizationtoplaying" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/customizationtoplayingtransition">{"CustomizationToPlayingTransition"}</Link>{"> customizationToPlaying"}</code> | <span className="api-desc">Lazy backing field for `CustomizationToPlayingTransition`.</span> |
| <Link id="m-deadtoplaying" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/deadtoplayingtransition">{"DeadToPlayingTransition"}</Link>{"> deadToPlaying"}</code> | <span className="api-desc">Lazy backing field for `DeadToPlayingTransition`.</span> |
| <Link id="m-downedtodead" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/downedtodeadtransition">{"DownedToDeadTransition"}</Link>{"> downedToDead"}</code> | <span className="api-desc">Lazy backing field for `DownedToDeadTransition`.</span> |
| <Link id="m-downedtoplaying" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/downedtoplayingtransition">{"DownedToPlayingTransition"}</Link>{"> downedToPlaying"}</code> | <span className="api-desc">Lazy backing field for `DownedToPlayingTransition`.</span> |
| <Link id="m-equipmenttoplaying" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/equipmenttoplayingtransition">{"EquipmentToPlayingTransition"}</Link>{"> equipmentToPlaying"}</code> | <span className="api-desc">Lazy backing field for `EquipmentToPlayingTransition`.</span> |
| <Link id="m-firstjointocustomization" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/firstjointocustomizationtransition">{"FirstJoinToCustomizationTransition"}</Link>{"> firstJoinToCustomization"}</code> | <span className="api-desc">Lazy backing field for `FirstJoinToCustomizationTransition`.</span> |
| <Link id="m-firstjointoplaying" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/firstjointoplayingtransition">{"FirstJoinToPlayingTransition"}</Link>{"> firstJoinToPlaying"}</code> | <span className="api-desc">Lazy backing field for `FirstJoinToPlayingTransition`.</span> |
| <Link id="m-playingtocombat" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/playingtocombattransition">{"PlayingToCombatTransition"}</Link>{"> playingToCombat"}</code> | <span className="api-desc">Lazy backing field for `PlayingToCombatTransition`.</span> |
| <Link id="m-playingtocustomization" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/playingtocustomizationtransition">{"PlayingToCustomizationTransition"}</Link>{"> playingToCustomization"}</code> | <span className="api-desc">Lazy backing field for `PlayingToCustomizationTransition`.</span> |
| <Link id="m-playingtodead" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/playingtodeadtransition">{"PlayingToDeadTransition"}</Link>{"> playingToDead"}</code> | <span className="api-desc">Lazy backing field for `PlayingToDeadTransition`.</span> |
| <Link id="m-playingtodowned" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/playingtodownedtransition">{"PlayingToDownedTransition"}</Link>{"> playingToDowned"}</code> | <span className="api-desc">Lazy backing field for `PlayingToDownedTransition`.</span> |
| <Link id="m-playingtoequipment" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/playingtoequipmenttransition">{"PlayingToEquipmentTransition"}</Link>{"> playingToEquipment"}</code> | <span className="api-desc">Lazy backing field for `PlayingToEquipmentTransition`.</span> |
| <Link id="m-playingtospirit" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/playingtospirittransition">{"PlayingToSpiritTransition"}</Link>{"> playingToSpirit"}</code> | <span className="api-desc">Lazy backing field for `PlayingToSpiritTransition`.</span> |
| <Link id="m-spirittoplaying" /><code>{"private readonly Lazy<"}<Link to="/mod/game-api/types/alta-player/spirittoplayingtransition">{"SpiritToPlayingTransition"}</Link>{"> spiritToPlaying"}</code> | <span className="api-desc">Lazy backing field for `SpiritToPlayingTransition`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-combattocombattransition" /><code><Link to="/mod/game-api/types/alta-player/combattocombattransition">{"CombatToCombatTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/combattocombattransition">{"CombatToCombatTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `CombatToCombatTransition`, made on first use.</span> |
| <Link id="m-customizationtoplayingtransition" /><code><Link to="/mod/game-api/types/alta-player/customizationtoplayingtransition">{"CustomizationToPlayingTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/customizationtoplayingtransition">{"CustomizationToPlayingTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `CustomizationToPlayingTransition`, made on first use.</span> |
| <Link id="m-deadtoplayingtransition" /><code><Link to="/mod/game-api/types/alta-player/deadtoplayingtransition">{"DeadToPlayingTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/deadtoplayingtransition">{"DeadToPlayingTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `DeadToPlayingTransition`, made on first use.</span> |
| <Link id="m-downedtodeadtransition" /><code><Link to="/mod/game-api/types/alta-player/downedtodeadtransition">{"DownedToDeadTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/downedtodeadtransition">{"DownedToDeadTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `DownedToDeadTransition`, made on first use.</span> |
| <Link id="m-downedtoplayingtransition" /><code><Link to="/mod/game-api/types/alta-player/downedtoplayingtransition">{"DownedToPlayingTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/downedtoplayingtransition">{"DownedToPlayingTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `DownedToPlayingTransition`, made on first use.</span> |
| <Link id="m-equipmenttoplayingtransition" /><code><Link to="/mod/game-api/types/alta-player/equipmenttoplayingtransition">{"EquipmentToPlayingTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/equipmenttoplayingtransition">{"EquipmentToPlayingTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `EquipmentToPlayingTransition`, made on first use.</span> |
| <Link id="m-firstjointocustomizationtransition" /><code><Link to="/mod/game-api/types/alta-player/firstjointocustomizationtransition">{"FirstJoinToCustomizationTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/firstjointocustomizationtransition">{"FirstJoinToCustomizationTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `FirstJoinToCustomizationTransition`, made on first use.</span> |
| <Link id="m-firstjointoplayingtransition" /><code><Link to="/mod/game-api/types/alta-player/firstjointoplayingtransition">{"FirstJoinToPlayingTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/firstjointoplayingtransition">{"FirstJoinToPlayingTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `FirstJoinToPlayingTransition`, made on first use.</span> |
| <Link id="m-playingtocombattransition" /><code><Link to="/mod/game-api/types/alta-player/playingtocombattransition">{"PlayingToCombatTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/playingtocombattransition">{"PlayingToCombatTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `PlayingToCombatTransition`, made on first use.</span> |
| <Link id="m-playingtocustomizationtransition" /><code><Link to="/mod/game-api/types/alta-player/playingtocustomizationtransition">{"PlayingToCustomizationTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/playingtocustomizationtransition">{"PlayingToCustomizationTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `PlayingToCustomizationTransition`, made on first use.</span> |
| <Link id="m-playingtodeadtransition" /><code><Link to="/mod/game-api/types/alta-player/playingtodeadtransition">{"PlayingToDeadTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/playingtodeadtransition">{"PlayingToDeadTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `PlayingToDeadTransition`, made on first use.</span> |
| <Link id="m-playingtodownedtransition" /><code><Link to="/mod/game-api/types/alta-player/playingtodownedtransition">{"PlayingToDownedTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/playingtodownedtransition">{"PlayingToDownedTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `PlayingToDownedTransition`, made on first use.</span> |
| <Link id="m-playingtoequipmenttransition" /><code><Link to="/mod/game-api/types/alta-player/playingtoequipmenttransition">{"PlayingToEquipmentTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/playingtoequipmenttransition">{"PlayingToEquipmentTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `PlayingToEquipmentTransition`, made on first use.</span> |
| <Link id="m-playingtospirittransition" /><code><Link to="/mod/game-api/types/alta-player/playingtospirittransition">{"PlayingToSpiritTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/playingtospirittransition">{"PlayingToSpiritTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `PlayingToSpiritTransition`, made on first use.</span> |
| <Link id="m-spirittoplayingtransition" /><code><Link to="/mod/game-api/types/alta-player/spirittoplayingtransition">{"SpiritToPlayingTransition"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/spirittoplayingtransition">{"SpiritToPlayingTransition"}</Link>{" { get; }"}</code> | <span className="api-desc">This state's own `SpiritToPlayingTransition`, made on first use.</span> |

## Used in

Members of other types that take, return or hold a `AllTransitions`:

<div className="api-used-in">

[`IPlayerState.AllTransitions`](/mod/game-api/types/alta-player/iplayerstate#m-alltransitions), [`PlayerStateBase.AllTransitions`](/mod/game-api/types/alta-player/playerstatebase#m-alltransitions).

</div>
