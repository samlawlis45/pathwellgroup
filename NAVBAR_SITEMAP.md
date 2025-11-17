# Pathwell Group - Navbar Sitemap

**Last Updated:** Current as of latest implementation

## Navigation Structure

### Desktop Navigation

#### 1. **Logistics** (Dropdown)
   - **Execution Services** (Section Header)
     - Freight Brokerage → `/solutions/logistics`
     - Managed Transportation (4PL) → `/solutions/logistics`
     - Parcel Optimization → `/solutions/connect/parcel`
   
   - **Shippers** (Sub-dropdown)
     - Shipper Solutions → `/solutions/logistics/shippers`
   
   - **Carriers** (Sub-dropdown)
     - Carrier Solutions → `/solutions/logistics/carriers`
     - Become a Carrier → `/solutions/logistics/carriers`
     - EDI Connectivity → `/solutions/connect`

#### 2. **Solutions** (Dropdown)
   - **Integration & Connectivity** (Sub-dropdown)
     - System Integration (ERP/TMS/WMS) → `/solutions/connect`
     - EDI Connectivity → `/solutions/connect`
     - API Connectivity → `/solutions/connect`
     - Carrier & Partner Onboarding → `/solutions/connect`
     - **TMS Solutions** (Section Header)
       - Oracle Transportation Management (OTM) → `/solutions/connect/tms`
       - SAP TM → `/solutions/connect/tms`
       - Blue Yonder → `/solutions/connect/tms`
   
   - **Technology Services** (Sub-dropdown)
     - Supply Chain Data Engineering → `/solutions/technology`
     - Visibility & Telemetry → `/solutions/technology`
     - Analytics & Reporting → `/solutions/technology`

#### 3. **Industries** (Dropdown)
   - Building Materials → `/industries`
   - Retail & E-Commerce → `/solutions/retail`
   - Manufacturers → `/solutions/manufacturers`
   - Chemicals → `/industries`
   - Oil & Gas → `/industries`
   - Medical Devices & Equipment → `/industries`

#### 4. **Insights** (Dropdown)
   - Blog → `/resources`
   - Case Studies → `/resources`
   - Whitepapers → `/resources`

#### 5. **Company** (Dropdown)
   - About → `/about`
   - Leadership → `/about#leadership`
   - Why Pathwell → `/why-pathwell`
   - Careers → `/careers`

#### 6. **Contact** (CTA Button)
   - Contact → `/contact`

---

### Mobile Navigation

The mobile navigation mirrors the desktop structure with collapsible sections:

#### 1. **Logistics** (Collapsible)
   - **Execution Services** (Section Header)
     - Freight Brokerage → `/solutions/logistics`
     - Managed Transportation (4PL) → `/solutions/logistics`
     - Parcel Optimization → `/solutions/connect/parcel`
   
   - **Shippers** (Nested Collapsible)
     - Shipper Solutions → `/solutions/logistics/shippers`
   
   - **Carriers** (Nested Collapsible)
     - Carrier Solutions → `/solutions/logistics/carriers`
     - Become a Carrier → `/solutions/logistics/carriers`
     - EDI Connectivity → `/solutions/connect`

#### 2. **Solutions** (Collapsible)
   - **Integration & Connectivity** (Nested Collapsible)
     - System Integration (ERP/TMS/WMS) → `/solutions/connect`
     - EDI Connectivity → `/solutions/connect`
     - API Connectivity → `/solutions/connect`
     - Carrier & Partner Onboarding → `/solutions/connect`
     - **TMS Solutions** (Section Header)
       - Oracle Transportation Management (OTM) → `/solutions/connect/tms`
       - SAP TM → `/solutions/connect/tms`
       - Blue Yonder → `/solutions/connect/tms`
   
   - **Technology Services** (Nested Collapsible)
     - Supply Chain Data Engineering → `/solutions/technology`
     - Visibility & Telemetry → `/solutions/technology`
     - Analytics & Reporting → `/solutions/technology`

#### 3. **Industries** (Collapsible)
   - Building Materials → `/industries`
   - Retail & E-Commerce → `/solutions/retail`
   - Manufacturers → `/solutions/manufacturers`
   - Chemicals → `/industries`
   - Oil & Gas → `/industries`
   - Medical Devices & Equipment → `/industries`

#### 4. **Insights** (Collapsible)
   - Blog → `/resources`
   - Case Studies → `/resources`
   - Whitepapers → `/resources`

#### 5. **Company** (Collapsible)
   - About → `/about`
   - Leadership → `/about#leadership`
   - Why Pathwell → `/why-pathwell`
   - Careers → `/careers`

#### 6. **Contact** (Link)
   - Contact → `/contact`

---

## Page Routes Summary

### Main Pages
- `/` - Homepage
- `/contact` - Contact page

### Solutions Pages
- `/solutions/logistics` - Logistics solutions
- `/solutions/logistics/shippers` - Shipper solutions
- `/solutions/logistics/carriers` - Carrier solutions
- `/solutions/connect` - Integration & connectivity
- `/solutions/connect/tms` - TMS solutions
- `/solutions/connect/parcel` - Parcel optimization
- `/solutions/technology` - Technology services
- `/solutions/retail` - Retail & e-commerce solutions
- `/solutions/manufacturers` - Manufacturing solutions

### Industry Pages
- `/industries` - Industries overview page

### Resources Pages
- `/resources` - Resources (Blog, Case Studies, Whitepapers)

### Company Pages
- `/about` - About page
- `/why-pathwell` - Why Pathwell page
- `/careers` - Careers page

---

## Navigation Features

### Desktop
- Hover-activated dropdowns
- Nested sub-dropdowns (hover to reveal)
- Sticky navigation bar
- Primary blue color (`#42B0D5`) for branding and hover states

### Mobile
- Hamburger menu toggle
- Collapsible sections with nested support
- Touch-friendly interface
- Full-width mobile menu overlay

---

## Notes

- All dropdowns use smooth transitions and hover effects
- Mobile navigation uses state management for collapsible sections
- Contact button is styled as a CTA (primary blue background)
- Navigation is responsive and works across all device sizes
- All links use Next.js `Link` component for client-side navigation
