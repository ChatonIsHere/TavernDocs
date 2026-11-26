---
title: "InputSourcePair"
description: "An input source made of a primary and optional secondary input (for example a key and a button), built by ControllerAction from a platform mapping."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputSourcePair

A **class** in `Root.Township`, no namespace.

An input source made of a primary and optional secondary input (for example a key and a button), built by `ControllerAction` from a platform mapping.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`InputSource`](/game-api/types/global-i-l/inputsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputSourcePair()"}</code> | Creates an `InputSourcePair` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller"}</code> | The hand's `PlayerInput` this pair belongs to. |
| <Link id="m-parentmapping" /><code><Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" parentMapping"}</code> | Platform mapping the pair was built from. |
| <Link id="m-primaryinput" /><code><Link to="/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" primaryInput"}</code> | First input source. |
| <Link id="m-secondaryinput" /><code><Link to="/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" secondaryInput"}</code> | Second input source, if any. |

## Used in

Members of other types that take, return or hold a `InputSourcePair`:

[`ControllerAction.allInputSources`](/game-api/types/global-c-d/controlleraction#m-allinputsources), [`ControllerAction.PopulateInputSourcePair`](/game-api/types/global-c-d/controlleraction#m-populateinputsourcepair), [`ControllerAction.RemoveInputSource`](/game-api/types/global-c-d/controlleraction#m-removeinputsource), [`ControllerAction.SetupListeners`](/game-api/types/global-c-d/controlleraction#m-setuplisteners).
