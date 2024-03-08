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
    startDate: Attribute.DateTime;
    endDate: Attribute.DateTime;
  };
}

export interface BlocksHeroSection extends Schema.Component {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    tagline: Attribute.String;
    background: Attribute.Media;
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
      'blocks.hero-section': BlocksHeroSection;
      'global.navigation': GlobalNavigation;
      'shared.badge': SharedBadge;
      'shared.link': SharedLink;
      'shared.ratings': SharedRatings;
    }
  }
}
