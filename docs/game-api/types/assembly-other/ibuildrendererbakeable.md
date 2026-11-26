---
title: "IBuildRendererBakeable"
description: "Build-time hook for components that bake renderer data into a prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IBuildRendererBakeable

An **interface** in `Alta.Build`, no namespace.

Build-time hook for components that bake renderer data into a prefab. Bakers run in `SortingOrder` order.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`BuilderDock`](/game-api/types/alta-crafting/builderdock), [`CharacterEye`](/game-api/types/alta-player/charactereye), [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint), [`TargetCollector`](/game-api/types/alta-intelligence/targetcollector), [`AutomaticDockArea`](/game-api/types/alta-items/automaticdockarea), [`DockVisual`](/game-api/types/alta-items/dockvisual), [`PickupDock`](/game-api/types/alta-items/pickupdock), [`PositionProvider`](/game-api/types/alta-items/positionprovider), [`Book`](/game-api/types/alta-items/book), [`OculusDestinationController`](/game-api/types/alta-menus/oculusdestinationcontroller), [`HandCamera`](/game-api/types/alta-customization/handcamera), [`TreeAttachment`](/game-api/types/alta-crafting/treeattachment), [`BuildRendererBakeable`](/game-api/types/assembly-other/buildrendererbakeable), [`CleaningHelper`](/game-api/types/global-c-d/cleaninghelper), [`GymnasiumStaticContentSpawner`](/game-api/types/global-e-h/gymnasiumstaticcontentspawner), [`LocalPlayerAdvertisingTrophy`](/game-api/types/global-i-l/localplayeradvertisingtrophy), [`LocomotionModifier`](/game-api/types/global-i-l/locomotionmodifier), [`PlatformHierarchyShuffler`](/game-api/types/global-p/platformhierarchyshuffler), [`PlayerController`](/game-api/types/global-p/playercontroller), [`PlayerMessageDisplay`](/game-api/types/global-p/playermessagedisplay), [`PlayerSpecialEffectsController`](/game-api/types/global-p/playerspecialeffectscontroller), [`ShaderVariantWarmer`](/game-api/types/global-s/shadervariantwarmer), [`TextRenderer`](/game-api/types/global-t-x/textrenderer)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sortingorder" /><code>{"int SortingOrder { get; }"}</code> | Lower values bake first. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | Runs this component's bake, probably during the build or an editor bake. |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | Probably clears what an earlier bake produced. |
