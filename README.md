# Bright - Next.js

This is a modern early education site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

This template is built with **Next.js v13.4** and **Tailwind CSS v3**, leveraging the latest [App Router](https://nextjs.org/docs/app) and server component functionalities.

## Getting Started

Unzip and open the folder of the theme with your editor of choice.

First, install the dependencies. Navigate to the project directory in your terminal and run:

```bash
npm install
# or
yarn install  # if you have Yarn installed
```

This will install all required dependencies and place them in a folder called `node_modules` in the root directory.

Once the dependencies are installed, you can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the website.

## File Structure

All of the code for this template is located in the `/src` folder. The folder contains the following:

- `components` - Directory of reusable components
- `app` - Contains the site route components and layouts
- `styles` - Contains the entry point CSS file for Tailwind CSS
- `data` - Contains the website's content stored in markdown files.
- `lib` - Contains `getItems.js` which defines various data fetching functions for the site's content.

Note that in order to more concisely import components, we defined a module path alias to the `/src` directory inside the `jsconfig.json` file at the root of our project. To learn more about module aliases you can check out [Vercel's documentation](https://nextjs.org/docs/advanced-features/module-path-aliases) on the subject.

## Tailwind CSS

This theme uses the latest version of Tailwind CSS: v3.3.

Tailwind CSS and its dependencies were installed via npm as recommended by the official [Tailwind installation docs for next.js](https://tailwindcss.com/docs/guides/nextjs). If you are not familiar with the Tailwind CSS framework, I would recommend checking out the [Tailwind documentation](https://tailwindcss.com/docs).

You can find the `tailwind.config.js` and `postcss.config.js` files at the root of the directory. You'll find the primary CSS file at `src/styles/tailwind.css`, which includes the `@tailwind` directives. The stylsheet also includes a handful of custom typography classes for headings which use Tailwind’s @apply directive to extract repeated patterns.

We have made an effort to streamline our CSS by primarily using Tailwind's utility classes, supplementing with just a few custom classes that are defined within the `tailwind.config.js` file. Our project includes a unique color palette and a custom typography theme, designed for both light and dark prose content. Furthermore, we have integrated three official Tailwind plugins: `@tailwindcss/forms`, `@tailwindcss/aspect-ratio`, and `@tailwindcss/typography`.

## Content

The template includes various types of organized content such as events, FAQs, gallery images, newsletters, programs, staff members, and testimonials. Each content type is stored in corresponding markdown files within the `src/data/<item-type>` directory. To handle this data, Bright uses [gray-matter](https://github.com/jonschlinkert/gray-matter) for reading data from the frontmatter of the markdown files and [marked](https://github.com/markedjs/marked) for parsing and compiling the markdown content.

In particular for programs, every program content file has a corresponding `/programs/<program>` page in the site where `<program>` is the name of the file.

### Adding new programs

All of the programs have data of the following form:

```markdown
---
name: Elementary School
dropdownDescription: Curabitur non nulla sit amet nisl tempu convallis quis ac lectus.
featured: true
hero:
  tagline: Where great kids grow
  headline: Bright's Elementary School Program
  text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at in.
  action:
    label: Enroll today
    href: "#"
    icon: true
  image:
    src: "/images/stock/elementary-school.jpg"
infoSection:
  headline: The Elementary School dedicated to your child's success
  text: Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
  ages: 4 - 5 years old
  dates: Jan. 13 - Jun. 31
  schedule: M-F from 8AM - 5 PM
  classSize: Student to teacher ratio of 10:1
descriptionSection:
  text: >
    ## Our unique approach to education
            
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut. Id porta nibh venenatis cras sed felis eget velit. Ut morbi tincidunt augue interdum velit. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Viverra orci sagittis eu volutpat odio facilisis mauris. Diam quis enim lobortis scelerisque fermentum. Viverra mauris in aliquam sem fringilla. 
        
    ### What they will learn
          
    * Vivamus suscipit tortor eget felis porttitor volutpat.

    * Nulla porttitor accumsan tincidunt.

    * Vivamus magna justo, lacinia eget consectetur sed.

    * Lorem ipsum dolor sit amet

    * Ut enim ad minim veniam


    Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Viverra vitae congue eu consequat ac felis donec et odio. Euismod nisi porta lorem mollis aliquam ut porttitor. Sed nisi lacus sed viverra tellus. Augue lacus viverra vitae congue eu consequat ac felis donec. Elementum pulvinar etiam non quam lacus. Ut venenatis tellus in metus vulputate. Ultrices dui sapien eget mi proin sed libero enim. Id velit ut tortor pretium viverra suspendisse.
  portraitImage: "/images/stock/program-description-01.jpg"
  squareImage1: "/images/stock/program-description-02.jpg"
  squareImage2: "/images/stock/program-description-03.jpg"
pricingSection:
  tagline: Our Elementary School Plans
  headline: A program for every parent and child
  text: We know you care about your child's future. That’s why we offer you the freedom to choose the right program for them.
  pricing1:
    name: Regular
    price: $1.2k
    interval: per month
    shortDescription: M-F from 8 AM to 3:00 PM
    features:
      - feature: Nulla quis lorem ut libero
      - feature: Lorem ipsum dolor sit
    action:
      label: Enroll today
      href: "#"
      icon: true
  pricing2:
    name: Extended
    price: $1.5k
    interval: per month
    shortDescription: M-F from 8 AM to 5:00 PM
    features:
      - feature: Nulla quis lorem ut libero
      - feature: Lorem ipsum dolor sit
    action:
      label: Enroll today
      href: "#"
      icon: true
---
```

Every program has page data fields (`hero`, `infoSection`, `descriptionSection`, and `pricingSection`) corresponding to sections and components within the program dynamic route page in `app/programs/[slug]/page.jsx`. Every section is optional and is conditionally rendered in the dynamic route component:

```
export default function ProgramPage({ params: { slug } }) {
  const program = getItemData(slug, "programs");

  return (
    <>
      {program?.hero && <ProgramHero hero={program.hero} />}
      {program?.infoSection && (
        <ProgramInformation data={program.infoSection} />
      )}
      {program?.descriptionSection && (
        <ProgramDescription data={program.descriptionSection} />
      )}
      {program?.pricingSection && (
        <ProgramPricing data={program.pricingSection} />
      )}
    </>
  );
}
```

## Font

This template uses the following Google fonts:

- [Roboto Flex](https://fonts.google.com/specimen/Roboto+Flex)
- [Gochi Hand](https://fonts.google.com/specimen/Gochi+Hand)

Bright uses the new Next.js font system with `next/font` which allows you to conveniently use all Google Fonts while prioritizing performance and privacy.

## Icons

The icons used for this theme are part of the [Tabler Icons](https://github.com/tabler/tabler-icons) sets that are free to use and published under the MIT License.

## Images

All of the images used in the template are free to use and are either from [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), or custom-made.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) made by the same creators of Next.js.

Check out their [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This site template is a commercial product and is licensed under the [Tailwind Awesome license](https://www.tailwindawesome.com/license).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Additional Help

If you need additional help setting up the template or have any questions, feel free to contact me at <rodrigo@tailwindawesome.com>.
