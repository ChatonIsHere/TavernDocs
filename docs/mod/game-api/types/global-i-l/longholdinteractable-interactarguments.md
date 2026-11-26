---
title: "LongHoldInteractable.InteractArguments"
description: "Private network argument sent from the client to say whether a hold was long or short."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LongHoldInteractable.InteractArguments

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private network argument sent from the client to say whether a hold was long or short.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LongHoldInteractable`](/mod/game-api/types/global-i-l/longholdinteractable)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-interactoridentifier" /><code>{"uint interactorIdentifier"}</code> | Entity ID of the controller that held. The server checks it belongs to the sender. |
| <Link id="m-islonghold" /><code>{"bool isLongHold"}</code> | True for a long hold, false for a short one. |

## Used in

Members of other types that take, return or hold a `InteractArguments`:

[`LongHoldInteractable.syncInteract`](/mod/game-api/types/global-i-l/longholdinteractable#m-syncinteract), [`LongHoldInteractable.SyncInteract`](/mod/game-api/types/global-i-l/longholdinteractable#m-syncinteract-2).
