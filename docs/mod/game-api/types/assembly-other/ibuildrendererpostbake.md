---
title: "IBuildRendererPostBake"
description: "For components that need a step after a build renderer bake."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IBuildRendererPostBake

An **interface** in `Alta.Build`, the global namespace.

For components that need a step after a build renderer bake. `BuildRendererBakeable` calls `PostBake` on every one under the target once baking finishes. Build-time only.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`RecyclerOutputSlot`](/mod/game-api/types/alta-crafting/recycleroutputslot), [`RecipePlacer`](/mod/game-api/types/alta-crafting/recipeplacer), [`LevelSelector`](/mod/game-api/types/alta-world-generation/levelselector), [`CaveLayerStaticObject`](/mod/game-api/types/alta-world/cavelayerstaticobject), [`FireDissolve`](/mod/game-api/types/alta-stats-effects/firedissolve), [`TemperatureToMaterial`](/mod/game-api/types/alta-stats-effects/temperaturetomaterial), [`StackingComponent`](/mod/game-api/types/alta-items/stackingcomponent), [`PlatformLight`](/mod/game-api/types/alta-world/platformlight), [`LiquidContainerLid`](/mod/game-api/types/alta-stats-effects/liquidcontainerlid), [`LiquidSurfaceVisual`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual), [`TabbedPanel`](/mod/game-api/types/alta-menus/tabbedpanel), [`NetworkAnimator`](/mod/game-api/types/alta-networking/networkanimator), [`ClientOnly`](/mod/game-api/types/alta-networking/clientonly), [`LevelEffectSize`](/mod/game-api/types/alta-stats-effects/leveleffectsize), [`RespawnShrinePowerIndicator`](/mod/game-api/types/game-other-namespaces/respawnshrinepowerindicator), [`BoughtSkillVisualizer`](/mod/game-api/types/global-a-b/boughtskillvisualizer), [`CastToSurfaceEffect`](/mod/game-api/types/global-c-d/casttosurfaceeffect), [`ColoredParticleSystem`](/mod/game-api/types/global-c-d/coloredparticlesystem), [`ComponentGroup<T>`](/mod/game-api/types/global-c-d/componentgroup-t), [`CosmeticParticleColorer`](/mod/game-api/types/global-c-d/cosmeticparticlecolorer), [`DissolvingEffect`](/mod/game-api/types/global-c-d/dissolvingeffect), [`DurabilityModule`](/mod/game-api/types/global-c-d/durabilitymodule), [`EffectReleaseOnFade`](/mod/game-api/types/global-e-h/effectreleaseonfade), [`EmberComposerFireEffect`](/mod/game-api/types/global-e-h/embercomposerfireeffect), [`EmissionControl`](/mod/game-api/types/global-e-h/emissioncontrol), [`FadeInOutBase`](/mod/game-api/types/global-e-h/fadeinoutbase), [`ClimbingTowerProgressionVisualizer`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer), [`PooledParticleSystemManipulator`](/mod/game-api/types/game-other-namespaces/pooledparticlesystemmanipulator), [`FestiveFeature`](/mod/game-api/types/global-e-h/festivefeature), [`LocalPlayer`](/mod/game-api/types/global-i-l/localplayer), [`MaterialSwapper`](/mod/game-api/types/global-m-o/materialswapper), [`PhysicalMaterialPart`](/mod/game-api/types/global-p/physicalmaterialpart), [`Pickup`](/mod/game-api/types/global-p/pickup), [`PooledParticleSystemMeshEmision`](/mod/game-api/types/global-p/pooledparticlesystemmeshemision), [`ProgressBar`](/mod/game-api/types/global-p/progressbar), [`PropertyBlockColorAccessor`](/mod/game-api/types/global-p/propertyblockcoloraccessor), [`ServerElement`](/mod/game-api/types/global-s/serverelement), [`SpectralMaterialTransition`](/mod/game-api/types/global-s/spectralmaterialtransition), [`StartupLoader`](/mod/game-api/types/global-s/startuploader), [`SwipePromptController`](/mod/game-api/types/global-s/swipepromptcontroller), [`TemperatureVisuals`](/mod/game-api/types/global-t-x/temperaturevisuals), [`VisibilityDetector`](/mod/game-api/types/global-t-x/visibilitydetector)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"void PostBake()"}</code> | <span className="api-desc">Called on each such component under the target after all bakeables have baked.</span> |
