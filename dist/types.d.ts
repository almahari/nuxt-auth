
import { ModuleOptions, ModuleHooks, ModuleRuntimeConfig, ModulePublicRuntimeConfig } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['auth']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['auth']?: ModuleOptions }
  interface NuxtHooks extends ModuleHooks {}
  interface RuntimeConfig extends ModuleRuntimeConfig {}
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}


export { default } from './module'
