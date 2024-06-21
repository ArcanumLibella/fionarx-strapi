import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalHero extends Schema.Component {
  collectionName: 'components_global_heroes';
  info: {
    displayName: 'Hero';
    icon: 'house';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.hero': GlobalHero;
    }
  }
}
