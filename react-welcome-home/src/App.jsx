import React from 'react'
import data from './data/bikesonline-home.json'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import CategoryGrid from './components/CategoryGrid.jsx'
import ShopSplit from './components/ShopSplit.jsx'
import ValueProps from './components/ValueProps.jsx'
import CollectionBanners from './components/CollectionBanners.jsx'
import BrandStrip from './components/BrandStrip.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="page">
      <AnnouncementBar topBar={data.topBar} items={data.announcementBar} />
      <NavBar brand={data.site.name} region={data.site.region} links={data.nav} />

      <main>
        <Hero
          brand={data.hero.brand}
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          cta={data.hero.cta}
          tagline={data.site.tagline}
        />
        <BrandStrip brands={data.brands} />
        <CategoryGrid categories={data.categories} />
        <ShopSplit sections={data.shopSections} />
        <ValueProps tagline={data.site.tagline} props={data.valueProps} />
        <CollectionBanners banners={data.collectionBanners} />
        <Testimonials testimonials={data.testimonials} />
      </main>

      <Footer
        brand={data.site.name}
        region={data.site.region}
        columns={data.footer.columns}
        newsletter={data.footer.newsletter}
      />
    </div>
  )
}
