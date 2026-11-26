---
title: "InteractionChannel"
description: "Flags for which kinds of interaction an interactor accepts (normal, body customisation, equipment, skill practice, downed character)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractionChannel

An **enum** in `Root.Township`, the global namespace.

Flags for which kinds of interaction an interactor accepts (normal, body customisation, equipment, skill practice, downed character). Interactors can override their channels, for example while downed.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Values

| Member |
| --- |
| <Link id="m-characterbodycustomisation" /><code>{"CharacterBodyCustomisation = 2"}</code> |
| <Link id="m-characterequipment" /><code>{"CharacterEquipment = 4"}</code> |
| <Link id="m-downedcharacter" /><code>{"DownedCharacter = 16"}</code> |
| <Link id="m-normal" /><code>{"Normal = 1"}</code> |
| <Link id="m-skillpractice" /><code>{"SkillPractice = 8"}</code> |

## Used in

Members of other types that take, return or hold a `InteractionChannel`:

[`Interactable.channels`](/mod/game-api/types/global-i-l/interactable#m-channels), [`Interactable.Channels`](/mod/game-api/types/global-i-l/interactable#m-channels-2), [`InteractionChannelHelper.Intersects`](/mod/game-api/types/global-i-l/interactionchannelhelper#m-intersects), [`Interactor.channels`](/mod/game-api/types/global-i-l/interactor#m-channels), [`Interactor.Channels`](/mod/game-api/types/global-i-l/interactor#m-channels-2), [`Interactor.overrideChannels`](/mod/game-api/types/global-i-l/interactor#m-overridechannels), [`Interactor.SetOverrideInteractionChannels`](/mod/game-api/types/global-i-l/interactor#m-setoverrideinteractionchannels).
