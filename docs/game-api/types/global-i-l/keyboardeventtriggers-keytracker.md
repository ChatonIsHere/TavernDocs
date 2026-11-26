---
title: "KeyboardEventTriggers.KeyTracker"
description: "Tracks one keyboard key and raises down and up events for it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyboardEventTriggers.KeyTracker

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Tracks one keyboard key and raises down and up events for it.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`KeyboardEventTriggers`](/game-api/types/global-i-l/keyboardeventtriggers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyTracker(Key key)"}</code> | Creates a `KeyboardEventTriggers.KeyTracker` from `key`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> | True only while both a down and an up handler are attached. |
| <Link id="m-key" /><code>{"Key Key { get; }"}</code> | The key tracked. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-keypresseddown" /><code>{"event "}<Link to="/game-api/types/global-i-l/keyeventhandler">{"KeyEventHandler"}</Link>{" KeyPressedDown"}</code> | Raised the frame the key is pressed. |
| <Link id="m-keypressedup" /><code>{"event "}<Link to="/game-api/types/global-i-l/keyeventhandler">{"KeyEventHandler"}</Link>{" KeyPressedUp"}</code> | Raised the frame the key is released. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"void Update()"}</code> | Checks the key on the current keyboard and raises the matching event. |

## Used in

Members of other types that take, return or hold a `KeyTracker`:

[`KeyboardEventTriggers.mappedTrackers`](/game-api/types/global-i-l/keyboardeventtriggers#m-mappedtrackers).
