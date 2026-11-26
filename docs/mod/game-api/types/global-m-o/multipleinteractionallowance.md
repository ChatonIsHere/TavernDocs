---
title: "MultipleInteractionAllowance"
description: "Flags on an interactable for whether it can be held by both hands of one player and by more than one player at once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultipleInteractionAllowance

An **enum** in `Root.Township`, the global namespace.

Flags on an interactable for whether it can be held by both hands of one player and by more than one player at once.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-multiplehandsperplayer" /><code>{"MultipleHandsPerPlayer = 1"}</code> |
| <Link id="m-multipleplayers" /><code>{"MultiplePlayers = 2"}</code> |

## Used in

Members of other types that take, return or hold a `MultipleInteractionAllowance`:

[`Interactable.DefaultMultipleInteractionAllowance`](/mod/game-api/types/global-i-l/interactable#m-defaultmultipleinteractionallowance), [`Interactable.multipleAllowance`](/mod/game-api/types/global-i-l/interactable#m-multipleallowance), [`Interactable.MultipleAllowance`](/mod/game-api/types/global-i-l/interactable#m-multipleallowance-2), [`MultipleInteractionAllowanceHelper.ContainsAll`](/mod/game-api/types/global-m-o/multipleinteractionallowancehelper#m-containsall), [`MultipleInteractionAllowanceHelper.ContainsAny`](/mod/game-api/types/global-m-o/multipleinteractionallowancehelper#m-containsany), [`Pickup.DefaultMultipleInteractionAllowance`](/mod/game-api/types/global-p/pickup#m-defaultmultipleinteractionallowance), [`PickupContainer.DefaultMultipleInteractionAllowance`](/mod/game-api/types/global-p/pickupcontainer#m-defaultmultipleinteractionallowance).
