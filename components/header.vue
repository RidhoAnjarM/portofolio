<template>
  <header
    class="bg-primary absolute top-0 left-0 w-full flex items-center h-[90px] lg:bg-transparent lg:h-[125px] lg:right-[100px]">
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4 lg:ps-[100px] lg:pe-[100px]">
          <a href="#home"
            class=""><img src="~/assets/img/logo.png" alt="" class="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]" ></a>
        </div>
        <div class="flex items-center px-4">
          <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
            <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span class="hamburger-line transition duration-300 ease-in-out"></span>
            <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>

          <nav id="nav-menu"
            class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
            <ul class="block lg:flex">
              <li class="group">
                <NuxtLink to="/"
                  class="text-base text-black py-2 mx-8 flex lg:bg-primary lg:h-[40px] lg:w-[115px] lg:rounded-[50px] lg:items-center lg:justify-center lg:ms-[50px] lg:mx-0 group-hover:lg:text-white group-hover:lg:bg-secondary duration-500 ease-in-out lg:border-black lg:border-[1px] lg:font-bold font-space-grotesk">
                  HOME</NuxtLink>
              </li>
              <li class="group">
                <NuxtLink to="#about"
                  class="text-base text-black py-2 mx-8 flex lg:bg-primary lg:h-[40px] lg:w-[115px] lg:rounded-[50px] lg:items-center lg:justify-center lg:ms-[50px] lg:mx-0 group-hover:lg:text-white group-hover:lg:bg-secondary duration-500 ease-in-out lg:border-black lg:border-[1px] lg:font-bold font-space-grotesk">
                  ABOUT</NuxtLink>
              </li>
              <li class="group">
                <NuxtLink to="#project"
                  class="text-base text-black py-2 mx-8 flex lg:bg-primary lg:h-[40px] lg:w-[115px] lg:rounded-[50px] lg:items-center lg:justify-center lg:ms-[50px] lg:mx-0 group-hover:lg:text-white group-hover:lg:bg-secondary duration-500 ease-in-out lg:border-black lg:border-[1px] lg:font-bold font-space-grotesk">
                  PROJECT
                </NuxtLink>
              </li>
              <li class="group">
                <NuxtLink to="#contact"
                  class="text-base text-black py-2 mx-8 flex lg:bg-primary lg:h-[40px] lg:w-[115px] lg:rounded-[50px] lg:items-center lg:justify-center lg:ms-[50px] lg:mx-0 group-hover:lg:text-white group-hover:lg:bg-secondary duration-500 ease-in-out lg:border-black lg:border-[1px] lg:font-bold font-space-grotesk lg:me-[100px] ">
                  CONTACT
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  mounted() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    });

    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
      });
    } else {
      console.error("Element with ID 'hamburger' or 'nav-menu' not found.");
    }
  }
}
</script>
