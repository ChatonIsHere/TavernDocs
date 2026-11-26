---
title: "KeyboardEventTriggers.KeyTracker"
description: "Tracks one keyboard key and raises down and up events for it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyboardEventTriggers.KeyTracker

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Tracks one keyboard key and raises down and up events for it.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`KeyboardEventTriggers`](/mod/game-api/types/global-i-l/keyboardeventtriggers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyTracker(Key key)"}</code> | <span className="api-desc">Creates a `KeyboardEventTriggers.KeyTracker` from `key`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> | <span className="api-desc">True only while both a down and an up handler are attached.</span> |
| <Link id="m-key" /><code>{"Key Key { get; }"}</code> | <span className="api-desc">The key tracked.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-keypresseddown" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/keyeventhandler">{"KeyEventHandler"}</Link>{" KeyPressedDown"}</code> | <span className="api-desc">Raised the frame the key is pressed.</span> |
| <Link id="m-keypressedup" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/keyeventhandler">{"KeyEventHandler"}</Link>{" KeyPressedUp"}</code> | <span className="api-desc">Raised the frame the key is released.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Checks the key on the current keyboard and raises the matching event.</span> |

## Used in

Members of other types that take, return or hold a `KeyTracker`:

<div className="api-used-in">

[`KeyboardEventTriggers.mappedTrackers`](/mod/game-api/types/global-i-l/keyboardeventtriggers#m-mappedtrackers).

</div>
