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

export interface BlocksInfluencersCarousel extends Schema.Component {
  collectionName: 'components_blocks_influencers_carousels';
  info: {
    displayName: 'influencers-carousel';
    description: '';
  };
  attributes: {
    button: Attribute.String;
    title: Attribute.String;
    subtitle: Attribute.String;
    hideRatings: Attribute.Boolean & Attribute.DefaultTo<false>;
    ratingsText: Attribute.String;
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
    text: Attribute.Text;
    label: Attribute.String;
    background: Attribute.Media;
    button: Attribute.String;
    updated: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BlocksIntroUvp extends Schema.Component {
  collectionName: 'components_blocks_intro_uvps';
  info: {
    displayName: 'intro-uvp';
    description: '';
  };
  attributes: {
    points: Attribute.Component<'shared.uvp-points', true>;
    updated: Attribute.Boolean & Attribute.DefaultTo<false>;
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
    brand: Attribute.Enumeration<['NIPT', 'NIFTY']> &
      Attribute.Required &
      Attribute.DefaultTo<'NIPT'>;
    visibility: Attribute.Component<'shared.visibility'>;
    partnerId: Attribute.String;
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

export interface SharedUvpPoints extends Schema.Component {
  collectionName: 'components_shared_uvp_points';
  info: {
    displayName: 'uvp-points';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    text: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SharedVisibility extends Schema.Component {
  collectionName: 'components_shared_visibilities';
  info: {
    displayName: 'visibility';
  };
  attributes: {
    prices: Attribute.Boolean & Attribute.DefaultTo<false>;
    checkout: Attribute.Boolean & Attribute.DefaultTo<false>;
    paypal: Attribute.Boolean & Attribute.DefaultTo<false>;
    promoCode: Attribute.Boolean & Attribute.DefaultTo<false>;
    clinics: Attribute.Boolean & Attribute.DefaultTo<false>;
    checkoutSelectClinic: Attribute.Boolean & Attribute.DefaultTo<false>;
    hiddenCheckout: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.badges-carousel': BlocksBadgesCarousel;
      'blocks.banner': BlocksBanner;
      'blocks.button': BlocksButton;
      'blocks.influencers-carousel': BlocksInfluencersCarousel;
      'blocks.intro-hero': BlocksIntroHero;
      'blocks.intro-uvp': BlocksIntroUvp;
      'global.config': GlobalConfig;
      'global.languages': GlobalLanguages;
      'global.navigation': GlobalNavigation;
      'shared.badge': SharedBadge;
      'shared.link': SharedLink;
      'shared.ratings': SharedRatings;
      'shared.uvp-points': SharedUvpPoints;
      'shared.visibility': SharedVisibility;
    }
  }
}
