---
title: "PlatformConditionAttribute"
description: "Inspector attribute that marks a field as only relevant on certain platforms, either from PlatformFlags or an Android or desktop flag."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformConditionAttribute

A **class** in `Alta.Attributes`, no namespace.

Inspector attribute that marks a field as only relevant on certain platforms, either from `PlatformFlags` or an Android or desktop flag.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlatformConditionAttribute("}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime)"}</code> |
| <Link id="m-ctor-2" /><code>{"PlatformConditionAttribute(bool isAndroid)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-runtime" /><code><Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" Runtime { get; }"}</code> | The platforms the field applies to. The bool constructor gives Android, or Windows and Linux. |
