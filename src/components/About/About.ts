export default function About() {
  return `<div class="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24"> 
        <div>
            <h1 class="text-3xl font-bold">
            Hi there, I'm
            <span
                class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
                >Viet</span
            >
            👋
            </h1>
            <p class="mt-6 text-xl leading-9">
                I'm a front-end developer who can code all day without getting tired.

                I started learning to code more than one year ago.
                
                In the past year, I have been very focused on learning front-end web
                programming. Now I am very confident that my abilities can meet your
                requirements.
            </p>
            <div class="mt-3 flex gap-1">
            <a href="/demo/astro-boilerplate"
                ><img
                class="h-12 w-12 hover:translate-y-1"
                src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/twitter-icon.png"
                alt="Twitter icon"
                loading="lazy" /></a
            ><a href="/demo/astro-boilerplate"
                ><img
                class="h-12 w-12 hover:translate-y-1"
                src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/twitter-icon.png"
                alt="Facebook icon"
                loading="lazy" /></a
            ><a href="/demo/astro-boilerplate"
                ><img
                class="h-12 w-12 hover:translate-y-1"
                src="	https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/linkedin-icon.png"
                alt="Linkedin icon"
                loading="lazy" /></a
            ><a href="/demo/astro-boilerplate"
                ><img
                class="h-12 w-12 hover:translate-y-1"
                src="	https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/youtube-icon.png
                "
                alt="Youtube icon"
                loading="lazy"
            /></a>
            </div>
            <div class="mt-5">
               <a href="../../assets/CV_NguyenTrongViet.pdf" download="VietCV">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Dowload My CV</button>
                </a>
            </div>
        </div>
        <div class="shrink-0">
            <img
            class="h-80 w-64"
            src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/avatar.svg"
            alt="Avatar image"
            loading="lazy"
            />
        </div>
    </div>`;
}
