import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBadgesCarousel extends Schema.Component {
  collectionName: 'components_shared_badges_carousels';
  info: {
    displayName: 'badges-carousel';
    description: '';
  };
  attributes: {
    badges: Attribute.Component<'shared.badge', true>;
  };
}

export interface BlocksBanner extends Schema.Component {
  collectionName: 'components_blocks_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    cta: Attribute.Component<'blocks.button'>;
    startDate: Attribute.DateTime;
    endDate: Attribute.DateTime;
  };
}

export interface BlocksButton extends Schema.Component {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['gbtn-1', 'gbtn-2', 'gbtn-3']> &
      Attribute.DefaultTo<'gbtn-1'>;
    href: Attribute.String;
  };
}

export interface BlocksIntroHero extends Schema.Component {
  collectionName: 'components_blocks_intro_heroes';
  info: {
    displayName: 'intro-hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    label: Attribute.String;
    background: Attribute.Media;
    button: Attribute.String;
  };
}

export interface GlobalConfig extends Schema.Component {
  collectionName: 'components_global_configs';
  info: {
    displayName: 'config';
    description: '';
  };
  attributes: {
    country: Attribute.String;
    locale: Attribute.String & Attribute.Required;
    language: Attribute.Component<'global.languages'>;
    brand: Attribute.Enumeration<['NIPT', 'NIFTY']> &
      Attribute.Required &
      Attribute.DefaultTo<'NIPT'>;
    prices: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    checkout: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    paypal: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    clinics: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    published: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface GlobalLanguages extends Schema.Component {
  collectionName: 'components_global_languages';
  info: {
    displayName: 'languages';
  };
  attributes: {
    language: Attribute.String;
    name: Attribute.String;
    flag: Attribute.Media;
    locale: Attribute.String;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedBadge extends Schema.Component {
  collectionName: 'components_shared_badges';
  info: {
    displayName: 'badge';
  };
  attributes: {
    tagline: Attribute.String;
    badge: Attribute.Media;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    target: Attribute.Enumeration<['_self', '_blank']> & Attribute.Required;
  };
}

export interface SharedRatings extends Schema.Component {
  collectionName: 'components_shared_ratings';
  info: {
    displayName: 'ratings';
  };
  attributes: {
    Icons: Attribute.Media;
    Link: Attribute.Component<'shared.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.badges-carousel': BlocksBadgesCarousel;
      'blocks.banner': BlocksBanner;
      'blocks.button': BlocksButton;
      'blocks.intro-hero': BlocksIntroHero;
      'global.config': GlobalConfig;
      'global.languages': GlobalLanguages;
      'global.navigation': GlobalNavigation;
      'shared.badge': SharedBadge;
      'shared.link': SharedLink;
      'shared.ratings': SharedRatings;
    }
  }
}
