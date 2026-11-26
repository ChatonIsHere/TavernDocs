---
title: "INetworkInteractArgument"
description: "Data sent over the network to start an interaction, such as GrabPointArguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkInteractArgument

An **interface** in `Root.Township`, the global namespace.

Data sent over the network to start an interaction, such as `GrabPointArguments`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`GrabPointArguments`](/mod/game-api/types/global-e-h/grabpointarguments), [`InteractArguments`](/mod/game-api/types/global-i-l/interactarguments)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isaccessingscore" /><code>{"bool IsAccessingScore { get; }"}</code> | <span className="api-desc">When true, `Interactable.NetworkStartInteraction` checks the interaction and logs if it fails. It still goes ahead.</span> |
| <Link id="m-isforced" /><code>{"bool IsForced { get; }"}</code> | <span className="api-desc">Whether the interaction was forced.</span> |
| <Link id="m-isforcinghold" /><code>{"bool IsForcingHold { get; }"}</code> | <span className="api-desc">Whether the hold is forced.</span> |
| <Link id="m-target" /><code>{"uint Target { get; }"}</code> | <span className="api-desc">ID of the interactable target.</span> |

## Used in

Members of other types that take, return or hold a `INetworkInteractArgument`:

<div className="api-used-in">

[`Interactable.NetworkStartInteraction`](/mod/game-api/types/global-i-l/interactable#m-networkstartinteraction), [`Interactor.ReadStartArguments`](/mod/game-api/types/global-i-l/interactor#m-readstartarguments), [`Pickup.NetworkStartInteraction`](/mod/game-api/types/global-p/pickup#m-networkstartinteraction).

</div>
