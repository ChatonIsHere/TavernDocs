---
title: "AllTransitions"
description: "Holds one lazily created instance of every player state transition (playing, combat, dead, downed, spirit, equipment, customization, first join). Each"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AllTransitions

A **class** in `Root.Township`, `Alta.PlayerStates`.

Holds one lazily created instance of every player state transition (playing, combat, dead, downed, spirit, equipment, customization, first join). Each player state has one as `AllTransitions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AllTransitions()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-combattocombat" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/combattocombattransition">{"CombatToCombatTransition"}</Link>{"> combatToCombat"}</code> |  |
| <Link id="m-customizationtoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/customizationtoplayingtransition">{"CustomizationToPlayingTransition"}</Link>{"> customizationToPlaying"}</code> |  |
| <Link id="m-deadtoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/deadtoplayingtransition">{"DeadToPlayingTransition"}</Link>{"> deadToPlaying"}</code> |  |
| <Link id="m-downedtodead" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/downedtodeadtransition">{"DownedToDeadTransition"}</Link>{"> downedToDead"}</code> |  |
| <Link id="m-downedtoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/downedtoplayingtransition">{"DownedToPlayingTransition"}</Link>{"> downedToPlaying"}</code> |  |
| <Link id="m-equipmenttoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/equipmenttoplayingtransition">{"EquipmentToPlayingTransition"}</Link>{"> equipmentToPlaying"}</code> |  |
| <Link id="m-firstjointocustomization" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/firstjointocustomizationtransition">{"FirstJoinToCustomizationTransition"}</Link>{"> firstJoinToCustomization"}</code> |  |
| <Link id="m-firstjointoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/firstjointoplayingtransition">{"FirstJoinToPlayingTransition"}</Link>{"> firstJoinToPlaying"}</code> |  |
| <Link id="m-playingtocombat" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtocombattransition">{"PlayingToCombatTransition"}</Link>{"> playingToCombat"}</code> |  |
| <Link id="m-playingtocustomization" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtocustomizationtransition">{"PlayingToCustomizationTransition"}</Link>{"> playingToCustomization"}</code> |  |
| <Link id="m-playingtodead" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtodeadtransition">{"PlayingToDeadTransition"}</Link>{"> playingToDead"}</code> |  |
| <Link id="m-playingtodowned" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtodownedtransition">{"PlayingToDownedTransition"}</Link>{"> playingToDowned"}</code> |  |
| <Link id="m-playingtoequipment" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtoequipmenttransition">{"PlayingToEquipmentTransition"}</Link>{"> playingToEquipment"}</code> |  |
| <Link id="m-playingtospirit" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/playingtospirittransition">{"PlayingToSpiritTransition"}</Link>{"> playingToSpirit"}</code> |  |
| <Link id="m-spirittoplaying" /><code>{"private readonly Lazy<"}<Link to="/game-api/types/alta-player/spirittoplayingtransition">{"SpiritToPlayingTransition"}</Link>{"> spiritToPlaying"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-combattocombattransition" /><code><Link to="/game-api/types/alta-player/combattocombattransition">{"CombatToCombatTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/combattocombattransition">{"CombatToCombatTransition"}</Link>{" { get; }"}</code> | Transition from combat back into combat. |
| <Link id="m-customizationtoplayingtransition" /><code><Link to="/game-api/types/alta-player/customizationtoplayingtransition">{"CustomizationToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/customizationtoplayingtransition">{"CustomizationToPlayingTransition"}</Link>{" { get; }"}</code> | Transition from character customization to playing. |
| <Link id="m-deadtoplayingtransition" /><code><Link to="/game-api/types/alta-player/deadtoplayingtransition">{"DeadToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/deadtoplayingtransition">{"DeadToPlayingTransition"}</Link>{" { get; }"}</code> | Transition from dead to playing. |
| <Link id="m-downedtodeadtransition" /><code><Link to="/game-api/types/alta-player/downedtodeadtransition">{"DownedToDeadTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/downedtodeadtransition">{"DownedToDeadTransition"}</Link>{" { get; }"}</code> | Transition from downed to dead. |
| <Link id="m-downedtoplayingtransition" /><code><Link to="/game-api/types/alta-player/downedtoplayingtransition">{"DownedToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/downedtoplayingtransition">{"DownedToPlayingTransition"}</Link>{" { get; }"}</code> | Transition from downed back to playing. |
| <Link id="m-equipmenttoplayingtransition" /><code><Link to="/game-api/types/alta-player/equipmenttoplayingtransition">{"EquipmentToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/equipmenttoplayingtransition">{"EquipmentToPlayingTransition"}</Link>{" { get; }"}</code> | Transition from equipment mode to playing. |
| <Link id="m-firstjointocustomizationtransition" /><code><Link to="/game-api/types/alta-player/firstjointocustomizationtransition">{"FirstJoinToCustomizationTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/firstjointocustomizationtransition">{"FirstJoinToCustomizationTransition"}</Link>{" { get; }"}</code> | Transition from first join into character customization. |
| <Link id="m-firstjointoplayingtransition" /><code><Link to="/game-api/types/alta-player/firstjointoplayingtransition">{"FirstJoinToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/firstjointoplayingtransition">{"FirstJoinToPlayingTransition"}</Link>{" { get; }"}</code> | Transition from first join straight to playing. |
| <Link id="m-playingtocombattransition" /><code><Link to="/game-api/types/alta-player/playingtocombattransition">{"PlayingToCombatTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtocombattransition">{"PlayingToCombatTransition"}</Link>{" { get; }"}</code> | Transition from playing to combat. |
| <Link id="m-playingtocustomizationtransition" /><code><Link to="/game-api/types/alta-player/playingtocustomizationtransition">{"PlayingToCustomizationTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtocustomizationtransition">{"PlayingToCustomizationTransition"}</Link>{" { get; }"}</code> | Transition from playing into character customization. |
| <Link id="m-playingtodeadtransition" /><code><Link to="/game-api/types/alta-player/playingtodeadtransition">{"PlayingToDeadTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtodeadtransition">{"PlayingToDeadTransition"}</Link>{" { get; }"}</code> | Transition from playing to dead. |
| <Link id="m-playingtodownedtransition" /><code><Link to="/game-api/types/alta-player/playingtodownedtransition">{"PlayingToDownedTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtodownedtransition">{"PlayingToDownedTransition"}</Link>{" { get; }"}</code> | Transition from playing to downed. |
| <Link id="m-playingtoequipmenttransition" /><code><Link to="/game-api/types/alta-player/playingtoequipmenttransition">{"PlayingToEquipmentTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtoequipmenttransition">{"PlayingToEquipmentTransition"}</Link>{" { get; }"}</code> | Transition from playing to equipment mode. |
| <Link id="m-playingtospirittransition" /><code><Link to="/game-api/types/alta-player/playingtospirittransition">{"PlayingToSpiritTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/playingtospirittransition">{"PlayingToSpiritTransition"}</Link>{" { get; }"}</code> | Transition from playing to spirit. |
| <Link id="m-spirittoplayingtransition" /><code><Link to="/game-api/types/alta-player/spirittoplayingtransition">{"SpiritToPlayingTransition"}</Link>{" "}<Link to="/game-api/types/alta-player/spirittoplayingtransition">{"SpiritToPlayingTransition"}</Link>{" { get; }"}</code> | Transition from spirit back to playing. |

## Used in

Members of other types that take, return or hold a `AllTransitions`:

[`IPlayerState.AllTransitions`](/game-api/types/alta-player/iplayerstate#m-alltransitions), [`PlayerStateBase.AllTransitions`](/game-api/types/alta-player/playerstatebase#m-alltransitions).
