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
| <Link id="m-ctor" /><code>{"InputSourcePair()"}</code> | <span className="api-desc">Creates an `InputSourcePair` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller"}</code> | <span className="api-desc">The hand's `PlayerInput` this pair belongs to.</span> |
| <Link id="m-parentmapping" /><code><Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" parentMapping"}</code> | <span className="api-desc">Platform mapping the pair was built from.</span> |
| <Link id="m-primaryinput" /><code><Link to="/mod/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" primaryInput"}</code> | <span className="api-desc">First input source.</span> |
| <Link id="m-secondaryinput" /><code><Link to="/mod/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" secondaryInput"}</code> | <span className="api-desc">Second input source, if any.</span> |

## Used in

Members of other types that take, return or hold a `InputSourcePair`:

<div className="api-used-in">

[`ControllerAction.allInputSources`](/mod/game-api/types/global-c-d/controlleraction#m-allinputsources), [`ControllerAction.PopulateInputSourcePair`](/mod/game-api/types/global-c-d/controlleraction#m-populateinputsourcepair), [`ControllerAction.RemoveInputSource`](/mod/game-api/types/global-c-d/controlleraction#m-removeinputsource), [`ControllerAction.SetupListeners`](/mod/game-api/types/global-c-d/controlleraction#m-setuplisteners).

</div>
