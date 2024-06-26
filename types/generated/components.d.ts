import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksLink extends Schema.Component {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

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

export interface GlobalMenu extends Schema.Component {
  collectionName: 'components_global_menus';
  info: {
    displayName: 'Menu';
    icon: 'apps';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface GlobalSocials extends Schema.Component {
  collectionName: 'components_global_socials';
  info: {
    displayName: 'Socials';
    icon: 'chartBubble';
  };
  attributes: {
    linkedin: Attribute.String;
    malt: Attribute.String;
    github: Attribute.String;
    instagram: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.link': BlocksLink;
      'global.hero': GlobalHero;
      'global.menu': GlobalMenu;
      'global.socials': GlobalSocials;
    }
  }
}
