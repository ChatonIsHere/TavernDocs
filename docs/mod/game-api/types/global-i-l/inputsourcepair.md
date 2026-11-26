---
title: "InputSourcePair"
description: "An input source made of a primary and optional secondary input (for example a key and a button), built by ControllerAction from a platform mapping."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputSourcePair

A **class** in `Root.Township`, the global namespace.

An input source made of a primary and optional secondary input (for example a key and a button), built by `ControllerAction` from a platform mapping.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`InputSource`](/mod/game-api/types/global-i-l/inputsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputSourcePair()"}</code> | Creates an `InputSourcePair` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller"}</code> | The hand's `PlayerInput` this pair belongs to. |
| <Link id="m-parentmapping" /><code><Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" parentMapping"}</code> | Platform mapping the pair was built from. |
| <Link id="m-primaryinput" /><code><Link to="/mod/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" primaryInput"}</code> | First input source. |
| <Link id="m-secondaryinput" /><code><Link to="/mod/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" secondaryInput"}</code> | Second input source, if any. |

## Used in

Members of other types that take, return or hold a `InputSourcePair`:

[`ControllerAction.allInputSources`](/mod/game-api/types/global-c-d/controlleraction#m-allinputsources), [`ControllerAction.PopulateInputSourcePair`](/mod/game-api/types/global-c-d/controlleraction#m-populateinputsourcepair), [`ControllerAction.RemoveInputSource`](/mod/game-api/types/global-c-d/controlleraction#m-removeinputsource), [`ControllerAction.SetupListeners`](/mod/game-api/types/global-c-d/controlleraction#m-setuplisteners).
