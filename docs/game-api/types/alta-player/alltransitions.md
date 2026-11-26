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

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AllTransitions()"}</code> | Creates an `AllTransitions` with default values. |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-combattocombat" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/combattocombattransition">{"CombatToCombatTransition"}</Link>{"> combatToCombat"}</code> | Lazy backing field for `CombatToCombatTransition`. |
| <Link id="m-customizationtoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/customizationtoplayingtransition">{"CustomizationToPlayingTransition"}</Link>{"> customizationToPlaying"}</code> | Lazy backing field for `CustomizationToPlayingTransition`. |
| <Link id="m-deadtoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/deadtoplayingtransition">{"DeadToPlayingTransition"}</Link>{"> deadToPlaying"}</code> | Lazy backing field for `DeadToPlayingTransition`. |
| <Link id="m-downedtodead" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/downedtodeadtransition">{"DownedToDeadTransition"}</Link>{"> downedToDead"}</code> | Lazy backing field for `DownedToDeadTransition`. |
| <Link id="m-downedtoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/downedtoplayingtransition">{"DownedToPlayingTransition"}</Link>{"> downedToPlaying"}</code> | Lazy backing field for `DownedToPlayingTransition`. |
| <Link id="m-equipmenttoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/equipmenttoplayingtransition">{"EquipmentToPlayingTransition"}</Link>{"> equipmentToPlaying"}</code> | Lazy backing field for `EquipmentToPlayingTransition`. |
| <Link id="m-firstjointocustomization" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/firstjointocustomizationtransition">{"FirstJoinToCustomizationTransition"}</Link>{"> firstJoinToCustomization"}</code> | Lazy backing field for `FirstJoinToCustomizationTransition`. |
| <Link id="m-firstjointoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/firstjointoplayingtransition">{"FirstJoinToPlayingTransition"}</Link>{"> firstJoinToPlaying"}</code> | Lazy backing field for `FirstJoinToPlayingTransition`. |
| <Link id="m-playingtocombat" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtocombattransition">{"PlayingToCombatTransition"}</Link>{"> playingToCombat"}</code> | Lazy backing field for `PlayingToCombatTransition`. |
| <Link id="m-playingtocustomization" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtocustomizationtransition">{"PlayingToCustomizationTransition"}</Link>{"> playingToCustomization"}</code> | Lazy backing field for `PlayingToCustomizationTransition`. |
| <Link id="m-playingtodead" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtodeadtransition">{"PlayingToDeadTransition"}</Link>{"> playingToDead"}</code> | Lazy backing field for `PlayingToDeadTransition`. |
| <Link id="m-playingtodowned" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtodownedtransition">{"PlayingToDownedTransition"}</Link>{"> playingToDowned"}</code> | Lazy backing field for `PlayingToDownedTransition`. |
| <Link id="m-playingtoequipment" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtoequipmenttransition">{"PlayingToEquipmentTransition"}</Link>{"> playingToEquipment"}</code> | Lazy backing field for `PlayingToEquipmentTransition`. |
| <Link id="m-playingtospirit" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtospirittransition">{"PlayingToSpiritTransition"}</Link>{"> playingToSpirit"}</code> | Lazy backing field for `PlayingToSpiritTransition`. |
| <Link id="m-spirittoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/spirittoplayingtransition">{"SpiritToPlayingTransition"}</Link>{"> spiritToPlaying"}</code> | Lazy backing field for `SpiritToPlayingTransition`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-combattocombattransition" /><code><Link to="/game-api/types/alta-player/combattocombattransition">{"CombatToCombatTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/combattocombattransition">{"CombatToCombatTransition"}</Link>{" { get; }"}</code> | This state's own `CombatToCombatTransition`, made on first use. |
| <Link id="m-customizationtoplayingtransition" /><code><Link to="/game-api/types/alta-player/customizationtoplayingtransition">{"CustomizationToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/customizationtoplayingtransition">{"CustomizationToPlayingTransition"}</Link>{" { get; }"}</code> | This state's own `CustomizationToPlayingTransition`, made on first use. |
| <Link id="m-deadtoplayingtransition" /><code><Link to="/game-api/types/alta-player/deadtoplayingtransition">{"DeadToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/deadtoplayingtransition">{"DeadToPlayingTransition"}</Link>{" { get; }"}</code> | This state's own `DeadToPlayingTransition`, made on first use. |
| <Link id="m-downedtodeadtransition" /><code><Link to="/game-api/types/alta-player/downedtodeadtransition">{"DownedToDeadTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/downedtodeadtransition">{"DownedToDeadTransition"}</Link>{" { get; }"}</code> | This state's own `DownedToDeadTransition`, made on first use. |
| <Link id="m-downedtoplayingtransition" /><code><Link to="/game-api/types/alta-player/downedtoplayingtransition">{"DownedToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/downedtoplayingtransition">{"DownedToPlayingTransition"}</Link>{" { get; }"}</code> | This state's own `DownedToPlayingTransition`, made on first use. |
| <Link id="m-equipmenttoplayingtransition" /><code><Link to="/game-api/types/alta-player/equipmenttoplayingtransition">{"EquipmentToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/equipmenttoplayingtransition">{"EquipmentToPlayingTransition"}</Link>{" { get; }"}</code> | This state's own `EquipmentToPlayingTransition`, made on first use. |
| <Link id="m-firstjointocustomizationtransition" /><code><Link to="/game-api/types/alta-player/firstjointocustomizationtransition">{"FirstJoinToCustomizationTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/firstjointocustomizationtransition">{"FirstJoinToCustomizationTransition"}</Link>{" { get; }"}</code> | This state's own `FirstJoinToCustomizationTransition`, made on first use. |
| <Link id="m-firstjointoplayingtransition" /><code><Link to="/game-api/types/alta-player/firstjointoplayingtransition">{"FirstJoinToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/firstjointoplayingtransition">{"FirstJoinToPlayingTransition"}</Link>{" { get; }"}</code> | This state's own `FirstJoinToPlayingTransition`, made on first use. |
| <Link id="m-playingtocombattransition" /><code><Link to="/game-api/types/alta-player/playingtocombattransition">{"PlayingToCombatTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtocombattransition">{"PlayingToCombatTransition"}</Link>{" { get; }"}</code> | This state's own `PlayingToCombatTransition`, made on first use. |
| <Link id="m-playingtocustomizationtransition" /><code><Link to="/game-api/types/alta-player/playingtocustomizationtransition">{"PlayingToCustomizationTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtocustomizationtransition">{"PlayingToCustomizationTransition"}</Link>{" { get; }"}</code> | This state's own `PlayingToCustomizationTransition`, made on first use. |
| <Link id="m-playingtodeadtransition" /><code><Link to="/game-api/types/alta-player/playingtodeadtransition">{"PlayingToDeadTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtodeadtransition">{"PlayingToDeadTransition"}</Link>{" { get; }"}</code> | This state's own `PlayingToDeadTransition`, made on first use. |
| <Link id="m-playingtodownedtransition" /><code><Link to="/game-api/types/alta-player/playingtodownedtransition">{"PlayingToDownedTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtodownedtransition">{"PlayingToDownedTransition"}</Link>{" { get; }"}</code> | This state's own `PlayingToDownedTransition`, made on first use. |
| <Link id="m-playingtoequipmenttransition" /><code><Link to="/game-api/types/alta-player/playingtoequipmenttransition">{"PlayingToEquipmentTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtoequipmenttransition">{"PlayingToEquipmentTransition"}</Link>{" { get; }"}</code> | This state's own `PlayingToEquipmentTransition`, made on first use. |
| <Link id="m-playingtospirittransition" /><code><Link to="/game-api/types/alta-player/playingtospirittransition">{"PlayingToSpiritTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtospirittransition">{"PlayingToSpiritTransition"}</Link>{" { get; }"}</code> | This state's own `PlayingToSpiritTransition`, made on first use. |
| <Link id="m-spirittoplayingtransition" /><code><Link to="/game-api/types/alta-player/spirittoplayingtransition">{"SpiritToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/spirittoplayingtransition">{"SpiritToPlayingTransition"}</Link>{" { get; }"}</code> | This state's own `SpiritToPlayingTransition`, made on first use. |

## Used in

Members of other types that take, return or hold a `AllTransitions`:

[`IPlayerState.AllTransitions`](/game-api/types/alta-player/iplayerstate#m-alltransitions), [`PlayerStateBase.AllTransitions`](/game-api/types/alta-player/playerstatebase#m-alltransitions).
