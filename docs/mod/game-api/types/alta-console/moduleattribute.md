---
title: "ModuleAttribute"
description: "Marks a static class as a console command module."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModuleAttribute

A **class** in `Root.Township`, `Alta.Console`.

Marks a static class as a console command module. Its name becomes the word before the module's commands; modules can nest.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`
- **Documented in** [Console, utilities and Alta assemblies](/mod/game-api/console-and-utilities/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModuleAttribute(string name, string description)"}</code> | <span className="api-desc">Creates a `ModuleAttribute` from `name` and `description`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"string Description { get; private set; }"}</code> | <span className="api-desc">Help text for the module.</span> |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">The word typed to reach this module's commands, such as `caves`.</span> |
