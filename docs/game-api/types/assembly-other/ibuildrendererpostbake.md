---
title: "IBuildRendererPostBake"
description: "For components that need a step after a build renderer bake."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IBuildRendererPostBake

An **interface** in `Alta.Build`, no namespace.

For components that need a step after a build renderer bake. `BuildRendererBakeable` calls `PostBake` on every one under the target once baking finishes. Build-time only.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`RecyclerOutputSlot`](/game-api/types/alta-crafting/recycleroutputslot), [`RecipePlacer`](/game-api/types/alta-crafting/recipeplacer), [`LevelSelector`](/game-api/types/alta-world-generation/levelselector), [`CaveLayerStaticObject`](/game-api/types/alta-world/cavelayerstaticobject), [`FireDissolve`](/game-api/types/alta-stats-effects/firedissolve), [`TemperatureToMaterial`](/game-api/types/alta-stats-effects/temperaturetomaterial), [`StackingComponent`](/game-api/types/alta-items/stackingcomponent), [`PlatformLight`](/game-api/types/alta-world/platformlight), [`LiquidContainerLid`](/game-api/types/alta-stats-effects/liquidcontainerlid), [`LiquidSurfaceVisual`](/game-api/types/alta-stats-effects/liquidsurfacevisual), [`TabbedPanel`](/game-api/types/alta-menus/tabbedpanel), [`NetworkAnimator`](/game-api/types/alta-networking/networkanimator), [`ClientOnly`](/game-api/types/alta-networking/clientonly), [`LevelEffectSize`](/game-api/types/alta-stats-effects/leveleffectsize), [`RespawnShrinePowerIndicator`](/game-api/types/game-other-namespaces/respawnshrinepowerindicator), [`BoughtSkillVisualizer`](/game-api/types/global-a-b/boughtskillvisualizer), [`CastToSurfaceEffect`](/game-api/types/global-c-d/casttosurfaceeffect), [`ColoredParticleSystem`](/game-api/types/global-c-d/coloredparticlesystem), [`ComponentGroup<T>`](/game-api/types/global-c-d/componentgroup-t), [`CosmeticParticleColorer`](/game-api/types/global-c-d/cosmeticparticlecolorer), [`DissolvingEffect`](/game-api/types/global-c-d/dissolvingeffect), [`DurabilityModule`](/game-api/types/global-c-d/durabilitymodule), [`EffectReleaseOnFade`](/game-api/types/global-e-h/effectreleaseonfade), [`EmberComposerFireEffect`](/game-api/types/global-e-h/embercomposerfireeffect), [`EmissionControl`](/game-api/types/global-e-h/emissioncontrol), [`FadeInOutBase`](/game-api/types/global-e-h/fadeinoutbase), [`ClimbingTowerProgressionVisualizer`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer), [`PooledParticleSystemManipulator`](/game-api/types/game-other-namespaces/pooledparticlesystemmanipulator), [`FestiveFeature`](/game-api/types/global-e-h/festivefeature), [`LocalPlayer`](/game-api/types/global-i-l/localplayer), [`MaterialSwapper`](/game-api/types/global-m-o/materialswapper), [`PhysicalMaterialPart`](/game-api/types/global-p/physicalmaterialpart), [`Pickup`](/game-api/types/global-p/pickup), [`PooledParticleSystemMeshEmision`](/game-api/types/global-p/pooledparticlesystemmeshemision), [`ProgressBar`](/game-api/types/global-p/progressbar), [`PropertyBlockColorAccessor`](/game-api/types/global-p/propertyblockcoloraccessor), [`ServerElement`](/game-api/types/global-s/serverelement), [`SpectralMaterialTransition`](/game-api/types/global-s/spectralmaterialtransition), [`StartupLoader`](/game-api/types/global-s/startuploader), [`SwipePromptController`](/game-api/types/global-s/swipepromptcontroller), [`TemperatureVisuals`](/game-api/types/global-t-x/temperaturevisuals), [`VisibilityDetector`](/game-api/types/global-t-x/visibilitydetector)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"void PostBake()"}</code> | Called on each such component under the target after all bakeables have baked. |
