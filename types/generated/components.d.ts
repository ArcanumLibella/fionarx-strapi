import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksButton extends Schema.Component {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    style: Attribute.Enumeration<['basic', 'large']>;
    isCentered: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface BlocksCardPrestation extends Schema.Component {
  collectionName: 'components_blocks_card_prestations';
  info: {
    displayName: 'CardPrestation';
    icon: 'handHeart';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    slug: Attribute.String;
  };
}

export interface BlocksItemList extends Schema.Component {
  collectionName: 'components_blocks_item_lists';
  info: {
    displayName: 'Item list';
    icon: 'check';
    description: '';
  };
  attributes: {
    number: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

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

export interface BlocksList extends Schema.Component {
  collectionName: 'components_blocks_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    item: Attribute.Component<'blocks.item-list', true>;
  };
}

export interface BlocksPrestations extends Schema.Component {
  collectionName: 'components_blocks_prestations';
  info: {
    displayName: 'Prestations';
    icon: 'grid';
  };
  attributes: {
    cardsPrestation: Attribute.Component<'blocks.card-prestation', true>;
  };
}

export interface BlocksQuote extends Schema.Component {
  collectionName: 'components_blocks_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    quoteContent: Attribute.Text & Attribute.Required;
  };
}

export interface BlocksSeparator extends Schema.Component {
  collectionName: 'components_blocks_separators';
  info: {
    displayName: 'Separator';
    icon: 'filter';
  };
  attributes: {
    separator: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface BlocksSpacer extends Schema.Component {
  collectionName: 'components_blocks_spacers';
  info: {
    displayName: 'Spacer';
    icon: 'server';
  };
  attributes: {
    mobileSize: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<8>;
    size: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<16>;
  };
}

export interface BlocksStackItem extends Schema.Component {
  collectionName: 'components_blocks_stack_items';
  info: {
    displayName: 'StackItem';
    icon: 'check';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface BlocksStack extends Schema.Component {
  collectionName: 'components_blocks_stacks';
  info: {
    displayName: 'Stack';
    icon: 'bulletList';
  };
  attributes: {
    items: Attribute.Component<'blocks.stack-item', true>;
  };
}

export interface BlocksText extends Schema.Component {
  collectionName: 'components_blocks_texts';
  info: {
    displayName: 'Text';
    icon: 'feather';
  };
  attributes: {
    textContent: Attribute.Blocks;
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

export interface SeoMetadata extends Schema.Component {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'Metadata';
    icon: 'globe';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.button': BlocksButton;
      'blocks.card-prestation': BlocksCardPrestation;
      'blocks.item-list': BlocksItemList;
      'blocks.link': BlocksLink;
      'blocks.list': BlocksList;
      'blocks.prestations': BlocksPrestations;
      'blocks.quote': BlocksQuote;
      'blocks.separator': BlocksSeparator;
      'blocks.spacer': BlocksSpacer;
      'blocks.stack-item': BlocksStackItem;
      'blocks.stack': BlocksStack;
      'blocks.text': BlocksText;
      'global.hero': GlobalHero;
      'global.menu': GlobalMenu;
      'global.socials': GlobalSocials;
      'seo.metadata': SeoMetadata;
    }
  }
}
