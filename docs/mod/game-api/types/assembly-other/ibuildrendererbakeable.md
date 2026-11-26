---
title: "IBuildRendererBakeable"
description: "Build-time hook for components that bake renderer data into a prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IBuildRendererBakeable

An **interface** in `Alta.Build`, the global namespace.

Build-time hook for components that bake renderer data into a prefab. Bakers run in `SortingOrder` order.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`BuilderDock`](/mod/game-api/types/alta-crafting/builderdock), [`CharacterEye`](/mod/game-api/types/alta-player/charactereye), [`HeatPoint`](/mod/game-api/types/alta-stats-effects/heatpoint), [`TargetCollector`](/mod/game-api/types/alta-intelligence/targetcollector), [`AutomaticDockArea`](/mod/game-api/types/alta-items/automaticdockarea), [`DockVisual`](/mod/game-api/types/alta-items/dockvisual), [`PickupDock`](/mod/game-api/types/alta-items/pickupdock), [`PositionProvider`](/mod/game-api/types/alta-items/positionprovider), [`Book`](/mod/game-api/types/alta-items/book), [`OculusDestinationController`](/mod/game-api/types/alta-menus/oculusdestinationcontroller), [`HandCamera`](/mod/game-api/types/alta-customization/handcamera), [`TreeAttachment`](/mod/game-api/types/alta-crafting/treeattachment), [`BuildRendererBakeable`](/mod/game-api/types/assembly-other/buildrendererbakeable), [`CleaningHelper`](/mod/game-api/types/global-c-d/cleaninghelper), [`GymnasiumStaticContentSpawner`](/mod/game-api/types/global-e-h/gymnasiumstaticcontentspawner), [`LocalPlayerAdvertisingTrophy`](/mod/game-api/types/global-i-l/localplayeradvertisingtrophy), [`LocomotionModifier`](/mod/game-api/types/global-i-l/locomotionmodifier), [`PlatformHierarchyShuffler`](/mod/game-api/types/global-p/platformhierarchyshuffler), [`PlayerController`](/mod/game-api/types/global-p/playercontroller), [`PlayerMessageDisplay`](/mod/game-api/types/global-p/playermessagedisplay), [`PlayerSpecialEffectsController`](/mod/game-api/types/global-p/playerspecialeffectscontroller), [`ShaderVariantWarmer`](/mod/game-api/types/global-s/shadervariantwarmer), [`TextRenderer`](/mod/game-api/types/global-t-x/textrenderer)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sortingorder" /><code>{"int SortingOrder { get; }"}</code> | <span className="api-desc">Lower values bake first.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | <span className="api-desc">Runs this component's bake, probably during the build or an editor bake.</span> |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | <span className="api-desc">Probably clears what an earlier bake produced.</span> |
