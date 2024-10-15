import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAccordion extends Schema.Component {
  collectionName: 'components_blocks_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String;
    features: Attribute.Blocks;
    deliverables: Attribute.Blocks;
  };
}

export interface BlocksAccordionsGroup extends Schema.Component {
  collectionName: 'components_blocks_accordions_groups';
  info: {
    displayName: 'AccordionsGroup';
    icon: 'grid';
  };
  attributes: {
    accordion: Attribute.Component<'blocks.accordion', true>;
  };
}

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

export interface BlocksCardCta extends Schema.Component {
  collectionName: 'components_blocks_card_ctas';
  info: {
    displayName: 'CardCTA';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    buttonLabel: Attribute.String;
    buttonSlug: Attribute.String;
    isExternal: Attribute.Boolean;
  };
}

export interface BlocksCardOption extends Schema.Component {
  collectionName: 'components_blocks_card_options';
  info: {
    displayName: 'CardOption';
    icon: 'grid';
    description: '';
  };
  attributes: {
    number: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    ctaLabel: Attribute.String;
    ctaLink: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
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

export interface BlocksCheckLists extends Schema.Component {
  collectionName: 'components_blocks_check_lists';
  info: {
    displayName: 'Checklists';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    checklists: Attribute.Component<'blocks.checklist', true>;
  };
}

export interface BlocksChecklist extends Schema.Component {
  collectionName: 'components_blocks_checklists';
  info: {
    displayName: 'Checklist';
    icon: 'check';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface BlocksFootNote extends Schema.Component {
  collectionName: 'components_blocks_foot_notes';
  info: {
    displayName: 'FootNote';
    icon: 'file';
    description: '';
  };
  attributes: {
    note: Attribute.Blocks;
  };
}

export interface BlocksFooter extends Schema.Component {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'Footer';
    icon: 'apps';
    description: '';
  };
  attributes: {
    button: Attribute.Component<'blocks.button'>;
    title: Attribute.Text;
    subtitle: Attribute.Text;
  };
}

export interface BlocksFormulaPack extends Schema.Component {
  collectionName: 'components_blocks_formula-packs';
  info: {
    displayName: 'FormulaPack';
    icon: 'archive';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'blocks.item-list', true>;
    mentoringTitle: Attribute.Text;
    mentoringSubtitle: Attribute.Text;
    mentoringDescription: Attribute.Text;
    ctaTitle: Attribute.String;
    ctaPricing: Attribute.String;
    ctaDetail: Attribute.String;
    hasSupport: Attribute.Boolean & Attribute.DefaultTo<false>;
    supportTitle: Attribute.String;
    supportDescription: Attribute.String;
  };
}

export interface BlocksImagesSlider extends Schema.Component {
  collectionName: 'components_blocks_images_sliders';
  info: {
    displayName: 'ImagesSlider';
    icon: 'landscape';
  };
  attributes: {
    images: Attribute.Media<'images', true>;
  };
}

export interface BlocksIntroduction extends Schema.Component {
  collectionName: 'components_blocks_introductions';
  info: {
    displayName: 'Introduction';
    icon: 'bold';
  };
  attributes: {
    content: Attribute.Blocks;
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
    content: Attribute.Blocks;
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

export interface BlocksOptions extends Schema.Component {
  collectionName: 'components_blocks_options';
  info: {
    displayName: 'Options';
    icon: 'apps';
    description: '';
  };
  attributes: {
    options: Attribute.Component<'blocks.card-option', true>;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface BlocksPrestations extends Schema.Component {
  collectionName: 'components_blocks_prestations';
  info: {
    displayName: 'Prestations';
    icon: 'grid';
    description: '';
  };
  attributes: {
    cardsPrestation: Attribute.Component<'blocks.card-prestation', true>;
    title: Attribute.Text;
  };
}

export interface BlocksPricingCard extends Schema.Component {
  collectionName: 'components_blocks_pricing_cards';
  info: {
    displayName: 'PricingCard';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String;
    formula: Attribute.String;
    isFrom: Attribute.Boolean & Attribute.DefaultTo<false>;
    price: Attribute.Integer & Attribute.Required;
    item1: Attribute.String;
    item2: Attribute.String;
    item3: Attribute.String;
    item4: Attribute.String;
    item5: Attribute.String;
    item6: Attribute.String;
    item7: Attribute.String;
    item8: Attribute.String;
    item9: Attribute.String;
    time: Attribute.Integer;
    supportTitle: Attribute.String;
    supportDescription: Attribute.String;
    description: Attribute.Blocks;
    hasSupport: Attribute.Boolean & Attribute.DefaultTo<false>;
    mentoringTitle: Attribute.String;
    mentoringDescription: Attribute.String;
    isDisabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface BlocksPricings extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricings';
    icon: 'grid';
    description: '';
  };
  attributes: {
    pricingCards: Attribute.Component<'blocks.pricing-card', true>;
    title: Attribute.Text;
    description: Attribute.Text;
    cardCTA: Attribute.Component<'blocks.card-cta'>;
  };
}

export interface BlocksQuote extends Schema.Component {
  collectionName: 'components_blocks_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
    description: '';
  };
  attributes: {
    quotes: Attribute.Blocks;
  };
}

export interface BlocksSectionCta extends Schema.Component {
  collectionName: 'components_blocks_section_ctas';
  info: {
    displayName: 'SectionCTA';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.Text;
    subtitle: Attribute.Text;
    button: Attribute.Component<'blocks.button'>;
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

export interface BlocksStage extends Schema.Component {
  collectionName: 'components_blocks_stage';
  info: {
    displayName: 'Stage';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    number: Attribute.Integer;
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface BlocksStages extends Schema.Component {
  collectionName: 'components_blocks_stages';
  info: {
    displayName: 'Stages';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    stages: Attribute.Component<'blocks.stage', true>;
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

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String;
    role: Attribute.String;
    location: Attribute.String;
    mail: Attribute.String;
    menu: Attribute.Component<'global.menu', true>;
    legalInformation: Attribute.Component<'global.menu', true>;
  };
}

export interface GlobalHero extends Schema.Component {
  collectionName: 'components_global_heroes';
  info: {
    displayName: 'Hero';
    icon: 'house';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    isMainTitle: Attribute.Boolean & Attribute.DefaultTo<false>;
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
    description: '';
  };
  attributes: {
    linkedin: Attribute.String;
    malt: Attribute.String;
    github: Attribute.String;
    instagram: Attribute.String;
    dribbble: Attribute.String;
    behance: Attribute.String;
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

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.accordion': BlocksAccordion;
      'blocks.accordions-group': BlocksAccordionsGroup;
      'blocks.button': BlocksButton;
      'blocks.card-cta': BlocksCardCta;
      'blocks.card-option': BlocksCardOption;
      'blocks.card-prestation': BlocksCardPrestation;
      'blocks.check-lists': BlocksCheckLists;
      'blocks.checklist': BlocksChecklist;
      'blocks.foot-note': BlocksFootNote;
      'blocks.footer': BlocksFooter;
      'blocks.formula-pack': BlocksFormulaPack;
      'blocks.images-slider': BlocksImagesSlider;
      'blocks.introduction': BlocksIntroduction;
      'blocks.item-list': BlocksItemList;
      'blocks.link': BlocksLink;
      'blocks.options': BlocksOptions;
      'blocks.prestations': BlocksPrestations;
      'blocks.pricing-card': BlocksPricingCard;
      'blocks.pricings': BlocksPricings;
      'blocks.quote': BlocksQuote;
      'blocks.section-cta': BlocksSectionCta;
      'blocks.separator': BlocksSeparator;
      'blocks.spacer': BlocksSpacer;
      'blocks.stack-item': BlocksStackItem;
      'blocks.stack': BlocksStack;
      'blocks.stage': BlocksStage;
      'blocks.stages': BlocksStages;
      'blocks.text': BlocksText;
      'global.footer': GlobalFooter;
      'global.hero': GlobalHero;
      'global.menu': GlobalMenu;
      'global.socials': GlobalSocials;
      'seo.metadata': SeoMetadata;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
