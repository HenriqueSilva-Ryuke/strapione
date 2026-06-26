import type { Schema, Struct } from '@strapi/strapi';

export interface HeroCategoryHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_category_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'picture';
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero-category.hero-section': HeroCategoryHeroSection;
    }
  }
}
