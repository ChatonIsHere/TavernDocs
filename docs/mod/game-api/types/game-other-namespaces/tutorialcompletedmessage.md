---
title: "TutorialCompletedMessage"
description: "Title and description text shown when a micro tutorial is completed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TutorialCompletedMessage

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Title and description text shown when a micro tutorial is completed. Set in the inspector.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TutorialCompletedMessage()"}</code> | Creates a `TutorialCompletedMessage` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"string Description { get; private set; }"}</code> | Body text of the completion message. |
| <Link id="m-title" /><code>{"string Title { get; private set; }"}</code> | Heading of the completion message. |

## Used in

Members of other types that take, return or hold a `TutorialCompletedMessage`:

[`IMicroTutorialSettings.CompletedMessage`](/mod/game-api/types/game-other-namespaces/imicrotutorialsettings#m-completedmessage), [`MicroTutorialSettings.CompletedMessage`](/mod/game-api/types/game-other-namespaces/microtutorialsettings#m-completedmessage).
