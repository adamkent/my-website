# Adam Kent - Personal Resume Website

## Modern React Portfolio & Resume Site

This is a modernized ReactJS-based personal resume website, updated to use the latest React 18 features and modern development practices.

## Recent Updates (2025)

### Modernization
- ✅ Upgraded to **React 18** with modern hooks (useState, useEffect)
- ✅ Converted all class components to **functional components**
- ✅ Removed jQuery dependency, replaced with native **fetch API**
- ✅ Updated to **React GA4** for analytics
- ✅ Implemented React 18's **createRoot** API
- ✅ Added modern CSS with smooth transitions and animations
- ✅ Enhanced accessibility and responsive design
- ✅ Improved performance and code maintainability

### Content Updates
- Updated professional experience including PetLabCo, Zifo, Bank of America, and UK Government roles
- Added SmarterGovs.org project highlighting AI in governance work
- Refreshed skills section with modern tech stack (FastAPI, Next.js, Terraform, Docker/K8s)
- Updated education and contact information

## Description
This is a ReactJS based personal resume website. Data is fed directly from a JSON file (`public/resumeData.json`), making it easy to customize with your own information. The site features a modern, responsive design with smooth animations and transitions.

## Getting Started

### Prerequisites
- Node.js >= 14.x
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update your information**
   - Edit `public/resumeData.json` with your personal information
   - Replace images in `public/images/` with your own
   - Update Google Analytics ID in `src/App.js` (line 17)

4. **Run the development server**
   ```bash
   npm start
   ```
   The site will open at [http://localhost:3000](http://localhost:3000)

5. **Build for production**
   ```bash
   npm run build
   ```

### Deployment
This site is configured for AWS Amplify deployment from GitHub. Simply push your changes to GitHub and Amplify will automatically build and deploy.

For other platforms:
- **Netlify**: Connect your GitHub repo and deploy
- **Vercel**: Import your GitHub repo
- **GitHub Pages**: Run `npm run deploy`

## Customization

### Update Resume Data
Edit `public/resumeData.json` to update:
- Personal information (name, email, phone)
- Professional experience
- Education
- Skills
- Projects
- Social media links

### Styling
- Modern CSS is in `src/App.css` and `src/index.css`
- Original theme styles are in `public/css/`
- Customize colors, fonts, and layouts as needed


## Credits
##### Udemy Course
<a href="https://www.udemy.com/projects-in-reactjs-the-complete-react-learning-course/learn/v4/overview">Projects in ReactJS: The Complete React Learning Course by Eduonix</a>

#### HTML Design Template
<a href="https://www.styleshout.com/free-templates/ceevee/">Ceevee Template by Styleshout</a>

##### Header photo credit
<a href="https://unsplash.com/@mischievous_penguins?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Casey Horner</a>

##### Reference photo credit
<a href="https://unsplash.com/@samuelzeller?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Samuel Zeller</a>
