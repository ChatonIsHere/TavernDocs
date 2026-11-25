---
title: "INetworkInteractArgument"
description: "Data sent over the network to start an interaction, such as GrabPointArguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkInteractArgument

An **interface** in `Root.Township`, no namespace.

Data sent over the network to start an interaction, such as `GrabPointArguments`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`GrabPointArguments`](/game-api/types/global-e-h/grabpointarguments), [`InteractArguments`](/game-api/types/global-i-l/interactarguments)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isaccessingscore" /><code>{"bool IsAccessingScore { get; }"}</code> | When true, `Interactable.NetworkStartInteraction` checks the interaction and logs if it fails. It still goes ahead. |
| <Link id="m-isforced" /><code>{"bool IsForced { get; }"}</code> | Whether the interaction was forced. |
| <Link id="m-isforcinghold" /><code>{"bool IsForcingHold { get; }"}</code> | Whether the hold is forced. |
| <Link id="m-target" /><code>{"uint Target { get; }"}</code> | ID of the interactable target. |

## Used in

Members of other types that take, return or hold a `INetworkInteractArgument`:

[`Interactable.NetworkStartInteraction`](/game-api/types/global-i-l/interactable#m-networkstartinteraction), [`Interactor.ReadStartArguments`](/game-api/types/global-i-l/interactor#m-readstartarguments), [`Pickup.NetworkStartInteraction`](/game-api/types/global-p/pickup#m-networkstartinteraction).
